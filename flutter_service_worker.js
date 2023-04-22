'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "a1f65f9e254ecb4a7add6a1495ff4577",
"index.html": "d30bd505257f648b29afe9920c62f4f1",
"/": "d30bd505257f648b29afe9920c62f4f1",
"CNAME": "fdf6c2d49c4122659110a7e4742a5136",
"main.dart.js": "7064603563a348fcb7104b92f3dbd6e5",
"404.html": "f4e3edb53349945387e617abbd0fd231",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"favicon.png": "985bb0584cba2b350ae1d8cd8d8526eb",
"icons/Icon-192.png": "13f05e854ea82fa20d841a6f53dad13a",
"icons/Icon-maskable-192.png": "13f05e854ea82fa20d841a6f53dad13a",
"icons/Icon-maskable-512.png": "2d64ffead12b468b17a85bf44e3de31d",
"icons/Icon-512.png": "2d64ffead12b468b17a85bf44e3de31d",
"manifest.json": "d73906208e502cad0aa1b462b4375c4e",
".git/ORIG_HEAD": "54ec54c44b774921051e68772d717021",
".git/config": "8e0186ac6805b7994c0e5bc675e1ce92",
".git/objects/0d/3c72026bb335033eedf6b936304de12ca78d89": "75767ec4f738a95ebaa313a2720abdfa",
".git/objects/3b/9fa3bb9a44ed333a03be48ac1a7a2c251be3a0": "2f76650f0daaa95a4158bbcf1fd08122",
".git/objects/3b/5f0a89adc001f9e4728caf7ef6188693fcabf5": "5615be004bf340a08596e080d043f542",
".git/objects/6f/2538e343b8407a4726981aaafceb935d0726b6": "ab9c8d32998520a69dd6299b56580e2e",
".git/objects/51/f0d22dac8372d721f9eec556700a56423e7f6a": "fa17b7c26e149fb33a78e6ccdc975506",
".git/objects/3d/ffa0ede4c59043f984e1af29486983542eab8e": "fbfcd5bb567c71d2d8bdf5dac0eda56e",
".git/objects/33/b7da898e3e7265729917f7d0a736fab1932be0": "c9c2ca65af0043483740d34b573fa6e9",
".git/objects/b2/ca57ccc5827b9506e6e1488b685651da75e45d": "1fbf5b009c669e8c0682fb300bf0071b",
".git/objects/b2/02a3e13c63de8c3bbcf5946e8bbac6f43bec79": "f064603e236374094c81b2bff974957c",
".git/objects/b4/8c2b8738704c73d73985418decb068585a415c": "adae2267f46094eee39f1e6b7b283db0",
".git/objects/d8/7fa8968d0afba68c4ec76c6bb42beb78769f37": "3733cf9b96b01c4d919bc5ca858b8491",
".git/objects/e5/bd8ce0f3782c23a00dc8f9a790b439b836ecff": "f68a9572061c0a9455d514ca1a4a0ed5",
".git/objects/e2/0a2daf26635e5247b03b64251a342254f13a48": "d5f01304a59e30d7bde5cb5047dddb96",
".git/objects/e2/112f4f07212038485789a3d6f78de9904e5a1f": "ce73663354aa28bf3e2d3a698585fa08",
".git/objects/f4/093858e9fea6deb4413805658cccaaa7e18d86": "f97b56ce83e595b8e7182190461b5d28",
".git/objects/f5/c1917a1f9a856a2267a50e0ce2a55c2c3094e5": "fc2c64b5fb4610f2849a9083e654f4ec",
".git/objects/fb/86b39fce58b3287df6d526a3f33c2b0918f5aa": "328a96fd85c0aadd2e6d6f654296ce63",
".git/objects/ec/0681b01ba3a85248c9a5fdbbc9a106f45f4e7c": "eed30741a7152a636b862e3c982aa3b8",
".git/objects/pack/pack-59fb67fa0f1a60139a7b84dd358b5ee2ca0e0592.idx": "e49e4d57f8e17515b230509384fcb3a3",
".git/objects/pack/pack-59fb67fa0f1a60139a7b84dd358b5ee2ca0e0592.pack": "1a32fa77cfb5c80847339986e7b354ab",
".git/objects/16/a335071ebe543e7e693e7eabcb5cf0b23f450c": "e99b3a44b849fabfa87acc864fab2aa9",
".git/objects/16/5112c9e2d185c3531146a8e488f4f22a78f8db": "3a6ae094d15b6f8c2c8fdf073fd108d4",
".git/objects/89/71c6d1cb8479e0f24926a8596c17ae4924f84e": "a666471531d9692261f48a65f5ba1ef6",
".git/objects/89/096ee247c7d20dd054f73f7f17c8eff7cf8e46": "6d7f4af03fe672cda58e76f5ac62c02c",
".git/objects/87/08a26df01c63d9aa422e5dfaa96706cb6de940": "78cde358ff15b7afab19650a1dd54468",
".git/objects/80/12eba6c22a09301233e1157fb629ebcd925e29": "47a8bc719a10e8f1bfb6d38cacfc6d0d",
".git/objects/74/a07f5ba543deb4ecdd4d1da4c213497978c6cc": "966d46d63358eb12a9f8ec67e2518786",
".git/objects/7b/e01e5c7ab0e8eff181de51439f5f2cb6297eaa": "85e0c24f3e39019286b69ccc7708a684",
".git/objects/6e/916591e5c713123876634c30c3d245f294db2d": "fe93f8880958be1cdb443c93e72222cf",
".git/objects/53/dc1a7aa14e84c70053a3291ddd498bfdd8029a": "4dd55bedfbb08ccb4976d7b2154c9409",
".git/objects/39/aceb8b535fd355b419e487378eb84574029e82": "0aa5ac8dc93c32bb5988ef7375db4aed",
".git/objects/99/9b8514522a0eff37c42c12aaf044dfdea1b78a": "51721077df3c39b969e1dc32bef42ad6",
".git/objects/63/c2f77bd0c78700796936de7a5b96cbcb446269": "6cb15e545083d7fb57550a70a87b37f6",
".git/objects/64/d8919a35c430926ba295a7221872a00850b8ee": "e6566290ba1cdae1ebf89e915d5f6139",
".git/objects/64/bff33d8c03ad4723fbb3fb0210d5fe5cd15800": "ae2f23e88c5e78868870c0971bceda61",
".git/objects/a7/4c771822f0a18ff8c1187db99342a62ca7b70b": "cdfb62e2254b7d704833ce37253fd597",
".git/objects/dd/47030ac8618e67da7dcb65ad969465cb591783": "561d3be98820ac5e0b592174dd53f50b",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/aa/60f20103e60a349c51f479b50564ff4043614c": "2a0339859d6610fb748499ba86bf82ca",
".git/objects/a6/b8867f9eb720376d2165688414e0eab4af95e5": "e0cb3fb008818bc3267da1827753dd54",
".git/objects/c3/b1e106a6478cfc3286fff5d9cf21b2e4c3dbf2": "94a8da02eec9b9f19aea7b997ee2760d",
".git/objects/e1/ebdca0bb26d6cbcfc5bec09dfaa5065f3ed88f": "f4995b5dfff7636669a7f19baac68312",
".git/objects/e7/85b93ae986f4094105871202dd4d937a8ec603": "4a791f7739d697c1fd5878ded34c72d9",
".git/objects/e7/1809e9a295583c2766364d675d988b2bbb311b": "cb97df2b2e22f52f343ee674c6691211",
".git/objects/cb/73b6d66ab9a181af7410d3d644314228bb2c4d": "28dd8869bd91ac9cf804d47d8901fe2c",
".git/objects/41/8006b9911faa3ec5b9849a6044dcc2d1e250f7": "2eb889ebb609483f94cb07dcb632153c",
".git/objects/40/4c04bb40c2156e12f4e77a3de26328e439c232": "7704bca9eeca6f0f1adc37a71e442d55",
".git/objects/22/726896f8b5f9443e5bba715a532c1c76f66427": "670e1f418637fd899fa9ca36d7d14fc1",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "9198cdaf97f877163c59e0ab3a8472f9",
".git/logs/refs/heads/main": "9198cdaf97f877163c59e0ab3a8472f9",
".git/logs/refs/remotes/origin/main": "e7fa7142c90ffade32e58f8faff3fa0d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "01b1688f97f94776baae85d77b06048b",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/main": "b8f5028a886f82499c5c50f612fa4f8b",
".git/refs/remotes/origin/main": "b8f5028a886f82499c5c50f612fa4f8b",
".git/index": "8416ce3f66630b064ddb27bbaaf595ed",
".git/COMMIT_EDITMSG": "5ab6fb8bc4e43974c6e06df8c90d3848",
".git/FETCH_HEAD": "1c167f007ce1d1a12b7e23282558ca30",
"assets/AssetManifest.json": "45f49d4099fd3f16fc40d7af37134ab5",
"assets/NOTICES": "aa90b41734e114d1be374d3d3193a16c",
"assets/FontManifest.json": "d7689140d776afd9d94e9b9f2027da60",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/storybook_flutter/assets/README.md": "fbaed1ae60d80596d99545ef45d72803",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/app_icon.png": "6c886cb473854eb978ee51dc1bbddba9",
"assets/assets/images/avatar_placeholder.png": "9e5c35756c2cc8409ba875d842f83433",
"assets/assets/images/contribution_gif.gif": "635833c6bf950984ff83d9f6c76f0e5c",
"assets/assets/images/party_popper.png": "b629d4d9c32c27a121636cf110d0f749",
"assets/assets/images/iw_card.png": "fa409d9824612fee3b198274e6e886f5",
"assets/assets/images/onboarding_chart.png": "3fbb87f42d2875ea8807b496ada5c9dc",
"assets/assets/images/logo_with_text.svg": "b86c22c5cb2cab6731647eec54bfd39e",
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
"assets/assets/icons/add_circle.svg": "8ddb9b74fde76df5e60d4df2a551e47a",
"assets/assets/icons/arrow_up_big.svg": "9c990f63088def9cfd7afefe0d181c2a",
"assets/assets/icons/logout_icon.svg": "ba28682ae566fb64687ef2e3bb91ed90",
"assets/assets/icons/in-store-icon.svg": "49e7550cc4eac9afa6741ef7b3697978",
"assets/assets/fonts/Gilroy-Medium.ttf": "ef9daf9c32f47a3468f30f861e92b9c4",
"assets/assets/fonts/SF-Pro-Display-Light.otf": "d2e8530d7b0f9ca7c5298263bd1a184a",
"assets/assets/fonts/SF-Pro-Display-Regular.otf": "f4245a5167ad609c4ba2d0850d553bd2",
"assets/assets/fonts/SF-Pro-Display-Bold.otf": "94348d7ee70c258261a757b66596c4f9",
"assets/assets/fonts/SF-Pro-Display-Medium.otf": "84d3637759a89aa1b59df2a828544511",
"assets/assets/fonts/Gilroy-Regular.ttf": "af5b8da12b32c5e74532c6446eb356b4",
"assets/assets/fonts/SF-Pro-Display-Semibold.otf": "2723a0240d8e4fd81b39668e0e33640a",
"assets/assets/fonts/Gilroy-Light.ttf": "1111f8b003573d984ba8a7179862fb32",
"assets/assets/fonts/Gilroy-Bold.ttf": "10b9cd1ddd69d318220fdfeca35a23b3",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
