'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "abb3019674aec81cc3f463209b0b2659",
"assets/AssetManifest.bin.json": "a4d99129d5298e455c21b408136d1e0d",
"assets/AssetManifest.json": "49497b7a9407afa62ab68c1abe74357c",
"assets/assets/data/baybayin_character_list.json": "bd43bb36661d8aef75299aec69404c47",
"assets/assets/data/baybayin_guide_lesson_categories.json": "2bcf8ad05198ab37c8465148293e7966",
"assets/assets/data/baybayin_phrasebook_content.json": "064837d2b10a4659150fda7d1b7a2672",
"assets/assets/data/baybayin_tools.json": "2b746cd98c7d92fb2e5ee4d93454e0de",
"assets/assets/fonts/baybayin/BaybayinNeue.otf": "3c77fbb974f7ceaa86692f24732a502e",
"assets/assets/fonts/deutsch/Deutsch.ttf": "baa262cc8769a7cfde01ce5671118c84",
"assets/assets/fonts/inter/Inter-Black.ttf": "118c5868c7cc1370fcf5a1fc2f569883",
"assets/assets/fonts/inter/Inter-Bold.ttf": "ba74cc325d5f67d0efbeda51616352db",
"assets/assets/fonts/inter/Inter-ExtraBold.ttf": "72ac147c98056996b2a31e95a56d6e66",
"assets/assets/fonts/inter/Inter-ExtraLight.ttf": "7a177fa21fece72dfaa5639d8f1c114a",
"assets/assets/fonts/inter/Inter-Light.ttf": "a3fe4e0f9fdf3119c62a34b1937640dd",
"assets/assets/fonts/inter/Inter-Medium.ttf": "cad1054327a25f42f2447d1829596bfe",
"assets/assets/fonts/inter/Inter-Regular.ttf": "ea5879884a95551632e9eb1bba5b2128",
"assets/assets/fonts/inter/Inter-SemiBold.ttf": "465266b2b986e33ef7e395f4df87b300",
"assets/assets/fonts/inter/Inter-Thin.ttf": "4558ff85abeab91af24c86aab81509a7",
"assets/assets/images/baybayin_guide_images/boy_searching.png": "95de4a51365932e137c4f965089188d4",
"assets/assets/images/baybayin_guide_images/boy_searching_2.png": "ebeaccfcda6c1f38c6f99d10a3a45f15",
"assets/assets/images/baybayin_guide_images/child_stepping_on_books.png": "7126bbdce93eb019a287bc2b56aaefb3",
"assets/assets/images/baybayin_guide_images/girl_writing.png": "2e16899c8ba4aeb608eaafef418bc453",
"assets/assets/images/baybayin_guide_images/girl_writing_2.png": "bb88c45990b7002f8f070a8b43910d2d",
"assets/assets/images/baybayin_guide_images/group_holding_a_letter.png": "37cd5039b45fcc00c469a1c65e0a6733",
"assets/assets/images/baybayin_guide_images/group_holding_a_letter_2.png": "d2125732ece5d03ee14a69d1f74a229a",
"assets/assets/images/baybayin_phrasebook_images/emergency.png": "de21446f6f01048ea164963c54df61df",
"assets/assets/images/baybayin_phrasebook_images/mga_direksyon.png": "e8e5e2af1dc4a6ec4162a8663205b98b",
"assets/assets/images/baybayin_phrasebook_images/mga_kaganapan.png": "ab5c96cfb1b6ea0331296c6ca523da85",
"assets/assets/images/baybayin_phrasebook_images/mga_pagbati.png": "5310a14eba7a0a87abc141f86a4ceed7",
"assets/assets/images/baybayin_phrasebook_images/usapan.png": "25ef2e82830d8735eba486ca87fffccf",
"assets/assets/images/baybayin_tools_icons/baybayin_characters_selected.png": "9c1a12a9756c6ca530b08b24f49c5259",
"assets/assets/images/baybayin_tools_icons/baybayin_characters_unselected.png": "60338de7c9bb722273d8b77f75217baa",
"assets/assets/images/baybayin_tools_icons/baybayin_guide_selected.png": "6faaf6f9ed13dbee6a8bbd1dfeb03740",
"assets/assets/images/baybayin_tools_icons/baybayin_guide_unselected.png": "da4c5d96ce6c9158db4f3f0d16d9ed8a",
"assets/assets/images/baybayin_tools_icons/baybayin_phrasebook_selected.png": "d6e29bcc986c2436704399eaf978ce69",
"assets/assets/images/baybayin_tools_icons/baybayin_phrasebook_unselected.png": "45153eff3eb782566047414ac1a2645b",
"assets/assets/images/baybayin_tools_icons/baybayin_transliterator_selected.png": "2b1bd1bb2e83211836943c240730897f",
"assets/assets/images/baybayin_tools_icons/baybayin_transliterator_unselected.png": "070315ab886123efff8bdad5d81b8666",
"assets/assets/images/header_mobile_icons/about_active.png": "18f56b073db5c6153dde722a917c54b9",
"assets/assets/images/header_mobile_icons/about_inactive.png": "778d247cfa83a0a7e234003fee96d15a",
"assets/assets/images/header_mobile_icons/baybayin_tools_active.png": "d2da8bc2b96afaf2d036e0bc62e97d1b",
"assets/assets/images/header_mobile_icons/baybayin_tools_inactive.png": "96fc267156861924b8740cea5719dbec",
"assets/assets/images/header_mobile_icons/contact_active.png": "c8cba35fbe1c59fc80b6e589a04d3c6b",
"assets/assets/images/header_mobile_icons/contact_inactive.png": "05d7e8e27a98a405ea687618b34e0c3a",
"assets/assets/images/header_mobile_icons/home_active.png": "7e57f708be092d38e39ae3ede6c5035e",
"assets/assets/images/header_mobile_icons/home_inactive.png": "d2aa937ad2d230278fd5eaf7d33ca931",
"assets/assets/images/home_images/salinlahi_logo_1.png": "5a12a299a6749429b040cea257f0d837",
"assets/assets/images/home_images/salinlahi_mascot.png": "22edd245ea46bff7df3e559965b8027a",
"assets/FontManifest.json": "f44761913e99e543238953e715ea282f",
"assets/fonts/MaterialIcons-Regular.otf": "8ad25218b0145a4ccd3642d50acdd270",
"assets/NOTICES": "5e36c1d9a053ac8a189dbdcf40dc88cd",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "d4c634bf3a71e22b30830b53439901c9",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "1f6cb16645842a8c3d1bba3b51464deb",
"/": "1f6cb16645842a8c3d1bba3b51464deb",
"main.dart.js": "77ddbfaaad66e3804a54548e92f6be14",
"manifest.json": "33a50a183fbe2a9fe9fbf910c653c9c4",
"version.json": "e333229ce74becb3d31fb9d81643a3d4"};
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
