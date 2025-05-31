import { create } from 'zustand';

export const useStore = create((set) => ({
  cookiesAccepted: false,
  setCookiesAccepted: (cookiesAccepted) => set({ cookiesAccepted }),
  showCookieConsent: true,
  setShowCookieConsent: (showCookieConsent) => set({ showCookieConsent }),
}));
