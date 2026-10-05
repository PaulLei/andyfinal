import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  allAcceptedConsent,
  applyConsent,
  applyGpcLimits,
  defaultConsent,
  hasGlobalPrivacyControl,
  loadStoredConsent,
  persistConsent,
  type ConsentCategories,
} from "../lib/consent";

type ConsentContextValue = {
  ready: boolean;
  hasDecision: boolean;
  preferencesOpen: boolean;
  gpcEnabled: boolean;
  categories: ConsentCategories;
  acceptAll: () => void;
  rejectNonEssential: () => void;
  savePreferences: (next: ConsentCategories) => void;
  openPreferences: () => void;
  closePreferences: () => void;
};

const ConsentContext = createContext<ConsentContextValue | null>(null);

export function ConsentProvider({ children }: { children: ReactNode }) {
  const [ready, setReady] = useState(false);
  const [hasDecision, setHasDecision] = useState(false);
  const [preferencesOpen, setPreferencesOpen] = useState(false);
  const [categories, setCategories] = useState<ConsentCategories>(defaultConsent);
  const [gpcEnabled, setGpcEnabled] = useState(false);

  useEffect(() => {
    const gpc = hasGlobalPrivacyControl();
    setGpcEnabled(gpc);

    const stored = loadStoredConsent();
    if (stored) {
      const next = applyGpcLimits(stored.categories);
      setCategories(next);
      setHasDecision(true);
      applyConsent(next);
      if (gpc && (stored.categories.analytics || stored.categories.marketing)) {
        persistConsent(next);
      }
    } else {
      applyConsent(applyGpcLimits(defaultConsent));
    }
    setReady(true);
  }, []);

  useEffect(() => {
    const open = () => setPreferencesOpen(true);
    window.addEventListener("nls-open-cookie-settings", open);
    return () => window.removeEventListener("nls-open-cookie-settings", open);
  }, []);

  const acceptAll = useCallback(() => {
    const next = persistConsent(allAcceptedConsent);
    setCategories(next.categories);
    setHasDecision(true);
    setPreferencesOpen(false);
  }, []);

  const rejectNonEssential = useCallback(() => {
    const next = persistConsent(defaultConsent);
    setCategories(next.categories);
    setHasDecision(true);
    setPreferencesOpen(false);
  }, []);

  const savePreferences = useCallback((nextCategories: ConsentCategories) => {
    const next = persistConsent({ ...nextCategories, necessary: true });
    setCategories(next.categories);
    setHasDecision(true);
    setPreferencesOpen(false);
  }, []);

  const value = useMemo(
    () => ({
      ready,
      hasDecision,
      preferencesOpen,
      gpcEnabled,
      categories,
      acceptAll,
      rejectNonEssential,
      savePreferences,
      openPreferences: () => setPreferencesOpen(true),
      closePreferences: () => setPreferencesOpen(false),
    }),
    [
      ready,
      hasDecision,
      preferencesOpen,
      gpcEnabled,
      categories,
      acceptAll,
      rejectNonEssential,
      savePreferences,
    ]
  );

  return (
    <ConsentContext.Provider value={value}>{children}</ConsentContext.Provider>
  );
}

export function useConsent() {
  const ctx = useContext(ConsentContext);
  if (!ctx) {
    throw new Error("useConsent must be used within ConsentProvider");
  }
  return ctx;
}
