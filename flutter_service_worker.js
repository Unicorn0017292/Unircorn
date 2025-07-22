'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "c518b5748f53178dc749036d8f3dc0cc",
".git/config": "aafc5d28b22a622212efb91b2facc9e2",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "f5f89740420227f96310dff6734c0472",
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
".git/index": "ec9f76a4a3ec52910b6b48924726a6a7",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "92d4b5b066750b3f1012b467d363b844",
".git/logs/refs/heads/main": "d220ba768e918a9d4c4052d7d707d106",
".git/logs/refs/heads/master": "4e561f5371a07ace4169b9d450b66d21",
".git/logs/refs/remotes/origin/HEAD": "800065c4f38d005182951825a4f1bdca",
".git/logs/refs/remotes/origin/main": "fea03954f99827da5659a6d3f31d0e75",
".git/objects/00/55987188d5077469f49f9ed74f2b88c6fdd2d1": "1b80ace172baaeb6b9f51d8c7633fd5f",
".git/objects/01/5cb9e42556418d22e78c2ed801275a1fe5260c": "29a882d49801447201f28b70b34d9b5a",
".git/objects/02/ccda0275372e6078517e5856895848ae48ba6d": "31a96ee7cc14efc75c7c528deacc7332",
".git/objects/03/3a068e335463fd8879671b77a77abb58a1f144": "c2bdd2b7b6a75d45e28adca03b2cbb4f",
".git/objects/03/aba23882a56f80d5603f90f269bcf3e2352c22": "af5d7afdb45b2391a44b34bbf279ef6d",
".git/objects/09/7fecc0bf95c9b9c5ddbd7f3ee492263adac96e": "fc219152935ae873b21d24345b1350cd",
".git/objects/09/e74798d463bde2b867bc08551bda8c5bbc6c99": "22c580645afa5ad1de3bf577659c6b31",
".git/objects/0a/5e296241b3c109d3dd552e43e24c9b4e550b8b": "9341fb966378cfb69f3e4d1bc2882537",
".git/objects/0e/a985bd10642c42b41aeb44ad9b84341e9c1824": "65169fa6a9e27bc939193e9634a657a6",
".git/objects/10/ef629f3ff61fdfce504226eb6b2db2812149d3": "ca4405d92a813edad318f4e3e1171400",
".git/objects/10/f234ac03df378a33dde54f21dec1c8f4e05ede": "8a9ce24f99008a11215ed2d1297dcc1e",
".git/objects/11/d969a204977513516182c655795bb62a6a03e2": "e657df50782e22bb21a9cd16192998d5",
".git/objects/14/95566e4741a8db6ef57d80fe1bcb0844b07ba3": "b485bab43fd75d12e2559ea2b72d2034",
".git/objects/15/38fb3a13667d4bb800a33ac0801fef5f947048": "8423377e763cf8e21e6873b3a7e4a078",
".git/objects/16/40c2d46482cbecf0e91077058c0f3602792430": "9822ae77b41624032f503ad40a605790",
".git/objects/16/8e6fbc007e6349dab8eb8587ae73f9d3ff294f": "a86e6a0d23fc12f12211f85e40a49e68",
".git/objects/16/d1134e41088289ed9b79655d0b50cff630afcb": "1ebc4308038e4b4c3abc492df19d73f9",
".git/objects/17/9713338060e6468a8136a7a2977f84748e22c6": "c61a39ac2e87a289b70601bdb54527ad",
".git/objects/18/4bde479979578e9819d8da3d95c48e8e05127f": "4c6bfebc3621fe5767f6d037a5d4ee99",
".git/objects/18/9d50a8482385b38314f00ab1c79b58514e7455": "d60a7969172127c866d9b5acd44df643",
".git/objects/19/0ecf4fd97e9be95887f4c9bf17ed71415764c6": "196b4bb60223f951d50e16650fc021b5",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/1c/78bf05ef607b8317f02e629840bab1faabd769": "579a21591b99a6a6edd900274393a76e",
".git/objects/1d/b5d80ea885b045ca8f16ae913022b5ec9d441a": "94445f58cd423bf721741063858a4b06",
".git/objects/1e/0820c16e99aae78de8a303ea46c073a9ad97f3": "372d5c15edf13af97bf375a880b8e454",
".git/objects/1e/1bff9cafaa44ead83b6f48e04ed48b9462ffe0": "e9bb0e82bcb7c6506bb53fcf5b63b416",
".git/objects/20/929a621b101aff74899d2653656cfcfdb49466": "f1f3af536a332c077b12ae66dfea3f1e",
".git/objects/21/853ff96937070a2ef6fe39b83b4864fa85bc34": "9d9dfdb190ff2fc4a420e5e4ecd24386",
".git/objects/21/b58dd2d82dc5d3881c4387cd3176f7d23a8a67": "d4f824301a86256f4f82ff5f8a20ffb9",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/25/bf2b5eab668d95ac5b80e16ec734566680115f": "0606b1c00fd079d02308a8487389213f",
".git/objects/26/11033325643483f18ac35bb3d4a9d21500fd47": "20873f09585844e06dd31f470185ba51",
".git/objects/26/700558b3be7ef88ad6d89f4e50b6fc11276ed8": "fa5f9d14a02b203efce078d57abab97b",
".git/objects/29/9fc8ac79d1bdea5593f55ea76612397ce799aa": "cf3f74a5016dff92cf58949612503143",
".git/objects/2b/615d3d1cad7a909986423c4edb2c62d0577427": "1211dc6c4213f798ffc74fe2a61ba2e7",
".git/objects/2b/9e10276af83a2358dce160c59e84d8051b55a1": "a2d1772042ac40773449c87d43ab8607",
".git/objects/2c/ef1db04c34e50465f3ec1b6ac62b016aec41fb": "03a862522cdac0f2ebffe728f61c96e5",
".git/objects/2d/1041f7916f35b963b47b75b7c2e512940f16ab": "83b93325d974c977590daae4e528a03d",
".git/objects/2d/c32f424142460a88a20fbdf258cae1a09bc211": "b8e229e696e4750f03736ac010ba78b4",
".git/objects/2e/78db69a994fad7a17506e3d6e5d0b5dc967721": "d1fd27219b53e414c32e534153a5208b",
".git/objects/30/0efaefa7d2bd34a221ffad6d778922d14bceb1": "d50b8515ecf3b28528b1d55b9128382e",
".git/objects/31/86f4735960888008c1c16c495f4f860cf0dde8": "13d6ccf31dcfd648e549d6b23941cf89",
".git/objects/32/152eeee7c8949c3bcf7c884c4937f01aeebcb7": "121f6485b33dfa31c24d53d1e4a6d037",
".git/objects/32/775037f5a70f40446b0edc69bb50424f7bcc4b": "18165d49afee912eb41660464f765130",
".git/objects/34/49aa6ed7eb241eb0a80379e024af83b587ae4d": "d20d4cd8d0508e8abf708cb8593f3240",
".git/objects/34/a36c8f5970022eadcbb3816fdc3429594d96c0": "715f8d8ba68dfe954dc0f0486c58c869",
".git/objects/35/647cbae379db165e72ef3c24c2b2e71fe928a8": "e65bf804c18b42ca643c55e864a50a63",
".git/objects/35/7c9ab53c6fdd3f2da31fd9d448cfe74576dbb4": "8ea1a97fe3a0bd04977f08c418cda990",
".git/objects/37/185a1b2e0190798bce3711a63404ebf99b524a": "243c716a7b0d19442805f76984e6cf87",
".git/objects/3b/208116aa637beeb75d5ea15fc763059801dc2b": "69b9bc2e56e8a5910feeae4d7390c451",
".git/objects/3c/0482c53501f848ba0fb3500dfed5b60150bb3f": "02be49588b1c78ad7846f32185072313",
".git/objects/3e/2eb42466d6af019ab7999ca1036719bdaadf85": "4892e897cb9ff9c73cc2a35d36decb3d",
".git/objects/3e/6c863b75c5c5ff8a9c76e2f19cb4d853695040": "f94e1fe03b4125226d53011256d2d6fd",
".git/objects/3e/7b803c0d556f0af802ba99e9ee3247c7e3b9bf": "c61fa64d6a6f15a8d3d47de89dd040ee",
".git/objects/3e/fd7b3e495101a42df9ea85ebef2d5dcbed5f65": "fb9d513ed3f52acd6aae7c4a2a026d37",
".git/objects/3f/2b4ca4c69107379ca5044969f286ba32242de4": "855990ec3be496750484db68a07797df",
".git/objects/40/75913be3c5bf514a0f2c98a3b3412242a8853f": "1fa342c1189ac9cece35d345e8c2021b",
".git/objects/41/35e49de77162ab000561a72f01d48b39376868": "88e300f77b1653e8e5cc489380712eb5",
".git/objects/41/b2d6f8d77fabfcb87ad28fa24a68b68c0bdef4": "5ced6cb723df607a8c9b4a8e67977846",
".git/objects/42/16b0171e0f87a0315a962ce956d3bc99840c43": "a5c98e8a29f7789f93fa194b040d041c",
".git/objects/44/0a9e95e8314b794a63cbdd58328bb0a84025d8": "aa80d8411c136ba07788efca1ae31a8c",
".git/objects/44/83e8effcb944a3bf30667c3bc8afdecc59b4db": "c186f39b483d6b18be0ac70cca74fc86",
".git/objects/44/97dceb1fc65d335d0f591106f12abd9bf7cac5": "eefdcc553d87a95be130afd88ca43aa8",
".git/objects/46/342f559c0dacefad54a1af65c3efed181d5cfd": "0028d5c761c23db26f1266a733bc87da",
".git/objects/47/434a4377a6cd15d763a8997074c154b8ba3628": "b5b3c0f4d145b4dacff43e20026676ff",
".git/objects/49/245065704379d44f37b4055ed37bc062abc389": "82dda956cdcfcf61c2eb085bb18293cb",
".git/objects/4b/6c22e1edc0de48900f11a9702dbb071d872f9b": "39f432174683605770f0da53886b775c",
".git/objects/4c/51fb2d35630595c50f37c2bf5e1ceaf14c1a1e": "a20985c22880b353a0e347c2c6382997",
".git/objects/4d/733c5d2f040c2f80b1cc74d074c33d20917adf": "b9b016c8cbf116bc4ac40ee313fd3a7c",
".git/objects/50/57650ec5abc715f4688069b98c751b19eabff0": "74187de87f50b0f480a3fd650826f1cf",
".git/objects/50/7ff7ebcefe70699986fd773317516895a23659": "919aff8b9dfcc86d4dcb00d28ce6bcf4",
".git/objects/50/fb5515a7409ea83f93f5f3f1355780c592a049": "432f22839c504e97e33ba99e1a44eb5a",
".git/objects/52/b06571ad8def588ff5707b9acd4979d8da5cf6": "f111397b6bc7904f88943618d792af09",
".git/objects/53/187e28ad6e1acb18d3f85f7e5799986020dd5c": "0cb0eda4c71e87c39d29c3a605f654cf",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/54/752561c620b4a6ffe2866dac3c30a04cd1e424": "e5d45b0dab01a868b8a1676e09671792",
".git/objects/54/c18502b3cd68490fb0f8c9e34366cf7798870d": "e53bdb21e0df43a6c093a19566fb1d5b",
".git/objects/55/a61ca3ca642774f9df866b4511cc5727b81890": "f22b0659d9b688d2575767080d98a4d9",
".git/objects/57/4d5696986b811bb09dea9c630c4bb65948be70": "8bc7a0dd856c09f9aaeeb2860dacf457",
".git/objects/57/ac7fb9b99a0fcc70f04a4a8bdc4db32aab3a65": "ccb2c6c876990c9f95d71f3953fd5fb5",
".git/objects/59/50ded9b93258032ad3f7d68db2ad53209fb8c7": "c9060c499aae6b0aea7d6089a83f605a",
".git/objects/59/6608dd56aff38f15f6e6736259802dcc08db53": "e51e309b2a5d698dcc967a0779376358",
".git/objects/5e/73626305c690c9aa2bd659db2eaf7636952ca6": "11a0b2e96a95ebee30f586d9e7bd4bd2",
".git/objects/5e/b4d7b4dcf6a7bc3a22db03867658de763a565b": "99d0a93dce2965db50c8efeb29d00a5a",
".git/objects/5e/ca8a1d9677e789da912cd9889fa4c7df6d752b": "551628de725f50e7a725b2176ebf674d",
".git/objects/5e/dcaefdf35a0814eb5ca1bfcd0c89ea573cbbd5": "df9f58a84251d5c0550298e2224d3733",
".git/objects/61/84fcd0292895ea661db615d5ccbcac1e29cce7": "50d88be7d3161ce913d09c2c9d3ddb87",
".git/objects/61/f4400a6436f07f13f6c4d242f3143609efef14": "1be4e48d10a5ab9fc8f055cab8b4bbfe",
".git/objects/62/96497ca83edbb49d8dd6aa94426d1ed0ca2cda": "f2e1869122c1a95c198ac3cc9fae02c6",
".git/objects/63/2734220cdccae0fed38624e794e3152564148b": "c4c453767909bf7e6cf8dab82fbdab76",
".git/objects/63/61a3b598e58ae9b3692bf5586e814b70502378": "1ab7a712ffa160cd8dfeb23bf550e5bf",
".git/objects/63/be79e1b2047bee1c6b05e27e16716201a54cb9": "7d19f1f6b3bffc89152f3e1216edc83a",
".git/objects/64/2d5f549c007047102785a564a15597f9ff3066": "6da8a44a752e6b489648cb1808a2d98e",
".git/objects/65/65508cdca4c0ffe54f4cfbac05e650e4194f63": "b7bb5801f6eb508ef4d73bc7596c1f7f",
".git/objects/66/7c0662959128de706dfbc406d8d2154e006ca7": "5846a2f18b377e286a56dc8b42802df3",
".git/objects/68/cdde0a4dec5693f443518f027555d0d255ae56": "a7339c584799b97ae18228d8a619b7bd",
".git/objects/6a/9264870df8a25faf0e9c9c0389853a075f05f0": "180dd5be9b863c677866cfd036e517b5",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6d/37da813fbb220ad62fc9112d2d46aba56433e9": "13aca79bd43d398656a45000a00b36a0",
".git/objects/6d/e84789c7c534b5bb99d16acadd4f4def66f14e": "1256be9737c435f4df542ef92f90be68",
".git/objects/6f/9d5a8c7d66bf9e3f0493856dc05b65e60c48bf": "d1d48d167dfec0df92e6a0ba5d5803bc",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/71/0fbd362d29db6cbda64c87fdabb9543f109578": "1b1c68e35447cd2571b1f156eb08d435",
".git/objects/73/6ad3542b6c6afc9e8fed6228fba0e9b1c80dcd": "edfdac7c83132aff0c5e76bbc505e0c4",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/74/698ad1211aeceaebf04606b5b55f4386ddfc46": "23229d7627779abe8eef6f8c6882e49d",
".git/objects/74/c726e32781bc2c0a83170f6800c0ef4cb9ddcf": "69a43282cb8038fd0577dc0529e5d6cb",
".git/objects/74/ef61d35885bc09cc0d358761defa0264fa1211": "891fee7738e48e74739656b0da38a4a1",
".git/objects/74/fcf9a3a2a71adc67363f6bae198ad64468ead3": "3d1a6f22d6aa2e75225116f620c0a77a",
".git/objects/75/bd4256dc4694ce180e691ccb5645d2264db723": "ff80e2995ac850d94745de2f1f1861e3",
".git/objects/77/2c47a74c5e4484be3c0f9dcfabb88440d54c70": "7714da68f0c311b984b2201ba585a45d",
".git/objects/79/aa983a34708c77f30d46bb4817f3445d0f5a6a": "f028a664c18a88e92c32ca3e670496d7",
".git/objects/7b/974e39d81c68501046ec8bbd88124659c97bc1": "3e1381a9f3b38da032e1f7f61d3c9ba4",
".git/objects/7d/66bbb86165b2970d925ed9b912994c2f8b122d": "2d08c9498481059ce4d4940e91cfc03f",
".git/objects/7e/5c9e6cb8fdaced128592098afb046c7c82bd5d": "ce3a17f917dd95d769b16c2714d06e72",
".git/objects/80/2679a85f5cb199b02166b5c536c7b2672806d8": "4be7c3565e1a2196dcee05317ae35130",
".git/objects/80/37e13537ad9aafec55b5bbf602a177fa5dbe26": "38738c1c921719fd8b6d38db66c2a950",
".git/objects/80/ccdb9bacaa9b33ad17a84b92544c9294cbf2c5": "b24da109e7d1524ae0bb9b2327794222",
".git/objects/85/5628ac668e4dd073d5eebbfbadac57e8461c94": "bac324af4e11bf80aec46e7770e8e63e",
".git/objects/85/e73753a81dcecdfaa7e36b7a3ac1e6aed996ad": "82e3a05cb35581b769d444fe9d096683",
".git/objects/85/ff6ab4b1880749e229f71d9d08f6ee603ff59f": "381c23a060c1c439d7005746477761fe",
".git/objects/86/58ce3017f028e1421db9af423ae8985498dbac": "b108edc6e71ad44b2096ecb54b8ee783",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/b7c1bb849d67a715914ed9319b215412742677": "010240263f1c4ea01195911fab278f80",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/ca2f0c68163b9c69b8f9537d4fd9653b77af26": "bfba20fe88c838bc72ada679c16d5869",
".git/objects/8d/d5cca0ebbf5ebc3c000538783ab55b53c345f4": "35ddd03a9ab6451b5b82e324b8f109b2",
".git/objects/8e/3c7d6bbbef6e7cefcdd4df877e7ed0ee4af46e": "025a3d8b84f839de674cd3567fdb7b1b",
".git/objects/8e/47bcb03dea94180d9ab1eb35823aa911241468": "2575fd627591cc9e0a5b82a1fc152d71",
".git/objects/8e/9775d7e0ad180ba8f3278dc1cc9873accd5bc9": "8b5f35a99aea4faf2e9608ca1dd59319",
".git/objects/92/73ef7070aecdc7c2105397db5023265148c997": "8192ad30b9d48f3012ddb34f2d78808c",
".git/objects/92/a9efa9f48bbb8cb144f0e31d40dd1ac4df9a98": "e7dbcac5f6b77269a76e0ae3590ebbe5",
".git/objects/92/f957d9c5a9c732330d810859b1575ce0b9eb4f": "cf0456ebe8051c97cecb8921a7febbc5",
".git/objects/94/96277a72bdc69bf8221c4fe38a24db49e17217": "e156db00a2243aa28877b1e98e1bfeca",
".git/objects/95/4b8126a9aaf556c033f218d2f1a14b1a43d69c": "0a172a1c45783c6511173fbac59bc7d3",
".git/objects/95/b8b1a760f0d270c498736c3aaf32b907eb43da": "ea7471bcc759b5dd3ef260f7182bd384",
".git/objects/96/c10ffbd9b01031c3faff2ef6d16080db10fdd3": "dd64e11922fbee081b48d8120f160acb",
".git/objects/97/e81638e03969eea939f168ed8504df40169123": "fc07fac13c8b6d9a6aa08000df8570e1",
".git/objects/97/ec73bb50024aab5bc7e2c64732290ae1277228": "97ee37f70edf8152f62f60f56b7b8ceb",
".git/objects/98/024ca925da9e56ba14445d968f7cb7f47ab8e0": "cc3fe2e062c1be50e7a737dbdbba07d8",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/9d/dfd7803e950554d8f0e86bb41c07fd2ad1bac6": "64feb5f73d9cc02e0b1871d24c8eda58",
".git/objects/a0/810c6ad1c5d809cce66ac6e5eac252b11b7b9e": "045c4cbdaf984530b41e00801b4d5c67",
".git/objects/a1/b9b0c56354cc8b650d4e51282dce508fc86a30": "06a5295dc40de4e87e14b8d4a37368ba",
".git/objects/a1/e16071c06b80217725da8a300b01a28e3f9c51": "2eec7f946131f85b27468ec2ac406f75",
".git/objects/a2/12903860c10d609a2ea5499d5fe79aa7d5b993": "05d79ee13a7b134876ecef8d1479b390",
".git/objects/a2/255736d19f20cb4510f71a0740c0dc93726947": "235b1ec5d3e013750ca615bd869d50ac",
".git/objects/a3/4f820ecc1374e77c57bb5955992247809c0bda": "2c0e992ac5d9118935521a2513c31ebb",
".git/objects/a4/ccb6665b311ea87a0f360195a3486f6d4e6192": "9bcab4be38acc5009a334b6d6d005491",
".git/objects/a5/9583a8a6040dddc6c89360aeaa0ec895a95adb": "566927b50447b1de020ec28ebbfeb997",
".git/objects/a6/4e3acc1ae278cfe05634d8e55e7a61c319c525": "f02f17525200377bf7b0642d6632b419",
".git/objects/a6/c83b8c16904f4327b75f0cc72d5f292dff96d8": "7bf3279f9b46d1c88c6d1289c1316963",
".git/objects/a9/f5d2418d16d1abe1ff622d537a5dbd6c9da8c0": "4b7a23f4fc3c391e00090d381d18a180",
".git/objects/ab/c19948f81aa9b4f38ea06c1ae85b6c84377770": "f7cd0d2c72e474e3288fe6b824e0343e",
".git/objects/ae/6ddfe291aa9f8912b00489f152c99730d7189e": "7f84a11bb9bf5310fe1ba4f5bd89ceac",
".git/objects/b1/9c282a9071835590ac5a7e25b0513a2b9b80f4": "e3b06ec64e99e2954f059bc4528977b9",
".git/objects/b2/de0057bdcc049f16b1be888d30947404492a9d": "f2ba99d39bbce4bdeb9e63b0e3918771",
".git/objects/b2/df87b139677f3628d39abca480b81d928523f1": "50e941957546fd061421d7ef932e8729",
".git/objects/b5/719889c945e92d0469191bc03037af8adecfc0": "455d99893a5a5dbbd1b090e7f51c8236",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/b9/d87efcc91e70b48ded29d1f5d1be1ca76ea142": "844a36797f5c52941870945e739b21d0",
".git/objects/ba/ec249c6463e79556ec286184d0e848947b946d": "1c43cfb441206ad2f9f75bbc61a945ff",
".git/objects/bf/32fdcc68a41b0cc5b80aa4a6211b20375b3dd5": "25fef4a8d5cf753bf41a8070ecfdb38b",
".git/objects/c1/0882745638fd95d703b969a33fedabb72151b0": "f3a55f691fc92730209aeb00fdd21f11",
".git/objects/c2/67ecd4855980e309520cb912b876f385de20e7": "48acd0fbfe6c5940ec46dec85092343d",
".git/objects/c3/a294c2254330fe2a5f0139f5502e45f9d06f4c": "a68d84e0149bc8b0acb75864b018f329",
".git/objects/c5/6ee0d1854627e846006d1241f2aedce7b7c0de": "db2b69dfbd0cd05e19db7e9bf21b6931",
".git/objects/c5/c1c3a231c7613843c1dbbddfd1aa9fe293309e": "66ab7250de2e79fa19d72a06dcafd4d3",
".git/objects/c6/c42ba81036f7c45bede9c7ca935eb7cb62d9e1": "1de254b08314a293644657c9598aae4f",
".git/objects/c7/aabba7f69499d096c36942f95ca06d209c83e0": "f3af48c41330dd1cfe1cf01c3f7cb68a",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/c8/b5724ed5959d8b8c9df80ce2b392487ec253f2": "a41f646b83a6a3b38233e9b2daadd89c",
".git/objects/c9/2794e22e90ceb0a6027a19c9c80123b7ce99fb": "34b1769ae0be397118bbab778a3180e0",
".git/objects/c9/c235ead689f99ef284f82af8ff0f8c81eea07e": "4e13d66e6a80f44a21e7e21b2d400810",
".git/objects/c9/ec77f68b19dc59d7af119b7d92ea254562cfa2": "07edf261f37c2cb4956829e134d5b19a",
".git/objects/cb/cfd4dd843d58230255b8c9201859b4d1a123d9": "4334aa59a04141420fae8c73beb6a046",
".git/objects/cb/ed22a64b1e6e5dd52aa020895731bb42ad3d8d": "922ffded0003429d624d1a0df3140e2b",
".git/objects/cc/a59dd2e3b278e711bbcab3337a580da9d7ae89": "52da109a2aa8ae734a69ae76c0359067",
".git/objects/cd/3fcbbbd516375120f671fa5f8b4fac6bc3a0e9": "a56992f9a2e810354767811535499ae2",
".git/objects/cf/b566ab1209289c38ffcd3a93cdfcaa62057811": "0763b98e6485c334f6c2537e7283b7a6",
".git/objects/d2/11cf1d703fea316a111ecd81c33db3e366879a": "e1d86a855a9abca18b322e04679040ae",
".git/objects/d3/d46bb5d8a9821b79e4ab2883aba8a65089dc06": "53f8c950ffb5187fa236351e951f8f7b",
".git/objects/d4/0c9991d6ebcc32cd50dcd6138d6963a8f15c4c": "99f750e349e2dd9912eb7c799f8d7093",
".git/objects/d4/11626866fb6645db388caadda640f387b5f4d6": "66473b95d0eb23c89dacb385a68feb30",
".git/objects/d4/32f966f1054711388a2880fd6671df7eb4c41c": "11e2242e736c4d4f17e9dd8a4c1c2e2a",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/c172a3299e541dc3cb2e204ae2f7d4d3303885": "1bfc8bede282342c6e59702426455aa6",
".git/objects/d5/80c54490c314c1eaf1a945b053a4cbb6acf6f7": "4e0da7016779f90c4626d37a9ad4f114",
".git/objects/d7/d627d4b958f9ed4fb21bd4b76b6f394f2e812c": "50bea51995da2466d511548990997d17",
".git/objects/da/d12a343ccdbb5d6f5d541fd5d763206b31167e": "09c846fa61ef18ea3194efc0807ab4ce",
".git/objects/db/2bc2f8cc6bf152f8545f826216f19c8079f8a4": "45d8103e3ffe0fed58c38902ff77493c",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/dd/fd5c3c25384476e9bfd755bb649e0c2021df74": "15ba6c78fadaa1d6dca61a7d8c38737c",
".git/objects/df/f40f3a1c4bb1a1bda1865f0bd1da4caba95297": "415a68fb142de661809e2deb37df67d5",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/e1/ee50b97ca7a940b69f6ac6ca9b2084e38f82be": "7f98d831546ec7991053df2587cd10e7",
".git/objects/e2/9f7a51bca6e9084d800ca265fb8b4fc0ae5a06": "a919dd1b1a103be2be2cea55f4483362",
".git/objects/e4/c175be12a3a425fe885e5a0114b2493da7fdb3": "776278d174b6440392f284b2dffe3290",
".git/objects/e4/cf926b496c797eb57ad4c818ee71bde8d5e190": "c43036cb7bd4c539c99cad58a98c4915",
".git/objects/e5/12f7c8580ad42e8ed30f725c8c60a0ae49833e": "61979832bfeca94dd7ba1f1b12437502",
".git/objects/e5/2957b166988179368bfd4e90a245161e6f50bc": "7efd1a5a9bb750c1701eac3c3cc0c963",
".git/objects/e5/816e046c21257ab91448163547d5438ec195e4": "f2906e982760be1041d919ca4c98dc4a",
".git/objects/e7/0ffea62b7f5e769a95b96517e17722427e3654": "fd15990fb31f35e50d2d679203240822",
".git/objects/e8/ab2773d7804492e8c2e7f8cbe8e4c1b978099e": "e3fabdae23a2131741d310a4ef248a06",
".git/objects/e9/865dc1e42b774961394ac953685f921b6c2fe7": "50092114e9f008885e7daea8c787904f",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/ea/a23cba9a56bc7fca09751377e78f178c82d6d2": "20110d37c0c2b2d882413f57002b0413",
".git/objects/eb/4570d5765143ef48efd77d86613b2b613f687d": "f170499ccf07367ea17c09f89cdd259b",
".git/objects/eb/ddca398b2935704036dcb0e1ad91e310db5276": "844384c106ce27e433a1ff08d53d3c57",
".git/objects/ec/120ce730448f2c3db1bf484c14736981b45c62": "cb1adb8b773bae3142ddb579c5c767fd",
".git/objects/ec/6400b0d2be3fd7c9b6b1471a35577aad15c1a7": "9210211550083ae3314e2625246f54cd",
".git/objects/ec/a0ffadb6a8c38f6718b2c52d1ffb880daea078": "f5a4f9fcb9dc5fe99ce520a3486e447b",
".git/objects/f0/535cc5ba8795e55ba01b42ebb57ce999bb1097": "a0da3072c6a4884c1d3956dcd93353f6",
".git/objects/f1/dd2665ebe30b74f73639f908a7c2bbc9014e8e": "7cf243685032fdecbfcb705e069a8305",
".git/objects/f1/f2c505d372d51419ae0dd60a40f3460d65d2ac": "4159f578035d9ba3c8cabd7b024aa22c",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/539d21f60f5e5330cff5f58a49ba06c4ef9dd4": "28400b6f10b7e87508173e2f5ba768da",
".git/objects/f3/ad3aa11b9764b6f6c938f3c811cf05924bfdea": "d7f47ed981976386dd7e5eb2234f67f0",
".git/objects/f3/ca2281751b26b9c7c6cd48212360e8a0a96194": "efd26821aaf88e600b87b62a95a11b87",
".git/objects/f4/4d7a73f6a281ab4dec581afd3066105c2ae212": "0f6b8638ef43cf4df71d0f9cfd7cc5a2",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f5/e931582e4fcb75d4ffe77c27580e050beeb890": "859b2976c47834e5c76ccd8e61a4e41f",
".git/objects/f6/acb1447c2e4faa37c05a0bfb5bff486c815254": "841e7adca93363674e9135f44057c26e",
".git/objects/f6/e2846540730250414687d463ba17c6b19d472d": "7622be30238a25d665e406bf71c96141",
".git/objects/f7/551221dea014403c97d6061c3d99b11f46c90e": "4469fc945562cfcce0436a162bcd6a07",
".git/objects/f7/c96de223431d56ef1f0602977157cb8a4e0f0d": "d4ae539ee56cfc182fcca62d51a52e63",
".git/objects/f8/ef1d7b38f84bdda70180b50c7979bda6f102c0": "0c96d541dfe133f9f24c660851cf716c",
".git/objects/fa/c027c4de491aff5f74c27b04e5cd4d07c5abd7": "d7319676aae65eab03d329d74bbe2b43",
".git/objects/fb/56fe3981b404c91df4b0749bdd8a6dfae21c36": "8d71dc2673ea5cabbde1ae2ae011fef2",
".git/objects/fc/c54108b2d15fd156c6a2e10f7c9e0d57b72aea": "103b69f06208ba687bd9827b56ca8c95",
".git/objects/fe/57e938a505bf3cd912d863a8ff132f7032dba1": "7e21a7153bc8c162c0afaf95695f3f64",
".git/objects/ff/80d0630c093c28b32aa949bed577dfea5f3a8d": "ea77a010ccf483ab604e6701eec4079c",
".git/objects/pack/pack-01e06e3d4aca91d11789c2140230f4ffe38e0298.idx": "5d82199c66885e0326a42da23169b988",
".git/objects/pack/pack-01e06e3d4aca91d11789c2140230f4ffe38e0298.pack": "373a06f0264c5b83a721229f113a5cc7",
".git/objects/pack/pack-01e06e3d4aca91d11789c2140230f4ffe38e0298.rev": "571650bc0acf8a86ac3f9d02c4a75d97",
".git/ORIG_HEAD": "3dd16e9dbf0685a5dcbade7fa3b31785",
".git/refs/heads/main": "a55cfed49575a703682f94a26e3f39cc",
".git/refs/heads/master": "d74df4bb8815ca7afb95b8e278cd196f",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "a55cfed49575a703682f94a26e3f39cc",
"9dbf4f2f9521df214c886a584bbfed531d61e623.png": "18cd0ebbfcb8a19bb43b769223f4071b",
"api/test.js": "fab813d7c2d9b625aa2ba4686dc07401",
"api/%5B...slug%5D.js": "13c38afcd256ff72eeb1e20267f943ec",
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
"assets/fonts/MaterialIcons-Regular.otf": "6648f9c2e8841d783b5c6fdba0e528f4",
"assets/NOTICES": "b73dee91d6f2e621c43264b1d7161901",
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
"index.html": "90803425cb93289ed3b25498f5632469",
"/": "90803425cb93289ed3b25498f5632469",
"main.dart.js": "fce6ce7c85afdb5bed61557d646f091c",
"manifest.json": "266c8d6f317d02d1ccd155194bbef318",
"package.json": "731cd415f366ebef8ef22cd7c69c9c55",
"vercel.json": "89be3401bf50d63aaae65b8b447541ec",
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
