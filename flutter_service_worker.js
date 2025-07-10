'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "7ce761ab7b266d125f6288415f39c1b7",
".git/config": "aafc5d28b22a622212efb91b2facc9e2",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "366d2e402f2a12ca1aad6d9f1e8adfaf",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "6c86e8d8c61b7e422eb063617a4ed910",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "01b1688f97f94776baae85d77b06048b",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "fe1380312ad2bbbe9e22582b5e88c477",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "1d607912a59e97e29975e0af2b4505a5",
".git/logs/refs/heads/main": "e13fdfba37bb255e5a69b022f3deda33",
".git/logs/refs/heads/master": "4e561f5371a07ace4169b9d450b66d21",
".git/logs/refs/remotes/origin/HEAD": "14590c71e0281273b94534fa8edabe18",
".git/logs/refs/remotes/origin/main": "267fb8670e8f65423e9ebc2440fc79a6",
".git/objects/02/ccda0275372e6078517e5856895848ae48ba6d": "31a96ee7cc14efc75c7c528deacc7332",
".git/objects/03/3a068e335463fd8879671b77a77abb58a1f144": "c2bdd2b7b6a75d45e28adca03b2cbb4f",
".git/objects/09/e74798d463bde2b867bc08551bda8c5bbc6c99": "22c580645afa5ad1de3bf577659c6b31",
".git/objects/11/d969a204977513516182c655795bb62a6a03e2": "e657df50782e22bb21a9cd16192998d5",
".git/objects/16/d1134e41088289ed9b79655d0b50cff630afcb": "1ebc4308038e4b4c3abc492df19d73f9",
".git/objects/17/9713338060e6468a8136a7a2977f84748e22c6": "c61a39ac2e87a289b70601bdb54527ad",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/1e/0820c16e99aae78de8a303ea46c073a9ad97f3": "372d5c15edf13af97bf375a880b8e454",
".git/objects/20/929a621b101aff74899d2653656cfcfdb49466": "f1f3af536a332c077b12ae66dfea3f1e",
".git/objects/21/b58dd2d82dc5d3881c4387cd3176f7d23a8a67": "d4f824301a86256f4f82ff5f8a20ffb9",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/26/700558b3be7ef88ad6d89f4e50b6fc11276ed8": "fa5f9d14a02b203efce078d57abab97b",
".git/objects/2d/1041f7916f35b963b47b75b7c2e512940f16ab": "83b93325d974c977590daae4e528a03d",
".git/objects/30/0efaefa7d2bd34a221ffad6d778922d14bceb1": "d50b8515ecf3b28528b1d55b9128382e",
".git/objects/31/86f4735960888008c1c16c495f4f860cf0dde8": "13d6ccf31dcfd648e549d6b23941cf89",
".git/objects/32/152eeee7c8949c3bcf7c884c4937f01aeebcb7": "121f6485b33dfa31c24d53d1e4a6d037",
".git/objects/34/a36c8f5970022eadcbb3816fdc3429594d96c0": "715f8d8ba68dfe954dc0f0486c58c869",
".git/objects/35/647cbae379db165e72ef3c24c2b2e71fe928a8": "e65bf804c18b42ca643c55e864a50a63",
".git/objects/3e/fd7b3e495101a42df9ea85ebef2d5dcbed5f65": "fb9d513ed3f52acd6aae7c4a2a026d37",
".git/objects/3f/2b4ca4c69107379ca5044969f286ba32242de4": "855990ec3be496750484db68a07797df",
".git/objects/40/75913be3c5bf514a0f2c98a3b3412242a8853f": "1fa342c1189ac9cece35d345e8c2021b",
".git/objects/41/b2d6f8d77fabfcb87ad28fa24a68b68c0bdef4": "5ced6cb723df607a8c9b4a8e67977846",
".git/objects/44/0a9e95e8314b794a63cbdd58328bb0a84025d8": "aa80d8411c136ba07788efca1ae31a8c",
".git/objects/49/245065704379d44f37b4055ed37bc062abc389": "82dda956cdcfcf61c2eb085bb18293cb",
".git/objects/4c/51fb2d35630595c50f37c2bf5e1ceaf14c1a1e": "a20985c22880b353a0e347c2c6382997",
".git/objects/50/7ff7ebcefe70699986fd773317516895a23659": "919aff8b9dfcc86d4dcb00d28ce6bcf4",
".git/objects/53/187e28ad6e1acb18d3f85f7e5799986020dd5c": "0cb0eda4c71e87c39d29c3a605f654cf",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/54/752561c620b4a6ffe2866dac3c30a04cd1e424": "e5d45b0dab01a868b8a1676e09671792",
".git/objects/59/6608dd56aff38f15f6e6736259802dcc08db53": "e51e309b2a5d698dcc967a0779376358",
".git/objects/5e/b4d7b4dcf6a7bc3a22db03867658de763a565b": "99d0a93dce2965db50c8efeb29d00a5a",
".git/objects/5e/ca8a1d9677e789da912cd9889fa4c7df6d752b": "551628de725f50e7a725b2176ebf674d",
".git/objects/61/f4400a6436f07f13f6c4d242f3143609efef14": "1be4e48d10a5ab9fc8f055cab8b4bbfe",
".git/objects/63/2734220cdccae0fed38624e794e3152564148b": "c4c453767909bf7e6cf8dab82fbdab76",
".git/objects/68/cdde0a4dec5693f443518f027555d0d255ae56": "a7339c584799b97ae18228d8a619b7bd",
".git/objects/6a/9264870df8a25faf0e9c9c0389853a075f05f0": "180dd5be9b863c677866cfd036e517b5",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6d/37da813fbb220ad62fc9112d2d46aba56433e9": "13aca79bd43d398656a45000a00b36a0",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/71/0fbd362d29db6cbda64c87fdabb9543f109578": "1b1c68e35447cd2571b1f156eb08d435",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/74/c726e32781bc2c0a83170f6800c0ef4cb9ddcf": "69a43282cb8038fd0577dc0529e5d6cb",
".git/objects/74/ef61d35885bc09cc0d358761defa0264fa1211": "891fee7738e48e74739656b0da38a4a1",
".git/objects/7e/5c9e6cb8fdaced128592098afb046c7c82bd5d": "ce3a17f917dd95d769b16c2714d06e72",
".git/objects/80/ccdb9bacaa9b33ad17a84b92544c9294cbf2c5": "b24da109e7d1524ae0bb9b2327794222",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/b7c1bb849d67a715914ed9319b215412742677": "010240263f1c4ea01195911fab278f80",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/3c7d6bbbef6e7cefcdd4df877e7ed0ee4af46e": "025a3d8b84f839de674cd3567fdb7b1b",
".git/objects/95/4b8126a9aaf556c033f218d2f1a14b1a43d69c": "0a172a1c45783c6511173fbac59bc7d3",
".git/objects/97/ec73bb50024aab5bc7e2c64732290ae1277228": "97ee37f70edf8152f62f60f56b7b8ceb",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/a1/e16071c06b80217725da8a300b01a28e3f9c51": "2eec7f946131f85b27468ec2ac406f75",
".git/objects/a4/ccb6665b311ea87a0f360195a3486f6d4e6192": "9bcab4be38acc5009a334b6d6d005491",
".git/objects/a6/4e3acc1ae278cfe05634d8e55e7a61c319c525": "f02f17525200377bf7b0642d6632b419",
".git/objects/a6/c83b8c16904f4327b75f0cc72d5f292dff96d8": "7bf3279f9b46d1c88c6d1289c1316963",
".git/objects/a9/f5d2418d16d1abe1ff622d537a5dbd6c9da8c0": "4b7a23f4fc3c391e00090d381d18a180",
".git/objects/ab/c19948f81aa9b4f38ea06c1ae85b6c84377770": "f7cd0d2c72e474e3288fe6b824e0343e",
".git/objects/b2/de0057bdcc049f16b1be888d30947404492a9d": "f2ba99d39bbce4bdeb9e63b0e3918771",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/b9/d87efcc91e70b48ded29d1f5d1be1ca76ea142": "844a36797f5c52941870945e739b21d0",
".git/objects/ba/ec249c6463e79556ec286184d0e848947b946d": "1c43cfb441206ad2f9f75bbc61a945ff",
".git/objects/c1/0882745638fd95d703b969a33fedabb72151b0": "f3a55f691fc92730209aeb00fdd21f11",
".git/objects/c2/67ecd4855980e309520cb912b876f385de20e7": "48acd0fbfe6c5940ec46dec85092343d",
".git/objects/c5/6ee0d1854627e846006d1241f2aedce7b7c0de": "db2b69dfbd0cd05e19db7e9bf21b6931",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/c8/b5724ed5959d8b8c9df80ce2b392487ec253f2": "a41f646b83a6a3b38233e9b2daadd89c",
".git/objects/c9/c235ead689f99ef284f82af8ff0f8c81eea07e": "4e13d66e6a80f44a21e7e21b2d400810",
".git/objects/c9/ec77f68b19dc59d7af119b7d92ea254562cfa2": "07edf261f37c2cb4956829e134d5b19a",
".git/objects/cb/cfd4dd843d58230255b8c9201859b4d1a123d9": "4334aa59a04141420fae8c73beb6a046",
".git/objects/cb/ed22a64b1e6e5dd52aa020895731bb42ad3d8d": "922ffded0003429d624d1a0df3140e2b",
".git/objects/cf/b566ab1209289c38ffcd3a93cdfcaa62057811": "0763b98e6485c334f6c2537e7283b7a6",
".git/objects/d3/d46bb5d8a9821b79e4ab2883aba8a65089dc06": "53f8c950ffb5187fa236351e951f8f7b",
".git/objects/d4/32f966f1054711388a2880fd6671df7eb4c41c": "11e2242e736c4d4f17e9dd8a4c1c2e2a",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/e1/ee50b97ca7a940b69f6ac6ca9b2084e38f82be": "7f98d831546ec7991053df2587cd10e7",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/ec/120ce730448f2c3db1bf484c14736981b45c62": "cb1adb8b773bae3142ddb579c5c767fd",
".git/objects/ec/a0ffadb6a8c38f6718b2c52d1ffb880daea078": "f5a4f9fcb9dc5fe99ce520a3486e447b",
".git/objects/f1/f2c505d372d51419ae0dd60a40f3460d65d2ac": "4159f578035d9ba3c8cabd7b024aa22c",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/ad3aa11b9764b6f6c938f3c811cf05924bfdea": "d7f47ed981976386dd7e5eb2234f67f0",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f8/ef1d7b38f84bdda70180b50c7979bda6f102c0": "0c96d541dfe133f9f24c660851cf716c",
".git/objects/fb/56fe3981b404c91df4b0749bdd8a6dfae21c36": "8d71dc2673ea5cabbde1ae2ae011fef2",
".git/objects/fe/57e938a505bf3cd912d863a8ff132f7032dba1": "7e21a7153bc8c162c0afaf95695f3f64",
".git/objects/ff/80d0630c093c28b32aa949bed577dfea5f3a8d": "ea77a010ccf483ab604e6701eec4079c",
".git/objects/pack/pack-01e06e3d4aca91d11789c2140230f4ffe38e0298.idx": "5d82199c66885e0326a42da23169b988",
".git/objects/pack/pack-01e06e3d4aca91d11789c2140230f4ffe38e0298.pack": "373a06f0264c5b83a721229f113a5cc7",
".git/objects/pack/pack-01e06e3d4aca91d11789c2140230f4ffe38e0298.rev": "571650bc0acf8a86ac3f9d02c4a75d97",
".git/refs/heads/main": "38070ab65d853078292a5e133b0b963e",
".git/refs/heads/master": "d74df4bb8815ca7afb95b8e278cd196f",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "38070ab65d853078292a5e133b0b963e",
"9dbf4f2f9521df214c886a584bbfed531d61e623.png": "18cd0ebbfcb8a19bb43b769223f4071b",
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
"assets/NOTICES": "a846248add8000700cdb348a06719d3a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "eeefad5512dfbffba365ff0cde4d6e6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5af74b4003fd40d0588910ad72056216",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "2defddeb42187d67b595ad716581ea74",
"assets/packages/youtube_player_iframe/assets/player.html": "663ba81294a9f52b1afe96815bb6ecf9",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/skwasm_st.js": "9eeb36850f248a8e946442a13aaaa009",
"canvaskit/skwasm_st.js.symbols": "ca49a44a388ecfe66ba43dd851d2b76d",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "2704101cb06ce66e2000356a312be25c",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "b39c03904114480614c4dfc9f03b6e5f",
"icons/app_launcher_icon.png": "18cd0ebbfcb8a19bb43b769223f4071b",
"icons/error_image.png": "18cd0ebbfcb8a19bb43b769223f4071b",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "e42c8e93fb99477ef812a6100a06d5a3",
"/": "e42c8e93fb99477ef812a6100a06d5a3",
"main.dart.js": "0d4c427a85396ceecc0ee0a6b4867057",
"manifest.json": "266c8d6f317d02d1ccd155194bbef318",
"vercel.json": "5eb85bafbc898dddc5527f9f3f5f119c",
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
