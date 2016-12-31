
var cacheName = 'sw-v1';

//installation of service worker, caching all the files//
self.addEventListener('install', function(event){
    event.waitUntil(
        caches.open(cacheName).then(function(cache){
            return cache.addAll([

                '/css/style.css',
                '/index.html',
                '/careers.html',
                '/investor.html',
                '/password-reset.html',
                '/pricing.html',
                '/privacypolicy.html',
                '/redirect.html',
                '/redirect-stripe.html',
                '/terms.html',
                '/thankyou.html',
                '/why.html',
                '/css/',
                '/fonts/',
                '/img/',
                '/404.html',
                'apple-touch-icon.png',
                'favicon.png',
                'favicon-16x16.png',
                'favicon-32x32.png',
                'after-reset.html',
                '/js/',
                '/bower_components',


                //new Request('https://coastlinemarket.com',{mode: 'no-cors'})
            ]);
        })
    );
});


 self.addEventListener('activate', function(event){
     console.log("service worker activated");

     event.waitUntil(
         caches.keys().then(function(cacheNames){
             return Promise.all(cacheNames.map(function(thisCacheName){
                if (thisCacheName !== cacheName){
                    console.log("service worker removing chace files");
                    return caches.delete(thisCacheName);
                }
             }));
         })
     )
 });
self.addEventListener('fetch', function(event){
    console.log(event.request);
    event.respondWith(
        caches.match(event.request).then(function(response){
            return response || fetch(event.request);
        })
    );
});