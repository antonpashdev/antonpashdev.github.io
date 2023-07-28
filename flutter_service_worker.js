'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "a1f65f9e254ecb4a7add6a1495ff4577",
"index.html": "497c70203e64fd16fd1efcc18ec80161",
"/": "497c70203e64fd16fd1efcc18ec80161",
"CNAME": "ddb20754b55e3a40408b3ae5ef582849",
"main.dart.js": "37be39dc5d0916e2d09d2f14c67fa425",
"404.html": "f4e3edb53349945387e617abbd0fd231",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "29cf22f47a8f5a1134e1ec8b93796278",
"icons/Icon-192.png": "6e50e2dee1aaa849c995e88a0ffe4360",
"icons/Icon-maskable-192.png": "6e50e2dee1aaa849c995e88a0ffe4360",
"icons/Icon-maskable-512.png": "a577237928fbf0996bb2a32093825230",
"icons/Icon-512.png": "a577237928fbf0996bb2a32093825230",
"manifest.json": "d325510fc271463dc67236ad505148e7",
"main.dart.js_1.part.js": "d0445c8dbceda50de79d0c30e00dde65",
".git/ORIG_HEAD": "fd2d3e8fbb11cf1d95b1438fc2acd982",
".git/config": "e513d01b3ca04b0cb9be5f9fc4e0f857",
".git/objects/61/fd23f86588e4cae4ad6a9c7e5852455e33be03": "a6bff7a75d53ef92e4aee853287fd41a",
".git/objects/59/46ad5b6bf840d796365576dbe8534aeabe5ca1": "479cfc3adb30f36c1fe5278f8724c6fc",
".git/objects/50/08ddfcf53c02e82d7eee2e57c38e5672ef89f6": "d18c553584a7393b594e374cfe29b727",
".git/objects/57/8722e8837cc59029e74eacb3e092f8945442e5": "84f2687a483748b230b1df6a5d651b7a",
".git/objects/9b/936980e26eec6ea852424851c8849188a90e68": "77406fccdfccb38edcf0245d2e117238",
".git/objects/9b/a20159c65a46d18cc30f182dfd5a24d7ecb46a": "c92fa1bc0f596e0147819cdda653b204",
".git/objects/69/47de7695e7c5ea281697ca146afb488a1df6b2": "f6e229edba7eaddde14d1f46e856e013",
".git/objects/56/069d42e3203e7d9e57adaddf6bc165da30cbc4": "03bfe13b7cdee65478e8c2f3239c826c",
".git/objects/3d/5c8af0b8224578234090711b1b353d275b5b4e": "2dbe79f61b3e7f5703b10e7a698fabdf",
".git/objects/93/a7b6ea861498b5567c72880475f7979413acd6": "831e6e51f94bd6640b5d1be86f3c39db",
".git/objects/0e/dbef3827d987443b932e782086bb5cf4befe95": "1d67b902e3675734ef056d685bbe7f0f",
".git/objects/34/22807feb650f21eecc951a633412f3ca97330e": "066279bfcd04205c6a3adb005d4a13f0",
".git/objects/a4/deafc2a14d0354d69cc736b6cdcb0080d98353": "0672a2c2b7ed25e92741de2473f4999a",
".git/objects/b5/2f5cc80c250a5ecac217c912b4b860a4baac16": "da5fdd0d5ffb8a0ab62321579d90b722",
".git/objects/d0/1b5815cd1a7cd95ac89d72c0a6460c4b8f6e4f": "4f1da0c50c8340ae963e57c413cad28e",
".git/objects/da/6545beaa7f085df1092bbb488e1bda18b051e0": "21b517a2150c1e79e2c417cf95dc17d0",
".git/objects/a5/4c208fdf17a2ed2730eb28ceb4ff4841e9e0c8": "2356088029efbcb970ee8c674f7d43e8",
".git/objects/d8/3acc497333a036db358033178e053f0e548ded": "9a98002d6fa97f5f42d11dd36ffee990",
".git/objects/ab/e64b85e1c4f7e1d158fae1ddf6f6c252e9e0c0": "d44b5ffe77bd1400b0607d1d83e7103f",
".git/objects/fc/d452128ac2496841fb810a93a00b1855e0daea": "a2e5589a5d48f40314824fd316abe304",
".git/objects/fb/7117a2a1960dd8bcb8fdd5ee22acc4562f9833": "ecd0c058312295adae36975b25af423d",
".git/objects/c6/312c43d3b0924f65569732f4a6a807a280b0f7": "ac0bcdf1afe5c67899200ad4e82e7b3a",
".git/objects/20/872bfdb2804f71e88d1353b7fb3bf2bbc5d67c": "be5ff2d49a3cb16450616a4df5acf3dd",
".git/objects/pack/pack-0cefc9f5c0fd4b11613acbda9e6c89f72743fbd8.idx": "1acded893689122f46717e66ad948668",
".git/objects/pack/pack-0cefc9f5c0fd4b11613acbda9e6c89f72743fbd8.pack": "b820e0fa73df7b9bb1d9714ae3424f9c",
".git/objects/7e/95a1336a5c5c46c7b979f52aebe53e742415d2": "1bf452c5940ae795f12aa843cd8529e1",
".git/objects/21/71272c2c68b337676bd30fe46d4be8cd0a2fdd": "95084944df3bf09f1958d71ba772fc41",
".git/objects/88/d0bbb96db2eaece90083fb6a5e88c9d8302a76": "a63cafe58b4223ebdc08237b492a8929",
".git/objects/6b/1844baef6f04580d32b08368578e8cd3ef7e8f": "ab458cfb4e05fcfb135e6c7ca79cdd52",
".git/objects/07/387e6ad22d7e4ba518f054307bba3c5f49bb24": "273e274902ccf591ec520359ef5f6667",
".git/objects/9a/87aebacebe64b3e57aa1d803e6c66d55d9acd6": "ae6d2d16a56fa60e1d5cb3e05dcb66bb",
".git/objects/91/73022c18c2a2e0f0261a158617045c8c35e3be": "5d50f3ed86c3e135b1b7f37dded7135d",
".git/objects/98/10e7cc7d35764669a9a7b20ea4ebd3404e2d8c": "a571532bfeda7151d22922fce68c4c29",
".git/objects/99/bcaf32828047a9a3a8be76460229003ee74ea6": "0c40b936232f7c163c7f8ab17e466ba2",
".git/objects/55/ddbc9d54a27706a965a7f6f159daf89d73646c": "0f3ef8cac08ba0e8c41e75ffa1c99d39",
".git/objects/97/5fe342f66f752a1e9da347910dc9e9569a69dd": "d361650eb6d3788254b9ee7a5b1aad81",
".git/objects/b8/217ff32774b5b4515675fbab269179f7501ab8": "9b039ae1c489ae2e7e18186d7df87ac4",
".git/objects/a9/41b94b7e15d34706322e43bd6e7a5965115188": "89542766c25d32757bde43824efc96f5",
".git/objects/de/50ec78c6190c1361413010b54dfd60f2e0512f": "0530f8b8106b3b1cc123514a28de96f4",
".git/objects/c4/8fc4997b4af8fffd601fd8c91b88b95d4a7ad9": "a6d1c06ecf787fc61620b1bc60061691",
".git/objects/cd/2ff29a0204f3deecb540cfe58f5ff38863b03d": "6250888c1535932922d8920df3f8e8b0",
".git/objects/e6/6cea573b963bf32211fddd9911e3c3731289be": "e708f724a8dac8221d87aace5bfe5a5b",
".git/objects/e6/230d9c7938b4e7d21dbd847a42c8f0cbed6425": "adf9fed866c0c4aeeefa5dfd3500b02a",
".git/objects/e8/1173a5bcca31e9b9f84626edc33d6c2ee457d2": "43b008b39a9c7748efd4d29cb52c7641",
".git/objects/f6/ae123f13b5f44b7b21e9c1fe387dcae0b6e1a9": "8f79aec780765bfba584db3e70062c94",
".git/objects/cb/311495e0223303211ec534f8f462112d434f6c": "1b44c5d52b65f2b73a315c21a8594211",
".git/objects/ce/05288d19bd4e9812b7e61d80e9a4c2c5b85cf7": "69b9265641973c25022b66c480c45e0e",
".git/objects/1b/2a12784f56c9841e7b7e7f7ade71c76f29f5ce": "a46f0ec12110e110b9880a2f98b82a0d",
".git/objects/1e/aa7b914978f647998813f55923378f9e03dc91": "fed4d5765ec29a391c21de8904c65776",
".git/objects/4a/86da505b6a8f1f2a508d3e1fd6054b5590fef7": "e968f59d125e51eb5f461fb2407409ce",
".git/objects/23/d753043c9fb8f1093f40e75431be516c8cccaa": "26af150a091895825268b38b511426d7",
".git/objects/8d/608896b765e749b9262c8ff53d305510cbfb43": "f1167649dddead5e3c52de0e2675e482",
".git/objects/1d/505414c0ccb034e49058d9064cbb35f82b6253": "73e0be313534773f8319153e657db490",
".git/objects/2b/ceda9bc31cb8247bf1286af0d51ca2f0683cac": "5676a10fd7d7fc8947d7cb99986e1839",
".git/objects/7a/e65ce8a0fd91d43d31584d8f82ef3bd315bc2a": "2951e436d87299aaee3392d1d0e9e13d",
".git/objects/14/49414a27a2b6535b12b262e30e0b63a86c1ff9": "b141def1f0fe77291590c1c354ef85c8",
".git/objects/8e/d0cddf95c6a32942d5b718db303955950a04b0": "45533c58db2fc4d652dba98ef7e18935",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "bc9e6f78d260da3d37f0a2992b640576",
".git/logs/refs/heads/main": "bc9e6f78d260da3d37f0a2992b640576",
".git/logs/refs/remotes/origin/main": "0a2061875e3af6a2b4a8674a184899b1",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "fd2d3e8fbb11cf1d95b1438fc2acd982",
".git/refs/remotes/origin/main": "fd2d3e8fbb11cf1d95b1438fc2acd982",
".git/index": "3a39b33fac889a7b0503660aeabab5a6",
".git/COMMIT_EDITMSG": "4ad2a674b2f6d785e85fc1bb41532264",
".git/FETCH_HEAD": "fdbbc2f09bcfd37a65dbd0846c9abea0",
"assets/AssetManifest.json": "a7b0c3e8e52d1b2f62b93da8ff3e76db",
"assets/NOTICES": "d66c4cb6e2a840d8da3f74884c38ee2b",
"assets/FontManifest.json": "d7689140d776afd9d94e9b9f2027da60",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "a6ecd06e2f3d059e8dc41011cbcad611",
"assets/packages/storybook_flutter/assets/README.md": "fbaed1ae60d80596d99545ef45d72803",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.smcbin": "ae61044a7f8249f0c72523c7a18c74af",
"assets/AssetManifest.bin": "3673aaef6fde4a9509989f42a42c084c",
"assets/fonts/MaterialIcons-Regular.otf": "415b5266f0393efd023c86f8bf44b08f",
"assets/assets/app_icon.png": "d5b6e873d21543415a0e2168874f965b",
"assets/assets/images/logo_with_text.png": "5616ae4153896b7e2ef7c72bc0b18808",
"assets/assets/images/avatar_placeholder.png": "9e5c35756c2cc8409ba875d842f83433",
"assets/assets/images/contribution_gif.gif": "635833c6bf950984ff83d9f6c76f0e5c",
"assets/assets/images/party_popper.png": "b629d4d9c32c27a121636cf110d0f749",
"assets/assets/images/iw_card.png": "1826ba23396c90c8c8b425974268cd1b",
"assets/assets/images/onboarding_chart.png": "accd85da3ffef69ca13ffbb017572bf0",
"assets/assets/images/solana.png": "5c96da26ffe6f53814419153e59e5c13",
"assets/assets/icons/check_filled.svg": "881070c6c70ce1209ba965b16eb6c53e",
"assets/assets/icons/add_image.png": "b5e21c7cff1769bf5a36d880574a065c",
"assets/assets/icons/cross_red.svg": "b40fb2eda0e87371ea7bdfc707e3e906",
"assets/assets/icons/raise_money.svg": "151e0168db914526f0817d7d779d19e7",
"assets/assets/icons/arrow_down_box.svg": "4f913382fb1620879210c746ce10675b",
"assets/assets/icons/terms_icon.svg": "6a527c40333ca50c77046d2ffc2f867f",
"assets/assets/icons/question_circle.svg": "21a13ba9bebdeb2c97d250bcaa54c99b",
"assets/assets/icons/wallet.svg": "2983f7bfd3db4f0f3981c8000b4aaaec",
"assets/assets/icons/online-payment.svg": "9ee5b3fdb2dd988bcfd453ee7fa09d9b",
"assets/assets/icons/arrow_up_box.svg": "17102f85e94b90d62d6a3c7b95fca734",
"assets/assets/icons/usdc-icon.png": "0c3dc326d1133d778043b76398ad122b",
"assets/assets/icons/add_image_icon.svg": "afa5f7f07e25cc697255677811d8dffb",
"assets/assets/icons/add_circle.svg": "8ddb9b74fde76df5e60d4df2a551e47a",
"assets/assets/icons/arrow_up_big.svg": "9c990f63088def9cfd7afefe0d181c2a",
"assets/assets/icons/logout_icon.svg": "ba28682ae566fb64687ef2e3bb91ed90",
"assets/assets/icons/in-store-icon.svg": "49e7550cc4eac9afa6741ef7b3697978",
"assets/assets/icons/rise_icon.svg": "3b4251a564eed3d9e0e48660e70a3e69",
"assets/assets/icons/organization.png": "214bb55042722983addff23e729f5f60",
"assets/assets/fonts/Gilroy-Medium.ttf": "ef9daf9c32f47a3468f30f861e92b9c4",
"assets/assets/fonts/SF-Pro-Display-Light.otf": "d2e8530d7b0f9ca7c5298263bd1a184a",
"assets/assets/fonts/SF-Pro-Display-Regular.otf": "f4245a5167ad609c4ba2d0850d553bd2",
"assets/assets/fonts/SF-Pro-Display-Bold.otf": "94348d7ee70c258261a757b66596c4f9",
"assets/assets/fonts/SF-Pro-Display-Medium.otf": "84d3637759a89aa1b59df2a828544511",
"assets/assets/fonts/Gilroy-Regular.ttf": "af5b8da12b32c5e74532c6446eb356b4",
"assets/assets/fonts/SF-Pro-Display-Semibold.otf": "2723a0240d8e4fd81b39668e0e33640a",
"assets/assets/fonts/Gilroy-Light.ttf": "1111f8b003573d984ba8a7179862fb32",
"assets/assets/fonts/Gilroy-Bold.ttf": "10b9cd1ddd69d318220fdfeca35a23b3",
"main.dart.js_2.part.js": "ca669ceaabd1e6868f5db895f21e5085",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
