// Garde l'appli dans le téléphone pour qu'elle marche sans internet.
// Change le numéro de version à chaque mise à jour de l'appli.
var VERSION = 'repas-v3';
var FICHIERS = ['./', 'index.html', 'style.css', 'app.js', 'recettes.js', 'manifest.webmanifest',
  'icones/icone-192.png', 'icones/icone-512.png', 'icones/icone-180.png'].concat(
  ["photos/banana-bread.jpg", "photos/blanquette-de-veau.jpg", "photos/boeuf-bourguignon.jpg", "photos/boulettes-de-boeuf-sauce-tomate.jpg", "photos/brandade-de-morue.jpg", "photos/brownie.jpg", "photos/buddha-bowl.jpg", "photos/cabillaud-en-papillote.jpg", "photos/carbonade-flamande.jpg", "photos/chili-con-carne.jpg", "photos/chili-sin-carne.jpg", "photos/clafoutis-aux-cerises.jpg", "photos/colin-pane-et-puree.jpg", "photos/compote-de-pommes-maison.jpg", "photos/cookies-aux-pepites-de-chocolat.jpg", "photos/cotes-de-porc-et-haricots-verts.jpg", "photos/couscous-au-poulet-et-merguez.jpg", "photos/creme-brulee.jpg", "photos/crepes.jpg", "photos/crevettes-sautees-a-l-ail.jpg", "photos/croque-madame.jpg", "photos/croque-monsieur.jpg", "photos/croque-vegetarien.jpg", "photos/croziflette.jpg", "photos/crumble-aux-pommes.jpg", "photos/curry-de-lentilles.jpg", "photos/dahl-de-pois-chiches-et-epinards.jpg", "photos/endives-au-jambon.jpg", "photos/escalope-de-dinde-a-la-creme.jpg", "photos/fajitas-au-poulet.jpg", "photos/far-breton.jpg", "photos/filet-mignon-a-la-moutarde.jpg", "photos/fondant-au-chocolat.jpg", "photos/galettes-de-legumes.jpg", "photos/gaspacho.jpg", "photos/gateau-au-yaourt.jpg", "photos/gaufres.jpg", "photos/gnocchis-a-la-tomate-et-mozzarella.jpg", "photos/gratin-dauphinois.jpg", "photos/gratin-de-courgettes.jpg", "photos/gratin-de-pates-au-jambon.jpg", "photos/hachis-parmentier.jpg", "photos/hot-dog-maison.jpg", "photos/lasagnes-a-la-bolognaise.jpg", "photos/lasagnes-aux-legumes.jpg", "photos/minestrone.jpg", "photos/moules-marinieres.jpg", "photos/mousse-au-chocolat.jpg", "photos/nouilles-sautees-aux-legumes.jpg", "photos/oeufs-brouilles-et-toasts.jpg", "photos/oeufs-cocotte.jpg", "photos/omelette-aux-champignons.jpg", "photos/paella.jpg", "photos/panna-cotta-aux-fruits-rouges.jpg", "photos/pates-au-pesto.jpg", "photos/pates-bolognaise.jpg", "photos/pizza-maison-jambon-fromage.jpg", "photos/poke-bowl-au-saumon.jpg", "photos/porc-au-caramel.jpg", "photos/pot-au-feu.jpg", "photos/poulet-a-la-moutarde.jpg", "photos/poulet-au-curry-et-lait-de-coco.jpg", "photos/poulet-basquaise.jpg", "photos/poulet-roti-et-legumes.jpg", "photos/poulet-tikka-masala.jpg", "photos/puree-de-patate-douce-et-poulet.jpg", "photos/quesadillas.jpg", "photos/quiche-aux-poireaux.jpg", "photos/quiche-lorraine.jpg", "photos/raclette.jpg", "photos/ratatouille.jpg", "photos/risotto-aux-champignons.jpg", "photos/riz-au-lait.jpg", "photos/riz-cantonais.jpg", "photos/roti-de-porc-aux-pommes-de-terre.jpg", "photos/salade-cesar.jpg", "photos/salade-de-chevre-chaud.jpg", "photos/salade-de-fruits-frais.jpg", "photos/salade-de-lentilles.jpg", "photos/salade-de-pates.jpg", "photos/salade-nicoise.jpg", "photos/saucisses-lentilles.jpg", "photos/saumon-en-croute-d-herbes.jpg", "photos/saumon-riz-et-brocoli.jpg", "photos/shakshuka.jpg", "photos/soupe-a-l-oignon-gratinee.jpg", "photos/soupe-de-legumes.jpg", "photos/soupe-de-potimarron-au-lait-de-coco.jpg", "photos/spaghetti-carbonara.jpg", "photos/steak-hache-et-frites-au-four.jpg", "photos/taboule-de-quinoa.jpg", "photos/taboule.jpg", "photos/tagliatelles-au-saumon.jpg", "photos/tajine-de-poulet-aux-citrons-confits.jpg", "photos/tarte-a-la-tomate-et-moutarde.jpg", "photos/tarte-aux-pommes.jpg", "photos/tartiflette.jpg", "photos/tiramisu.jpg", "photos/veloute-de-champignons.jpg", "photos/veloute-de-poireaux-pommes-de-terre.jpg", "photos/veloute-de-potiron.jpg", "photos/wrap-poulet-crudites.jpg"]);

self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(VERSION).then(function (c) { return c.addAll(FICHIERS); }));
  self.skipWaiting();
});
self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (cles) {
    return Promise.all(cles.filter(function (k) { return k !== VERSION; }).map(function (k) { return caches.delete(k); }));
  }));
  self.clients.claim();
});
// Réseau d'abord (pour avoir les nouveautés), sinon la copie enregistrée
self.addEventListener('fetch', function (e) {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    fetch(e.request).then(function (rep) {
      var copie = rep.clone();
      caches.open(VERSION).then(function (c) { c.put(e.request, copie); });
      return rep;
    }).catch(function () { return caches.match(e.request, { ignoreSearch: true }); })
  );
});
