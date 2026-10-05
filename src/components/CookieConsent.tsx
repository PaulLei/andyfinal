import { useEffect, useId, useState } from "react";
import { Link } from "react-router-dom";
import { useConsent } from "../context/ConsentContext";
import type { ConsentCategories } from "../lib/consent";

function Toggle({
  id,
  checked,
  disabled,
  label,
  description,
  onChange,
}: {
  id: string;
  checked: boolean;
  disabled?: boolean;
  label: string;
  description: string;
  onChange?: (value: boolean) => void;
}) {
  return (
    <div className="flex items-start justify-between gap-4 border-b border-white/10 py-4 last:border-b-0">
      <div>
        <label htmlFor={id} className="text-sm font-medium text-white">
          {label}
        </label>
        <p className="mt-1 text-sm font-light leading-6 text-white/65">
          {description}
        </p>
      </div>
      <input
        id={id}
        type="checkbox"
        role="switch"
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange?.(e.target.checked)}
        className="mt-1 h-4 w-4 shrink-0 cursor-pointer rounded border-white/30 disabled:cursor-not-allowed"
        style={{ accentColor: "#facc15" }}
        aria-checked={checked}
      />
    </div>
  );
}

export default function CookieConsent() {
  const {
    ready,
    hasDecision,
    preferencesOpen,
    gpcEnabled,
    categories,
    acceptAll,
    rejectNonEssential,
    savePreferences,
    openPreferences,
    closePreferences,
  } = useConsent();

  const titleId = useId();
  const [draft, setDraft] = useState<ConsentCategories>(categories);

  useEffect(() => {
    if (preferencesOpen) {
      setDraft(categories);
    }
  }, [preferencesOpen, categories]);

  useEffect(() => {
    if (!preferencesOpen) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closePreferences();
    };

    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [preferencesOpen, closePreferences]);

  if (!ready) return null;

  const showBanner = !hasDecision && !preferencesOpen;

  return (
    <>
      {showBanner && (
        <div
          role="dialog"
          aria-modal="false"
          aria-labelledby={titleId}
          className="fixed inset-x-0 bottom-0 z-[70] p-4 sm:p-6"
        >
          <div className="mx-auto max-w-5xl rounded-2xl border border-white/10 bg-black px-5 py-5 text-white shadow-2xl sm:px-7 sm:py-6">
            <h2 id={titleId} className="text-base font-medium tracking-tight">
              Cookie and privacy choices
            </h2>
            <p className="mt-2 max-w-3xl text-sm font-light leading-6 text-white/70">
              We use necessary cookies to run this website. Optional cookies
              help us understand usage and support communications, and are used
              only if you allow them. You can accept all, reject optional
              cookies, or choose categories. If your browser sends a Global
              Privacy Control signal, we treat that as a request to keep
              analytics and marketing cookies off. See our{" "}
              <Link to="/privacy" className="underline underline-offset-4">
                Privacy Policy
              </Link>{" "}
              and{" "}
              <Link to="/cookies" className="underline underline-offset-4">
                Cookie Policy
              </Link>
              .
            </p>
            <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center">
              <button
                type="button"
                onClick={acceptAll}
                className="inline-flex items-center justify-center rounded-full bg-yellow-400 px-5 py-2.5 text-[11px] uppercase tracking-[0.22em] text-black transition-colors hover:bg-yellow-300"
              >
                Accept all
              </button>
              <button
                type="button"
                onClick={rejectNonEssential}
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-5 py-2.5 text-[11px] uppercase tracking-[0.22em] text-white transition-colors hover:border-white/40"
              >
                Reject optional
              </button>
              <button
                type="button"
                onClick={openPreferences}
                className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-[11px] uppercase tracking-[0.22em] text-white/80 underline-offset-4 hover:text-white hover:underline"
              >
                Cookie settings
              </button>
            </div>
          </div>
        </div>
      )}

      {preferencesOpen && (
        <div className="fixed inset-0 z-[80] flex items-end justify-center p-4 sm:items-center">
          <button
            type="button"
            className="absolute inset-0 bg-black/50"
            aria-label="Close cookie settings"
            onClick={closePreferences}
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={`${titleId}-prefs`}
            className="relative z-10 w-full max-w-lg rounded-2xl border border-white/10 bg-black p-6 text-white shadow-2xl"
          >
            <h2
              id={`${titleId}-prefs`}
              className="text-lg font-medium tracking-tight"
            >
              Cookie settings
            </h2>
            <p className="mt-2 text-sm font-light leading-6 text-white/70">
              Necessary cookies are always on. Optional categories stay off
              unless you enable them. You can change this later from the footer.
              {gpcEnabled
                ? " Your browser’s Global Privacy Control signal is on, so analytics and marketing stay off."
                : ""}
            </p>

            <div className="mt-2">
              <Toggle
                id="cookie-necessary"
                checked
                disabled
                label="Necessary"
                description="Required for security, page navigation, form delivery, and remembering your cookie choice."
              />
              <Toggle
                id="cookie-functional"
                checked={draft.functional}
                onChange={(functional) => setDraft((d) => ({ ...d, functional }))}
                label="Functional"
                description="Optional features that remember preferences or improve site behavior."
              />
              <Toggle
                id="cookie-analytics"
                checked={draft.analytics}
                disabled={gpcEnabled}
                onChange={(analytics) => setDraft((d) => ({ ...d, analytics }))}
                label="Analytics"
                description="Help us understand how the site is used. Not loaded unless you allow this category."
              />
              <Toggle
                id="cookie-marketing"
                checked={draft.marketing}
                disabled={gpcEnabled}
                onChange={(marketing) => setDraft((d) => ({ ...d, marketing }))}
                label="Marketing"
                description="Used only if we later run advertising or remarketing tags, and only with your permission."
              />
            </div>

            <p className="mt-4 text-xs font-light leading-5 text-white/50">
              California residents: we do not sell or share personal information
              as those terms are defined under the CPRA. You can still limit
              optional cookies here.
            </p>

            <div className="mt-5 flex flex-col gap-2 sm:flex-row">
              <button
                type="button"
                onClick={() => savePreferences(draft)}
                className="inline-flex flex-1 items-center justify-center rounded-full bg-yellow-400 px-5 py-2.5 text-[11px] uppercase tracking-[0.22em] text-black hover:bg-yellow-300"
              >
                Save choices
              </button>
              <button
                type="button"
                onClick={rejectNonEssential}
                className="inline-flex flex-1 items-center justify-center rounded-full border border-white/20 px-5 py-2.5 text-[11px] uppercase tracking-[0.22em] text-white hover:border-white/40"
              >
                Reject optional
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export function CookieSettingsButton({
  className,
  children = "Cookie Settings",
}: {
  className?: string;
  children?: string;
}) {
  const { openPreferences } = useConsent();

  return (
    <button type="button" onClick={openPreferences} className={className}>
      {children}
    </button>
  );
}
