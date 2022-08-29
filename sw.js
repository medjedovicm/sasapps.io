/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "2b54b1d7377d3f4585cdcdf0d2fe043d/loadbalance.gif",
    "revision": "2b54b1d7377d3f4585cdcdf0d2fe043d"
  },
  {
    "url": "404.html",
    "revision": "c51ecd1e8a44bf4e3f52122a13655e86"
  },
  {
    "url": "404/index.html",
    "revision": "ebd1e1041bb6f14841bcd9cc319239b2"
  },
  {
    "url": "4b5897c1b8d7d2c8a94fbc7d34db9c2358362eef-b159e8b46b1f9172fd55.js"
  },
  {
    "url": "4b5897c1b8d7d2c8a94fbc7d34db9c2358362eef-b159e8b46b1f9172fd55.js.map",
    "revision": "bd45802fd9896b4417c31050b5aa285d"
  },
  {
    "url": "8c90a23dcf8df39e3c4353467cfcf37c9d717c90-8cdbfa8f386e8b422285.js"
  },
  {
    "url": "8c90a23dcf8df39e3c4353467cfcf37c9d717c90-8cdbfa8f386e8b422285.js.map",
    "revision": "abdd0ddc7cbce47195ff6a85bf41484b"
  },
  {
    "url": "about/index.html",
    "revision": "7b73109a263ff6dc69cbe29a64a2dd48"
  },
  {
    "url": "admin/config.yml",
    "revision": "11926183dceb8bc4a83a5dd08349fb7d"
  },
  {
    "url": "app-48ef67c676f5d7d3592c.js"
  },
  {
    "url": "app-48ef67c676f5d7d3592c.js.map",
    "revision": "734018c48486c050641bf273f5376558"
  },
  {
    "url": "b637e9a5-17ce509c341390668fe1.js"
  },
  {
    "url": "b637e9a5-17ce509c341390668fe1.js.map",
    "revision": "08e3d319a4eab790aef03bee48c481e1"
  },
  {
    "url": "blog/index.html",
    "revision": "3bf049a7aca10e6c73aff8e4ec81a073"
  },
  {
    "url": "chunk-map.json",
    "revision": "bf8c1f20d9c964eae2cee3a33196c044"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-5a1ee105f05b3144b807.js"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-5a1ee105f05b3144b807.js.map",
    "revision": "33c532a785c69768b20d5d80ea6bec8b"
  },
  {
    "url": "component---src-pages-404-tsx-ad1414166f2c53dbac42.js"
  },
  {
    "url": "component---src-pages-404-tsx-ad1414166f2c53dbac42.js.map",
    "revision": "22701504b8ae9d105718d412015cc00e"
  },
  {
    "url": "component---src-pages-about-tsx-f320ee99b23f10220159.js"
  },
  {
    "url": "component---src-pages-about-tsx-f320ee99b23f10220159.js.map",
    "revision": "6861ab5a8b3c1da30824e62dc75d5a44"
  },
  {
    "url": "component---src-pages-blog-tsx-ce3b16ca17266a2d9cda.js"
  },
  {
    "url": "component---src-pages-blog-tsx-ce3b16ca17266a2d9cda.js.map",
    "revision": "3fce7adceac6f18443c0425356757e3e"
  },
  {
    "url": "component---src-pages-contact-tsx-2da2e6e480c04247846f.js"
  },
  {
    "url": "component---src-pages-contact-tsx-2da2e6e480c04247846f.js.map",
    "revision": "4814e0a6175dbd69b90db0023799ceda"
  },
  {
    "url": "component---src-pages-index-tsx-4ee18d2511148bfebd02.js"
  },
  {
    "url": "component---src-pages-index-tsx-4ee18d2511148bfebd02.js.map",
    "revision": "5755933f20cf0952e415165cb9c3e8a5"
  },
  {
    "url": "component---src-pages-products-tsx-f26c9572a52b0aba5ffb.js"
  },
  {
    "url": "component---src-pages-products-tsx-f26c9572a52b0aba5ffb.js.map",
    "revision": "9e94672ea419d9132b8365908df4f5f5"
  },
  {
    "url": "component---src-pages-services-tsx-bb9b03b8572bf99969fd.js"
  },
  {
    "url": "component---src-pages-services-tsx-bb9b03b8572bf99969fd.js.map",
    "revision": "8f0cbfa30605a231b3e66576c737e6f6"
  },
  {
    "url": "component---src-pages-solutions-tsx-d7c53fba57eff2b1b1cb.js"
  },
  {
    "url": "component---src-pages-solutions-tsx-d7c53fba57eff2b1b1cb.js.map",
    "revision": "b5d8d2f9d8a9d62689f6b453b6dacaad"
  },
  {
    "url": "component---src-pages-tags-tsx-fb3005d3fdd11cb79056.js"
  },
  {
    "url": "component---src-pages-tags-tsx-fb3005d3fdd11cb79056.js.map",
    "revision": "46917320d57f92b224f519b1fdea1bce"
  },
  {
    "url": "component---src-templates-markdown-page-template-tsx-ba04fe16abe00b5820f6.js"
  },
  {
    "url": "component---src-templates-markdown-page-template-tsx-ba04fe16abe00b5820f6.js.map",
    "revision": "8aaf5522839b3c079baa8f45f42b2e60"
  },
  {
    "url": "component---src-templates-tags-tsx-7c096e1a80d9f3aa1206.js"
  },
  {
    "url": "component---src-templates-tags-tsx-7c096e1a80d9f3aa1206.js.map",
    "revision": "82a5b62980d8e8e3ca7e3861c50c2f22"
  },
  {
    "url": "component---src-templates-template-tsx-923251224714e7bbc7f3.js"
  },
  {
    "url": "component---src-templates-template-tsx-923251224714e7bbc7f3.js.map",
    "revision": "eb5ab344865d0cd88259864ab76bca25"
  },
  {
    "url": "contact/index.html",
    "revision": "c3b6b060ad0658ac44d0d3591ad8daa6"
  },
  {
    "url": "data-controller/index.html",
    "revision": "c4e56b3246071bb2d178dd6a1736fdc0"
  },
  {
    "url": "datacontroller-on-azure/index.html",
    "revision": "8faec1c4860f3bc0554253824b3032f0"
  },
  {
    "url": "euc-data-control/index.html",
    "revision": "787c3e25cb149412d0692fd57efb3164"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "1b4dc9eb04481a70d21c15ac12948eb6"
  },
  {
    "url": "framework-02fcab78320a77685ff9.js"
  },
  {
    "url": "framework-02fcab78320a77685ff9.js.map",
    "revision": "429fadc91e9a8b0d3455ab12ac5badf5"
  },
  {
    "url": "icons/icon-144x144.png",
    "revision": "a2bbff933efc1e39a8549a559da42a87"
  },
  {
    "url": "icons/icon-192x192.png",
    "revision": "8e2eb5291e76d333632d7533bfce0ed6"
  },
  {
    "url": "icons/icon-256x256.png",
    "revision": "1d76ec8fc20e9489fdb2ff2b97cebceb"
  },
  {
    "url": "icons/icon-384x384.png",
    "revision": "3a5d7bfc83546e50bdf3f193b7efc6fb"
  },
  {
    "url": "icons/icon-48x48.png",
    "revision": "0a49bb6fd00e6cf4566afddca17ce495"
  },
  {
    "url": "icons/icon-512x512.png",
    "revision": "b0be4730a01904cffaec68c01d7b591a"
  },
  {
    "url": "icons/icon-72x72.png",
    "revision": "e005c39d747e5164c4c71603aca5c7b7"
  },
  {
    "url": "icons/icon-96x96.png",
    "revision": "bbcdf6aa042785a8f51552ee11d18f01"
  },
  {
    "url": "idb-keyval-3.2.0-iife.min.js"
  },
  {
    "url": "img/android-icon-144x144.png",
    "revision": "6c7d08bc65dd917a56833992ca51a27e"
  },
  {
    "url": "img/android-icon-192x192.png",
    "revision": "f29dbc6e6a95705b3d42792ec75e2b98"
  },
  {
    "url": "img/android-icon-36x36.png",
    "revision": "d50e7bbeed19b8052c8558cd7ba3c61b"
  },
  {
    "url": "img/android-icon-48x48.png",
    "revision": "b67e19268862421f0cf6c86b5665961e"
  },
  {
    "url": "img/android-icon-72x72.png",
    "revision": "7b80af0bfd74c9028d7a735f9691aaad"
  },
  {
    "url": "img/android-icon-96x96.png",
    "revision": "8ac9ab48e31623082f249c2fff32a4af"
  },
  {
    "url": "img/apple-icon-114x114.png",
    "revision": "7e3742d5f44b09782dbd305ee5fd4d41"
  },
  {
    "url": "img/apple-icon-120x120.png",
    "revision": "cfaaf4a48bf5c891f8fcb549fff7b599"
  },
  {
    "url": "img/apple-icon-144x144.png",
    "revision": "6c7d08bc65dd917a56833992ca51a27e"
  },
  {
    "url": "img/apple-icon-152x152.png",
    "revision": "62111edfc6bc51a5f218d1821a3bad77"
  },
  {
    "url": "img/apple-icon-180x180.png",
    "revision": "598c27ccb929a75ee9e0fd8e83d79390"
  },
  {
    "url": "img/apple-icon-57x57.png",
    "revision": "1209edb4f4214af55dd97e44031d3adb"
  },
  {
    "url": "img/apple-icon-60x60.png",
    "revision": "dc73287a433f20589fce7eb5d558365e"
  },
  {
    "url": "img/apple-icon-72x72.png",
    "revision": "7b80af0bfd74c9028d7a735f9691aaad"
  },
  {
    "url": "img/apple-icon-76x76.png",
    "revision": "3f4234e9c0752612b2c8f3bf94a78df9"
  },
  {
    "url": "img/apple-icon-precomposed.png",
    "revision": "8d3bcf9c07ecc610fedaa96880619f02"
  },
  {
    "url": "img/apple-icon.png",
    "revision": "8d3bcf9c07ecc610fedaa96880619f02"
  },
  {
    "url": "img/browserconfig.xml",
    "revision": "653d077300a12f09a69caeea7a8947f8"
  },
  {
    "url": "img/favicon-16x16.png",
    "revision": "eb9d2e3fef52dd0a7d89cdd847459a1b"
  },
  {
    "url": "img/favicon-32x32.png",
    "revision": "5f3e9d8aff464e3b3d69fa05c7b4aad9"
  },
  {
    "url": "img/favicon-96x96.png",
    "revision": "8ac9ab48e31623082f249c2fff32a4af"
  },
  {
    "url": "img/favicon.ico",
    "revision": "5948767183be5cba535808aee5256c39"
  },
  {
    "url": "img/logo_linkedincover.png",
    "revision": "272dfeac1d5c624002d36c585aa83f42"
  },
  {
    "url": "img/manifest.json",
    "revision": "2cb1641030856b343a54a7b78ade9295"
  },
  {
    "url": "img/ms-icon-144x144.png",
    "revision": "6c7d08bc65dd917a56833992ca51a27e"
  },
  {
    "url": "img/ms-icon-150x150.png",
    "revision": "e9fc2834c2a31d234156f3e31bc8133d"
  },
  {
    "url": "img/ms-icon-310x310.png",
    "revision": "165d8ff8f221cc451b9879c70964fd3a"
  },
  {
    "url": "img/ms-icon-70x70.png",
    "revision": "100e3220838bbfc7cf137c55764b52a7"
  },
  {
    "url": "img/sas-apps.png",
    "revision": "9b310348d63af64d4e8d7e297da51a0f"
  },
  {
    "url": "img/sas-apps.svg",
    "revision": "5875bc82fac58489454474ec21eaaf54"
  },
  {
    "url": "index.html",
    "revision": "b538aa7d106dc2a7854b7fc4897595de"
  },
  {
    "url": "load-balancing-sasjs-server/index.html",
    "revision": "e5c1859daf8d295dc7ea2e763198e92e"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "e76a1a695e6f14fdbceaab2e30a8f06a"
  },
  {
    "url": "modernise-legacy-apps/index.html",
    "revision": "998ddfb8083621e3f1fbaa84cac8af45"
  },
  {
    "url": "modernising-legacy-sas-scl-af-applications/index.html",
    "revision": "157e8c344623da7ca989ba6030d9df71"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "a2dcbb91891428e72b94724482589ef3"
  },
  {
    "url": "page-data/404.html/page-data.json",
    "revision": "5e0e0be45b5aee556ef049956eaa6ca7"
  },
  {
    "url": "page-data/404/page-data.json",
    "revision": "d1c4e95c77a95d043190190321db7953"
  },
  {
    "url": "page-data/about/page-data.json",
    "revision": "655eecea172536262b2e7cf20af468f4"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "283c8938beff847081978e2213533a98"
  },
  {
    "url": "page-data/blog/page-data.json",
    "revision": "8983cd071d1f8463c1a099498658f522"
  },
  {
    "url": "page-data/contact/page-data.json",
    "revision": "bc697b3cab715df24b3a9a883724489f"
  },
  {
    "url": "page-data/data-controller/page-data.json",
    "revision": "d6cabd63ef84e6ddf604a967c5a79845"
  },
  {
    "url": "page-data/datacontroller-on-azure/page-data.json",
    "revision": "d8b33d61d95f8da39831927e2d26cdc9"
  },
  {
    "url": "page-data/euc-data-control/page-data.json",
    "revision": "b448eb6cbb33e4150b1f39be7a7985c3"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "e6384eba56daa58dcbabc8be1fd24628"
  },
  {
    "url": "page-data/load-balancing-sasjs-server/page-data.json",
    "revision": "ea6df069d55e11b11e498e26d7606f6d"
  },
  {
    "url": "page-data/modernise-legacy-apps/page-data.json",
    "revision": "950fd489018f882964876652797111a4"
  },
  {
    "url": "page-data/modernising-legacy-sas-scl-af-applications/page-data.json",
    "revision": "a1021b7a01afe825360ac6105ccf7bd9"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "43232b01cc861c0701a3ece4bd67720b"
  },
  {
    "url": "page-data/pricing/page-data.json",
    "revision": "330053198faac1069afb3096d9551ea8"
  },
  {
    "url": "page-data/products/page-data.json",
    "revision": "c880138f351a85c6d3e25f540d04a5e4"
  },
  {
    "url": "page-data/projects/page-data.json",
    "revision": "c06dcbdaee59fdebe247b3d57f9c1fc3"
  },
  {
    "url": "page-data/sample-md-file/page-data.json",
    "revision": "f3a51ebc2e5403537fa09797192da431"
  },
  {
    "url": "page-data/sas-app-delivery/page-data.json",
    "revision": "2ca2efc8ab9243122c7bd7d6b8e3b7a9"
  },
  {
    "url": "page-data/sas-app-support/page-data.json",
    "revision": "7b79c5b9f7bf21b66aea16bb3785ff0f"
  },
  {
    "url": "page-data/sas-js/page-data.json",
    "revision": "4a5c0266058971893f47453b9e52a209"
  },
  {
    "url": "page-data/sas-powered-apps/page-data.json",
    "revision": "4caf2b395439446c135fe726a1871dcd"
  },
  {
    "url": "page-data/sas-sensei/page-data.json",
    "revision": "63da53e245b754f35b81ef182a846ba5"
  },
  {
    "url": "page-data/sas-streamed-apps/page-data.json",
    "revision": "cb8b3ef4163adf8b011103a1e3b9e353"
  },
  {
    "url": "page-data/sasjs-enhancements/page-data.json",
    "revision": "4701b7433fd2ca38582094770115b35d"
  },
  {
    "url": "page-data/sasjs-server-on-vps/page-data.json",
    "revision": "5912e18d6bd6f292f01c2e87866f01af"
  },
  {
    "url": "page-data/sasjs-workshops/page-data.json",
    "revision": "dac4879d8eddc535c2c7c8383bd60654"
  },
  {
    "url": "page-data/services/page-data.json",
    "revision": "b027a32998a61f276fab47dadd8dbd03"
  },
  {
    "url": "page-data/slavery-statement/page-data.json",
    "revision": "e6f1188b9b5ff8760f2314365d31c410"
  },
  {
    "url": "page-data/solutions/page-data.json",
    "revision": "ed5827a9cdeffd708c8f0c76b5abf13d"
  },
  {
    "url": "page-data/support/page-data.json",
    "revision": "3c00a7baeab4f74d5fd551d616ec5f18"
  },
  {
    "url": "page-data/tags/af-scl/page-data.json",
    "revision": "48404bf54e7895c2c431d1a6be29fdcf"
  },
  {
    "url": "page-data/tags/apps/page-data.json",
    "revision": "7e97c31f7864e0aed94f4032243bebdc"
  },
  {
    "url": "page-data/tags/data-governance/page-data.json",
    "revision": "b2b0ead8a87ff15560b35af54ca3630d"
  },
  {
    "url": "page-data/tags/git/page-data.json",
    "revision": "7499b1a9a52751e90aed47a3b39520a3"
  },
  {
    "url": "page-data/tags/microsoft-azure/page-data.json",
    "revision": "68fa76b0153f6ce5f99053d399bbf33c"
  },
  {
    "url": "page-data/tags/page-data.json",
    "revision": "2d6bfc566b34490d0470d06ae1e9951e"
  },
  {
    "url": "page-data/tags/sa-sjs-server/page-data.json",
    "revision": "ed9c0bddfa87cf71a4af1862300fa67d"
  },
  {
    "url": "page-data/tags/sa-sjs/page-data.json",
    "revision": "cc014d07a5c7da9b3af3b6ad8d83b4b2"
  },
  {
    "url": "page-data/tags/sas-admin/page-data.json",
    "revision": "dc07f5ff6d17ca25f6f90b3c1708db11"
  },
  {
    "url": "page-data/tags/sas-intr-net/page-data.json",
    "revision": "ae773ba19680a512b11a80c3df822775"
  },
  {
    "url": "page-data/tags/sas/page-data.json",
    "revision": "300e1ffb2da89c559ff9b3a73789b2a2"
  },
  {
    "url": "page-data/using-git-with-sas/page-data.json",
    "revision": "0c8eae6f7f16e4c3a631b465dc64636b"
  },
  {
    "url": "polyfill-39d01fc442e9f30e29e1.js"
  },
  {
    "url": "polyfill-39d01fc442e9f30e29e1.js.map",
    "revision": "b60785568710be1b9785dc3fd15a5e42"
  },
  {
    "url": "pricing/index.html",
    "revision": "e3e5ab7299eac3a5308b41a6398010d2"
  },
  {
    "url": "products/index.html",
    "revision": "65488e816bf310a7abb7bde736368c63"
  },
  {
    "url": "projects/index.html",
    "revision": "936fd5e26733b753d79154aacc17db94"
  },
  {
    "url": "robots.txt",
    "revision": "d307a31d16b65e630976d6cf4b318c01"
  },
  {
    "url": "sample-md-file/index.html",
    "revision": "85556d3811d402ad3639f2bceb33a58d"
  },
  {
    "url": "sas-app-delivery/index.html",
    "revision": "6d82735797c81a820290d88b0752d96b"
  },
  {
    "url": "sas-app-support/index.html",
    "revision": "d176f22e2d1b8249a0f337063f7f9b82"
  },
  {
    "url": "sas-js/index.html",
    "revision": "650f10a393b79995b534d3aead515f9b"
  },
  {
    "url": "sas-powered-apps/index.html",
    "revision": "920a4081867a23191af59d345fb8bcd3"
  },
  {
    "url": "sas-sensei/index.html",
    "revision": "24c82a2375666c42b98cb5d1a0657d14"
  },
  {
    "url": "sas-streamed-apps/index.html",
    "revision": "30f6578253da9566cbe9319a0b0f84e2"
  },
  {
    "url": "sasjs-enhancements/index.html",
    "revision": "c58af8db9586ee5805706074c00aeaa8"
  },
  {
    "url": "sasjs-server-on-vps/index.html",
    "revision": "22d61e179dda8fccb729dbcce2826641"
  },
  {
    "url": "sasjs-workshops/index.html",
    "revision": "a7366dce526739580b93910934a66e4a"
  },
  {
    "url": "services/index.html",
    "revision": "3fa92743c893ca02194be496676f0b28"
  },
  {
    "url": "slavery-statement/index.html",
    "revision": "0f2395caa4b02bd77d9d54f5aa1fe134"
  },
  {
    "url": "solutions/index.html",
    "revision": "c5505725475be56766d08f1eeecf6e32"
  },
  {
    "url": "static/22305492b67e7dfe7d27801ca0ec182e/1d69c/mario.png"
  },
  {
    "url": "static/22305492b67e7dfe7d27801ca0ec182e/2a4de/mario.png"
  },
  {
    "url": "static/22305492b67e7dfe7d27801ca0ec182e/31987/mario.png"
  },
  {
    "url": "static/22305492b67e7dfe7d27801ca0ec182e/3faba/mario.png"
  },
  {
    "url": "static/22305492b67e7dfe7d27801ca0ec182e/46604/mario.png"
  },
  {
    "url": "static/22305492b67e7dfe7d27801ca0ec182e/497c6/mario.png"
  },
  {
    "url": "static/22305492b67e7dfe7d27801ca0ec182e/4dcb9/mario.png"
  },
  {
    "url": "static/22305492b67e7dfe7d27801ca0ec182e/5e9fc/mario.png"
  },
  {
    "url": "static/22305492b67e7dfe7d27801ca0ec182e/5ff7e/mario.png"
  },
  {
    "url": "static/22305492b67e7dfe7d27801ca0ec182e/62d80/mario.png"
  },
  {
    "url": "static/22305492b67e7dfe7d27801ca0ec182e/78797/mario.png"
  },
  {
    "url": "static/22305492b67e7dfe7d27801ca0ec182e/aa440/mario.png"
  },
  {
    "url": "static/22305492b67e7dfe7d27801ca0ec182e/d8815/mario.png"
  },
  {
    "url": "static/22305492b67e7dfe7d27801ca0ec182e/e1953/mario.png"
  },
  {
    "url": "static/22305492b67e7dfe7d27801ca0ec182e/ee604/mario.png"
  },
  {
    "url": "static/2231a88e4a9492cde687c77c874447a5/0b74b/loadbalance1.png"
  },
  {
    "url": "static/2231a88e4a9492cde687c77c874447a5/497c6/loadbalance1.png"
  },
  {
    "url": "static/2231a88e4a9492cde687c77c874447a5/4dcb9/loadbalance1.png"
  },
  {
    "url": "static/2231a88e4a9492cde687c77c874447a5/5ff7e/loadbalance1.png"
  },
  {
    "url": "static/2231a88e4a9492cde687c77c874447a5/62d80/loadbalance1.png"
  },
  {
    "url": "static/2231a88e4a9492cde687c77c874447a5/71ce0/loadbalance1.png"
  },
  {
    "url": "static/2231a88e4a9492cde687c77c874447a5/e1953/loadbalance1.png"
  },
  {
    "url": "static/235cd1fcef54bbd4be30b13555a53968/1d69c/kanban.png"
  },
  {
    "url": "static/235cd1fcef54bbd4be30b13555a53968/29114/kanban.png"
  },
  {
    "url": "static/235cd1fcef54bbd4be30b13555a53968/4dcb9/kanban.png"
  },
  {
    "url": "static/235cd1fcef54bbd4be30b13555a53968/5ff7e/kanban.png"
  },
  {
    "url": "static/235cd1fcef54bbd4be30b13555a53968/78797/kanban.png"
  },
  {
    "url": "static/235cd1fcef54bbd4be30b13555a53968/aa440/kanban.png"
  },
  {
    "url": "static/3f359fdd06abf3c58f48a9b8a727986c/1d69c/sasjs_server_dns.png"
  },
  {
    "url": "static/3f359fdd06abf3c58f48a9b8a727986c/4dcb9/sasjs_server_dns.png"
  },
  {
    "url": "static/3f359fdd06abf3c58f48a9b8a727986c/5ff7e/sasjs_server_dns.png"
  },
  {
    "url": "static/3f359fdd06abf3c58f48a9b8a727986c/78797/sasjs_server_dns.png"
  },
  {
    "url": "static/3f359fdd06abf3c58f48a9b8a727986c/aa440/sasjs_server_dns.png"
  },
  {
    "url": "static/3f359fdd06abf3c58f48a9b8a727986c/bfe41/sasjs_server_dns.png"
  },
  {
    "url": "static/48967c26cb67d4a943c48b5ba875b84c/0d367/sas_scl.png"
  },
  {
    "url": "static/48967c26cb67d4a943c48b5ba875b84c/2a4de/sas_scl.png"
  },
  {
    "url": "static/48967c26cb67d4a943c48b5ba875b84c/31493/sas_scl.png"
  },
  {
    "url": "static/48967c26cb67d4a943c48b5ba875b84c/46604/sas_scl.png"
  },
  {
    "url": "static/48967c26cb67d4a943c48b5ba875b84c/497c6/sas_scl.png"
  },
  {
    "url": "static/48967c26cb67d4a943c48b5ba875b84c/4dcb9/sas_scl.png"
  },
  {
    "url": "static/48967c26cb67d4a943c48b5ba875b84c/5ff7e/sas_scl.png"
  },
  {
    "url": "static/48967c26cb67d4a943c48b5ba875b84c/62d80/sas_scl.png"
  },
  {
    "url": "static/48967c26cb67d4a943c48b5ba875b84c/e1953/sas_scl.png"
  },
  {
    "url": "static/80428fcead9e5f0817fcc890dbccf234/2b087/sasjs_server.png"
  },
  {
    "url": "static/80428fcead9e5f0817fcc890dbccf234/62d80/sasjs_server.png"
  },
  {
    "url": "static/868097839670d46b3de222aa69cb7fe1/074f8/datacontroller.png"
  },
  {
    "url": "static/868097839670d46b3de222aa69cb7fe1/1d69c/datacontroller.png"
  },
  {
    "url": "static/868097839670d46b3de222aa69cb7fe1/2a4de/datacontroller.png"
  },
  {
    "url": "static/868097839670d46b3de222aa69cb7fe1/31987/datacontroller.png"
  },
  {
    "url": "static/868097839670d46b3de222aa69cb7fe1/46604/datacontroller.png"
  },
  {
    "url": "static/868097839670d46b3de222aa69cb7fe1/497c6/datacontroller.png"
  },
  {
    "url": "static/868097839670d46b3de222aa69cb7fe1/4dcb9/datacontroller.png"
  },
  {
    "url": "static/868097839670d46b3de222aa69cb7fe1/5ff7e/datacontroller.png"
  },
  {
    "url": "static/868097839670d46b3de222aa69cb7fe1/62d80/datacontroller.png"
  },
  {
    "url": "static/868097839670d46b3de222aa69cb7fe1/78797/datacontroller.png"
  },
  {
    "url": "static/868097839670d46b3de222aa69cb7fe1/7de21/datacontroller.png"
  },
  {
    "url": "static/868097839670d46b3de222aa69cb7fe1/aa440/datacontroller.png"
  },
  {
    "url": "static/868097839670d46b3de222aa69cb7fe1/d8815/datacontroller.png"
  },
  {
    "url": "static/868097839670d46b3de222aa69cb7fe1/e1953/datacontroller.png"
  },
  {
    "url": "static/868097839670d46b3de222aa69cb7fe1/ee604/datacontroller.png"
  },
  {
    "url": "static/allan-731088ea09bd91d83ceb005a4206b51f.jpeg"
  },
  {
    "url": "static/analytics-platform-ea8bd9675c0382091a2c329eb9383ad2.svg"
  },
  {
    "url": "static/b0875b4e990aaefd7647b515c392a871/4dcb9/sasjs_240x120.png"
  },
  {
    "url": "static/b0875b4e990aaefd7647b515c392a871/8ff5a/sasjs_240x120.png"
  },
  {
    "url": "static/bae2039bb6ef0502219a8804bfd039cf/46604/targets.png"
  },
  {
    "url": "static/bae2039bb6ef0502219a8804bfd039cf/497c6/targets.png"
  },
  {
    "url": "static/bae2039bb6ef0502219a8804bfd039cf/62d80/targets.png"
  },
  {
    "url": "static/bae2039bb6ef0502219a8804bfd039cf/8c8ba/targets.png"
  },
  {
    "url": "static/bae2039bb6ef0502219a8804bfd039cf/e1953/targets.png"
  },
  {
    "url": "static/business-finance-dafe6b3c382f7215f07e1399383df7c3.svg"
  },
  {
    "url": "static/c0f0ecb448f2f8289977bd9c970cf5c0/4dcb9/loadbalance2.png"
  },
  {
    "url": "static/c0f0ecb448f2f8289977bd9c970cf5c0/5ff7e/loadbalance2.png"
  },
  {
    "url": "static/c0f0ecb448f2f8289977bd9c970cf5c0/71ce0/loadbalance2.png"
  },
  {
    "url": "static/charts-9ba9f3351f80076e9254d080b1758b26.svg"
  },
  {
    "url": "static/contact-help-aa7761e849cab25dbf81959d115ea26a.svg"
  },
  {
    "url": "static/dc-logo-8f93d648cf8725f2d45aed3b2c1bda78.svg"
  },
  {
    "url": "static/dc-name-df83db79c0b0a7e886d08ec3e275086d.svg"
  },
  {
    "url": "static/f726616dfab01eae7a759ab91f47ad1c/46604/sasjs_square.png"
  },
  {
    "url": "static/f726616dfab01eae7a759ab91f47ad1c/497c6/sasjs_square.png"
  },
  {
    "url": "static/f726616dfab01eae7a759ab91f47ad1c/62d80/sasjs_square.png"
  },
  {
    "url": "static/f726616dfab01eae7a759ab91f47ad1c/e1953/sasjs_square.png"
  },
  {
    "url": "static/fontawesome-webfont-674f50d287a8c48dc19ba404d20fe713.eot"
  },
  {
    "url": "static/fontawesome-webfont-912ec66d7572ff821749319396470bde.svg"
  },
  {
    "url": "static/fontawesome-webfont-af7ae505a9eed503f8b8e6982036873e.woff2"
  },
  {
    "url": "static/fontawesome-webfont-b06871f281fee6b241d60582ae9369b9.ttf"
  },
  {
    "url": "static/fontawesome-webfont-fee66e712a8a08eef5805a46892932ad.woff"
  },
  {
    "url": "static/Ivor-8bd8bfa9e5b455724bfbfc5483624dc4.jpg"
  },
  {
    "url": "static/js-logo-16deab4b6863af45cf7512affae91a5d.png"
  },
  {
    "url": "static/krishna-bcb8682efbc43141ef511466d06504b6.png"
  },
  {
    "url": "static/mihajlo-d63fa20a8f3b3f7da73472261639be54.png"
  },
  {
    "url": "static/photo-frame-sq-f373e3820c65c2b1bfcbb76e5a77979c.png"
  },
  {
    "url": "static/saad-24cb97b409b5bffa374adf9cc0694f98.png"
  },
  {
    "url": "static/sabir-3f35b72cb4d6248053a36696a7154134.png"
  },
  {
    "url": "static/sas-app-delivery-be2d2a06f50a041dea0d3facf47ea739.png"
  },
  {
    "url": "static/sas-app-support-15a8d9b205e93f224914589d60d72082.svg"
  },
  {
    "url": "static/sas-apps-5875bc82fac58489454474ec21eaaf54.svg"
  },
  {
    "url": "static/sasensei-logo-9729ff71f27b4b470c35c59c92de0f00.svg"
  },
  {
    "url": "static/sasensei-name-845c197a2db7a9a34ef42a29edadf452.svg"
  },
  {
    "url": "static/sasjs-enhance-c9a28422d391b8860f3f6b49e0ec4765.svg"
  },
  {
    "url": "static/yury-20414d64a447307e5a4d5bfeb8c96ac2.png"
  },
  {
    "url": "styles-c2fe8482057191dca484.js"
  },
  {
    "url": "styles-c2fe8482057191dca484.js.map",
    "revision": "aca5b7feab278569bad07d62a5da3185"
  },
  {
    "url": "styles.00cf86bfa171fb750363.css"
  },
  {
    "url": "support/index.html",
    "revision": "60a20d1916f084e27e0d72e2bf93e77e"
  },
  {
    "url": "tags/af-scl/index.html",
    "revision": "3e2ab52e93b446e20aa9fdeb1d4fb019"
  },
  {
    "url": "tags/apps/index.html",
    "revision": "81118c514b9ee4c9000e87aee8410179"
  },
  {
    "url": "tags/data-governance/index.html",
    "revision": "aeb9ce58a38ea9ac4cfd25e309be42fd"
  },
  {
    "url": "tags/git/index.html",
    "revision": "ba6f6bcdc37ad81a3a625972b678a3e1"
  },
  {
    "url": "tags/index.html",
    "revision": "a42da924d8e86431bb818c8fd705aa95"
  },
  {
    "url": "tags/microsoft-azure/index.html",
    "revision": "f0c31511485a15d78e9741791274d0fe"
  },
  {
    "url": "tags/sa-sjs-server/index.html",
    "revision": "0c98cdb6e2e57c41047f89dca4eabb2c"
  },
  {
    "url": "tags/sa-sjs/index.html",
    "revision": "b4910ff4ab17963d410a5dd670f831d4"
  },
  {
    "url": "tags/sas-admin/index.html",
    "revision": "95e5e3c2202f436659feae6dd3e07abc"
  },
  {
    "url": "tags/sas-intr-net/index.html",
    "revision": "1753c662e75d313cf67d217c4d75dfaf"
  },
  {
    "url": "tags/sas/index.html",
    "revision": "741e08a8b33ec7405f09d3aa838d3be1"
  },
  {
    "url": "using-git-with-sas/index.html",
    "revision": "3802e603728d6ccf4aeacad15ab08d69"
  },
  {
    "url": "webpack-runtime-aa8efaacb183715fb054.js"
  },
  {
    "url": "webpack-runtime-aa8efaacb183715fb054.js.map",
    "revision": "99abaf9294d70f0b73a4a38739cf61ce"
  },
  {
    "url": "webpack.stats.json",
    "revision": "126d4613e783b12c908d223561a36103"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\page-data\/.*\/page-data\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\/page-data\/app-data\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */
importScripts(`idb-keyval-3.2.0-iife.min.js`)

const { NavigationRoute } = workbox.routing

let lastNavigationRequest = null
let offlineShellEnabled = true

// prefer standard object syntax to support more browsers
const MessageAPI = {
  setPathResources: (event, { path, resources }) => {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources: event => {
    event.waitUntil(idbKeyval.clear())
  },

  enableOfflineShell: () => {
    offlineShellEnabled = true
  },

  disableOfflineShell: () => {
    offlineShellEnabled = false
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi: api } = event.data
  if (api) MessageAPI[api](event, event.data)
})

function handleAPIRequest({ event }) {
  const { pathname } = new URL(event.request.url)

  const params = pathname.match(/:(.+)/)[1]
  const data = {}

  if (params.includes(`=`)) {
    params.split(`&`).forEach(param => {
      const [key, val] = param.split(`=`)
      data[key] = val
    })
  } else {
    data.api = params
  }

  if (MessageAPI[data.api] !== undefined) {
    MessageAPI[data.api]()
  }

  if (!data.redirect) {
    return new Response()
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: lastNavigationRequest,
    },
  })
}

const navigationRoute = new NavigationRoute(async ({ event }) => {
  // handle API requests separately to normal navigation requests, so do this
  // check first
  if (event.request.url.match(/\/.gatsby-plugin-offline:.+/)) {
    return handleAPIRequest({ event })
  }

  if (!offlineShellEnabled) {
    return await fetch(event.request)
  }

  lastNavigationRequest = event.request.url

  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/app-48ef67c676f5d7d3592c.js`))) {
    return await fetch(event.request)
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request)
    }
  }

  const offlineShell = `/offline-plugin-app-shell-fallback/index.html`
  const offlineShellWithKey = workbox.precaching.getCacheKeyForURL(offlineShell)
  return await caches.match(offlineShellWithKey)
})

workbox.routing.registerRoute(navigationRoute)

// this route is used when performing a non-navigation request (e.g. fetch)
workbox.routing.registerRoute(/\/.gatsby-plugin-offline:.+/, handleAPIRequest)
