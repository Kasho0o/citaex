export function trackEvent(
  eventName: string,
  params?: Record<string, string | number>
) {
  if (typeof window === "undefined") return;
  (window as any).gtag?.("event", eventName, params || {});
}
