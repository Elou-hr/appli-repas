/* =====================================================================
   Appli repas — tout le fonctionnement de l'appli
   Les recettes sont dans recettes.js (variable RECETTES_BRUTES).
   Les données de l'utilisatrice (favoris, notes, planning…) sont
   enregistrées dans le téléphone (localStorage), les photos dans IndexedDB.
   ===================================================================== */
(function () {
  'use strict';

  // ---------------------------------------------------------------
  // 1. Réglages et listes fixes
  // ---------------------------------------------------------------
  var CATS = ['Tous', 'Plat', 'Léger', 'Rapide', 'Végétarien', 'Dessert'];
  var TEINTES = { 'Plat': '#F3E3D3', 'Léger': '#DDEBDF', 'Rapide': '#F4EBC9', 'Végétarien': '#E2EAD3', 'Dessert': '#F2E0E6' };
  var KCALS = [{ id: 'all', label: 'Toutes', max: 99999 }, { id: '400', label: '< 400', max: 400 }, { id: '600', label: '< 600', max: 600 }];
  var JOURS = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
  var JOURS_COURTS = ['lun.', 'mar.', 'mer.', 'jeu.', 'ven.', 'sam.', 'dim.'];
  var AVIS = ['', 'Pas aimé', 'Bof', 'Correct', 'Bien aimé', 'Adoré'];
  var CLE_STOCKAGE = 'appliRepas.v1';

  // Familles d'aliments : taper la clé trouve aussi tous les mots de la famille
  var FAMILLES = {
    pates: ['pate', 'spaghetti', 'tagliatelle', 'penne', 'lasagne', 'macaroni', 'coquillette', 'fusilli', 'farfalle', 'linguine', 'ravioli', 'gnocchi', 'nouille', 'carbonara', 'bolognaise', 'torsade', 'orzo'],
    poisson: ['poisson', 'saumon', 'cabillaud', 'colin', 'thon', 'merlu', 'sardine', 'truite', 'lieu', 'dorade', 'maquereau', 'crevette', 'moule', 'fruits de mer'],
    viande: ['poulet', 'boeuf', 'porc', 'jambon', 'lardon', 'dinde', 'veau', 'agneau', 'steak', 'saucisse', 'chorizo', 'canard', 'lapin', 'viande'],
    poulet: ['poulet', 'volaille', 'dinde'],
    boeuf: ['boeuf', 'steak', 'bavette', 'hache', 'bourguignon'],
    porc: ['porc', 'jambon', 'lardon', 'saucisse', 'chorizo', 'filet mignon', 'echine'],
    soupe: ['soupe', 'veloute', 'potage', 'gaspacho', 'minestrone'],
    gateau: ['gateau', 'cake', 'fondant', 'brownie', 'moelleux', 'clafoutis', 'crumble', 'quatre quarts', 'cookie', 'tarte aux'],
    legume: ['legume', 'carotte', 'poireau', 'courgette', 'aubergine', 'poivron', 'tomate', 'brocoli', 'haricot', 'champignon', 'pomme de terre', 'ratatouille', 'epinard', 'chou', 'potiron', 'courge', 'navet', 'petit pois', 'endive', 'concombre', 'patate douce', 'butternut', 'oignon'],
    fromage: ['fromage', 'emmental', 'gruyere', 'comte', 'mozzarella', 'parmesan', 'chevre', 'raclette', 'reblochon', 'feta', 'cheddar', 'ricotta', 'mascarpone', 'roquefort'],
    oeuf: ['oeuf', 'omelette', 'quiche'],
    chocolat: ['chocolat', 'brownie', 'fondant', 'cacao'],
    vegetarien: ['vegetarien', 'lentille', 'pois chiche', 'tofu', 'haricot rouge'],
    fruit: ['fruit', 'pomme', 'poire', 'banane', 'fraise', 'orange', 'citron', 'abricot', 'framboise', 'myrtille', 'peche', 'ananas', 'mangue'],
    riz: ['riz', 'risotto', 'paella'],
    epice: ['epice', 'cumin', 'paprika', 'curry', 'curcuma', 'cannelle', 'muscade', 'piment', 'gingembre', 'herbes de provence', 'ras el hanout', 'garam masala', 'cardamome', 'clou de girofle', 'quatre epices'],
    herbe: ['herbe', 'persil', 'coriandre', 'basilic', 'ciboulette', 'thym', 'laurier', 'romarin', 'origan', 'menthe', 'estragon', 'aneth', 'herbes de provence'],
    gratin: ['gratin', 'gratine', 'dauphinois', 'tartiflette', 'lasagne', 'parmentier'],
    tarte: ['tarte', 'quiche', 'tourte', 'pizza']
  };
  var LIBELLES_FAMILLES = { pates: 'Pâtes', poisson: 'Poisson', viande: 'Viande', poulet: 'Poulet', boeuf: 'Bœuf', porc: 'Porc', soupe: 'Soupe', gateau: 'Gâteau', legume: 'Légumes', fromage: 'Fromage', oeuf: 'Œufs', chocolat: 'Chocolat', vegetarien: 'Végétarien', fruit: 'Fruits', riz: 'Riz', epice: 'Épices', herbe: 'Herbes', gratin: 'Gratin', tarte: 'Tarte' };

  // Saisons des fruits et légumes en France (0 = janvier … 11 = décembre)
  var SAISON = {
    'tomate': [5, 6, 7, 8], 'courgette': [5, 6, 7, 8], 'aubergine': [6, 7, 8], 'poivron': [6, 7, 8, 9], 'concombre': [4, 5, 6, 7, 8],
    'haricot vert': [5, 6, 7, 8], 'petit pois': [4, 5, 6], 'asperge': [3, 4, 5], 'radis': [3, 4, 5, 6], 'fraise': [4, 5, 6],
    'cerise': [5, 6], 'abricot': [5, 6, 7], 'peche': [6, 7, 8], 'melon': [6, 7, 8], 'framboise': [5, 6, 7, 8], 'myrtille': [6, 7, 8],
    'poireau': [0, 1, 2, 3, 8, 9, 10, 11], 'potiron': [8, 9, 10, 11, 0], 'butternut': [8, 9, 10, 11, 0, 1], 'courge': [8, 9, 10, 11, 0, 1],
    'chou': [9, 10, 11, 0, 1, 2], 'chou fleur': [8, 9, 10, 11, 0, 1, 2, 3], 'brocoli': [5, 6, 7, 8, 9, 10], 'epinard': [2, 3, 4, 8, 9, 10],
    'endive': [9, 10, 11, 0, 1, 2, 3], 'navet': [9, 10, 11, 0, 1, 2], 'betterave': [8, 9, 10, 11, 0, 1, 2], 'celeri': [8, 9, 10, 11, 0, 1, 2],
    'pomme': [8, 9, 10, 11, 0, 1, 2, 3], 'poire': [7, 8, 9, 10, 11, 0], 'clementine': [10, 11, 0, 1], 'orange': [11, 0, 1, 2, 3],
    'kiwi': [10, 11, 0, 1, 2, 3], 'champignon de paris': [8, 9, 10, 11], 'patate douce': [8, 9, 10, 11, 0, 1]
  };
  var MOIS = new Date().getMonth();

  // Placard par défaut (clé = nom normalisé)
  var PLACARD_DEFAUT = {
    'sel et poivre': 'toujours', 'sel': 'toujours', 'poivre': 'toujours', 'huile d olive': 'toujours', 'huile': 'toujours',
    'sucre': 'toujours', 'farine': 'parfois', 'beurre': 'parfois', 'bouillon': 'parfois', 'ail': 'parfois', 'gousse d ail': 'parfois',
    'herbes de provence': 'parfois', 'moutarde': 'parfois', 'vinaigre': 'parfois'
  };

  // Réglages par défaut (écran Paramètres)
  var VERSION_APPLI = '1.0';
  var REGLAGES_DEFAUT = {
    regime: 'aucun', allergies: {}, calories: true,
    debutSemaine: 0, midi: true, soir: true, sauterToujours: true,
    theme: 'auto', texte: 'normal', contraste: false,
    ecranCuisine: true, ecranCourses: true, son: true, vibrer: true, grandCuisine: true,
    rappelSauvegarde: true
  };
  var REGIMES = [['aucun', 'Aucun'], ['vegetarien', 'Végétarien'], ['sansporc', 'Sans porc'], ['sansgluten', 'Sans gluten'], ['sanslactose', 'Sans lactose']];
  var ALLERGIES = [['gluten', 'Gluten'], ['lait', 'Lait'], ['oeuf', 'Œuf'], ['arachide', 'Arachide'], ['coque', 'Fruits à coque'], ['poisson', 'Poisson'], ['crustace', 'Crustacés et fruits de mer'], ['soja', 'Soja'], ['sesame', 'Sésame'], ['celeri', 'Céleri'], ['moutarde', 'Moutarde']];
  // Mots (sans accents) qui signalent un ingrédient à éviter
  var MOTS_INTERDITS = {
    viande: ['poulet', 'boeuf', 'porc', 'jambon', 'lardon', 'dinde', 'veau', 'agneau', 'steak', 'saucisse', 'chorizo', 'merguez', 'canard', 'charcuterie', 'escalope', 'filet mignon', 'echine', 'roti', 'bouillon de boeuf', 'gelatine', 'cote de porc', 'cuisse de poulet', 'blanc de poulet', 'volaille'],
    porc: ['porc', 'jambon', 'lardon', 'chorizo', 'saucisse', 'charcuterie', 'echine', 'filet mignon', 'gelatine', 'cote de porc'],
    gluten: ['farine', 'pate', 'pates', 'spaghetti', 'tagliatelle', 'lasagne', 'pain', 'baguette', 'chapelure', 'semoule', 'crozet', 'gnocchi', 'nouille', 'galette de ble', 'biscuit', 'biere', 'pain d epice', 'sauce soja', 'bechamel', 'petites pates', 'brisee', 'pizza', 'cookie'],
    lait: ['lait', 'beurre', 'creme', 'fromage', 'emmental', 'parmesan', 'mozzarella', 'reblochon', 'raclette', 'chevre', 'feta', 'cheddar', 'mascarpone', 'yaourt', 'bechamel', 'gruyere', 'comte', 'ricotta'],
    oeuf: ['oeuf', 'jaune d oeuf', 'mayonnaise', 'biscuit a la cuillere'],
    arachide: ['arachide', 'cacahuete', 'beurre de cacahuete'],
    coque: ['noix', 'noisette', 'amande', 'pistache', 'cajou', 'pesto', 'pignon'],
    poisson: ['poisson', 'saumon', 'cabillaud', 'colin', 'thon', 'merlu', 'sardine', 'truite', 'morue', 'anchois', 'nuoc mam', 'lieu', 'dorade'],
    crustace: ['crevette', 'moule', 'fruits de mer', 'crabe', 'homard', 'langoustine', 'calamar'],
    soja: ['soja', 'edamame', 'tofu'],
    sesame: ['sesame'],
    celeri: ['celeri'],
    moutarde: ['moutarde']
  };

  // ---------------------------------------------------------------
  // 2. Petits outils
  // ---------------------------------------------------------------
  function esc(t) { return String(t == null ? '' : t).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function nb(x) { return String(x).replace('.', ','); }
  function milliers(x) { return String(x).replace(/\B(?=(\d{3})+(?!\d))/g, ' '); }
  function maj(t) { return t ? t.charAt(0).toUpperCase() + t.slice(1) : t; }
  function deuxChiffres(n) { return (n < 10 ? '0' : '') + n; }
  function copie(o) { return JSON.parse(JSON.stringify(o)); }
  function vide7() { return [null, null, null, null, null, null, null]; }

  // Enlève majuscules et accents : « Pâtes » devient « pates »
  function norm(t) {
    return String(t).toLowerCase().replace(/œ/g, 'oe').replace(/æ/g, 'ae')
      .normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, ' ').trim();
  }
  // Clé d'un ingrédient : « Carottes » et « Carotte » donnent la même clé
  function cle(nom) { return norm(nom).split(' ').map(function (w) { return w.length > 3 ? w.replace(/(s|x)$/, '') : w; }).join(' '); }

  // ---------------------------------------------------------------
  // 3. Lecture des ingrédients (« 200 g Pommes de terre », « 2 œufs »…)
  // ---------------------------------------------------------------
  var RE_UNITE = '(kg|kilos?|grammes?|gr|g|cl|ml|litres?|l|cc|cs|c\\.?\\s?à\\s?café|c\\.?\\s?à\\s?soupe|c\\.?\\s?à\\s?c\\.?|c\\.?\\s?à\\s?s\\.?|cuill[eè]res?\\s+à\\s+café|cuill[eè]res?\\s+à\\s+soupe|pinc[ée]es?)';
  var RE_LIGNE = new RegExp('^(\\d+(?:[.,]\\d+)?|\\d+\\/\\d+|½|¼|¾)\\s*(?:' + RE_UNITE + '\\.?\\s+)?(?:de\\s+|d’|d\')?(.+)$', 'i');

  function pluriel(nom) {
    var mots = nom.split(' ');
    if (!/[sxz]$/i.test(mots[0])) mots[0] = mots[0] + (/au$|eu$/i.test(mots[0]) ? 'x' : 's');
    return mots.join(' ');
  }
  function lireIngredient(ligne) {
    var texte = ligne.trim().replace(/^[-•*·]\s*/, '');
    var forcePluriel = null;
    if (texte.indexOf('|') >= 0) { forcePluriel = texte.split('|')[1].trim(); texte = texte.split('|')[0].trim(); }
    var m = texte.match(RE_LIGNE);
    if (!m) return { n: maj(texte), q: null, u: '' };
    var brut = m[1];
    var q = brut === '½' ? 0.5 : brut === '¼' ? 0.25 : brut === '¾' ? 0.75
      : brut.indexOf('/') > 0 ? parseFloat(brut.split('/')[0]) / parseFloat(brut.split('/')[1])
      : parseFloat(brut.replace(',', '.'));
    var u = norm(m[2] || '').replace(/\s/g, '');
    var nom = maj(m[3].trim());
    if (u === 'kg' || u.indexOf('kilo') === 0) return { n: nom, q: q * 1000, u: 'g' };
    if (u === 'g' || u === 'gr' || u.indexOf('gramme') === 0) return { n: nom, q: q, u: 'g' };
    if (u === 'l' || u.indexOf('litre') === 0) return { n: nom, q: q * 1000, u: 'ml' };
    if (u === 'cl') return { n: nom, q: q * 10, u: 'ml' };
    if (u === 'ml') return { n: nom, q: q, u: 'ml' };
    if (u === 'cc' || u === 'cacafe' || u === 'cac' || u === 'cuillereacafe' || u === 'cuilleresacafe') return { n: nom, q: q, u: 'cc' };
    if (u === 'cs' || u === 'casoupe' || u === 'cas' || u === 'cuillereasoupe' || u === 'cuilleresasoupe') return { n: nom, q: q, u: 'cs' };
    if (u.indexOf('pinc') === 0) return { n: nom, q: q, u: 'pincee' };
    return { n: nom, q: q, u: 'pc', pl: forcePluriel || pluriel(nom) };
  }

  // Affiche une quantité multipliée par le nombre de personnes
  function quantite(ing, pers) {
    if (ing.q == null) return '';
    var q = ing.q * pers;
    if (ing.u === 'g' || ing.u === 'ml') {
      var r = q >= 100 ? Math.round(q / 10) * 10 : Math.max(1, Math.round(q));
      if (ing.u === 'g' && r >= 1000) return nb(Math.round(r / 100) / 10) + ' kg';
      if (ing.u === 'ml' && r >= 1000) return nb(Math.round(r / 100) / 10) + ' L';
      return r + ' ' + ing.u;
    }
    if (ing.u === 'cc' || ing.u === 'cs') {
      var c = Math.max(0.5, Math.round(q * 2) / 2);
      return nb(c) + (ing.u === 'cc' ? ' c. à café' : ' c. à soupe');
    }
    if (ing.u === 'pincee') { var p = Math.max(1, Math.round(q)); return p + (p > 1 ? ' pincées' : ' pincée'); }
    var n = q >= 10 ? Math.round(q) : Math.max(0.5, Math.round(q * 2) / 2);
    return nb(n);
  }
  function nomIng(ing, pers) {
    if (ing.u !== 'pc' || ing.q == null) return ing.n;
    return ing.q * pers > 1 ? (ing.pl || ing.n) : ing.n;
  }
  // Pour remettre un ingrédient en texte (formulaire de modification)
  function ingEnTexte(ing) {
    if (ing.q == null) return ing.n;
    var q = nb(Math.round(ing.q * 100) / 100);
    var u = { g: ' g ', ml: ' ml ', cc: ' cc ', cs: ' cs ', pincee: ' pincée ', pc: ' ' }[ing.u] || ' ';
    return q + u + ing.n;
  }

  // ---------------------------------------------------------------
  // 4. Préparation des recettes intégrées
  // ---------------------------------------------------------------
  var INTEGREES = (window.RECETTES_BRUTES || []).map(function (r, idx) {
    return {
      id: 'b' + (idx + 1), n: r.n, c: r.c, k: r.k, t: r.t, m: r.m || null,
      kw: (r.kw || '').split(',').map(function (x) { return x.trim(); }).filter(Boolean),
      i: r.i.map(lireIngredient), s: r.s,
      img: (window.PHOTOS_RECETTES || {})[r.n] ? 'photos/' + window.PHOTOS_RECETTES[r.n] : null
    };
  });

  // ---------------------------------------------------------------
  // 5. Recherche tolérante aux fautes
  // ---------------------------------------------------------------
  // « pâte brisée » n'est pas un plat de pâtes : on la remplace
  var CORRECTIONS = [['pate brisee', 'brisee'], ['pate feuilletee', 'feuilletee'], ['pate sablee', 'sablee'], ['pate a pizza', 'pizza']];
  function normTexte(t) { var x = norm(t); CORRECTIONS.forEach(function (f) { x = x.split(f[0]).join(f[1]); }); return x; }
  function racine(w) { return w.length > 3 ? w.replace(/(s|x)$/, '') : w; }
  function lev(a, b) {
    var prec = []; for (var j = 0; j <= b.length; j++) prec[j] = j;
    for (var i = 1; i <= a.length; i++) {
      var cour = [i];
      for (var k = 1; k <= b.length; k++) cour[k] = Math.min(prec[k] + 1, cour[k - 1] + 1, prec[k - 1] + (a[i - 1] === b[k - 1] ? 0 : 1));
      prec = cour;
    }
    return prec[b.length];
  }
  // Fautes permises : 0 sous 4 lettres, 1 de 4 à 7 lettres, 2 à partir de 8
  function tolerance(w) { return w.length < 4 ? 0 : (w.length < 8 ? 1 : 2); }
  // 2 = sans faute, 1 = avec faute(s), 0 = différent
  function motPareil(t, w) {
    if (!w) return 0;
    var a = racine(t), b = racine(w);
    if (w.indexOf(t) === 0 || a === b) return 2;
    var tol = tolerance(a);
    if (tol && lev(a, b) <= tol) return 1;
    if (tol && b.length > a.length && lev(a, b.slice(0, a.length)) <= 1) return 1;
    return 0;
  }
  function niveauFamille(t, clef) {
    var a = racine(t), b = racine(clef);
    if (a === b || (a.length >= 4 && clef.indexOf(a) === 0)) return 2;
    var tol = tolerance(a);
    return tol && lev(a, b) <= tol ? 1 : 0;
  }
  function contient(texte, mot) { return new RegExp('(^| )' + mot + '(s|x)?( |$)').test(texte); }
  function motsRecherche(q) { return norm(q).split(' ').filter(function (x) { return x.length >= 2; }); }

  var cacheTextes = {};
  function textesRecette(r) {
    var c = cacheTextes[r.id];
    if (c && c.src === r) return c;
    var nomTxt = normTexte(r.n + ' ' + r.kw.join(' '));
    var tout = normTexte(r.n + ' ' + r.c + ' ' + r.kw.join(' ') + ' ' + r.i.map(function (i) { return i.n; }).join(' '));
    c = { src: r, nom: nomTxt, nomMots: nomTxt.split(' '), tout: tout, toutMots: tout.split(' ') };
    cacheTextes[r.id] = c;
    return c;
  }
  function infoRecherche(r, q) {
    var mots = motsRecherche(q);
    if (!mots.length) return { niveau: 2, dansNom: false };
    var tx = textesRecette(r);
    var dansNom = false;
    var niveau = Math.min.apply(null, mots.map(function (t) {
      var meilleur = 0;
      tx.toutMots.forEach(function (w) { var v = motPareil(t, w); if (v > meilleur) meilleur = v; });
      if (tx.nomMots.some(function (w) { return motPareil(t, w) > 0; })) dansNom = true;
      Object.keys(FAMILLES).forEach(function (k) {
        var nf = niveauFamille(t, k);
        if (!nf) return;
        if (FAMILLES[k].some(function (m) { return contient(tx.tout, m); })) meilleur = Math.max(meilleur, nf);
        if (FAMILLES[k].some(function (m) { return contient(tx.nom, m); })) dansNom = true;
      });
      return meilleur;
    }));
    return { niveau: niveau, dansNom: dansNom };
  }

  function deSaison(r) {
    var suivis = [];
    r.i.forEach(function (ing) {
      var n = norm(ing.n);
      if (n.indexOf('pomme de terre') >= 0 || n.indexOf('pommes de terre') >= 0) return;
      for (var k in SAISON) { if (contient(n, k)) { suivis.push(SAISON[k]); break; } }
    });
    return suivis.length > 0 && suivis.every(function (mois) { return mois.indexOf(MOIS) >= 0; });
  }

  // Trouve « 10 minutes » ou « 3 heures » dans une étape
  function minutesEtape(texte) {
    var h = texte.match(/(\d+)\s*h(?:eures?)?\b(?:\s*(\d+))?/i);
    if (h) return parseInt(h[1], 10) * 60 + (h[2] ? parseInt(h[2], 10) : 0);
    var m = texte.match(/(\d+)(?:\s*(?:à|-)\s*\d+)?\s*(?:minutes?|min|mn)\b/i);
    return m ? parseInt(m[1], 10) : 0;
  }

  // Lit le texte d'une recette collée (site, message…)
  function lireRecetteCollee(texte) {
    var lignes = texte.split('\n').map(function (l) { return l.trim(); }).filter(Boolean);
    var res = { nom: '', pers: '', ings: [], etapes: [], temps: '' };
    var mp = texte.match(/pour\s+(\d+)\s*(pers|personnes|parts|portions)/i) || texte.match(/(\d+)\s*(personnes|parts|portions)/i);
    if (mp) res.pers = mp[1];
    var mt = texte.match(/(?:temps|total|préparation|cuisson)[^\d\n]{0,20}(\d+)\s*min/i);
    if (mt) res.temps = mt[1];
    var mode = null;
    lignes.forEach(function (ligne, idx) {
      var n = norm(ligne);
      if (/^ingredients?\b/.test(n)) { mode = 'ing'; return; }
      if (/^(preparation|etapes?|instructions|deroulement|recette|methode)\b/.test(n) && ligne.length < 30) { mode = 'etape'; return; }
      if (/^pour \d+/.test(n) || /^\d+ (personnes|parts|portions)/.test(n) || /^(temps|cuisson|difficulte|cout|budget|repos)\b/.test(n)) return;
      if (idx === 0 && !res.nom) { res.nom = ligne.replace(/[:.]$/, ''); return; }
      var etape = ligne.replace(/^(etape|étape)\s*\d+\s*[:.-]?\s*/i, '').replace(/^\d+\s*[.)-]\s+/, '');
      if (mode === 'ing') res.ings.push(ligne.replace(/^[-•*·]\s*/, ''));
      else if (mode === 'etape') res.etapes.push(etape);
      else if (/^[-•*·]?\s*(\d|½|¼|¾)/.test(ligne) && ligne.length < 50 && !/^\d+\s*[.)]\s/.test(ligne)) res.ings.push(ligne.replace(/^[-•*·]\s*/, ''));
      else res.etapes.push(etape);
    });
    return res;
  }

  // ---------------------------------------------------------------
  // 6. Données enregistrées dans le téléphone
  // ---------------------------------------------------------------
  function placardDefaut() { var p = {}; Object.keys(PLACARD_DEFAUT).forEach(function (k) { p[cle(k)] = PLACARD_DEFAUT[k]; }); return p; }
  function donneesParDefaut() {
    return {
      pers: 4, favs: {}, notes: {}, plan: { midi: vide7(), soir: vide7() },
      placard: placardDefaut(), exclus: {}, perso: [], recentes: [], coches: {}, frigo: {},
      derniereSauvegarde: null, reglages: copie(REGLAGES_DEFAUT)
    };
  }
  var D = donneesParDefaut();
  try {
    var lu = JSON.parse(localStorage.getItem(CLE_STOCKAGE) || 'null');
    if (lu) D = Object.assign(donneesParDefaut(), lu);
  } catch (e) {}
  D.reglages = Object.assign(copie(REGLAGES_DEFAUT), D.reglages || {});
  var R = D.reglages;
  function enregistrer() {
    try { localStorage.setItem(CLE_STOCKAGE, JSON.stringify(D)); }
    catch (e) { message('Mémoire du téléphone pleine : fais une sauvegarde et supprime des photos.'); }
  }

  // Photos (IndexedDB, plus de place que localStorage)
  var PHOTOS = {};
  var bdd = null;
  function ouvrirPhotos(suite) {
    if (!window.indexedDB) { suite(); return; }
    var req = indexedDB.open('appliRepasPhotos', 1);
    req.onupgradeneeded = function () { req.result.createObjectStore('photos'); };
    req.onsuccess = function () {
      bdd = req.result;
      var tx = bdd.transaction('photos', 'readonly');
      var store = tx.objectStore('photos');
      var cur = store.openCursor();
      cur.onsuccess = function () {
        var c = cur.result;
        if (c) { PHOTOS[c.key] = c.value; c.continue(); } else suite();
      };
      cur.onerror = function () { suite(); };
    };
    req.onerror = function () { suite(); };
  }
  function enregistrerPhoto(id, data) {
    if (data) PHOTOS[id] = data; else delete PHOTOS[id];
    if (!bdd) return;
    var tx = bdd.transaction('photos', 'readwrite');
    if (data) tx.objectStore('photos').put(data, id); else tx.objectStore('photos').delete(id);
  }
  // Réduit la photo pour qu'elle prenne peu de place
  function reduirePhoto(fichier, suite) {
    var lecteur = new FileReader();
    lecteur.onload = function () {
      var img = new Image();
      img.onload = function () {
        var max = 900, w = img.width, h = img.height;
        if (w > h && w > max) { h = Math.round(h * max / w); w = max; } else if (h > max) { w = Math.round(w * max / h); h = max; }
        var cv = document.createElement('canvas'); cv.width = w; cv.height = h;
        cv.getContext('2d').drawImage(img, 0, 0, w, h);
        suite(cv.toDataURL('image/jpeg', 0.72));
      };
      img.onerror = function () { message('Impossible de lire cette image.'); };
      img.src = lecteur.result;
    };
    lecteur.readAsDataURL(fichier);
  }

  // ---------------------------------------------------------------
  // 7. État de l'écran (non enregistré)
  // ---------------------------------------------------------------
  var FORM_VIDE = { nom: '', cat: 'Plat', kcal: '', temps: '', pers: '1', ings: '', etapes: '', kw: '' };
  var U = {
    onglet: 'repas', vue: 'liste', sel: null, pile: [],
    q: '', cat: 'Tous', kcal: 'all', rapide: false, voirExclus: false, fq: '',
    etape: 0, voirIngsCuisine: false, cochesCuisine: {}, minuteur: null, minuteurFini: false, ecranAllume: false,
    form: copie(FORM_VIDE), edition: null, collage: '', msgCollage: '', erreurForm: '', photoForm: null,
    voirImport: false
  };
  var intervalle = null, verrouEcran = null;

  // Recettes autorisées selon le régime, les allergies et les aliments non aimés
  var cacheInterdit = {};
  function ingredientInterdit(nom, cleRegle) {
    var n = ' ' + norm(nom).replace(/lait de coco/g, 'coco') + ' ';
    return MOTS_INTERDITS[cleRegle].some(function (m) { return new RegExp(' ' + m + '(s|x)? ').test(n) || new RegExp(' ' + m + '(s|x)?\\b').test(n); });
  }
  function reglesActives() {
    var regles = [];
    if (R.regime === 'vegetarien') regles.push('viande', 'poisson', 'crustace');
    if (R.regime === 'sansporc') regles.push('porc');
    if (R.regime === 'sansgluten') regles.push('gluten');
    if (R.regime === 'sanslactose') regles.push('lait');
    Object.keys(R.allergies).forEach(function (k) { if (R.allergies[k]) regles.push(k); });
    return regles;
  }
  function recetteAutorisee(r) {
    if (r.i.some(function (i) { return D.exclus[cle(i.n)]; })) return false;
    var regles = reglesActives();
    if (!regles.length) return true;
    return !r.i.some(function (i) { return regles.some(function (g) { return ingredientInterdit(i.n, g); }); });
  }
  function toutes() { return INTEGREES.concat(D.perso); }
  // Ordre d'affichage des jours selon le jour de début choisi (0 = lundi, 5 = samedi, 6 = dimanche)
  function ordreJours() { var o = []; for (var i = 0; i < 7; i++) o.push((R.debutSemaine + i) % 7); return o; }
  function repasActifs() { var q = []; if (R.midi) q.push('midi'); if (R.soir) q.push('soir'); return q; }
  function premierLibre(quand) { var o = ordreJours(); for (var i = 0; i < 7; i++) if (!D.plan[quand][o[i]]) return o[i]; return -1; }
  function parId(id) { var l = toutes(); for (var i = 0; i < l.length; i++) if (l[i].id === id) return l[i]; return null; }
  function etatPlacard(nom) { return D.placard[cle(nom)] || 'nondef'; }
  function teinte(r) { return TEINTES[r.c] || '#ECEAE3'; }
  function ajouterRecente(q) {
    var t = q.trim(); if (!t) return;
    D.recentes = [t].concat(D.recentes.filter(function (r) { return norm(r) !== norm(t); })).slice(0, 5);
    enregistrer();
  }

  // ---------------------------------------------------------------
  // 8. Icônes (dessins vectoriels)
  // ---------------------------------------------------------------
  var I = {
    engrenage: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/></svg>',
    plus: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg>',
    moins: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" aria-hidden="true"><path d="M5 12h14"/></svg>',
    retour: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 18l-6-6 6-6"/></svg>',
    croix: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg>',
    coche: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12l5 5L20 7"/></svg>',
    hasard: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 3h5v5M4 20 21 3M21 16v5h-5M15 15l6 6M4 4l5 5"/></svg>',
    frigo: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="5" y="2.5" width="14" height="19" rx="2"/><path d="M5 10h14M9 6v1.5M9 13v3"/></svg>',
    assiette: function (t) { return '<svg width="' + t + '" height="' + t + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="7"/><circle cx="12" cy="12" r="3.5"/><path d="M2 4v5a1.5 1.5 0 0 0 3 0V4M3.5 9v11M22 4c-1.7 0-2.5 2-2.5 5s1 3 2.5 3v8"/></svg>'; },
    appareil: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 8h3l2-3h6l2 3h3v11H4z"/><circle cx="12" cy="13" r="3.5"/></svg>',
    coeurPlein: function (t) { return '<svg width="' + t + '" height="' + t + '" viewBox="0 0 24 24" fill="#B3261E" stroke="#B3261E" stroke-width="2" stroke-linejoin="round" aria-hidden="true"><path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"/></svg>'; },
    coeurVide: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#5E655C" stroke-width="2" stroke-linejoin="round" aria-hidden="true"><path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"/></svg>',
    etoile: function (t, plein) { return '<svg width="' + t + '" height="' + t + '" viewBox="0 0 24 24" fill="' + (plein ? '#C98A0B' : 'none') + '" stroke="' + (plein ? '#C98A0B' : '#9A9F96') + '" stroke-width="1.5" stroke-linejoin="round" aria-hidden="true"><path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"/></svg>'; },
    lecture: '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>',
    minuteur: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="13" r="8"/><path d="M12 9v4l2.5 2M9 2h6"/></svg>',
    partage: '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3v12M7 8l5-5 5 5M5 14v6h14v-6"/></svg>'
  };

  // ---------------------------------------------------------------
  // 9. Morceaux d'écran réutilisables
  // ---------------------------------------------------------------
  function puce(texte, on, action, valeur, classe) {
    return '<button class="puce ' + (classe || '') + (on ? ' on' : '') + '" data-a="' + action + '" data-v="' + esc(valeur) + '">' + esc(texte) + '</button>';
  }
  function boutonRetour(texte) { return '<button class="btn btn-lien retour" data-a="retour">' + I.retour + esc(texte || 'Retour') + '</button>'; }
  function vignette(r, mini) {
    var p = PHOTOS[r.id] || r.img;
    var cls = 'vignette' + (mini ? ' mini' : '');
    if (p) return '<div class="' + cls + '"><img src="' + p + '" alt="" loading="lazy"></div>';
    return '<div class="' + cls + '" style="background:' + teinte(r) + '">' + (mini ? '' : I.assiette(30) + '<span style="font-size:11px">Photo</span>') + '</div>';
  }
  function carteRepas(r) {
    var note = D.notes[r.id];
    return '<button class="carte-repas" data-a="ouvrir" data-v="' + r.id + '">' + vignette(r) +
      '<div class="carte-infos"><div class="rangee" style="justify-content:space-between;flex-wrap:nowrap;align-items:flex-start">' +
      '<div class="carte-nom">' + esc(r.n) + '</div>' + (D.favs[r.id] ? '<span style="flex:none">' + I.coeurPlein(18) + '</span>' : '') + '</div>' +
      '<div class="badges"><span class="badge badge-cat">' + esc(r.c) + '</span>' +
      (deSaison(r) ? '<span class="badge badge-saison">De saison</span>' : '') +
      (R.calories ? '<span><b style="color:var(--texte)">' + r.k + '</b> kcal</span>' : '') + '<span>' + r.t + ' min</span></div>' +
      (note ? '<div class="petit rangee" style="gap:4px">' + I.etoile(14, true) + ' Déjà fait · noté ' + note + '/5</div>' : '') +
      '</div></button>';
  }
  function caseCocher(on) { return '<span class="case' + (on ? ' on' : '') + '">' + (on ? I.coche : '') + '</span>'; }

  // ---------------------------------------------------------------
  // 10. Les écrans
  // ---------------------------------------------------------------
  function resultatsListe() {
    var maxK = KCALS.filter(function (k) { return k.id === U.kcal; })[0].max;
    var cand = toutes().filter(function (r) {
      return recetteAutorisee(r) && (U.cat === 'Tous' || r.c === U.cat) && r.k < maxK && (!U.rapide || r.t < 30);
    });
    var infos = cand.map(function (r) { return infoRecherche(r, U.q); });
    var meilleur = Math.max.apply(null, infos.map(function (x) { return x.niveau; }).concat([1]));
    var idx = cand.map(function (r, i) { return i; }).filter(function (i) { return infos[i].niveau >= meilleur; });
    var avecRecherche = motsRecherche(U.q).length > 0;
    idx.sort(function (a, b) {
      if (avecRecherche) { var d = (infos[b].dansNom ? 1 : 0) - (infos[a].dansNom ? 1 : 0); if (d) return d; }
      return cand[a].n.localeCompare(cand[b].n);
    });
    return idx.map(function (i) { return cand[i]; });
  }
  function reserveMots() {
    var res = [], vus = {};
    function ajoute(l) { var k = norm(l); if (k && !vus[k]) { vus[k] = true; res.push(l); } }
    Object.keys(LIBELLES_FAMILLES).forEach(function (k) { ajoute(LIBELLES_FAMILLES[k]); });
    toutes().forEach(function (r) { ajoute(r.n); r.i.forEach(function (i) { ajoute(i.n); }); });
    return res;
  }

  function ecranListe() {
    var liste = resultatsListe();
    var mots = motsRecherche(U.q);
    var dernier = mots.length ? mots[mots.length - 1] : '';
    var puces = '', titrePuces = '';
    if (U.q.trim() && dernier) {
      var sugg = reserveMots().map(function (l) {
        var v = 0; norm(l).split(' ').forEach(function (w) { v = Math.max(v, motPareil(dernier, w)); });
        return { l: l, v: v };
      }).filter(function (x) { return x.v > 0 && norm(x.l) !== norm(U.q); })
        .sort(function (a, b) { return b.v - a.v || a.l.length - b.l.length; }).slice(0, 4);
      titrePuces = 'Suggestions';
      puces = sugg.map(function (x) { return puce(x.l, false, 'chercher', x.l, 'petite suggestion'); }).join('');
    } else if (D.recentes.length) {
      titrePuces = 'Récentes';
      puces = D.recentes.map(function (r) { return puce(r, false, 'chercher', r, 'petite suggestion'); }).join('');
    }
    var dym = '';
    if (!liste.length && dernier.length >= 3) {
      var best = 99;
      reserveMots().forEach(function (l) {
        norm(l).split(' ').forEach(function (w) {
          if (w.length < 3) return;
          var d = lev(racine(dernier), racine(w));
          if (d < best) { best = d; dym = l; }
        });
      });
      if (best > 3) dym = '';
    }
    var exclusNoms = Object.keys(D.exclus).filter(function (k) { return D.exclus[k]; });
    var nomsIngs = tousIngredients();
    var resumeExclus = exclusNoms.length
      ? 'Sans : ' + nomsIngs.filter(function (n) { return D.exclus[cle(n)]; }).slice(0, 2).map(function (n) { return n.toLowerCase(); }).join(', ') + (exclusNoms.length > 2 ? '…' : '')
      : (U.voirExclus ? 'Fermer' : 'Aucun');

    return '<label class="cache-visuel" for="recherche">Rechercher un repas</label>' +
      '<input id="recherche" class="champ" type="search" placeholder="Rechercher : pâtes, poisson, gâteau…" autocomplete="off" value="' + esc(U.q) + '" data-i="q">' +
      (puces ? '<div class="rangee" style="gap:6px"><span class="tres-petit">' + titrePuces + '</span>' + puces + '</div>' : '') +
      '<div class="defile">' + CATS.map(function (c) { return puce(c, U.cat === c, 'cat', c); }).join('') + '</div>' +
      '<div class="rangee">' + (R.calories ? '<span class="petit">Calories</span>' + KCALS.map(function (k) { return puce(k.label, U.kcal === k.id, 'kcal', k.id, 'petite noire'); }).join('') : '') +
      puce('Moins de 30 min', U.rapide, 'rapide', '', 'petite noire') + '</div>' +
      '<div class="carte" style="padding:4px 14px"><button class="case-ligne" style="border:none;justify-content:space-between;font-weight:600;font-size:14px" data-a="voirExclus"><span>Exclure des ingrédients</span><span class="petit" style="font-weight:500">' + esc(resumeExclus) + '</span></button>' +
      (U.voirExclus ? '<div class="rangee" style="gap:6px;padding:4px 0 12px">' + nomsIngs.map(function (n) { var on = !!D.exclus[cle(n)]; return '<button class="puce petite rouge' + (on ? ' on' : '') + '" data-a="exclure" data-v="' + esc(n) + '">' + (on ? I.croix : '') + esc(n) + '</button>'; }).join('') + '</div>' : '') +
      '</div>' +
      '<div class="grille2"><button class="btn btn-pale" data-a="hasard">' + I.hasard + 'Au hasard</button><button class="btn btn-contour" style="border-color:var(--texte)" data-a="frigo">' + I.frigo + 'Avec ce que j’ai</button></div>' +
      '<div class="petit">' + liste.length + ' repas' + (U.q.trim() ? ' pour « ' + esc(U.q.trim()) + ' »' : '') + '</div>' +
      liste.map(carteRepas).join('') +
      (!liste.length ? '<div class="carte pile" style="align-items:center;text-align:center"><b>Aucun repas trouvé</b>' +
        (dym ? '<button class="btn" style="background:var(--vert-pale);color:var(--vert-fonce)" data-a="chercher" data-v="' + esc(dym) + '">Vouliez-vous dire « ' + esc(dym) + ' » ?</button>' : '') +
        '<button class="btn btn-lien" style="text-decoration:underline;color:var(--gris)" data-a="effacerFiltres">Effacer la recherche et les filtres</button></div>' : '');
  }

  // Filtre une liste d'ingrédients selon une recherche (sans faute d'abord)
  function filtrerIngredients(noms, q) {
    var mots = motsRecherche(q);
    if (!mots.length) return noms;
    function niveau(n) {
      var ws = norm(n).split(' ');
      return Math.min.apply(null, mots.map(function (t) { var m = 0; ws.forEach(function (w) { m = Math.max(m, motPareil(t, w)); }); return m; }));
    }
    var nv = noms.map(niveau);
    var best = Math.max.apply(null, nv.concat([1]));
    return noms.filter(function (n, i) { return nv[i] >= best; });
  }
  function tousIngredients() {
    var vus = {}, res = [];
    toutes().forEach(function (r) { r.i.forEach(function (i) { var k = cle(i.n); if (!vus[k]) { vus[k] = true; res.push(i.n); } }); });
    return res.sort(function (a, b) { return a.localeCompare(b); });
  }

  function ecranFrigo() {
    var noms = tousIngredients().filter(function (n) { return etatPlacard(n) !== 'toujours'; });
    var toujours = tousIngredients().filter(function (n) { return etatPlacard(n) === 'toujours'; });
    var mots = motsRecherche(U.fq);
    var trouves = filtrerIngredients(noms, U.fq);
    var affiches = noms.filter(function (n) { return trouves.indexOf(n) >= 0 || D.frigo[cle(n)]; });
    var nbCoches = noms.filter(function (n) { return D.frigo[cle(n)]; }).length;
    var res = [];
    if (nbCoches) {
      res = toutes().filter(recetteAutorisee)
        .map(function (r) {
          var manque = r.i.filter(function (i) { return !D.frigo[cle(i.n)] && etatPlacard(i.n) !== 'toujours'; });
          return { r: r, manque: manque, communs: r.i.length - manque.length };
        })
        .filter(function (x) { return x.communs > 0 && x.manque.length <= 3; })
        .sort(function (a, b) { return a.manque.length - b.manque.length || b.communs - a.communs; });
    }
    return boutonRetour() +
      '<div style="font-size:15px;line-height:1.45">Coche ce que tu as dans le frigo et les placards. Les recettes les plus faciles à faire remontent en premier.</div>' +
      (toujours.length ? '<div class="petit">Déjà compté (toujours dans le placard) : ' + esc(toujours.map(function (n) { return n.toLowerCase(); }).join(', ')) + '.</div>' : '') +
      '<label class="cache-visuel" for="frigo-recherche">Chercher un ingrédient</label>' +
      '<input id="frigo-recherche" class="champ" type="search" placeholder="Chercher un ingrédient : tomate, œuf…" autocomplete="off" value="' + esc(U.fq) + '" data-i="fq">' +
      '<div class="rangee" style="justify-content:space-between"><span class="petit">' + nbCoches + ' coché(s) sur ' + noms.length + '</span>' +
      (nbCoches ? '<button class="btn btn-lien" style="min-height:32px;font-size:13px" data-a="viderFrigo">Tout décocher</button>' : '') + '</div>' +
      (mots.length && !trouves.length ? '<div class="petit">Aucun ingrédient ne correspond à « ' + esc(U.fq) + ' ».</div>' : '') +
      '<div class="rangee" style="gap:6px">' + affiches.map(function (n) {
        var on = !!D.frigo[cle(n)];
        return '<button class="puce petite' + (on ? ' on' : '') + '" data-a="cocherFrigo" data-v="' + esc(n) + '">' + (on ? I.coche : '') + esc(n) + '</button>';
      }).join('') + '</div>' +
      '<h2 class="section-titre">Ce que tu peux faire</h2>' +
      (!nbCoches ? '<div class="petit">Coche au moins un ingrédient pour voir les recettes.</div>' : '') +
      (nbCoches && !res.length ? '<div class="petit">Aucune recette avec 3 ingrédients manquants ou moins.</div>' : '') +
      res.map(function (x) {
        var manque = x.manque.map(function (i) { return i.n.toLowerCase(); });
        return '<button class="ligne-carte" data-a="ouvrir" data-v="' + x.r.id + '">' + vignette(x.r, true) +
          '<div class="carte-infos" style="gap:4px"><div style="font-size:15px;font-weight:600">' + esc(x.r.n) + '</div>' +
          (manque.length ? '<span style="font-size:13px;color:var(--orange)">' + (manque.length === 1 ? 'Il manque 1 ingrédient : ' : 'Il manque ' + manque.length + ' ingrédients : ') + esc(manque.join(', ')) + '</span>'
            : '<span class="badge badge-ok" style="align-self:flex-start">Tout est là</span>') + '</div></button>';
      }).join('');
  }

  function ecranFiche() {
    var r = parId(U.sel);
    if (!r) return '<div class="vide">Recette introuvable.</div>' + boutonRetour();
    var p = D.pers;
    var note = D.notes[r.id] || 0;
    var libreM = premierLibre('midi'), libreS = premierLibre('soir');
    var maPhoto = PHOTOS[r.id];
    var photo = maPhoto || r.img;
    return boutonRetour() +
      '<div class="photo" style="background:' + teinte(r) + '">' +
      (photo ? '<img src="' + photo + '" alt="Photo de ' + esc(r.n) + '">' : I.assiette(48) + '<span style="font-size:13px">Pas encore de photo</span>') +
      '<div class="photo-actions"><label class="btn" style="cursor:pointer">' + I.appareil + (maPhoto ? 'Changer' : (photo ? 'Ma photo' : 'Ajouter une photo')) +
      '<input type="file" accept="image/*" data-photo="' + r.id + '" style="display:none"></label>' +
      (maPhoto ? '<button class="btn" data-a="supprimerPhoto" data-v="' + r.id + '">' + (r.img ? 'Photo d’origine' : 'Retirer') + '</button>' : '') + '</div></div>' +
      '<div class="rangee" style="justify-content:space-between;align-items:flex-start;flex-wrap:nowrap">' +
      '<div class="pile" style="gap:6px"><div class="rangee"><span class="surtitre">' + esc(r.c) + '</span>' + (deSaison(r) ? '<span class="badge badge-saison">De saison</span>' : '') + '</div>' +
      '<h2 class="fiche-titre">' + esc(r.n) + '</h2></div>' +
      '<button class="coeur-btn" data-a="favori" aria-label="' + (D.favs[r.id] ? 'Retirer des favoris' : 'Ajouter aux favoris') + '">' + (D.favs[r.id] ? I.coeurPlein(24) : I.coeurVide) + '</button></div>' +
      (r.kw.length ? '<div class="mots-cles">' + r.kw.map(function (k) { return '<span class="mot-cle">#' + esc(k) + '</span>'; }).join('') + '</div>' : '') +
      (R.calories ? '<div class="grille3"><div class="stat"><div>Par personne</div><div>' + r.k + ' kcal</div></div>' +
      '<div class="stat"><div>Pour ' + p + '</div><div>' + milliers(r.k * p) + ' kcal</div></div>' +
      '<div class="stat"><div>Temps</div><div>' + r.t + ' min</div></div></div>' : '<div class="stat"><div>Temps</div><div>' + r.t + ' min</div></div>') +
      (r.m && R.calories ? '<div class="grille3 petit"><div>Protéines <b style="color:var(--texte)">' + r.m[0] + ' g</b></div><div>Glucides <b style="color:var(--texte)">' + r.m[1] + ' g</b></div><div>Lipides <b style="color:var(--texte)">' + r.m[2] + ' g</b></div></div>' : '') +
      '<button class="btn btn-noir btn-grand" data-a="cuisiner">' + I.lecture + 'Lancer le mode cuisine</button>' +
      '<div class="carte"><h3 class="section-titre" style="margin:0 0 6px">Ingrédients pour ' + p + ' personne' + (p > 1 ? 's' : '') + '</h3>' +
      r.i.map(function (i) { return '<div class="ingredient"><span>' + esc(nomIng(i, p)) + '</span><b>' + esc(quantite(i, p)) + '</b></div>'; }).join('') + '</div>' +
      '<div class="carte pile" style="gap:14px"><h3 class="section-titre" style="margin:0">Préparation</h3>' +
      r.s.map(function (t, n) { return '<div class="etape"><div class="etape-num">' + (n + 1) + '</div><div class="etape-texte">' + esc(t) + '</div></div>'; }).join('') + '</div>' +
      '<div class="pile" style="gap:8px"><b style="font-size:15px">Ajouter au planning</b><div class="' + (R.midi && R.soir ? 'grille2' : 'pile') + '">' +
      (R.midi ? '<button class="btn btn-principal btn-grand" data-a="planifier" data-v="midi"' + (libreM < 0 ? ' disabled' : '') + '>' + (libreM < 0 ? 'Midis complets' : 'Midi (' + JOURS_COURTS[libreM] + ')') + '</button>' : '') +
      (R.soir ? '<button class="btn btn-contour btn-grand" style="border-color:var(--vert);color:var(--vert-fonce)" data-a="planifier" data-v="soir"' + (libreS < 0 ? ' disabled' : '') + '>' + (libreS < 0 ? 'Soirs complets' : 'Soir (' + JOURS_COURTS[libreS] + ')') + '</button>' : '') + '</div></div>' +
      '<div class="carte pile" style="gap:6px"><b style="font-size:15px">On l’a fait ? Note-le</b><div class="etoiles">' +
      [1, 2, 3, 4, 5].map(function (n) { return '<button class="etoile" data-a="noter" data-v="' + n + '" aria-label="Noter ' + n + ' sur 5">' + I.etoile(32, n <= note) + '</button>'; }).join('') +
      '</div><div class="petit">' + (note ? AVIS[note] + ' · rangé dans « Déjà faits »' : 'Pas encore noté') + '</div></div>' +
      (r.id.charAt(0) === 'u' ? '<div class="grille2"><button class="btn btn-contour" data-a="modifier">Modifier la recette</button><button class="btn btn-contour" style="color:var(--rouge)" data-a="supprimerRecette">Supprimer</button></div>' : '') +
      (R.calories ? '<div class="tres-petit" style="text-align:center">Calories et nutriments : valeurs moyennes par portion.</div>' : '');
  }

  function ecranCuisine() {
    var r = parId(U.sel);
    if (!r) return '';
    var total = r.s.length, i = Math.min(U.etape, total - 1);
    var texte = r.s[i] || '';
    var min = minutesEtape(texte);
    var p = D.pers;
    var nbPrets = r.i.filter(function (x, n) { return U.cochesCuisine[n]; }).length;
    return '<div class="rangee" style="justify-content:space-between"><button class="btn btn-lien" data-a="retour">' + I.croix + 'Quitter</button>' +
      '<b class="petit">Étape ' + (i + 1) + ' sur ' + total + '</b></div>' +
      '<div class="progression"><div style="width:' + Math.round((i + 1) / total * 100) + '%"></div></div>' +
      '<div style="font-size:13px;font-weight:600;color:var(--orange)">' + esc(r.n) + '</div>' +
      '<div class="cuisine-texte">' + esc(texte) + '</div>' +
      (U.minuteur != null ? '<div class="minuteur"><div><div class="tres-petit" style="color:#C9CCC5">Minuteur</div><b>' + deuxChiffres(Math.floor(U.minuteur / 60)) + ':' + deuxChiffres(U.minuteur % 60) + '</b></div>' +
        '<button class="btn" style="background:transparent;border:1px solid #5E655C;color:#fff" data-a="arreterMinuteur">Arrêter</button></div>' : '') +
      (U.minuteurFini ? '<button class="alerte" data-a="fermerAlerte">Minuteur terminé ! (toucher pour fermer)</button>' : '') +
      (min > 0 && U.minuteur == null ? '<button class="btn btn-pale btn-grand" style="border-style:solid" data-a="minuteur" data-v="' + min + '">' + I.minuteur + 'Lancer un minuteur de ' + (min >= 60 ? Math.floor(min / 60) + ' h ' + (min % 60 ? deuxChiffres(min % 60) : '') : min + ' min') + '</button>' : '') +
      '<div class="carte" style="padding:4px 16px"><button class="case-ligne" style="border:none;justify-content:space-between;font-weight:600" data-a="voirIngsCuisine"><span>Ingrédients (' + p + ' pers.)</span><span class="petit" style="font-weight:500">' + (U.voirIngsCuisine ? 'Masquer' : nbPrets + ' / ' + r.i.length + ' prêts') + '</span></button>' +
      (U.voirIngsCuisine ? r.i.map(function (ing, n) {
        var on = !!U.cochesCuisine[n];
        return '<button class="case-ligne" data-a="cocherCuisine" data-v="' + n + '">' + caseCocher(on) + '<span style="flex:1"' + (on ? ' class="barre"' : '') + '>' + esc(nomIng(ing, p)) + '</span><b style="font-size:14px">' + esc(quantite(ing, p)) + '</b></button>';
      }).join('') : '') + '</div>' +
      '<div class="tres-petit" style="text-align:center">' + (U.ecranAllume ? 'L’écran reste allumé pendant que tu cuisines.' : (R.ecranCuisine ? 'Si l’écran se met en veille, touche-le de temps en temps.' : 'Écran allumé désactivé dans les Paramètres.')) + '</div>' +
      '<div class="grille2"><button class="btn btn-contour btn-grand" data-a="etape" data-v="-1"' + (i === 0 ? ' disabled' : '') + '>Précédent</button>' +
      '<button class="btn btn-principal btn-grand" data-a="etape" data-v="1">' + (i < total - 1 ? 'Suivant' : 'Terminé') + '</button></div>';
  }

  function ecranAjout() {
    var f = U.form;
    var photo = U.photoForm;
    return boutonRetour('Annuler') +
      '<div class="carte pile" style="background:var(--vert-pale);border:none;gap:8px">' +
      '<label for="collage" style="font-size:15px;font-weight:700;color:var(--vert-fonce)">Coller une recette</label>' +
      '<div style="font-size:13px;color:var(--vert-fonce);line-height:1.4">Copie le texte d’une recette (site, message…), colle-le ici, et l’appli remplit le formulaire toute seule.</div>' +
      '<textarea id="collage" class="champ" data-i="collage" placeholder="Gratin dauphinois&#10;Pour 4 personnes&#10;Ingrédients&#10;1 kg de pommes de terre&#10;…">' + esc(U.collage) + '</textarea>' +
      '<button class="btn btn-principal" data-a="lireCollage">Remplir automatiquement</button>' +
      (U.msgCollage ? '<div style="font-size:13px;color:var(--vert-fonce);font-weight:500">' + esc(U.msgCollage) + '</div>' : '') + '</div>' +
      '<label class="carte pile" style="align-items:center;gap:6px;border-style:dashed;cursor:pointer;color:var(--gris);padding:' + (photo ? '0;overflow:hidden' : '22px') + '">' +
      (photo ? '<img src="' + photo + '" alt="" style="width:100%;height:180px;object-fit:cover;display:block">' : I.appareil + '<span style="font-size:14px">Prendre ou choisir une photo</span>') +
      '<input type="file" accept="image/*" data-photo="form" style="display:none"></label>' +
      '<div><label class="etiquette" for="f-nom">Nom du plat</label><input id="f-nom" class="champ" type="text" placeholder="Ex. : Gratin dauphinois" value="' + esc(f.nom) + '" data-i="form.nom"></div>' +
      '<div><span class="etiquette">Catégorie</span><div class="rangee">' + CATS.slice(1).map(function (c) { return puce(c, f.cat === c, 'formCat', c); }).join('') + '</div></div>' +
      '<div class="grille3"><div><label class="etiquette" for="f-kcal" style="font-size:13px">Kcal / pers.</label><input id="f-kcal" class="champ" type="number" inputmode="numeric" placeholder="450" value="' + esc(f.kcal) + '" data-i="form.kcal"></div>' +
      '<div><label class="etiquette" for="f-temps" style="font-size:13px">Temps (min)</label><input id="f-temps" class="champ" type="number" inputmode="numeric" placeholder="30" value="' + esc(f.temps) + '" data-i="form.temps"></div>' +
      '<div><label class="etiquette" for="f-pers" style="font-size:13px">Pour (pers.)</label><input id="f-pers" class="champ" type="number" inputmode="numeric" placeholder="1" value="' + esc(f.pers) + '" data-i="form.pers"></div></div>' +
      '<div><label class="etiquette" for="f-ings">Ingrédients</label><div class="aide">Un par ligne, ex. : « 150 g de pommes de terre », « 2 œufs », « 1 c. à café de cumin ». Les quantités sont pour le nombre de personnes indiqué au-dessus.</div>' +
      '<textarea id="f-ings" class="champ" rows="6" data-i="form.ings">' + esc(f.ings) + '</textarea></div>' +
      '<div><label class="etiquette" for="f-etapes">Étapes de la recette</label><div class="aide">Une étape par ligne. Si une étape dit « 10 minutes », un minuteur apparaîtra en mode cuisine.</div>' +
      '<textarea id="f-etapes" class="champ" rows="6" data-i="form.etapes">' + esc(f.etapes) + '</textarea></div>' +
      '<div><label class="etiquette" for="f-kw">Mots-clés</label><input id="f-kw" class="champ" type="text" placeholder="Ex. : four, enfants, hiver" value="' + esc(f.kw) + '" data-i="form.kw"></div>' +
      (U.erreurForm ? '<div style="font-size:14px;color:var(--rouge);font-weight:500">' + esc(U.erreurForm) + '</div>' : '') +
      '<button class="btn btn-principal btn-grand" data-a="enregistrerRecette">' + (U.edition ? 'Enregistrer les modifications' : 'Enregistrer le repas') + '</button>';
  }

  function ecranSemaine() {
    return '<div class="rangee" style="justify-content:space-between"><span class="petit">Ajoute des repas depuis leur fiche recette.</span>' +
      '<button class="btn btn-lien" style="min-height:32px;font-size:13px" data-a="viderPlanning">Tout vider</button></div>' +
      ordreJours().map(function (n) {
        var j = JOURS[n];
        return '<div class="jour"><div class="jour-nom">' + j + '</div>' + repasActifs().map(function (quand) {
          var r = parId(D.plan[quand][n]);
          return '<div class="creneau"><div class="creneau-quand">' + (quand === 'midi' ? 'Midi' : 'Soir') + '</div>' +
            (r ? '<button class="creneau-nom" data-a="ouvrir" data-v="' + r.id + '">' + esc(r.n) + '</button><button class="btn btn-icone" style="background:transparent;color:var(--gris)" aria-label="Retirer ce repas" data-a="retirerPlan" data-v="' + quand + ':' + n + '">' + I.croix + '</button>'
              : '<div style="flex:1;font-size:14px;color:var(--gris-clair)">Rien de prévu</div>') + '</div>';
        }).join('') + '</div>';
      }).join('');
  }

  function listeCourses() {
    var agg = {}, ordre = [], sautes = {};
    var ids = []; repasActifs().forEach(function (q) { ids = ids.concat(D.plan[q]); });
    ids.forEach(function (id) {
      var r = parId(id); if (!r) return;
      r.i.forEach(function (i) {
        if (R.sauterToujours && etatPlacard(i.n) === 'toujours') { sautes[i.n.toLowerCase()] = true; return; }
        var k = cle(i.n) + '|' + i.u;
        if (!agg[k]) { agg[k] = { n: i.n, u: i.u, pl: i.pl, q: i.q == null ? null : 0 }; ordre.push(k); }
        if (i.q != null && agg[k].q != null) agg[k].q += i.q;
      });
    });
    return { lignes: ordre.map(function (k) { return { k: k, ing: agg[k] }; }), sautes: Object.keys(sautes) };
  }

  function ecranCourses() {
    var lc = listeCourses(), p = D.pers;
    return '<div class="petit">Calculée à partir du planning (midi et soir), pour ' + p + ' personne' + (p > 1 ? 's' : '') + '.</div>' +
      '<div class="grille2"><button class="btn btn-contour" data-a="placard">Mon placard</button><button class="btn btn-principal" data-a="partager">' + I.partage + 'Partager</button></div>' +
      (!lc.lignes.length ? '<div class="vide">Le planning est vide : ajoute des repas pour remplir la liste.</div>' :
        '<div class="carte" style="padding:4px 16px">' + lc.lignes.map(function (l) {
          var on = !!D.coches[l.k];
          var verif = etatPlacard(l.ing.n) === 'parfois';
          return '<button class="case-ligne" data-a="cocherCourse" data-v="' + esc(l.k) + '">' + caseCocher(on) +
            '<span style="flex:1;display:flex;flex-direction:column;gap:1px"><span' + (on ? ' class="barre"' : '') + '>' + esc(nomIng(l.ing, p)) + '</span>' +
            (verif && !on ? '<span style="font-size:12px;color:var(--orange)">À vérifier dans le placard</span>' : '') + '</span>' +
            '<b style="font-size:14px">' + esc(quantite(l.ing, p)) + '</b></button>';
        }).join('') + '</div>' +
        '<button class="btn btn-lien" style="align-self:center;font-size:13px" data-a="decocherCourses">Tout décocher</button>') +
      (lc.sautes.length ? '<div class="petit">Pas ajouté car toujours dans le placard : ' + esc(lc.sautes.join(', ')) + '.</div>' : '');
  }

  function ecranPlacard() {
    var noms = tousIngredients();
    var nonDef = noms.filter(function (n) { return etatPlacard(n) === 'nondef'; }).length;
    var opts = [['nondef', 'Non défini'], ['toujours', 'Toujours'], ['parfois', 'Parfois'], ['jamais', 'Jamais']];
    return boutonRetour('Retour aux courses') +
      '<div style="font-size:14px;line-height:1.45"><b>Non défini</b> : pas encore réglé, ajouté normalement. <b>Toujours</b> : jamais ajouté aux courses et compté comme disponible. <b>Parfois</b> : ajouté avec « à vérifier ». <b>Jamais</b> : ajouté normalement.</div>' +
      '<div class="petit">' + nonDef + ' ingrédient(s) encore non défini(s) sur ' + noms.length + '.</div>' +
      '<label class="cache-visuel" for="placard-recherche">Chercher un ingrédient</label>' +
      '<input id="placard-recherche" class="champ" type="search" placeholder="Chercher un ingrédient…" autocomplete="off" value="' + esc(U.fq) + '" data-i="fq">' +
      '<div class="carte" style="padding:2px 12px">' + filtrerIngredients(noms, U.fq).map(function (n) {
        var cur = etatPlacard(n);
        return '<div class="placard-ligne"><b style="font-size:14px">' + esc(n) + '</b><div class="segments">' +
          opts.map(function (o) { return '<button class="' + (cur === o[0] ? 'on' : '') + '" data-a="placardEtat" data-v="' + esc(o[0] + '|' + n) + '">' + o[1] + '</button>'; }).join('') + '</div></div>';
      }).join('') + '</div>';
  }

  function ecranFavoris() {
    var favs = toutes().filter(function (r) { return D.favs[r.id]; });
    var faits = toutes().filter(function (r) { return D.notes[r.id]; }).sort(function (a, b) { return D.notes[b.id] - D.notes[a.id]; });
    var perso = D.perso;
    function ligne(r, droite) {
      return '<button class="ligne-carte" data-a="ouvrir" data-v="' + r.id + '">' + vignette(r, true) +
        '<div class="carte-infos" style="gap:2px"><div style="font-size:15px;font-weight:600">' + esc(r.n) + '</div><div class="petit">' + droite + '</div></div></button>';
    }
    return '<h2 class="section-titre">Favoris</h2>' +
      (favs.length ? favs.map(function (r) { return ligne(r, esc(r.c) + (R.calories ? ' · ' + r.k + ' kcal / pers.' : '')); }).join('') : '<div class="petit">Appuie sur le cœur d’une recette pour l’ajouter ici.</div>') +
      '<h2 class="section-titre">Déjà faits</h2>' +
      (faits.length ? faits.map(function (r) { return ligne(r, AVIS[D.notes[r.id]] + ' · ' + D.notes[r.id] + '/5'); }).join('') : '<div class="petit">Note un plat avec les étoiles de sa fiche pour le retrouver ici.</div>') +
      '<h2 class="section-titre">Mes recettes</h2>' +
      (perso.length ? perso.map(function (r) { return ligne(r, esc(r.c) + ' · ajoutée par moi'); }).join('') : '<div class="petit">Les recettes que tu ajoutes avec le bouton « Ajouter » apparaissent ici.</div>') +
      '<div class="carte pile" style="gap:10px;margin-top:8px"><h2 class="section-titre" style="margin:0">Sauvegarde</h2>' +
      '<div class="petit" style="line-height:1.4">Enregistre un fichier avec tes recettes, photos, favoris, notes, planning et placard. Garde-le (mail, Drive…) pour le récupérer si tu changes de téléphone.' +
      (D.derniereSauvegarde ? ' Dernière sauvegarde : ' + esc(D.derniereSauvegarde) + '.' : ' Aucune sauvegarde pour l’instant.') + '</div>' +
      '<div class="grille2"><button class="btn btn-principal" data-a="exporter">Sauvegarder</button>' +
      '<label class="btn btn-contour" style="cursor:pointer">Restaurer<input type="file" accept=".json,application/json" data-import="1" style="display:none"></label></div></div>' +
      '<div class="tres-petit" style="text-align:center;line-height:1.5">' + INTEGREES.length + ' recettes intégrées · ' + perso.length + ' recette(s) perso<br>Toutes les données restent sur ce téléphone.</div>';
  }


  // ---------------------------------------------------------------
  // 10 bis. Écran Paramètres
  // ---------------------------------------------------------------
  function interrupteur(titre, sousTitre, cleR) {
    var on = !!R[cleR];
    return '<button class="reglage" role="switch" aria-checked="' + on + '" data-a="reglage" data-v="' + cleR + '">' +
      '<span class="reglage-textes"><span class="reglage-titre">' + titre + '</span>' + (sousTitre ? '<span class="reglage-sous">' + sousTitre + '</span>' : '') + '</span>' +
      '<span class="interrupteur' + (on ? ' on' : '') + '"><span></span></span></button>';
  }
  function choixSegments(titre, cleR, options) {
    return '<div class="reglage-bloc"><span class="reglage-titre">' + titre + '</span><div class="segments" style="grid-template-columns:repeat(' + options.length + ',minmax(0,1fr))">' +
      options.map(function (o) { return '<button class="' + (String(R[cleR]) === String(o[0]) ? 'on' : '') + '" data-a="reglageChoix" data-v="' + cleR + '|' + o[0] + '">' + o[1] + '</button>'; }).join('') + '</div></div>';
  }
  function ecranReglages() {
    var nbExclus = Object.keys(D.exclus).filter(function (k) { return D.exclus[k]; }).length;
    var nbAllergies = Object.keys(R.allergies).filter(function (k) { return R.allergies[k]; }).length;
    var nbCaches = toutes().filter(function (r) { return !recetteAutorisee(r); }).length;
    var vibrationPossible = 'vibrate' in navigator;
    var joursDepuis = null;
    if (D.derniereSauvegarde) { var d = D.derniereSauvegarde.split('/'); joursDepuis = Math.floor((Date.now() - new Date(d[2], d[1] - 1, d[0]).getTime()) / 86400000); }
    var ingsNonAimes = U.voirNonAimes ? filtrerIngredients(tousIngredients(), U.fq) : [];
    return boutonRetour() +

      '<h2 class="section-titre">Ma famille</h2><div class="carte reglages">' +
      '<div class="reglage-bloc" style="flex-direction:row;align-items:center;justify-content:space-between;gap:10px"><span class="reglage-textes"><span class="reglage-titre">Nombre de personnes habituel</span><span class="reglage-sous">Les quantités des recettes s’adaptent</span></span>' +
      '<div class="compteur"><button class="btn btn-icone btn-moins" data-a="pers" data-v="-1" aria-label="Une personne de moins">' + I.moins + '</button><b>' + D.pers + '</b><button class="btn btn-icone btn-principal" data-a="pers" data-v="1" aria-label="Une personne de plus">' + I.plus + '</button></div></div>' +
      choixSegments('Régime du foyer', 'regime', REGIMES.slice(0, 3)) +
      '<div class="segments" style="grid-template-columns:repeat(2,minmax(0,1fr));margin:-4px 0 10px">' + REGIMES.slice(3).map(function (o) { return '<button class="' + (R.regime === o[0] ? 'on' : '') + '" data-a="reglageChoix" data-v="regime|' + o[0] + '">' + o[1] + '</button>'; }).join('') + '</div>' +
      '<div class="reglage-bloc"><span class="reglage-titre">Allergies</span><span class="reglage-sous">Les recettes qui en contiennent sont masquées partout</span><div class="rangee" style="gap:6px;margin-top:8px">' +
      ALLERGIES.map(function (al) { var on = !!R.allergies[al[0]]; return '<button class="puce petite rouge' + (on ? ' on' : '') + '" data-a="allergie" data-v="' + al[0] + '">' + (on ? I.croix : '') + al[1] + '</button>'; }).join('') + '</div></div>' +
      '<button class="reglage" data-a="voirNonAimes"><span class="reglage-textes"><span class="reglage-titre">Aliments que la famille n’aime pas</span><span class="reglage-sous">' + (nbExclus ? nbExclus + ' aliment(s) évité(s)' : 'Aucun pour l’instant') + '</span></span><span class="petit">' + (U.voirNonAimes ? 'Fermer' : 'Choisir') + '</span></button>' +
      (U.voirNonAimes ? '<div style="padding:4px 0 12px" class="pile"><input id="reglage-recherche" class="champ" type="search" placeholder="Chercher un aliment…" autocomplete="off" value="' + esc(U.fq) + '" data-i="fq"><div class="rangee" style="gap:6px">' +
        ingsNonAimes.map(function (n) { var on = !!D.exclus[cle(n)]; return '<button class="puce petite rouge' + (on ? ' on' : '') + '" data-a="exclure" data-v="' + esc(n) + '">' + (on ? I.croix : '') + esc(n) + '</button>'; }).join('') + '</div></div>' : '') +
      '<button class="reglage" data-a="placardDepuisReglages"><span class="reglage-textes"><span class="reglage-titre">Mon placard</span><span class="reglage-sous">Ce que tu as toujours, parfois ou jamais</span></span><span class="petit">Ouvrir</span></button>' +
      interrupteur('Afficher les calories', 'Calories, protéines, glucides et lipides', 'calories') +
      (nbCaches ? '<div class="reglage-sous" style="padding:10px 0 4px">' + nbCaches + ' recette(s) masquée(s) par ces choix.</div>' : '') +
      '</div>' +

      '<h2 class="section-titre">Planning et courses</h2><div class="carte reglages">' +
      choixSegments('La semaine commence le', 'debutSemaine', [[0, 'Lundi'], [5, 'Samedi'], [6, 'Dimanche']]) +
      interrupteur('Planifier le midi', '', 'midi') +
      interrupteur('Planifier le soir', '', 'soir') +
      interrupteur('Ne pas ajouter aux courses ce que j’ai « toujours »', 'Selon Mon placard', 'sauterToujours') +
      '</div>' +

      '<h2 class="section-titre">Affichage</h2><div class="carte reglages">' +
      choixSegments('Thème', 'theme', [['auto', 'Comme le téléphone'], ['clair', 'Clair'], ['sombre', 'Sombre']]) +
      choixSegments('Taille du texte', 'texte', [['normal', 'Normale'], ['grand', 'Grande'], ['tresgrand', 'Très grande']]) +
      interrupteur('Contraste renforcé', 'Textes plus foncés, plus faciles à lire', 'contraste') +
      '</div>' +

      '<h2 class="section-titre">En cuisine</h2><div class="carte reglages">' +
      interrupteur('Garder l’écran allumé en mode cuisine', '', 'ecranCuisine') +
      interrupteur('Garder l’écran allumé sur la liste de courses', 'Pratique dans le magasin', 'ecranCourses') +
      interrupteur('Sonnerie à la fin du minuteur', '', 'son') +
      (vibrationPossible ? interrupteur('Vibrer à la fin du minuteur', '', 'vibrer') : '') +
      '<div class="reglage-bloc"><button class="btn btn-contour" data-a="testerSon">Tester la sonnerie</button></div>' +
      interrupteur('Texte plus grand en mode cuisine', 'Pour lire de loin', 'grandCuisine') +
      '</div>' +

      '<h2 class="section-titre">Mes données</h2><div class="carte reglages">' +
      '<div class="reglage-bloc"><span class="reglage-titre">Sauvegarde</span><span class="reglage-sous">' +
      (joursDepuis == null ? 'Aucune sauvegarde pour l’instant.' : 'Dernière sauvegarde : ' + (joursDepuis === 0 ? 'aujourd’hui' : 'il y a ' + joursDepuis + ' jour(s)') + '.') + '</span>' +
      '<div class="grille2" style="margin-top:8px"><button class="btn btn-principal" data-a="exporter">Sauvegarder</button>' +
      '<label class="btn btn-contour" style="cursor:pointer">Restaurer<input type="file" accept=".json,application/json" data-import="1" style="display:none"></label></div></div>' +
      interrupteur('Me rappeler de sauvegarder chaque mois', '', 'rappelSauvegarde') +
      '<div class="reglage-bloc pile" style="gap:8px">' +
      '<button class="btn btn-contour" data-a="effacerHistorique">Effacer l’historique « Déjà faits »</button>' +
      '<button class="btn btn-contour" data-a="reglagesOrigine">Remettre les réglages d’origine</button>' +
      '<button class="btn btn-contour" style="color:var(--rouge);border-color:var(--rouge)" data-a="toutEffacer">Tout effacer</button></div>' +
      '</div>' +

      '<h2 class="section-titre">À propos</h2><div class="carte reglages">' +
      '<div class="reglage-bloc"><span class="reglage-titre">Installer l’appli sur l’écran d’accueil</span><span class="reglage-sous" style="line-height:1.45">Android : menu ⋮ de Chrome, puis « Ajouter à l’écran d’accueil ». iPhone : bouton Partager de Safari, puis « Sur l’écran d’accueil ». Une fois installée, l’appli marche sans internet et garde mieux tes données.</span></div>' +
      '<div class="reglage-bloc"><button class="btn btn-contour" data-a="majAppli">Forcer la mise à jour de l’appli</button></div>' +
      '<div class="reglage-bloc reglage-sous" style="line-height:1.45">Tes données restent uniquement dans ce téléphone. Rien n’est envoyé sur Internet.' + (U.espace ? ' Espace utilisé : ' + U.espace + '.' : '') + '<br>Photos des recettes : Unsplash. Version ' + VERSION_APPLI + '.</div>' +
      '</div>';
  }

  // ---------------------------------------------------------------
  // 11. Affichage général
  // ---------------------------------------------------------------
  var racineApp = document.getElementById('app');
  var mediaSombre = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;
  function appliquerAffichage() {
    var sombre = R.theme === 'sombre' || (R.theme === 'auto' && mediaSombre && mediaSombre.matches);
    var html = document.documentElement;
    html.setAttribute('data-theme', sombre ? 'sombre' : 'clair');
    html.classList.toggle('contraste', !!R.contraste);
    html.classList.toggle('grand-cuisine', !!R.grandCuisine);
    html.style.setProperty('--zoom', { normal: 1, grand: 1.12, tresgrand: 1.25 }[R.texte] || 1);
    var meta = document.querySelector('meta[name=theme-color]'); if (meta) meta.setAttribute('content', sombre ? '#141714' : '#2E6B4E');
  }
  if (mediaSombre && mediaSombre.addEventListener) mediaSombre.addEventListener('change', function () { appliquerAffichage(); });
  appliquerAffichage();
  var toastTimer = null;
  function message(texte) {
    var vieux = document.querySelector('.toast'); if (vieux) vieux.remove();
    var t = document.createElement('div'); t.className = 'toast'; t.setAttribute('role', 'status'); t.textContent = texte;
    document.body.appendChild(t);
    clearTimeout(toastTimer); toastTimer = setTimeout(function () { t.remove(); }, 3200);
  }

  function titreEcran() {
    if (U.onglet === 'repas') {
      return { liste: 'Qu’est-ce qu’on mange\u00a0?', fiche: 'Recette', cuisine: 'Mode cuisine', ajout: U.edition ? 'Modifier la recette' : 'Nouveau repas', frigo: 'Avec ce que j’ai' }[U.vue] || '';
    }
    if (U.onglet === 'courses') return U.vue === 'placard' ? 'Mon placard' : 'Liste de courses';
    return { semaine: 'Planning de la semaine', favoris: 'Favoris et sauvegarde' }[U.onglet];
  }

  function afficher() {
    // On garde le champ actif et la position du curseur
    var actif = document.activeElement, idActif = actif && actif.id, debut = null, fin = null;
    if (idActif && (actif.tagName === 'INPUT' || actif.tagName === 'TEXTAREA')) { try { debut = actif.selectionStart; fin = actif.selectionEnd; } catch (e) {} }

    var montrerPers = !(U.onglet === 'favoris' || U.vue === 'ajout' || U.vue === 'placard' || U.vue === 'reglages');
    var contenu = '';
    if (U.vue === 'reglages') contenu = ecranReglages();
    else if (U.onglet === 'repas') contenu = { liste: ecranListe, fiche: ecranFiche, cuisine: ecranCuisine, ajout: ecranAjout, frigo: ecranFrigo }[U.vue]();
    else if (U.onglet === 'semaine') contenu = ecranSemaine();
    else if (U.onglet === 'courses') contenu = U.vue === 'placard' ? ecranPlacard() : ecranCourses();
    else contenu = ecranFavoris();

    var nbPlan = 0; repasActifs().forEach(function (q) { nbPlan += D.plan[q].filter(function (x) { return x; }).length; });
    var nbCourses = listeCourses().lignes.length;
    var nbFavs = toutes().filter(function (r) { return D.favs[r.id]; }).length;
    var onglets = [['repas', 'Repas', toutes().length + ' idées'], ['semaine', 'Semaine', nbPlan + ' / ' + 7 * repasActifs().length], ['courses', 'Courses', nbCourses + ' art.'], ['favoris', 'Favoris', nbFavs + ' ♥']];

    racineApp.innerHTML =
      '<header class="entete"><div class="entete-ligne"><h1 class="titre">' + (U.vue === 'reglages' ? 'Paramètres' : titreEcran()) + '</h1>' +
      '<div class="rangee" style="flex-wrap:nowrap;gap:6px">' +
      (U.onglet === 'repas' && U.vue === 'liste' ? '<button class="btn btn-principal" style="min-height:40px" data-a="ajouter">' + I.plus + 'Ajouter</button>' : '') +
      (U.vue !== 'reglages' && U.vue !== 'cuisine' ? '<button class="btn btn-icone btn-moins engrenage" data-a="parametres" aria-label="Paramètres">' + I.engrenage + '</button>' : '') +
      '</div></div>' +
      (montrerPers ? '<div class="personnes"><span>Nombre de personnes</span><div class="compteur">' +
        '<button class="btn btn-icone btn-moins" data-a="pers" data-v="-1" aria-label="Une personne de moins">' + I.moins + '</button><b>' + D.pers + '</b>' +
        '<button class="btn btn-icone btn-principal" data-a="pers" data-v="1" aria-label="Une personne de plus">' + I.plus + '</button></div></div>' : '') +
      '</header><main>' + contenu + '</main>' +
      '<nav class="onglets" aria-label="Navigation"><div class="onglets-dedans">' + onglets.map(function (o) {
        return '<button class="onglet' + (U.onglet === o[0] ? ' on' : '') + '" data-a="onglet" data-v="' + o[0] + '"><span class="trait"></span>' + o[1] + '<small>' + o[2] + '</small></button>';
      }).join('') + '</div></nav>';

    gererEcran();
    if (idActif) {
      var el = document.getElementById(idActif);
      if (el) { el.focus(); if (debut != null) { try { el.setSelectionRange(debut, fin); } catch (e) {} } }
    }
  }

  // ---------------------------------------------------------------
  // 12. Navigation (avec le bouton retour du téléphone)
  // ---------------------------------------------------------------
  function aller(vue, extra) {
    U.pile.push({ vue: U.vue, sel: U.sel });
    history.pushState({ n: U.pile.length }, '');
    U.vue = vue;
    if (extra) Object.keys(extra).forEach(function (k) { U[k] = extra[k]; });
    afficher();
    window.scrollTo(0, 0);
  }
  window.addEventListener('popstate', function () {
    if (U.vue === 'cuisine') arreterCuisine();
    var prec = U.pile.pop();
    if (prec) { U.vue = prec.vue; U.sel = prec.sel; }
    else { U.vue = U.onglet === 'courses' ? 'courses' : 'liste'; }
    afficher();
    window.scrollTo(0, 0);
  });
  function retour() { if (U.pile.length) history.back(); else { U.vue = 'liste'; afficher(); } }

  // ---------------------------------------------------------------
  // 13. Mode cuisine : écran allumé et minuteur
  // ---------------------------------------------------------------
  var demandeEnCours = false;
  function demanderEcranAllume() {
    if (verrouEcran || demandeEnCours) return;
    demandeEnCours = true;
    setTimeout(function () { demandeEnCours = false; }, 1500);
    try {
      if (navigator.wakeLock) {
        navigator.wakeLock.request('screen').then(function (v) {
          verrouEcran = v; U.ecranAllume = true; if (U.vue === 'cuisine') afficher();
          v.addEventListener('release', function () { U.ecranAllume = false; verrouEcran = null; });
        }).catch(function () {});
      }
    } catch (e) {}
  }
  document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === 'visible') gererEcran();
  });
  // Écran allumé : en mode cuisine et/ou sur la liste de courses, selon les réglages
  function gererEcran() {
    var besoin = (U.vue === 'cuisine' && R.ecranCuisine) || (U.onglet === 'courses' && U.vue === 'courses' && R.ecranCourses);
    if (besoin) demanderEcranAllume();
    else if (verrouEcran) { try { verrouEcran.release(); } catch (e) {} verrouEcran = null; U.ecranAllume = false; }
  }
  function arreterCuisine() {
    if (intervalle) { clearInterval(intervalle); intervalle = null; }
    U.minuteur = null; U.minuteurFini = false;
    try { if (verrouEcran) { verrouEcran.release(); verrouEcran = null; } } catch (e) {}
    U.ecranAllume = false;
  }
  function sonnerie() {
    try { if (R.vibrer && navigator.vibrate) navigator.vibrate([400, 200, 400, 200, 400]); } catch (e) {}
    if (!R.son) return;
    try {
      var ctx = new (window.AudioContext || window.webkitAudioContext)();
      [0, 0.45, 0.9].forEach(function (t) {
        var o = ctx.createOscillator(), g = ctx.createGain();
        o.frequency.value = 880; o.connect(g); g.connect(ctx.destination);
        g.gain.setValueAtTime(0.3, ctx.currentTime + t); g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + t + 0.35);
        o.start(ctx.currentTime + t); o.stop(ctx.currentTime + t + 0.36);
      });
    } catch (e) {}
  }
  function lancerMinuteur(min) {
    if (intervalle) clearInterval(intervalle);
    var finPrevue = Date.now() + min * 60000;
    U.minuteur = min * 60; U.minuteurFini = false;
    intervalle = setInterval(function () {
      var reste = Math.round((finPrevue - Date.now()) / 1000);
      if (reste <= 0) { clearInterval(intervalle); intervalle = null; U.minuteur = null; U.minuteurFini = true; sonnerie(); }
      else U.minuteur = reste;
      if (U.vue === 'cuisine') afficher();
    }, 1000);
    afficher();
  }

  // ---------------------------------------------------------------
  // 14. Partage et sauvegarde
  // ---------------------------------------------------------------
  function partagerListe() {
    var lc = listeCourses(), p = D.pers;
    var lignes = lc.lignes.filter(function (l) { return !D.coches[l.k]; });
    if (!lignes.length) { message('La liste est vide.'); return; }
    var texte = 'Liste de courses (' + p + ' pers.)\n' + lignes.map(function (l) { var q = quantite(l.ing, p); return '- ' + nomIng(l.ing, p) + (q ? ' : ' + q : ''); }).join('\n');
    if (navigator.share) { navigator.share({ title: 'Liste de courses', text: texte }).catch(function () {}); return; }
    copier(texte, 'Liste copiée : colle-la dans un SMS ou WhatsApp.');
  }
  function copier(texte, ok) {
    try { navigator.clipboard.writeText(texte).then(function () { message(ok); }, function () { message('Impossible de copier.'); }); }
    catch (e) { message('Impossible de copier.'); }
  }
  function exporter() {
    var photos = {};
    Object.keys(PHOTOS).forEach(function (k) { photos[k] = PHOTOS[k]; });
    var contenu = JSON.stringify({ app: 'appli-repas', version: 1, date: new Date().toISOString(), donnees: D, photos: photos });
    var date = new Date().toISOString().slice(0, 10);
    var blob = new Blob([contenu], { type: 'application/json' });
    var nomFichier = 'sauvegarde-repas-' + date + '.json';
    var fichier = null;
    try { fichier = new File([blob], nomFichier, { type: 'application/json' }); } catch (e) {}
    D.derniereSauvegarde = new Date().toLocaleDateString('fr-FR');
    enregistrer();
    if (fichier && navigator.canShare && navigator.canShare({ files: [fichier] })) {
      navigator.share({ files: [fichier], title: 'Sauvegarde appli repas' }).then(function () { afficher(); }).catch(function () { telecharger(blob, nomFichier); });
    } else telecharger(blob, nomFichier);
  }
  function telecharger(blob, nom) {
    var a = document.createElement('a');
    a.href = URL.createObjectURL(blob); a.download = nom;
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(function () { URL.revokeObjectURL(a.href); }, 5000);
    message('Sauvegarde enregistrée dans tes téléchargements.');
    afficher();
  }
  function importer(fichier) {
    var lecteur = new FileReader();
    lecteur.onload = function () {
      try {
        var s = JSON.parse(lecteur.result);
        if (s.app !== 'appli-repas' || !s.donnees) throw new Error('format');
        if (!confirm('Remplacer les données actuelles par cette sauvegarde ?')) return;
        D = Object.assign(donneesParDefaut(), s.donnees);
        D.reglages = Object.assign(copie(REGLAGES_DEFAUT), D.reglages || {}); R = D.reglages;
        appliquerAffichage();
        enregistrer();
        Object.keys(PHOTOS).forEach(function (k) { enregistrerPhoto(k, null); });
        Object.keys(s.photos || {}).forEach(function (k) { enregistrerPhoto(k, s.photos[k]); });
        cacheTextes = {};
        message('Sauvegarde restaurée.');
        afficher();
      } catch (e) { message('Ce fichier n’est pas une sauvegarde de l’appli.'); }
    };
    lecteur.readAsText(fichier);
  }

  // ---------------------------------------------------------------
  // 15. Formulaire d'ajout / modification
  // ---------------------------------------------------------------
  function enregistrerRecette() {
    var f = U.form;
    var lignesIng = f.ings.split('\n').filter(function (l) { return l.trim(); });
    var lignesEt = f.etapes.split('\n').filter(function (l) { return l.trim(); });
    if (!f.nom.trim()) { U.erreurForm = 'Donne un nom au plat.'; afficher(); return; }
    if (!lignesIng.length) { U.erreurForm = 'Ajoute au moins un ingrédient.'; afficher(); return; }
    var pers = Math.max(1, parseInt(f.pers, 10) || 1);
    var id = U.edition || ('u' + Date.now());
    var r = {
      id: id, n: f.nom.trim(), c: f.cat, k: parseInt(f.kcal, 10) || 0, t: parseInt(f.temps, 10) || 0, m: null,
      kw: f.kw.split(',').map(function (k) { return k.trim(); }).filter(Boolean),
      i: lignesIng.map(function (l) { var i = lireIngredient(l); if (i.q != null) i.q = i.q / pers; return i; }),
      s: lignesEt.length ? lignesEt : ['Pas encore d’étapes.']
    };
    if (U.edition) D.perso = D.perso.map(function (x) { return x.id === id ? r : x; });
    else D.perso.push(r);
    if (U.photoForm) enregistrerPhoto(id, U.photoForm);
    delete cacheTextes[id];
    enregistrer();
    U.form = copie(FORM_VIDE); U.collage = ''; U.msgCollage = ''; U.erreurForm = ''; U.photoForm = null;
    var etaitEdition = !!U.edition; U.edition = null;
    // On remplace l'écran d'ajout par la fiche
    U.vue = 'fiche'; U.sel = id;
    afficher(); window.scrollTo(0, 0);
    message(etaitEdition ? 'Recette modifiée.' : 'Recette ajoutée.');
  }

  // ---------------------------------------------------------------
  // 16. Toutes les actions des boutons
  // ---------------------------------------------------------------
  var ACTIONS = {
    onglet: function (v) {
      if (U.vue === 'cuisine') arreterCuisine();
      U.onglet = v; U.pile = []; U.fq = '';
      U.vue = v === 'repas' ? 'liste' : (v === 'courses' ? 'courses' : v);
      afficher(); window.scrollTo(0, 0);
    },
    retour: retour,
    pers: function (v) { D.pers = Math.min(20, Math.max(1, D.pers + parseInt(v, 10))); enregistrer(); afficher(); },
    cat: function (v) { U.cat = v; afficher(); },
    kcal: function (v) { U.kcal = v; afficher(); },
    rapide: function () { U.rapide = !U.rapide; afficher(); },
    voirExclus: function () { U.voirExclus = !U.voirExclus; afficher(); },
    exclure: function (v) { var k = cle(v); D.exclus[k] = !D.exclus[k]; if (!D.exclus[k]) delete D.exclus[k]; enregistrer(); afficher(); },
    chercher: function (v) { U.q = v; ajouterRecente(v); afficher(); },
    effacerFiltres: function () { U.q = ''; U.cat = 'Tous'; U.kcal = 'all'; U.rapide = false; D.exclus = {}; enregistrer(); afficher(); },
    hasard: function () { var l = resultatsListe(); if (l.length) aller('fiche', { sel: l[Math.floor(Math.random() * l.length)].id }); },
    ouvrir: function (v) {
      if (U.vue === 'liste' && U.q.trim()) ajouterRecente(U.q);
      if (U.onglet !== 'repas') { U.onglet = 'repas'; U.pile = []; U.vue = 'liste'; }
      aller('fiche', { sel: v });
    },
    frigo: function () { U.fq = ''; aller('frigo'); },
    cocherFrigo: function (v) { var k = cle(v); D.frigo[k] = !D.frigo[k]; if (!D.frigo[k]) delete D.frigo[k]; enregistrer(); afficher(); },
    viderFrigo: function () { D.frigo = {}; enregistrer(); afficher(); },
    favori: function () { D.favs[U.sel] = !D.favs[U.sel]; if (!D.favs[U.sel]) delete D.favs[U.sel]; enregistrer(); afficher(); message(D.favs[U.sel] ? 'Ajouté aux favoris.' : 'Retiré des favoris.'); },
    noter: function (v) { var n = parseInt(v, 10); if (D.notes[U.sel] === n) delete D.notes[U.sel]; else D.notes[U.sel] = n; enregistrer(); afficher(); },
    planifier: function (quand) {
      var i = premierLibre(quand); if (i < 0) return;
      D.plan[quand][i] = U.sel; enregistrer(); afficher();
      message('Ajouté au ' + quand + ' de ' + JOURS[i].toLowerCase() + '.');
    },
    retirerPlan: function (v) { var p = v.split(':'); D.plan[p[0]][parseInt(p[1], 10)] = null; enregistrer(); afficher(); },
    viderPlanning: function () { if (confirm('Vider tout le planning de la semaine ?')) { D.plan = { midi: vide7(), soir: vide7() }; D.coches = {}; enregistrer(); afficher(); } },
    cuisiner: function () { U.etape = 0; U.cochesCuisine = {}; U.voirIngsCuisine = false; aller('cuisine'); },
    etape: function (v) {
      var r = parId(U.sel); var n = U.etape + parseInt(v, 10);
      if (n >= r.s.length) { retour(); message('Bon appétit !'); return; }
      U.etape = Math.max(0, n); afficher(); window.scrollTo(0, 0);
    },
    minuteur: function (v) { lancerMinuteur(parseInt(v, 10)); },
    arreterMinuteur: function () { if (intervalle) clearInterval(intervalle); intervalle = null; U.minuteur = null; afficher(); },
    fermerAlerte: function () { U.minuteurFini = false; afficher(); },
    voirIngsCuisine: function () { U.voirIngsCuisine = !U.voirIngsCuisine; afficher(); },
    cocherCuisine: function (v) { U.cochesCuisine[v] = !U.cochesCuisine[v]; afficher(); },
    supprimerPhoto: function (v) { enregistrerPhoto(v, null); afficher(); },
    ajouter: function () { U.form = copie(FORM_VIDE); U.edition = null; U.photoForm = null; U.erreurForm = ''; U.msgCollage = ''; U.collage = ''; aller('ajout'); },
    modifier: function () {
      var r = parId(U.sel); if (!r) return;
      U.form = { nom: r.n, cat: r.c, kcal: String(r.k || ''), temps: String(r.t || ''), pers: '1', ings: r.i.map(ingEnTexte).join('\n'), etapes: r.s.join('\n'), kw: r.kw.join(', ') };
      U.edition = r.id; U.photoForm = null; U.erreurForm = ''; U.msgCollage = ''; U.collage = '';
      aller('ajout');
    },
    supprimerRecette: function () {
      var r = parId(U.sel); if (!r || !confirm('Supprimer « ' + r.n + ' » ?')) return;
      D.perso = D.perso.filter(function (x) { return x.id !== r.id; });
      ['midi', 'soir'].forEach(function (q) { D.plan[q] = D.plan[q].map(function (x) { return x === r.id ? null : x; }); });
      delete D.favs[r.id]; delete D.notes[r.id]; enregistrerPhoto(r.id, null);
      enregistrer(); retour(); message('Recette supprimée.');
    },
    formCat: function (v) { U.form.cat = v; afficher(); },
    lireCollage: function () {
      if (!U.collage.trim()) { U.msgCollage = 'Colle d’abord le texte d’une recette.'; afficher(); return; }
      var r = lireRecetteCollee(U.collage);
      U.form.nom = r.nom || U.form.nom; U.form.pers = r.pers || U.form.pers; U.form.temps = r.temps || U.form.temps;
      U.form.ings = r.ings.join('\n'); U.form.etapes = r.etapes.join('\n');
      U.msgCollage = 'Formulaire rempli : ' + r.ings.length + ' ingrédient(s) et ' + r.etapes.length + ' étape(s). Vérifie et ajoute les calories.';
      afficher();
    },
    enregistrerRecette: enregistrerRecette,
    placard: function () { U.fq = ''; aller('placard'); },
    placardEtat: function (v) { var i = v.indexOf('|'); var etat = v.slice(0, i), nom = v.slice(i + 1); if (etat === 'nondef') delete D.placard[cle(nom)]; else D.placard[cle(nom)] = etat; enregistrer(); afficher(); },
    partager: partagerListe,
    cocherCourse: function (v) { D.coches[v] = !D.coches[v]; if (!D.coches[v]) delete D.coches[v]; enregistrer(); afficher(); },
    decocherCourses: function () { D.coches = {}; enregistrer(); afficher(); },
    exporter: exporter,
    parametres: function () {
      U.fq = ''; U.voirNonAimes = false;
      aller('reglages');
      try { if (navigator.storage && navigator.storage.estimate) navigator.storage.estimate().then(function (e) { U.espace = (Math.round(e.usage / 100000) / 10) + ' Mo'; if (U.vue === 'reglages') afficher(); }); } catch (e) {}
      try { if (navigator.storage && navigator.storage.persist) navigator.storage.persist(); } catch (e) {}
    },
    reglage: function (v) {
      R[v] = !R[v];
      if (!R.midi && !R.soir) { R[v === 'midi' ? 'soir' : 'midi'] = true; message('Il faut au moins le midi ou le soir.'); }
      enregistrer(); appliquerAffichage(); afficher();
    },
    reglageChoix: function (v) {
      var i = v.indexOf('|'), k = v.slice(0, i), val = v.slice(i + 1);
      R[k] = k === 'debutSemaine' ? parseInt(val, 10) : val;
      enregistrer(); appliquerAffichage(); afficher();
    },
    allergie: function (v) { R.allergies[v] = !R.allergies[v]; if (!R.allergies[v]) delete R.allergies[v]; enregistrer(); afficher(); },
    voirNonAimes: function () { U.voirNonAimes = !U.voirNonAimes; U.fq = ''; afficher(); },
    placardDepuisReglages: function () { U.onglet = 'courses'; U.pile = []; U.vue = 'courses'; U.fq = ''; aller('placard'); },
    testerSon: function () { var s = R.son, vb = R.vibrer; R.son = true; sonnerie(); R.son = s; R.vibrer = vb; },
    effacerHistorique: function () { if (confirm('Effacer toutes les notes « Déjà faits » ? Cette action est définitive.')) { D.notes = {}; enregistrer(); afficher(); message('Historique effacé.'); } },
    reglagesOrigine: function () { if (confirm('Remettre tous les réglages d’origine ? Tes recettes, favoris et notes ne sont pas touchés.')) { D.reglages = copie(REGLAGES_DEFAUT); R = D.reglages; enregistrer(); appliquerAffichage(); afficher(); message('Réglages remis à zéro.'); } },
    toutEffacer: function () {
      if (!confirm('Tout effacer : recettes perso, photos, favoris, notes, planning, placard et réglages ? Pense à sauvegarder avant.')) return;
      if (!confirm('Vraiment tout effacer ? Ce n’est pas récupérable sans sauvegarde.')) return;
      try { localStorage.removeItem(CLE_STOCKAGE); } catch (e) {}
      Object.keys(PHOTOS).forEach(function (k) { enregistrerPhoto(k, null); });
      setTimeout(function () { location.reload(); }, 300);
    },
    majAppli: function () {
      message('Mise à jour en cours…');
      var fin = function () { setTimeout(function () { location.reload(); }, 400); };
      try {
        var p1 = window.caches ? caches.keys().then(function (k) { return Promise.all(k.map(function (c) { return caches.delete(c); })); }) : Promise.resolve();
        var p2 = navigator.serviceWorker ? navigator.serviceWorker.getRegistrations().then(function (rs) { return Promise.all(rs.map(function (r) { return r.update(); })); }) : Promise.resolve();
        Promise.all([p1, p2]).then(fin, fin);
      } catch (e) { fin(); }
    }
  };

  document.addEventListener('click', function (e) {
    var b = e.target.closest('[data-a]');
    if (!b || b.disabled) return;
    var f = ACTIONS[b.getAttribute('data-a')];
    if (f) { e.preventDefault(); f(b.getAttribute('data-v')); }
  });
  document.addEventListener('input', function (e) {
    var el = e.target, champ = el.getAttribute && el.getAttribute('data-i');
    if (!champ) return;
    if (champ.indexOf('form.') === 0) { U.form[champ.slice(5)] = el.value; return; }
    U[champ] = el.value;
    if (champ === 'q' || champ === 'fq') afficher();
  });
  document.addEventListener('change', function (e) {
    var el = e.target;
    if (el.hasAttribute && el.hasAttribute('data-photo') && el.files && el.files[0]) {
      var cible = el.getAttribute('data-photo');
      reduirePhoto(el.files[0], function (data) {
        if (cible === 'form') U.photoForm = data; else { enregistrerPhoto(cible, data); message('Photo enregistrée.'); }
        afficher();
      });
    }
    if (el.hasAttribute && el.hasAttribute('data-import') && el.files && el.files[0]) importer(el.files[0]);
  });

  // Rappel de sauvegarde une fois par mois s'il y a des données perso
  function rappelSauvegarde() {
    if (!R.rappelSauvegarde) return;
    if (!D.perso.length && !Object.keys(D.notes).length) return;
    var der = D.derniereSauvegarde ? D.derniereSauvegarde.split('/') : null;
    var vieux = !der || (Date.now() - new Date(der[2], der[1] - 1, der[0]).getTime()) > 30 * 86400000;
    if (vieux) setTimeout(function () { message('Pense à faire une sauvegarde (onglet Favoris).'); }, 1500);
  }

  ouvrirPhotos(function () { afficher(); rappelSauvegarde(); });
  afficher();

  // Pour les tests
  window.__appliRepas = { lireIngredient: lireIngredient, quantite: quantite, infoRecherche: infoRecherche, INTEGREES: INTEGREES, minutesEtape: minutesEtape, lireRecetteCollee: lireRecetteCollee, deSaison: deSaison };
})();
