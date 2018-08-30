// service worker config
module.exports = {
    minify: true,
    cacheId: 'react-spa-init',
    filename: 'my-service-worker.js',
    staticFileGlobsIgnorePatterns: [/\.map$/]
};
