export const CONSENT_STORAGE_KEY = "nls_cookie_consent";
export const CONSENT_VERSION = "1";

export type ConsentCategories = {
  necessary: true;
  functional: boolean;
  analytics: boolean;
  marketing: boolean;
};

export type StoredConsent = {
  version: string;
  updatedAt: string;
  categories: ConsentCategories;
};

export const defaultConsent: ConsentCategories = {
  necessary: true,
  functional: false,
  analytics: false,
  marketing: false,
};

export const allAcceptedConsent: ConsentCategories = {
  necessary: true,
  functional: true,
  analytics: true,
  marketing: true,
};

export function loadStoredConsent(): StoredConsent | null {
  try {
    const raw = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;

    const parsed = JSON.parse(raw) as StoredConsent;
    if (!parsed?.categories || parsed.version !== CONSENT_VERSION) {
      return null;
    }

    return parsed;
  } catch {
    return null;
  }
}

export function hasGlobalPrivacyControl(): boolean {
  if (typeof navigator === "undefined") return false;
  return navigator.globalPrivacyControl === true;
}

export function applyGpcLimits(categories: ConsentCategories): ConsentCategories {
  if (!hasGlobalPrivacyControl()) return categories;
  return {
    ...categories,
    necessary: true,
    analytics: false,
    marketing: false,
  };
}

export function persistConsent(categories: ConsentCategories): StoredConsent {
  const record: StoredConsent = {
    version: CONSENT_VERSION,
    updatedAt: new Date().toISOString(),
    categories: applyGpcLimits({ ...categories, necessary: true }),
  };

  localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(record));
  applyConsent(record.categories);
  return record;
}

/**
 * Apply consent to third-party tags. This site currently does not load
 * analytics or advertising scripts until a category is enabled here.
 */
export function applyConsent(categories: ConsentCategories) {
  window.dispatchEvent(
    new CustomEvent("nls-consent-updated", { detail: categories })
  );

  if (!categories.analytics && !categories.marketing) {
    return;
  }
}

declare global {
  interface WindowEventMap {
    "nls-consent-updated": CustomEvent<ConsentCategories>;
    "nls-open-cookie-settings": Event;
  }
}
