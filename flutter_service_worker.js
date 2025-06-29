'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"9dbf4f2f9521df214c886a584bbfed531d61e623.png": "18cd0ebbfcb8a19bb43b769223f4071b",
"assets/AssetManifest.bin": "e243ebb3972266901f897071f73752c3",
"assets/AssetManifest.bin.json": "e5f36131389eb3076a6d7d2fe47c5666",
"assets/AssetManifest.json": "841ab3977a97815bac177e96405d45ad",
"assets/assets/audios/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/environment_values/environment.json": "627e865bbde56c48596452fdc161e927",
"assets/assets/fonts/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/fonts/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/assets/images/19834611cb3cb5fd2331bf6bf0c66f20d505d876.png": "6e29287af870c8e18e7fec1907695fc3",
"assets/assets/images/1e5a64b647743bd8ad23b7e3fffcd5e9075cdfa9.png": "f36847ba2d4e085b9f73573e0a977007",
"assets/assets/images/52fe19c7e04b56b90b11cd2b71a3470ecac8d990.png": "655ad8a71ddaa316a1df586a6610cf7d",
"assets/assets/images/568ef52c4f918d3b41796d1cebb724ee9ac5a1e4_(1).png": "904a864b18d3f2da3d05483514611f6e",
"assets/assets/images/5779990e1d529424fb6976fa2c80cd9f9225a485.png": "616250932ef574d6edf340d0d3efc72d",
"assets/assets/images/6e4302c693288aa6c02179dedecb7a3511083100.png": "5d1ea7d3027af9edf4c8d1e0215abdf8",
"assets/assets/images/75074118447e73e01de3b65726b53eacef99337e.png": "e1a71109a791cc0face2fbde8db178e0",
"assets/assets/images/9dbf4f2f9521df214c886a584bbfed531d61e623.png": "18cd0ebbfcb8a19bb43b769223f4071b",
"assets/assets/images/a4cfea738a5dcc00b0e0fa0279cce579a3b5ac9e_(2).png": "d099e2d0e2833b840fe39915c6123b49",
"assets/assets/images/adaptive_foreground_icon.png": "18cd0ebbfcb8a19bb43b769223f4071b",
"assets/assets/images/Animation_-_1750223553179.gif": "12feb07d044887c68622bc1bf7ea22ea",
"assets/assets/images/app_launcher_icon.png": "18cd0ebbfcb8a19bb43b769223f4071b",
"assets/assets/images/b6aedf3060c5ccfae15a36f7689a2dac21a48ebf.png": "e6fa7ad8be89ff0bde4844d40f546bab",
"assets/assets/images/bbbf89f230bd569e8e9fd9f562aaa48b98471e6d.png": "1e489bb49a948d622bfd7c5b7fa47af8",
"assets/assets/images/c36814f071e3050431827c74bcf8419b5f2192da.png": "556cdbc8329ef788763d92285b6508a3",
"assets/assets/images/Capture_dcran_2025-05-19_120434.png": "bb5de0ec0f87ee0af326849c19f59039",
"assets/assets/images/cbaa0cd883a794a402d4c7dbd5b17299cd892b71.png": "b021782a596a8500d49f0d0523c1b2b8",
"assets/assets/images/ccf22a82947fd1da08d3121bd65522c330bcfc9d.png": "52343b66e6aff097c6e668932ebc0f0d",
"assets/assets/images/d771dfe3c4875f1bce80699b9d39ed9270c30e70.jpg": "2f371215e48b79a0639f615ff6f1af09",
"assets/assets/images/error_image.png": "18cd0ebbfcb8a19bb43b769223f4071b",
"assets/assets/images/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/jsons/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/pdfs/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/rive_animations/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/videos/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "1d2c59cc3c3533a92a179de49f904847",
"assets/NOTICES": "8dcb2dfac235bd8e40b2b09fc74e57d0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "eeefad5512dfbffba365ff0cde4d6e6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5af74b4003fd40d0588910ad72056216",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "2defddeb42187d67b595ad716581ea74",
"assets/packages/youtube_player_iframe/assets/player.html": "fedadd807717e2e72a56a1117ebb1338",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "2704101cb06ce66e2000356a312be25c",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "8003d3a0e66267d939f2579c185bc774",
"icons/app_launcher_icon.png": "18cd0ebbfcb8a19bb43b769223f4071b",
"icons/error_image.png": "18cd0ebbfcb8a19bb43b769223f4071b",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "2a3f81189ce8b8acdef3a76f546e61ab",
"/": "2a3f81189ce8b8acdef3a76f546e61ab",
"main.dart.js": "cd110af8c990617d87f7abcca003e885",
"manifest.json": "266c8d6f317d02d1ccd155194bbef318",
"version.json": "4e3ac03aac0edfb58af7c95a1d6e6e84"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
