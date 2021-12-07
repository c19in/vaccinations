if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"a0e3caa14887138ada38341316cb6e34","url":"404.html"},{"revision":"6355d269b5eacd5a724a6f23fbf69508","url":"cb548dc0ea0646b5bc99.worker.js"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"a0e3caa14887138ada38341316cb6e34","url":"index.html"},{"revision":"0f451eaa34102d0646cd42434affd8a0","url":"static/css/19.bded3b46.chunk.css"},{"revision":"cb9615687ee710b9cf130a8998e9faea","url":"static/css/2.6c493df4.chunk.css"},{"revision":"af5d5eca98c8633059b4836595f94888","url":"static/css/20.371c3fc8.chunk.css"},{"revision":"b6af13b647364793a4bd4f80245041db","url":"static/js/0.aa09b5bf.chunk.js"},{"revision":"609996ebd1f1a719cdf38896f10aa770","url":"static/js/1.36992424.chunk.js"},{"revision":"3570b358ba7c2033b5f50f860014361e","url":"static/js/11.7e58f67d.chunk.js"},{"revision":"ffeae5a0c21cac8f60c0c8464a67e9b7","url":"static/js/12.3424e837.chunk.js"},{"revision":"2a27cc1b23efb1719cc24f7a09500a0e","url":"static/js/13.d398b361.chunk.js"},{"revision":"5b4817589e6873cbf57ffd2cfab4e554","url":"static/js/14.17c7b666.chunk.js"},{"revision":"f7096c9ff04f0d05bd55a18536c0559a","url":"static/js/15.30a332e0.chunk.js"},{"revision":"abc20a92f4f480d3aeb276736320b541","url":"static/js/16.decd22c2.chunk.js"},{"revision":"c3bc1609dc0d6ab9ea1ad2befbfd3232","url":"static/js/17.ec986044.chunk.js"},{"revision":"dfa0b577de9d44da66bc5c4239e0d91e","url":"static/js/18.2cdf6c3f.chunk.js"},{"revision":"3fd0e6b68e0d38184f9659119a1fef23","url":"static/js/19.6e2e07aa.chunk.js"},{"revision":"035e5245e528172da50e7e914be969f6","url":"static/js/2.4a395554.chunk.js"},{"revision":"1db1eaab2d4813ff6e0cc63262c8d1a9","url":"static/js/20.cfdd32ff.chunk.js"},{"revision":"8e8f50efec4b22515ad5e5ebdc04cbcc","url":"static/js/21.36f29d20.chunk.js"},{"revision":"2ecf618a624c09010263ef0fa23708de","url":"static/js/22.e1176a3e.chunk.js"},{"revision":"a838c9649b8eea3d8e31ffa37589779c","url":"static/js/23.668b9e76.chunk.js"},{"revision":"e27537f8c45b019ee55c95919828d813","url":"static/js/24.07116dd5.chunk.js"},{"revision":"3a64949f14ff4d6d85f00c998d029263","url":"static/js/25.257dc67e.chunk.js"},{"revision":"5a16e0347420f5b4771677a615fa1981","url":"static/js/26.a9516ca5.chunk.js"},{"revision":"59640c1b3f71d4f057d9674dc1a43461","url":"static/js/27.fd37fd31.chunk.js"},{"revision":"23d7377f5a72d5a47a0a4a275538baa3","url":"static/js/28.e73d79e3.chunk.js"},{"revision":"46f9e41256bfd5c4024acff5103a728b","url":"static/js/29.722095b3.chunk.js"},{"revision":"5dbf2cdf09a095bc2b3b71d767d57c3f","url":"static/js/3.873a3825.chunk.js"},{"revision":"62e05dfb293048cf0380a51ec02cba77","url":"static/js/30.62dd6bf0.chunk.js"},{"revision":"1e3eb22ffbc0581421e27c7e550e00cf","url":"static/js/31.04fb820a.chunk.js"},{"revision":"f0d5a628ddf32deb54d7dc01b0ca50b1","url":"static/js/32.dd1e4cb3.chunk.js"},{"revision":"c2ab003970729d8b7643317d91933516","url":"static/js/33.3b35bbb4.chunk.js"},{"revision":"5ce3e82e10c75e8242341ff42ba18bf9","url":"static/js/34.877a2bb7.chunk.js"},{"revision":"b97f4bb4140de0e79e2e5ecb9ad2fa93","url":"static/js/35.97120408.chunk.js"},{"revision":"2f92feeb91c94dc5b072868bf8d0cfcd","url":"static/js/36.d69058ab.chunk.js"},{"revision":"c8b0ffdd96bd418acf355dd582834035","url":"static/js/37.11635b6f.chunk.js"},{"revision":"ca116e027d5ef067f515b133e86604e3","url":"static/js/38.29daca0c.chunk.js"},{"revision":"548fbce6aa6d5e37ffc3203f0708529b","url":"static/js/39.f7db036b.chunk.js"},{"revision":"cd874be50456b9cc3e809a3aac8b24bc","url":"static/js/4.31a30723.chunk.js"},{"revision":"492b2ce524c7077f225e3faa223fec33","url":"static/js/40.138ac113.chunk.js"},{"revision":"80d934db79f7797f2b3bb3510c7de877","url":"static/js/41.68868ae4.chunk.js"},{"revision":"cbe740acaad0b60ddc827a5634260157","url":"static/js/42.f4f99f14.chunk.js"},{"revision":"30ba2e2fa2b8fbf74e01bfcbdeaf4001","url":"static/js/43.880cc3ec.chunk.js"},{"revision":"251b6ba04b68a340487361c00881cf5c","url":"static/js/44.aacf341f.chunk.js"},{"revision":"af7527df67845ce225a20b379cc3aa25","url":"static/js/5.5bf37431.chunk.js"},{"revision":"0055952e8b7e6679dd41e0781fb2920f","url":"static/js/6.7a5420cd.chunk.js"},{"revision":"7f4006cf194e0b64bc1df4fe326dedfa","url":"static/js/7.b60df5a3.chunk.js"},{"revision":"829d7b3b7f03c85c32cef8cd0123c180","url":"static/js/8.ec9f69f7.chunk.js"},{"revision":"8ca7fbeca48e8328ea2956f2af48b65a","url":"static/js/main.cce66eb6.chunk.js"},{"revision":"e466053baf0a78afc9d0830b304c9b8f","url":"static/js/runtime-main.715cf571.js"}]);

    /* custom cache rules */
    workbox.routing.registerRoute(
      new workbox.routing.NavigationRoute(
        new workbox.strategies.NetworkFirst({
          cacheName: 'PRODUCTION',
        })
      )
    );

    // Adding staleWhileRevalidate for all js files. Provide faster access from cache while revalidating in the background
    workbox.routing.registerRoute(
      /.*\.js$/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding staleWhileRevalidate for all html files
    workbox.routing.registerRoute(
      /.*\.html/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding staleWhileRevalidate for all css files
    workbox.routing.registerRoute(
      /.*\.css/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding networkFirst for all json data. In offline mode will be fetched from cache
    workbox.routing.registerRoute(
      new RegExp('https://data\\.incovid19\\.org/.*\\.json'),
      new workbox.strategies.NetworkFirst(),
      'GET'
    );
  } else {
    console.log('Workbox could not be loaded. Hence, no offline support.');
  }
}
