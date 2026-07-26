/* Phone + text tap conversion tracking (Google Ads AW-18345094900) */
(function () {
  if (window.__stfTapTracking) return; /* guard against double-binding */
  window.__stfTapTracking = true;
  document.addEventListener('click', function (e) {
    var link = e.target.closest ? e.target.closest('a[href^="tel:"], a[href^="sms:"]') : null;
    if (!link) return;
    if (typeof window.gtag === 'function') { /* no-op when gtag is absent */
      window.gtag('event', 'conversion', { 'send_to': 'AW-18345094900/W8FjCLGquNYcEPTdz6tE' });
    }
  }, true);
})();
