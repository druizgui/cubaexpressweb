/*Cookies*/
var cookiesmode = null;
$(document).ready(function () {
    cookiesmode = localStorage.getItem('cookies-accept');

    if (!cookiesmode) {
        var el = document.getElementById('cookie-banner');
        el.style.display = 'block';
    }
});

function hide(obj) {
    var el = document.getElementById(obj);
    localStorage.setItem('cookies-accept', 'accepted');
    el.style.display = 'none';
}

/*GoogleAnalytics*/
window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date()); gtag('config', 'G-2E7PV4BMC4');

//document.addEventListener('DOMContentLoaded', function () {
//    if (!localStorage.getItem('cookiesAccepted')) {
//      document.getElementById('cookie-banner').style.display = 'block';
//    }
  
//    document.getElementById('accept-cookies').addEventListener('click', function() {
//      localStorage.setItem('cookiesAccepted', 'true');
//      document.getElementById('cookie-banner').style.display = 'none';
//      loadGoogleAnalytics();
//    });
//  });
  
//  function loadGoogleAnalytics() {
//    // Código de carga de GA4
//    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
//    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
//    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
//    })(window,document,'script','https://www.googletagmanager.com/gtag/js?id=TU_ID_DE_GA','ga');
  
//    window.dataLayer = window.dataLayer || [];
//    function gtag(){dataLayer.push(arguments);}
//    gtag('js', new Date());
  
//    gtag('config', 'TU_ID_DE_GA');
//  }
  