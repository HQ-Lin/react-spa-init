const swConfig = require('../config/sw-config');

// Register Service worker
(function(serviceWorkerFilename) {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker
            .register(serviceWorkerFilename)
            .then(() => {
                console.log('Service worker registered!');
            }).catch((error) => {
                console.log('Error registering service worker: ', error);
            });
    } else {
        console.log('Not supported by browser');
    }
})(swConfig.filename);
