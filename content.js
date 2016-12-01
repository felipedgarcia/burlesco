var code = null;
if (/([^\/].)?oglobo\.globo\.com/.test(document.location.host))
    code = 'paywallAtivo = false;';

else if (/www\.economist\.com/.test(document.location.host))
    code = 'document.cookie = "ec_limit=allow";';

else if (/foreignpolicy\.com/.test(document.location.host))
    code = 'window.FPMarketingSettings.__meta.disable_paywall = true;';

if (code !== null) {
    var script = document.createElement('script');
    script.textContent = code;
    (document.head||document.documentElement).appendChild(script);
    script.parentNode.removeChild(script);
}