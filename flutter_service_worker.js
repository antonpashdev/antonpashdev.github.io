'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "a1f65f9e254ecb4a7add6a1495ff4577",
"index.html": "3b86150f7816036f3abcceeea6223658",
"/": "3b86150f7816036f3abcceeea6223658",
"CNAME": "fdf6c2d49c4122659110a7e4742a5136",
"main.dart.js": "61a294ebabe85531071b45e04fded980",
"404.html": "f4e3edb53349945387e617abbd0fd231",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "985bb0584cba2b350ae1d8cd8d8526eb",
"icons/Icon-192.png": "13f05e854ea82fa20d841a6f53dad13a",
"icons/Icon-maskable-192.png": "13f05e854ea82fa20d841a6f53dad13a",
"icons/Icon-maskable-512.png": "2d64ffead12b468b17a85bf44e3de31d",
"icons/Icon-512.png": "2d64ffead12b468b17a85bf44e3de31d",
"manifest.json": "d73906208e502cad0aa1b462b4375c4e",
".git/config": "8e0186ac6805b7994c0e5bc675e1ce92",
".git/objects/0d/1fc4c2d086afc722cc8108d579b6fa6391a080": "00502446ae64c2875065c711805fe208",
".git/objects/0d/fa6458d1873ac133d967a71722318f13174983": "1bf235e05d89b8c33ad122e196cf32a4",
".git/objects/95/b5548610dc96865e83cc2ee0a78666ad428092": "57d885ba57929a899ce41c0e1a218a38",
".git/objects/92/7372c06a6c70d2c9b9a2529caf02dbe3e730b3": "8c35b639e16b58fbe362536fb2c28890",
".git/objects/3e/2e2f655a74cb6bf589e84dac716cf29aa89f50": "079780cd30936028e19ce0462095a9eb",
".git/objects/57/7f8355e2a3ac754a87f16d52336356533ddd25": "74c6d05a43253f62273898393f4d6b66",
".git/objects/3b/607859d10e4e2879fc677224758e9d97e9d9b4": "7b6db2501ad474c218670e4611c196f8",
".git/objects/03/493e40bf1102a2ac03e1ca0878583f085ad26c": "3af94940fc5c8fd2d6c0c8d007beeaa0",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/9b/9acd64591239d3d315258cfc41aca8f997fce3": "d13c20e0e8158d3e869d21aae4e06200",
".git/objects/32/c14d54032058e05632675b82f374afff634364": "98da3a9512d0a79a60ba71cf6e18040e",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/69/1d2dfe12c94504fc53f365f5c5a531db688cc8": "53f73cd30041e9f0ba3fbf293cc2bb8d",
".git/objects/69/0ef049c66ff744c491e19c95441861c9318804": "5a8485b4faa56eb16947e39721b79297",
".git/objects/69/84764e015dc8e60673add4435f27758179f8af": "9da49e8e799c9baa9b22c8c2ad13bdc3",
".git/objects/3c/920149511ccc90f459f69799a1b18e9b5a2788": "61d46d6ae9f5d5e146419a18daef0db3",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/58/194181f890a7008bfcbc837303aef3a6a29eae": "37b399490b03891acf395147ee5af3b1",
".git/objects/58/004fd17b059410861c33d0342acb264dd74f75": "2b518fc91ec938cc72cd43efb7488287",
".git/objects/67/49e76a25095505306364e683b6807ea664ee4c": "5bbcd372acadcdd661ae10eef365d06c",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/94/89f630342865ce5752a2fad3bf9b279f58d1eb": "e07ba93397b4d5865cfff4a1473e7e6f",
".git/objects/94/30e041148db96dc3c95fcc32dd78c5e48e9daa": "3cd61eb580bea1a5a90a09dc591c32bc",
".git/objects/0e/e89f20d8bf772032d49d121c39b40ae508de07": "aa906be2f17a42a04e7eeaa1a5e6a2c4",
".git/objects/34/e766c1f178d2f644286beede2026d19407817d": "c5696d352396a1b0dc3bad3eff8c390b",
".git/objects/5a/de9798139a6e254dc75bb7a092232fe03ad7d0": "0927fe10a7472475e4031f1fdf650bed",
".git/objects/5f/036a917c9805f3eb12223efd6f2ef63bf3c5b1": "71670ab6b2d1d802c2b3b79813c9eee3",
".git/objects/05/5f9d9a54a26d9c984bdc3adfa1fb61eb2f51cb": "d5ca5f65c0dc0333f027a8d4f584282a",
".git/objects/05/fda8483e75e141b035f460c1aa07ef8f038b19": "197ab0f5bf4ae923c24f475fdec0600a",
".git/objects/9c/84f0e92a9d0e9256b52ad54342750376158257": "4c3b28ebdd9f4a9ff5df1941a3e6d433",
".git/objects/02/255caab09a0fa9c985ada0966c87c36972c6f6": "632abf8557f76ece15b73fc31cb28117",
".git/objects/a4/925423259ad1628539067d8ed868544c9cbf0e": "9b8b0b34c58ecf3ff8ccedf8ed1378ae",
".git/objects/a4/e2c315efa681f5dc98f60e4e94ef260d8e6fbe": "58e2f286f2153036824890b5c51a6603",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b2/c30808575658d1d661314d3c539a9b415e1aee": "443b667373f875e4cd369870f604247e",
".git/objects/d9/2e72128e34c989f76fc8240340c3651f9e414a": "c34d2492680b5dfaf4f9a00314cdc932",
".git/objects/d9/0e259892bc9372e8d0b10e03da531d4cb72bde": "7f46c1fb234055fa131c95e7b9673d62",
".git/objects/d9/fe09ea68f9556de60e6f6b6984b1cd28f30bc9": "75b6e61b4adcd69226babbae7cf7bdab",
".git/objects/ad/8f1042921fe8ec9fa385bbd2253e3c6aa2849d": "dcb6f15748d5d1166c3fd0cb391b1abd",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/d7/963312859a840e3f323099001713f01f067859": "6d2de14e3054d4c97692ed77c02f894f",
".git/objects/be/899766e7b54b10ebd5a3084388aca1b79fffe7": "c26f6c52354889a1bbd3362c2560eeb2",
".git/objects/b3/15582610f5d2756540a1219b9f2be1ff4fa2a7": "2913a5278a651195383c55c9cc00b496",
".git/objects/b3/9637abb99f8f68be19056a8b1e1c3578a03483": "bd136e78f40eef19d41dd2be2471194c",
".git/objects/da/5402d55f2efa13aaa783c7814f4a05d193caf0": "09eb3249af9730e0ae8c8990d9704018",
".git/objects/a2/eb04da5df844d3d9580a194f4cbd090ba9411b": "e666d561e0c6bc586c4952412610e975",
".git/objects/ae/6f74d248973e8b4964f91a10c5b40c84019f68": "aafde1473faeebb9d9ebaca6fdd26e64",
".git/objects/ae/95d5dc517dd948ac278961ecc4d1e02080edcf": "e12b7d8e3a322df9a23a004c9a644231",
".git/objects/d8/ddd4330440611e378b60079cfd33038e8e1429": "f57bf879d5ef9e1755bb5152edea2333",
".git/objects/ab/ef9ea750d5f47128ed1f201f2b74ea0196afd9": "0466fe139e9319c1c17b89c39917cdb9",
".git/objects/e5/5162782b9a55dda1b6b3379984ac1ecb790b4e": "3bd878c11aa109eb422baca154c738a0",
".git/objects/f4/9b5836fc89c80e041469a9278bdfad163e92a8": "e76a53c57d7a75adc05c968974137f6b",
".git/objects/c7/72effa0b87eb2dfc4a2996c78f802ac6216d84": "6fe0786a412bdf536286657b91989d82",
".git/objects/c7/f6fa9f87485b44504c5892d877bf0fe0cd6f19": "2892eb3cf9e257a657ce0301edabb451",
".git/objects/c9/8b98f1c60e582c1d6e8bcf4248384d1f576cc4": "8fb28210051e7422ee9315aaec6eb6c2",
".git/objects/fd/0dba76e90d025994954b4f1db3f299dabe8c59": "dc49c6c42bd5b253a1157e98a9128155",
".git/objects/e3/b70b69ab7de7bda3e3f46e0fe730c9357e7b00": "74e4130545a914b9c27166200ecab72e",
".git/objects/c8/08984cf446d44d193369a923e97d035aa4d25f": "21e91d9d2c4f34a4bbbb61513a5c36f4",
".git/objects/c1/757d55a1fe60a057c07b433e79b79c70084ee8": "66b18a9991b5f484a8e989b82016cefc",
".git/objects/ec/b0038145c66e3a126a8e6a3f894d8491cd74b7": "882e0ac71201fbaeb3f33bd71669cd68",
".git/objects/4b/2202c50ab15aaa5783131b4aeb3559a5ecc112": "f0c1a4849b0133da359f1963c82777f4",
".git/objects/4b/6e815151319b6861e43797ac923e6e9d78b111": "a111ca225dc2580b537c18a74e877377",
".git/objects/pack/pack-ae2e9c953cafb3260a5fb549d2809c7925116a9f.pack": "909c4d942ccc5a9a3ea941ee97ead762",
".git/objects/pack/pack-ae2e9c953cafb3260a5fb549d2809c7925116a9f.idx": "d5c46aae333540f9ebc8c27c24ca59c2",
".git/objects/7d/758bf451d9b124ad2ea4bca3e19ec8570dd7b2": "eb63f692b2f8aff8a4bde7a2d7354cf3",
".git/objects/16/c6a20839753759b81967db8f7031c5f2c49f9a": "9d1c73ac4ca7b705152b3a0918c836df",
".git/objects/42/181d2afef37babbdd7c06e249a896caf2a2968": "5d6b6132f0e456a84f65f7acae826b7c",
".git/objects/1f/afffa61452fbc443264a9af40f5f39b31f095e": "90739c38db4ba3f94308fdc0eee15993",
".git/objects/1f/9f5befa5de5b1da090a9514341ee8cc9b6e911": "193039ba03695185bf4a3fcaf63f6694",
".git/objects/87/7870689cff529ea79023d6dd9c8c8089c430fb": "dd750efbf73ff2a435b6bc4e94b2f4a7",
".git/objects/80/f35194821a6b1687a4b35c6ef50d11cd7a99f0": "d2ab76796cc600d50add42b5c810b1c0",
".git/objects/74/bf7c09cd90f67a7127e218b12348f3a0156959": "a2aac2286721aa5c3f7c3750050fe899",
".git/objects/17/e2e26c0e0c538b68982b78edb61a8250839fd4": "1b9ce1fc146334a7fe17cd3f3b05a2f9",
".git/objects/8f/28794de6c4c94c22ca2dbe62049754b8471338": "4d4869835bfa375f97b63f3deeca79f7",
".git/objects/19/6817c3c68a9336564d35a440ec24e543a4fbc6": "49d4b11883f9531cb0c8253f7e4f0ba1",
".git/objects/19/ed2df746c8e674710ffe14ba45625cd143f937": "23993eac32fa01ec2ccfb4a6b7fc9bb2",
".git/objects/4c/6bb75a1e96a0a8fbc884a35a76cf9500a6f62b": "01635418ad64d34263437725fafa8f0a",
".git/objects/4c/91c88ed558981e6bd2b66dd2da6d0532fa96a6": "45381d2983576973290c8a6615789795",
".git/objects/21/9b361c2060973567fec4c86959bd960ba23a34": "dbe3c458c22b836b37ae53bbf73edb44",
".git/objects/86/b1547a71d3d688d26dccd0813feb93cb4aa349": "1e46938825b2af75428d3daae53bbdcb",
".git/objects/86/e38406df18a387c6fe5226013f5f06b1e792d6": "8c197072d78ce5c745fbefb505e9340e",
".git/objects/2a/d75d8f4e01bf79f205fe883c602d5bc56fc83f": "d00b00f54419a52a7869ba7a044dc337",
".git/objects/88/c86f7384b6e81f13ff991487baa8ca672c4214": "e31b0ba4e8019c042c9eb406ab14845c",
".git/objects/88/e5068c9c1c87d8155ad0f31a998c98abb3d431": "eba8d3f6a2cf4de70c03c7bfeba8ea66",
".git/objects/9f/b977ab91b5db59f2b9876e57e48524cf2e0f35": "46cf658f031b5bcfb0548d6ebda97662",
".git/objects/9f/724962dc5d20c76167052ab7325163e1469eef": "915158663cd939370caf7ca787c426c9",
".git/objects/07/bcc207a2cfb9aec460b7ae00e0714119e47e92": "59046143549efb091e59012fe50390af",
".git/objects/38/ac571811f84a0b243a1874b49096cb7d080793": "90f1974096907fb7ef9c013a2b2e5fb5",
".git/objects/36/1998c97c7c6b999a55c5e337e1c0cafdcbc8be": "2fd9c1a28716dc942c01dfb23f79a0df",
".git/objects/09/ee1975276c58dba9082635713d8da6e84158b5": "39bd28758b7696434ee4f5d8184aab66",
".git/objects/09/e79b44a297e97dba4d22ce8755a68a1017a9c1": "535b2f19eeb7191a63666b27f6ae1a8b",
".git/objects/65/bfff0bf1b98e23244eabfc6cdc4018e421a8ea": "9a6ad64836f8b92b135684eb432ccb88",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/54/a3b75945cf93ecb5884e3df8840aa4fc7d60f6": "4a2fd370bb9e3b589887ba2b365d4a45",
".git/objects/53/6c9def6466d0dd921bbe5cafc669e3208fef9b": "51f24f30f44d760f8f06f293435a375c",
".git/objects/3f/326d15f417d4529ec18616a56ff1a22d86dcda": "8abc4fe81b9bb3ea9d6aa1842bea8c34",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/01/29ab9a3ea5b2b22e4b625ac54815bc5fc2776d": "ea056b54213f5f839532d2093b712bd1",
".git/objects/06/ded8a9d8a0f91d68315d0f36e3b29b929685d4": "75e8e5dbe21c5f2f550c9c461f5885f2",
".git/objects/6c/55a649ec4985af7a1d965d79392863024bca4b": "92247499eb767907be5ac245451c52f9",
".git/objects/6c/013533b7afb18078ae4e99f35a59d271da0e7d": "3d361e2f9055978269eb48c60f40ab5a",
".git/objects/0f/c8298c6a1d8bd06b73f7be6dc84258fd112581": "f0e6bbfce6dbf11c636d94360bd6adbe",
".git/objects/0a/2dd41617256ae65016563117df00113ac86f83": "d6cb64aa0969f140d93251ef64292530",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/dc/b44d7beb192cacbfe369f602cf8c92a3d12edf": "9dfb7b10a498da08dd3aa4f944406526",
".git/objects/dc/3b69d46c74adea201d26e1cc5e9b244e492f18": "25b9f309044fa3d551f1ce87c4d8cd6f",
".git/objects/a9/e5a79f279670d585b506b4168f39c1c91e8323": "78937639492cfaa78c40cebaaa729108",
".git/objects/d2/e05c5b53c130d18d3ac4d0e47cd22d973b4e02": "3ddbdb87d4bae80c24e9f0b4d81a0640",
".git/objects/aa/d0850e1a5f12bbc952c9ad8e32542b1ad3cb30": "abdb462c33c6f56a8a186cf1e7fb6b14",
".git/objects/aa/65a573ee614ad037709a005a427d237db8b188": "dba39e74d3dbef46f6c2d13082e1656f",
".git/objects/af/2b4c74ff6486e1e7b67a533b5796c33aad2b25": "8ed6a58079cbd38539cba7bbae3d0074",
".git/objects/af/808dd491bd61d5dc6fb94bbab5321dc5cace74": "4082605059573cb21ba46b26346a570c",
".git/objects/af/1aef710a8bf431808e9d2d0a93c1846802dfed": "5245cb7e8805bd7b9ea790617b02d04f",
".git/objects/af/0c5e87eb6403880a3bfaf30eab37e64a5adca9": "1d265f8f28098641ae7e64f9fdb3e591",
".git/objects/b7/38f514c967e0bfcc3d107641a984233db9d647": "a89dd19e65cde85723d9ba5ec6f8f363",
".git/objects/db/5c460e84211885cf25bdf06aec23a3080d4ac7": "da5192be4e3b74932f6a62b550ab0e13",
".git/objects/de/12c62ee8357ab8c7d688fb3b607dc9ba7c60b5": "595ea31cfaf67804af5bf7ecda3cb322",
".git/objects/b0/867f5decd28c2367dcbe40d295b3e94702bc3f": "3b3bfe213c866cb2a8ab8d06109b925b",
".git/objects/a6/ce0bfa2d9933f899482ffd402b6f8ebd28e608": "be777cb1ed8a18cedd424634968f98a5",
".git/objects/a1/6b9677074cee47365dea28a97d9e0ca8f603d1": "e3c99dfe405abd02e76aa83698050c97",
".git/objects/c3/101771c494ce4f20daa84f4743fe31b213398d": "291f1b6f5a0ab5b701ed1fb9e2d496eb",
".git/objects/cc/81b9e7a4ce500cf327d98a58f27a47131ba4bf": "73e627265b66fd954f2900f7b043848f",
".git/objects/e6/631846b9167e35b59858d5704a2f214c80d5c5": "e905e473af2fdafae31c80dc18f84bb6",
".git/objects/f7/b1a2801a87af2d5460a38e13bd7d83d9e4b057": "dbc8e1f5093c85ca084bb8af3e8cd4eb",
".git/objects/ff/e473d98587f77456a76f7fb131496d228b430f": "97ac3a978d54e572c4ef70f65aec120a",
".git/objects/c5/f812897fadbe5f3722a0e873c5d08e2a0fa3fa": "93f4ac11ea9dcf051bedd0a1cf4cbf91",
".git/objects/e7/be009991b739952b2f319fd34a5d8cafe9b113": "7e1fe1dfdaa7b5ac74605c6c7c6db57f",
".git/objects/f8/b1b0f488600685086cbc91b72b4d9fcc6bca10": "6b300f642cf9112f5aff6bfe5ac06602",
".git/objects/ce/f0e2409715578ea1c8dc95b9980912a17613d9": "6fb021ab3299506428f1432853076501",
".git/objects/e0/d678e6148f8278e814405c09f31ef3c55cb7a4": "474562c730c996cf2a3803e2e4624336",
".git/objects/e0/a23a4b137111b39f0036ab345d039d597d05de": "3981c8389487bc7e37b0804e710f2f56",
".git/objects/2d/408796ea4107db5c989d311c878efe76b486e2": "c85d03fc27fb35febaeaeb1a1a31805b",
".git/objects/41/2a3fc8999dc28b1fe3971397576907c43044b6": "14cfd351e95ecb2879119d889507eaba",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1e/10c872dbd03589c67c0363d3168db6d30bcfd6": "46f435b55a92a9273cbbff3b2c6298ac",
".git/objects/84/d8b4acb2967f31aab89d209d0a3394a8c79514": "e1c20249fed82decc32a9cc7a4f8a937",
".git/objects/4a/dfc4fae27d3fbf23bf74aad939457fabd2730f": "d8c7d8e940b257749ebfc0d02426fa9e",
".git/objects/24/afc6a759cb709ec49c9e24499833e3b5c12665": "2bad306c8a9301e4d90824b4f470c28e",
".git/objects/24/600100854a917ed9389a5e6d8f30dbcc99589f": "aa0e4a1fa59326fa37d72066481568e9",
".git/objects/12/3fed36d240ade6351ce1d26c8245ffa6b0a630": "36930034030cd1193c7cf48284ff0b3f",
".git/objects/1d/75373e51bf029bf46620d1e29bf8f148625736": "5b58aec0cd85727652ea03e91336097b",
".git/objects/71/abbcff75d9d5ef73132091df0fed34052cc023": "97031497ab31cfa00c5e307264e4fb52",
".git/objects/1c/d6e20b524973bdc41fca5e62e2455e5274b294": "4ab8dc07dbd2d2880a3fd62d4c4b2621",
".git/objects/82/915be3458ed48615c6ff586349aedd5c76ea0e": "f6d309b31eda2c8eab58640a0ab01e1f",
".git/objects/82/1c4014514750d473c242f005bf364de107dfe0": "9f004c309b1896686a3c5fb9eb8d7496",
".git/objects/49/60851a0802529904ebd5a0a075ccc19507e736": "e6a0fdf6c9b200d562179792706a19e5",
".git/objects/2e/ebcedc26ccc4567523654239d192cfdebef271": "2a7305ca63b9d3d4fadce17465ca9fab",
".git/objects/78/1c7479756caeacfb45417d312b25f6e093a43a": "86fc6ab6939a0e2d08787636aadc8ed6",
".git/objects/8b/5dc3f1e801c2c97f831f8dd5a306e17451175a": "3488695b6185202b39d84baae843cb58",
".git/objects/22/065ac06e313bd930314a94d7c86a5758bb7483": "5197043e2a5e3186baaaffea69b21b26",
".git/objects/22/9297e40982666cda879fba2c25fc5252e43483": "b5761b2837b96fb510965244edf89ec9",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "b8f80718bf51157dae14b64d31abb424",
".git/logs/refs/heads/main": "46c30d9202803b8582e0a68eeb49501f",
".git/logs/refs/remotes/origin/main": "a561fb8a0de7530f42e9d7505506e53a",
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
".git/refs/heads/main": "de0a6eec9f7982c78ea217d7de9df304",
".git/refs/remotes/origin/main": "de0a6eec9f7982c78ea217d7de9df304",
".git/index": "b65e0d71f26959e6448dc1d9965fd307",
".git/COMMIT_EDITMSG": "5ab6fb8bc4e43974c6e06df8c90d3848",
".git/FETCH_HEAD": "c9b3925006cd3c1518446e1a58b1e818",
"assets/AssetManifest.json": "65276ced4bc588825f3dfb3c5c94f31c",
"assets/NOTICES": "67334809eafa1289f911af915b0fe7e8",
"assets/FontManifest.json": "d7689140d776afd9d94e9b9f2027da60",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e387345d8dc00df9774596b951ad689a",
"assets/packages/storybook_flutter/assets/README.md": "fbaed1ae60d80596d99545ef45d72803",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.smcbin": "af51a309ac76d16832a9c9f2f32bf73d",
"assets/fonts/MaterialIcons-Regular.otf": "755b05945c10a6379384eb934054cd54",
"assets/assets/app_icon.png": "6c886cb473854eb978ee51dc1bbddba9",
"assets/assets/images/avatar_placeholder.png": "9e5c35756c2cc8409ba875d842f83433",
"assets/assets/images/contribution_gif.gif": "635833c6bf950984ff83d9f6c76f0e5c",
"assets/assets/images/party_popper.png": "b629d4d9c32c27a121636cf110d0f749",
"assets/assets/images/iw_card.png": "fa409d9824612fee3b198274e6e886f5",
"assets/assets/images/onboarding_chart.png": "3fbb87f42d2875ea8807b496ada5c9dc",
"assets/assets/images/logo_with_text.svg": "b86c22c5cb2cab6731647eec54bfd39e",
"assets/assets/images/solana.png": "5c96da26ffe6f53814419153e59e5c13",
"assets/assets/images/logo_with_text_lite.svg": "ac17d32cb09effc5e6e5b2d70b1a913a",
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
