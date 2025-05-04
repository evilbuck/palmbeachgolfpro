export const GA_MEASUREMENT_ID = 'G-651NQTJ8T1';

export const pageview = (url) => {
  if (typeof window.gtag !== 'function') return;
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: url,
  });
}; 