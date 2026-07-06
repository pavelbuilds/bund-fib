import { create } from 'zustand';

const CONSENT_STORAGE_KEY = 'cookieConsent';

/**
 * Global client state for the cookie consent.
 *
 * `cookiesAccepted` gates third-party embeds (Calendly, Google Maps).
 * The user's choice is persisted in localStorage so the banner only
 * appears until a choice has been made; the footer's "Cookie
 * Einstellungen" button re-opens it via `setShowCookieConsent(true)`.
 */
export const useStore = create((set) => ({
  cookiesAccepted: false,
  // Starts hidden; CookieConsent calls loadStoredConsent() after mount and
  // shows the banner only when no stored choice exists (avoids SSR flicker).
  showCookieConsent: false,

  setShowCookieConsent: (showCookieConsent) => set({ showCookieConsent }),

  loadStoredConsent: () => {
    const stored = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    set({
      cookiesAccepted: stored === 'accepted',
      showCookieConsent: stored === null,
    });
  },

  acceptCookies: () => {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, 'accepted');
    set({ cookiesAccepted: true, showCookieConsent: false });
  },

  declineCookies: () => {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, 'declined');
    set({ cookiesAccepted: false, showCookieConsent: false });
  },
}));
