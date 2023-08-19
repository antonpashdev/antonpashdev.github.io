'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "a1f65f9e254ecb4a7add6a1495ff4577",
"index.html": "736440b235fb685f8a4d3393e9979db5",
"/": "736440b235fb685f8a4d3393e9979db5",
"CNAME": "ddb20754b55e3a40408b3ae5ef582849",
"main.dart.js": "4f0065e9115034d84e2e7ce879f68244",
"404.html": "f4e3edb53349945387e617abbd0fd231",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "29cf22f47a8f5a1134e1ec8b93796278",
"icons/Icon-192.png": "6e50e2dee1aaa849c995e88a0ffe4360",
"icons/Icon-maskable-192.png": "6e50e2dee1aaa849c995e88a0ffe4360",
"icons/Icon-maskable-512.png": "a577237928fbf0996bb2a32093825230",
"icons/Icon-512.png": "a577237928fbf0996bb2a32093825230",
"manifest.json": "d325510fc271463dc67236ad505148e7",
"main.dart.js_1.part.js": "d0445c8dbceda50de79d0c30e00dde65",
".git/ORIG_HEAD": "a98171262487ae6be79aeff300c08319",
".git/config": "5835a1eacbe7d6a632b5dd4c602d0d08",
".git/objects/61/0096e9a7e967816458c106a68753c7399ae71d": "a03dc38fa58b8b8e42bce6ab38025bae",
".git/objects/61/bbae3be209a8969b4b2cfb6522fbde19b1c5c2": "5945cc33db7656e5a03bb8f64197235a",
".git/objects/61/fd23f86588e4cae4ad6a9c7e5852455e33be03": "a6bff7a75d53ef92e4aee853287fd41a",
".git/objects/61/a64c3d54227e73901d76b50c32426ade945765": "c2b5e18f0d866128a3b71e8df041db45",
".git/objects/0d/7ed22b76002f6f2308e29ca6ee4e6b8fc8dcfd": "a659d1fa25d515a939236e74f25fef0c",
".git/objects/0d/4e09fba0634aaf48430a17a1cc24c446a604c9": "b6befcd26bee0137953a2cc0f186d100",
".git/objects/95/5f8f6688f4192ffb4bfb00dfc4144359ba2f46": "bce32023ecfb901e6b6881c7eeafa063",
".git/objects/59/46ad5b6bf840d796365576dbe8534aeabe5ca1": "479cfc3adb30f36c1fe5278f8724c6fc",
".git/objects/92/5f56ab9b118993fb1a5d4153fddba09cb83044": "51e90fb44fd12e1d4b01e315220f3bbd",
".git/objects/66/869b99cdfe57c8e3ffa134957dbe78eef3f794": "1f60b5f62003c8ecce05c1d476081101",
".git/objects/3e/f03234a9150f1db1338c1266ebd35acc721db3": "3cf8db6f1fd7327a7bb13187d489c3ac",
".git/objects/3e/cfd212c1600f22585cc2002e046a08d2197963": "343a634600790df1e6db8ec7193dcb09",
".git/objects/3e/86ea10c6fc38feae02c3312d68aae1bd7eb0c0": "4dff4d1464d49614401b892cc4e1e0c1",
".git/objects/50/08ddfcf53c02e82d7eee2e57c38e5672ef89f6": "d18c553584a7393b594e374cfe29b727",
".git/objects/68/1053621ca25afab6fa1f6ea6f92f3cc6c1d890": "05d08be7799cf2a3413b8ad363f324a1",
".git/objects/68/58835286204eb8b282a7f5f273ba705ce6694f": "f996b97aba21ff6d96e62d3d7ebf9738",
".git/objects/57/51cf2e462036c16a80cd527f2378603afe8dc4": "21326ea661018e06e0c59b5898e6d28c",
".git/objects/57/8722e8837cc59029e74eacb3e092f8945442e5": "84f2687a483748b230b1df6a5d651b7a",
".git/objects/57/6d4373dd8ff94baefa5864d9469a05599e96a3": "8a8b97d70b67446981a6e821868378d6",
".git/objects/3b/0189b2319fb2fd2a3025618cb5abb085235649": "618b0d2a0d57521b7d316faf7c932989",
".git/objects/03/da4c7cad27d73c6a75404f5c523058762a468e": "b1b111fa514de1ccb937c1200103444c",
".git/objects/03/26dafac7dd0d1f47439a5afa47bcc65b757efb": "59470419fb90ef2792d34dd61e5a4c5d",
".git/objects/9b/936980e26eec6ea852424851c8849188a90e68": "77406fccdfccb38edcf0245d2e117238",
".git/objects/9b/a20159c65a46d18cc30f182dfd5a24d7ecb46a": "c92fa1bc0f596e0147819cdda653b204",
".git/objects/9e/aebbe58a939170162bd3b88147a10d82f84e1b": "ed449f6477990244633a361a698ee473",
".git/objects/9e/fe6ab8b3988f475fd504bafbf940bc6b7c9dd4": "68cacb406817673ee0b6da91dc2e1a5c",
".git/objects/04/8e9efc15cc9c7048a4728f359395b6d8a30fc1": "b753c935c140ab4314094f0aade70356",
".git/objects/32/dec58abf6ec46b7bf44963f7c9e73fa1542b32": "f3ad9f47bc05ae76bb74bb59b8b0c9de",
".git/objects/32/da09e4f7934111e9e315087c0c3b8bc5a874d1": "3b7f6c6ccea5e2b1b034543ce33df035",
".git/objects/35/4c081e7593eb2a68b1db83a867b41926700754": "19babc9f5f611bcc4b6db7016eb52709",
".git/objects/35/eb1ddfbbc029bcab630581847471d7f238ec53": "b69277a8e391674b63a06b70141a9094",
".git/objects/69/8da2478bb87d208d7985d746a287f022ed9eda": "4a101069b50e2b71ec89ad6c6a111a4a",
".git/objects/69/47de7695e7c5ea281697ca146afb488a1df6b2": "f6e229edba7eaddde14d1f46e856e013",
".git/objects/56/10a885de2bf7e1b8f31b6a9488c8f4ce77442b": "a8ca61da8b752b2311e67a24463e3446",
".git/objects/56/069d42e3203e7d9e57adaddf6bc165da30cbc4": "03bfe13b7cdee65478e8c2f3239c826c",
".git/objects/51/0370f5ee29ed704b6cd0061fbf70800cad40ed": "647b991ca3caca2632df83256e1bc7af",
".git/objects/51/c787e7635ed1da9f965e81132ceea481924721": "429f51bb73bda8a5249ddb3d36372290",
".git/objects/3d/cafc70997a8276dec7e72179232f22b164b0d3": "9558db534856bb8fb64a6de6b54295b5",
".git/objects/3d/5c8af0b8224578234090711b1b353d275b5b4e": "2dbe79f61b3e7f5703b10e7a698fabdf",
".git/objects/58/7593c02c161afdcbc5ee1d6933e54f5228dd6c": "a60fd9c959e43bb593125629fe093ba3",
".git/objects/67/b8919f690ed3425b1c911bf2aee2a86c90ee23": "7bd69895b5fd9e91d2b2f9550bf4a5cc",
".git/objects/93/3445be0b4626542ddaa4fc32f2ee6691c83700": "20065f7b66f0b2e088dae122419753ce",
".git/objects/93/a7b6ea861498b5567c72880475f7979413acd6": "831e6e51f94bd6640b5d1be86f3c39db",
".git/objects/94/58dca3745450097f8c3edbd6a7396505873c68": "bdc584ab2e72f357cbefcba04e11d573",
".git/objects/94/116877471b0a3d4858296ad1e9aa1760c41cb2": "e5d9cec2b60a2553db2dab90fddca46c",
".git/objects/0e/dbef3827d987443b932e782086bb5cf4befe95": "1d67b902e3675734ef056d685bbe7f0f",
".git/objects/34/22807feb650f21eecc951a633412f3ca97330e": "066279bfcd04205c6a3adb005d4a13f0",
".git/objects/34/3db4c6a34de558922e0d3302d0437833fa3a28": "b301d2bf7eaa3bacfc566b3252ae9b00",
".git/objects/34/ab44860120777a389d7811ed3052a319093d51": "690c862ed8f772dbd366e2464e49858c",
".git/objects/5a/c6845714e9a505e11cea4564465d0bfa53a0c3": "8e1232ca01977c1caa7cb75ac4feb4ff",
".git/objects/5a/281aa7b75047ca14cca44bcb846906c6e1f203": "600873edd3e29a047f870a99ce42a799",
".git/objects/5f/19c9914ebbf7f5134a62095b84126db81beb9a": "0d98ae2a26719b809991f1b86070676c",
".git/objects/5f/dbd0807b26264c6e73e83bad0da48d27ede842": "f639e15dfd37f5e81ad919411cbf0f73",
".git/objects/33/fd73aed2c95c4c8c034a5822dd82e7352d8b25": "2e6f074c26b9e3d6316853dc34282174",
".git/objects/9c/40bf0fdcd4b23fd2fcc7e59ad3fb86d15e96a8": "c947e8a109ada1b39e0e450eaddba901",
".git/objects/02/26ed6ec9d5c3ffc6a411198f8880d97ef8c579": "8fb10ca02e842719896f0fb5097b6ae8",
".git/objects/02/236f42b87f7a32e8863cddabb789d460495306": "fc2716700879dd03de3076322b5fefd3",
".git/objects/a4/38252b9a28bd3b2bde9f411c5908e7e1eddda0": "c7cde85584857d4f77b4ce18164a53dc",
".git/objects/a4/deafc2a14d0354d69cc736b6cdcb0080d98353": "0672a2c2b7ed25e92741de2473f4999a",
".git/objects/a4/65c75340045ee8f97a3acd236f0fa36d3fd16a": "e0683ee94cd01b89f99ebe23248e7c24",
".git/objects/a3/4660d2fb11b2e29847dfbbba00ef06b377ccfb": "8b6e56364666b2be3b8d5cbb86df937f",
".git/objects/a3/7a3547aae9c4523fb143232bfb8349cec040c1": "f216a2680bb9623fad2bc47d5b28a587",
".git/objects/b5/2f5cc80c250a5ecac217c912b4b860a4baac16": "da5fdd0d5ffb8a0ab62321579d90b722",
".git/objects/b5/9f56012587189225ac4564d66bddcc4c3890f5": "ee73ca6de7dd581d5e2f1ce1b76d38c6",
".git/objects/b5/6f8aab9407e2d574a7705e8e3e4734b066396d": "d2f13a6f9b898a7895ef380c10eddf06",
".git/objects/b5/908bbdeb6f273011810bc98d54bca21cf24771": "4bd86ce983cc344e4f83ae2c4c7da868",
".git/objects/b2/8d9a54eb5a3ae71cf1e1be739151e1a7984b6a": "7da4e7a92fc4760ab95aa4f969fe26bb",
".git/objects/d9/adeedba3ff6b6af1a18cacf901661e272475d3": "f612aa88da2dcef5270233ce66a1a60f",
".git/objects/d9/c8751c3d47574c155467a805ab94b668c3585e": "f0ecc6cf742af11410699ab549e64eaa",
".git/objects/ac/f1fdf76b491b39ae2d2d9f2fec14ae9d73b8e3": "13a3d97eef2f67b33fa92a69c50530ac",
".git/objects/ad/b315c4f03a2dcd1fbce5f73c588d19cc4cbb88": "9ae25f209bb81cb60aab3ef0ee88dcec",
".git/objects/bb/5c0eafd1c5f3c30996bb8fb0ec8c10196f70cf": "98792e124c3cfdabdc87dcad512256ed",
".git/objects/d7/4d16fbcb3677ccb9f4bf72982f1b16567f5d99": "af20b33563c2d5fd363a896106390120",
".git/objects/d7/5c4650e478a83bb0075beb29317f24c32a7b0d": "a78af11bfdd0e9cd444dda4a4211d2ea",
".git/objects/d7/66ec54b7426c38acf6e525193a259e0451b7ed": "e5022bdd17bc9339f1b4955dacddb4e9",
".git/objects/d0/1b5815cd1a7cd95ac89d72c0a6460c4b8f6e4f": "4f1da0c50c8340ae963e57c413cad28e",
".git/objects/be/19977757bfcf839a176621d813798c8876cb39": "e85de94a73c6e682988f7d9b7c8ff71e",
".git/objects/b3/d8f83e5186f23244ddd18678539d4fe6f405ee": "d06700a0c1e1238ec902ded9833db93e",
".git/objects/b3/2f67054947ed02593eb0132c7e22e6377e6115": "c715cd0e00f46876880dce7dc1fc5577",
".git/objects/da/6545beaa7f085df1092bbb488e1bda18b051e0": "21b517a2150c1e79e2c417cf95dc17d0",
".git/objects/da/03edf90f57f60bf8562072837d1152c4aa3ea5": "6568346bb6236b25cab622df71a87eb4",
".git/objects/a2/213fc2b74d2a347e762ed3fe602c549e9b0b7c": "65591dfeeef2fd4eaba3c404eeaeea52",
".git/objects/a5/5b5bda224b198b2c31fa19f1667cb45d4678de": "77ddecc1df3000d06ad2f436f521cb04",
".git/objects/a5/2a3f451583e9cfce89ccd52a38c92ea47fd219": "a4ec732e03ff503c8018f49cd8f6dc0b",
".git/objects/a5/fa76615ed282313e9a265f611acafb8b175cb3": "6761fadd8a5809e7d535e9673dcc1425",
".git/objects/a5/f0dfb83ddc014f8d13fec6dccc481eac9f4254": "1a0c85f02eacdaee962de3d1d1b70b21",
".git/objects/a5/4c208fdf17a2ed2730eb28ceb4ff4841e9e0c8": "2356088029efbcb970ee8c674f7d43e8",
".git/objects/d1/2c7fad69d5d2fda0777ded259cc91ae9cdf7a1": "8fb01445501eff77ec5aafdf8d4c9e7e",
".git/objects/d6/84640e179a616a9348ebffa46b919b3731b6ee": "8d3cc2847fdefd44d490d47b2ffdd66f",
".git/objects/d6/5dd8142bd6694e32841fdca511afb5fdb6ccd4": "909dc9d5f1e20b4c6ec3b26590527c84",
".git/objects/d6/ebd4805981b8400db3e3291c74a743fef9a824": "6c33f0e88a71d9ba8563eab3ee932f04",
".git/objects/d6/b4374e05daca08912a7379ed6734f196499feb": "318863ee009c232905da3180cf92d538",
".git/objects/bc/784ab9667f1405355252307c0980a587b8e8fa": "c074c7eec4f44bc44ad98879887f9c1b",
".git/objects/ae/9c14adfac3208fd296fff318732defebb60344": "1954d45827a744d7e4ac347f2726b30c",
".git/objects/ae/c695b5bfbde343d041bc82b3104457e0a30153": "82db5371cc87958c83a1722584c44118",
".git/objects/d8/3acc497333a036db358033178e053f0e548ded": "9a98002d6fa97f5f42d11dd36ffee990",
".git/objects/d8/a3400e51001e269670a8792e4e98b949abf89a": "f7dc8f999d00111b857aecb959c2ddd7",
".git/objects/ab/e64b85e1c4f7e1d158fae1ddf6f6c252e9e0c0": "d44b5ffe77bd1400b0607d1d83e7103f",
".git/objects/ab/539c1a9b8f89df8c9b4f6748b3e87f2ca28080": "c55eb14fc1db45dded52cef9b7762e06",
".git/objects/e5/c9d60fb401fadc0806976ce2d7e5c6f1501835": "447c8a83c8265e2f73469848e3d9a7f8",
".git/objects/e5/6bdd1ab03535cf1b6c11b2c74589479b4cbe64": "e0b26cedead5d6f300dcc72068869e2d",
".git/objects/f4/1d70d5350e13563cd9751b411692f868229c60": "1b41b653a222d4d553ab780a60dc3eff",
".git/objects/f4/229c5c5c6e45e1f9da7adcb94cb6e41b35e3c1": "256bfc9c312b287287424fd6c8685dae",
".git/objects/eb/99d778b105540a1118c3bb59e203936c214d80": "00e6613d25aa4ab1f9de7721b448b5bc",
".git/objects/eb/5834cc2d0fb15c59928eb3d6023e1e706df1f8": "d35f94f2fe943d570301d849ace9b6e9",
".git/objects/c7/b121d13095b39d0bcf88a4d96feee04d7de605": "2b7599d14adfe77736b5cf9294e362b2",
".git/objects/c7/b506618f5ae32ece0823acca5e4cffd0b1ec0d": "0af6f6be0bd0b806d1b84f20e30a7311",
".git/objects/c0/31b85df0e6aa9698f5b3202c717114b81c8c7c": "ade4654fc3ce07c81f6f0ca55587bb58",
".git/objects/c9/ac0fb8dcba60b5da2d68fbb1e7796eb4345b7c": "5a6c1d33e0719913973d0fe96f0863c6",
".git/objects/fc/acd4637cb5e7bed73639917f81b77591a3f8be": "24ebb8506c5cae032e58efad6450ac7e",
".git/objects/fc/e90f597645769c60f23cafe4488c9bcfc26c24": "f614c46fa620405381442b0970d55267",
".git/objects/fc/d452128ac2496841fb810a93a00b1855e0daea": "a2e5589a5d48f40314824fd316abe304",
".git/objects/f5/ae851858f587373fb5f0f512c7c1421f83b79a": "ad2d5d10bacb47aff205d1731db648e8",
".git/objects/f5/6e4463ce136eb23574ca0363aa19f920cef3e3": "ca7b2efb3df07f17398813df721c7685",
".git/objects/f5/89ca37d210990980a9d9b1a5cb4a29d2db6c70": "8b8d21aac8e6cdbec1fc106163311c31",
".git/objects/cf/039cd58fb8181b734e7b176b6e39f4a4075818": "b3e4b2a85c652925672a32653d018ffa",
".git/objects/fe/651d923166a237ccad299e5f4385d6f0df6798": "6f5cc7805ddd86f81c3baf7a9b551cff",
".git/objects/c8/e726bb643fab60992cd8389c8ecad5b9cfa230": "cf216f07291163afadc8d605e0c9aeb0",
".git/objects/fb/7117a2a1960dd8bcb8fdd5ee22acc4562f9833": "ecd0c058312295adae36975b25af423d",
".git/objects/ed/aff8546d7f141504239eed8dea432ee7395896": "4e9c83ebf3024e4af4a043ef1e0e503e",
".git/objects/c1/7e442b2985bd79002caa437323a078beda6afe": "4b6c607efdf4ef40b2bcfb3c8149e4a8",
".git/objects/c1/b62ee8073a2919cf5070ad2e363a961b12983e": "da194361a9bbf1e4c6695431294ea2ae",
".git/objects/c6/312c43d3b0924f65569732f4a6a807a280b0f7": "ac0bcdf1afe5c67899200ad4e82e7b3a",
".git/objects/ec/fd9325f5e43b145d1a214c0b992fd7797f996d": "f96acea2c0d0dc6ff345a4b74a342cb6",
".git/objects/4e/109028a1dd838d282c16bd2bf6917630ca3fad": "e281c3b949ea26d290a08ac00543fc3a",
".git/objects/20/872bfdb2804f71e88d1353b7fb3bf2bbc5d67c": "be5ff2d49a3cb16450616a4df5acf3dd",
".git/objects/18/afa4ba3d0a211034dcff15bc9a377ae27df3f1": "584c50b5ed775af63984818644e6cfa5",
".git/objects/18/5fdcd6793a754fde642c4e1d5fb968624683a3": "a687fa51f8a591218feaeac8973e1268",
".git/objects/pack/pack-0cefc9f5c0fd4b11613acbda9e6c89f72743fbd8.idx": "1acded893689122f46717e66ad948668",
".git/objects/pack/pack-0cefc9f5c0fd4b11613acbda9e6c89f72743fbd8.pack": "b820e0fa73df7b9bb1d9714ae3424f9c",
".git/objects/11/356547baa1979f8d90b6213861cdb98f56f525": "b84ce4538ee0526c3aed5a09ba65dc95",
".git/objects/29/90b8ed9fa19755ebabb14b3264bbd7c3d42adf": "8c0d6a285ec1ed8ef9b3efd23ae70327",
".git/objects/16/930f9e44b66c109ab6a73d5a0641409faadc2e": "cf39f0eb42c9da8b53f1a0617d348f30",
".git/objects/42/5dd4c4d5db5503540433c0a0d4f7748df51123": "3c4110f5c7b0534efd5692fe10dbe19d",
".git/objects/42/ded0ce78b0f0d47cafd1669843f02b54d5ab0d": "eb458752000dfb74180550f9049c7431",
".git/objects/89/8fee3d76a4e7d54934d98fc730ab768a8d4344": "bf71a9c2d171501aaf96a9953df6b11d",
".git/objects/45/cc711a5ec2f1452fad4759e1ce0bbd50e87e7d": "48ccaa3e3b91830b4b2918f153a9fa42",
".git/objects/45/6ee88470a21049fbaf61a5345839990f874c8a": "dfa0bdc16d3120a4c24793fd7648c5d3",
".git/objects/87/b0f152a32e77c79e960db5fb64b0e0923d30db": "229ace025eb6a8f1f07c0152719764f2",
".git/objects/87/24c45faf449a20337ed0f80ead0b1fe3f7ef68": "2760e3293583bccd15595413ed64fa82",
".git/objects/87/4d63f91ddca9202f8bba00d056874d865812e2": "1ec2b6da5bb6c6c61c4d4447073f4b35",
".git/objects/74/d7c24ae16be48004c57d07e28c418933a0f237": "a34ee020efd8202541e43edbb7331ffc",
".git/objects/74/538afb75c3dc5807b9bd0d88474e701127de81": "1b81ccb8b9d1b2b9c044f8d8b555f092",
".git/objects/28/dcac2ad60f1a2732ca71d51b73fccc63dce237": "5632ad8c33b94e0c872d5e0d6761aaf1",
".git/objects/7b/6ae7be0f9ed3c2f9c5facfbd2ddb9c8b10f4f6": "00a2c9bb11bd5d9a3a2534b130e80036",
".git/objects/8f/5162b37c9983ded57996d733f90b1d9b8c7feb": "39705596de794d464fddee542066fcb4",
".git/objects/7e/95a1336a5c5c46c7b979f52aebe53e742415d2": "1bf452c5940ae795f12aa843cd8529e1",
".git/objects/7e/df9a2b343d5068780df8796daa0202655f6f0f": "cc5fc7a1f043f4902af0b589d01ef6eb",
".git/objects/19/d3982c1edcc2738b2a42e9b5a8c712db08b99f": "fb3b6f1861c0d5789e04cfc0e523695e",
".git/objects/21/ec3e0fe66773894d334434a5b9a61657ceacb3": "bc57ab09aae861e92fe6be812f0dc5a4",
".git/objects/21/71272c2c68b337676bd30fe46d4be8cd0a2fdd": "95084944df3bf09f1958d71ba772fc41",
".git/objects/4d/99cd11b464d10244a7d0bc6dc8d13c72502601": "1481b50ed705a1e06c308494d8812f11",
".git/objects/75/e90fe3cce67ca28504f818c346cda3600aeba5": "08521eed9af07ff02a06f277afd0081a",
".git/objects/75/f4ef374c890f203cfcff238cf19877c93de0ec": "4660d7ea40f516580887bf673327dd4b",
".git/objects/75/b22f2d52becdae9dc09985a136224f52e06ad3": "085de3bdba750f17a5830b579938deb4",
".git/objects/72/8b5d061b3457f8b7e9442b723cc039069a5ab0": "8ea9e489478ff282b958e83491865665",
".git/objects/72/c2840a97c330b855f2a55acb75dbe56779f712": "23f39547bfcb867cd73ad603f6bfbee7",
".git/objects/44/265ab894fd3db8f534c8ed865f41166a27898c": "b07460487a730af30ef36c1bf3739989",
".git/objects/2a/e53053a3163221d365abadd2ffaa49a13f4d2e": "bd1e7d9ad19df7cb06363ec217467727",
".git/objects/2f/79191fc2bc25defcf3d045d22b708115b3456c": "d75f973735cf9ad4a5f8101ccd4b2b37",
".git/objects/43/db4eabaaaa9ec5fa6a768cd8413e38c8fe39bc": "a8446d94ff4be494b52f62e8522d48e8",
".git/objects/43/ace189410c72ff4a4af218ab21d3d5e2705c47": "6119f83829cc3965d5744418f30dbb3b",
".git/objects/43/aed2939db176320120b728a4b9e49aeb9cab81": "38f4ebe7d61038dfdc6546ed0e74c1b6",
".git/objects/43/25e5d8ee94e694a75b8570c81104cec7914bf0": "53cb943a4a7cc66666672c371f696f90",
".git/objects/88/d0bbb96db2eaece90083fb6a5e88c9d8302a76": "a63cafe58b4223ebdc08237b492a8929",
".git/objects/88/ce5a06bb72763dc844b3dff867f409501ceb2d": "b50ec8691c3c2f08ac392a275a590331",
".git/objects/9f/6ce27c549ea3bbb3ed7dcd68645e8d39959951": "16f48ff491ff6dd35aee1a39f7aa6ed3",
".git/objects/6b/1844baef6f04580d32b08368578e8cd3ef7e8f": "ab458cfb4e05fcfb135e6c7ca79cdd52",
".git/objects/07/387e6ad22d7e4ba518f054307bba3c5f49bb24": "273e274902ccf591ec520359ef5f6667",
".git/objects/38/e020bf74cb96e779e6022fd6d5e90064aea0ef": "3a946bcf94a5b0af13e728061710064e",
".git/objects/38/5a50fb2af4221e67186445e6117a715816f050": "3ae4b59bee59452be8b2dafc0771a3e0",
".git/objects/00/6016306daa7762d1fe3c3d498ee4d8cf92e6a3": "9bd4134a7bd527605889dc46b96bafa3",
".git/objects/6e/0d9402ff4bea0301f487e0ae8b17eeb296df64": "b89e927f0af7e6246bfbfaa357336a96",
".git/objects/9a/87aebacebe64b3e57aa1d803e6c66d55d9acd6": "ae6d2d16a56fa60e1d5cb3e05dcb66bb",
".git/objects/36/0a9ec42ace9864b04eb6b02db8d4fe2e1a3ee1": "e3ae1550aae1a1a8c866dbc59c83e4bd",
".git/objects/36/b4918e3d1a2e0615c9662b04f83f052f48039c": "14b8e8bb27d997ef681bd80ffe94334d",
".git/objects/5c/a44901de09a63b3960a986668f6a1a4d8ec7be": "5dcf4d5feacbd97f111fdccd6eb6a24d",
".git/objects/5d/12aa5b40efe42ba62dd34629141af6360e1b8c": "3dd5374332a7af6af80c626ed32deb98",
".git/objects/31/970860c12632d251d3f6651d9e5eed5cd9659a": "b1445aeafdef25070b496c499bbff836",
".git/objects/31/af54aea52310ac9466f54c713e5ce6fd3ac2c4": "5a0c7997bf39e6659219d2df3e3201e6",
".git/objects/91/73022c18c2a2e0f0261a158617045c8c35e3be": "5d50f3ed86c3e135b1b7f37dded7135d",
".git/objects/3a/f655c2ea4c57afb900786a54173c4b3e6606ac": "7df725dda7dadc40beacf0444ae60090",
".git/objects/98/10e7cc7d35764669a9a7b20ea4ebd3404e2d8c": "a571532bfeda7151d22922fce68c4c29",
".git/objects/3f/09d4d3b21f88f8049e7ba18f3c2ed5fa1cedcb": "8d42c2c0c554f30f8ebfba1368133732",
".git/objects/3f/fa62e6e6cfb7c8c337401bacf39616abdd2267": "1ff0215ca2cb10d886fed13f3ae2b22f",
".git/objects/5b/3bab8581ed846fa0146eb2ca5b2acb563587b6": "c203e374d9b20d1f82ba3de59d1b5de2",
".git/objects/37/809b43f78cfd7b56d2eccc221e7671abe5b777": "07535be82a41fcc1df1bef0a97d0652e",
".git/objects/06/7fd71b9c0ba512e8c7bd58cbd224d4c21a4bfb": "5b4bc8a093b70fd6b7223e83954ac086",
".git/objects/6c/971dfac0a06c5fbdc1b71a84b1c8a819efb2c0": "46ab18798fff88772877d887e169de7e",
".git/objects/6c/8a5a13564c20c75283c6746b236239ebf5f55c": "c0e111af6da67026aa86bb76b7b6b233",
".git/objects/99/bcaf32828047a9a3a8be76460229003ee74ea6": "0c40b936232f7c163c7f8ab17e466ba2",
".git/objects/99/5b355d381546c926790b8e76249ca243a2400e": "8a7c2415e7456121327cdc54c4d275c2",
".git/objects/99/0dfdb8646cbd14cbd7ac8da5544934931929c1": "fd07aa18446cdd2eaec7129115913cda",
".git/objects/99/7dbd3d90c8cc8a760237215e44f0228b085f28": "5f0db2de933cba85df7b6c03f74b455a",
".git/objects/52/f1e96ea296fd3953699316f64b4af643ace811": "4e6fc297395ed3b6ee05fb8e77556913",
".git/objects/55/ddbc9d54a27706a965a7f6f159daf89d73646c": "0f3ef8cac08ba0e8c41e75ffa1c99d39",
".git/objects/97/5fe342f66f752a1e9da347910dc9e9569a69dd": "d361650eb6d3788254b9ee7a5b1aad81",
".git/objects/63/9900d13c6182e452e33a3bd638e70a0146c785": "488924a8ec51457535ebf377a60e23c8",
".git/objects/64/ccedbd928dbde74b65692d67443845124eabe4": "944374339fc8f7da65baf05ee0339e9b",
".git/objects/64/00c8e2d23028bb209a0f14fe81a30f3995d3d6": "55f81d7f9782ebf1b94399b663400429",
".git/objects/90/b7bbfa1f75b3f4da3a11acdacec8fc75dfcd1a": "fc6eae3ae85860cec7c17349f8561945",
".git/objects/bf/f719cbe40a92e95b07b9a15da5ce434dab73af": "07e2f91048c550b2b446cc0dfe32a62d",
".git/objects/d3/582e7fc20bbf5ed9175a04001ece7f2f6a02ff": "71dfe1ff2cb843abf63bcd9c5c839ce6",
".git/objects/d3/98771da66b7f0bfc0a47b501a2863c61029ea1": "dfaa7dea5bb07df55a6af12eab725e6c",
".git/objects/d4/be60970138b9ce7fda9759a2874f333dba6fc7": "4b9025f3b7602448a7013e7ea50be209",
".git/objects/ba/dd9f8b082bf91aca2796c43e35d7c7db901cc0": "bf723a3e29c3fbd0ef74916aa4639d0c",
".git/objects/a7/7b6a4e756317d4c91781e1e9d8e49b54d341a5": "121d6308dfc2f135d3c1ce584f0ecb99",
".git/objects/a7/dd90a0e2e5fe6d870f2763e6d061d6986d96a6": "101396e1d44135ea3b69937ed4fc219a",
".git/objects/a7/18561fbba1c04775c38693c707c7244887d78c": "5fbf9ae1277dbd0fa6228f99549a5b9b",
".git/objects/b8/f94b32c9b708e8e5ef1bc44f979678eaff48e8": "afa8e90adfa5e95aa8cd81c945b68abb",
".git/objects/b8/038e1f406079237d4e4c62c97931521a9efbc0": "2881659007b4173c8a467331111b7f08",
".git/objects/b8/217ff32774b5b4515675fbab269179f7501ab8": "9b039ae1c489ae2e7e18186d7df87ac4",
".git/objects/b1/9a09dc5c6db657600c8c97845142ad6abaf677": "0e96a4bd79b9bb33413b88f87c34c091",
".git/objects/b1/b808f95c31a223f88387a21db15cf4994a07e4": "07eef454ddf1e27dd41395df74df140d",
".git/objects/dd/b5ddd0651b1ab657bfdb7dd65dd49018ab77bd": "d7d60f9af696cb6bd99467882d9bc3c7",
".git/objects/dc/ac7af7387d66f7cac27d4de9cc6fca2e663926": "7d6a1cc6b495e99dd54cad94035d99a8",
".git/objects/b6/338d0af623ea72d7732b5f2b6da7a81a3ea31b": "321c9acf5d6258193a55ae1a6068076d",
".git/objects/a9/41b94b7e15d34706322e43bd6e7a5965115188": "89542766c25d32757bde43824efc96f5",
".git/objects/d5/e21e1e92d88786eb97445d12c2fa2416dd5e36": "d46d2b6f24504ef784d10becf7131c64",
".git/objects/d5/03d682ef0284fa97127acd7df7c463cb031f3d": "de02b56ddf38770eecd9e8699ae35971",
".git/objects/d5/86c18051daf7c5d23a04d89a485de9b32298b6": "dd12806c19dcefb03f86d65b4ca5433c",
".git/objects/d2/092bdcb4e0e7a92299f28b6617f873b632dc4c": "0cc2a7b93d74a1b3a31e83521ea8bc8c",
".git/objects/af/65571f44e7c3fda9c75da31fa89552d561a789": "f1cc6e2a7333f94651f349ea246ec55c",
".git/objects/a8/d9d5a86218775a5ce8464aeaec67dbe26c6b67": "c9c549ec4e88de39987b6dfe15d929e7",
".git/objects/a8/264388c790563bb3b1652ef734712c5d85ce00": "63ba7f70c06829b1815e1a3eb9defecd",
".git/objects/de/05279bc68b408f7f48cb8660665b4333f48c53": "7dc86624d133a65aee4c2c764e6aac6d",
".git/objects/de/50ec78c6190c1361413010b54dfd60f2e0512f": "0530f8b8106b3b1cc123514a28de96f4",
".git/objects/b0/4b84374e98d96402e4f573de07438bebfab9e4": "058d6a3c787771cbc3cef4bb8d8aa79d",
".git/objects/a6/6db922bc6eaefb2d1ff82445be361aaef9012d": "1a9926b815856049e36e2db72f02a720",
".git/objects/a6/02c34b7148a88fb036d76fe05dfc64e4edda12": "fa4d1bba79191b626f5dfa4df1a28613",
".git/objects/ef/0068fbeb51a2d071864595c477a4a87c96f174": "15a20735dbf723acf74aaef362ee9f3f",
".git/objects/c3/f5064ad61a817f1a8941002afc8fc96c471813": "20f06a86973bc519516851b067d8d6c9",
".git/objects/c3/2883842752acf742ff9e4a68f0123bb24f31f0": "79d83aa2c2b4ba9eee3ab73957c8649c",
".git/objects/c4/8fc4997b4af8fffd601fd8c91b88b95d4a7ad9": "a6d1c06ecf787fc61620b1bc60061691",
".git/objects/c4/556ee0a6830be4142d714188d3cdd4f38256c5": "4dce366ab5dd07005cb140d47b78eea9",
".git/objects/c4/c2db4397937f47d9eabcde46bb01913e4213e2": "6d9cc8e9705057537d7fdfe5496490d0",
".git/objects/ea/0e5c2166a406a981f946dfd7809c20b5be1293": "6012910feba4ae87404c4405c189a69a",
".git/objects/e1/98169b291c9c2364e8462e82e831ce8e7aced1": "bfaab237d57208b4876a6b52a858786c",
".git/objects/cd/2ff29a0204f3deecb540cfe58f5ff38863b03d": "6250888c1535932922d8920df3f8e8b0",
".git/objects/cc/f6f5bb337381dddabb935502a227a6057f7c01": "5e31855adb158ca41c951832832cbbc7",
".git/objects/cc/13e27f1b287ad252bbc48f61dee05bd0de6a70": "faa4e4ed433a4b5ac5d0c7641e064830",
".git/objects/e6/6cea573b963bf32211fddd9911e3c3731289be": "e708f724a8dac8221d87aace5bfe5a5b",
".git/objects/e6/787b2ededb37702a1298a7f25b33cbdf369456": "fb4c337c129ee415f3bf1a00c763403e",
".git/objects/e6/230d9c7938b4e7d21dbd847a42c8f0cbed6425": "adf9fed866c0c4aeeefa5dfd3500b02a",
".git/objects/e6/b7d96b7e71050bbd0576eb3ebb704499cfb973": "3e6b48a288525ebfe6f6afaa059b8b6a",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/f9/9c5c862b00b419ca02f0670ea59c91e136406d": "7b3e336382c9c71df423da43ed753608",
".git/objects/e8/1173a5bcca31e9b9f84626edc33d6c2ee457d2": "43b008b39a9c7748efd4d29cb52c7641",
".git/objects/e8/bdd48215b95974a9d78861fb7df619739100c2": "4d80e2c030b1c9d791119e1cd857d2b5",
".git/objects/fa/8d7a9e5146906ca37d57cc1339520251fa8762": "b9e44b19e232879ae90f58bee85a3ee0",
".git/objects/c5/d69d267878d1aa7926fcf925b2383c80d22248": "2f189ce31a759de8efc5646fcfcbd857",
".git/objects/c2/80cf3c8b4fc5c49de01c5cfbae95e288ecf5cc": "3e216eb68c166aa066d3fbc59f130e56",
".git/objects/c2/3d50562d4069b637609dca49b9a8a87f2b172f": "a2c0b009917e79e7457480c9426089d8",
".git/objects/f6/7bdfecf2b0aee860299ffcb9be9f709f441390": "84e66e31aac61bf64e93cdb67e774d7b",
".git/objects/f6/5c822b1c4a2bc4d424fbd26c22b481da03d91e": "e372e8d976eb9c0ba9cf26534f8fd41b",
".git/objects/f6/ae123f13b5f44b7b21e9c1fe387dcae0b6e1a9": "8f79aec780765bfba584db3e70062c94",
".git/objects/e9/6ccdecc8ad13d871322bf1a46754d29b3ea66c": "5f543bce058aceeaa4fab1ee49de0f73",
".git/objects/e7/b626bd6e9c4420c5df10e1ba7a9b46a35eb633": "e8d10a4b57b98c1902139c847e1e7c5b",
".git/objects/cb/311495e0223303211ec534f8f462112d434f6c": "1b44c5d52b65f2b73a315c21a8594211",
".git/objects/f8/722cc4c8b38bc4fa883652ea9ba0fd82317538": "6a97ff68805560cfdcfb5c33e17afa11",
".git/objects/ce/6a1ea076a0e9dd09f0671d39eabb81621cc5fc": "0dd69e20077c05827965c35dc07daa38",
".git/objects/ce/05288d19bd4e9812b7e61d80e9a4c2c5b85cf7": "69b9265641973c25022b66c480c45e0e",
".git/objects/46/1bb3d03110c44da722084763cbc0c0f39a6270": "4075535f90778b1da19275e3580d6b1d",
".git/objects/46/9821b3b5a5f689fe9858cc82ce21c771276330": "5e94fb5b31bb2aaa61524dc132718cc5",
".git/objects/46/23035f4bf838f7d9c4e29c9f9dbf169fe24ee5": "4d03eb0986869227d74cea3555dcd4e2",
".git/objects/46/0110bb646f5e98f1e9c57634fc81056563774a": "037071f2f9b04766e294bf90d65c45d4",
".git/objects/2c/8de108e002797f7d9078f0890b8a69b6958c42": "47effb3e4e75b651eadffb061772b1b1",
".git/objects/2c/08e7a77a161e307ce3a428cc7ac51d980c3ce8": "52cfa5ce3ab2051c9975fd7bd038dadf",
".git/objects/2c/eccb927f8e271f7efd0514c3d5d45507175540": "aed97167af75187a6372aed62a34ebdb",
".git/objects/2d/06ad29e751b748fbead692b6853cc968fbc922": "fffe1005eafa8ad4390bc72b629da2b3",
".git/objects/41/1f71d8ec4150cba752c8dc9090b47217c2c081": "7438d0b7fa538db38122cba4c630e7d8",
".git/objects/83/871825b6d920f955eb58bd50bd5b2ad8f94882": "b528c3153b90a9aa704f0ce4393866e5",
".git/objects/1b/2fe6520c71255d4c5fa797a01f14175487f82f": "8395bb3014257a3e68ff5344787d502d",
".git/objects/1b/2a12784f56c9841e7b7e7f7ade71c76f29f5ce": "a46f0ec12110e110b9880a2f98b82a0d",
".git/objects/77/b5925598e70671033b4af7d749d58640070628": "d5728dab68bd733b7702911489cc7af5",
".git/objects/48/ee5df0bab59594e42321c7f0136ccf8451901f": "bd21cc9841b06defa700aecab008b9fd",
".git/objects/48/103b6af7af259e696768302bdb5307f896e687": "a21fc87e847aa8528faab507d29efa41",
".git/objects/1e/aa7b914978f647998813f55923378f9e03dc91": "fed4d5765ec29a391c21de8904c65776",
".git/objects/1e/022ff11f09955b418693f41b8f882468b28dce": "aee2c1c16336d00cafb02a53cc62421d",
".git/objects/1e/e1d6974db2c6411d4fc28c410e2afb69c02a1c": "f6330423c963b5490d484dc058fa8ace",
".git/objects/84/694bea5f65a8ef7d9193573085ca0d25fdef0b": "fbd967114a9360d6fbce5d4811ec26d4",
".git/objects/4a/86da505b6a8f1f2a508d3e1fd6054b5590fef7": "e968f59d125e51eb5f461fb2407409ce",
".git/objects/4a/b9f99f4b6e222a1a15d137e4fdff704af4fad6": "d7f1c39d837db75e46963654798d6cb7",
".git/objects/24/bd0a486f1389eda056e101de5cf51d97ffa71c": "a211cecaed0c8cd765471b006d1a9a39",
".git/objects/24/27b10c7ab531cc705a6e75c2d68e591f109840": "32929321542cdd0a712b39b8610ef3cb",
".git/objects/23/d753043c9fb8f1093f40e75431be516c8cccaa": "26af150a091895825268b38b511426d7",
".git/objects/4f/cefec783073b65041a6b11daeba4e0065cd167": "4ba5ba2c9daebe5a52bba7093355ef2a",
".git/objects/8d/608896b765e749b9262c8ff53d305510cbfb43": "f1167649dddead5e3c52de0e2675e482",
".git/objects/15/af36b88bd0003526df8f6e7fc935f958895237": "7ead7e3b25219c2d4ce4a1778b39303e",
".git/objects/8c/ebc72752f3c219c0d388e74d2bbc1b7fda6336": "e9aba8ceda6062da8dc8f2e555da7dd2",
".git/objects/85/b27352b9d38b3a3c914a8220a1420faec9f8ae": "78f5038a490d766efc4b76de0e3a7f2f",
".git/objects/1d/505414c0ccb034e49058d9064cbb35f82b6253": "73e0be313534773f8319153e657db490",
".git/objects/71/1c73e2b0533a3afe7697f640f27adf34f26f1d": "c353a6bea74b5d5a21a623282c9d52c6",
".git/objects/71/62efff007fedef2a91ab4b35757a785bc4fdc7": "2b0a64788251cbc6fc78d45beff1376e",
".git/objects/76/a2bee076282458001b225976fa0a0830b50ba2": "697f9bbb5a485fe79c27076904572b52",
".git/objects/1c/1ed3abcd7d183f95de2294a18679625ef1b9ab": "85dd67761cdbc67aef0a9c7d5522b607",
".git/objects/1c/dd54c3701462728c10002fbe5700d234746206": "a5d76b08ca859b37ae3c4dfb89ddfc8d",
".git/objects/49/22334fbba6bbd75e193a097acd4ab24335aace": "42fc0367a3e2884d0256bd78df9829bd",
".git/objects/2e/f8726a5cec1c687f8ab1f3074ab8159b6fc3eb": "66ae5cc362a6a1d652ed8dfd6a262973",
".git/objects/2b/ceda9bc31cb8247bf1286af0d51ca2f0683cac": "5676a10fd7d7fc8947d7cb99986e1839",
".git/objects/2b/aa5ed1bbb2016a8f932e9d0d9c5942db617f02": "1251da6b6a1eba41bd25acb2f32f6d74",
".git/objects/47/842c5ad70ac87730b9b45357a945f28c687b90": "dbf37b0d4aaa0d3e977fd2159dbf5a03",
".git/objects/47/6505c6ab4fda4ca911d6c031d0628ab89fa561": "e83104ac00590117b3038a9da040a2a8",
".git/objects/78/e028544fee91e89845c6dd4484c9c231dbdb08": "80bd27d565f908ec8d19d54037394ed5",
".git/objects/78/a5b9e52f7f616c38985682680631f2e79c86a3": "f39a09d02c6f3022c6eae2f6b7302fe1",
".git/objects/78/6f66a5b768828e59c3393933696e12379a3c65": "6f20aec92f498f2cb11f1da406418617",
".git/objects/78/9384e7897909a139748c25944a23a724eaff43": "adce533718117b6fb1579c9497921236",
".git/objects/13/18665054f18ecd9702cc0a74e69ab384e09186": "4ba98f7eba0640a6cd1a30a3957d9a96",
".git/objects/7a/c908f0ef24af17eda3e5b3592c395c9ea04779": "719c234ab20dec54df1463193cbf38e8",
".git/objects/7a/e65ce8a0fd91d43d31584d8f82ef3bd315bc2a": "2951e436d87299aaee3392d1d0e9e13d",
".git/objects/14/d44650eae0b413e5ffa3d3e7d455969f52e186": "c17d44d985fc4d2e652be6a6121cb0db",
".git/objects/14/49414a27a2b6535b12b262e30e0b63a86c1ff9": "b141def1f0fe77291590c1c354ef85c8",
".git/objects/8e/d0cddf95c6a32942d5b718db303955950a04b0": "45533c58db2fc4d652dba98ef7e18935",
".git/objects/22/d0b30bdd86faea64542ba35469fb68b92bece5": "24287b9ed6079dd59327cd9c609c801e",
".git/objects/22/5d0c055aea1ab8e3062650e4dc045ee331d273": "68e3f58504f1ad3c4d59f2f383a41acb",
".git/objects/25/cc01cd3a845db3b2a999f74837449861ff58c2": "72fe82a3c46a345c13994c4e889d4fa7",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e369494c6bbe9adb47dd1aa563ce3e66",
".git/logs/refs/heads/main": "9beaf3286ae26e1212879355f7e58e09",
".git/logs/refs/remotes/origin/main": "5dfdfc993c71f91e3a009ec53f2c228b",
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
".git/refs/heads/main": "279114a203b392dc30c3d4857559f0a5",
".git/refs/remotes/origin/main": "279114a203b392dc30c3d4857559f0a5",
".git/index": "ca448de921fcdace5a26ebf3a07591fc",
".git/COMMIT_EDITMSG": "839cd607a10548ee1189546886f173dd",
".git/FETCH_HEAD": "b4cbbf4495e6b74d96706a031bf901d7",
"assets/Loader_Animation.gif": "01022357735107d1c5d52ad9c38227b3",
"assets/AssetManifest.json": "d653d3d24f65819d815778715b815e1e",
"assets/NOTICES": "feafba1b154e76b155bebc9bbfcb417e",
"assets/FontManifest.json": "d7689140d776afd9d94e9b9f2027da60",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "a6ecd06e2f3d059e8dc41011cbcad611",
"assets/packages/storybook_flutter/assets/README.md": "fbaed1ae60d80596d99545ef45d72803",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.smcbin": "e396a4fb86f969d04966384acf50082f",
"assets/AssetManifest.bin": "54a4db76b1b791afc7db8ec7b99a6bbc",
"assets/fonts/MaterialIcons-Regular.otf": "f1035f21e00814ecfff60ef96979e19a",
"assets/assets/app_icon.png": "d5b6e873d21543415a0e2168874f965b",
"assets/assets/images/logo_with_text.png": "5616ae4153896b7e2ef7c72bc0b18808",
"assets/assets/images/fireworks_colored.svg": "ad116de1ff451983f9be053e68974f3a",
"assets/assets/images/avatar_placeholder.png": "9e5c35756c2cc8409ba875d842f83433",
"assets/assets/images/gift_colored.svg": "dae33cb970d2f165aa3d0a47530e3400",
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
"assets/assets/icons/edit_account.png": "952dc8be549802acc7bcd978aedd4020",
"assets/assets/icons/add_image_icon.svg": "afa5f7f07e25cc697255677811d8dffb",
"assets/assets/icons/money_gram_icon.png": "e59a82215d87d69216f967c55d4f72d9",
"assets/assets/icons/money_gram_icon.svg": "1bd0602625a99ba8abc6cb8d3a6cb5af",
"assets/assets/icons/arrow_right_box.svg": "faf155d7867c732c25507a9f60c5cbc7",
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
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
".idea/vcs.xml": "8c9c0403ab0f6457841c605f08a3340c",
".idea/workspace.xml": "ff0860635c9ea29f4a7ba5a44a779568",
".idea/modules.xml": "1eb3b065c55895e347308e50cd717dee",
".idea/web.iml": "52db5efd0fe9f576a1302b8c4b5eac6c",
".idea/misc.xml": "e6b023077aa4876dbe12734108325458"};
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
