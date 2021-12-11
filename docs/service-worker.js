if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"1d68c0d3627e4aa70e60bbc24439d3fc","url":"404.html"},{"revision":"6355d269b5eacd5a724a6f23fbf69508","url":"cb548dc0ea0646b5bc99.worker.js"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"1d68c0d3627e4aa70e60bbc24439d3fc","url":"index.html"},{"revision":"1d23272d3465feea3a6d8066dbff23a3","url":"static/css/20.bded3b46.chunk.css"},{"revision":"7faf4ad830051a61aa773f8fe2939235","url":"static/css/22.371c3fc8.chunk.css"},{"revision":"d0a5dc033a59aa85e238b76f5024d4bc","url":"static/css/3.6c493df4.chunk.css"},{"revision":"b6af13b647364793a4bd4f80245041db","url":"static/js/0.aa09b5bf.chunk.js"},{"revision":"c9ce35eb40a06f22adc1943cc04efd27","url":"static/js/1.fe689df7.chunk.js"},{"revision":"833c3f975bd6f8f1ab872a3d2853f5ce","url":"static/js/10.5195644f.chunk.js"},{"revision":"468a5fd878ebbd36e8a18e9dfb37a194","url":"static/js/13.355a9936.chunk.js"},{"revision":"e8a51f75ac15f00df6087f5da3c8a227","url":"static/js/14.cbaf4a8a.chunk.js"},{"revision":"62eb4742a7067efc40e13c27a88d8bd7","url":"static/js/15.20f3584c.chunk.js"},{"revision":"109b84fb21ae1f36aa87aae9384fce8f","url":"static/js/16.23326dc6.chunk.js"},{"revision":"17d898b03035e7b701f8fc83df8c6827","url":"static/js/17.0fb157e1.chunk.js"},{"revision":"94351d5e8bc343e74835a20cb88e3df9","url":"static/js/18.2e0ed421.chunk.js"},{"revision":"c9ef377254e737800ce9279ea0b60af8","url":"static/js/19.9ffcafda.chunk.js"},{"revision":"ce2e351d2bfe14ba35811f15c1a3798c","url":"static/js/2.f5d09d06.chunk.js"},{"revision":"a789e0191c5f8826853f48da5e2d8a34","url":"static/js/20.48fdd299.chunk.js"},{"revision":"8283e69e0bf05a0f726a17dde55a8fb4","url":"static/js/21.db889944.chunk.js"},{"revision":"e19e64435e86c188bb2d4b6bdf8cd9cd","url":"static/js/22.93ea96b7.chunk.js"},{"revision":"aae289d3a83df98e4a770c4569fe16b7","url":"static/js/23.1950e2ab.chunk.js"},{"revision":"c8f6244ffd61f2f412191a3545319377","url":"static/js/24.ff1221ed.chunk.js"},{"revision":"5bdf1913914ac72d31b869af2a9a1706","url":"static/js/25.3dc93125.chunk.js"},{"revision":"25d56ac139bade2f16b58656550e5af6","url":"static/js/26.8f907f2d.chunk.js"},{"revision":"98e31d1fa268b6bd5b8caf62e4e56b69","url":"static/js/27.4532e4ed.chunk.js"},{"revision":"0309369d08e6f54abf92f794ed15ea71","url":"static/js/28.65cef698.chunk.js"},{"revision":"e942349fb4ada64694c92b92ba005bee","url":"static/js/29.1a574b28.chunk.js"},{"revision":"d6f263bda484c16f2044c4a3d0a9d0fe","url":"static/js/3.ae9f4419.chunk.js"},{"revision":"8cca1c72de81e173deef577d32d33d0e","url":"static/js/30.623aa7a0.chunk.js"},{"revision":"0bd100030652297b1f82427eb9b4acdb","url":"static/js/31.6ac46a5b.chunk.js"},{"revision":"3adeac05938fc2ca0d607a5acdaa54f4","url":"static/js/32.7251ecce.chunk.js"},{"revision":"ff0b27a90e98f874adc46d77add487bd","url":"static/js/33.172abbf5.chunk.js"},{"revision":"49357a3c75f4468618fb0ef9dc6aa55f","url":"static/js/34.9f2d06a4.chunk.js"},{"revision":"0970954c8f7cbba67399563307c67cec","url":"static/js/35.305f3582.chunk.js"},{"revision":"8196b19a2fbe40dc364915d3c8ed4c07","url":"static/js/36.c779d6c7.chunk.js"},{"revision":"d2fe0b3bd22fcc95a386463a374eaf45","url":"static/js/37.0ea5f936.chunk.js"},{"revision":"ea607f852da263ba3806616cb108403c","url":"static/js/38.3e2e52e5.chunk.js"},{"revision":"2aee830891c1e0ee3a1763cf1b6b3aa6","url":"static/js/39.389afe60.chunk.js"},{"revision":"2678c3e720ec42dfb8f476ed5a7af1dc","url":"static/js/4.9ee3bfaa.chunk.js"},{"revision":"b11b7e17ebacae45bfcb821f0e2944c9","url":"static/js/40.da5059f8.chunk.js"},{"revision":"ffa948931349487e2f84afaf914d4495","url":"static/js/41.7d9c4ca6.chunk.js"},{"revision":"58346d7a48d0037f0a02d2368ffc1ac2","url":"static/js/42.16b4560e.chunk.js"},{"revision":"5153828e1e941a325bcf257c1126017b","url":"static/js/43.5fbef7f5.chunk.js"},{"revision":"7c62d2e5d36e43339d51c288e67f0ee8","url":"static/js/44.2b4190e3.chunk.js"},{"revision":"e5a9a9be8de7afea8e96e7addf27070d","url":"static/js/5.e53db121.chunk.js"},{"revision":"ed8a751630cca88d5d546d9b51940af4","url":"static/js/6.8942ad26.chunk.js"},{"revision":"afc44f2522756c63777cf983bd8a2565","url":"static/js/7.08507ee9.chunk.js"},{"revision":"17584fba4574eea0449291e49265aeab","url":"static/js/8.538d9245.chunk.js"},{"revision":"b624ae87404e4d7975af0224c359578f","url":"static/js/9.c32a69c4.chunk.js"},{"revision":"6dbdfac54687b0fe736feaaf0cf42911","url":"static/js/main.9898db52.chunk.js"},{"revision":"c8d94e53cfd7d8dbe3b93b06268c9cd3","url":"static/js/runtime-main.d8efd7f7.js"}]);

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
