'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "7f72e5b5c7e36c9fc7319a6eab81a98c",
"version.json": "a1f65f9e254ecb4a7add6a1495ff4577",
"index.html": "a4da06e2a8ff137d0d196768cfab392d",
"/": "a4da06e2a8ff137d0d196768cfab392d",
"CNAME": "b1b5f214ca883491ca65c92cda6db1fe",
"main.dart.js": "fd773064a8eca694da11db69c3484963",
"404.html": "f4e3edb53349945387e617abbd0fd231",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "4a7b3d7d1c9e4039a432841a59f3d722",
"icons/Icon-192.png": "19140da1287bb2d3a69a1c0a50310b9c",
"icons/Icon-maskable-192.png": "19140da1287bb2d3a69a1c0a50310b9c",
"icons/Icon-maskable-512.png": "1d22beea3d5a63c267079ee3319528cf",
"icons/Icon-512.png": "1d22beea3d5a63c267079ee3319528cf",
"manifest.json": "1c4af866f0a501a9813c7d414fe585a4",
"main.dart.js_1.part.js": "d0445c8dbceda50de79d0c30e00dde65",
".git/config": "e3e5c99702da99d7e161298778cd646e",
".git/objects/59/aa405c8d5b2b9ce9f436d3cc5c0d8d972a1f84": "f49149b9ea0ac5ecde18591904003105",
".git/objects/9b/193b9e03fd65df3f53df64bee23ba5840c9014": "67fa9682f5e37aa136491372f8ab313c",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/9d/5926e68cf59022894d586cb72ab589d3e0ed6c": "1cc6fa42f38ea9901b561436c3ef7e6f",
".git/objects/ad/1bee71f182f22ec903ca1c87816e9b797b920b": "391591f592bdbf275608fa02bbcae1fc",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b4/a3ecb9428e2a4b8aff40c099e1c27d64a928f0": "6e4bc29289eb6be950713f1b329eaf0d",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/bc/7e3f5f1d7db892fe1770b0159c5ec43ccc0572": "913919e0f3eb9159400c65db65480d79",
".git/objects/f4/5843955180d8474f2001054d687da74f805be3": "d2a6b8d11ee7dc0429449c7230c81ea1",
".git/objects/eb/c8bdebba23706a098a30060e807a8b48a3d892": "78e9f8907fc8164e0ed9697eb8aa2e44",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/fd/1d9aab2fdacc82db0d35aa4644006c0ce8310d": "47ffc271cf4151d357d296b1926ceab0",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/b506a732f7fac5cafb298ac46f60ca7bf56520": "e47a93f20540e5608bffec189252292d",
".git/objects/c6/438ab205ee9e4b066e9118b623ac76de0eb191": "f82252b34e669dd283da4f81bb67cb31",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/pack/pack-3fcf3f211cf108c3666179f32aaaa5a1a916307c.pack": "b1106352af34083bfe5f0fd40a470ac1",
".git/objects/pack/pack-3fcf3f211cf108c3666179f32aaaa5a1a916307c.idx": "a1885455947d9021051ebcaf8e148845",
".git/objects/8a/5d36f0ddcc5d1fc5e17943dfbdf63bb95ac1cf": "a1c7d4e5050ff15b54789ae9f56a96da",
".git/objects/8a/d2fc98dc9ebe89cfb45ed4e2c166bf1546e44b": "491639b104f7b7a6d41435ecdf55e972",
".git/objects/2a/02ae79e879f7c349bdf78c61c55a73fadbe8db": "3cf6a9b3783c3c448c9e4022a427c3de",
".git/objects/2f/1ee4dacfd2b39c7a6c661186d7d38ba3c05ac8": "1568c7f1fe56fc31e3046f83413d968f",
".git/objects/9a/bf00ad07c755c5592e14a9087c7567d16cec2e": "ed7e96ae451fadfb781cd2f57a7d67f9",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/77c7e8ad6e1ae72f39ade404dd6d2dc021aedf": "e6637dfedf1bb152a2065ad1447a7afd",
".git/objects/a0/6e2db8e61b19792a2d79a23d22f2fb48608a20": "68390741830e3e42eab79536428d0ee0",
".git/objects/ea/b3799f1b3580173a3e5d2f1b16bf3d6a2a8421": "0bb3d6c0daba531c95828554851c384e",
".git/objects/e1/dfc74ef921e211d80443a17dd06547834ca3d4": "f13854e99798bf77e782ff459daae6ef",
".git/objects/cc/0b21c1fac0ebdfa660a31215ca21ff2067394d": "8c1f435b275e224de6cc022781b91801",
".git/objects/e7/b416e6ff46d35e56149442bb6c30f7b416b088": "c05546f21feb98402e7086aba05845fb",
".git/objects/77/13b90a1a564168a072653990ec3f61027085ca": "bd2ba0efd62e0e576fbe09741f12e4ac",
".git/objects/23/e9273a2eb6fe18689ea147782234f813ed419d": "eca41b19e20de5aab2089b477d201619",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/78/cd508de9b66b6c662512722196765345035841": "e611ea0848dbb12da946361d2c89dacb",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "730f39c653e22396176b5b02ae56d6dd",
".git/logs/refs/heads/main": "58ae81e8190043e762502ab2a855a5f9",
".git/logs/refs/remotes/origin/main": "bd0b768ddb67fda226ffb8beb0dbae53",
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
".git/refs/heads/main": "5307eb3525beab29675c5dd3ac216781",
".git/refs/remotes/origin/main": "5307eb3525beab29675c5dd3ac216781",
".git/index": "acfd7122954746fc3d4c098a3f9d4367",
".git/COMMIT_EDITMSG": "5ab6fb8bc4e43974c6e06df8c90d3848",
".git/FETCH_HEAD": "ba251a9dc169e5577580671a759106c3",
"assets/Loader_Animation.gif": "01022357735107d1c5d52ad9c38227b3",
"assets/AssetManifest.json": "8cdbd7a17392c96ae69c8ef3cbb45784",
"assets/NOTICES": "ef6a2649805274f1d496c8dee01a5a42",
"assets/FontManifest.json": "d7689140d776afd9d94e9b9f2027da60",
"assets/AssetManifest.bin.json": "dc03453c273d0e9157580ed9b56bcbb0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "aa62dad32c02a09a4b1c4cb665575768",
"assets/packages/storybook_flutter/assets/README.md": "fbaed1ae60d80596d99545ef45d72803",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "90db8ae519bc87151e774a5f5fc3d7c6",
"assets/fonts/MaterialIcons-Regular.otf": "5f9c1597a7c2d63960c3f8a55d34b2a6",
"assets/assets/app_icon.png": "597deeb19f7c6b5e9d5e70fdce7af371",
"assets/assets/images/logo_with_text.png": "a1c242f4bed5d819eae400ad1ca33fb1",
"assets/assets/images/fireworks_colored.svg": "ad116de1ff451983f9be053e68974f3a",
"assets/assets/images/avatar_placeholder.png": "9e5c35756c2cc8409ba875d842f83433",
"assets/assets/images/gift_colored.svg": "dae33cb970d2f165aa3d0a47530e3400",
"assets/assets/images/contribution_gif.gif": "635833c6bf950984ff83d9f6c76f0e5c",
"assets/assets/images/party_popper.png": "b629d4d9c32c27a121636cf110d0f749",
"assets/assets/images/iw_card.png": "1826ba23396c90c8c8b425974268cd1b",
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
"assets/assets/icons/money_box.svg": "ae9a720932d5a0dd67472f73e143ca67",
"assets/assets/icons/edit_account.png": "952dc8be549802acc7bcd978aedd4020",
"assets/assets/icons/add_image_icon.svg": "afa5f7f07e25cc697255677811d8dffb",
"assets/assets/icons/money_gram_icon.png": "e59a82215d87d69216f967c55d4f72d9",
"assets/assets/icons/money_gram_icon.svg": "1bd0602625a99ba8abc6cb8d3a6cb5af",
"assets/assets/icons/arrow_right_box.svg": "faf155d7867c732c25507a9f60c5cbc7",
"assets/assets/icons/add_circle.svg": "8ddb9b74fde76df5e60d4df2a551e47a",
"assets/assets/icons/burn_box.svg": "15dc34a4bab72af2f2f434f4481c208e",
"assets/assets/icons/deplan_token_circle.png": "7b2b9d00ca0b18087e30954955c1b26e",
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
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
".idea/vcs.xml": "8c9c0403ab0f6457841c605f08a3340c",
".idea/workspace.xml": "ff0860635c9ea29f4a7ba5a44a779568",
".idea/modules.xml": "1eb3b065c55895e347308e50cd717dee",
".idea/web.iml": "52db5efd0fe9f576a1302b8c4b5eac6c",
".idea/misc.xml": "e6b023077aa4876dbe12734108325458"};
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
