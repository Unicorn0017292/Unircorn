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
"main.dart.js": "16b566c1c1d12aceef2ae8e14c501b5e",
"manifest.json": "2f6c7d1068be5561d1e23da66e929eb0",
"Unircorn/.git/COMMIT_EDITMSG": "bf7922cb356364e895a44a79d99e076d",
"Unircorn/.git/config": "dcf125018729d37be4603e66bdfb8606",
"Unircorn/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"Unircorn/.git/FETCH_HEAD": "9307cb2a9d3d2786e09774f0369339f8",
"Unircorn/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"Unircorn/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"Unircorn/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"Unircorn/.git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
"Unircorn/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"Unircorn/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"Unircorn/.git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
"Unircorn/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"Unircorn/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"Unircorn/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"Unircorn/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"Unircorn/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"Unircorn/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"Unircorn/.git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
"Unircorn/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"Unircorn/.git/index": "86c7d91b54bb7de12ef7e8e6d3d479fd",
"Unircorn/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"Unircorn/.git/logs/HEAD": "d6c292520c30c524b5d6823fc9fe5288",
"Unircorn/.git/logs/refs/heads/main": "d6c292520c30c524b5d6823fc9fe5288",
"Unircorn/.git/logs/refs/remotes/origin/HEAD": "7c2765dea599486574d722e11aeccdf8",
"Unircorn/.git/logs/refs/remotes/origin/main": "71108e91b38925215ab67f00be7ea7f2",
"Unircorn/.git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
"Unircorn/.git/objects/03/3a068e335463fd8879671b77a77abb58a1f144": "c2bdd2b7b6a75d45e28adca03b2cbb4f",
"Unircorn/.git/objects/11/d969a204977513516182c655795bb62a6a03e2": "e657df50782e22bb21a9cd16192998d5",
"Unircorn/.git/objects/16/d1134e41088289ed9b79655d0b50cff630afcb": "1ebc4308038e4b4c3abc492df19d73f9",
"Unircorn/.git/objects/17/9713338060e6468a8136a7a2977f84748e22c6": "c61a39ac2e87a289b70601bdb54527ad",
"Unircorn/.git/objects/20/929a621b101aff74899d2653656cfcfdb49466": "f1f3af536a332c077b12ae66dfea3f1e",
"Unircorn/.git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
"Unircorn/.git/objects/26/700558b3be7ef88ad6d89f4e50b6fc11276ed8": "fa5f9d14a02b203efce078d57abab97b",
"Unircorn/.git/objects/2d/1041f7916f35b963b47b75b7c2e512940f16ab": "83b93325d974c977590daae4e528a03d",
"Unircorn/.git/objects/2e/967e3d777a3754a9c0cc2ba97b2b13ae201eaa": "7d7054b0d8f587f498e2899fd28b8526",
"Unircorn/.git/objects/30/0efaefa7d2bd34a221ffad6d778922d14bceb1": "d50b8515ecf3b28528b1d55b9128382e",
"Unircorn/.git/objects/31/86f4735960888008c1c16c495f4f860cf0dde8": "13d6ccf31dcfd648e549d6b23941cf89",
"Unircorn/.git/objects/32/e1df43fb1f39a786809576c119f7ba13905846": "f43b5e66600c7dfc9375cf471bcd93d0",
"Unircorn/.git/objects/33/31d9290f04df89cea3fb794306a371fcca1cd9": "e54527b2478950463abbc6b22442144e",
"Unircorn/.git/objects/35/647cbae379db165e72ef3c24c2b2e71fe928a8": "e65bf804c18b42ca643c55e864a50a63",
"Unircorn/.git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
"Unircorn/.git/objects/39/6d5d3723527c41a8cedb9121133915ad3e18b8": "e8cb76e2fd1600c155c35c692b1f1827",
"Unircorn/.git/objects/3e/fd7b3e495101a42df9ea85ebef2d5dcbed5f65": "fb9d513ed3f52acd6aae7c4a2a026d37",
"Unircorn/.git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
"Unircorn/.git/objects/40/75913be3c5bf514a0f2c98a3b3412242a8853f": "1fa342c1189ac9cece35d345e8c2021b",
"Unircorn/.git/objects/41/b2d6f8d77fabfcb87ad28fa24a68b68c0bdef4": "5ced6cb723df607a8c9b4a8e67977846",
"Unircorn/.git/objects/44/0a9e95e8314b794a63cbdd58328bb0a84025d8": "aa80d8411c136ba07788efca1ae31a8c",
"Unircorn/.git/objects/47/fe1b26d50d34ed621f63b5e36094551ccc5190": "c24a101cdd7dc570da9c5f797a7cc67f",
"Unircorn/.git/objects/49/245065704379d44f37b4055ed37bc062abc389": "82dda956cdcfcf61c2eb085bb18293cb",
"Unircorn/.git/objects/49/5bf8f9685b554b3aa41f54760ef4b6e2103845": "d23d914ed0c1ce35ebbeae4264690c5c",
"Unircorn/.git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
"Unircorn/.git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
"Unircorn/.git/objects/54/752561c620b4a6ffe2866dac3c30a04cd1e424": "e5d45b0dab01a868b8a1676e09671792",
"Unircorn/.git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
"Unircorn/.git/objects/59/6608dd56aff38f15f6e6736259802dcc08db53": "e51e309b2a5d698dcc967a0779376358",
"Unircorn/.git/objects/5a/13bd5a18e506d22647433b1980295ce67bcebe": "50b077c2b68b737800ac0d99a322b746",
"Unircorn/.git/objects/5b/34b3802bf6051cf6b158823725440781925050": "4fc1a46752ee34a2a7efbf13b41332e2",
"Unircorn/.git/objects/5e/60760e05a60aab9d4758fee2d188a03d2ec531": "197f8d041c2f60260387761c12d5c72e",
"Unircorn/.git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
"Unircorn/.git/objects/61/9ba62974052d904090b432cd6099be0ca10341": "d7b07dbcf0f174eebb0c1966c5c5b41d",
"Unircorn/.git/objects/63/2734220cdccae0fed38624e794e3152564148b": "c4c453767909bf7e6cf8dab82fbdab76",
"Unircorn/.git/objects/64/5116c20530a7bd227658a3c51e004a3f0aefab": "f10b5403684ce7848d8165b3d1d5bbbe",
"Unircorn/.git/objects/65/33768d5ce0570717761891209fff0930dcff0d": "7672a0b4fe35c2fba3d9a1e2994d401c",
"Unircorn/.git/objects/68/cdde0a4dec5693f443518f027555d0d255ae56": "a7339c584799b97ae18228d8a619b7bd",
"Unircorn/.git/objects/6a/9264870df8a25faf0e9c9c0389853a075f05f0": "180dd5be9b863c677866cfd036e517b5",
"Unircorn/.git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
"Unircorn/.git/objects/6b/a6d3746567fb5ac86dfc2ea2cc42ccf7bc92c4": "0566b44da88cefa85715abc423f72c48",
"Unircorn/.git/objects/71/0fbd362d29db6cbda64c87fdabb9543f109578": "1b1c68e35447cd2571b1f156eb08d435",
"Unircorn/.git/objects/74/c726e32781bc2c0a83170f6800c0ef4cb9ddcf": "69a43282cb8038fd0577dc0529e5d6cb",
"Unircorn/.git/objects/79/b7aad8ac35e54c0d70943c2888034e84745eb1": "c01fa98c45a5687756eab1e89022a648",
"Unircorn/.git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
"Unircorn/.git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
"Unircorn/.git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
"Unircorn/.git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
"Unircorn/.git/objects/92/a2486d36c9554cb26274fcf167df0504952f16": "cffd730271045157c3e44059f09b9ac5",
"Unircorn/.git/objects/95/4b8126a9aaf556c033f218d2f1a14b1a43d69c": "0a172a1c45783c6511173fbac59bc7d3",
"Unircorn/.git/objects/9c/7e601e3bbde59beb985195c9e99069b78ca67f": "cc69db1edf83a5a725810cc780e6b24f",
"Unircorn/.git/objects/9e/f510c052254d60a69a801dfc7f19d0b3109dab": "aeb25ae2a5e797762459dede9445a896",
"Unircorn/.git/objects/a2/efe0804ab437f896a58a07cc6c7590ec1d83b6": "b5429d1761956d390f4126769487d9d9",
"Unircorn/.git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
"Unircorn/.git/objects/a6/4e3acc1ae278cfe05634d8e55e7a61c319c525": "f02f17525200377bf7b0642d6632b419",
"Unircorn/.git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
"Unircorn/.git/objects/a9/f5d2418d16d1abe1ff622d537a5dbd6c9da8c0": "4b7a23f4fc3c391e00090d381d18a180",
"Unircorn/.git/objects/ab/74ac13c5733bf1f7716f7474b91891c404797e": "4f69efa18edb911983bec76694d0a93e",
"Unircorn/.git/objects/af/f8396b3560d24d392e6a45d442afdf632ffe6d": "9ec304ca1a25a8e259ca55b070549487",
"Unircorn/.git/objects/b4/daa61cd857fee76e297a8b63fb81f4d25c81b5": "ccfae5972f2f18340665d22b46d0cc6c",
"Unircorn/.git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
"Unircorn/.git/objects/ba/ec249c6463e79556ec286184d0e848947b946d": "1c43cfb441206ad2f9f75bbc61a945ff",
"Unircorn/.git/objects/c1/0882745638fd95d703b969a33fedabb72151b0": "f3a55f691fc92730209aeb00fdd21f11",
"Unircorn/.git/objects/c5/6ee0d1854627e846006d1241f2aedce7b7c0de": "db2b69dfbd0cd05e19db7e9bf21b6931",
"Unircorn/.git/objects/c6/d2cb68f1d4367cb317e81222435349865a1eb7": "5360d2ba0524a1d3cf8cb5bc89ecb370",
"Unircorn/.git/objects/c8/b5724ed5959d8b8c9df80ce2b392487ec253f2": "a41f646b83a6a3b38233e9b2daadd89c",
"Unircorn/.git/objects/c9/2dd67191fc998e9c17e529d49bb20f8c0399fa": "34cb2acb69172e833e07ef60b83ae0ad",
"Unircorn/.git/objects/c9/c235ead689f99ef284f82af8ff0f8c81eea07e": "4e13d66e6a80f44a21e7e21b2d400810",
"Unircorn/.git/objects/c9/ec77f68b19dc59d7af119b7d92ea254562cfa2": "07edf261f37c2cb4956829e134d5b19a",
"Unircorn/.git/objects/cb/ed22a64b1e6e5dd52aa020895731bb42ad3d8d": "922ffded0003429d624d1a0df3140e2b",
"Unircorn/.git/objects/d3/d46bb5d8a9821b79e4ab2883aba8a65089dc06": "53f8c950ffb5187fa236351e951f8f7b",
"Unircorn/.git/objects/d4/134516b6f97eaa308a29f97deaee6a7477ab69": "6b69404eb385308b6c528550120fc353",
"Unircorn/.git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
"Unircorn/.git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
"Unircorn/.git/objects/da/a3d06656edfbf8fd2f87164a9db7821cc8333d": "c5138b279390bf36d6c70070aaf110c0",
"Unircorn/.git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
"Unircorn/.git/objects/eb/bd4b24c53fc53998f8d2776c55c0026c89785e": "203047499219f8da9ecc60646c7ecc80",
"Unircorn/.git/objects/ec/120ce730448f2c3db1bf484c14736981b45c62": "cb1adb8b773bae3142ddb579c5c767fd",
"Unircorn/.git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
"Unircorn/.git/objects/f1/f2c505d372d51419ae0dd60a40f3460d65d2ac": "4159f578035d9ba3c8cabd7b024aa22c",
"Unircorn/.git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
"Unircorn/.git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
"Unircorn/.git/objects/f3/ad3aa11b9764b6f6c938f3c811cf05924bfdea": "d7f47ed981976386dd7e5eb2234f67f0",
"Unircorn/.git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
"Unircorn/.git/objects/f8/ef1d7b38f84bdda70180b50c7979bda6f102c0": "0c96d541dfe133f9f24c660851cf716c",
"Unircorn/.git/objects/fa/0ed10b9cf8330f254ab83153ae3e7bc4b78fa4": "2e3370b1512d0101ccbf860b36f08b21",
"Unircorn/.git/objects/fb/56fe3981b404c91df4b0749bdd8a6dfae21c36": "8d71dc2673ea5cabbde1ae2ae011fef2",
"Unircorn/.git/objects/fe/57e938a505bf3cd912d863a8ff132f7032dba1": "7e21a7153bc8c162c0afaf95695f3f64",
"Unircorn/.git/objects/ff/80d0630c093c28b32aa949bed577dfea5f3a8d": "ea77a010ccf483ab604e6701eec4079c",
"Unircorn/.git/ORIG_HEAD": "ca369c82826030c1df06995650d31fd5",
"Unircorn/.git/refs/heads/main": "8526bd3ef9adc240a52668bd891f5586",
"Unircorn/.git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"Unircorn/.git/refs/remotes/origin/main": "8526bd3ef9adc240a52668bd891f5586",
"Unircorn/9dbf4f2f9521df214c886a584bbfed531d61e623.png": "18cd0ebbfcb8a19bb43b769223f4071b",
"Unircorn/assets/AssetManifest.bin": "e243ebb3972266901f897071f73752c3",
"Unircorn/assets/AssetManifest.bin.json": "e5f36131389eb3076a6d7d2fe47c5666",
"Unircorn/assets/AssetManifest.json": "841ab3977a97815bac177e96405d45ad",
"Unircorn/assets/assets/audios/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"Unircorn/assets/assets/environment_values/environment.json": "627e865bbde56c48596452fdc161e927",
"Unircorn/assets/assets/fonts/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"Unircorn/assets/assets/fonts/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"Unircorn/assets/assets/images/19834611cb3cb5fd2331bf6bf0c66f20d505d876.png": "6e29287af870c8e18e7fec1907695fc3",
"Unircorn/assets/assets/images/1e5a64b647743bd8ad23b7e3fffcd5e9075cdfa9.png": "f36847ba2d4e085b9f73573e0a977007",
"Unircorn/assets/assets/images/52fe19c7e04b56b90b11cd2b71a3470ecac8d990.png": "655ad8a71ddaa316a1df586a6610cf7d",
"Unircorn/assets/assets/images/568ef52c4f918d3b41796d1cebb724ee9ac5a1e4_(1).png": "904a864b18d3f2da3d05483514611f6e",
"Unircorn/assets/assets/images/5779990e1d529424fb6976fa2c80cd9f9225a485.png": "616250932ef574d6edf340d0d3efc72d",
"Unircorn/assets/assets/images/6e4302c693288aa6c02179dedecb7a3511083100.png": "5d1ea7d3027af9edf4c8d1e0215abdf8",
"Unircorn/assets/assets/images/75074118447e73e01de3b65726b53eacef99337e.png": "e1a71109a791cc0face2fbde8db178e0",
"Unircorn/assets/assets/images/9dbf4f2f9521df214c886a584bbfed531d61e623.png": "18cd0ebbfcb8a19bb43b769223f4071b",
"Unircorn/assets/assets/images/a4cfea738a5dcc00b0e0fa0279cce579a3b5ac9e_(2).png": "d099e2d0e2833b840fe39915c6123b49",
"Unircorn/assets/assets/images/adaptive_foreground_icon.png": "18cd0ebbfcb8a19bb43b769223f4071b",
"Unircorn/assets/assets/images/Animation_-_1750223553179.gif": "12feb07d044887c68622bc1bf7ea22ea",
"Unircorn/assets/assets/images/app_launcher_icon.png": "18cd0ebbfcb8a19bb43b769223f4071b",
"Unircorn/assets/assets/images/b6aedf3060c5ccfae15a36f7689a2dac21a48ebf.png": "e6fa7ad8be89ff0bde4844d40f546bab",
"Unircorn/assets/assets/images/bbbf89f230bd569e8e9fd9f562aaa48b98471e6d.png": "1e489bb49a948d622bfd7c5b7fa47af8",
"Unircorn/assets/assets/images/c36814f071e3050431827c74bcf8419b5f2192da.png": "556cdbc8329ef788763d92285b6508a3",
"Unircorn/assets/assets/images/Capture_dcran_2025-05-19_120434.png": "bb5de0ec0f87ee0af326849c19f59039",
"Unircorn/assets/assets/images/cbaa0cd883a794a402d4c7dbd5b17299cd892b71.png": "b021782a596a8500d49f0d0523c1b2b8",
"Unircorn/assets/assets/images/ccf22a82947fd1da08d3121bd65522c330bcfc9d.png": "52343b66e6aff097c6e668932ebc0f0d",
"Unircorn/assets/assets/images/d771dfe3c4875f1bce80699b9d39ed9270c30e70.jpg": "2f371215e48b79a0639f615ff6f1af09",
"Unircorn/assets/assets/images/error_image.png": "18cd0ebbfcb8a19bb43b769223f4071b",
"Unircorn/assets/assets/images/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"Unircorn/assets/assets/jsons/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"Unircorn/assets/assets/pdfs/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"Unircorn/assets/assets/rive_animations/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"Unircorn/assets/assets/videos/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"Unircorn/assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"Unircorn/assets/fonts/MaterialIcons-Regular.otf": "1d2c59cc3c3533a92a179de49f904847",
"Unircorn/assets/NOTICES": "8dcb2dfac235bd8e40b2b09fc74e57d0",
"Unircorn/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"Unircorn/assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "eeefad5512dfbffba365ff0cde4d6e6f",
"Unircorn/assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5af74b4003fd40d0588910ad72056216",
"Unircorn/assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "2defddeb42187d67b595ad716581ea74",
"Unircorn/assets/packages/youtube_player_iframe/assets/player.html": "fedadd807717e2e72a56a1117ebb1338",
"Unircorn/assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"Unircorn/canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"Unircorn/canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"Unircorn/canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"Unircorn/canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"Unircorn/canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"Unircorn/canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"Unircorn/canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"Unircorn/canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"Unircorn/canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"Unircorn/canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"Unircorn/canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"Unircorn/canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"Unircorn/favicon.png": "2704101cb06ce66e2000356a312be25c",
"Unircorn/flutter.js": "76f08d47ff9f5715220992f993002504",
"Unircorn/flutter_bootstrap.js": "8003d3a0e66267d939f2579c185bc774",
"Unircorn/icons/app_launcher_icon.png": "18cd0ebbfcb8a19bb43b769223f4071b",
"Unircorn/icons/error_image.png": "18cd0ebbfcb8a19bb43b769223f4071b",
"Unircorn/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"Unircorn/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"Unircorn/index.html": "2a3f81189ce8b8acdef3a76f546e61ab",
"Unircorn/main.dart.js": "f24159fa56f60db0993ba48fe28d3f3e",
"Unircorn/manifest.json": "266c8d6f317d02d1ccd155194bbef318",
"Unircorn/vercel.json": "ce04e39249dc2a858b162cfee87948d5",
"Unircorn/version.json": "4e3ac03aac0edfb58af7c95a1d6e6e84",
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
