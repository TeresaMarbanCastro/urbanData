"use strict";var precacheConfig=[["./index.html","3eb40e5ab1b26c82f625231613ac73b1"],["./static/css/main.ba8f9a34.css","bb6483041f32c4df4d19f38ff99654cf"],["./static/js/main.acaa85f1.js","050b405d17dddf146291b3d300c0dd49"],["./static/media/GothamBold.0ef4e118.eot","0ef4e1187cf602dd6d855e068b13a386"],["./static/media/GothamBold.15dafe1e.woff2","15dafe1ed96a019cd350162bc5ae148f"],["./static/media/GothamBold.2df7d7b1.woff","2df7d7b1ca03697a8dcd0abd43ea5467"],["./static/media/GothamBold.71190f73.svg","71190f731a7b60d45beb4478aa90c4e9"],["./static/media/GothamBold.cdecb667.ttf","cdecb667fa64c568482c21fa9798dbbf"],["./static/media/GothamBook.143b4034.woff2","143b4034d45c8c3ad50bf40265c9d6a7"],["./static/media/GothamBook.382be539.woff","382be5394b2ca04910b60365ed67b816"],["./static/media/GothamBook.89ce456b.eot","89ce456b37adc4e6a49be2ee21378c09"],["./static/media/GothamBook.9583bbf2.svg","9583bbf2b76612dc59d2750934bd5a8d"],["./static/media/GothamBook.ffab4dbd.ttf","ffab4dbd6b7091a3c47dbabc9c36a52b"],["./static/media/GothamBookItalic.2be3e649.woff2","2be3e64918fb196b131e453a82872334"],["./static/media/GothamBookItalic.4ab19d6a.svg","4ab19d6ab3d743c768ff32c6030cc416"],["./static/media/GothamBookItalic.598ee431.woff","598ee431573638d8d9a832d5c5a0591f"],["./static/media/GothamBookItalic.8d860054.ttf","8d8600542d90be85aec41a5f144c2952"],["./static/media/GothamBookItalic.9a6d4697.eot","9a6d4697228d0ed9dca5bd1b4bdce9d3"],["./static/media/GothamLight.0a6f1e94.eot","0a6f1e948d7b56ca9c07b454fc77061d"],["./static/media/GothamLight.78348b6e.woff","78348b6e87f1432405aa1ae6a5e4882c"],["./static/media/GothamLight.89319c47.woff2","89319c47f37590ebdc40e2a503ecf417"],["./static/media/GothamLight.bd8a8177.ttf","bd8a8177e9c7dc5802435532a9079c48"],["./static/media/GothamLight.f7165e00.svg","f7165e00e4b09bbc38d269b1ea806c11"],["./static/media/GothamLightItalic.52f606f9.woff","52f606f9e29e54343a9c41934c59d718"],["./static/media/GothamLightItalic.8d703773.ttf","8d703773c4b62a9457a7e50d133d95c3"],["./static/media/GothamLightItalic.c97bcc8c.woff2","c97bcc8ca68a4cfd1be0c1f9309ad9c7"],["./static/media/GothamLightItalic.f09ce1b7.eot","f09ce1b7a1393eb535d50c6137b134e1"],["./static/media/GothamLightItalic.f4129972.svg","f41299725557e878b5922991bb8a5838"],["./static/media/REDapi.9fe3096d.png","9fe3096de189ce2b2283cc9fb71586b6"],["./static/media/aci-logo.733f3f49.png","733f3f49c39ec4c6f2ba8da92e3e5952"],["./static/media/api-page.9b366bcb.svg","9b366bcb7485036d30f9a806edcf6832"],["./static/media/bcn.fefab197.png","fefab197d22bbdee96416def840b44ae"],["./static/media/cloud-computing.43bd090b.svg","43bd090bb4bce9fea1169b7ae779be2b"],["./static/media/combo-chart.f29a58bb.svg","f29a58bbd43e2875a9cef8f7052cd92e"],["./static/media/map_02_CO.398a6f5b.jpg","398a6f5be5dff138c57fe9bf0498e6c5"],["./static/media/mipim-logo.9db6cb9e.png","9db6cb9edbaae56358c68c6c3145350d"],["./static/media/odine-logo.9c87a6fd.png","9c87a6fd2a5d06df7fbf6e604e7827b4"],["./static/media/pdf.2d1da5b6.svg","2d1da5b60933c414cdc6cf8bbcfb8aa4"],["./static/media/report1.27cc2f51.jpg","27cc2f5182f14e8cf58a3b654d53a2f0"],["./static/media/report2.496eaac4.jpg","496eaac4992d02053d9b3c36e6b2bc28"],["./static/media/skyfull2.14bda521.jpg","14bda5212600209ff2a8ef1286fcf31c"],["./static/media/skyfull3.439b3a7e.jpg","439b3a7e8aa938b48ca0133193e9dae7"],["./static/media/skyfull_mobile.a7293978.jpg","a7293978e0ff4bf71c0b08c4f1d44a16"],["./static/media/speech-bubble.917d5544.svg","917d5544bb9966408cbc69ab1f3b79a4"],["./static/media/xlsx-file-format.3e35c24d.svg","3e35c24dce0ee8ffb4088008e9830586"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,c){var i=new URL(e);return c&&i.pathname.match(c)||(i.search+=(i.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),i.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),i=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),i]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var c=new Request(t,{credentials:"same-origin"});return fetch(c).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),c="index.html";(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),a=urlsToCacheKeys.has(t));var i="./index.html";!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL(i,self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});