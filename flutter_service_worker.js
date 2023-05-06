'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "a1f65f9e254ecb4a7add6a1495ff4577",
"index.html": "bea2de457397e7217f33ce349e293c09",
"/": "bea2de457397e7217f33ce349e293c09",
"CNAME": "fdf6c2d49c4122659110a7e4742a5136",
"main.dart.js": "90cbcbfbb5cc4715e4ea43920f022b9c",
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
".git/objects/95/4979c643d2b2c803ec5cca43a61c3fd73f14d3": "1622c98ead9ea32b6ff364e7ec5b44f6",
".git/objects/59/4a4782165b68fb91a6584a181a9af31c096d4c": "3af01d87de36240940491d0034073b6e",
".git/objects/66/51f5c23bacbeb2e2c4f182815c5288f49be1f6": "ef775c9ea6ffccf946cc5c47a3f7e311",
".git/objects/3b/9fa3bb9a44ed333a03be48ac1a7a2c251be3a0": "2f76650f0daaa95a4158bbcf1fd08122",
".git/objects/3b/5f0a89adc001f9e4728caf7ef6188693fcabf5": "5615be004bf340a08596e080d043f542",
".git/objects/6f/2538e343b8407a4726981aaafceb935d0726b6": "ab9c8d32998520a69dd6299b56580e2e",
".git/objects/6f/9ebb727756a2eb88ebd6e1653870dcc9cea0b5": "86ec4e967b05c46a8d772c416f1260f7",
".git/objects/51/f0d22dac8372d721f9eec556700a56423e7f6a": "fa17b7c26e149fb33a78e6ccdc975506",
".git/objects/3d/ffa0ede4c59043f984e1af29486983542eab8e": "fbfcd5bb567c71d2d8bdf5dac0eda56e",
".git/objects/0b/1ce9e87553940efcc23f5754a1bde6cc71a2e2": "cd40d28f662307aa2ce7e81e163468f9",
".git/objects/93/bf68526618240a5da77e75004973c1e3afeb88": "560fe9d52e61e6d637d1d10f6e70fda6",
".git/objects/60/3c549d80c1b6b212334766a37ba36f66a1d76f": "cd23ff41b377dcdef01480d72e30eba3",
".git/objects/5f/79ff8e1cc7a0c771f0d4be875169a38bdc0d6e": "786a8da4acaf1070d12f5932ac43fc71",
".git/objects/33/b7da898e3e7265729917f7d0a736fab1932be0": "c9c2ca65af0043483740d34b573fa6e9",
".git/objects/9c/fb999a18788d252aebc38b99b7e5906e261fb5": "2902d26a6781e39fd9c6f2d79bb535f0",
".git/objects/02/e2a5e3d6bda850a212ee8c73588d08cf74693f": "b75836183e51f91b49c4ad820f111169",
".git/objects/b2/ca57ccc5827b9506e6e1488b685651da75e45d": "1fbf5b009c669e8c0682fb300bf0071b",
".git/objects/b2/fc7c64cc5e9737892145f325d35a5fd8f027ec": "51b3d686c3e42223a75df2a4acb2fe90",
".git/objects/b2/02a3e13c63de8c3bbcf5946e8bbac6f43bec79": "f064603e236374094c81b2bff974957c",
".git/objects/d9/28460e83d22197f9bb477f707a2482ad1d15b4": "526b6069e24aae988fd8320597797b6e",
".git/objects/d9/ae6cd1fd271a40748eb98cb1cb00922490e5bf": "0b012704ed34b70ca968c7b157483ae0",
".git/objects/bb/314d04046539efa4765d14976fd5d83d0a431a": "2a1c6d92bb6824c82c8c3281bc76cc7d",
".git/objects/d7/f779809271f75fe6a88ee7e38f0febd34d94b8": "9754ab2277a827934491fb0aec4f6293",
".git/objects/be/d5161d776e15e665afc4defe22a2a4479a2a09": "8d77a3cd9ffbb7ec349df1fbdc639bed",
".git/objects/b3/94f466c9242e43288ad0208b901a9c52e4c5f0": "e0eb65f0afda88d1857d50ed074d16d5",
".git/objects/da/d993ac1b533356be169f74d1739801ad412924": "4e8d51a9888ce062a8851ce204d2c879",
".git/objects/b4/8c2b8738704c73d73985418decb068585a415c": "adae2267f46094eee39f1e6b7b283db0",
".git/objects/d6/267ae5ce3c05d43927a9ec3f05fa5278bad101": "517403c3d88e76c3feefa78e11d5d18f",
".git/objects/d8/7fa8968d0afba68c4ec76c6bb42beb78769f37": "3733cf9b96b01c4d919bc5ca858b8491",
".git/objects/e5/bd8ce0f3782c23a00dc8f9a790b439b836ecff": "f68a9572061c0a9455d514ca1a4a0ed5",
".git/objects/e2/0a2daf26635e5247b03b64251a342254f13a48": "d5f01304a59e30d7bde5cb5047dddb96",
".git/objects/e2/112f4f07212038485789a3d6f78de9904e5a1f": "ce73663354aa28bf3e2d3a698585fa08",
".git/objects/e2/bb2aec47e45366db9401085d8014379059551f": "fb006bcf0ce7d3699ff7dfd129bd1f45",
".git/objects/f4/093858e9fea6deb4413805658cccaaa7e18d86": "f97b56ce83e595b8e7182190461b5d28",
".git/objects/ee/82f43e7d3ccb0f8fef6c451e5eda53c6a0bcca": "0646dd659ad65341c5cf21ed0971be9a",
".git/objects/c9/bd37562e1acbca8449e41590e4cc7f07c7cfe3": "1fd7f2b4f5ebb2157df8eb752bea534c",
".git/objects/fc/27ae23ec30057c88a83651c67bfa4ff3aafd38": "25c369eafb02b6715b8e91ee736b0afd",
".git/objects/fc/95342398528af0aeb5a49e7945102bf49f2e5f": "83e3337660b377b4ba4a5ed3add18aef",
".git/objects/f5/c1917a1f9a856a2267a50e0ce2a55c2c3094e5": "fc2c64b5fb4610f2849a9083e654f4ec",
".git/objects/fb/86b39fce58b3287df6d526a3f33c2b0918f5aa": "328a96fd85c0aadd2e6d6f654296ce63",
".git/objects/c1/62261108614d5fe89af4d83c77a10c9a63c2a8": "f057ecc25b03d56803e3f8a3faea652f",
".git/objects/c1/05c509233a4382246b0333432aaa0730b80016": "e3672eddf3b3843684ab708b428d2fbb",
".git/objects/ec/0681b01ba3a85248c9a5fdbbc9a106f45f4e7c": "eed30741a7152a636b862e3c982aa3b8",
".git/objects/18/d1ee17e7a402b98542675b3b0c5f4d2ec222c5": "913b8612eb653b06c0d50f84ef9415db",
".git/objects/pack/pack-59fb67fa0f1a60139a7b84dd358b5ee2ca0e0592.idx": "e49e4d57f8e17515b230509384fcb3a3",
".git/objects/pack/pack-59fb67fa0f1a60139a7b84dd358b5ee2ca0e0592.pack": "1a32fa77cfb5c80847339986e7b354ab",
".git/objects/7d/bc1e27e5323f6b7cfb9fac185898c58a53ff6e": "f6dc8b5661b51e7c43467d6229498e0c",
".git/objects/29/fd721540cf1ef98cdefd1c193ab0a27dcc4f06": "5547d77b634b88c1476d54ce74056336",
".git/objects/16/a335071ebe543e7e693e7eabcb5cf0b23f450c": "e99b3a44b849fabfa87acc864fab2aa9",
".git/objects/16/5112c9e2d185c3531146a8e488f4f22a78f8db": "3a6ae094d15b6f8c2c8fdf073fd108d4",
".git/objects/89/71c6d1cb8479e0f24926a8596c17ae4924f84e": "a666471531d9692261f48a65f5ba1ef6",
".git/objects/89/096ee247c7d20dd054f73f7f17c8eff7cf8e46": "6d7f4af03fe672cda58e76f5ac62c02c",
".git/objects/45/b42d4872d98575120ce63c0453bbeaea13f089": "6680ad354a786aca3abb3b56e2c87594",
".git/objects/87/08a26df01c63d9aa422e5dfaa96706cb6de940": "78cde358ff15b7afab19650a1dd54468",
".git/objects/80/12eba6c22a09301233e1157fb629ebcd925e29": "47a8bc719a10e8f1bfb6d38cacfc6d0d",
".git/objects/80/277e503962fa835562cfef16debdd284180656": "a5d6fefce2bf1aa143e703131a54f17c",
".git/objects/80/3fa2299698f94b00e2098f29356d6b13f93009": "77aa8bbec491060d854e042a52a8b717",
".git/objects/74/a07f5ba543deb4ecdd4d1da4c213497978c6cc": "966d46d63358eb12a9f8ec67e2518786",
".git/objects/7b/e01e5c7ab0e8eff181de51439f5f2cb6297eaa": "85e0c24f3e39019286b69ccc7708a684",
".git/objects/21/1f712366e6fba1a839275e952efd4b1cd590d1": "9e20c06c620bce7523e3f9cf1b2f02cc",
".git/objects/6e/916591e5c713123876634c30c3d245f294db2d": "fe93f8880958be1cdb443c93e72222cf",
".git/objects/9a/7376067b90bbabdb2a174ce578f8622be5b49f": "04a3d0de6110ab94028a07304008af61",
".git/objects/09/b2eba0740595fcee6702eeef8f7f72439ae4b5": "3e814f6e6285daff2ed873eb12b91044",
".git/objects/09/1784150974e6c834fb683b7e560abf8ca30df7": "8f17674f7d3b7b0956db96563f50c3d5",
".git/objects/31/d427ffff5f03fda0cd35eb574b890d4553b461": "1b27e14e1d159447f506a6988c381a9f",
".git/objects/65/c6b2e0e5364f10d95f0071503ce1b785a2d832": "ffafd84aaa0fc65a5c0a490f3ddf3306",
".git/objects/53/dc1a7aa14e84c70053a3291ddd498bfdd8029a": "4dd55bedfbb08ccb4976d7b2154c9409",
".git/objects/53/0608dc31a3a0a8a38cdaf7c64ae0168341c701": "19cf9932674a84ffeb87be3e60eef39d",
".git/objects/3f/091e3b175b8054576768200ae654a6d229a50d": "47ffa5ebfbb94938dea7b33c62301afe",
".git/objects/30/8e3c4d46491c2a9bd5bcd1d09ace3bd2ceb1bc": "e4812baf87f6203cc2182d29078c5c2b",
".git/objects/01/168375212c5477016b7bf7fd3c886b9217505a": "72a9a5a9903e357238f2bf56e7212ca4",
".git/objects/06/b7365d6e5f6689aaf54dabad5d90f8dfb0642c": "3b0ffc25fbc8c790c8d4582f4ff86b3c",
".git/objects/06/e016502a71560396863ff1585d8e615bc59a00": "c6d8a3e551ddfe55be84ddedeb5d5b5d",
".git/objects/39/aceb8b535fd355b419e487378eb84574029e82": "0aa5ac8dc93c32bb5988ef7375db4aed",
".git/objects/99/9b8514522a0eff37c42c12aaf044dfdea1b78a": "51721077df3c39b969e1dc32bef42ad6",
".git/objects/52/2f6d9016381fc72b24e459f1822b79f831bf0a": "f963d49dfba7fbb7cb16876128669125",
".git/objects/63/2d175b14491f7e83059fa695049014db0cb61a": "8b4c12ffaa021afd8dfb2dc6dfb00098",
".git/objects/63/c2f77bd0c78700796936de7a5b96cbcb446269": "6cb15e545083d7fb57550a70a87b37f6",
".git/objects/64/d8919a35c430926ba295a7221872a00850b8ee": "e6566290ba1cdae1ebf89e915d5f6139",
".git/objects/64/bff33d8c03ad4723fbb3fb0210d5fe5cd15800": "ae2f23e88c5e78868870c0971bceda61",
".git/objects/a7/4c771822f0a18ff8c1187db99342a62ca7b70b": "cdfb62e2254b7d704833ce37253fd597",
".git/objects/dd/47030ac8618e67da7dcb65ad969465cb591783": "561d3be98820ac5e0b592174dd53f50b",
".git/objects/dd/23883881572a08777a910db1ffbc8693c5e184": "5959111b9d0796c6d4468198ae8ac011",
".git/objects/dc/7f567ea3ed5db7e070f3f183a6b603ce66aad4": "a80ebdf147ae23772c17c7edd4618f03",
".git/objects/b6/4b3037fc15c64eb5c4ae6bc2651901ff9b7664": "4399e71dc5486d4d22300e86d725c0ed",
".git/objects/d2/cc29f725a7bc9c2ada58998c9e80451dd9294a": "2e0c1072b93b34ac97aaba1cf8be964b",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/aa/60f20103e60a349c51f479b50564ff4043614c": "2a0339859d6610fb748499ba86bf82ca",
".git/objects/b7/f7c10700137fde5b11bfe6450c9688c41f4e62": "7f3aa461fa7969220e9f88f9aea6e1f6",
".git/objects/de/411886a8058f70a08ee643fcdac17ff35839a2": "bf5c0cc6a01d7d4915a7c9d5d91f377d",
".git/objects/a6/b8867f9eb720376d2165688414e0eab4af95e5": "e0cb3fb008818bc3267da1827753dd54",
".git/objects/a6/d82873505763ae11516492393eff74c066e11b": "ea7a04c481d3afa278d4c8ceaff4d04a",
".git/objects/c3/f00030e6424049bdd2d4dddabfdb911946a274": "01113b2343936f382eafe7d81abf569d",
".git/objects/c3/b1e106a6478cfc3286fff5d9cf21b2e4c3dbf2": "94a8da02eec9b9f19aea7b997ee2760d",
".git/objects/ea/06f3d549b600ae3ac02c8731a2b87b621b2df5": "9a3494ca20a1c73caf08035eccba1f5e",
".git/objects/e1/245a2cd6572c4b7018de4e22e433108cea4b9a": "88f98d1e45af03c6da9b0cc090b4e0df",
".git/objects/e1/ebdca0bb26d6cbcfc5bec09dfaa5065f3ed88f": "f4995b5dfff7636669a7f19baac68312",
".git/objects/f9/5304cfd3682ce8b4fc4ccdbb4eb73a3a29ee5f": "e8752935abddd622b136f2ce976bf2c7",
".git/objects/f6/2372631fab36f9cb43373201702ac05001330c": "daab77c844d792ede61ed4d726f31e56",
".git/objects/e7/85b93ae986f4094105871202dd4d937a8ec603": "4a791f7739d697c1fd5878ded34c72d9",
".git/objects/e7/1809e9a295583c2766364d675d988b2bbb311b": "cb97df2b2e22f52f343ee674c6691211",
".git/objects/cb/73b6d66ab9a181af7410d3d644314228bb2c4d": "28dd8869bd91ac9cf804d47d8901fe2c",
".git/objects/f8/5bdc09dd09d103cf76f7e3a80dfe981d14bae9": "a9df10e90c439ef046866113c3ec130f",
".git/objects/ce/44d9e1e3b4f92bc41b14245764c980f185d7ac": "58c0ed09b1dad402518b105e20dceab6",
".git/objects/e0/8eefb85b8ae8a59504cca272e83e91d9963c6d": "b706868c436c7a7aca8375501d3c9bf2",
".git/objects/2c/921aedd2e446bd62f54abeaa9feee792ccac32": "4b4dc733b9a66c4da8abb3b77268a407",
".git/objects/79/30f30ba6ef55b325d415bd483bdc5f08e22253": "dba8ef1d0b5da65d39d2ffe1b58a7606",
".git/objects/2d/0478b6ef098fae327f0c8a94cf458cb30d20e8": "76fd020839b2b3c6828a13245e59661c",
".git/objects/41/8006b9911faa3ec5b9849a6044dcc2d1e250f7": "2eb889ebb609483f94cb07dcb632153c",
".git/objects/48/a22a1252636be42eee46f2c94b91bd90fad8a3": "a030145016f2be2b6d49bbe951fad728",
".git/objects/8d/e72652d4e918eb3b26c029a533f16e0e452f13": "20c324ddea881968069316a53e47a8c4",
".git/objects/15/542a54665c33b99de7a266a7d093e2f41d8a77": "00e1d02fcf2d2f30a649262ad17d1b72",
".git/objects/71/8f07a5c0d3df62156f1a403782719557b8d032": "42a24c1e18da79acbd65dfbbd06e00b6",
".git/objects/1c/b963d5980cb64621e3a328ee9dd37085a2fdb7": "831480f229c968ead8f9e46936258732",
".git/objects/40/4c04bb40c2156e12f4e77a3de26328e439c232": "7704bca9eeca6f0f1adc37a71e442d55",
".git/objects/47/250e74aa7335460edec50ead4314c10730bce0": "4392a73f918c54ebc53bb0b7656fc0ec",
".git/objects/78/e3328a47e54d749262fce1dc78da30f8e30add": "638911601bffae9b94fde4df32d8cad5",
".git/objects/78/6b6c820f89b618f5974bb99172180671a866f0": "27b71efd18d2dc37b31fea391ba9216a",
".git/objects/13/47a6045a9f209af70766dc6c910ab424dae3f0": "5ef68ed764e82a8cbf70472f013a830d",
".git/objects/7f/0868ed6ff9efc279840c49f3eef0b7603a4a5c": "b23c73ef40f730b3238524aa9e8fe82e",
".git/objects/7f/25e3c87dacf0e705b521f0ad7b8315d69effd2": "677bddd5dc8112501c6becfa6a5511c8",
".git/objects/22/726896f8b5f9443e5bba715a532c1c76f66427": "670e1f418637fd899fa9ca36d7d14fc1",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "89454dd08dba1a1df8cf47b3672d0391",
".git/logs/refs/heads/main": "89454dd08dba1a1df8cf47b3672d0391",
".git/logs/refs/remotes/origin/main": "173cc3235b0d572d0cceda7c52c734c9",
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
".git/refs/heads/main": "112e095c11e9ba6de8ae0b3d654aba41",
".git/refs/remotes/origin/main": "112e095c11e9ba6de8ae0b3d654aba41",
".git/index": "7a6194ab4cf2fda2be840c2a22173e50",
".git/COMMIT_EDITMSG": "5ab6fb8bc4e43974c6e06df8c90d3848",
".git/FETCH_HEAD": "1c167f007ce1d1a12b7e23282558ca30",
"assets/AssetManifest.json": "9928a65188e494099839898d227a4e37",
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
