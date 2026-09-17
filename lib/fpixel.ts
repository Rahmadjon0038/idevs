export const FB_PIXEL_ID = "1729215661492310";

type Fbq = (...args: unknown[]) => void;

declare global {
  interface Window {
    fbq?: Fbq;
  }
}

export const pageview = () => {
  if (typeof window === "undefined" || !window.fbq) return;
  window.fbq("track", "PageView");
};

export const event = (name: string, options: Record<string, unknown> = {}) => {
  if (typeof window === "undefined" || !window.fbq) return;
  window.fbq("track", name, options);
};
