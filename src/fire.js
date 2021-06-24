var deferredPrompt;

function openCreatePostModel() {
    if (deferredPrompt) {
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
    window.addEventListener('beforeinstallprompt', function (event) {
        deferredPrompt = event;
        openCreatePostModel();
        return false;
    });
})();
