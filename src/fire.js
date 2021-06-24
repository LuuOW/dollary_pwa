var deferredPrompt;

function openCreatePostModel() {
    if (deferredPrompt) {
        //console.log("4");
        console.log("entro para el baner");
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then(function (choiceResult) {
            //console.log(choiceResult.outcome);
            if (choiceResult.outcome === 'dismissed') {
                console.log("User canceled the installation");
            } else {
                console.log("User added to home screen");
            }
        });
        deferredPrompt = null;
    }
}

(function () {
    'use strict';
    var app = {
    };
    // TODO add service worker code here
    if ('serviceWorker' in navigator) {
        //console.log("app aqui si regsw");
        navigator.serviceWorker
            //.register('/info/pwa/service-worker.js')
            .register('/info/pwa/serviceWorker-EDET.js')
            .then(function () { console.log('Service Worker Registered'); });
    }
    //console.log("2");
    window.addEventListener('beforeinstallprompt', function (event) {
        //console.log("beforeinstallprompt fired");
        //event.preventDefault();
        deferredPrompt = event;
        openCreatePostModel();
        return false;
    });
})();
