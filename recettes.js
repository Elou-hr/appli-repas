/* =====================================================================
   Recettes intégrées à l'appli
   - Quantités et calories POUR UNE PERSONNE (l'appli multiplie toute seule).
   - c : Plat, Léger, Rapide, Végétarien, Dessert, Accompagnement, Apéritif ou Sauce et base
   - k : kcal par personne (valeur moyenne), ou null si non défini, t : temps total en minutes
   - m : [protéines, glucides, lipides] en grammes par personne
   - kw : mots-clés séparés par des virgules
   - i : ingrédients. Formats acceptés :
       "200 g Pommes de terre"   "50 ml Crème"   "1 cc Cumin" (cuillère à café)
       "1 cs Huile d’olive" (cuillère à soupe)   "1 pincée Muscade"
       "1 Oignon" (à la pièce, pluriel automatique)   "1 Gousse d’ail|Gousses d’ail" (pluriel précis)
       "Sel et poivre" (sans quantité)
   - s : étapes. Écrire « 10 minutes » fait apparaître un minuteur.
   ===================================================================== */
window.RECETTES_BRUTES = [

  // ============================ PLATS ============================
  { n: 'Poulet rôti et légumes', c: 'Plat', k: 520, t: 60, m: [38, 40, 20], kw: 'four, dimanche, famille',
    i: ['1 Cuisse de poulet', '200 g Pommes de terre', '100 g Carottes', '0.25 Oignon', '1 cs Huile d’olive', '0.5 cc Herbes de Provence', '0.5 cc Paprika', 'Sel et poivre'],
    s: ['Préchauffer le four à 200 °C.', 'Éplucher et couper les pommes de terre, les carottes et l’oignon en morceaux.', 'Mettre les légumes dans un plat, ajouter l’huile, les herbes, du sel et du poivre, puis poser les cuisses de poulet dessus et les saupoudrer de paprika.', 'Enfourner 50 minutes en arrosant le poulet avec son jus à mi-cuisson.'] },

  { n: 'Pâtes bolognaise', c: 'Plat', k: 650, t: 35, m: [32, 78, 20], kw: 'italien, enfants',
    i: ['100 g Pâtes', '100 g Bœuf haché', '120 g Sauce tomate', '0.25 Oignon', '0.25 Carotte', '0.5 Gousse d’ail|Gousses d’ail', '0.5 cc Origan', '1 cc Huile d’olive', 'Sel et poivre'],
    s: ['Émincer l’oignon, la carotte et l’ail, puis les faire revenir 5 minutes dans l’huile.', 'Ajouter le bœuf haché et le faire dorer en l’émiettant.', 'Verser la sauce tomate, ajouter l’origan, saler, poivrer et laisser mijoter 15 minutes.', 'Pendant ce temps, cuire les pâtes, les égoutter et les mélanger à la sauce.'] },

  { n: 'Lasagnes à la bolognaise', c: 'Plat', k: 620, t: 75, m: [30, 55, 30], kw: 'italien, four, famille',
    i: ['60 g Feuilles de lasagne', '100 g Bœuf haché', '120 g Sauce tomate', '0.25 Oignon', '100 ml Béchamel', '25 g Emmental râpé', '0.5 cc Origan', 'Sel et poivre'],
    s: ['Faire revenir l’oignon émincé et le bœuf 5 minutes, ajouter la sauce tomate et l’origan, puis laisser mijoter 15 minutes.', 'Préchauffer le four à 180 °C.', 'Dans un plat, alterner feuilles de lasagne, sauce et béchamel, en finissant par la béchamel et le fromage.', 'Cuire au four 40 minutes.'] },

  { n: 'Spaghetti carbonara', c: 'Plat', k: 680, t: 20, m: [28, 75, 28], kw: 'italien, rapide',
    i: ['100 g Spaghetti', '60 g Lardons', '1 Œuf', '20 g Parmesan', 'Poivre'],
    s: ['Cuire les spaghetti 10 minutes dans l’eau salée.', 'Faire dorer les lardons 5 minutes à la poêle.', 'Battre l’œuf avec le parmesan et beaucoup de poivre.', 'Hors du feu, mélanger les pâtes chaudes, les lardons et l’œuf avec un peu d’eau de cuisson.'] },

  { n: 'Quiche lorraine', c: 'Plat', k: 590, t: 50, m: [20, 32, 42], kw: 'four, tarte',
    i: ['0.25 Pâte brisée|Pâtes brisées', '50 g Lardons', '1 Œuf', '50 ml Crème fraîche', '25 ml Lait', '1 pincée Muscade', 'Sel et poivre'],
    s: ['Préchauffer le four à 180 °C et étaler la pâte dans un moule.', 'Faire dorer les lardons 5 minutes à la poêle sans matière grasse.', 'Battre les œufs avec la crème, le lait, la muscade, un peu de sel et du poivre.', 'Répartir les lardons sur la pâte, verser le mélange et cuire 35 minutes.'] },

  { n: 'Saumon, riz et brocoli', c: 'Plat', k: 560, t: 25, m: [34, 55, 22], kw: 'équilibré, poisson',
    i: ['1 Pavé de saumon', '70 g Riz', '150 g Brocoli', '0.25 Citron', '1 cc Huile d’olive', 'Sel et poivre'],
    s: ['Lancer la cuisson du riz.', 'Cuire le brocoli 6 minutes à la vapeur ou à l’eau.', 'Cuire les pavés de saumon 4 minutes de chaque côté dans une poêle huilée.', 'Servir avec un filet de citron.'] },

  { n: 'Hachis parmentier', c: 'Plat', k: 560, t: 60, m: [28, 40, 30], kw: 'four, hiver, famille',
    i: ['250 g Pommes de terre', '100 g Bœuf haché', '0.25 Oignon', '50 ml Lait', '10 g Beurre', '20 g Emmental râpé', '1 pincée Muscade', 'Sel et poivre'],
    s: ['Cuire les pommes de terre épluchées 20 minutes dans l’eau salée.', 'Faire revenir l’oignon émincé puis le bœuf 5 minutes, saler et poivrer.', 'Écraser les pommes de terre avec le lait chaud, le beurre et la muscade.', 'Mettre la viande dans un plat, couvrir de purée et de fromage, puis gratiner 20 minutes au four à 200 °C.'] },

  { n: 'Gratin dauphinois', c: 'Plat', k: 420, t: 75, m: [8, 40, 25], kw: 'four, accompagnement, hiver',
    i: ['250 g Pommes de terre', '80 ml Crème fraîche', '80 ml Lait', '0.5 Gousse d’ail|Gousses d’ail', '1 pincée Muscade', 'Sel et poivre'],
    s: ['Préchauffer le four à 160 °C et frotter le plat avec l’ail.', 'Éplucher et couper les pommes de terre en fines rondelles.', 'Chauffer le lait et la crème avec la muscade, le sel et le poivre, puis y cuire les rondelles 10 minutes.', 'Verser dans le plat et cuire au four 60 minutes jusqu’à ce que ce soit doré.'] },

  { n: 'Tartiflette', c: 'Plat', k: 780, t: 50, m: [30, 40, 52], kw: 'four, hiver, montagne, fromage',
    i: ['250 g Pommes de terre', '50 g Lardons', '0.25 Oignon', '0.25 Reblochon|Reblochons', '30 ml Crème fraîche', 'Poivre'],
    s: ['Cuire les pommes de terre 20 minutes dans l’eau salée, puis les couper en rondelles.', 'Faire revenir l’oignon émincé et les lardons 5 minutes.', 'Dans un plat, mélanger pommes de terre, lardons, oignon et crème, puis poser le reblochon coupé en deux, croûte vers le haut.', 'Cuire 25 minutes au four à 200 °C.'] },

  { n: 'Bœuf bourguignon', c: 'Plat', k: 610, t: 180, m: [40, 15, 35], kw: 'mijoté, hiver, dimanche, vin',
    i: ['180 g Bœuf à braiser', '30 g Lardons', '100 g Carottes', '50 g Champignons', '0.25 Oignon', '120 ml Vin rouge', '1 cc Farine', '1 Feuille de laurier|Feuilles de laurier', '0.5 cc Thym', '1 cs Huile d’olive', 'Sel et poivre'],
    s: ['Couper la viande en gros cubes et la faire dorer dans l’huile dans une cocotte.', 'Ajouter les lardons, l’oignon et les carottes coupés, puis saupoudrer de farine et mélanger.', 'Verser le vin et un peu d’eau à hauteur, ajouter le thym, le laurier, sel et poivre.', 'Couvrir et laisser mijoter 2 h 30 à feu doux, en ajoutant les champignons 30 minutes avant la fin.'] },

  { n: 'Blanquette de veau', c: 'Plat', k: 540, t: 120, m: [38, 12, 34], kw: 'mijoté, dimanche, tradition',
    i: ['180 g Veau', '100 g Carottes', '50 g Champignons', '0.25 Oignon', '40 ml Crème fraîche', '1 cc Farine', '10 g Beurre', '1 Feuille de laurier|Feuilles de laurier', '0.25 Citron', 'Sel et poivre'],
    s: ['Mettre la viande en morceaux dans une cocotte, couvrir d’eau, porter à ébullition puis écumer.', 'Ajouter l’oignon, les carottes, le laurier, sel et poivre, puis cuire 1 h 30 à feu doux.', 'Faire fondre le beurre, ajouter la farine, puis délayer avec un peu de bouillon de cuisson ; ajouter les champignons et cuire 10 minutes.', 'Hors du feu, ajouter la crème et le jus de citron, puis remettre la viande et les carottes dans la sauce.'] },

  { n: 'Chili con carne', c: 'Plat', k: 590, t: 50, m: [34, 60, 20], kw: 'mexicain, épicé, riz',
    i: ['100 g Bœuf haché', '80 g Haricots rouges', '100 g Tomates concassées', '0.25 Oignon', '0.25 Poivron', '0.5 cc Cumin', '0.5 cc Paprika', '1 pincée Piment de Cayenne', '60 g Riz', '1 cc Huile d’olive', 'Sel et poivre'],
    s: ['Faire revenir l’oignon et le poivron coupés dans l’huile 5 minutes.', 'Ajouter la viande et la faire dorer, puis les épices.', 'Ajouter les tomates et les haricots rouges égouttés, saler, poivrer et laisser mijoter 25 minutes.', 'Servir avec le riz cuit à côté.'] },

  { n: 'Poulet au curry et lait de coco', c: 'Plat', k: 580, t: 35, m: [36, 55, 22], kw: 'indien, épicé, riz',
    i: ['150 g Blanc de poulet', '80 ml Lait de coco', '0.25 Oignon', '1 cc Curry', '0.5 cc Curcuma', '0.5 cc Gingembre', '70 g Riz', '1 cc Huile d’olive', 'Coriandre fraîche', 'Sel'],
    s: ['Couper le poulet en morceaux et émincer l’oignon.', 'Faire revenir l’oignon dans l’huile, ajouter le poulet et le dorer 5 minutes.', 'Ajouter les épices, puis le lait de coco, saler et laisser mijoter 15 minutes.', 'Servir avec le riz et un peu de coriandre.'] },

  { n: 'Couscous au poulet et merguez', c: 'Plat', k: 720, t: 75, m: [40, 70, 30], kw: 'oriental, épicé, famille',
    i: ['1 Cuisse de poulet', '1 Merguez', '70 g Semoule', '100 g Carottes', '0.5 Courgette', '50 g Pois chiches', '0.25 Navet', '0.25 Oignon', '1 cc Ras el hanout', '50 g Tomates concassées', '1 cc Huile d’olive', 'Sel et poivre'],
    s: ['Faire dorer le poulet dans l’huile avec l’oignon émincé dans une grande cocotte.', 'Ajouter les carottes, le navet, les tomates, le ras el hanout, couvrir d’eau, saler et cuire 30 minutes.', 'Ajouter la courgette et les pois chiches et cuire encore 15 minutes ; griller les merguez à part.', 'Préparer la semoule avec de l’eau bouillante salée et servir avec le bouillon, les légumes et les viandes.'] },

  { n: 'Croque-monsieur', c: 'Rapide', k: 480, t: 15, m: [24, 36, 26], kw: 'four, enfants, soir',
    i: ['2 Tranche de pain de mie|Tranches de pain de mie', '1 Tranche de jambon|Tranches de jambon', '30 g Emmental râpé', '5 g Beurre'],
    s: ['Préchauffer le four à 200 °C.', 'Beurrer légèrement le pain, poser le jambon et la moitié du fromage entre deux tranches.', 'Parsemer le reste de fromage sur le dessus.', 'Cuire 10 minutes jusqu’à ce que ce soit doré.'] },

  { n: 'Steak haché et frites au four', c: 'Plat', k: 650, t: 40, m: [30, 50, 35], kw: 'enfants, four',
    i: ['1 Steak haché|Steaks hachés', '250 g Pommes de terre', '1 cs Huile d’olive', '0.5 cc Paprika', 'Sel et poivre'],
    s: ['Préchauffer le four à 220 °C.', 'Couper les pommes de terre en frites, les mélanger avec l’huile, le paprika et le sel.', 'Étaler sur une plaque et cuire 30 minutes en retournant à mi-cuisson.', 'Cuire les steaks 3 minutes de chaque côté à la poêle.'] },

  { n: 'Filet mignon à la moutarde', c: 'Plat', k: 520, t: 35, m: [38, 30, 26], kw: 'porc, sauce',
    i: ['150 g Filet mignon de porc', '1 cc Moutarde', '50 ml Crème fraîche', '0.25 Oignon', '80 g Tagliatelles', '1 cc Huile d’olive', 'Sel et poivre'],
    s: ['Couper le filet mignon en médaillons et le dorer 8 minutes dans l’huile.', 'Ajouter l’oignon émincé et cuire 3 minutes.', 'Ajouter la crème et la moutarde, saler, poivrer et laisser mijoter 5 minutes.', 'Servir avec les tagliatelles cuites.'] },

  { n: 'Cabillaud en papillote', c: 'Léger', k: 330, t: 30, m: [32, 25, 9], kw: 'poisson, four, léger',
    i: ['150 g Cabillaud', '0.5 Courgette', '0.5 Tomate', '0.25 Citron', '1 cc Huile d’olive', '0.5 cc Thym', '100 g Pommes de terre', 'Sel et poivre'],
    s: ['Préchauffer le four à 200 °C et cuire les pommes de terre 15 minutes à l’eau.', 'Couper la courgette et la tomate en rondelles.', 'Sur une feuille de papier cuisson, poser les légumes, le poisson, une rondelle de citron, le thym, l’huile, sel et poivre, puis fermer.', 'Cuire 15 minutes au four et servir avec les pommes de terre.'] },

  { n: 'Moules marinières', c: 'Plat', k: 450, t: 30, m: [30, 40, 16], kw: 'fruits de mer, frites',
    i: ['400 g Moules', '0.25 Oignon', '50 ml Vin blanc', '10 g Beurre', 'Persil', '150 g Pommes de terre', 'Poivre'],
    s: ['Gratter et rincer les moules.', 'Faire fondre l’oignon émincé dans le beurre 3 minutes.', 'Ajouter les moules et le vin, couvrir et cuire 6 minutes en remuant, jusqu’à ce qu’elles s’ouvrent.', 'Parsemer de persil et servir avec des pommes de terre ou des frites.'] },

  { n: 'Paëlla', c: 'Plat', k: 640, t: 50, m: [36, 70, 22], kw: 'espagnol, riz, fruits de mer',
    i: ['80 g Riz', '0.5 Cuisse de poulet|Cuisses de poulet', '30 g Chorizo', '60 g Crevettes', '0.25 Poivron', '40 g Petits pois', '0.25 Oignon', '1 pincée Safran', '0.5 cc Paprika', '200 ml Bouillon', '1 cs Huile d’olive', 'Sel'],
    s: ['Dorer le poulet en morceaux dans l’huile, puis ajouter le chorizo, l’oignon et le poivron 5 minutes.', 'Ajouter le riz, le paprika et le safran et mélanger 2 minutes.', 'Verser le bouillon chaud, saler et cuire 18 minutes sans trop remuer.', 'Ajouter les crevettes et les petits pois et cuire encore 5 minutes.'] },

  { n: 'Risotto aux champignons', c: 'Végétarien', k: 520, t: 35, m: [14, 70, 18], kw: 'italien, riz, crémeux',
    i: ['80 g Riz à risotto', '100 g Champignons', '0.25 Oignon', '250 ml Bouillon de légumes', '30 ml Vin blanc', '20 g Parmesan', '10 g Beurre', 'Sel et poivre'],
    s: ['Faire revenir l’oignon émincé dans le beurre, ajouter le riz et le nacrer 2 minutes.', 'Verser le vin, puis le bouillon chaud louche par louche en remuant, pendant 18 minutes.', 'À part, faire dorer les champignons émincés 5 minutes.', 'Ajouter les champignons et le parmesan, poivrer et servir aussitôt.'] },

  { n: 'Pizza maison jambon-fromage', c: 'Plat', k: 690, t: 35, m: [30, 75, 28], kw: 'italien, four, enfants',
    i: ['0.25 Pâte à pizza|Pâtes à pizza', '60 g Sauce tomate', '1 Tranche de jambon|Tranches de jambon', '60 g Mozzarella', '20 g Champignons', '0.5 cc Origan'],
    s: ['Préchauffer le four à 240 °C.', 'Étaler la pâte et la couvrir de sauce tomate.', 'Ajouter le jambon, les champignons émincés, la mozzarella et l’origan.', 'Cuire 12 minutes jusqu’à ce que la pâte soit dorée.'] },

  { n: 'Fajitas au poulet', c: 'Plat', k: 560, t: 30, m: [34, 50, 22], kw: 'mexicain, épicé, enfants',
    i: ['120 g Blanc de poulet', '2 Galette de blé|Galettes de blé', '0.5 Poivron', '0.25 Oignon', '0.5 cc Cumin', '0.5 cc Paprika', '20 ml Crème fraîche', '1 cc Huile d’olive', 'Sel'],
    s: ['Couper le poulet, le poivron et l’oignon en lanières.', 'Faire revenir le tout 10 minutes dans l’huile avec les épices et le sel.', 'Réchauffer les galettes 1 minute à la poêle.', 'Garnir les galettes de poulet, de légumes et d’un peu de crème, puis les rouler.'] },

  { n: 'Saucisses lentilles', c: 'Plat', k: 620, t: 45, m: [30, 45, 34], kw: 'hiver, mijoté',
    i: ['1 Saucisse de Toulouse|Saucisses de Toulouse', '70 g Lentilles vertes', '0.5 Carotte', '0.25 Oignon', '1 Feuille de laurier|Feuilles de laurier', '0.5 cc Thym', 'Sel et poivre'],
    s: ['Mettre les lentilles rincées dans une casserole avec la carotte, l’oignon, le thym et le laurier, couvrir d’eau froide.', 'Cuire 25 minutes à feu doux et saler en fin de cuisson.', 'Pendant ce temps, dorer les saucisses 15 minutes à la poêle.', 'Servir les saucisses sur les lentilles.'] },

  { n: 'Escalope de dinde à la crème', c: 'Rapide', k: 480, t: 25, m: [36, 40, 18], kw: 'sauce, enfants',
    i: ['1 Escalope de dinde|Escalopes de dinde', '40 ml Crème fraîche', '50 g Champignons', '70 g Riz', '1 cc Huile d’olive', 'Sel et poivre'],
    s: ['Lancer la cuisson du riz.', 'Dorer les escalopes 4 minutes de chaque côté dans l’huile, puis les réserver.', 'Faire revenir les champignons émincés 5 minutes, ajouter la crème, saler et poivrer.', 'Remettre les escalopes 2 minutes dans la sauce et servir avec le riz.'] },

  // ============================ LÉGER ============================
  { n: 'Salade niçoise', c: 'Léger', k: 380, t: 20, m: [24, 14, 24], kw: 'été, froid, salade',
    i: ['60 g Thon', '1 Œuf', '100 g Tomates', '80 g Haricots verts', '15 g Olives', '1 cs Huile d’olive', '1 cc Vinaigre', 'Sel et poivre'],
    s: ['Cuire les œufs 9 minutes dans l’eau bouillante, puis les refroidir et les écaler.', 'Cuire les haricots verts 8 minutes à l’eau salée, puis les égoutter.', 'Couper les tomates et les œufs en quartiers.', 'Disposer le tout avec le thon émietté et les olives, puis assaisonner d’huile, de vinaigre, sel et poivre.'] },

  { n: 'Soupe de légumes', c: 'Léger', k: 180, t: 40, m: [5, 30, 4], kw: 'hiver, chaud, mixé, soupe',
    i: ['100 g Poireaux', '100 g Pommes de terre', '100 g Carottes', '250 ml Bouillon de légumes', 'Sel et poivre'],
    s: ['Laver et couper tous les légumes en morceaux.', 'Les mettre dans une casserole avec le bouillon.', 'Laisser cuire 30 minutes à feu moyen.', 'Mixer, goûter et rectifier l’assaisonnement.'] },

  { n: 'Velouté de potiron', c: 'Léger', k: 210, t: 35, m: [4, 22, 11], kw: 'automne, soupe, mixé',
    i: ['250 g Potiron', '0.25 Oignon', '200 ml Bouillon de légumes', '20 ml Crème fraîche', '1 pincée Muscade', 'Sel et poivre'],
    s: ['Éplucher le potiron et le couper en cubes ; émincer l’oignon.', 'Faire revenir l’oignon 3 minutes, ajouter le potiron et le bouillon.', 'Cuire 25 minutes à feu moyen.', 'Mixer avec la crème et la muscade, saler et poivrer.'] },

  { n: 'Velouté de poireaux pommes de terre', c: 'Léger', k: 220, t: 35, m: [5, 30, 8], kw: 'hiver, soupe, mixé',
    i: ['150 g Poireaux', '120 g Pommes de terre', '250 ml Bouillon de légumes', '10 g Beurre', 'Sel et poivre'],
    s: ['Laver et émincer les poireaux, éplucher et couper les pommes de terre.', 'Faire fondre les poireaux dans le beurre 5 minutes.', 'Ajouter les pommes de terre et le bouillon, puis cuire 25 minutes.', 'Mixer, saler et poivrer.'] },

  { n: 'Taboulé', c: 'Léger', k: 330, t: 20, m: [7, 45, 13], kw: 'été, froid, salade, oriental',
    i: ['50 g Semoule', '0.5 Tomate', '0.25 Concombre', '0.25 Citron', 'Menthe fraîche', 'Persil', '1 cs Huile d’olive', 'Sel et poivre'],
    s: ['Verser la semoule dans un saladier, ajouter le même volume d’eau bouillante salée et couvrir 5 minutes.', 'Égrainer la semoule à la fourchette.', 'Ajouter la tomate et le concombre en dés, les herbes ciselées, le jus de citron et l’huile.', 'Mélanger et laisser 1 heure au frais.'] },

  { n: 'Salade de chèvre chaud', c: 'Léger', k: 420, t: 15, m: [18, 22, 30], kw: 'salade, fromage, four',
    i: ['50 g Salade verte', '2 Tranche de baguette|Tranches de baguette', '40 g Fromage de chèvre', '1 cc Miel', '10 g Noix', '1 cs Huile d’olive', '1 cc Vinaigre balsamique', 'Sel et poivre'],
    s: ['Préchauffer le four en mode grill.', 'Poser une rondelle de chèvre sur chaque tranche de pain et ajouter un filet de miel.', 'Passer 5 minutes sous le grill.', 'Servir sur la salade assaisonnée, avec les noix.'] },

  { n: 'Poke bowl au saumon', c: 'Léger', k: 520, t: 25, m: [28, 60, 18], kw: 'frais, riz, asiatique, poisson',
    i: ['70 g Riz', '100 g Saumon frais', '0.5 Avocat', '0.25 Concombre', '30 g Edamame', '1 cs Sauce soja', '1 cc Graines de sésame'],
    s: ['Cuire le riz et le laisser tiédir.', 'Couper le saumon, l’avocat et le concombre en dés.', 'Disposer le riz dans un bol et ranger les ingrédients par-dessus.', 'Arroser de sauce soja et parsemer de sésame.'] },

  { n: 'Gaspacho', c: 'Léger', k: 150, t: 15, m: [3, 14, 9], kw: 'été, froid, soupe, mixé',
    i: ['200 g Tomates', '0.25 Concombre', '0.25 Poivron', '0.25 Gousse d’ail|Gousses d’ail', '1 cs Huile d’olive', '1 cc Vinaigre', 'Sel et poivre'],
    s: ['Couper tous les légumes en morceaux.', 'Mixer avec l’huile, le vinaigre, le sel et le poivre.', 'Ajouter un peu d’eau froide si c’est trop épais.', 'Laisser au frais au moins 1 heure avant de servir.'] },

  { n: 'Salade de lentilles', c: 'Léger', k: 360, t: 30, m: [18, 40, 12], kw: 'froid, salade, végétarien',
    i: ['60 g Lentilles vertes', '0.25 Échalote', '0.5 Carotte', 'Persil', '1 cs Huile d’olive', '1 cc Vinaigre', '0.5 cc Moutarde', 'Sel et poivre'],
    s: ['Cuire les lentilles 20 minutes dans l’eau, saler en fin de cuisson et égoutter.', 'Râper la carotte et émincer l’échalote.', 'Préparer une vinaigrette avec l’huile, le vinaigre et la moutarde.', 'Mélanger le tout avec le persil ciselé.'] },

  // ============================ RAPIDE ============================
  { n: 'Omelette aux champignons', c: 'Rapide', k: 320, t: 10, m: [20, 3, 25], kw: 'poêle, soir, œuf',
    i: ['2 Œuf', '80 g Champignons', '10 g Beurre', 'Ciboulette', 'Sel et poivre'],
    s: ['Émincer les champignons et les faire revenir 4 minutes dans le beurre.', 'Battre les œufs avec du sel, du poivre et la ciboulette.', 'Verser les œufs sur les champignons et cuire 3 minutes à feu moyen.', 'Plier l’omelette en deux et servir.'] },

  { n: 'Pâtes au pesto', c: 'Rapide', k: 560, t: 15, m: [16, 72, 22], kw: 'italien, végétarien',
    i: ['100 g Pâtes', '30 g Pesto', '10 g Parmesan', '5 Tomate cerise|Tomates cerises'],
    s: ['Cuire les pâtes 10 minutes dans l’eau salée.', 'Couper les tomates cerises en deux.', 'Égoutter les pâtes en gardant un peu d’eau de cuisson.', 'Mélanger avec le pesto, les tomates et le parmesan.'] },

  { n: 'Croque-madame', c: 'Rapide', k: 560, t: 15, m: [30, 36, 32], kw: 'four, œuf',
    i: ['2 Tranche de pain de mie|Tranches de pain de mie', '1 Tranche de jambon|Tranches de jambon', '30 g Emmental râpé', '1 Œuf', '5 g Beurre'],
    s: ['Préparer le croque comme un croque-monsieur et le cuire 10 minutes au four à 200 °C.', 'Pendant ce temps, cuire un œuf au plat 3 minutes.', 'Poser l’œuf sur le croque.', 'Servir avec un peu de salade.'] },

  { n: 'Wrap poulet crudités', c: 'Rapide', k: 450, t: 10, m: [28, 40, 18], kw: 'froid, pique-nique',
    i: ['1 Galette de blé|Galettes de blé', '80 g Poulet cuit', '20 g Salade verte', '0.5 Tomate', '1 cs Fromage frais', 'Sel et poivre'],
    s: ['Étaler le fromage frais sur la galette.', 'Ajouter la salade, la tomate en rondelles et le poulet émincé.', 'Saler, poivrer et rouler bien serré.', 'Couper en deux et servir.'] },

  { n: 'Riz cantonais', c: 'Rapide', k: 520, t: 20, m: [20, 70, 16], kw: 'asiatique, restes, poêle',
    i: ['70 g Riz', '1 Œuf', '1 Tranche de jambon|Tranches de jambon', '40 g Petits pois', '1 cs Sauce soja', '1 cc Huile', 'Ciboulette'],
    s: ['Cuire le riz (ou utiliser un reste de riz froid).', 'Faire une omelette fine 2 minutes à la poêle, puis la couper en lanières.', 'Faire sauter le riz 5 minutes dans l’huile avec les petits pois et le jambon en dés.', 'Ajouter l’omelette, la sauce soja et la ciboulette.'] },

  { n: 'Œufs cocotte', c: 'Rapide', k: 280, t: 15, m: [16, 2, 23], kw: 'four, œuf, soir',
    i: ['2 Œuf', '30 ml Crème fraîche', '10 g Emmental râpé', 'Ciboulette', 'Sel et poivre'],
    s: ['Préchauffer le four à 180 °C.', 'Mettre une cuillère de crème au fond de chaque ramequin, casser un œuf dessus.', 'Ajouter le fromage, sel, poivre et ciboulette.', 'Cuire 10 minutes au bain-marie dans le four.'] },

  { n: 'Tagliatelles au saumon', c: 'Rapide', k: 640, t: 20, m: [30, 70, 26], kw: 'poisson, crème',
    i: ['100 g Tagliatelles', '60 g Saumon fumé', '50 ml Crème fraîche', '0.25 Citron', 'Aneth', 'Poivre'],
    s: ['Cuire les tagliatelles 8 minutes dans l’eau salée.', 'Couper le saumon fumé en lanières.', 'Chauffer la crème avec le zeste de citron et l’aneth 2 minutes.', 'Mélanger les pâtes, la crème et le saumon, poivrer et servir.'] },

  // ============================ VÉGÉTARIEN ============================
  { n: 'Curry de lentilles', c: 'Végétarien', k: 450, t: 30, m: [18, 62, 14], kw: 'indien, épicé',
    i: ['70 g Lentilles corail', '80 ml Lait de coco', '100 g Tomates concassées', '0.25 Oignon', '1 cc Curry', '0.5 cc Cumin', '0.5 cc Gingembre', '60 g Riz', 'Sel'],
    s: ['Rincer les lentilles et émincer l’oignon.', 'Faire revenir l’oignon 3 minutes, ajouter les épices, puis les lentilles, les tomates et le lait de coco.', 'Laisser mijoter 20 minutes en remuant de temps en temps.', 'Cuire le riz à côté et servir ensemble.'] },

  { n: 'Ratatouille', c: 'Végétarien', k: 220, t: 50, m: [5, 22, 12], kw: 'été, provençal',
    i: ['0.5 Courgette', '0.5 Aubergine', '0.5 Poivron', '150 g Tomates', '0.25 Oignon', '0.5 Gousse d’ail|Gousses d’ail', '1 cs Huile d’olive', '0.5 cc Herbes de Provence', 'Sel et poivre'],
    s: ['Couper tous les légumes en dés.', 'Faire revenir l’oignon, l’aubergine et le poivron 10 minutes dans l’huile d’olive.', 'Ajouter courgette, tomates, ail, herbes, sel et poivre.', 'Couvrir et laisser mijoter 30 minutes à feu doux.'] },

  { n: 'Chili sin carne', c: 'Végétarien', k: 480, t: 40, m: [18, 75, 10], kw: 'mexicain, épicé',
    i: ['100 g Haricots rouges', '40 g Maïs', '100 g Tomates concassées', '0.25 Oignon', '0.25 Poivron', '0.5 cc Cumin', '0.5 cc Paprika', '1 pincée Piment de Cayenne', '60 g Riz', '1 cc Huile d’olive', 'Sel'],
    s: ['Faire revenir l’oignon et le poivron 5 minutes dans l’huile.', 'Ajouter les épices, les tomates, les haricots et le maïs.', 'Saler et laisser mijoter 20 minutes.', 'Servir avec le riz.'] },

  { n: 'Gratin de courgettes', c: 'Végétarien', k: 300, t: 45, m: [14, 12, 22], kw: 'four, été',
    i: ['1 Courgette', '1 Œuf', '50 ml Crème fraîche', '25 g Emmental râpé', '1 pincée Muscade', 'Sel et poivre'],
    s: ['Préchauffer le four à 180 °C.', 'Couper les courgettes en rondelles et les faire revenir 8 minutes à la poêle.', 'Battre l’œuf avec la crème, la muscade, sel et poivre.', 'Mettre les courgettes dans un plat, verser le mélange, ajouter le fromage et cuire 25 minutes.'] },

  { n: 'Lasagnes aux légumes', c: 'Végétarien', k: 480, t: 70, m: [20, 50, 22], kw: 'italien, four',
    i: ['60 g Feuilles de lasagne', '0.5 Courgette', '0.25 Aubergine', '0.25 Poivron', '120 g Sauce tomate', '100 ml Béchamel', '30 g Mozzarella', '0.5 cc Origan', 'Sel et poivre'],
    s: ['Couper les légumes en dés et les faire revenir 10 minutes, puis ajouter la sauce tomate et l’origan.', 'Préchauffer le four à 180 °C.', 'Alterner feuilles, légumes et béchamel dans un plat, finir par la mozzarella.', 'Cuire 40 minutes.'] },

  { n: 'Dahl de pois chiches et épinards', c: 'Végétarien', k: 430, t: 30, m: [17, 55, 15], kw: 'indien, épicé',
    i: ['120 g Pois chiches', '60 g Épinards', '80 ml Lait de coco', '80 g Tomates concassées', '0.25 Oignon', '1 cc Garam masala', '0.5 cc Curcuma', '50 g Riz', 'Sel'],
    s: ['Faire revenir l’oignon émincé 3 minutes avec les épices.', 'Ajouter les tomates, le lait de coco et les pois chiches égouttés.', 'Laisser mijoter 15 minutes, puis ajouter les épinards 3 minutes.', 'Servir avec le riz.'] },

  { n: 'Quiche aux poireaux', c: 'Végétarien', k: 480, t: 55, m: [14, 32, 32], kw: 'four, tarte',
    i: ['0.25 Pâte brisée|Pâtes brisées', '150 g Poireaux', '1 Œuf', '50 ml Crème fraîche', '20 g Emmental râpé', '1 pincée Muscade', 'Sel et poivre'],
    s: ['Préchauffer le four à 180 °C et étaler la pâte dans un moule.', 'Émincer les poireaux et les faire fondre 10 minutes à la poêle.', 'Battre les œufs avec la crème, la muscade, sel et poivre.', 'Répartir les poireaux sur la pâte, verser le mélange, ajouter le fromage et cuire 35 minutes.'] },

  { n: 'Buddha bowl', c: 'Végétarien', k: 520, t: 35, m: [18, 60, 22], kw: 'bol, équilibré, frais',
    i: ['50 g Quinoa', '100 g Patate douce', '80 g Pois chiches', '0.5 Avocat', '30 g Chou rouge', '1 cs Huile d’olive', '0.5 cc Paprika', '1 cc Sauce soja', 'Sel'],
    s: ['Préchauffer le four à 200 °C et couper la patate douce en cubes.', 'Rôtir la patate douce et les pois chiches avec l’huile et le paprika 25 minutes.', 'Cuire le quinoa 12 minutes dans l’eau salée.', 'Disposer le tout dans un bol avec l’avocat et le chou émincé, puis arroser de sauce soja.'] },

  // ============================ DESSERTS ============================
  { n: 'Mousse au chocolat', c: 'Dessert', k: 310, t: 20, m: [7, 24, 21], kw: 'frigo, à l’avance, chocolat',
    i: ['40 g Chocolat noir', '1 Œuf', '5 g Sucre'],
    s: ['Faire fondre le chocolat au bain-marie ou au micro-ondes.', 'Séparer les blancs des jaunes, puis mélanger les jaunes au chocolat tiède.', 'Monter les blancs en neige ferme avec le sucre.', 'Incorporer délicatement les blancs au chocolat et laisser prendre au frais 3 heures.'] },

  { n: 'Crumble aux pommes', c: 'Dessert', k: 340, t: 45, m: [3, 50, 14], kw: 'four, automne, fruit',
    i: ['1 Pomme', '25 g Farine', '20 g Beurre', '20 g Sucre', '1 pincée Cannelle'],
    s: ['Préchauffer le four à 180 °C.', 'Éplucher les pommes, les couper en dés, les mettre dans un plat avec la cannelle.', 'Mélanger du bout des doigts la farine, le sucre et le beurre pour faire du sable.', 'Recouvrir les pommes et cuire 30 minutes jusqu’à ce que ce soit doré.'] },

  { n: 'Gâteau au yaourt', c: 'Dessert', k: 280, t: 50, m: [5, 40, 11], kw: 'four, goûter, enfants',
    i: ['30 g Yaourt nature', '40 g Farine', '30 g Sucre', '0.5 Œuf', '10 ml Huile', '1 g Levure chimique'],
    s: ['Préchauffer le four à 180 °C.', 'Mélanger le yaourt, le sucre et les œufs, puis la farine et la levure, et enfin l’huile.', 'Verser dans un moule beurré.', 'Cuire 35 minutes ; la lame d’un couteau doit ressortir sèche.'] },

  { n: 'Fondant au chocolat', c: 'Dessert', k: 420, t: 35, m: [6, 35, 29], kw: 'four, chocolat, goûter',
    i: ['40 g Chocolat noir', '25 g Beurre', '25 g Sucre', '0.5 Œuf', '10 g Farine'],
    s: ['Préchauffer le four à 180 °C.', 'Faire fondre le chocolat et le beurre ensemble.', 'Ajouter le sucre, puis les œufs un par un, puis la farine.', 'Verser dans un moule et cuire 20 minutes : le cœur doit rester fondant.'] },

  { n: 'Crêpes', c: 'Dessert', k: 300, t: 40, m: [9, 42, 10], kw: 'chandeleur, goûter, enfants',
    i: ['60 g Farine', '0.5 Œuf', '125 ml Lait', '5 g Sucre', '5 g Beurre', '1 pincée Sel'],
    s: ['Mettre la farine dans un saladier, ajouter le sucre, le sel et les œufs.', 'Verser le lait petit à petit en fouettant pour éviter les grumeaux, puis le beurre fondu.', 'Laisser reposer 30 minutes si possible.', 'Cuire les crêpes 1 minute de chaque côté dans une poêle chaude légèrement beurrée.'] },

  { n: 'Tarte aux pommes', c: 'Dessert', k: 330, t: 50, m: [3, 45, 15], kw: 'four, automne, fruit, tarte',
    i: ['0.17 Pâte brisée|Pâtes brisées', '1 Pomme', '10 g Sucre', '5 g Beurre', '1 pincée Cannelle'],
    s: ['Préchauffer le four à 200 °C et étaler la pâte dans un moule.', 'Éplucher les pommes et les couper en fines lamelles.', 'Les disposer en rosace sur la pâte, saupoudrer de sucre et de cannelle, ajouter quelques noisettes de beurre.', 'Cuire 35 minutes.'] },

  { n: 'Riz au lait', c: 'Dessert', k: 290, t: 45, m: [8, 48, 7], kw: 'tradition, vanille',
    i: ['30 g Riz rond', '250 ml Lait', '20 g Sucre', '0.25 Gousse de vanille|Gousses de vanille', '1 pincée Cannelle'],
    s: ['Faire chauffer le lait avec la vanille fendue.', 'Ajouter le riz et cuire 35 minutes à feu très doux en remuant souvent.', 'Ajouter le sucre en fin de cuisson.', 'Servir tiède ou froid, saupoudré de cannelle.'] },

  { n: 'Salade de fruits frais', c: 'Dessert', k: 140, t: 15, m: [2, 32, 1], kw: 'fruit, frais, léger',
    i: ['0.5 Pomme', '0.5 Banane', '0.5 Orange', '0.5 Kiwi', '1 cc Sucre', '0.25 Citron'],
    s: ['Éplucher et couper tous les fruits en morceaux.', 'Les mettre dans un saladier avec le jus de citron et le sucre.', 'Mélanger délicatement.', 'Laisser au frais 30 minutes avant de servir.'] },

  { n: 'Clafoutis aux cerises', c: 'Dessert', k: 260, t: 50, m: [7, 38, 9], kw: 'four, été, fruit',
    i: ['100 g Cerises', '0.5 Œuf', '20 g Farine', '20 g Sucre', '60 ml Lait', '5 g Beurre'],
    s: ['Préchauffer le four à 180 °C et beurrer un plat.', 'Répartir les cerises dans le plat.', 'Fouetter les œufs avec le sucre, puis la farine et le lait.', 'Verser sur les cerises et cuire 35 minutes.'] },

  // ===================== LOT 2 =====================
  { n: 'Poulet basquaise', c: 'Plat', k: 540, t: 60, m: [38, 45, 20], kw: 'mijoté, poivron, riz',
    i: ['1 Cuisse de poulet', '0.5 Poivron', '100 g Tomates concassées', '0.25 Oignon', '0.5 Gousse d’ail|Gousses d’ail', '0.5 cc Piment d’Espelette', '60 g Riz', '1 cs Huile d’olive', 'Sel'],
    s: ['Dorer le poulet dans l’huile dans une cocotte, puis le réserver.', 'Faire revenir l’oignon, l’ail et les poivrons en lanières 10 minutes.', 'Ajouter les tomates, le piment d’Espelette, le sel et remettre le poulet.', 'Couvrir et laisser mijoter 35 minutes ; servir avec le riz.'] },

  { n: 'Poulet à la moutarde', c: 'Plat', k: 520, t: 35, m: [38, 40, 20], kw: 'sauce, crème, rapide',
    i: ['150 g Blanc de poulet', '1 cs Moutarde', '50 ml Crème fraîche', '0.25 Oignon', '80 g Pâtes', '1 cc Huile d’olive', 'Sel et poivre'],
    s: ['Couper le poulet en morceaux et le dorer 6 minutes dans l’huile avec l’oignon émincé.', 'Ajouter la crème et la moutarde, saler, poivrer.', 'Laisser mijoter 10 minutes à feu doux.', 'Servir avec les pâtes cuites.'] },

  { n: 'Poulet tikka masala', c: 'Plat', k: 600, t: 45, m: [38, 55, 24], kw: 'indien, épicé, riz',
    i: ['150 g Blanc de poulet', '30 g Yaourt nature', '100 g Tomates concassées', '40 ml Crème fraîche', '0.25 Oignon', '0.5 Gousse d’ail|Gousses d’ail', '1 cc Garam masala', '0.5 cc Paprika', '0.5 cc Gingembre', '70 g Riz basmati', '1 cc Huile', 'Sel'],
    s: ['Mélanger le poulet en morceaux avec le yaourt et la moitié des épices, laisser 15 minutes.', 'Faire revenir l’oignon et l’ail dans l’huile, ajouter le reste des épices.', 'Ajouter le poulet et le dorer 5 minutes, puis les tomates, et cuire 15 minutes.', 'Ajouter la crème, saler et servir avec le riz basmati.'] },

  { n: 'Tajine de poulet aux citrons confits', c: 'Plat', k: 560, t: 70, m: [38, 30, 30], kw: 'oriental, mijoté, épicé',
    i: ['1 Cuisse de poulet', '0.25 Citron confit|Citrons confits', '20 g Olives vertes', '0.5 Oignon', '0.5 cc Gingembre', '0.5 cc Curcuma', '1 pincée Safran', '60 g Semoule', 'Coriandre fraîche', '1 cs Huile d’olive', 'Sel et poivre'],
    s: ['Faire dorer le poulet dans l’huile avec l’oignon émincé.', 'Ajouter les épices, un verre d’eau, saler et poivrer.', 'Couvrir et cuire 45 minutes à feu doux, puis ajouter le citron confit et les olives 10 minutes.', 'Parsemer de coriandre et servir avec la semoule.'] },

  { n: 'Rôti de porc aux pommes de terre', c: 'Plat', k: 560, t: 75, m: [36, 40, 26], kw: 'four, dimanche, famille',
    i: ['150 g Rôti de porc', '200 g Pommes de terre', '0.25 Oignon', '0.5 Gousse d’ail|Gousses d’ail', '0.5 cc Thym', '1 cs Huile d’olive', 'Sel et poivre'],
    s: ['Préchauffer le four à 180 °C.', 'Mettre le rôti dans un plat avec l’huile, l’ail, le thym, sel et poivre.', 'Ajouter autour les pommes de terre et l’oignon coupés en morceaux.', 'Cuire 60 minutes en arrosant de temps en temps.'] },

  { n: 'Porc au caramel', c: 'Plat', k: 580, t: 45, m: [30, 65, 22], kw: 'asiatique, sucré salé, riz',
    i: ['150 g Échine de porc', '1 cs Sucre', '1 cs Sauce soja', '1 cs Nuoc-mâm', '0.25 Oignon', '0.5 Gousse d’ail|Gousses d’ail', '70 g Riz', 'Poivre'],
    s: ['Couper le porc en cubes.', 'Faire un caramel avec le sucre et 1 cuillère d’eau, puis ajouter le porc, l’oignon et l’ail.', 'Ajouter la sauce soja, le nuoc-mâm, un peu d’eau et cuire 30 minutes à feu doux.', 'Poivrer et servir avec le riz.'] },

  { n: 'Côtes de porc et haricots verts', c: 'Rapide', k: 450, t: 25, m: [34, 10, 30], kw: 'poêle, simple',
    i: ['1 Côte de porc|Côtes de porc', '150 g Haricots verts', '10 g Beurre', '0.5 Gousse d’ail|Gousses d’ail', 'Persil', 'Sel et poivre'],
    s: ['Cuire les haricots verts 10 minutes dans l’eau salée.', 'Cuire les côtes de porc 5 minutes de chaque côté à la poêle.', 'Faire sauter les haricots 3 minutes dans le beurre avec l’ail et le persil.', 'Saler, poivrer et servir.'] },

  { n: 'Pot-au-feu', c: 'Plat', k: 520, t: 210, m: [40, 30, 24], kw: 'hiver, tradition, mijoté, bouillon',
    i: ['200 g Bœuf à pot-au-feu', '150 g Carottes', '100 g Poireaux', '0.5 Navet', '150 g Pommes de terre', '0.25 Oignon', '1 Clou de girofle|Clous de girofle', '1 Feuille de laurier|Feuilles de laurier', '0.5 cc Thym', 'Gros sel', 'Poivre'],
    s: ['Mettre la viande dans une grande marmite d’eau froide, porter à ébullition et écumer.', 'Ajouter l’oignon piqué du clou de girofle, le thym, le laurier et le gros sel, puis cuire 2 heures à feu doux.', 'Ajouter carottes, poireaux et navets et cuire 45 minutes.', 'Ajouter les pommes de terre 30 minutes avant la fin ; servir avec moutarde et cornichons.'] },

  { n: 'Carbonade flamande', c: 'Plat', k: 620, t: 180, m: [40, 30, 32], kw: 'mijoté, hiver, nord, bière',
    i: ['180 g Bœuf à braiser', '0.5 Oignon', '150 ml Bière brune', '1 Tranche de pain d’épices|Tranches de pain d’épices', '1 cc Moutarde', '1 cc Cassonade', '1 Feuille de laurier|Feuilles de laurier', '0.5 cc Thym', '10 g Beurre', 'Sel et poivre'],
    s: ['Faire dorer la viande en morceaux dans le beurre, puis les oignons émincés.', 'Ajouter la bière, la cassonade, le thym, le laurier, sel et poivre.', 'Tartiner le pain d’épices de moutarde et le poser sur le dessus.', 'Couvrir et laisser mijoter 2 h 30 à feu très doux ; servir avec des frites ou des pommes vapeur.'] },

  { n: 'Boulettes de bœuf sauce tomate', c: 'Plat', k: 610, t: 40, m: [32, 60, 24], kw: 'enfants, italien',
    i: ['120 g Bœuf haché', '0.25 Œuf', '10 g Chapelure', '120 g Sauce tomate', '0.25 Oignon', '0.5 cc Origan', '80 g Spaghetti', '1 cc Huile d’olive', 'Sel et poivre'],
    s: ['Mélanger la viande avec l’œuf, la chapelure, sel et poivre, puis former des boulettes.', 'Les dorer 5 minutes dans l’huile avec l’oignon émincé.', 'Ajouter la sauce tomate et l’origan et laisser mijoter 20 minutes.', 'Servir sur les spaghetti cuits.'] },

  { n: 'Gratin de pâtes au jambon', c: 'Plat', k: 650, t: 35, m: [30, 70, 26], kw: 'four, enfants, gratin',
    i: ['100 g Pâtes', '1 Tranche de jambon|Tranches de jambon', '80 ml Béchamel', '30 g Emmental râpé', '1 pincée Muscade', 'Sel et poivre'],
    s: ['Préchauffer le four à 200 °C et cuire les pâtes 8 minutes.', 'Couper le jambon en dés.', 'Mélanger pâtes, jambon, béchamel, muscade, sel et poivre dans un plat.', 'Couvrir de fromage et gratiner 15 minutes.'] },

  { n: 'Endives au jambon', c: 'Plat', k: 480, t: 60, m: [26, 18, 32], kw: 'four, hiver, gratin, nord',
    i: ['2 Endive', '2 Tranche de jambon|Tranches de jambon', '100 ml Béchamel', '25 g Emmental râpé', '1 pincée Muscade', 'Sel et poivre'],
    s: ['Cuire les endives 20 minutes dans l’eau salée, puis bien les égoutter en les pressant.', 'Préchauffer le four à 200 °C.', 'Rouler chaque endive dans une tranche de jambon et les ranger dans un plat.', 'Napper de béchamel à la muscade, couvrir de fromage et gratiner 25 minutes.'] },

  { n: 'Raclette', c: 'Plat', k: 850, t: 30, m: [38, 45, 55], kw: 'fromage, hiver, montagne, convivial',
    i: ['200 g Pommes de terre', '150 g Fromage à raclette', '60 g Charcuterie', '5 Cornichon', 'Poivre'],
    s: ['Cuire les pommes de terre avec la peau 25 minutes à la vapeur ou à l’eau.', 'Disposer la charcuterie et les cornichons sur un plat.', 'Faire fondre le fromage dans l’appareil à raclette.', 'Verser le fromage fondu sur les pommes de terre et poivrer.'] },

  { n: 'Croziflette', c: 'Plat', k: 760, t: 40, m: [30, 65, 40], kw: 'savoie, fromage, hiver',
    i: ['90 g Crozets', '50 g Lardons', '0.25 Oignon', '0.25 Reblochon|Reblochons', '30 ml Crème fraîche', 'Poivre'],
    s: ['Cuire les crozets 15 minutes dans l’eau salée.', 'Faire revenir l’oignon et les lardons 5 minutes.', 'Mélanger crozets, lardons, oignon et crème dans un plat et couvrir de reblochon.', 'Gratiner 15 minutes au four à 200 °C.'] },

  { n: 'Saumon en croûte d’herbes', c: 'Plat', k: 500, t: 30, m: [32, 30, 28], kw: 'poisson, four',
    i: ['1 Pavé de saumon', '15 g Chapelure', '10 g Beurre', 'Persil', 'Aneth', '0.25 Citron', '150 g Pommes de terre', 'Sel et poivre'],
    s: ['Préchauffer le four à 200 °C et cuire les pommes de terre 20 minutes à l’eau.', 'Mélanger la chapelure, le beurre mou, les herbes hachées et le zeste de citron.', 'Étaler ce mélange sur les pavés de saumon.', 'Cuire 12 minutes au four et servir avec les pommes de terre.'] },

  { n: 'Brandade de morue', c: 'Plat', k: 520, t: 60, m: [30, 40, 26], kw: 'poisson, four, provençal',
    i: ['120 g Morue dessalée', '200 g Pommes de terre', '60 ml Lait', '1 cs Huile d’olive', '0.5 Gousse d’ail|Gousses d’ail', 'Poivre'],
    s: ['Pocher la morue 10 minutes dans le lait frémissant, puis l’émietter.', 'Cuire les pommes de terre 20 minutes et les écraser.', 'Mélanger purée, morue, ail, huile et un peu de lait de cuisson.', 'Mettre dans un plat et gratiner 15 minutes au four à 200 °C.'] },

  { n: 'Colin pané et purée', c: 'Rapide', k: 480, t: 30, m: [28, 50, 18], kw: 'poisson, enfants',
    i: ['1 Filet de colin|Filets de colin', '15 g Chapelure', '0.25 Œuf', '200 g Pommes de terre', '50 ml Lait', '10 g Beurre', '1 cs Huile', 'Sel et poivre'],
    s: ['Cuire les pommes de terre 20 minutes et les écraser avec le lait chaud et le beurre.', 'Passer les filets dans l’œuf battu puis dans la chapelure.', 'Les cuire 3 minutes de chaque côté dans l’huile chaude.', 'Servir avec la purée et un quartier de citron.'] },

  { n: 'Crevettes sautées à l’ail', c: 'Rapide', k: 420, t: 15, m: [26, 45, 14], kw: 'fruits de mer, poêle, asiatique',
    i: ['120 g Crevettes', '1 Gousse d’ail|Gousses d’ail', '70 g Riz', '1 cs Sauce soja', '0.5 cc Gingembre', 'Persil', '1 cs Huile', 'Poivre'],
    s: ['Lancer la cuisson du riz.', 'Faire chauffer l’huile et y faire revenir l’ail haché et le gingembre 1 minute.', 'Ajouter les crevettes et les cuire 4 minutes.', 'Ajouter la sauce soja et le persil, poivrer et servir avec le riz.'] },

  { n: 'Gnocchis à la tomate et mozzarella', c: 'Végétarien', k: 520, t: 25, m: [16, 75, 16], kw: 'italien, four, gratin',
    i: ['150 g Gnocchis', '120 g Sauce tomate', '50 g Mozzarella', '0.5 cc Basilic', 'Sel et poivre'],
    s: ['Préchauffer le four à 200 °C.', 'Faire dorer les gnocchis 5 minutes à la poêle.', 'Les mettre dans un plat avec la sauce tomate et le basilic.', 'Couvrir de mozzarella et gratiner 12 minutes.'] },

  { n: 'Shakshuka', c: 'Végétarien', k: 330, t: 30, m: [16, 18, 20], kw: 'œuf, épicé, oriental, poêle',
    i: ['2 Œuf', '150 g Tomates concassées', '0.5 Poivron', '0.25 Oignon', '0.5 cc Cumin', '0.5 cc Paprika', '1 cs Huile d’olive', 'Coriandre fraîche', 'Sel et poivre'],
    s: ['Faire revenir l’oignon et le poivron 8 minutes dans l’huile.', 'Ajouter les épices et les tomates, puis cuire 10 minutes.', 'Creuser des puits et y casser les œufs.', 'Couvrir et cuire 6 minutes, puis parsemer de coriandre.'] },

  { n: 'Tarte à la tomate et moutarde', c: 'Végétarien', k: 430, t: 45, m: [10, 30, 30], kw: 'four, tarte, été',
    i: ['0.25 Pâte brisée|Pâtes brisées', '1 Tomate', '1 cs Moutarde', '20 g Emmental râpé', '0.5 cc Herbes de Provence', '1 cc Huile d’olive', 'Sel et poivre'],
    s: ['Préchauffer le four à 200 °C et étaler la pâte dans un moule.', 'Tartiner le fond de moutarde et parsemer de fromage.', 'Disposer les tomates en rondelles, ajouter les herbes, l’huile, sel et poivre.', 'Cuire 30 minutes.'] },

  { n: 'Galettes de légumes', c: 'Végétarien', k: 360, t: 30, m: [12, 30, 20], kw: 'poêle, enfants, restes',
    i: ['1 Courgette', '0.5 Carotte', '0.5 Œuf', '20 g Farine', '15 g Emmental râpé', '1 cs Huile', 'Sel et poivre'],
    s: ['Râper la courgette et la carotte, puis presser pour enlever l’eau.', 'Mélanger avec l’œuf, la farine, le fromage, sel et poivre.', 'Former des galettes et les cuire 4 minutes de chaque côté dans l’huile chaude.', 'Servir avec une salade ou du yaourt.'] },

  { n: 'Soupe de potimarron au lait de coco', c: 'Léger', k: 240, t: 35, m: [3, 22, 15], kw: 'automne, soupe, mixé, épicé',
    i: ['250 g Potimarron', '50 ml Lait de coco', '0.25 Oignon', '0.5 cc Curry', '200 ml Bouillon de légumes', 'Sel'],
    s: ['Laver le potimarron (pas besoin de l’éplucher) et le couper en cubes.', 'Faire revenir l’oignon avec le curry, ajouter le potimarron et le bouillon.', 'Cuire 25 minutes.', 'Mixer avec le lait de coco et saler.'] },

  { n: 'Soupe à l’oignon gratinée', c: 'Léger', k: 380, t: 50, m: [14, 35, 20], kw: 'hiver, soupe, fromage, tradition',
    i: ['1 Oignon', '250 ml Bouillon de bœuf', '10 g Beurre', '1 cc Farine', '2 Tranche de baguette|Tranches de baguette', '25 g Emmental râpé', 'Sel et poivre'],
    s: ['Émincer les oignons et les faire dorer 20 minutes dans le beurre à feu doux.', 'Saupoudrer de farine, mélanger, puis verser le bouillon et cuire 15 minutes.', 'Verser dans des bols allant au four, poser le pain et le fromage.', 'Gratiner 5 minutes sous le grill.'] },

  { n: 'Minestrone', c: 'Léger', k: 290, t: 45, m: [11, 45, 7], kw: 'italien, soupe, légumes',
    i: ['0.5 Carotte', '0.5 Courgette', '50 g Haricots blancs', '80 g Tomates concassées', '20 g Petites pâtes', '0.25 Oignon', '250 ml Bouillon de légumes', '0.5 cc Basilic', '1 cc Huile d’olive', 'Sel et poivre'],
    s: ['Couper tous les légumes en petits dés.', 'Les faire revenir 5 minutes dans l’huile avec l’oignon.', 'Ajouter tomates, bouillon et basilic, puis cuire 20 minutes.', 'Ajouter les pâtes et les haricots et cuire encore 10 minutes.'] },

  { n: 'Salade César', c: 'Léger', k: 450, t: 25, m: [32, 18, 28], kw: 'salade, poulet, froid',
    i: ['100 g Blanc de poulet', '60 g Salade romaine', '1 Tranche de pain|Tranches de pain', '15 g Parmesan', '1 cs Mayonnaise', '0.5 cc Moutarde', '0.25 Citron', 'Sel et poivre'],
    s: ['Cuire le poulet 10 minutes à la poêle, puis le couper en lanières.', 'Couper le pain en dés et le dorer 3 minutes à la poêle.', 'Mélanger la mayonnaise, la moutarde et le jus de citron pour la sauce.', 'Mélanger la salade avec la sauce, puis ajouter poulet, croûtons et copeaux de parmesan.'] },

  { n: 'Salade de pâtes', c: 'Léger', k: 480, t: 20, m: [16, 60, 18], kw: 'été, froid, pique-nique, pâtes',
    i: ['80 g Pâtes', '30 g Mozzarella', '5 Tomate cerise|Tomates cerises', '0.25 Poivron', '10 g Olives', '1 cs Huile d’olive', '0.5 cc Basilic', 'Sel et poivre'],
    s: ['Cuire les pâtes 10 minutes, les rincer à l’eau froide et les égoutter.', 'Couper les tomates, le poivron et la mozzarella en petits morceaux.', 'Mélanger le tout avec les olives, l’huile et le basilic.', 'Saler, poivrer et garder au frais.'] },

  { n: 'Taboulé de quinoa', c: 'Léger', k: 340, t: 25, m: [10, 40, 15], kw: 'froid, salade, végétarien',
    i: ['50 g Quinoa', '0.5 Tomate', '0.25 Concombre', '30 g Feta', 'Menthe fraîche', '0.25 Citron', '1 cs Huile d’olive', 'Sel et poivre'],
    s: ['Cuire le quinoa 12 minutes dans l’eau salée, puis le rincer et le laisser refroidir.', 'Couper la tomate, le concombre et la feta en dés.', 'Mélanger avec la menthe, le jus de citron et l’huile.', 'Saler, poivrer et servir frais.'] },

  { n: 'Croque végétarien', c: 'Rapide', k: 430, t: 15, m: [18, 38, 22], kw: 'four, végétarien',
    i: ['2 Tranche de pain de mie|Tranches de pain de mie', '0.5 Tomate', '30 g Mozzarella', '1 cc Pesto'],
    s: ['Préchauffer le four à 200 °C.', 'Tartiner le pain de pesto.', 'Garnir de rondelles de tomate et de mozzarella, puis refermer.', 'Cuire 10 minutes.'] },

  { n: 'Quesadillas', c: 'Rapide', k: 520, t: 15, m: [24, 45, 26], kw: 'mexicain, poêle, enfants',
    i: ['2 Galette de blé|Galettes de blé', '40 g Cheddar', '50 g Poulet cuit', '30 g Maïs', '0.25 cc Paprika'],
    s: ['Garnir une galette de fromage, de poulet, de maïs et de paprika.', 'Recouvrir avec la deuxième galette.', 'Cuire 3 minutes de chaque côté dans une poêle sèche.', 'Couper en parts et servir.'] },

  { n: 'Hot-dog maison', c: 'Rapide', k: 520, t: 15, m: [18, 45, 28], kw: 'enfants, four',
    i: ['1 Pain à hot-dog|Pains à hot-dog', '1 Saucisse de Strasbourg|Saucisses de Strasbourg', '15 g Emmental râpé', '1 cc Moutarde', '1 cc Ketchup'],
    s: ['Préchauffer le four à 200 °C.', 'Chauffer les saucisses 5 minutes dans l’eau frémissante.', 'Ouvrir le pain, ajouter moutarde, saucisse et fromage.', 'Passer 5 minutes au four et ajouter le ketchup.'] },

  { n: 'Nouilles sautées aux légumes', c: 'Rapide', k: 480, t: 20, m: [14, 70, 15], kw: 'asiatique, poêle, wok',
    i: ['80 g Nouilles chinoises', '0.5 Carotte', '0.25 Poivron', '50 g Chou chinois', '1 cs Sauce soja', '0.5 cc Gingembre', '1 cc Huile de sésame', '1 cc Graines de sésame'],
    s: ['Cuire les nouilles 4 minutes et les égoutter.', 'Couper les légumes en fines lanières.', 'Les faire sauter 5 minutes à feu vif dans l’huile avec le gingembre.', 'Ajouter les nouilles et la sauce soja, mélanger 2 minutes et parsemer de sésame.'] },

  { n: 'Œufs brouillés et toasts', c: 'Rapide', k: 380, t: 10, m: [18, 25, 22], kw: 'œuf, soir, brunch',
    i: ['2 Œuf', '10 g Beurre', '1 Tranche de pain|Tranches de pain', 'Ciboulette', 'Sel et poivre'],
    s: ['Battre les œufs avec sel et poivre.', 'Les cuire 3 minutes à feu doux dans le beurre en remuant sans arrêt.', 'Griller le pain.', 'Servir les œufs sur le pain avec la ciboulette.'] },

  { n: 'Velouté de champignons', c: 'Léger', k: 200, t: 30, m: [5, 10, 15], kw: 'automne, soupe, mixé',
    i: ['150 g Champignons', '0.25 Oignon', '200 ml Bouillon de légumes', '30 ml Crème fraîche', '5 g Beurre', 'Sel et poivre'],
    s: ['Faire revenir l’oignon et les champignons émincés 8 minutes dans le beurre.', 'Ajouter le bouillon et cuire 15 minutes.', 'Mixer avec la crème.', 'Saler et poivrer.'] },

  { n: 'Purée de patate douce et poulet', c: 'Léger', k: 430, t: 35, m: [32, 40, 12], kw: 'équilibré, enfants',
    i: ['120 g Blanc de poulet', '200 g Patate douce', '30 ml Lait', '0.5 cc Paprika', '1 cc Huile d’olive', 'Sel et poivre'],
    s: ['Éplucher la patate douce, la couper et la cuire 20 minutes à l’eau.', 'L’écraser avec le lait chaud, saler et poivrer.', 'Saupoudrer le poulet de paprika et le cuire 6 minutes de chaque côté dans l’huile.', 'Servir le poulet tranché sur la purée.'] },

  // ---- Desserts ----
  { n: 'Cookies aux pépites de chocolat', c: 'Dessert', k: 260, t: 25, m: [3, 32, 13], kw: 'goûter, enfants, chocolat',
    i: ['30 g Farine', '15 g Beurre', '15 g Sucre', '0.25 Œuf', '15 g Pépites de chocolat', '1 g Levure chimique'],
    s: ['Préchauffer le four à 180 °C.', 'Mélanger le beurre mou et le sucre, puis l’œuf, la farine, la levure et les pépites.', 'Former des petites boules sur une plaque.', 'Cuire 10 minutes : ils durcissent en refroidissant.'] },

  { n: 'Brownie', c: 'Dessert', k: 380, t: 40, m: [5, 38, 23], kw: 'chocolat, goûter, four',
    i: ['35 g Chocolat noir', '25 g Beurre', '30 g Sucre', '0.5 Œuf', '12 g Farine', '10 g Noix'],
    s: ['Préchauffer le four à 180 °C.', 'Faire fondre le chocolat et le beurre ensemble.', 'Ajouter le sucre, les œufs, la farine et les noix concassées.', 'Verser dans un moule carré et cuire 20 minutes.'] },

  { n: 'Panna cotta aux fruits rouges', c: 'Dessert', k: 300, t: 20, m: [3, 22, 22], kw: 'italien, frigo, à l’avance, fruit',
    i: ['80 ml Crème liquide', '20 ml Lait', '12 g Sucre', '0.5 Feuille de gélatine|Feuilles de gélatine', '40 g Fruits rouges', '1 pincée Vanille en poudre'],
    s: ['Faire tremper la gélatine 5 minutes dans l’eau froide.', 'Chauffer la crème, le lait, le sucre et la vanille sans faire bouillir.', 'Hors du feu, ajouter la gélatine essorée, mélanger et verser dans des verrines.', 'Laisser prendre au frais 4 heures et servir avec les fruits rouges.'] },

  { n: 'Tiramisu', c: 'Dessert', k: 420, t: 30, m: [8, 35, 27], kw: 'italien, frigo, à l’avance, café',
    i: ['60 g Mascarpone', '0.5 Œuf', '15 g Sucre', '4 Biscuit à la cuillère|Biscuits à la cuillère', '60 ml Café', '1 cc Cacao en poudre'],
    s: ['Séparer les blancs des jaunes ; fouetter les jaunes avec le sucre puis le mascarpone.', 'Monter les blancs en neige et les incorporer délicatement.', 'Tremper rapidement les biscuits dans le café et alterner couches de biscuits et de crème.', 'Saupoudrer de cacao et laisser au frais 6 heures.'] },

  { n: 'Crème brûlée', c: 'Dessert', k: 380, t: 60, m: [5, 22, 30], kw: 'four, frigo, vanille',
    i: ['100 ml Crème liquide', '1 Jaune d’œuf|Jaunes d’œufs', '20 g Sucre', '1 pincée Vanille en poudre', '1 cc Cassonade'],
    s: ['Préchauffer le four à 100 °C.', 'Fouetter les jaunes avec le sucre et la vanille, puis ajouter la crème.', 'Verser dans des ramequins et cuire 50 minutes ; laisser refroidir au frais.', 'Au moment de servir, saupoudrer de cassonade et caraméliser au chalumeau ou sous le grill.'] },

  { n: 'Far breton', c: 'Dessert', k: 320, t: 60, m: [8, 45, 11], kw: 'bretagne, four, tradition',
    i: ['30 g Farine', '0.5 Œuf', '125 ml Lait', '20 g Sucre', '5 g Beurre', '30 g Pruneaux'],
    s: ['Préchauffer le four à 200 °C et beurrer un plat.', 'Mélanger la farine et le sucre, puis les œufs, puis le lait petit à petit.', 'Répartir les pruneaux dans le plat et verser la pâte.', 'Cuire 45 minutes jusqu’à ce que le dessus soit bien doré.'] },

  { n: 'Banana bread', c: 'Dessert', k: 300, t: 60, m: [5, 45, 11], kw: 'goûter, anti-gaspi, fruit',
    i: ['0.5 Banane', '30 g Farine', '15 g Sucre', '10 g Beurre', '0.25 Œuf', '1 g Levure chimique', '1 pincée Cannelle'],
    s: ['Préchauffer le four à 180 °C.', 'Écraser les bananes bien mûres à la fourchette.', 'Ajouter le beurre fondu, le sucre, l’œuf, puis la farine, la levure et la cannelle.', 'Verser dans un moule à cake et cuire 45 minutes.'] },

  { n: 'Compote de pommes maison', c: 'Dessert', k: 110, t: 25, m: [0, 27, 0], kw: 'fruit, enfants, léger',
    i: ['2 Pomme', '1 cc Sucre', '1 pincée Cannelle'],
    s: ['Éplucher les pommes et les couper en morceaux.', 'Les mettre dans une casserole avec un fond d’eau, le sucre et la cannelle.', 'Cuire 15 minutes à feu doux en remuant.', 'Écraser à la fourchette ou mixer.'] },

  { n: 'Gaufres', c: 'Dessert', k: 330, t: 30, m: [8, 42, 14], kw: 'goûter, enfants',
    i: ['60 g Farine', '0.5 Œuf', '100 ml Lait', '10 g Sucre', '15 g Beurre', '1 g Levure chimique', '1 pincée Sel'],
    s: ['Mélanger la farine, la levure, le sucre et le sel.', 'Ajouter les œufs, puis le lait petit à petit et le beurre fondu.', 'Laisser reposer 15 minutes.', 'Cuire dans le gaufrier chaud environ 3 minutes par gaufre.'] },
  // ===================== LOT 3 =====================
  { n: 'Poulet Gaston Gérard', c: 'Plat', k: 610, t: 50, m: [45, 30, 34], kw: 'bourgogne, dijon, four, tradition, fromage',
    i: ['1 Cuisse de poulet', '30 g Comté râpé', '1 cs Moutarde de Dijon', '60 ml Crème fraîche', '40 ml Vin blanc', '0.5 cc Paprika', '10 g Chapelure', '10 g Beurre', '70 g Riz', 'Sel et poivre'],
    s: ['Préchauffer le four à 200 °C.', 'Faire dorer les morceaux de poulet 10 minutes dans le beurre, puis les mettre dans un plat allant au four.', 'Verser le vin blanc dans la poêle, gratter les sucs, puis ajouter la crème, la moutarde, la moitié du comté et le paprika ; saler et poivrer.', 'Napper le poulet de cette sauce, parsemer du reste de comté et de la chapelure, puis cuire 25 minutes ; servir avec le riz.'] },

  { n: 'Coq au vin', c: 'Plat', k: 640, t: 150, m: [42, 15, 38], kw: 'bourgogne, mijoté, vin, tradition, dimanche',
    i: ['1 Cuisse de poulet', '40 g Lardons', '60 g Champignons', '0.25 Oignon', '150 ml Vin rouge', '1 cc Farine', '0.5 Gousse d’ail|Gousses d’ail', '1 Feuille de laurier|Feuilles de laurier', '0.5 cc Thym', '10 g Beurre', '150 g Pommes de terre', 'Sel et poivre'],
    s: ['Faire dorer le poulet dans le beurre, puis ajouter les lardons et l’oignon émincé 5 minutes.', 'Saupoudrer de farine, mélanger, puis verser le vin, ajouter l’ail, le thym et le laurier.', 'Couvrir et laisser mijoter 1 h 30 à feu doux, en ajoutant les champignons 20 minutes avant la fin.', 'Servir avec des pommes de terre vapeur.'] },

  { n: 'Poulet vallée d’Auge', c: 'Plat', k: 620, t: 50, m: [40, 25, 38], kw: 'normandie, cidre, crème, champignons',
    i: ['1 Cuisse de poulet', '100 ml Cidre', '60 ml Crème fraîche', '60 g Champignons', '0.25 Oignon', '0.5 Pomme', '10 g Beurre', '70 g Riz', 'Sel et poivre'],
    s: ['Faire dorer le poulet dans le beurre avec l’oignon émincé.', 'Verser le cidre, couvrir et cuire 25 minutes à feu doux.', 'Ajouter les champignons et la pomme en quartiers, puis cuire 10 minutes.', 'Ajouter la crème, laisser réduire 5 minutes, saler, poivrer et servir avec le riz.'] },

  { n: 'Poulet yassa', c: 'Plat', k: 560, t: 60, m: [38, 55, 20], kw: 'sénégal, africain, citron, oignon, riz',
    i: ['1 Cuisse de poulet', '1 Oignon', '0.5 Citron', '1 cc Moutarde', '0.5 Gousse d’ail|Gousses d’ail', '1 pincée Piment de Cayenne', '70 g Riz', '1 cs Huile', 'Sel et poivre'],
    s: ['Faire mariner le poulet au moins 30 minutes avec le jus de citron, la moutarde, l’ail, le piment, sel et poivre.', 'Faire dorer le poulet dans l’huile, puis le réserver.', 'Faire fondre les oignons émincés 15 minutes dans la même cocotte avec la marinade.', 'Remettre le poulet, ajouter un peu d’eau et cuire 25 minutes ; servir avec le riz.'] },

  { n: 'Colombo de poulet', c: 'Plat', k: 580, t: 55, m: [38, 55, 20], kw: 'antilles, épicé, riz',
    i: ['1 Cuisse de poulet', '1 cc Poudre de colombo', '0.5 Courgette', '100 g Pommes de terre', '0.25 Oignon', '0.5 Gousse d’ail|Gousses d’ail', '60 g Riz', '0.25 Citron vert', '1 cs Huile', 'Sel'],
    s: ['Faire dorer le poulet dans l’huile avec l’oignon et l’ail.', 'Ajouter la poudre de colombo, puis les pommes de terre en dés et un verre d’eau.', 'Couvrir et cuire 25 minutes, puis ajouter la courgette et cuire 10 minutes.', 'Arroser de jus de citron vert et servir avec le riz.'] },

  { n: 'Mafé de poulet', c: 'Plat', k: 690, t: 60, m: [42, 55, 32], kw: 'africain, arachide, mijoté',
    i: ['150 g Blanc de poulet', '30 g Beurre de cacahuète', '80 g Tomates concassées', '0.5 Carotte', '0.25 Oignon', '100 g Patate douce', '60 g Riz', '1 cs Huile', '1 pincée Piment de Cayenne', 'Sel'],
    s: ['Faire dorer le poulet en morceaux et l’oignon dans l’huile.', 'Ajouter les tomates, les carottes, la patate douce en cubes et un verre d’eau.', 'Délayer le beurre de cacahuète dans un peu de sauce, l’ajouter avec le piment et le sel.', 'Laisser mijoter 35 minutes et servir avec le riz.'] },

  { n: 'Rougail saucisses', c: 'Plat', k: 680, t: 50, m: [28, 55, 38], kw: 'réunion, épicé, riz',
    i: ['1 Saucisse de Toulouse|Saucisses de Toulouse', '150 g Tomates', '0.25 Oignon', '0.5 Gousse d’ail|Gousses d’ail', '0.5 cc Curcuma', '0.5 cc Gingembre', '1 pincée Piment de Cayenne', '70 g Riz', 'Sel'],
    s: ['Couper les saucisses en rondelles et les faire dorer 10 minutes.', 'Ajouter l’oignon, l’ail, le gingembre et le curcuma, et cuire 3 minutes.', 'Ajouter les tomates en dés et le piment, puis laisser mijoter 25 minutes.', 'Servir avec le riz blanc.'] },

  { n: 'Choucroute garnie', c: 'Plat', k: 720, t: 90, m: [34, 30, 50], kw: 'alsace, hiver, charcuterie',
    i: ['200 g Choucroute crue', '1 Saucisse de Strasbourg|Saucisses de Strasbourg', '80 g Lard fumé', '1 Saucisse de Montbéliard|Saucisses de Montbéliard', '150 g Pommes de terre', '50 ml Vin blanc', '3 Baie de genièvre|Baies de genièvre', '1 Feuille de laurier|Feuilles de laurier', 'Poivre'],
    s: ['Rincer la choucroute et la mettre dans une cocotte avec le vin blanc, le genièvre et le laurier.', 'Ajouter le lard et la saucisse de Montbéliard, couvrir et cuire 1 heure à feu doux.', 'Ajouter les pommes de terre épluchées et cuire 25 minutes.', 'Réchauffer les saucisses de Strasbourg 5 minutes dans l’eau frémissante et servir le tout.'] },

  { n: 'Cassoulet', c: 'Plat', k: 820, t: 180, m: [45, 55, 45], kw: 'sud-ouest, haricots, hiver, mijoté',
    i: ['100 g Haricots blancs secs', '1 Cuisse de canard confite|Cuisses de canard confites', '1 Saucisse de Toulouse|Saucisses de Toulouse', '40 g Lard', '80 g Tomates concassées', '0.25 Oignon', '0.5 Gousse d’ail|Gousses d’ail', '1 Feuille de laurier|Feuilles de laurier', '10 g Chapelure', 'Sel et poivre'],
    s: ['Faire tremper les haricots la veille, puis les cuire 1 heure dans l’eau avec le laurier.', 'Dorer la saucisse, le lard, l’oignon et l’ail, puis ajouter les tomates.', 'Mélanger avec les haricots égouttés et un peu d’eau de cuisson, et ajouter le canard.', 'Parsemer de chapelure et cuire 1 h 30 au four à 160 °C.'] },

  { n: 'Petit salé aux lentilles', c: 'Plat', k: 650, t: 75, m: [40, 45, 32], kw: 'hiver, mijoté, tradition',
    i: ['150 g Petit salé', '70 g Lentilles vertes', '0.5 Carotte', '0.25 Oignon', '1 Clou de girofle|Clous de girofle', '1 Feuille de laurier|Feuilles de laurier', '0.5 cc Thym', 'Poivre'],
    s: ['Mettre le petit salé dans l’eau froide, porter à ébullition 10 minutes, puis égoutter pour le dessaler.', 'Le remettre dans une cocotte avec l’oignon piqué du clou, la carotte, le thym, le laurier, et couvrir d’eau.', 'Cuire 30 minutes, puis ajouter les lentilles rincées.', 'Cuire encore 25 minutes, poivrer et servir.'] },

  { n: 'Bœuf carottes', c: 'Plat', k: 540, t: 150, m: [40, 20, 30], kw: 'mijoté, hiver, tradition',
    i: ['180 g Bœuf à braiser', '250 g Carottes', '0.25 Oignon', '100 ml Vin blanc', '1 Feuille de laurier|Feuilles de laurier', '0.5 cc Thym', '1 cs Huile', 'Sel et poivre'],
    s: ['Couper la viande en cubes et la faire dorer dans l’huile.', 'Ajouter l’oignon émincé, puis le vin blanc et un verre d’eau.', 'Ajouter les carottes en rondelles, le thym, le laurier, sel et poivre.', 'Couvrir et laisser mijoter 2 heures à feu doux.'] },

  { n: 'Navarin d’agneau', c: 'Plat', k: 620, t: 120, m: [38, 30, 36], kw: 'printemps, mijoté, agneau',
    i: ['180 g Épaule d’agneau', '100 g Carottes', '0.5 Navet', '50 g Petits pois', '100 g Pommes de terre', '0.25 Oignon', '1 cc Farine', '50 g Tomates concassées', '0.5 cc Thym', '1 cs Huile', 'Sel et poivre'],
    s: ['Faire dorer l’agneau en morceaux dans l’huile, ajouter l’oignon et saupoudrer de farine.', 'Ajouter les tomates, le thym et de l’eau à hauteur, puis cuire 45 minutes.', 'Ajouter carottes, navets et pommes de terre, puis cuire 30 minutes.', 'Ajouter les petits pois 10 minutes avant la fin.'] },

  { n: 'Gigot d’agneau et flageolets', c: 'Plat', k: 650, t: 90, m: [45, 35, 34], kw: 'pâques, four, dimanche, agneau',
    i: ['200 g Gigot d’agneau', '120 g Flageolets', '1 Gousse d’ail|Gousses d’ail', '0.5 cc Romarin', '1 cs Huile d’olive', 'Sel et poivre'],
    s: ['Préchauffer le four à 220 °C.', 'Piquer le gigot de gousses d’ail, l’enduire d’huile, de romarin, sel et poivre.', 'Cuire 15 minutes par 500 g (rosé), puis laisser reposer 10 minutes sous du papier aluminium.', 'Réchauffer les flageolets avec un peu de jus de cuisson et servir.'] },

  { n: 'Lapin à la moutarde', c: 'Plat', k: 540, t: 75, m: [42, 25, 28], kw: 'tradition, sauce',
    i: ['200 g Lapin', '1 cs Moutarde', '60 ml Crème fraîche', '50 ml Vin blanc', '0.25 Oignon', '0.5 cc Thym', '150 g Pommes de terre', '10 g Beurre', 'Sel et poivre'],
    s: ['Badigeonner les morceaux de lapin de moutarde.', 'Les faire dorer dans le beurre avec l’oignon émincé.', 'Ajouter le vin blanc et le thym, couvrir et cuire 45 minutes à feu doux.', 'Ajouter la crème, laisser mijoter 5 minutes et servir avec les pommes de terre.'] },

  { n: 'Magret de canard et pommes sarladaises', c: 'Plat', k: 780, t: 40, m: [38, 40, 52], kw: 'sud-ouest, fête',
    i: ['0.5 Magret de canard|Magrets de canard', '200 g Pommes de terre', '0.5 Gousse d’ail|Gousses d’ail', 'Persil', 'Sel et poivre'],
    s: ['Quadriller la peau du magret et le cuire côté peau 8 minutes à feu moyen, sans matière grasse.', 'Le retourner, cuire 4 minutes, puis le laisser reposer sous du papier aluminium.', 'Faire rissoler les pommes de terre en rondelles 20 minutes dans la graisse du canard.', 'Ajouter l’ail et le persil hachés, saler, poivrer et servir avec le magret tranché.'] },

  { n: 'Osso buco', c: 'Plat', k: 580, t: 120, m: [45, 30, 26], kw: 'italien, mijoté, veau',
    i: ['1 Tranche de jarret de veau|Tranches de jarret de veau', '100 g Tomates concassées', '0.5 Carotte', '0.25 Oignon', '50 ml Vin blanc', '1 cc Farine', '0.25 Citron', '60 g Riz', '1 cs Huile d’olive', 'Sel et poivre'],
    s: ['Fariner la viande et la faire dorer dans l’huile.', 'Ajouter l’oignon et la carotte en dés, puis le vin blanc et les tomates.', 'Couvrir et laisser mijoter 1 h 30 à feu doux.', 'Parsemer de zeste de citron et servir avec le riz.'] },

  { n: 'Steak au poivre', c: 'Plat', k: 620, t: 25, m: [42, 35, 34], kw: 'bœuf, sauce, rapide',
    i: ['1 Steak de bœuf|Steaks de bœuf', '1 cc Poivre concassé', '40 ml Crème fraîche', '10 g Beurre', '200 g Pommes de terre', 'Sel'],
    s: ['Faire cuire les pommes de terre ou des frites au four.', 'Enrober les steaks de poivre concassé des deux côtés.', 'Les cuire 2 à 3 minutes de chaque côté dans le beurre, puis les réserver.', 'Verser la crème dans la poêle, saler, laisser réduire 2 minutes et napper les steaks.'] },

  { n: 'Rôti de bœuf et haricots verts', c: 'Plat', k: 480, t: 50, m: [45, 12, 26], kw: 'dimanche, four, protéiné',
    i: ['180 g Rôti de bœuf', '150 g Haricots verts', '10 g Beurre', '0.5 Gousse d’ail|Gousses d’ail', 'Sel et poivre'],
    s: ['Préchauffer le four à 240 °C et sortir la viande du frigo 30 minutes avant.', 'Cuire le rôti 15 minutes par 500 g pour une viande rosée.', 'Cuire les haricots verts 10 minutes à l’eau salée, puis les faire sauter au beurre et à l’ail.', 'Laisser reposer la viande 10 minutes avant de la trancher.'] },

  { n: 'Escalope milanaise', c: 'Plat', k: 620, t: 30, m: [38, 60, 24], kw: 'italien, pané, enfants',
    i: ['1 Escalope de veau|Escalopes de veau', '0.5 Œuf', '20 g Chapelure', '10 g Farine', '80 g Spaghetti', '80 g Sauce tomate', '1 cs Huile', '0.25 Citron', 'Sel et poivre'],
    s: ['Cuire les spaghetti et réchauffer la sauce tomate.', 'Passer les escalopes dans la farine, puis l’œuf battu, puis la chapelure.', 'Les cuire 3 minutes de chaque côté dans l’huile chaude.', 'Servir avec les spaghetti à la tomate et un quartier de citron.'] },

  { n: 'Cordon bleu maison', c: 'Plat', k: 580, t: 30, m: [42, 35, 28], kw: 'enfants, pané, fromage',
    i: ['1 Escalope de dinde|Escalopes de dinde', '0.5 Tranche de jambon|Tranches de jambon', '20 g Emmental', '0.5 Œuf', '20 g Chapelure', '1 cs Huile', '150 g Haricots verts', 'Sel et poivre'],
    s: ['Aplatir l’escalope, poser le jambon et le fromage sur une moitié, puis la replier.', 'La passer dans l’œuf battu puis dans la chapelure.', 'La cuire 6 minutes de chaque côté à feu moyen dans l’huile.', 'Servir avec les haricots verts.'] },

  { n: 'Moussaka', c: 'Plat', k: 610, t: 90, m: [30, 25, 42], kw: 'grec, four, aubergine',
    i: ['1 Aubergine', '100 g Bœuf haché', '80 g Tomates concassées', '0.25 Oignon', '80 ml Béchamel', '20 g Emmental râpé', '0.25 cc Cannelle', '1 cs Huile d’olive', 'Sel et poivre'],
    s: ['Couper les aubergines en tranches, les huiler et les cuire 20 minutes au four à 200 °C.', 'Faire revenir l’oignon et la viande, ajouter les tomates et la cannelle, puis mijoter 15 minutes.', 'Alterner dans un plat aubergines et viande, puis couvrir de béchamel et de fromage.', 'Cuire 35 minutes au four à 180 °C.'] },

  { n: 'Tomates farcies', c: 'Plat', k: 520, t: 70, m: [26, 40, 28], kw: 'été, four, tradition',
    i: ['2 Tomate', '100 g Chair à saucisse', '0.25 Oignon', 'Persil', '50 g Riz', '1 cc Huile d’olive', 'Sel et poivre'],
    s: ['Préchauffer le four à 180 °C ; couper le chapeau des tomates et les vider.', 'Mélanger la chair à saucisse avec l’oignon et le persil hachés.', 'Farcir les tomates, remettre les chapeaux et les poser dans un plat avec le riz cru et un verre d’eau autour.', 'Cuire 50 minutes en arrosant de temps en temps.'] },

  { n: 'Courgettes farcies', c: 'Plat', k: 450, t: 60, m: [26, 15, 32], kw: 'été, four, provençal',
    i: ['1 Courgette', '100 g Bœuf haché', '0.25 Oignon', '15 g Emmental râpé', '0.5 Gousse d’ail|Gousses d’ail', '0.5 cc Herbes de Provence', 'Sel et poivre'],
    s: ['Préchauffer le four à 180 °C ; couper les courgettes en deux et les évider.', 'Faire revenir l’oignon, l’ail, la chair de courgette et la viande 8 minutes.', 'Garnir les courgettes, ajouter les herbes et le fromage.', 'Cuire 35 minutes au four.'] },

  { n: 'Poivrons farcis', c: 'Plat', k: 480, t: 60, m: [26, 30, 26], kw: 'été, four',
    i: ['1 Poivron', '90 g Bœuf haché', '40 g Riz', '60 g Tomates concassées', '0.25 Oignon', '15 g Emmental râpé', '0.5 cc Paprika', 'Sel et poivre'],
    s: ['Préchauffer le four à 180 °C et cuire le riz 10 minutes.', 'Faire revenir l’oignon et la viande, puis ajouter le riz, les tomates et le paprika.', 'Couper le haut des poivrons, les vider et les remplir de farce.', 'Ajouter le fromage et cuire 35 minutes.'] },

  { n: 'Chou farci', c: 'Plat', k: 560, t: 120, m: [28, 20, 40], kw: 'hiver, mijoté, tradition',
    i: ['3 Feuille de chou vert|Feuilles de chou vert', '120 g Chair à saucisse', '0.25 Oignon', '0.25 Œuf', '30 g Lardons', '100 ml Bouillon', 'Sel et poivre'],
    s: ['Blanchir les feuilles de chou 5 minutes dans l’eau bouillante.', 'Mélanger la chair à saucisse, l’oignon haché et l’œuf.', 'Envelopper la farce dans les feuilles de chou et les ranger dans une cocotte avec les lardons.', 'Verser le bouillon, couvrir et cuire 1 h 30 à feu doux.'] },

  { n: 'Pâtes au thon et à la tomate', c: 'Rapide', k: 560, t: 20, m: [32, 75, 12], kw: 'pâtes, poisson, placard',
    i: ['100 g Pâtes', '60 g Thon', '100 g Sauce tomate', '0.25 Oignon', '0.5 cc Origan', '1 cc Huile d’olive', 'Sel et poivre'],
    s: ['Cuire les pâtes 10 minutes dans l’eau salée.', 'Faire revenir l’oignon dans l’huile, ajouter la sauce tomate et l’origan.', 'Ajouter le thon émietté et chauffer 5 minutes.', 'Mélanger avec les pâtes égouttées.'] },

  { n: 'Penne all’arrabbiata', c: 'Végétarien', k: 480, t: 20, m: [15, 85, 9], kw: 'italien, pâtes, épicé',
    i: ['100 g Penne', '120 g Tomates concassées', '0.5 Gousse d’ail|Gousses d’ail', '1 pincée Piment de Cayenne', '1 cc Huile d’olive', 'Persil', '10 g Parmesan', 'Sel'],
    s: ['Cuire les penne 10 minutes dans l’eau salée.', 'Faire revenir l’ail et le piment 1 minute dans l’huile.', 'Ajouter les tomates et laisser réduire 10 minutes.', 'Mélanger avec les pâtes, le persil et le parmesan.'] },

  { n: 'Gratin de macaronis', c: 'Végétarien', k: 600, t: 35, m: [22, 70, 24], kw: 'four, enfants, gratin, fromage',
    i: ['90 g Macaronis', '100 ml Lait', '40 ml Crème fraîche', '40 g Emmental râpé', '1 pincée Muscade', 'Sel et poivre'],
    s: ['Préchauffer le four à 200 °C et cuire les macaronis 8 minutes.', 'Mélanger le lait, la crème, la moitié du fromage, la muscade, sel et poivre.', 'Mettre les pâtes dans un plat, verser le mélange et ajouter le reste du fromage.', 'Gratiner 20 minutes.'] },

  { n: 'Lasagnes saumon épinards', c: 'Plat', k: 590, t: 60, m: [32, 45, 30], kw: 'poisson, four, pâtes',
    i: ['60 g Feuilles de lasagne', '100 g Saumon frais', '100 g Épinards', '100 ml Béchamel', '20 g Emmental râpé', '1 pincée Muscade', 'Sel et poivre'],
    s: ['Préchauffer le four à 180 °C et faire tomber les épinards 3 minutes à la poêle.', 'Couper le saumon en petits morceaux.', 'Alterner feuilles, épinards, saumon et béchamel, puis finir par la béchamel et le fromage.', 'Cuire 40 minutes.'] },

  { n: 'Saumon teriyaki', c: 'Plat', k: 560, t: 25, m: [34, 55, 20], kw: 'asiatique, poisson, riz',
    i: ['1 Pavé de saumon', '1 cs Sauce soja', '1 cc Miel', '0.5 cc Gingembre', '70 g Riz', '100 g Brocoli', '1 cc Graines de sésame'],
    s: ['Cuire le riz et le brocoli.', 'Mélanger la sauce soja, le miel et le gingembre.', 'Cuire le saumon 4 minutes de chaque côté, puis verser la sauce et laisser caraméliser 1 minute.', 'Servir avec le riz, le brocoli et le sésame.'] },

  { n: 'Truite aux amandes', c: 'Plat', k: 520, t: 25, m: [34, 25, 30], kw: 'poisson, beurre',
    i: ['1 Filet de truite|Filets de truite', '15 g Amandes effilées', '15 g Beurre', '0.25 Citron', '150 g Pommes de terre', 'Persil', 'Sel et poivre'],
    s: ['Cuire les pommes de terre 20 minutes à la vapeur.', 'Cuire les filets 3 minutes de chaque côté dans la moitié du beurre.', 'Faire dorer les amandes 2 minutes dans le reste du beurre.', 'Verser sur la truite avec le jus de citron et le persil.'] },

  { n: 'Dos de cabillaud au chorizo', c: 'Plat', k: 480, t: 30, m: [35, 30, 20], kw: 'poisson, espagnol, four',
    i: ['150 g Cabillaud', '20 g Chorizo', '150 g Pommes de terre', '0.5 Tomate', '1 cs Huile d’olive', 'Sel et poivre'],
    s: ['Préchauffer le four à 200 °C.', 'Cuire les pommes de terre en rondelles 15 minutes au four avec l’huile.', 'Poser le cabillaud dessus, couvrir de tranches de chorizo et de tomate.', 'Cuire encore 15 minutes.'] },

  { n: 'Gratin de poisson', c: 'Plat', k: 490, t: 45, m: [32, 30, 26], kw: 'poisson, four, gratin',
    i: ['150 g Colin', '200 g Pommes de terre', '80 ml Béchamel', '20 g Emmental râpé', '0.25 Citron', 'Sel et poivre'],
    s: ['Cuire les pommes de terre 20 minutes et les couper en rondelles.', 'Pocher le poisson 5 minutes dans l’eau citronnée, puis l’émietter.', 'Mélanger poisson, pommes de terre et béchamel dans un plat, puis ajouter le fromage.', 'Gratiner 20 minutes à 200 °C.'] },

  { n: 'Sardines grillées', c: 'Léger', k: 380, t: 20, m: [30, 15, 22], kw: 'poisson, été, barbecue',
    i: ['4 Sardine', '1 cs Huile d’olive', '0.25 Citron', '50 g Salade verte', 'Gros sel', 'Poivre'],
    s: ['Préchauffer le grill ou le barbecue.', 'Badigeonner les sardines d’huile et de gros sel.', 'Les griller 3 minutes de chaque côté.', 'Servir avec le citron et la salade.'] },

  { n: 'Tarte flambée', c: 'Plat', k: 590, t: 25, m: [20, 50, 34], kw: 'alsace, four, flammekueche',
    i: ['0.25 Pâte à pizza|Pâtes à pizza', '60 g Crème fraîche épaisse', '50 g Lardons', '0.25 Oignon', '1 pincée Muscade', 'Sel et poivre'],
    s: ['Préchauffer le four au maximum.', 'Étaler la pâte très finement et la couvrir de crème assaisonnée de muscade, sel et poivre.', 'Parsemer d’oignon émincé finement et de lardons.', 'Cuire 10 à 12 minutes jusqu’à ce que les bords soient dorés.'] },

  { n: 'Galettes bretonnes complètes', c: 'Rapide', k: 520, t: 20, m: [30, 35, 28], kw: 'bretagne, sarrasin, œuf, crêpe',
    i: ['1 Galette de sarrasin|Galettes de sarrasin', '1 Tranche de jambon|Tranches de jambon', '1 Œuf', '30 g Emmental râpé', '5 g Beurre'],
    s: ['Faire chauffer une poêle avec un peu de beurre et y poser la galette.', 'Casser l’œuf au centre, répartir le fromage et le jambon autour.', 'Cuire 4 minutes jusqu’à ce que le blanc soit pris.', 'Replier les bords en carré et servir.'] },

  { n: 'Burger maison', c: 'Plat', k: 720, t: 25, m: [38, 50, 40], kw: 'enfants, bœuf, américain',
    i: ['1 Pain à burger|Pains à burger', '1 Steak haché|Steaks hachés', '1 Tranche de cheddar|Tranches de cheddar', '0.5 Tomate', '15 g Salade verte', '0.25 Oignon', '1 cc Ketchup', '1 cc Moutarde'],
    s: ['Faire griller le pain coupé en deux.', 'Cuire le steak 3 minutes de chaque côté, poser le cheddar dessus pour qu’il fonde.', 'Tartiner le pain de ketchup et de moutarde.', 'Monter le burger avec la salade, la tomate, l’oignon et le steak.'] },

  { n: 'Bowl poulet shawarma', c: 'Plat', k: 580, t: 30, m: [40, 50, 22], kw: 'oriental, épicé, bol, protéiné',
    i: ['150 g Blanc de poulet', '1 cc Cumin', '0.5 cc Paprika', '0.5 cc Curcuma', '60 g Riz', '0.5 Tomate', '0.25 Concombre', '40 g Yaourt nature', '1 cs Huile d’olive', 'Sel'],
    s: ['Mélanger le poulet en lanières avec les épices, l’huile et le sel.', 'Cuire le riz.', 'Faire dorer le poulet 8 minutes à la poêle.', 'Servir dans un bol avec le riz, les crudités et le yaourt.'] },

  { n: 'Pad thaï au poulet', c: 'Plat', k: 620, t: 25, m: [35, 70, 20], kw: 'asiatique, thaï, nouilles, wok',
    i: ['80 g Nouilles de riz', '120 g Blanc de poulet', '1 Œuf', '40 g Pousses de soja', '1 cs Sauce soja', '1 cs Nuoc-mâm', '1 cc Sucre', '15 g Cacahuètes', '0.25 Citron vert', '1 cs Huile'],
    s: ['Faire tremper les nouilles 10 minutes dans l’eau chaude.', 'Faire sauter le poulet en lanières 5 minutes dans l’huile, puis pousser sur le côté et brouiller l’œuf.', 'Ajouter les nouilles égouttées, la sauce soja, le nuoc-mâm et le sucre, et mélanger 3 minutes.', 'Ajouter les pousses de soja, les cacahuètes concassées et le citron vert.'] },

  { n: 'Bœuf sauté aux oignons', c: 'Rapide', k: 540, t: 20, m: [36, 55, 18], kw: 'asiatique, wok, riz',
    i: ['130 g Bœuf à griller', '0.5 Oignon', '1 cs Sauce soja', '0.5 cc Gingembre', '1 cc Maïzena', '70 g Riz', '1 cs Huile'],
    s: ['Cuire le riz.', 'Couper le bœuf en fines lamelles et le mélanger avec la maïzena et la moitié de la sauce soja.', 'Le faire sauter 2 minutes à feu très vif dans l’huile, puis le réserver.', 'Faire sauter l’oignon 3 minutes, remettre le bœuf, le gingembre et le reste de sauce soja ; servir avec le riz.'] },

  // ---- Protéiné et léger ----
  { n: 'Bowl poulet quinoa', c: 'Léger', k: 520, t: 25, m: [42, 45, 16], kw: 'protéiné, sport, équilibré, bol',
    i: ['150 g Blanc de poulet', '50 g Quinoa', '0.5 Avocat', '5 Tomate cerise|Tomates cerises', '30 g Épinards', '0.25 Citron', '1 cc Huile d’olive', '0.5 cc Paprika', 'Sel et poivre'],
    s: ['Cuire le quinoa 12 minutes dans l’eau salée.', 'Saupoudrer le poulet de paprika et le cuire 6 minutes de chaque côté.', 'Couper l’avocat et les tomates.', 'Disposer le tout sur les épinards et arroser de citron et d’huile.'] },

  { n: 'Poulet grillé et haricots verts', c: 'Léger', k: 360, t: 25, m: [42, 12, 14], kw: 'protéiné, sport, régime, simple',
    i: ['160 g Blanc de poulet', '200 g Haricots verts', '1 cc Huile d’olive', '0.5 cc Herbes de Provence', '0.25 Citron', 'Sel et poivre'],
    s: ['Cuire les haricots verts 10 minutes à l’eau salée.', 'Badigeonner le poulet d’huile et d’herbes.', 'Le griller 6 minutes de chaque côté.', 'Servir avec les haricots verts et un filet de citron.'] },

  { n: 'Salade de poulet grillé', c: 'Léger', k: 420, t: 20, m: [40, 15, 22], kw: 'protéiné, salade, froid',
    i: ['140 g Blanc de poulet', '60 g Salade verte', '0.5 Tomate', '0.25 Concombre', '1 Œuf', '1 cs Huile d’olive', '1 cc Vinaigre', 'Sel et poivre'],
    s: ['Cuire l’œuf 9 minutes, puis le refroidir et l’écaler.', 'Griller le poulet 6 minutes de chaque côté et le couper en tranches.', 'Couper les légumes et l’œuf.', 'Mélanger le tout avec l’huile et le vinaigre.'] },

  { n: 'Omelette protéinée au thon', c: 'Rapide', k: 380, t: 10, m: [38, 3, 24], kw: 'protéiné, œuf, sport',
    i: ['3 Œuf', '50 g Thon', 'Ciboulette', '5 g Beurre', 'Sel et poivre'],
    s: ['Battre les œufs avec la ciboulette, le sel et le poivre.', 'Faire fondre le beurre dans une poêle.', 'Verser les œufs, ajouter le thon émietté.', 'Cuire 3 minutes et plier l’omelette.'] },

  { n: 'Steak de thon et légumes', c: 'Léger', k: 400, t: 20, m: [42, 15, 18], kw: 'protéiné, poisson',
    i: ['150 g Steak de thon', '0.5 Courgette', '0.5 Poivron', '1 cs Huile d’olive', '0.25 Citron', 'Sel et poivre'],
    s: ['Couper les légumes en dés et les faire sauter 10 minutes dans la moitié de l’huile.', 'Huiler le thon et le saisir 2 minutes de chaque côté.', 'Saler, poivrer et arroser de citron.', 'Servir avec les légumes.'] },

  { n: 'Chili protéiné à la dinde', c: 'Plat', k: 520, t: 40, m: [45, 50, 12], kw: 'protéiné, épicé, sport',
    i: ['150 g Dinde hachée', '100 g Haricots rouges', '100 g Tomates concassées', '0.25 Oignon', '0.25 Poivron', '0.5 cc Cumin', '0.5 cc Paprika', '40 g Riz', '1 cc Huile', 'Sel'],
    s: ['Faire revenir l’oignon et le poivron 5 minutes dans l’huile.', 'Ajouter la dinde et la faire dorer, puis les épices.', 'Ajouter les tomates et les haricots, puis mijoter 20 minutes.', 'Servir avec le riz.'] },

  { n: 'Soupe de lentilles corail', c: 'Léger', k: 320, t: 30, m: [18, 45, 8], kw: 'soupe, épicé, hiver, végétarien',
    i: ['60 g Lentilles corail', '0.5 Carotte', '0.25 Oignon', '0.5 cc Cumin', '30 ml Lait de coco', '300 ml Bouillon de légumes', 'Sel'],
    s: ['Faire revenir l’oignon et la carotte avec le cumin.', 'Ajouter les lentilles rincées et le bouillon.', 'Cuire 20 minutes.', 'Mixer avec le lait de coco et saler.'] },

  { n: 'Velouté de carottes au cumin', c: 'Léger', k: 170, t: 35, m: [3, 22, 7], kw: 'soupe, mixé, épicé',
    i: ['250 g Carottes', '0.25 Oignon', '0.5 cc Cumin', '250 ml Bouillon de légumes', '20 ml Crème fraîche', 'Sel et poivre'],
    s: ['Éplucher et couper les carottes en rondelles.', 'Faire revenir l’oignon avec le cumin, ajouter les carottes et le bouillon.', 'Cuire 25 minutes.', 'Mixer avec la crème, saler et poivrer.'] },

  { n: 'Salade grecque', c: 'Léger', k: 340, t: 15, m: [10, 12, 28], kw: 'grec, salade, été, froid',
    i: ['1 Tomate', '0.5 Concombre', '50 g Feta', '15 g Olives noires', '0.25 Oignon rouge', '0.5 cc Origan', '1 cs Huile d’olive', 'Sel et poivre'],
    s: ['Couper la tomate et le concombre en morceaux.', 'Émincer l’oignon rouge.', 'Ajouter la feta en cubes et les olives.', 'Assaisonner d’huile, d’origan, de sel et de poivre.'] },

  { n: 'Salade de riz', c: 'Léger', k: 450, t: 25, m: [18, 55, 16], kw: 'été, froid, pique-nique',
    i: ['60 g Riz', '50 g Thon', '1 Œuf', '0.5 Tomate', '30 g Maïs', '1 cs Huile d’olive', '1 cc Vinaigre', 'Sel et poivre'],
    s: ['Cuire le riz et l’œuf (9 minutes), puis les refroidir.', 'Couper la tomate et l’œuf en morceaux.', 'Mélanger le riz, le thon, le maïs, la tomate et l’œuf.', 'Assaisonner et garder au frais.'] },

  // ---- Desserts ----
  { n: 'Île flottante', c: 'Dessert', k: 260, t: 40, m: [9, 35, 9], kw: 'tradition, frigo, vanille',
    i: ['1 Œuf', '200 ml Lait', '30 g Sucre', '1 pincée Vanille en poudre'],
    s: ['Faire chauffer le lait avec la vanille ; fouetter les jaunes avec la moitié du sucre.', 'Verser le lait chaud sur les jaunes, remettre sur feu doux en remuant jusqu’à ce que la crème nappe la cuillère, sans bouillir.', 'Monter les blancs en neige avec le reste du sucre et les cuire 1 minute au micro-ondes en petits tas.', 'Servir les blancs sur la crème anglaise froide, avec un filet de caramel si on veut.'] },

  { n: 'Tarte au citron meringuée', c: 'Dessert', k: 380, t: 60, m: [6, 50, 17], kw: 'tarte, citron, four',
    i: ['0.17 Pâte sablée|Pâtes sablées', '0.5 Citron', '1 Œuf', '35 g Sucre', '10 g Beurre', '1 cc Maïzena'],
    s: ['Cuire le fond de tarte à blanc 20 minutes à 180 °C.', 'Chauffer le jus et le zeste de citron avec la moitié du sucre, les jaunes et la maïzena, en fouettant jusqu’à épaississement ; ajouter le beurre.', 'Verser la crème sur le fond de tarte.', 'Monter les blancs en neige ferme avec le reste du sucre, les étaler sur la tarte et dorer 5 minutes sous le grill.'] },

  { n: 'Poires belle-Hélène', c: 'Dessert', k: 320, t: 30, m: [3, 50, 13], kw: 'fruit, chocolat, tradition',
    i: ['1 Poire', '20 g Chocolat noir', '20 ml Crème liquide', '15 g Sucre', '1 Boule de glace vanille|Boules de glace vanille'],
    s: ['Éplucher les poires et les pocher 15 minutes dans de l’eau sucrée.', 'Les laisser refroidir.', 'Faire fondre le chocolat avec la crème.', 'Servir les poires avec la glace et napper de chocolat chaud.'] },

  { n: 'Pain perdu', c: 'Dessert', k: 360, t: 15, m: [11, 45, 15], kw: 'anti-gaspi, goûter, enfants',
    i: ['2 Tranche de pain rassis|Tranches de pain rassis', '0.5 Œuf', '80 ml Lait', '10 g Sucre', '5 g Beurre', '1 pincée Cannelle'],
    s: ['Battre l’œuf avec le lait, le sucre et la cannelle.', 'Tremper les tranches de pain des deux côtés.', 'Les dorer 2 minutes de chaque côté dans le beurre.', 'Saupoudrer d’un peu de sucre et servir chaud.'] },

  { n: 'Quatre-quarts', c: 'Dessert', k: 360, t: 55, m: [5, 38, 21], kw: 'bretagne, goûter, four, gâteau',
    i: ['0.5 Œuf', '25 g Farine', '25 g Sucre', '25 g Beurre', '1 g Levure chimique'],
    s: ['Préchauffer le four à 180 °C.', 'Fouetter les œufs et le sucre, puis ajouter le beurre fondu.', 'Ajouter la farine et la levure.', 'Verser dans un moule à cake et cuire 40 minutes.'] },

  { n: 'Madeleines', c: 'Dessert', k: 280, t: 30, m: [4, 30, 16], kw: 'goûter, enfants, four',
    i: ['0.5 Œuf', '20 g Farine', '20 g Sucre', '20 g Beurre', '1 g Levure chimique', '0.25 Citron'],
    s: ['Fouetter les œufs et le sucre, ajouter la farine, la levure et le zeste de citron.', 'Ajouter le beurre fondu et laisser reposer la pâte 1 heure au frais.', 'Remplir les moules à madeleines aux trois quarts.', 'Cuire 10 minutes à 200 °C.'] },

  { n: 'Flan pâtissier', c: 'Dessert', k: 330, t: 70, m: [8, 45, 13], kw: 'boulangerie, four, vanille',
    i: ['0.17 Pâte brisée|Pâtes brisées', '150 ml Lait', '0.5 Œuf', '25 g Sucre', '12 g Maïzena', '1 pincée Vanille en poudre'],
    s: ['Préchauffer le four à 180 °C et garnir un moule de pâte.', 'Chauffer le lait avec la vanille ; fouetter les œufs, le sucre et la maïzena.', 'Verser le lait chaud dessus, remettre sur le feu et faire épaissir en fouettant.', 'Verser sur la pâte et cuire 45 minutes ; laisser refroidir au frais.'] },

  { n: 'Fromage blanc protéiné aux fruits rouges', c: 'Dessert', k: 220, t: 5, m: [20, 22, 4], kw: 'protéiné, sport, rapide, frais',
    i: ['200 g Fromage blanc 0 %', '60 g Fruits rouges', '1 cc Miel', '10 g Flocons d’avoine'],
    s: ['Mettre le fromage blanc dans un bol.', 'Ajouter les fruits rouges.', 'Parsemer de flocons d’avoine.', 'Arroser de miel.'] },

  { n: 'Pancakes', c: 'Dessert', k: 340, t: 25, m: [10, 50, 10], kw: 'brunch, goûter, enfants',
    i: ['50 g Farine', '0.5 Œuf', '70 ml Lait', '5 g Sucre', '2 g Levure chimique', '5 g Beurre', '1 cc Sirop d’érable'],
    s: ['Mélanger la farine, le sucre et la levure, puis ajouter l’œuf et le lait.', 'Ajouter le beurre fondu et mélanger sans trop travailler la pâte.', 'Cuire de petites louches 2 minutes de chaque côté dans une poêle chaude.', 'Servir avec le sirop d’érable.'] },

  /* ---- Lot 4 : bibliothèque (calories non définies quand on n’est pas sûr) ---- */
  { n: 'Confit de canard et pommes de terre sautées', c: 'Plat', k: null, t: 45, m: null, kw: 'canard, sud-ouest, terroir, fête',
    i: ['1 Cuisse de canard confite|Cuisses de canard confites', '250 g Pommes de terre', '1 Gousse d’ail|Gousses d’ail', '1 cs Persil', 'Sel et poivre'],
    s: ['Préchauffer le four à 200 °C et poser les cuisses côté peau dans un plat.', 'Les réchauffer 20 minutes au four jusqu’à ce que la peau soit croustillante.', 'Pendant ce temps, couper les pommes de terre en dés et les dorer 20 minutes à la poêle dans un peu de graisse de canard.', 'Ajouter l’ail haché et le persil en fin de cuisson, saler, poivrer et servir avec le canard.'] },

  { n: 'Bouillabaisse simplifiée', c: 'Plat', k: null, t: 75, m: null, kw: 'poisson, provence, marseille, soupe de poisson',
    i: ['250 g Poissons blancs variés', '1 Pomme de terre|Pommes de terre', '0.5 Oignon', '0.5 Poireau', '1 Tomate|Tomates', '1 Gousse d’ail|Gousses d’ail', '1 pincée Safran', '1 cs Huile d’olive', '1 Tranche de pain|Tranches de pain', 'Sel et poivre'],
    s: ['Faire revenir l’oignon, le poireau et l’ail émincés dans l’huile d’olive.', 'Ajouter les tomates en morceaux, le safran et 400 ml d’eau par personne, puis laisser bouillir 15 minutes.', 'Ajouter les pommes de terre en rondelles et cuire 15 minutes.', 'Déposer les morceaux de poisson et cuire encore 8 à 10 minutes à petit feu.', 'Servir le bouillon avec le pain grillé, puis le poisson et les pommes de terre.'] },

  { n: 'Fondue savoyarde', c: 'Plat', k: null, t: 25, m: null, kw: 'fromage, montagne, hiver, savoie, convivial',
    i: ['70 g Beaufort', '70 g Comté', '60 g Emmental', '80 ml Vin blanc sec', '0.5 Gousse d’ail', '150 g Pain de campagne', 'Poivre'],
    s: ['Frotter le caquelon avec l’ail coupé en deux.', 'Y chauffer le vin blanc sans le faire bouillir.', 'Ajouter les fromages râpés petit à petit en remuant en forme de huit jusqu’à ce que tout soit fondu.', 'Poivrer et poser le caquelon sur le réchaud ; tremper les cubes de pain avec les piques.'] },

  { n: 'Aligot saucisse', c: 'Plat', k: null, t: 45, m: null, kw: 'aubrac, auvergne, fromage, purée, terroir',
    i: ['250 g Pommes de terre', '80 g Tomme fraîche', '30 ml Crème fraîche', '15 g Beurre', '0.5 Gousse d’ail', '1 Saucisse de Toulouse|Saucisses de Toulouse', 'Sel et poivre'],
    s: ['Cuire les pommes de terre épluchées 20 minutes dans l’eau salée avec l’ail.', 'Les écraser en purée avec le beurre et la crème, sur feu doux.', 'Ajouter la tomme coupée en lamelles et tourner vigoureusement jusqu’à ce que la purée file.', 'Pendant ce temps, cuire la saucisse à la poêle 15 minutes en la retournant.', 'Servir l’aligot bien chaud avec la saucisse.'] },

  { n: 'Côte de bœuf au four', c: 'Plat', k: null, t: 40, m: null, kw: 'bœuf, viande rouge, fête, barbecue',
    i: ['300 g Côte de bœuf', '1 cs Huile', '10 g Beurre', '1 Branche de thym|Branches de thym', 'Fleur de sel et poivre'],
    s: ['Sortir la viande du réfrigérateur 1 heure avant et préchauffer le four à 220 °C.', 'Saisir la côte 3 minutes par face dans une poêle très chaude avec l’huile.', 'Ajouter le beurre et le thym, arroser, puis finir au four 10 à 15 minutes selon la cuisson voulue.', 'Laisser reposer 10 minutes sous papier aluminium, trancher et assaisonner de fleur de sel.'] },

  { n: 'Veau Marengo', c: 'Plat', k: null, t: 110, m: null, kw: 'veau, mijoté, tomate, champignons',
    i: ['180 g Épaule de veau', '0.5 Oignon', '100 g Tomates concassées', '60 g Champignons de Paris', '50 ml Vin blanc', '1 cc Farine', '1 cs Huile d’olive', '1 Gousse d’ail', 'Thym', 'Sel et poivre'],
    s: ['Dorer la viande en cubes dans l’huile, puis ajouter l’oignon émincé.', 'Saupoudrer de farine, mélanger, puis verser le vin blanc.', 'Ajouter les tomates, l’ail, le thym et un peu d’eau ; couvrir et mijoter 1 h 15.', 'Ajouter les champignons émincés et cuire encore 20 minutes. Servir avec du riz ou des pâtes.'] },

  { n: 'Steak tartare', c: 'Plat', k: null, t: 15, m: null, kw: 'bœuf cru, bistrot, viande rouge',
    i: ['160 g Bœuf haché frais', '1 Jaune d’œuf|Jaunes d’œuf', '1 cc Moutarde', '1 cc Câpres', '1 cc Échalote', '1 cc Cornichons', '1 cc Persil', 'Quelques gouttes de sauce Worcestershire', 'Sel et poivre'],
    s: ['Hacher finement l’échalote, les câpres, les cornichons et le persil.', 'Mélanger la viande avec la moutarde, la sauce Worcestershire, le sel et le poivre.', 'Ajouter les condiments hachés et former un rond dans l’assiette.', 'Déposer le jaune d’œuf au centre et servir aussitôt, avec des frites ou une salade. À faire seulement avec une viande très fraîche du boucher.'] },

  { n: 'Figatelli aux lentilles', c: 'Plat', k: null, t: 45, m: null, kw: 'corse, charcuterie, lentilles, hiver',
    i: ['0.5 Figatellu|Figatelli', '70 g Lentilles vertes', '0.5 Carotte', '0.25 Oignon', '1 Feuille de laurier|Feuilles de laurier', 'Sel et poivre'],
    s: ['Rincer les lentilles et les cuire 25 minutes dans l’eau froide portée à ébullition avec la carotte, l’oignon et le laurier.', 'Couper le figatellu en tronçons et les griller 10 minutes à la poêle.', 'Égoutter les lentilles, saler en fin de cuisson et poivrer.', 'Servir les lentilles avec les tronçons de figatellu par-dessus.'] },

  { n: 'Choucroute de la mer', c: 'Plat', k: null, t: 60, m: null, kw: 'poisson, alsace, chou, saumon',
    i: ['200 g Choucroute cuite', '80 g Saumon', '80 g Cabillaud', '40 g Crevettes', '1 Pomme de terre|Pommes de terre', '50 ml Vin blanc', '20 ml Crème fraîche', '10 g Beurre', 'Sel et poivre'],
    s: ['Rincer la choucroute et la réchauffer 30 minutes avec le vin blanc et un peu d’eau.', 'Cuire les pommes de terre à l’eau 20 minutes.', 'Cuire les poissons en morceaux 8 minutes à la vapeur ou sur la choucroute, couvercle fermé.', 'Ajouter les crevettes en fin de cuisson et napper d’une sauce crème-beurre chaude.'] },

  { n: 'Tartiflette au reblochon et poulet', c: 'Plat', k: null, t: 55, m: null, kw: 'savoie, fromage, gratin, montagne',
    i: ['250 g Pommes de terre', '100 g Blanc de poulet', '0.25 Reblochon', '0.5 Oignon', '30 ml Crème fraîche', 'Sel et poivre'],
    s: ['Cuire les pommes de terre 20 minutes à l’eau, puis les couper en rondelles.', 'Dorer l’oignon émincé et le poulet en dés à la poêle.', 'Mélanger dans un plat avec les pommes de terre et la crème, saler peu et poivrer.', 'Poser le reblochon coupé en deux dans l’épaisseur, croûte en haut, et cuire 25 minutes à 200 °C.'] },

  { n: 'Petit salé à la potée de chou', c: 'Plat', k: null, t: 120, m: null, kw: 'porc, potée, chou, hiver, terroir',
    i: ['150 g Petit salé', '150 g Chou vert', '1 Carotte|Carottes', '1 Pomme de terre|Pommes de terre', '0.5 Navet', '0.5 Oignon', '1 Clou de girofle|Clous de girofle', 'Poivre'],
    s: ['Dessaler le petit salé 1 heure dans l’eau froide si besoin, puis le mettre dans une marmite d’eau froide.', 'Porter à frémissement avec l’oignon piqué de girofle et cuire 45 minutes.', 'Ajouter le chou en quartiers blanchis, les carottes et le navet ; cuire 30 minutes.', 'Ajouter les pommes de terre et cuire encore 25 minutes. Servir avec de la moutarde.'] },

  { n: 'Potée auvergnate', c: 'Plat', k: null, t: 150, m: null, kw: 'auvergne, porc, chou, hiver',
    i: ['100 g Palette de porc demi-sel', '1 Saucisse fumée|Saucisses fumées', '150 g Chou vert', '1 Carotte|Carottes', '1 Pomme de terre|Pommes de terre', '0.5 Navet', '0.5 Poireau', 'Bouquet garni', 'Poivre'],
    s: ['Mettre la palette dans une grande marmite d’eau froide avec le bouquet garni et porter à frémissement 1 heure.', 'Blanchir le chou 5 minutes dans une autre casserole.', 'Ajouter le chou, les carottes, le navet et le poireau dans la marmite ; cuire 40 minutes.', 'Ajouter les pommes de terre et la saucisse, puis cuire encore 30 minutes. Servir le bouillon à part.'] },

  { n: 'Andouillette moutarde et frites', c: 'Plat', k: null, t: 40, m: null, kw: 'bistrot, charcuterie, troyes',
    i: ['1 Andouillette|Andouillettes', '1 cs Moutarde à l’ancienne', '30 ml Crème fraîche', '200 g Pommes de terre', '1 cs Huile', 'Sel et poivre'],
    s: ['Couper les pommes de terre en frites, les huiler et les cuire 30 minutes à 220 °C en les retournant.', 'Inciser légèrement l’andouillette et la cuire 15 minutes à la poêle ou au four.', 'Chauffer la crème avec la moutarde, saler et poivrer.', 'Servir l’andouillette nappée de sauce, avec les frites.'] },

  { n: 'Pavé de saumon à l’oseille', c: 'Plat', k: null, t: 25, m: null, kw: 'poisson, sauce crème, bistrot',
    i: ['1 Pavé de saumon|Pavés de saumon', '30 g Oseille', '50 ml Crème fraîche', '1 cc Échalote', '10 g Beurre', '80 g Riz', 'Sel et poivre'],
    s: ['Cuire le riz selon le paquet.', 'Faire fondre l’échalote hachée dans le beurre, ajouter l’oseille ciselée : elle fond en 1 minute.', 'Verser la crème, saler, poivrer et laisser épaissir 3 minutes.', 'Cuire le saumon 4 minutes côté peau puis 2 minutes de l’autre côté, et servir avec la sauce et le riz.'] },

  { n: 'Sole meunière', c: 'Plat', k: null, t: 20, m: null, kw: 'poisson, beurre, classique',
    i: ['1 Sole|Soles', '1 cs Farine', '25 g Beurre', '0.5 Citron', '1 cs Persil', '150 g Pommes de terre vapeur', 'Sel et poivre'],
    s: ['Cuire les pommes de terre à la vapeur.', 'Saler, poivrer et fariner la sole vidée et pelée, puis tapoter pour retirer l’excès.', 'La cuire 4 à 5 minutes par face dans la moitié du beurre moussant.', 'Ajouter le reste du beurre, le jus de citron et le persil, arroser le poisson et servir.'] },

  { n: 'Lotte à l’armoricaine', c: 'Plat', k: null, t: 50, m: null, kw: 'poisson, bretagne, sauce tomate, fête',
    i: ['180 g Lotte', '1 cc Échalote', '100 g Tomates concassées', '50 ml Vin blanc', '1 cc Concentré de tomate', '30 ml Crème fraîche', '1 cs Huile d’olive', '1 pincée Piment d’Espelette', '70 g Riz', 'Sel et poivre'],
    s: ['Dorer la lotte en tronçons dans l’huile 3 minutes, puis la réserver.', 'Faire revenir l’échalote, ajouter le vin blanc, les tomates, le concentré et le piment.', 'Laisser réduire 15 minutes, puis ajouter la crème.', 'Remettre la lotte et cuire 8 minutes à couvert. Servir avec le riz.'] },

  { n: 'Coquilles Saint-Jacques à la bretonne', c: 'Plat', k: null, t: 35, m: null, kw: 'fruits de mer, bretagne, fête, gratin',
    i: ['4 Noix de Saint-Jacques', '1 cc Échalote', '30 g Champignons de Paris', '40 ml Crème fraîche', '20 ml Vin blanc', '10 g Beurre', '1 cs Chapelure', 'Sel et poivre'],
    s: ['Préchauffer le four à 220 °C.', 'Faire revenir l’échalote et les champignons hachés dans le beurre, puis verser le vin blanc.', 'Ajouter la crème et laisser épaissir 2 minutes.', 'Répartir les noix dans des coquilles, napper de sauce et parsemer de chapelure.', 'Gratiner 8 minutes au four.'] },

  { n: 'Gratin de chou-fleur au jambon', c: 'Plat', k: null, t: 50, m: null, kw: 'gratin, béchamel, chou-fleur',
    i: ['250 g Chou-fleur', '1 Tranche de jambon|Tranches de jambon', '15 g Beurre', '15 g Farine', '150 ml Lait', '30 g Gruyère râpé', '1 pincée Muscade', 'Sel et poivre'],
    s: ['Cuire le chou-fleur en bouquets 10 minutes à l’eau salée et bien l’égoutter.', 'Préparer une béchamel : faire fondre le beurre, ajouter la farine, puis le lait en fouettant jusqu’à épaississement.', 'Assaisonner de muscade, sel et poivre.', 'Mettre le chou-fleur et le jambon en lanières dans un plat, napper de béchamel, parsemer de gruyère.', 'Gratiner 20 minutes à 200 °C.'] },

  { n: 'Parmentier de canard', c: 'Plat', k: null, t: 60, m: null, kw: 'canard, gratin, purée, fête',
    i: ['1 Cuisse de canard confite|Cuisses de canard confites', '250 g Pommes de terre', '60 ml Lait', '10 g Beurre', '0.5 Échalote', '1 cs Chapelure', 'Sel et poivre'],
    s: ['Cuire les pommes de terre à l’eau 20 minutes et les écraser avec le lait et le beurre.', 'Réchauffer la cuisse, retirer la peau et effilocher la chair.', 'Faire revenir la chair avec l’échalote hachée 5 minutes.', 'Mettre le canard au fond d’un plat, couvrir de purée et de chapelure.', 'Gratiner 20 minutes à 200 °C.'] },

  { n: 'Joue de bœuf au vin rouge', c: 'Plat', k: null, t: 200, m: null, kw: 'bœuf, mijoté, hiver, fondant',
    i: ['200 g Joue de bœuf', '1 Carotte|Carottes', '0.5 Oignon', '150 ml Vin rouge', '1 cc Farine', '1 cs Huile', 'Bouquet garni', 'Sel et poivre'],
    s: ['Dorer la joue coupée en gros morceaux dans l’huile, puis la réserver.', 'Faire revenir l’oignon et les carottes en rondelles, saupoudrer de farine.', 'Remettre la viande, verser le vin et un peu d’eau, ajouter le bouquet garni.', 'Couvrir et laisser mijoter 3 heures à feu très doux : la viande doit se couper à la cuillère.'] },

  { n: 'Daube provençale', c: 'Plat', k: null, t: 210, m: null, kw: 'bœuf, provence, mijoté, olives',
    i: ['200 g Bœuf à braiser', '1 Carotte|Carottes', '0.5 Oignon', '150 ml Vin rouge', '1 Zeste d’orange|Zestes d’orange', '20 g Olives noires', '1 Gousse d’ail', '1 cs Huile d’olive', 'Herbes de Provence', 'Sel et poivre'],
    s: ['La veille si possible, faire mariner la viande dans le vin avec l’oignon, l’ail, la carotte et les herbes.', 'Égoutter la viande, la dorer dans l’huile d’olive.', 'Remettre la marinade, ajouter le zeste d’orange, couvrir et mijoter 3 heures à feu doux.', 'Ajouter les olives 15 minutes avant la fin. Servir avec des pâtes.'] },

  { n: 'Poule au pot', c: 'Plat', k: null, t: 180, m: null, kw: 'volaille, bouillon, henri IV, hiver',
    i: ['250 g Poule', '1 Carotte|Carottes', '0.5 Poireau', '0.5 Navet', '0.5 Oignon', '1 Clou de girofle', '50 g Riz', 'Bouquet garni', 'Sel et poivre'],
    s: ['Mettre la poule dans une grande marmite d’eau froide, porter à ébullition et écumer.', 'Ajouter l’oignon piqué de girofle et le bouquet garni, puis cuire 2 heures à petit frémissement.', 'Ajouter carottes, poireau et navet, puis cuire encore 40 minutes.', 'Cuire le riz dans un peu de bouillon et servir la poule découpée avec légumes et riz.'] },

  { n: 'Lapin chasseur', c: 'Plat', k: null, t: 75, m: null, kw: 'lapin, champignons, vin blanc, mijoté',
    i: ['250 g Lapin en morceaux', '60 g Champignons de Paris', '1 cc Échalote', '80 g Tomates concassées', '60 ml Vin blanc', '1 cs Huile', 'Thym', 'Sel et poivre'],
    s: ['Dorer les morceaux de lapin dans l’huile, puis ajouter l’échalote.', 'Verser le vin blanc, ajouter les tomates et le thym.', 'Couvrir et cuire 40 minutes à feu doux.', 'Ajouter les champignons émincés et cuire encore 15 minutes.'] },

  { n: 'Pintade aux choux', c: 'Plat', k: null, t: 100, m: null, kw: 'volaille, chou, hiver, terroir',
    i: ['250 g Pintade', '200 g Chou vert', '40 g Lardons', '1 Carotte|Carottes', '0.5 Oignon', '10 g Beurre', 'Sel et poivre'],
    s: ['Blanchir le chou en lanières 5 minutes dans l’eau bouillante.', 'Dorer la pintade dans le beurre, puis la réserver.', 'Faire revenir lardons, oignon et carotte, ajouter le chou.', 'Poser la pintade dessus, couvrir et cuire 1 h 15 à feu doux.'] },

  { n: 'Canard à l’orange', c: 'Plat', k: null, t: 50, m: null, kw: 'canard, fête, sauce sucrée-salée',
    i: ['1 Magret de canard|Magrets de canard', '1 Orange|Oranges', '1 cc Sucre', '1 cs Vinaigre', '50 ml Bouillon de volaille', '1 cc Maïzena', 'Sel et poivre'],
    s: ['Quadriller la peau du magret et le cuire 8 minutes côté peau, puis 4 minutes côté chair.', 'Le laisser reposer sous aluminium.', 'Dans une casserole, faire un caramel avec le sucre, ajouter le vinaigre, le jus d’orange et le bouillon.', 'Épaissir avec la maïzena délayée, ajouter des zestes, puis servir le magret tranché nappé de sauce.'] },

  { n: 'Paupiettes de veau', c: 'Plat', k: null, t: 60, m: null, kw: 'veau, mijoté, sauce, classique',
    i: ['1 Paupiette de veau|Paupiettes de veau', '1 Carotte|Carottes', '0.5 Oignon', '50 ml Vin blanc', '50 g Champignons', '1 cs Huile', 'Sel et poivre'],
    s: ['Dorer les paupiettes sur toutes les faces dans l’huile.', 'Ajouter l’oignon émincé et les carottes en rondelles, puis le vin blanc et 100 ml d’eau.', 'Couvrir et cuire 40 minutes à feu doux.', 'Ajouter les champignons 15 minutes avant la fin et servir avec du riz ou une purée.'] },

  { n: 'Rôti de veau aux champignons', c: 'Plat', k: null, t: 75, m: null, kw: 'veau, rôti, dimanche',
    i: ['180 g Rôti de veau', '80 g Champignons', '0.5 Oignon', '50 ml Vin blanc', '10 g Beurre', 'Thym', 'Sel et poivre'],
    s: ['Dorer le rôti dans le beurre sur toutes ses faces.', 'Ajouter l’oignon et le thym, puis le vin blanc.', 'Couvrir et cuire 45 minutes à feu doux en arrosant de temps en temps.', 'Ajouter les champignons 20 minutes avant la fin, puis trancher le rôti.'] },

  { n: 'Saucisse purée aux oignons', c: 'Plat', k: null, t: 35, m: null, kw: 'enfants, simple, purée',
    i: ['2 Saucisse|Saucisses', '250 g Pommes de terre', '60 ml Lait', '10 g Beurre', '0.5 Oignon', 'Sel et poivre'],
    s: ['Cuire les pommes de terre épluchées 20 minutes à l’eau salée.', 'Les écraser avec le lait chaud et le beurre.', 'Cuire les saucisses 15 minutes à la poêle avec l’oignon émincé.', 'Servir la purée avec les saucisses et les oignons fondants.'] },

  { n: 'Crozets aux diots', c: 'Plat', k: null, t: 40, m: null, kw: 'savoie, montagne, pâtes, saucisse',
    i: ['80 g Crozets', '1 Diot|Diots', '30 ml Crème fraîche', '30 g Beaufort', '0.25 Oignon', '30 ml Vin blanc', 'Sel et poivre'],
    s: ['Cuire les crozets 15 à 20 minutes dans l’eau salée.', 'Faire revenir l’oignon, ajouter les diots et le vin blanc, puis cuire 20 minutes à couvert.', 'Mélanger les crozets égouttés avec la crème et le beaufort râpé.', 'Servir avec les diots tranchés.'] },

  { n: 'Tourte à la viande', c: 'Plat', k: null, t: 70, m: null, kw: 'pâte feuilletée, four, alsace',
    i: ['0.25 Pâte feuilletée|Pâtes feuilletées', '120 g Chair à saucisse', '0.25 Oignon', '1 cc Persil', '0.25 Œuf', '1 Tranche de pain de mie|Tranches de pain de mie', '20 ml Lait', 'Sel et poivre'],
    s: ['Préchauffer le four à 190 °C et tremper le pain dans le lait.', 'Mélanger la viande, l’oignon haché, le persil, le pain essoré et l’œuf.', 'Étaler la moitié de la pâte dans un moule, garnir, couvrir avec le reste de pâte et souder les bords.', 'Dorer à l’œuf, faire une cheminée et cuire 45 minutes.'] },

  { n: 'Fricassée de poulet aux champignons', c: 'Plat', k: null, t: 45, m: null, kw: 'poulet, crème, champignons',
    i: ['1 Cuisse de poulet|Cuisses de poulet', '80 g Champignons', '0.5 Oignon', '50 ml Vin blanc', '40 ml Crème fraîche', '10 g Beurre', 'Sel et poivre'],
    s: ['Dorer le poulet dans le beurre, puis ajouter l’oignon.', 'Verser le vin blanc, couvrir et cuire 25 minutes.', 'Ajouter les champignons et cuire 10 minutes.', 'Ajouter la crème, laisser épaissir 3 minutes et servir avec du riz.'] },

  { n: 'Gigot de sept heures', c: 'Plat', k: null, t: 450, m: null, kw: 'agneau, fête, dimanche, confit',
    i: ['250 g Gigot d’agneau', '3 Gousse d’ail|Gousses d’ail', '1 Carotte|Carottes', '0.5 Oignon', '80 ml Vin blanc', '1 cs Huile d’olive', 'Thym et romarin', 'Sel et poivre'],
    s: ['Préchauffer le four à 120 °C.', 'Dorer le gigot dans une cocotte avec l’huile.', 'Ajouter l’ail en chemise, les légumes, les herbes, le vin et un verre d’eau.', 'Couvrir et cuire 7 heures au four en arrosant de temps en temps : la viande se sert à la cuillère.'] },

  { n: 'Épaule d’agneau confite', c: 'Plat', k: null, t: 270, m: null, kw: 'agneau, four, fondant',
    i: ['250 g Épaule d’agneau', '2 Gousse d’ail|Gousses d’ail', '200 g Pommes de terre', '1 cs Huile d’olive', 'Romarin', 'Sel et poivre'],
    s: ['Préchauffer le four à 150 °C.', 'Frotter l’épaule d’huile, de sel, de poivre et de romarin.', 'La mettre dans un plat avec l’ail et un fond d’eau, couvrir d’aluminium et cuire 3 heures.', 'Ajouter les pommes de terre en quartiers, retirer l’aluminium et cuire encore 1 heure.'] },

  { n: 'Hachis de bœuf aux carottes', c: 'Plat', k: null, t: 50, m: null, kw: 'gratin, purée, enfants',
    i: ['120 g Bœuf haché', '1 Carotte|Carottes', '200 g Pommes de terre', '60 ml Lait', '10 g Beurre', '0.25 Oignon', '20 g Gruyère râpé', 'Sel et poivre'],
    s: ['Cuire pommes de terre et carottes à l’eau 20 minutes.', 'Écraser les pommes de terre avec le lait et le beurre ; couper les carottes en dés.', 'Faire revenir la viande avec l’oignon et mélanger avec les carottes.', 'Mettre la viande au fond d’un plat, couvrir de purée et de gruyère, gratiner 20 minutes à 200 °C.'] },

  { n: 'Jambon braisé sauce madère', c: 'Plat', k: null, t: 30, m: null, kw: 'jambon, sauce, fête',
    i: ['1 Tranche épaisse de jambon|Tranches épaisses de jambon', '40 g Champignons', '30 ml Madère', '30 ml Crème fraîche', '10 g Beurre', '200 g Pommes de terre', 'Sel et poivre'],
    s: ['Cuire les pommes de terre à la vapeur.', 'Faire revenir les champignons dans le beurre, puis verser le madère.', 'Ajouter la crème et laisser réduire 3 minutes.', 'Réchauffer le jambon dans la sauce 5 minutes et servir.'] },

  { n: 'Quenelles sauce Nantua', c: 'Plat', k: null, t: 40, m: null, kw: 'lyon, poisson, gratin, sauce',
    i: ['2 Quenelle de brochet|Quenelles de brochet', '15 g Beurre', '15 g Farine', '150 ml Lait', '1 cc Concentré de tomate', '30 g Crevettes décortiquées', '20 g Gruyère râpé', 'Sel et poivre'],
    s: ['Préchauffer le four à 200 °C.', 'Préparer une béchamel avec beurre, farine et lait, puis ajouter le concentré de tomate et les crevettes.', 'Poser les quenelles dans un plat beurré et les napper de sauce.', 'Parsemer de gruyère et cuire 20 minutes : les quenelles doivent gonfler.'] },

  { n: 'Pot-au-feu de la mer', c: 'Plat', k: null, t: 45, m: null, kw: 'poisson, bouillon, léger',
    i: ['150 g Poissons blancs', '50 g Crevettes', '1 Carotte|Carottes', '0.5 Poireau', '1 Pomme de terre|Pommes de terre', '0.25 Fenouil', '1 Cube de bouillon', 'Sel et poivre'],
    s: ['Porter 500 ml d’eau à ébullition avec le cube de bouillon.', 'Ajouter carottes, poireau, fenouil et pommes de terre en morceaux, puis cuire 20 minutes.', 'Ajouter le poisson en gros morceaux et cuire 6 minutes à frémissement.', 'Ajouter les crevettes 2 minutes et servir dans des assiettes creuses.'] },

  { n: 'Truffade', c: 'Plat', k: null, t: 40, m: null, kw: 'auvergne, fromage, pommes de terre',
    i: ['250 g Pommes de terre', '80 g Tomme fraîche', '30 g Lardons', '1 Gousse d’ail', '1 cs Persil', 'Sel et poivre'],
    s: ['Couper les pommes de terre en fines rondelles.', 'Les faire dorer 25 minutes à la poêle avec les lardons, en remuant.', 'Ajouter la tomme en lamelles et l’ail haché, puis laisser fondre en mélangeant.', 'Laisser former une croûte dorée dessous, parsemer de persil et servir.'] },

  { n: 'Gratin de crozets', c: 'Plat', k: null, t: 45, m: null, kw: 'savoie, gratin, pâtes',
    i: ['80 g Crozets', '40 g Lardons', '0.25 Oignon', '50 ml Crème fraîche', '40 g Reblochon', 'Sel et poivre'],
    s: ['Cuire les crozets 15 minutes dans l’eau salée.', 'Faire revenir les lardons et l’oignon émincé.', 'Mélanger crozets, lardons et crème dans un plat.', 'Poser le reblochon en tranches et gratiner 20 minutes à 200 °C.'] },
  { n: 'Nems au porc', c: 'Plat', k: null, t: 60, m: null, kw: 'vietnam, asiatique, friture, apéritif',
    i: ['4 Galette de riz|Galettes de riz', '80 g Porc haché', '20 g Vermicelles de riz', '0.5 Carotte', '2 Champignon noir|Champignons noirs', '0.25 Oignon', '1 cc Sauce nuoc-mâm', '4 Feuille de salade|Feuilles de salade', 'Menthe', 'Huile de friture'],
    s: ['Réhydrater les vermicelles et les champignons dans l’eau chaude, puis les couper court.', 'Mélanger le porc, la carotte râpée, l’oignon haché, les vermicelles, les champignons et le nuoc-mâm.', 'Humidifier une galette, poser un boudin de farce, rabattre les côtés et rouler serré.', 'Frire les nems 6 à 8 minutes dans l’huile à 170 °C jusqu’à ce qu’ils soient dorés.', 'Servir avec la salade, la menthe et une sauce nuoc-mâm sucrée.'] },

  { n: 'Bo bun au bœuf', c: 'Plat', k: null, t: 35, m: null, kw: 'vietnam, asiatique, bowl, frais',
    i: ['70 g Vermicelles de riz', '100 g Bœuf', '0.5 Carotte', '0.25 Concombre', '30 g Pousses de soja', '2 Nem|Nems', '1 cs Cacahuètes', 'Menthe et coriandre', '1 cs Sauce nuoc-mâm', '1 cc Sucre', '0.5 Citron vert', '0.25 Oignon'],
    s: ['Cuire les vermicelles selon le paquet, les rincer à l’eau froide.', 'Mélanger nuoc-mâm, sucre, jus de citron vert et 2 cuillères d’eau pour la sauce.', 'Sauter le bœuf en lamelles avec l’oignon 2 minutes à feu vif.', 'Dans un bol : salade, vermicelles, carotte et concombre en bâtonnets, soja, herbes.', 'Ajouter le bœuf, les nems coupés et les cacahuètes, puis arroser de sauce.'] },

  { n: 'Phở au bœuf', c: 'Plat', k: null, t: 60, m: null, kw: 'vietnam, soupe, bouillon, asiatique',
    i: ['80 g Nouilles de riz', '100 g Bœuf en fines tranches', '400 ml Bouillon de bœuf', '1 Anis étoilé', '1 Bâton de cannelle|Bâtons de cannelle', '1 cc Gingembre râpé', '0.25 Oignon', '1 cs Sauce nuoc-mâm', '30 g Pousses de soja', 'Coriandre et basilic thaï', '0.5 Citron vert'],
    s: ['Griller à sec l’oignon et le gingembre coupés en deux, puis les mettre dans le bouillon avec l’anis et la cannelle.', 'Laisser frémir 30 minutes, filtrer et assaisonner de nuoc-mâm.', 'Cuire les nouilles et les répartir dans les bols.', 'Poser le bœuf cru très finement tranché, puis verser le bouillon bouillant dessus : il cuit tout seul.', 'Servir avec soja, herbes et citron vert.'] },

  { n: 'Butter chicken', c: 'Plat', k: null, t: 50, m: null, kw: 'inde, curry, poulet, crème',
    i: ['150 g Blanc de poulet', '50 g Yaourt nature', '100 g Coulis de tomate', '40 ml Crème', '15 g Beurre', '0.25 Oignon', '1 Gousse d’ail', '1 cc Gingembre râpé', '1 cc Garam masala', '0.5 cc Curcuma', '0.5 cc Paprika', '70 g Riz basmati', 'Sel'],
    s: ['Mariner le poulet en dés avec le yaourt et la moitié des épices au moins 20 minutes.', 'Dorer le poulet dans la moitié du beurre et le réserver.', 'Faire revenir oignon, ail et gingembre dans le reste du beurre, ajouter les épices restantes et le coulis.', 'Laisser mijoter 10 minutes, ajouter la crème et le poulet, puis cuire 10 minutes.', 'Servir avec le riz basmati.'] },

  { n: 'Tajine d’agneau aux pruneaux', c: 'Plat', k: null, t: 120, m: null, kw: 'maroc, sucré-salé, mijoté, agneau',
    i: ['180 g Épaule d’agneau', '40 g Pruneaux', '0.5 Oignon', '1 cs Amandes', '1 cc Miel', '0.5 cc Cannelle', '0.5 cc Ras el hanout', '1 pincée Safran', '1 cs Huile d’olive', 'Sel et poivre'],
    s: ['Dorer l’agneau en morceaux dans l’huile avec l’oignon émincé.', 'Ajouter les épices, couvrir d’eau à mi-hauteur, couvrir et mijoter 1 h 30.', 'Ajouter les pruneaux, le miel et un peu de cannelle, puis cuire encore 20 minutes.', 'Parsemer d’amandes grillées et servir avec de la semoule ou du pain.'] },

  { n: 'Tajine de kefta aux œufs', c: 'Plat', k: null, t: 40, m: null, kw: 'maroc, boulettes, tomate, épices',
    i: ['120 g Bœuf haché', '1 Œuf|Œufs', '150 g Tomates concassées', '0.25 Oignon', '1 Gousse d’ail', '0.5 cc Cumin', '0.5 cc Paprika', '1 cs Coriandre', '1 cs Huile d’olive', 'Sel et poivre'],
    s: ['Mélanger la viande avec la moitié du cumin, du paprika et de la coriandre, puis former de petites boulettes.', 'Faire revenir l’oignon et l’ail dans l’huile, ajouter les tomates et le reste des épices.', 'Déposer les boulettes dans la sauce, couvrir et cuire 20 minutes.', 'Casser les œufs par-dessus et cuire à couvert 5 minutes. Servir avec du pain.'] },

  { n: 'Kebab maison', c: 'Plat', k: null, t: 35, m: null, kw: 'street food, sandwich, poulet, enfants',
    i: ['130 g Blanc de poulet', '1 Pain pita|Pains pita', '40 g Yaourt grec', '0.5 Tomate', '0.25 Oignon rouge', '2 Feuille de salade|Feuilles de salade', '1 cc Épices kebab', '0.5 Gousse d’ail', '1 cs Huile d’olive', 'Sel'],
    s: ['Mariner le poulet en fines lanières avec l’huile, les épices et le sel 15 minutes.', 'Mélanger le yaourt avec l’ail râpé et un peu de sel pour la sauce blanche.', 'Saisir le poulet 6 à 8 minutes dans une poêle très chaude.', 'Garnir le pain chaud de salade, tomate, oignon, poulet et sauce.'] },

  { n: 'Poulet korma', c: 'Plat', k: null, t: 45, m: null, kw: 'inde, curry doux, amandes',
    i: ['150 g Blanc de poulet', '0.25 Oignon', '1 Gousse d’ail', '1 cs Poudre d’amandes', '60 ml Lait de coco', '40 g Yaourt nature', '1 cc Curry doux', '0.5 cc Garam masala', '1 cs Huile', '70 g Riz basmati', 'Sel'],
    s: ['Faire revenir l’oignon et l’ail dans l’huile, ajouter les épices 1 minute.', 'Ajouter le poulet en dés et le dorer.', 'Verser le lait de coco et la poudre d’amandes, puis cuire 15 minutes à feu doux.', 'Hors du feu, ajouter le yaourt et servir avec le riz.'] },

  { n: 'Poulet aigre-doux', c: 'Plat', k: null, t: 30, m: null, kw: 'chine, asiatique, ananas, sucré-salé',
    i: ['130 g Blanc de poulet', '0.5 Poivron', '50 g Ananas', '1 cs Ketchup', '1 cs Vinaigre de riz', '1 cc Sucre', '1 cs Sauce soja', '1 cc Maïzena', '1 cs Huile', '70 g Riz'],
    s: ['Cuire le riz.', 'Mélanger ketchup, vinaigre, sucre, soja, maïzena et 3 cuillères d’eau.', 'Sauter le poulet en dés dans l’huile 5 minutes, ajouter le poivron 3 minutes.', 'Ajouter l’ananas et la sauce, laisser épaissir 1 minute et servir avec le riz.'] },

  { n: 'Bibimbap', c: 'Plat', k: null, t: 40, m: null, kw: 'corée, bowl, riz, œuf',
    i: ['80 g Riz', '80 g Bœuf haché', '0.5 Carotte', '40 g Épinards', '30 g Pousses de soja', '0.25 Courgette', '1 Œuf|Œufs', '1 cs Sauce soja', '1 cc Huile de sésame', '1 cc Pâte de piment gochujang', '1 cc Graines de sésame'],
    s: ['Cuire le riz.', 'Faire sauter séparément la carotte en bâtonnets, la courgette, les épinards et le soja avec un peu d’huile de sésame.', 'Cuire la viande avec la sauce soja.', 'Cuire l’œuf au plat en gardant le jaune coulant.', 'Disposer le riz, les légumes en secteurs, la viande et l’œuf ; ajouter le gochujang et les graines de sésame, puis mélanger au moment de manger.'] },

  { n: 'Ramen au porc', c: 'Plat', k: null, t: 45, m: null, kw: 'japon, soupe, nouilles, bouillon',
    i: ['90 g Nouilles ramen', '100 g Poitrine de porc', '400 ml Bouillon de volaille', '1 cs Sauce soja', '1 cc Miso', '1 Œuf|Œufs', '1 Oignon nouveau|Oignons nouveaux', '20 g Maïs', '1 cc Gingembre râpé', '1 Gousse d’ail'],
    s: ['Cuire l’œuf 6 minutes 30, le passer à l’eau froide et l’écaler.', 'Chauffer le bouillon avec l’ail, le gingembre, la sauce soja et le miso.', 'Dorer la poitrine en tranches à la poêle.', 'Cuire les nouilles, les mettre dans un bol et verser le bouillon.', 'Ajouter le porc, l’œuf coupé en deux, le maïs et l’oignon nouveau.'] },

  { n: 'Poulet katsu curry', c: 'Plat', k: null, t: 45, m: null, kw: 'japon, pané, curry, riz',
    i: ['130 g Blanc de poulet', '1 cs Farine', '0.5 Œuf', '30 g Chapelure panko', '0.5 Carotte', '0.25 Oignon', '1 Pomme de terre|Pommes de terre', '1 cc Curry', '200 ml Bouillon', '1 cc Maïzena', '80 g Riz', 'Huile'],
    s: ['Faire revenir oignon, carotte et pomme de terre en dés, ajouter le curry puis le bouillon ; cuire 20 minutes.', 'Épaissir la sauce avec la maïzena délayée.', 'Aplatir le poulet, le passer dans farine, œuf battu puis panko.', 'Le frire à la poêle 4 minutes par face dans un fond d’huile, puis le trancher.', 'Servir avec le riz et la sauce curry.'] },

  { n: 'Poulet au gingembre et sésame', c: 'Plat', k: null, t: 25, m: null, kw: 'asiatique, wok, rapide',
    i: ['130 g Blanc de poulet', '1 cc Gingembre râpé', '1 Gousse d’ail', '1 cs Sauce soja', '1 cc Miel', '1 cc Huile de sésame', '1 cc Graines de sésame', '80 g Brocoli', '70 g Riz'],
    s: ['Cuire le riz et le brocoli en petits bouquets.', 'Sauter le poulet en dés dans l’huile de sésame 5 minutes.', 'Ajouter gingembre et ail râpés, puis soja et miel ; laisser caraméliser 2 minutes.', 'Ajouter le brocoli, parsemer de sésame et servir avec le riz.'] },

  { n: 'Tacos mexicains au bœuf', c: 'Plat', k: null, t: 30, m: null, kw: 'mexique, tortilla, épicé',
    i: ['3 Petite tortilla de maïs|Petites tortillas de maïs', '120 g Bœuf haché', '0.5 Tomate', '0.25 Oignon rouge', '0.25 Avocat', '0.5 Citron vert', '1 cc Épices tex-mex', 'Coriandre', 'Sel'],
    s: ['Cuire la viande avec les épices et un peu de sel 8 minutes.', 'Préparer une salsa avec tomate, oignon et coriandre hachés et le jus de citron vert.', 'Chauffer les tortillas à sec dans la poêle.', 'Garnir de viande, de salsa et de tranches d’avocat.'] },

  { n: 'Burritos au poulet', c: 'Plat', k: null, t: 35, m: null, kw: 'mexique, wrap, haricots rouges',
    i: ['1 Grande tortilla|Grandes tortillas', '100 g Blanc de poulet', '50 g Haricots rouges', '40 g Riz cuit', '20 g Cheddar râpé', '1 cs Crème fraîche', '1 cs Salsa', '1 cc Épices tex-mex'],
    s: ['Cuire le poulet en lanières avec les épices.', 'Réchauffer les haricots rouges égouttés.', 'Garnir la tortilla de riz, haricots, poulet, cheddar, salsa et crème.', 'Rouler en repliant les bords, puis dorer 2 minutes par face à la poêle.'] },

  { n: 'Enchiladas au poulet', c: 'Plat', k: null, t: 45, m: null, kw: 'mexique, gratin, tortilla, fromage',
    i: ['2 Tortilla|Tortillas', '100 g Blanc de poulet cuit', '150 g Coulis de tomate', '30 g Cheddar râpé', '30 g Maïs', '1 cc Épices tex-mex', '0.25 Oignon'],
    s: ['Préchauffer le four à 200 °C.', 'Mélanger le coulis avec les épices et l’oignon haché.', 'Effilocher le poulet, le mélanger avec le maïs et un peu de sauce.', 'Garnir et rouler les tortillas, les poser dans un plat, couvrir de sauce et de cheddar.', 'Gratiner 20 minutes.'] },

  { n: 'Chakchouka aux merguez', c: 'Plat', k: null, t: 35, m: null, kw: 'maghreb, œufs, poivrons, épicé',
    i: ['1 Merguez|Merguez', '1 Poivron|Poivrons', '150 g Tomates concassées', '0.25 Oignon', '1 Gousse d’ail', '1 Œuf|Œufs', '0.5 cc Cumin', '1 cs Huile d’olive', 'Sel'],
    s: ['Dorer les merguez en tronçons et les réserver.', 'Faire fondre l’oignon, l’ail et le poivron en lanières dans l’huile 10 minutes.', 'Ajouter tomates et cumin, puis cuire 10 minutes.', 'Remettre les merguez, faire des puits, casser les œufs et cuire à couvert 5 minutes.'] },

  { n: 'Moussaka grecque à l’agneau', c: 'Plat', k: null, t: 90, m: null, kw: 'grèce, aubergines, gratin, béchamel',
    i: ['1 Aubergine|Aubergines', '120 g Agneau haché', '100 g Tomates concassées', '0.25 Oignon', '0.5 cc Cannelle', '15 g Beurre', '15 g Farine', '150 ml Lait', '20 g Parmesan', '1 cs Huile d’olive', 'Sel et poivre'],
    s: ['Couper l’aubergine en tranches, les huiler et les rôtir 20 minutes à 200 °C.', 'Cuire la viande avec l’oignon, les tomates et la cannelle 15 minutes.', 'Préparer une béchamel avec beurre, farine et lait.', 'Alterner aubergines et viande dans un plat, finir par la béchamel et le parmesan.', 'Cuire 35 minutes à 180 °C.'] },

  { n: 'Souvlaki de porc et tzatziki', c: 'Plat', k: null, t: 40, m: null, kw: 'grèce, brochettes, barbecue',
    i: ['130 g Échine de porc', '1 cs Huile d’olive', '0.5 Citron', '1 cc Origan', '1 Gousse d’ail', '60 g Yaourt grec', '0.25 Concombre', '1 Pain pita|Pains pita', 'Sel et poivre'],
    s: ['Mariner le porc en cubes avec l’huile, le citron, l’origan et l’ail 20 minutes.', 'Râper le concombre, l’essorer et le mélanger au yaourt avec sel et un peu d’ail : c’est le tzatziki.', 'Enfiler la viande sur des brochettes et la griller 10 à 12 minutes.', 'Servir avec la pita chaude et le tzatziki.'] },

  { n: 'Goulash hongrois', c: 'Plat', k: null, t: 120, m: null, kw: 'hongrie, bœuf, paprika, mijoté',
    i: ['180 g Bœuf à braiser', '0.5 Oignon', '1 Poivron|Poivrons', '1 Pomme de terre|Pommes de terre', '1 cs Paprika', '100 g Tomates concassées', '0.5 cc Cumin', '1 cs Huile', 'Sel et poivre'],
    s: ['Faire fondre l’oignon dans l’huile, ajouter la viande en cubes et la dorer.', 'Hors du feu, ajouter le paprika et le cumin, mélanger.', 'Ajouter tomates et 300 ml d’eau, couvrir et mijoter 1 h 15.', 'Ajouter poivron et pommes de terre en dés, puis cuire encore 30 minutes.'] },

  { n: 'Saltimbocca de veau', c: 'Plat', k: null, t: 20, m: null, kw: 'italie, veau, jambon cru, sauge',
    i: ['2 Petite escalope de veau|Petites escalopes de veau', '2 Tranche de jambon cru|Tranches de jambon cru', '2 Feuille de sauge|Feuilles de sauge', '30 ml Vin blanc', '10 g Beurre', 'Poivre'],
    s: ['Poser sur chaque escalope une feuille de sauge et une tranche de jambon, et fixer avec une pique.', 'Cuire 2 minutes côté jambon puis 1 minute de l’autre côté dans le beurre.', 'Retirer la viande, verser le vin blanc dans la poêle et gratter les sucs.', 'Napper la viande de ce jus et servir avec des pâtes ou des légumes.'] },

  { n: 'Spaghetti alle vongole', c: 'Plat', k: null, t: 25, m: null, kw: 'italie, palourdes, fruits de mer, pâtes',
    i: ['100 g Spaghetti', '200 g Palourdes', '1 Gousse d’ail', '30 ml Vin blanc', '1 cs Huile d’olive', '1 pincée Piment', '1 cs Persil'],
    s: ['Faire dégorger les palourdes 30 minutes dans l’eau salée.', 'Cuire les spaghetti al dente.', 'Faire revenir l’ail et le piment dans l’huile, ajouter les palourdes et le vin, couvrir 3 minutes : elles s’ouvrent.', 'Ajouter les pâtes égouttées, mélanger 1 minute et parsemer de persil.'] },

  { n: 'Pâtes cacio e pepe', c: 'Végétarien', k: null, t: 15, m: null, kw: 'italie, fromage, rapide, pâtes',
    i: ['100 g Spaghetti', '35 g Pecorino râpé', '1 cc Poivre concassé'],
    s: ['Cuire les pâtes dans peu d’eau salée et garder une louche d’eau de cuisson.', 'Griller le poivre à sec 1 minute dans une grande poêle, ajouter un peu d’eau de cuisson.', 'Ajouter les pâtes égouttées, hors du feu, puis le pecorino petit à petit en mélangeant vivement.', 'Ajuster avec un peu d’eau de cuisson pour obtenir une sauce crémeuse.'] },

  { n: 'Pâtes alla norma', c: 'Végétarien', k: null, t: 35, m: null, kw: 'italie, sicile, aubergine, tomate',
    i: ['100 g Pâtes', '0.5 Aubergine', '150 g Tomates concassées', '1 Gousse d’ail', '2 cs Huile d’olive', '20 g Ricotta salée ou parmesan', 'Basilic', 'Sel'],
    s: ['Couper l’aubergine en dés et la dorer 10 minutes dans l’huile.', 'Ajouter l’ail et les tomates, puis cuire 15 minutes.', 'Cuire les pâtes et les mélanger à la sauce.', 'Servir avec le fromage râpé et le basilic.'] },

  { n: 'Risotto au poulet et parmesan', c: 'Plat', k: null, t: 40, m: null, kw: 'italie, riz, crémeux',
    i: ['80 g Riz arborio', '100 g Blanc de poulet', '0.25 Oignon', '30 ml Vin blanc', '300 ml Bouillon de volaille', '20 g Parmesan', '10 g Beurre'],
    s: ['Dorer le poulet en dés et le réserver.', 'Faire revenir l’oignon dans le beurre, ajouter le riz et le nacrer 2 minutes.', 'Verser le vin, puis le bouillon chaud louche par louche en remuant pendant 18 minutes.', 'Ajouter le poulet et le parmesan hors du feu, couvrir 2 minutes et servir.'] },

  { n: 'Arancini', c: 'Plat', k: null, t: 60, m: null, kw: 'italie, sicile, riz, friture, apéritif',
    i: ['100 g Riz arborio cuit en risotto', '20 g Mozzarella', '20 g Parmesan', '0.5 Œuf', '30 g Chapelure', 'Huile de friture'],
    s: ['Mélanger le risotto froid avec le parmesan.', 'Former des boules, mettre un dé de mozzarella au centre et refermer.', 'Les passer dans l’œuf battu puis dans la chapelure.', 'Frire 4 minutes dans l’huile à 175 °C et égoutter.'] },

  { n: 'Gnocchis à la sauce gorgonzola', c: 'Végétarien', k: null, t: 15, m: null, kw: 'italie, fromage, rapide',
    i: ['200 g Gnocchis', '40 g Gorgonzola', '50 ml Crème', '1 cs Noix', 'Poivre'],
    s: ['Cuire les gnocchis jusqu’à ce qu’ils remontent à la surface.', 'Faire fondre le gorgonzola dans la crème à feu doux.', 'Ajouter les gnocchis égouttés et mélanger.', 'Parsemer de noix concassées et poivrer.'] },

  { n: 'Pizza margherita', c: 'Végétarien', k: null, t: 90, m: null, kw: 'italie, pizza, tomate, mozzarella',
    i: ['100 g Farine', '2 g Levure de boulanger', '60 ml Eau tiède', '1 cs Huile d’olive', '80 g Coulis de tomate', '60 g Mozzarella', 'Basilic', 'Sel'],
    s: ['Mélanger farine, levure, eau, sel et huile, puis pétrir 5 minutes.', 'Laisser lever 1 heure sous un torchon.', 'Préchauffer le four au maximum, étaler la pâte finement.', 'Étaler le coulis, ajouter la mozzarella en morceaux et cuire 10 minutes.', 'Ajouter le basilic frais à la sortie du four.'] },

  { n: 'Calzone jambon champignons', c: 'Plat', k: null, t: 90, m: null, kw: 'italie, pizza, chausson',
    i: ['100 g Farine', '2 g Levure de boulanger', '60 ml Eau tiède', '1 cs Huile d’olive', '50 g Coulis de tomate', '1 Tranche de jambon|Tranches de jambon', '40 g Champignons', '50 g Mozzarella', 'Sel'],
    s: ['Préparer une pâte à pizza et la laisser lever 1 heure.', 'Préchauffer le four à 240 °C et étaler la pâte en disque.', 'Garnir une moitié de coulis, jambon, champignons et mozzarella.', 'Replier, souder les bords et cuire 15 minutes.'] },

  { n: 'Poulet tandoori', c: 'Plat', k: null, t: 50, m: null, kw: 'inde, four, épices, yaourt',
    i: ['1 Cuisse de poulet|Cuisses de poulet', '60 g Yaourt nature', '1 cc Épices tandoori', '0.5 Citron', '1 Gousse d’ail', '70 g Riz basmati', 'Sel'],
    s: ['Entailler la viande et la mariner dans le yaourt, les épices, l’ail et le citron au moins 1 heure.', 'Préchauffer le four à 220 °C.', 'Cuire le poulet 35 minutes en le retournant à mi-cuisson.', 'Servir avec le riz basmati et du citron.'] },

  { n: 'Biryani au poulet', c: 'Plat', k: null, t: 60, m: null, kw: 'inde, riz, épices',
    i: ['80 g Riz basmati', '120 g Poulet', '0.5 Oignon', '40 g Yaourt', '1 cc Garam masala', '0.5 cc Curcuma', '1 Gousse d’ail', '1 cs Huile', '1 cs Raisins secs', 'Coriandre', 'Sel'],
    s: ['Mariner le poulet en morceaux dans le yaourt, l’ail et les épices 20 minutes.', 'Faire dorer l’oignon émincé dans l’huile, ajouter le poulet et cuire 10 minutes.', 'Ajouter le riz rincé, les raisins et 180 ml d’eau, saler.', 'Couvrir et cuire 15 minutes à feu doux, puis laisser reposer 5 minutes et parsemer de coriandre.'] },

  { n: 'Curry vert thaï au poulet', c: 'Plat', k: null, t: 30, m: null, kw: 'thaïlande, lait de coco, épicé',
    i: ['130 g Blanc de poulet', '1 cc Pâte de curry vert', '120 ml Lait de coco', '50 g Haricots verts', '0.25 Courgette', '1 cc Sauce nuoc-mâm', 'Basilic thaï', '70 g Riz jasmin'],
    s: ['Cuire le riz.', 'Faire chauffer la pâte de curry avec un peu de lait de coco 1 minute.', 'Ajouter le poulet en lamelles, puis le reste du lait de coco et les légumes.', 'Cuire 10 minutes, assaisonner de nuoc-mâm et ajouter le basilic.'] },

  { n: 'Riz frit thaï aux crevettes', c: 'Rapide', k: null, t: 20, m: null, kw: 'thaïlande, wok, riz, restes',
    i: ['150 g Riz cuit froid', '80 g Crevettes', '1 Œuf|Œufs', '0.25 Oignon', '30 g Petits pois', '1 cs Sauce soja', '1 cc Sauce nuoc-mâm', '1 cs Huile', '0.5 Citron vert'],
    s: ['Faire revenir l’oignon dans l’huile, ajouter les crevettes 2 minutes.', 'Pousser sur le côté, brouiller l’œuf dans le wok.', 'Ajouter le riz et les petits pois, puis sauter 4 minutes à feu vif.', 'Assaisonner de soja et de nuoc-mâm, servir avec le citron vert.'] },

  { n: 'Feijoada simplifiée', c: 'Plat', k: null, t: 120, m: null, kw: 'brésil, haricots noirs, porc, mijoté',
    i: ['80 g Haricots noirs secs', '80 g Échine de porc', '1 Saucisse fumée|Saucisses fumées', '30 g Lardons', '0.25 Oignon', '1 Gousse d’ail', '1 Feuille de laurier', '60 g Riz', 'Sel et poivre'],
    s: ['Faire tremper les haricots une nuit.', 'Dorer lardons, porc en cubes, oignon et ail.', 'Ajouter les haricots, le laurier et de l’eau à hauteur ; mijoter 1 h 30.', 'Ajouter la saucisse en rondelles 20 minutes avant la fin. Servir avec du riz.'] },

  { n: 'Poulet jerk à la jamaïcaine', c: 'Plat', k: null, t: 50, m: null, kw: 'jamaïque, épicé, four',
    i: ['1 Cuisse de poulet|Cuisses de poulet', '1 cc Épices jerk', '1 cc Sauce soja', '0.5 Citron vert', '1 cc Sucre roux', '1 cs Huile', '60 g Riz', '30 g Haricots rouges'],
    s: ['Mariner le poulet avec les épices, la sauce soja, le citron vert, le sucre et l’huile 1 heure.', 'Cuire 35 minutes au four à 210 °C.', 'Cuire le riz avec les haricots rouges égouttés.', 'Servir le poulet avec le riz aux haricots.'] },

  { n: 'Accras de morue', c: 'Apéritif', k: null, t: 45, m: null, kw: 'antilles, beignets, poisson, friture',
    i: ['60 g Morue dessalée', '40 g Farine', '0.5 Œuf', '50 ml Eau', '1 cc Persil', '0.5 Gousse d’ail', '1 pincée Piment', '1 g Levure chimique', 'Huile de friture'],
    s: ['Pocher la morue 10 minutes, l’égoutter et l’effilocher.', 'Mélanger farine, levure, œuf et eau pour une pâte épaisse.', 'Ajouter la morue, l’ail, le persil et le piment.', 'Frire des petites cuillères de pâte 3 minutes dans l’huile chaude et égoutter.'] },

  { n: 'Couscous royal', c: 'Plat', k: null, t: 100, m: null, kw: 'maghreb, semoule, agneau, merguez',
    i: ['80 g Semoule', '80 g Épaule d’agneau', '1 Merguez|Merguez', '1 Pilon de poulet|Pilons de poulet', '1 Carotte|Carottes', '0.5 Courgette', '0.5 Navet', '40 g Pois chiches', '1 cc Ras el hanout', '1 cs Concentré de tomate', '10 g Beurre', 'Sel et poivre'],
    s: ['Dorer l’agneau et le poulet dans une marmite, ajouter le concentré, les épices et 600 ml d’eau.', 'Mijoter 45 minutes, puis ajouter carottes et navet.', 'Après 15 minutes, ajouter courgette et pois chiches et cuire encore 15 minutes.', 'Griller les merguez à part et préparer la semoule avec de l’eau bouillante et le beurre.', 'Servir la semoule avec viandes, légumes et bouillon.'] },

  { n: 'Pastilla au poulet', c: 'Plat', k: null, t: 90, m: null, kw: 'maroc, sucré-salé, feuilles de brick, fête',
    i: ['3 Feuille de brick|Feuilles de brick', '120 g Poulet', '0.25 Oignon', '1 Œuf|Œufs', '20 g Amandes', '1 cc Sucre glace', '0.5 cc Cannelle', '1 pincée Safran', '15 g Beurre', 'Coriandre', 'Sel'],
    s: ['Cuire le poulet avec l’oignon, le safran et un peu d’eau 30 minutes, puis l’effilocher.', 'Faire réduire le jus, y cuire l’œuf battu en brouillade.', 'Concasser les amandes grillées avec sucre et cannelle.', 'Superposer les feuilles beurrées, garnir de poulet, d’œufs et d’amandes, puis refermer.', 'Cuire 20 minutes à 190 °C et saupoudrer de sucre glace et de cannelle.'] },

  { n: 'Gyozas au porc', c: 'Apéritif', k: null, t: 50, m: null, kw: 'japon, raviolis, asiatique',
    i: ['8 Feuille à gyoza|Feuilles à gyoza', '80 g Porc haché', '30 g Chou chinois', '1 Oignon nouveau', '1 cc Gingembre râpé', '1 cc Sauce soja', '1 cc Huile de sésame', '1 cs Huile'],
    s: ['Mélanger le porc, le chou haché, l’oignon, le gingembre, la soja et l’huile de sésame.', 'Mettre une cuillère de farce sur chaque feuille, humidifier le bord et plisser pour fermer.', 'Dorer les gyozas 2 minutes dans l’huile, côté plat en bas.', 'Ajouter 50 ml d’eau, couvrir et cuire 6 minutes jusqu’à évaporation. Servir avec de la sauce soja.'] },
  { n: 'Velouté de brocoli', c: 'Léger', k: null, t: 30, m: null, kw: 'soupe, légumes verts, hiver',
    i: ['200 g Brocoli', '1 Pomme de terre|Pommes de terre', '0.25 Oignon', '300 ml Bouillon de légumes', '1 cs Crème fraîche', 'Sel et poivre'],
    s: ['Faire revenir l’oignon dans une casserole avec un filet d’huile.', 'Ajouter le brocoli en bouquets, la pomme de terre en dés et le bouillon.', 'Cuire 20 minutes, puis mixer.', 'Ajouter la crème, saler et poivrer.'] },

  { n: 'Velouté de chou-fleur', c: 'Léger', k: null, t: 30, m: null, kw: 'soupe, hiver, doux',
    i: ['250 g Chou-fleur', '0.25 Oignon', '300 ml Bouillon de légumes', '50 ml Lait', '1 pincée Muscade', 'Sel et poivre'],
    s: ['Faire revenir l’oignon.', 'Ajouter le chou-fleur et le bouillon, puis cuire 20 minutes.', 'Mixer avec le lait jusqu’à obtenir un velouté lisse.', 'Assaisonner de muscade, sel et poivre.'] },

  { n: 'Soupe de petits pois à la menthe', c: 'Léger', k: null, t: 25, m: null, kw: 'soupe, printemps, frais',
    i: ['150 g Petits pois', '0.25 Oignon', '250 ml Bouillon de légumes', '4 Feuille de menthe|Feuilles de menthe', '1 cs Crème fraîche', 'Sel et poivre'],
    s: ['Faire fondre l’oignon dans un filet d’huile.', 'Ajouter les petits pois et le bouillon, puis cuire 12 minutes.', 'Mixer avec la menthe.', 'Servir chaud ou froid avec un trait de crème.'] },

  { n: 'Soupe chinoise aux nouilles et poulet', c: 'Léger', k: null, t: 25, m: null, kw: 'soupe, asiatique, bouillon',
    i: ['40 g Nouilles chinoises', '80 g Blanc de poulet', '350 ml Bouillon de volaille', '1 cs Sauce soja', '0.5 Carotte', '2 Champignon|Champignons', '1 Oignon nouveau', '1 cc Gingembre râpé'],
    s: ['Chauffer le bouillon avec le gingembre et la sauce soja.', 'Ajouter le poulet en fines lamelles, la carotte en julienne et les champignons émincés.', 'Cuire 8 minutes, puis ajouter les nouilles 3 minutes.', 'Parsemer d’oignon nouveau.'] },

  { n: 'Soupe miso', c: 'Léger', k: null, t: 15, m: null, kw: 'japon, soupe, tofu, rapide',
    i: ['1 cs Pâte miso', '300 ml Eau', '50 g Tofu', '1 cs Algues wakame', '1 Oignon nouveau'],
    s: ['Faire tremper les algues 5 minutes dans l’eau.', 'Chauffer l’eau sans la faire bouillir.', 'Délayer le miso dans un peu d’eau chaude, puis l’ajouter.', 'Ajouter le tofu en dés, les algues et l’oignon nouveau émincé.'] },

  { n: 'Soupe de poisson', c: 'Léger', k: null, t: 50, m: null, kw: 'poisson, provence, soupe',
    i: ['150 g Poisson blanc', '0.25 Oignon', '0.5 Poireau', '1 Tomate|Tomates', '1 Gousse d’ail', '1 pincée Safran', '1 cs Huile d’olive', '1 Tranche de pain|Tranches de pain', '10 g Gruyère râpé', 'Sel et poivre'],
    s: ['Faire revenir oignon, poireau et ail dans l’huile.', 'Ajouter tomate, safran, poisson et 400 ml d’eau.', 'Cuire 25 minutes, mixer et passer au chinois.', 'Servir avec le pain grillé frotté d’ail et le gruyère.'] },

  { n: 'Soupe de tomates', c: 'Léger', k: null, t: 30, m: null, kw: 'soupe, tomate, été',
    i: ['300 g Tomates', '0.25 Oignon', '1 Gousse d’ail', '200 ml Bouillon de légumes', '1 cs Huile d’olive', 'Basilic', 'Sel et poivre'],
    s: ['Faire revenir l’oignon et l’ail dans l’huile.', 'Ajouter les tomates en morceaux et le bouillon.', 'Cuire 20 minutes, puis mixer.', 'Ajouter le basilic, saler et poivrer.'] },

  { n: 'Soupe de courgettes au fromage frais', c: 'Léger', k: null, t: 25, m: null, kw: 'soupe, été, enfants',
    i: ['250 g Courgettes', '0.25 Oignon', '250 ml Bouillon de légumes', '1 Portion de fromage frais|Portions de fromage frais', 'Sel et poivre'],
    s: ['Faire revenir l’oignon.', 'Ajouter les courgettes en rondelles et le bouillon.', 'Cuire 15 minutes.', 'Mixer avec le fromage frais, saler et poivrer.'] },

  { n: 'Soupe de pois cassés', c: 'Léger', k: null, t: 70, m: null, kw: 'soupe, légumineuses, hiver',
    i: ['70 g Pois cassés', '0.5 Carotte', '0.25 Oignon', '20 g Lardons', '400 ml Eau', 'Sel et poivre'],
    s: ['Rincer les pois cassés.', 'Faire revenir oignon et lardons, ajouter la carotte, les pois et l’eau.', 'Cuire 1 heure à frémissement.', 'Mixer et assaisonner.'] },

  { n: 'Salade de carottes râpées', c: 'Léger', k: null, t: 10, m: null, kw: 'crudités, entrée, enfants',
    i: ['150 g Carottes', '0.5 Citron', '1 cs Huile d’olive', '1 cc Persil', 'Sel et poivre'],
    s: ['Éplucher et râper les carottes.', 'Mélanger le jus de citron, l’huile, le sel et le poivre.', 'Verser sur les carottes et mélanger.', 'Parsemer de persil.'] },

  { n: 'Céleri rémoulade', c: 'Léger', k: null, t: 15, m: null, kw: 'crudités, entrée, bistrot',
    i: ['120 g Céleri-rave', '1 cs Mayonnaise', '1 cc Moutarde', '0.25 Citron', 'Sel et poivre'],
    s: ['Éplucher le céleri et le râper finement.', 'L’arroser de jus de citron pour qu’il ne noircisse pas.', 'Mélanger mayonnaise et moutarde.', 'Ajouter au céleri, saler, poivrer et garder au frais.'] },

  { n: 'Salade piémontaise', c: 'Léger', k: null, t: 30, m: null, kw: 'salade, pommes de terre, été',
    i: ['200 g Pommes de terre', '1 Œuf|Œufs', '1 Tomate|Tomates', '1 Tranche de jambon|Tranches de jambon', '3 Cornichon|Cornichons', '1 cs Mayonnaise', 'Sel et poivre'],
    s: ['Cuire les pommes de terre 20 minutes et l’œuf 10 minutes.', 'Couper pommes de terre, œuf, tomate, jambon et cornichons en dés.', 'Mélanger avec la mayonnaise.', 'Saler, poivrer et servir frais.'] },

  { n: 'Salade de concombre au yaourt', c: 'Léger', k: null, t: 10, m: null, kw: 'crudités, frais, été',
    i: ['0.5 Concombre', '50 g Yaourt nature', '1 cc Aneth ou menthe', 'Sel et poivre'],
    s: ['Couper le concombre en fines rondelles.', 'Saler et laisser dégorger 10 minutes, puis égoutter.', 'Mélanger avec le yaourt et les herbes.', 'Poivrer et servir frais.'] },

  { n: 'Salade de tomates mozzarella', c: 'Léger', k: null, t: 10, m: null, kw: 'italie, caprese, été, rapide',
    i: ['2 Tomate|Tomates', '60 g Mozzarella', '1 cs Huile d’olive', 'Basilic', 'Sel et poivre'],
    s: ['Couper tomates et mozzarella en tranches.', 'Les alterner dans l’assiette.', 'Arroser d’huile d’olive et ajouter le basilic.', 'Saler et poivrer.'] },

  { n: 'Salade lyonnaise', c: 'Léger', k: null, t: 20, m: null, kw: 'lyon, œuf poché, lardons',
    i: ['60 g Frisée', '40 g Lardons', '1 Œuf|Œufs', '1 Tranche de pain|Tranches de pain', '1 cs Huile', '1 cc Vinaigre', '1 cc Moutarde', 'Sel et poivre'],
    s: ['Préparer une vinaigrette avec moutarde, vinaigre, huile, sel et poivre.', 'Dorer les lardons et le pain en croûtons.', 'Pocher l’œuf 3 minutes dans l’eau frémissante vinaigrée.', 'Mélanger la frisée avec la vinaigrette, ajouter lardons, croûtons et l’œuf.'] },

  { n: 'Salade de quinoa et avocat', c: 'Léger', k: null, t: 25, m: null, kw: 'bowl, végétarien, frais',
    i: ['50 g Quinoa', '0.5 Avocat', '0.5 Tomate', '0.25 Concombre', '0.5 Citron', '1 cs Huile d’olive', 'Sel et poivre'],
    s: ['Cuire le quinoa 12 minutes, l’égoutter et le laisser refroidir.', 'Couper avocat, tomate et concombre en dés.', 'Mélanger le tout avec citron, huile, sel et poivre.', 'Servir frais.'] },

  { n: 'Salade de pois chiches', c: 'Léger', k: null, t: 10, m: null, kw: 'légumineuses, végétarien, rapide',
    i: ['120 g Pois chiches cuits', '0.5 Tomate', '0.25 Oignon rouge', '0.25 Poivron', '1 cs Persil', '0.5 Citron', '1 cs Huile d’olive', '0.5 cc Cumin', 'Sel'],
    s: ['Rincer et égoutter les pois chiches.', 'Couper tomate, oignon et poivron en petits dés.', 'Mélanger avec persil, citron, huile, cumin et sel.', 'Laisser reposer 10 minutes au frais.'] },

  { n: 'Salade de betteraves', c: 'Léger', k: null, t: 10, m: null, kw: 'crudités, entrée, hiver',
    i: ['150 g Betterave cuite', '0.25 Échalote', '1 cs Huile', '1 cc Vinaigre', '1 cc Persil', 'Sel et poivre'],
    s: ['Couper la betterave en dés.', 'Hacher l’échalote.', 'Préparer la vinaigrette avec huile, vinaigre, sel et poivre.', 'Mélanger le tout et parsemer de persil.'] },

  { n: 'Salade de chou coleslaw', c: 'Léger', k: null, t: 15, m: null, kw: 'crudités, barbecue, américain',
    i: ['100 g Chou blanc', '0.5 Carotte', '1 cs Mayonnaise', '1 cs Yaourt nature', '1 cc Vinaigre', '1 pincée Sucre', 'Sel et poivre'],
    s: ['Émincer le chou très finement et râper la carotte.', 'Mélanger mayonnaise, yaourt, vinaigre, sucre, sel et poivre.', 'Mélanger avec les légumes.', 'Laisser 30 minutes au frais avant de servir.'] },

  { n: 'Salade de lentilles au saumon fumé', c: 'Léger', k: null, t: 30, m: null, kw: 'légumineuses, poisson, salade',
    i: ['60 g Lentilles vertes', '40 g Saumon fumé', '0.25 Échalote', '1 cs Huile d’olive', '1 cc Vinaigre', '1 cc Moutarde', 'Ciboulette', 'Sel et poivre'],
    s: ['Cuire les lentilles 25 minutes, puis les égoutter.', 'Préparer une vinaigrette moutardée et ajouter l’échalote hachée.', 'Mélanger les lentilles tièdes avec la vinaigrette.', 'Ajouter le saumon en lanières et la ciboulette.'] },

  { n: 'Salade de riz au thon', c: 'Léger', k: null, t: 25, m: null, kw: 'salade, été, pique-nique',
    i: ['60 g Riz', '50 g Thon au naturel', '30 g Maïs', '0.5 Tomate', '0.25 Poivron', '1 cs Huile', '1 cc Vinaigre', 'Sel et poivre'],
    s: ['Cuire le riz, le rincer à l’eau froide.', 'Couper tomate et poivron en dés.', 'Mélanger riz, thon émietté, maïs et légumes.', 'Assaisonner avec huile, vinaigre, sel et poivre.'] },

  { n: 'Salade de pommes de terre aux harengs', c: 'Léger', k: null, t: 30, m: null, kw: 'poisson, bistrot, pommes de terre',
    i: ['200 g Pommes de terre', '60 g Filets de hareng fumé', '0.25 Oignon rouge', '1 cs Huile', '1 cc Vinaigre', 'Persil', 'Poivre'],
    s: ['Cuire les pommes de terre 20 minutes, puis les couper en rondelles tièdes.', 'Couper les harengs en morceaux et l’oignon en fines rondelles.', 'Arroser d’huile et de vinaigre.', 'Parsemer de persil et poivrer.'] },

  { n: 'Œufs mimosa', c: 'Léger', k: null, t: 20, m: null, kw: 'entrée, œufs, apéritif',
    i: ['2 Œuf|Œufs', '1 cs Mayonnaise', 'Ciboulette', 'Sel et poivre'],
    s: ['Cuire les œufs 10 minutes, les refroidir et les écaler.', 'Les couper en deux et retirer les jaunes.', 'Écraser les jaunes avec la mayonnaise, saler et poivrer.', 'Garnir les blancs et décorer de ciboulette.'] },

  { n: 'Poireaux vinaigrette', c: 'Léger', k: null, t: 25, m: null, kw: 'entrée, bistrot, légumes',
    i: ['2 Poireau|Poireaux', '1 cs Huile', '1 cc Vinaigre', '1 cc Moutarde', '0.5 Œuf dur', 'Sel et poivre'],
    s: ['Cuire les blancs de poireaux 15 minutes à l’eau salée ou à la vapeur.', 'Les égoutter et les laisser tiédir.', 'Préparer une vinaigrette moutardée.', 'Napper les poireaux et parsemer d’œuf dur haché.'] },

  { n: 'Avocat aux crevettes', c: 'Léger', k: null, t: 10, m: null, kw: 'entrée, fruits de mer, fête',
    i: ['0.5 Avocat', '40 g Crevettes décortiquées', '1 cs Mayonnaise', '1 cc Ketchup', '0.25 Citron', 'Sel et poivre'],
    s: ['Couper l’avocat en deux, retirer le noyau et arroser de citron.', 'Mélanger mayonnaise et ketchup pour la sauce cocktail.', 'Mélanger les crevettes à la sauce.', 'Garnir l’avocat.'] },

  { n: 'Carpaccio de bœuf', c: 'Léger', k: null, t: 15, m: null, kw: 'italie, viande crue, été',
    i: ['100 g Bœuf très frais', '15 g Parmesan', '1 cs Huile d’olive', '0.25 Citron', '10 g Roquette', 'Sel et poivre'],
    s: ['Mettre la viande 30 minutes au congélateur pour la trancher plus facilement.', 'La couper en tranches très fines et les étaler dans l’assiette.', 'Arroser d’huile et de citron, saler et poivrer.', 'Ajouter la roquette et des copeaux de parmesan.'] },

  { n: 'Tartare de saumon', c: 'Léger', k: null, t: 15, m: null, kw: 'poisson cru, frais, été',
    i: ['120 g Saumon très frais', '0.25 Avocat', '0.5 Citron vert', '1 cc Échalote', '1 cc Huile d’olive', 'Ciboulette', 'Sel et poivre'],
    s: ['Couper le saumon en petits dés.', 'Ajouter l’échalote hachée, le citron vert, l’huile, la ciboulette, le sel et le poivre.', 'Ajouter l’avocat en dés au dernier moment.', 'Dresser dans un cercle et servir bien frais.'] },

  { n: 'Velouté d’asperges', c: 'Léger', k: null, t: 30, m: null, kw: 'soupe, printemps',
    i: ['200 g Asperges', '1 Pomme de terre|Pommes de terre', '300 ml Bouillon de légumes', '1 cs Crème fraîche', 'Sel et poivre'],
    s: ['Éplucher les asperges et les couper en tronçons.', 'Les cuire 20 minutes avec la pomme de terre dans le bouillon.', 'Mixer et ajouter la crème.', 'Saler et poivrer.'] },

  { n: 'Asperges sauce mousseline', c: 'Léger', k: null, t: 25, m: null, kw: 'printemps, entrée, légumes',
    i: ['6 Asperge|Asperges', '1 Jaune d’œuf|Jaunes d’œuf', '20 g Beurre', '0.25 Citron', '1 cs Crème fouettée', 'Sel'],
    s: ['Éplucher les asperges et les cuire 12 à 15 minutes à l’eau salée.', 'Fouetter le jaune avec un peu d’eau au bain-marie jusqu’à ce qu’il mousse.', 'Ajouter le beurre fondu petit à petit, puis le citron.', 'Incorporer la crème fouettée et napper les asperges.'] },

  { n: 'Tomates provençales', c: 'Léger', k: null, t: 35, m: null, kw: 'provence, légumes, four, accompagnement',
    i: ['2 Tomate|Tomates', '1 Gousse d’ail', '1 cs Persil', '1 cs Chapelure', '1 cs Huile d’olive', 'Sel et poivre'],
    s: ['Préchauffer le four à 200 °C.', 'Couper les tomates en deux et les poser dans un plat.', 'Mélanger ail haché, persil, chapelure et huile, puis répartir sur les tomates.', 'Cuire 25 minutes.'] },

  { n: 'Gratin de courgettes et chèvre', c: 'Léger', k: null, t: 40, m: null, kw: 'gratin, fromage de chèvre, été',
    i: ['250 g Courgettes', '40 g Fromage de chèvre', '1 Œuf|Œufs', '50 ml Lait', 'Sel et poivre'],
    s: ['Couper les courgettes en rondelles et les faire revenir 10 minutes.', 'Les mettre dans un plat avec le chèvre émietté.', 'Battre l’œuf avec le lait, saler et poivrer, puis verser dessus.', 'Cuire 25 minutes à 190 °C.'] },

  { n: 'Papillote de saumon aux légumes', c: 'Léger', k: null, t: 30, m: null, kw: 'poisson, four, sain',
    i: ['1 Pavé de saumon|Pavés de saumon', '0.5 Courgette', '0.5 Carotte', '0.25 Citron', 'Aneth', 'Sel et poivre'],
    s: ['Préchauffer le four à 200 °C.', 'Couper les légumes en fines lamelles et les poser sur une feuille de papier cuisson.', 'Ajouter le saumon, le citron, l’aneth, le sel et le poivre.', 'Fermer la papillote et cuire 20 minutes.'] },

  { n: 'Crevettes à la plancha', c: 'Léger', k: null, t: 15, m: null, kw: 'fruits de mer, été, barbecue',
    i: ['150 g Crevettes crues', '1 Gousse d’ail', '1 cs Huile d’olive', '1 cc Persil', '0.25 Citron', 'Sel et poivre'],
    s: ['Mariner les crevettes avec l’huile, l’ail haché, le sel et le poivre.', 'Les saisir 2 minutes par face sur la plancha ou dans une poêle très chaude.', 'Arroser de citron.', 'Parsemer de persil.'] },

  { n: 'Taboulé libanais', c: 'Léger', k: null, t: 20, m: null, kw: 'liban, persil, frais, été',
    i: ['20 g Boulgour fin', '40 g Persil plat', '5 g Menthe', '1 Tomate|Tomates', '0.25 Oignon', '0.5 Citron', '1 cs Huile d’olive', 'Sel'],
    s: ['Faire gonfler le boulgour 10 minutes dans le jus de citron.', 'Hacher très finement le persil, la menthe et l’oignon.', 'Couper la tomate en tout petits dés.', 'Mélanger le tout avec l’huile et le sel.'] },

  { n: 'Houmous et crudités', c: 'Léger', k: null, t: 10, m: null, kw: 'liban, pois chiches, apéritif, végétarien',
    i: ['100 g Pois chiches cuits', '1 cs Tahini', '0.25 Citron', '0.5 Gousse d’ail', '1 cs Huile d’olive', '1 Carotte|Carottes', '0.25 Concombre', 'Sel'],
    s: ['Mixer pois chiches, tahini, citron, ail, sel et un peu d’eau jusqu’à ce que ce soit lisse.', 'Verser dans un bol et arroser d’huile d’olive.', 'Couper carotte et concombre en bâtonnets.', 'Servir les crudités à tremper dans le houmous.'] },

  { n: 'Velouté de lentilles corail au curry', c: 'Léger', k: null, t: 25, m: null, kw: 'soupe, légumineuses, épices',
    i: ['50 g Lentilles corail', '0.5 Carotte', '0.25 Oignon', '1 cc Curry', '300 ml Bouillon de légumes', '30 ml Lait de coco', 'Sel'],
    s: ['Faire revenir l’oignon avec le curry.', 'Ajouter lentilles, carotte en rondelles et bouillon.', 'Cuire 15 minutes, puis mixer.', 'Ajouter le lait de coco et saler.'] },

  { n: 'Salade de fenouil à l’orange', c: 'Léger', k: null, t: 10, m: null, kw: 'crudités, agrumes, hiver',
    i: ['0.5 Fenouil', '1 Orange|Oranges', '1 cs Huile d’olive', '5 Olive noire|Olives noires', 'Sel et poivre'],
    s: ['Émincer très finement le fenouil.', 'Peler l’orange à vif et la couper en rondelles.', 'Mélanger avec les olives.', 'Arroser d’huile, saler et poivrer.'] },

  { n: 'Salade de chou rouge aux pommes', c: 'Léger', k: null, t: 15, m: null, kw: 'crudités, hiver',
    i: ['100 g Chou rouge', '0.5 Pomme|Pommes', '1 cs Noix', '1 cs Huile', '1 cc Vinaigre de cidre', 'Sel et poivre'],
    s: ['Émincer finement le chou rouge.', 'Couper la pomme en lamelles.', 'Mélanger avec les noix concassées.', 'Assaisonner avec huile, vinaigre, sel et poivre.'] },

  { n: 'Velouté de champignons et noisettes', c: 'Léger', k: null, t: 30, m: null, kw: 'soupe, automne',
    i: ['200 g Champignons', '0.25 Oignon', '250 ml Bouillon de légumes', '30 ml Crème', '1 cs Noisettes', 'Sel et poivre'],
    s: ['Faire revenir l’oignon et les champignons.', 'Ajouter le bouillon et cuire 15 minutes.', 'Mixer avec la crème.', 'Servir parsemé de noisettes concassées et grillées.'] },

  { n: 'Endives braisées', c: 'Léger', k: null, t: 35, m: null, kw: 'légumes, hiver, accompagnement',
    i: ['2 Endive|Endives', '10 g Beurre', '1 pincée Sucre', '0.25 Citron', 'Sel et poivre'],
    s: ['Couper les endives en deux dans la longueur.', 'Les dorer dans le beurre avec le sucre.', 'Ajouter le citron et un fond d’eau, couvrir et cuire 25 minutes.', 'Saler et poivrer.'] },
  { n: 'Croque-monsieur au four express', c: 'Rapide', k: null, t: 15, m: null, kw: 'sandwich, enfants, jambon fromage',
    i: ['2 Tranche de pain de mie|Tranches de pain de mie', '1 Tranche de jambon|Tranches de jambon', '30 g Emmental râpé', '1 cs Crème fraîche'],
    s: ['Préchauffer le four à 220 °C.', 'Poser le jambon et un peu de fromage entre les tranches de pain.', 'Tartiner le dessus de crème et parsemer du reste de fromage.', 'Cuire 10 minutes.'] },

  { n: 'Pâtes au beurre et parmesan', c: 'Rapide', k: null, t: 12, m: null, kw: 'enfants, pâtes, simple',
    i: ['100 g Pâtes', '15 g Beurre', '20 g Parmesan', 'Poivre'],
    s: ['Cuire les pâtes dans l’eau salée.', 'Garder un peu d’eau de cuisson.', 'Mélanger les pâtes égouttées avec le beurre, le parmesan et un peu d’eau de cuisson.', 'Poivrer et servir.'] },

  { n: 'Pâtes à l’ail et à l’huile', c: 'Rapide', k: null, t: 12, m: null, kw: 'italie, aglio olio, pâtes, économique',
    i: ['100 g Spaghetti', '2 Gousse d’ail|Gousses d’ail', '2 cs Huile d’olive', '1 pincée Piment', '1 cs Persil'],
    s: ['Cuire les spaghetti.', 'Faire dorer doucement l’ail en lamelles et le piment dans l’huile.', 'Ajouter les pâtes égouttées et une louche d’eau de cuisson.', 'Mélanger et parsemer de persil.'] },

  { n: 'Pâtes au jambon et crème', c: 'Rapide', k: null, t: 15, m: null, kw: 'enfants, pâtes, simple',
    i: ['100 g Pâtes', '1 Tranche de jambon|Tranches de jambon', '40 ml Crème fraîche', '15 g Gruyère râpé', 'Sel et poivre'],
    s: ['Cuire les pâtes.', 'Couper le jambon en dés et le réchauffer dans la crème.', 'Mélanger avec les pâtes égouttées.', 'Ajouter le gruyère et poivrer.'] },

  { n: 'Omelette au fromage', c: 'Rapide', k: null, t: 10, m: null, kw: 'œufs, simple, végétarien',
    i: ['2 Œuf|Œufs', '20 g Emmental râpé', '5 g Beurre', 'Sel et poivre'],
    s: ['Battre les œufs avec le sel et le poivre.', 'Faire fondre le beurre dans une poêle.', 'Verser les œufs et cuire 2 minutes en ramenant les bords.', 'Ajouter le fromage, plier l’omelette et servir.'] },

  { n: 'Œufs au plat et bacon', c: 'Rapide', k: null, t: 10, m: null, kw: 'brunch, œufs, petit-déjeuner',
    i: ['2 Œuf|Œufs', '2 Tranche de bacon|Tranches de bacon', '1 Tranche de pain|Tranches de pain', 'Sel et poivre'],
    s: ['Dorer le bacon dans une poêle.', 'Casser les œufs à côté et cuire 3 minutes.', 'Griller le pain.', 'Servir avec sel et poivre.'] },

  { n: 'Tartines avocat et œuf', c: 'Rapide', k: null, t: 12, m: null, kw: 'brunch, avocado toast, œufs',
    i: ['2 Tranche de pain complet|Tranches de pain complet', '0.5 Avocat', '1 Œuf|Œufs', '0.25 Citron', '1 pincée Piment', 'Sel et poivre'],
    s: ['Griller le pain.', 'Écraser l’avocat avec le citron, le sel et le poivre.', 'Cuire l’œuf au plat ou poché.', 'Tartiner l’avocat, poser l’œuf et ajouter une pincée de piment.'] },

  { n: 'Bagel saumon fromage frais', c: 'Rapide', k: null, t: 8, m: null, kw: 'sandwich, brunch, poisson',
    i: ['1 Bagel|Bagels', '40 g Saumon fumé', '30 g Fromage frais', '0.25 Oignon rouge', 'Aneth'],
    s: ['Couper et toaster le bagel.', 'Tartiner de fromage frais.', 'Ajouter le saumon, l’oignon rouge en fines rondelles et l’aneth.', 'Refermer et servir.'] },

  { n: 'Panini tomate mozzarella', c: 'Rapide', k: null, t: 10, m: null, kw: 'sandwich, italie, végétarien',
    i: ['1 Pain panini|Pains panini', '50 g Mozzarella', '0.5 Tomate', '1 cc Pesto'],
    s: ['Ouvrir le pain et le tartiner de pesto.', 'Ajouter tomate et mozzarella en tranches.', 'Refermer et presser.', 'Cuire 5 minutes dans un appareil à panini ou une poêle chaude en appuyant.'] },

  { n: 'Club sandwich au poulet', c: 'Rapide', k: null, t: 15, m: null, kw: 'sandwich, poulet, bacon',
    i: ['3 Tranche de pain de mie|Tranches de pain de mie', '80 g Poulet cuit', '2 Tranche de bacon|Tranches de bacon', '0.5 Tomate', '2 Feuille de salade|Feuilles de salade', '1 cs Mayonnaise'],
    s: ['Griller le pain et dorer le bacon.', 'Tartiner les tranches de mayonnaise.', 'Monter en deux étages : salade, poulet, tomate, bacon.', 'Couper en triangles et maintenir avec des piques.'] },

  { n: 'Fajitas végétariennes', c: 'Rapide', k: null, t: 20, m: null, kw: 'mexique, wrap, poivrons',
    i: ['2 Tortilla|Tortillas', '1 Poivron|Poivrons', '0.5 Oignon', '50 g Haricots rouges', '1 cc Épices tex-mex', '1 cs Crème fraîche', '1 cs Huile'],
    s: ['Faire sauter poivron et oignon en lanières dans l’huile 8 minutes.', 'Ajouter haricots et épices 2 minutes.', 'Chauffer les tortillas.', 'Garnir et ajouter la crème.'] },

  { n: 'Nouilles sautées au poulet', c: 'Rapide', k: null, t: 20, m: null, kw: 'asiatique, wok',
    i: ['80 g Nouilles chinoises', '100 g Blanc de poulet', '0.5 Carotte', '0.5 Poivron', '1 cs Sauce soja', '1 cc Sauce huître', '1 cs Huile'],
    s: ['Cuire les nouilles et les égoutter.', 'Sauter le poulet en lamelles dans l’huile 4 minutes.', 'Ajouter les légumes en julienne et cuire 3 minutes.', 'Ajouter nouilles et sauces, puis sauter 2 minutes.'] },

  { n: 'Pâtes au saumon fumé et citron', c: 'Rapide', k: null, t: 15, m: null, kw: 'poisson, pâtes, crème',
    i: ['100 g Pâtes', '40 g Saumon fumé', '40 ml Crème', '0.25 Citron', 'Aneth', 'Poivre'],
    s: ['Cuire les pâtes.', 'Chauffer la crème avec le zeste de citron.', 'Ajouter les pâtes et le saumon en lanières hors du feu.', 'Ajouter l’aneth et poivrer.'] },

  { n: 'Steak haché et purée express', c: 'Rapide', k: null, t: 20, m: null, kw: 'enfants, viande, simple',
    i: ['1 Steak haché|Steaks hachés', '200 g Pommes de terre', '50 ml Lait', '10 g Beurre', 'Sel et poivre'],
    s: ['Cuire les pommes de terre en dés 12 minutes à l’eau.', 'Les écraser avec lait et beurre.', 'Cuire le steak 3 minutes par face.', 'Servir avec la purée.'] },

  { n: 'Poêlée de gnocchis aux légumes', c: 'Rapide', k: null, t: 20, m: null, kw: 'gnocchis, poêle, végétarien',
    i: ['200 g Gnocchis', '0.5 Courgette', '6 Tomate cerise|Tomates cerises', '1 cs Huile d’olive', '15 g Parmesan', 'Basilic'],
    s: ['Dorer les gnocchis crus dans l’huile 6 minutes.', 'Ajouter la courgette en dés et cuire 5 minutes.', 'Ajouter les tomates cerises coupées 2 minutes.', 'Servir avec parmesan et basilic.'] },

  { n: 'Riz sauté aux œufs et jambon', c: 'Rapide', k: null, t: 15, m: null, kw: 'restes, riz, wok',
    i: ['150 g Riz cuit', '1 Œuf|Œufs', '1 Tranche de jambon|Tranches de jambon', '30 g Petits pois', '1 cs Sauce soja', '1 cs Huile'],
    s: ['Brouiller l’œuf dans l’huile chaude et le réserver.', 'Sauter le riz et les petits pois 4 minutes.', 'Ajouter le jambon en dés et l’œuf.', 'Assaisonner de soja.'] },

  { n: 'Tortilla espagnole', c: 'Rapide', k: null, t: 35, m: null, kw: 'espagne, œufs, pommes de terre',
    i: ['150 g Pommes de terre', '2 Œuf|Œufs', '0.25 Oignon', '2 cs Huile d’olive', 'Sel'],
    s: ['Couper pommes de terre et oignon en fines tranches, les cuire doucement 15 minutes dans l’huile.', 'Battre les œufs avec le sel et y mélanger les pommes de terre.', 'Verser dans la poêle et cuire 5 minutes à feu doux.', 'Retourner à l’aide d’une assiette et cuire encore 3 minutes.'] },

  { n: 'Gratin de pâtes express', c: 'Rapide', k: null, t: 25, m: null, kw: 'enfants, gratin, pâtes',
    i: ['100 g Pâtes', '50 ml Crème', '30 g Gruyère râpé', '1 Tranche de jambon|Tranches de jambon', 'Sel et poivre'],
    s: ['Cuire les pâtes.', 'Mélanger avec la crème et le jambon en dés.', 'Mettre dans un plat et couvrir de gruyère.', 'Gratiner 10 minutes sous le gril.'] },

  { n: 'Wraps thon crudités', c: 'Rapide', k: null, t: 10, m: null, kw: 'sandwich, poisson, pique-nique',
    i: ['1 Tortilla|Tortillas', '60 g Thon au naturel', '1 cs Fromage frais', '0.5 Tomate', '2 Feuille de salade|Feuilles de salade', '20 g Maïs'],
    s: ['Tartiner la tortilla de fromage frais.', 'Ajouter salade, tomate en dés, maïs et thon émietté.', 'Rouler serré.', 'Couper en deux.'] },

  { n: 'Salade de pâtes au poulet pesto', c: 'Rapide', k: null, t: 20, m: null, kw: 'salade, pique-nique, pâtes',
    i: ['80 g Pâtes', '80 g Poulet cuit', '1 cs Pesto', '6 Tomate cerise|Tomates cerises', '30 g Mozzarella'],
    s: ['Cuire les pâtes et les rincer à l’eau froide.', 'Couper poulet, tomates et mozzarella.', 'Mélanger le tout avec le pesto.', 'Garder au frais jusqu’au repas.'] },

  { n: 'Croque au chèvre et miel', c: 'Rapide', k: null, t: 15, m: null, kw: 'sandwich, fromage, sucré-salé',
    i: ['2 Tranche de pain de mie|Tranches de pain de mie', '40 g Fromage de chèvre', '1 cc Miel', '5 g Beurre'],
    s: ['Beurrer l’extérieur des tranches.', 'Mettre le chèvre en rondelles et le miel à l’intérieur.', 'Refermer.', 'Dorer 3 minutes par face à la poêle.'] },

  { n: 'Pizza sur pain pita', c: 'Rapide', k: null, t: 15, m: null, kw: 'pizza, enfants, express',
    i: ['1 Pain pita|Pains pita', '2 cs Coulis de tomate', '40 g Mozzarella', '1 Tranche de jambon|Tranches de jambon', 'Origan'],
    s: ['Préchauffer le four à 220 °C.', 'Étaler le coulis sur le pain pita.', 'Ajouter jambon et mozzarella, puis l’origan.', 'Cuire 8 minutes.'] },

  { n: 'Assiette de crevettes et riz à l’ail', c: 'Rapide', k: null, t: 20, m: null, kw: 'fruits de mer, riz',
    i: ['70 g Riz', '120 g Crevettes', '1 Gousse d’ail', '10 g Beurre', '1 cc Persil', '0.25 Citron'],
    s: ['Cuire le riz.', 'Faire fondre le beurre avec l’ail.', 'Ajouter les crevettes et cuire 3 minutes.', 'Servir sur le riz avec persil et citron.'] },

  { n: 'Cake salé jambon olives', c: 'Apéritif', k: null, t: 55, m: null, kw: 'apéritif, pique-nique, four',
    i: ['40 g Farine', '1 Œuf|Œufs', '20 ml Lait', '15 ml Huile', '2 g Levure chimique', '30 g Jambon', '15 g Olives vertes', '20 g Gruyère râpé', 'Sel et poivre'],
    s: ['Préchauffer le four à 180 °C.', 'Mélanger farine, levure, œufs, lait et huile.', 'Ajouter jambon en dés, olives et gruyère.', 'Verser dans un moule à cake et cuire 40 minutes.'] },

  { n: 'Feuilletés saucisse', c: 'Apéritif', k: null, t: 30, m: null, kw: 'apéritif, pâte feuilletée, enfants',
    i: ['0.25 Pâte feuilletée|Pâtes feuilletées', '2 Saucisse cocktail|Saucisses cocktail', '0.25 Œuf'],
    s: ['Préchauffer le four à 200 °C.', 'Couper la pâte en bandes et enrouler chaque saucisse.', 'Dorer à l’œuf battu.', 'Cuire 15 minutes.'] },

  { n: 'Gougères au fromage', c: 'Apéritif', k: null, t: 45, m: null, kw: 'bourgogne, apéritif, pâte à choux',
    i: ['25 g Farine', '20 g Beurre', '50 ml Eau', '1 Œuf|Œufs', '25 g Comté râpé', 'Sel'],
    s: ['Porter l’eau, le beurre et le sel à ébullition.', 'Ajouter la farine d’un coup et remuer jusqu’à ce que la pâte se détache.', 'Hors du feu, ajouter l’œuf, puis le fromage.', 'Former de petites boules sur une plaque et cuire 20 minutes à 200 °C sans ouvrir le four.'] },

  { n: 'Tapenade', c: 'Apéritif', k: null, t: 10, m: null, kw: 'provence, olives, tartinade',
    i: ['50 g Olives noires dénoyautées', '1 cc Câpres', '1 Filet d’anchois|Filets d’anchois', '0.25 Gousse d’ail', '1 cs Huile d’olive'],
    s: ['Mettre olives, câpres, anchois et ail dans un mixeur.', 'Mixer en ajoutant l’huile petit à petit.', 'Arrêter quand la pâte est encore un peu granuleuse.', 'Servir sur du pain grillé.'] },

  { n: 'Guacamole', c: 'Apéritif', k: null, t: 10, m: null, kw: 'mexique, avocat, tartinade',
    i: ['1 Avocat|Avocats', '0.5 Citron vert', '0.25 Tomate', '0.25 Oignon rouge', 'Coriandre', '1 pincée Piment', 'Sel'],
    s: ['Écraser l’avocat à la fourchette.', 'Ajouter le citron vert, le sel et le piment.', 'Ajouter tomate, oignon et coriandre hachés.', 'Servir avec des chips de maïs.'] },

  { n: 'Tzatziki', c: 'Apéritif', k: null, t: 10, m: null, kw: 'grèce, yaourt, concombre',
    i: ['0.25 Concombre', '100 g Yaourt grec', '0.5 Gousse d’ail', '1 cc Huile d’olive', 'Menthe ou aneth', 'Sel'],
    s: ['Râper le concombre et bien l’essorer.', 'Mélanger avec le yaourt et l’ail râpé.', 'Ajouter les herbes, l’huile et le sel.', 'Garder au frais.'] },

  { n: 'Rillettes de thon', c: 'Apéritif', k: null, t: 5, m: null, kw: 'tartinade, poisson, rapide',
    i: ['60 g Thon au naturel', '30 g Fromage frais', '0.25 Citron', 'Ciboulette', 'Poivre'],
    s: ['Égoutter le thon.', 'L’écraser avec le fromage frais.', 'Ajouter citron, ciboulette et poivre.', 'Servir sur du pain grillé.'] },

  { n: 'Bruschetta tomate basilic', c: 'Apéritif', k: null, t: 15, m: null, kw: 'italie, pain grillé, été',
    i: ['2 Tranche de pain de campagne|Tranches de pain de campagne', '1 Tomate|Tomates', '0.5 Gousse d’ail', '1 cs Huile d’olive', 'Basilic', 'Sel'],
    s: ['Griller le pain.', 'Le frotter avec l’ail.', 'Couper la tomate en dés et la mélanger avec huile, basilic et sel.', 'Répartir sur le pain.'] },

  { n: 'Brochettes tomate mozzarella', c: 'Apéritif', k: null, t: 10, m: null, kw: 'apéritif, été, enfants',
    i: ['4 Tomate cerise|Tomates cerises', '4 Billes de mozzarella', 'Basilic', '1 cc Huile d’olive'],
    s: ['Enfiler sur des piques une tomate, une feuille de basilic et une bille de mozzarella.', 'Recommencer.', 'Arroser d’un filet d’huile.', 'Saler légèrement.'] },

  { n: 'Mini-quiches', c: 'Apéritif', k: null, t: 35, m: null, kw: 'apéritif, four, lardons',
    i: ['0.25 Pâte brisée|Pâtes brisées', '1 Œuf|Œufs', '40 ml Crème', '20 g Lardons', '15 g Gruyère râpé'],
    s: ['Préchauffer le four à 190 °C.', 'Découper des ronds de pâte et garnir des moules à muffins.', 'Mélanger œuf, crème, lardons et gruyère, puis répartir.', 'Cuire 20 minutes.'] },

  { n: 'Gaspacho de concombre', c: 'Apéritif', k: null, t: 10, m: null, kw: 'soupe froide, verrine, été',
    i: ['0.5 Concombre', '50 g Yaourt', '0.25 Gousse d’ail', 'Menthe', '1 cc Huile d’olive', 'Sel'],
    s: ['Éplucher et couper le concombre.', 'Mixer avec le yaourt, l’ail, la menthe et le sel.', 'Ajouter l’huile.', 'Servir très frais en verrines.'] },

  { n: 'Blinis au saumon', c: 'Apéritif', k: null, t: 15, m: null, kw: 'fête, poisson, apéritif',
    i: ['4 Blini|Blinis', '40 g Saumon fumé', '1 cs Crème épaisse', 'Aneth', '0.25 Citron'],
    s: ['Réchauffer les blinis.', 'Mélanger la crème avec un peu de citron.', 'Garnir chaque blini de crème et d’un morceau de saumon.', 'Décorer d’aneth.'] },

  { n: 'Samoussas aux légumes', c: 'Apéritif', k: null, t: 45, m: null, kw: 'inde, feuilles de brick, épices',
    i: ['2 Feuille de brick|Feuilles de brick', '1 Pomme de terre|Pommes de terre', '30 g Petits pois', '0.25 Oignon', '0.5 cc Curry', '1 cs Huile'],
    s: ['Cuire la pomme de terre en dés 10 minutes à l’eau.', 'Faire revenir l’oignon avec le curry, ajouter pomme de terre et petits pois.', 'Couper les feuilles en bandes, garnir et plier en triangles.', 'Badigeonner d’huile et cuire 15 minutes à 200 °C.'] },

  { n: 'Croquettes de pommes de terre', c: 'Accompagnement', k: null, t: 45, m: null, kw: 'friture, enfants, pommes de terre',
    i: ['200 g Pommes de terre', '0.5 Œuf', '15 g Parmesan', '30 g Chapelure', 'Huile de friture', 'Sel'],
    s: ['Cuire les pommes de terre et les écraser en purée sèche.', 'Ajouter le parmesan et le jaune d’œuf.', 'Former des petits boudins, les passer dans le blanc puis la chapelure.', 'Frire 3 minutes et égoutter.'] },

  { n: 'Pommes de terre sautées', c: 'Accompagnement', k: null, t: 30, m: null, kw: 'pommes de terre, poêle',
    i: ['250 g Pommes de terre', '1 cs Huile', '1 Gousse d’ail', '1 cc Persil', 'Sel et poivre'],
    s: ['Couper les pommes de terre en dés.', 'Les faire dorer 25 minutes dans l’huile en remuant.', 'Ajouter l’ail et le persil hachés en fin de cuisson.', 'Saler et poivrer.'] },

  { n: 'Purée maison', c: 'Accompagnement', k: null, t: 30, m: null, kw: 'pommes de terre, enfants',
    i: ['250 g Pommes de terre', '80 ml Lait', '15 g Beurre', '1 pincée Muscade', 'Sel'],
    s: ['Cuire les pommes de terre épluchées 20 minutes à l’eau salée.', 'Les écraser au presse-purée.', 'Ajouter le lait chaud et le beurre.', 'Assaisonner de muscade et de sel.'] },

  { n: 'Frites au four', c: 'Accompagnement', k: null, t: 40, m: null, kw: 'pommes de terre, enfants, four',
    i: ['250 g Pommes de terre', '1 cs Huile', '0.5 cc Paprika', 'Sel'],
    s: ['Préchauffer le four à 220 °C.', 'Couper les pommes de terre en bâtonnets et les sécher.', 'Les mélanger avec l’huile et le paprika.', 'Cuire 30 minutes en les retournant à mi-cuisson, puis saler.'] },

  { n: 'Riz pilaf', c: 'Accompagnement', k: null, t: 25, m: null, kw: 'riz, simple',
    i: ['70 g Riz', '0.25 Oignon', '10 g Beurre', '150 ml Bouillon', 'Sel'],
    s: ['Faire fondre l’oignon dans le beurre.', 'Ajouter le riz et le nacrer 2 minutes.', 'Verser le bouillon chaud, couvrir et cuire 17 minutes à feu doux.', 'Égrainer à la fourchette.'] },

  { n: 'Haricots verts à l’ail', c: 'Accompagnement', k: null, t: 20, m: null, kw: 'légumes verts',
    i: ['150 g Haricots verts', '1 Gousse d’ail', '10 g Beurre', 'Sel et poivre'],
    s: ['Cuire les haricots 10 minutes à l’eau salée.', 'Les égoutter.', 'Les faire revenir dans le beurre avec l’ail haché 2 minutes.', 'Saler et poivrer.'] },

  { n: 'Carottes glacées', c: 'Accompagnement', k: null, t: 25, m: null, kw: 'légumes, enfants',
    i: ['200 g Carottes', '10 g Beurre', '1 cc Sucre', 'Sel'],
    s: ['Couper les carottes en rondelles.', 'Les mettre dans une poêle avec beurre, sucre, sel et eau à hauteur.', 'Cuire jusqu’à évaporation de l’eau, environ 20 minutes.', 'Les rouler dans le jus brillant.'] },

  { n: 'Légumes rôtis au four', c: 'Accompagnement', k: null, t: 40, m: null, kw: 'légumes, four, végétarien',
    i: ['0.5 Courgette', '0.5 Poivron', '0.5 Oignon rouge', '1 Carotte|Carottes', '1 cs Huile d’olive', 'Herbes de Provence', 'Sel et poivre'],
    s: ['Préchauffer le four à 200 °C.', 'Couper les légumes en morceaux.', 'Les mélanger avec l’huile, les herbes, le sel et le poivre.', 'Rôtir 30 minutes en remuant à mi-cuisson.'] },

  { n: 'Pommes de terre au four', c: 'Accompagnement', k: null, t: 50, m: null, kw: 'pommes de terre, four',
    i: ['250 g Pommes de terre', '1 cs Huile d’olive', 'Romarin', 'Sel'],
    s: ['Préchauffer le four à 210 °C.', 'Couper les pommes de terre en quartiers.', 'Les mélanger avec huile, romarin et sel.', 'Cuire 40 minutes.'] },

  { n: 'Purée de patate douce', c: 'Accompagnement', k: null, t: 30, m: null, kw: 'purée, doux',
    i: ['250 g Patates douces', '10 g Beurre', '30 ml Lait', 'Sel'],
    s: ['Cuire les patates douces en cubes 15 minutes à l’eau.', 'Les égoutter.', 'Les écraser avec le beurre et le lait.', 'Saler.'] },

  { n: 'Semoule aux légumes', c: 'Accompagnement', k: null, t: 15, m: null, kw: 'semoule, rapide',
    i: ['60 g Semoule', '0.25 Courgette', '0.25 Poivron', '1 cs Huile d’olive', '0.5 cc Cumin', 'Sel'],
    s: ['Verser la même quantité d’eau bouillante salée sur la semoule, couvrir 5 minutes.', 'Faire sauter les légumes en petits dés avec le cumin.', 'Égrainer la semoule avec l’huile.', 'Mélanger avec les légumes.'] },

  { n: 'Gratin de chou-fleur', c: 'Accompagnement', k: null, t: 40, m: null, kw: 'gratin, béchamel, légumes',
    i: ['250 g Chou-fleur', '15 g Beurre', '15 g Farine', '150 ml Lait', '25 g Gruyère râpé', 'Sel et poivre'],
    s: ['Cuire le chou-fleur 10 minutes à l’eau.', 'Préparer une béchamel avec beurre, farine et lait.', 'Mettre le chou-fleur dans un plat, napper de béchamel et parsemer de gruyère.', 'Gratiner 20 minutes à 200 °C.'] },

  { n: 'Épinards à la crème', c: 'Accompagnement', k: null, t: 15, m: null, kw: 'légumes verts',
    i: ['200 g Épinards', '30 ml Crème', '1 pincée Muscade', 'Sel et poivre'],
    s: ['Faire tomber les épinards dans une poêle 3 minutes.', 'Bien les égoutter.', 'Ajouter la crème et la muscade.', 'Saler, poivrer et chauffer 2 minutes.'] },

  { n: 'Lentilles aux carottes', c: 'Accompagnement', k: null, t: 35, m: null, kw: 'légumineuses',
    i: ['60 g Lentilles vertes', '1 Carotte|Carottes', '0.25 Oignon', '1 Feuille de laurier', 'Sel'],
    s: ['Rincer les lentilles.', 'Les mettre dans l’eau froide avec la carotte en dés, l’oignon et le laurier.', 'Cuire 25 minutes après ébullition.', 'Saler en fin de cuisson.'] },

  { n: 'Flageolets au thym', c: 'Accompagnement', k: null, t: 15, m: null, kw: 'légumineuses, agneau',
    i: ['150 g Flageolets cuits', '0.25 Oignon', '10 g Beurre', 'Thym', 'Sel et poivre'],
    s: ['Faire fondre l’oignon dans le beurre.', 'Ajouter les flageolets égouttés et le thym.', 'Chauffer 8 minutes avec un peu d’eau.', 'Saler et poivrer.'] },

  { n: 'Pâtes au beurre d’herbes', c: 'Accompagnement', k: null, t: 12, m: null, kw: 'pâtes, simple',
    i: ['80 g Pâtes', '10 g Beurre', 'Persil et ciboulette', 'Sel et poivre'],
    s: ['Cuire les pâtes.', 'Hacher les herbes.', 'Mélanger pâtes, beurre et herbes.', 'Saler et poivrer.'] },

  { n: 'Polenta crémeuse', c: 'Accompagnement', k: null, t: 15, m: null, kw: 'italie, maïs',
    i: ['50 g Polenta', '250 ml Lait', '10 g Beurre', '15 g Parmesan', 'Sel'],
    s: ['Porter le lait à ébullition avec le sel.', 'Verser la polenta en pluie en fouettant.', 'Cuire 5 à 8 minutes en remuant.', 'Ajouter beurre et parmesan.'] },

  { n: 'Champignons persillés', c: 'Accompagnement', k: null, t: 15, m: null, kw: 'légumes, poêle',
    i: ['200 g Champignons', '1 Gousse d’ail', '10 g Beurre', '1 cs Persil', 'Sel et poivre'],
    s: ['Émincer les champignons.', 'Les faire sauter à feu vif dans le beurre 8 minutes.', 'Ajouter l’ail et le persil hachés.', 'Saler et poivrer.'] },

  { n: 'Pommes de terre Duchesse', c: 'Accompagnement', k: null, t: 45, m: null, kw: 'fête, pommes de terre, four',
    i: ['250 g Pommes de terre', '1 Jaune d’œuf|Jaunes d’œuf', '15 g Beurre', '1 pincée Muscade', 'Sel'],
    s: ['Cuire les pommes de terre et les écraser en purée sèche.', 'Ajouter beurre, jaune d’œuf, muscade et sel.', 'Former des rosaces à la poche à douille sur une plaque.', 'Cuire 15 minutes à 210 °C.'] },

  { n: 'Ratatouille au four express', c: 'Accompagnement', k: null, t: 45, m: null, kw: 'provence, légumes, tian',
    i: ['0.5 Aubergine', '0.5 Courgette', '1 Tomate|Tomates', '0.25 Oignon', '1 cs Huile d’olive', 'Herbes de Provence', 'Sel'],
    s: ['Préchauffer le four à 190 °C.', 'Trancher les légumes en rondelles fines.', 'Les alterner debout dans un plat sur l’oignon émincé.', 'Arroser d’huile, saler, ajouter les herbes et cuire 35 minutes.'] },

  { n: 'Béchamel', c: 'Sauce et base', k: null, t: 10, m: null, kw: 'sauce, base, gratin',
    i: ['15 g Beurre', '15 g Farine', '200 ml Lait', '1 pincée Muscade', 'Sel et poivre'],
    s: ['Faire fondre le beurre dans une casserole.', 'Ajouter la farine et remuer 1 minute.', 'Verser le lait froid en fouettant sans arrêt jusqu’à ce que la sauce épaississe.', 'Assaisonner de muscade, sel et poivre.'] },

  { n: 'Sauce tomate maison', c: 'Sauce et base', k: null, t: 30, m: null, kw: 'sauce, base, pâtes',
    i: ['200 g Tomates concassées', '0.25 Oignon', '1 Gousse d’ail', '1 cs Huile d’olive', '1 pincée Sucre', 'Basilic', 'Sel'],
    s: ['Faire revenir l’oignon et l’ail dans l’huile.', 'Ajouter les tomates et le sucre.', 'Laisser mijoter 20 minutes.', 'Ajouter le basilic et saler. Mixer si besoin.'] },

  { n: 'Vinaigrette maison', c: 'Sauce et base', k: null, t: 3, m: null, kw: 'sauce, salade',
    i: ['1 cc Moutarde', '1 cs Vinaigre', '3 cs Huile', 'Sel et poivre'],
    s: ['Mélanger la moutarde, le vinaigre, le sel et le poivre.', 'Ajouter l’huile en fouettant.', 'Goûter et ajuster.', 'Se garde quelques jours au frais dans un pot fermé.'] },

  { n: 'Mayonnaise maison', c: 'Sauce et base', k: null, t: 10, m: null, kw: 'sauce, œuf',
    i: ['1 Jaune d’œuf|Jaunes d’œuf', '1 cc Moutarde', '150 ml Huile', '1 cc Vinaigre', 'Sel et poivre'],
    s: ['Tous les ingrédients doivent être à température ambiante.', 'Fouetter le jaune avec la moutarde.', 'Verser l’huile en filet très fin en fouettant sans arrêt.', 'Ajouter vinaigre, sel et poivre. Garder au frais et consommer dans la journée.'] },

  { n: 'Pesto au basilic', c: 'Sauce et base', k: null, t: 10, m: null, kw: 'sauce, italie, pâtes',
    i: ['30 g Basilic', '20 g Parmesan', '1 cs Pignons de pin', '0.5 Gousse d’ail', '50 ml Huile d’olive', 'Sel'],
    s: ['Griller légèrement les pignons.', 'Mixer le basilic, l’ail, les pignons et le parmesan.', 'Ajouter l’huile petit à petit.', 'Saler. Se garde 3 jours couvert d’huile.'] },

  { n: 'Sauce au poivre', c: 'Sauce et base', k: null, t: 10, m: null, kw: 'sauce, viande',
    i: ['1 cc Poivre concassé', '1 cc Échalote', '30 ml Cognac ou bouillon', '60 ml Crème', '5 g Beurre', 'Sel'],
    s: ['Faire revenir l’échalote et le poivre dans le beurre.', 'Verser le cognac ou le bouillon et laisser réduire.', 'Ajouter la crème et laisser épaissir 3 minutes.', 'Saler et servir avec une viande.'] },

  { n: 'Sauce blanche au yaourt', c: 'Sauce et base', k: null, t: 5, m: null, kw: 'sauce, kebab, crudités',
    i: ['100 g Yaourt grec', '0.5 Gousse d’ail', '0.25 Citron', 'Ciboulette', 'Sel et poivre'],
    s: ['Mélanger le yaourt avec l’ail râpé.', 'Ajouter le citron.', 'Ajouter la ciboulette, saler et poivrer.', 'Garder au frais.'] },

  { n: 'Pâte à crêpes', c: 'Sauce et base', k: null, t: 10, m: null, kw: 'base, crêpes, chandeleur',
    i: ['60 g Farine', '1 Œuf|Œufs', '125 ml Lait', '5 g Beurre fondu', '1 pincée Sel'],
    s: ['Mettre la farine et le sel dans un saladier et creuser un puits.', 'Ajouter l’œuf et un peu de lait, mélanger.', 'Verser le reste du lait petit à petit pour éviter les grumeaux.', 'Ajouter le beurre fondu et laisser reposer 1 heure.'] },

  { n: 'Pâte brisée maison', c: 'Sauce et base', k: null, t: 15, m: null, kw: 'base, tarte, quiche',
    i: ['60 g Farine', '30 g Beurre', '15 ml Eau froide', '1 pincée Sel'],
    s: ['Mélanger la farine et le sel.', 'Ajouter le beurre froid en dés et sabler du bout des doigts.', 'Ajouter l’eau et former une boule sans trop pétrir.', 'Laisser reposer 30 minutes au frais avant d’étaler.'] },

  { n: 'Bouillon de légumes maison', c: 'Sauce et base', k: null, t: 50, m: null, kw: 'base, soupe',
    i: ['1 Carotte|Carottes', '0.5 Poireau', '0.25 Oignon', '0.25 Céleri', 'Bouquet garni', '500 ml Eau', 'Sel'],
    s: ['Couper les légumes en gros morceaux.', 'Les mettre dans l’eau froide avec le bouquet garni.', 'Laisser frémir 40 minutes.', 'Filtrer et saler.'] },

  { n: 'Sauce béarnaise', c: 'Sauce et base', k: null, t: 20, m: null, kw: 'sauce, viande, classique',
    i: ['1 Jaune d’œuf|Jaunes d’œuf', '40 g Beurre', '1 cc Échalote', '1 cs Vinaigre', '1 cc Estragon', 'Sel et poivre'],
    s: ['Faire réduire le vinaigre avec l’échalote jusqu’à ce qu’il en reste une cuillère.', 'Ajouter le jaune et un peu d’eau, fouetter au bain-marie jusqu’à ce que ce soit mousseux.', 'Ajouter le beurre fondu petit à petit en fouettant.', 'Ajouter l’estragon, saler et poivrer.'] },

  { n: 'Caramel au beurre salé', c: 'Sauce et base', k: null, t: 15, m: null, kw: 'dessert, sauce, bretagne',
    i: ['50 g Sucre', '20 g Beurre demi-sel', '40 ml Crème'],
    s: ['Faire fondre le sucre à sec dans une casserole jusqu’à ce qu’il soit ambré.', 'Hors du feu, ajouter le beurre puis la crème chaude, attention aux éclaboussures.', 'Remettre 1 minute sur feu doux en mélangeant.', 'Verser dans un pot et laisser refroidir.'] },

  { n: 'Crème pâtissière', c: 'Sauce et base', k: null, t: 15, m: null, kw: 'dessert, base, pâtisserie',
    i: ['125 ml Lait', '1 Jaune d’œuf|Jaunes d’œuf', '25 g Sucre', '10 g Maïzena', 'Vanille'],
    s: ['Chauffer le lait avec la vanille.', 'Fouetter le jaune avec le sucre et la maïzena.', 'Verser le lait chaud dessus, puis remettre sur le feu en fouettant jusqu’à épaississement.', 'Filmer au contact et laisser refroidir.'] },

  { n: 'Chantilly maison', c: 'Sauce et base', k: null, t: 10, m: null, kw: 'dessert, crème',
    i: ['100 ml Crème liquide entière', '10 g Sucre glace', 'Vanille'],
    s: ['Mettre la crème et le bol au réfrigérateur au moins 30 minutes.', 'Fouetter la crème bien froide.', 'Ajouter le sucre glace et la vanille quand elle commence à épaissir.', 'Arrêter dès qu’elle tient au fouet.'] },
  { n: 'Gratin d’aubergines à la parmesane', c: 'Végétarien', k: null, t: 70, m: null, kw: 'italie, parmigiana, gratin',
    i: ['1 Aubergine|Aubergines', '150 g Coulis de tomate', '60 g Mozzarella', '20 g Parmesan', '1 cs Huile d’olive', 'Basilic', 'Sel'],
    s: ['Couper l’aubergine en tranches, les huiler et les rôtir 20 minutes à 200 °C.', 'Alterner dans un plat aubergines, coulis, mozzarella et basilic.', 'Finir par le parmesan.', 'Cuire 30 minutes à 180 °C.'] },

  { n: 'Curry de pois chiches', c: 'Végétarien', k: null, t: 30, m: null, kw: 'inde, légumineuses, lait de coco',
    i: ['150 g Pois chiches cuits', '100 g Tomates concassées', '60 ml Lait de coco', '0.25 Oignon', '1 Gousse d’ail', '1 cc Curry', '40 g Épinards', '70 g Riz', '1 cs Huile'],
    s: ['Cuire le riz.', 'Faire revenir l’oignon, l’ail et le curry dans l’huile.', 'Ajouter tomates, lait de coco et pois chiches, puis cuire 15 minutes.', 'Ajouter les épinards 2 minutes et servir avec le riz.'] },

  { n: 'Lasagnes ricotta épinards', c: 'Végétarien', k: null, t: 60, m: null, kw: 'italie, gratin, pâtes',
    i: ['3 Feuille de lasagne|Feuilles de lasagne', '100 g Épinards', '80 g Ricotta', '150 g Coulis de tomate', '40 g Mozzarella', '15 g Parmesan', 'Sel et poivre'],
    s: ['Faire tomber les épinards, les égoutter et les mélanger à la ricotta.', 'Alterner coulis, feuilles de lasagne et mélange épinards-ricotta.', 'Finir par du coulis, la mozzarella et le parmesan.', 'Cuire 35 minutes à 190 °C.'] },

  { n: 'Tarte aux légumes du soleil', c: 'Végétarien', k: null, t: 55, m: null, kw: 'tarte, été, provence',
    i: ['0.25 Pâte brisée|Pâtes brisées', '0.5 Courgette', '0.5 Tomate', '0.25 Poivron', '1 Œuf|Œufs', '40 ml Crème', '15 g Parmesan', 'Herbes de Provence'],
    s: ['Préchauffer le four à 190 °C et garnir un moule de pâte.', 'Faire revenir les légumes en dés 10 minutes.', 'Les répartir sur la pâte, verser l’œuf battu avec la crème et le parmesan.', 'Cuire 35 minutes.'] },

  { n: 'Falafels', c: 'Végétarien', k: null, t: 40, m: null, kw: 'liban, pois chiches, street food',
    i: ['100 g Pois chiches secs trempés', '0.25 Oignon', '1 Gousse d’ail', '1 cs Persil', '0.5 cc Cumin', '1 cc Farine', 'Huile de friture', 'Sel'],
    s: ['Faire tremper les pois chiches secs une nuit (ne pas utiliser de pois chiches cuits).', 'Les mixer avec oignon, ail, persil, cumin, farine et sel.', 'Former des boulettes.', 'Les frire 4 minutes et servir avec une sauce au yaourt.'] },

  { n: 'Burger végétarien aux haricots', c: 'Végétarien', k: null, t: 30, m: null, kw: 'burger, légumineuses',
    i: ['1 Pain à burger|Pains à burger', '100 g Haricots rouges cuits', '20 g Chapelure', '0.25 Oignon', '0.5 cc Paprika', '1 Tranche de cheddar|Tranches de cheddar', '0.5 Tomate', '1 Feuille de salade|Feuilles de salade'],
    s: ['Écraser les haricots avec l’oignon haché, la chapelure et le paprika.', 'Former un steak et le dorer 4 minutes par face.', 'Poser le cheddar dessus pour qu’il fonde.', 'Monter le burger avec salade et tomate.'] },

  { n: 'Risotto aux asperges', c: 'Végétarien', k: null, t: 35, m: null, kw: 'italie, printemps, riz',
    i: ['80 g Riz arborio', '100 g Asperges vertes', '0.25 Oignon', '300 ml Bouillon de légumes', '20 g Parmesan', '10 g Beurre'],
    s: ['Couper les asperges en tronçons et garder les pointes.', 'Nacrer le riz avec l’oignon dans le beurre.', 'Ajouter le bouillon louche par louche pendant 18 minutes, avec les tronçons à mi-cuisson.', 'Ajouter les pointes 3 minutes avant la fin, puis le parmesan.'] },

  { n: 'Tofu sauté aux légumes', c: 'Végétarien', k: null, t: 25, m: null, kw: 'asiatique, wok, tofu',
    i: ['120 g Tofu ferme', '0.5 Poivron', '60 g Brocoli', '1 cs Sauce soja', '1 cc Sirop d’érable', '1 cc Gingembre râpé', '1 cs Huile', '70 g Riz'],
    s: ['Cuire le riz.', 'Dorer le tofu en cubes dans l’huile 6 minutes.', 'Ajouter les légumes et cuire 5 minutes.', 'Ajouter soja, sirop et gingembre, puis mélanger 1 minute.'] },

  { n: 'Chili végétarien aux patates douces', c: 'Végétarien', k: null, t: 40, m: null, kw: 'mexique, légumineuses, épicé',
    i: ['150 g Patate douce', '80 g Haricots rouges', '150 g Tomates concassées', '0.25 Oignon', '1 cc Épices chili', '30 g Maïs', '1 cs Huile'],
    s: ['Faire revenir l’oignon avec les épices.', 'Ajouter patate douce en dés et tomates, puis cuire 20 minutes.', 'Ajouter haricots et maïs, puis cuire 10 minutes.', 'Servir avec du riz ou une tortilla.'] },

  { n: 'Gnocchis à la crème de potiron', c: 'Végétarien', k: null, t: 30, m: null, kw: 'automne, gnocchis, crémeux',
    i: ['200 g Gnocchis', '150 g Potiron', '40 ml Crème', '15 g Parmesan', '1 pincée Muscade', 'Sel'],
    s: ['Cuire le potiron en dés 15 minutes et le mixer avec la crème.', 'Cuire les gnocchis.', 'Mélanger avec la sauce et la muscade.', 'Servir avec le parmesan.'] },

  { n: 'Quiche chèvre épinards', c: 'Végétarien', k: null, t: 50, m: null, kw: 'tarte, fromage de chèvre',
    i: ['0.25 Pâte brisée|Pâtes brisées', '60 g Épinards', '40 g Fromage de chèvre', '1 Œuf|Œufs', '50 ml Crème', 'Sel et poivre'],
    s: ['Préchauffer le four à 190 °C et garnir un moule de pâte.', 'Faire tomber les épinards et les égoutter.', 'Les répartir avec le chèvre, puis verser l’œuf battu avec la crème.', 'Cuire 35 minutes.'] },

  { n: 'Galettes de sarrasin champignons et œuf', c: 'Végétarien', k: null, t: 20, m: null, kw: 'bretagne, crêpe salée',
    i: ['1 Galette de sarrasin|Galettes de sarrasin', '60 g Champignons', '1 Œuf|Œufs', '20 g Emmental râpé', '5 g Beurre'],
    s: ['Faire revenir les champignons émincés.', 'Chauffer la galette dans la poêle beurrée.', 'Casser l’œuf au centre, ajouter le fromage et les champignons.', 'Replier les bords et cuire jusqu’à ce que le blanc soit pris.'] },

  { n: 'Poêlée de légumes et halloumi', c: 'Végétarien', k: null, t: 20, m: null, kw: 'fromage grillé, légumes',
    i: ['60 g Halloumi', '0.5 Courgette', '0.5 Poivron', '6 Tomate cerise|Tomates cerises', '1 cs Huile d’olive', 'Origan'],
    s: ['Faire sauter courgette et poivron en dés 8 minutes.', 'Ajouter les tomates cerises 2 minutes.', 'Griller l’halloumi en tranches 2 minutes par face.', 'Servir sur les légumes avec l’origan.'] },

  { n: 'Dahl de lentilles corail', c: 'Végétarien', k: null, t: 30, m: null, kw: 'inde, légumineuses, épices',
    i: ['70 g Lentilles corail', '100 g Tomates concassées', '60 ml Lait de coco', '0.25 Oignon', '1 Gousse d’ail', '1 cc Curry', '0.5 cc Curcuma', '70 g Riz'],
    s: ['Faire revenir l’oignon, l’ail et les épices.', 'Ajouter lentilles, tomates et 200 ml d’eau.', 'Cuire 20 minutes, puis ajouter le lait de coco.', 'Servir avec le riz.'] },

  { n: 'Croque-tofu au pesto', c: 'Végétarien', k: null, t: 15, m: null, kw: 'sandwich, tofu',
    i: ['2 Tranche de pain de mie|Tranches de pain de mie', '60 g Tofu fumé', '1 cc Pesto', '20 g Mozzarella'],
    s: ['Tartiner le pain de pesto.', 'Ajouter tofu en tranches et mozzarella.', 'Refermer.', 'Dorer 3 minutes par face à la poêle.'] },

  { n: 'Ravioles du Dauphiné gratinées', c: 'Végétarien', k: null, t: 20, m: null, kw: 'fromage, gratin, rapide',
    i: ['120 g Ravioles du Dauphiné', '50 ml Crème', '20 g Comté râpé', 'Ciboulette'],
    s: ['Préchauffer le gril du four.', 'Mettre les ravioles dans un plat avec la crème.', 'Parsemer de comté.', 'Gratiner 8 minutes et ajouter la ciboulette.'] },

  { n: 'Œufs en meurette végétariens', c: 'Végétarien', k: null, t: 35, m: null, kw: 'bourgogne, œufs pochés, vin rouge',
    i: ['2 Œuf|Œufs', '150 ml Vin rouge', '0.25 Oignon', '40 g Champignons', '10 g Beurre', '1 cc Farine', '1 Tranche de pain|Tranches de pain'],
    s: ['Faire revenir l’oignon et les champignons dans le beurre, ajouter la farine.', 'Verser le vin et laisser réduire 15 minutes.', 'Pocher les œufs 3 minutes dans la sauce ou dans l’eau vinaigrée.', 'Servir les œufs nappés de sauce sur le pain grillé.'] },

  { n: 'Tian de légumes au chèvre', c: 'Végétarien', k: null, t: 50, m: null, kw: 'provence, légumes, four',
    i: ['0.5 Courgette', '1 Tomate|Tomates', '0.5 Aubergine', '30 g Fromage de chèvre', '1 cs Huile d’olive', 'Thym', 'Sel'],
    s: ['Préchauffer le four à 190 °C.', 'Couper les légumes en rondelles.', 'Les disposer debout en alternant dans un plat, arroser d’huile, saler et ajouter le thym.', 'Cuire 35 minutes, ajouter le chèvre et cuire encore 5 minutes.'] },

  { n: 'Poivrons farcis au riz et feta', c: 'Végétarien', k: null, t: 55, m: null, kw: 'légumes farcis, four',
    i: ['1 Poivron|Poivrons', '50 g Riz cuit', '30 g Feta', '0.5 Tomate', '1 cc Persil', '1 cs Huile d’olive'],
    s: ['Préchauffer le four à 190 °C.', 'Couper le chapeau du poivron et le vider.', 'Mélanger riz, feta, tomate en dés et persil, puis farcir.', 'Arroser d’huile et cuire 40 minutes.'] },

  { n: 'Pad thaï au tofu', c: 'Végétarien', k: null, t: 25, m: null, kw: 'thaïlande, nouilles, wok',
    i: ['80 g Nouilles de riz', '80 g Tofu', '1 Œuf|Œufs', '30 g Pousses de soja', '1 cs Cacahuètes', '1 cs Sauce soja', '1 cc Sucre', '0.5 Citron vert', '1 cs Huile'],
    s: ['Faire tremper les nouilles dans l’eau chaude selon le paquet.', 'Dorer le tofu en dés dans l’huile, puis brouiller l’œuf à côté.', 'Ajouter les nouilles, la soja et le sucre, puis sauter 3 minutes.', 'Ajouter soja, cacahuètes et citron vert.'] },

  { n: 'Velouté de butternut et pois chiches grillés', c: 'Végétarien', k: null, t: 40, m: null, kw: 'soupe, automne',
    i: ['250 g Courge butternut', '0.25 Oignon', '300 ml Bouillon de légumes', '50 g Pois chiches cuits', '0.5 cc Paprika', '1 cs Huile'],
    s: ['Cuire la courge en cubes avec l’oignon dans le bouillon 25 minutes.', 'Mixer.', 'Griller les pois chiches avec l’huile et le paprika 10 minutes à la poêle.', 'Servir la soupe garnie de pois chiches.'] },

  { n: 'Pâtes aux légumes grillés et feta', c: 'Végétarien', k: null, t: 30, m: null, kw: 'pâtes, été',
    i: ['100 g Pâtes', '0.5 Courgette', '0.5 Poivron', '30 g Feta', '1 cs Huile d’olive', 'Basilic'],
    s: ['Rôtir les légumes en dés 20 minutes à 210 °C avec l’huile.', 'Cuire les pâtes.', 'Mélanger pâtes et légumes.', 'Ajouter la feta émiettée et le basilic.'] },

  { n: 'Tarte Tatin', c: 'Dessert', k: null, t: 60, m: null, kw: 'pommes, caramel, classique',
    i: ['2 Pomme|Pommes', '30 g Sucre', '15 g Beurre', '0.25 Pâte brisée|Pâtes brisées'],
    s: ['Préchauffer le four à 190 °C.', 'Faire un caramel avec le sucre et le beurre dans un moule allant sur le feu.', 'Serrer les pommes en quartiers sur le caramel et cuire 10 minutes sur le feu.', 'Couvrir de pâte en rentrant les bords et cuire 30 minutes.', 'Retourner sur un plat tant que c’est tiède.'] },

  { n: 'Éclairs au chocolat', c: 'Dessert', k: null, t: 90, m: null, kw: 'pâtisserie, pâte à choux, chocolat',
    i: ['25 g Farine', '20 g Beurre', '50 ml Eau', '1 Œuf|Œufs', '125 ml Lait', '1 Jaune d’œuf|Jaunes d’œuf', '25 g Sucre', '10 g Maïzena', '25 g Chocolat noir'],
    s: ['Préparer la pâte à choux : faire bouillir eau et beurre, ajouter la farine, dessécher, puis incorporer l’œuf hors du feu.', 'Former des bâtonnets à la poche et cuire 25 minutes à 180 °C sans ouvrir le four.', 'Préparer une crème pâtissière avec lait, jaune, sucre et maïzena, et y faire fondre la moitié du chocolat.', 'Garnir les éclairs refroidis, puis les glacer avec le reste du chocolat fondu.'] },

  { n: 'Paris-Brest', c: 'Dessert', k: null, t: 100, m: null, kw: 'pâtisserie, praliné, pâte à choux, fête',
    i: ['25 g Farine', '20 g Beurre', '50 ml Eau', '1 Œuf|Œufs', '10 g Amandes effilées', '125 ml Lait', '1 Jaune d’œuf|Jaunes d’œuf', '15 g Sucre', '10 g Maïzena', '30 g Praliné', '25 g Beurre mou'],
    s: ['Préparer une pâte à choux et la dresser en couronne, parsemer d’amandes.', 'Cuire 30 minutes à 180 °C.', 'Préparer une crème pâtissière, la laisser refroidir, puis la fouetter avec le beurre mou et le praliné.', 'Couper la couronne en deux, garnir de crème et refermer.'] },

  { n: 'Baba au rhum', c: 'Dessert', k: null, t: 90, m: null, kw: 'pâtisserie, rhum, sirop',
    i: ['40 g Farine', '1 Œuf|Œufs', '15 g Beurre', '5 g Sucre', '2 g Levure de boulanger', '15 ml Lait tiède', '50 g Sucre pour le sirop', '100 ml Eau', '1 cs Rhum', '1 cs Chantilly'],
    s: ['Mélanger farine, sucre, levure délayée dans le lait et œuf, puis ajouter le beurre fondu.', 'Verser dans un moule à savarin et laisser lever 45 minutes.', 'Cuire 20 minutes à 180 °C.', 'Faire bouillir l’eau et le sucre, ajouter le rhum, et arroser le baba tiède de sirop.', 'Servir avec la chantilly.'] },

  { n: 'Bûche de Noël au chocolat', c: 'Dessert', k: null, t: 80, m: null, kw: 'noël, fête, gâteau roulé, chocolat',
    i: ['1 Œuf|Œufs', '25 g Sucre', '20 g Farine', '40 g Chocolat noir', '40 ml Crème', '10 g Beurre', '1 cc Sucre glace'],
    s: ['Fouetter l’œuf avec le sucre jusqu’à ce qu’il blanchisse, puis ajouter la farine.', 'Étaler sur une plaque et cuire 8 minutes à 200 °C.', 'Rouler le biscuit chaud dans un torchon humide.', 'Faire une ganache avec chocolat, crème et beurre, garnir le biscuit, le rouler et le recouvrir du reste.', 'Faire des stries à la fourchette et saupoudrer de sucre glace.'] },

  { n: 'Cannelés', c: 'Dessert', k: null, t: 80, m: null, kw: 'bordeaux, vanille, rhum, goûter',
    i: ['125 ml Lait', '10 g Beurre', '0.5 Œuf', '50 g Sucre', '25 g Farine', '1 cc Rhum', 'Vanille'],
    s: ['Faire bouillir le lait avec la vanille et le beurre.', 'Mélanger œuf, sucre et farine, puis verser le lait chaud et le rhum.', 'Laisser reposer la pâte au moins 12 heures au frais.', 'Remplir des moules beurrés et cuire 10 minutes à 240 °C, puis 50 minutes à 180 °C.'] },

  { n: 'Cheesecake', c: 'Dessert', k: null, t: 80, m: null, kw: 'new york, fromage frais, gâteau',
    i: ['40 g Biscuits secs', '15 g Beurre', '120 g Fromage frais type Philadelphia', '30 g Sucre', '0.5 Œuf', '20 ml Crème', 'Vanille'],
    s: ['Écraser les biscuits avec le beurre fondu et tasser au fond d’un moule.', 'Mélanger fromage frais, sucre, œuf, crème et vanille.', 'Verser sur la base et cuire 45 minutes à 160 °C.', 'Laisser refroidir dans le four entrouvert, puis au moins 4 heures au réfrigérateur.'] },

  { n: 'Galette des rois', c: 'Dessert', k: null, t: 60, m: null, kw: 'épiphanie, frangipane, pâte feuilletée',
    i: ['0.5 Pâte feuilletée|Pâtes feuilletées', '30 g Poudre d’amandes', '20 g Sucre', '15 g Beurre mou', '0.5 Œuf', '1 Fève|Fèves'],
    s: ['Mélanger poudre d’amandes, sucre, beurre et œuf (garder un peu d’œuf pour dorer).', 'Étaler la crème sur un disque de pâte en laissant un bord, ajouter la fève.', 'Couvrir d’un deuxième disque, souder les bords et dorer à l’œuf.', 'Dessiner des motifs au couteau et cuire 30 minutes à 200 °C.'] },

  { n: 'Profiteroles', c: 'Dessert', k: null, t: 70, m: null, kw: 'pâte à choux, glace, chocolat',
    i: ['25 g Farine', '20 g Beurre', '50 ml Eau', '1 Œuf|Œufs', '2 Boule de glace vanille|Boules de glace vanille', '30 g Chocolat noir', '30 ml Crème'],
    s: ['Préparer une pâte à choux et former de petits choux.', 'Cuire 25 minutes à 180 °C.', 'Faire fondre le chocolat avec la crème.', 'Ouvrir les choux, garnir de glace et napper de chocolat chaud.'] },

  { n: 'Tarte aux fraises', c: 'Dessert', k: null, t: 50, m: null, kw: 'fruits, printemps, pâtisserie',
    i: ['0.25 Pâte sablée|Pâtes sablées', '125 ml Lait', '1 Jaune d’œuf|Jaunes d’œuf', '25 g Sucre', '10 g Maïzena', '100 g Fraises'],
    s: ['Cuire le fond de tarte à blanc 20 minutes à 180 °C.', 'Préparer une crème pâtissière et la laisser refroidir.', 'Étaler la crème sur le fond refroidi.', 'Disposer les fraises coupées en deux.'] },

  { n: 'Tarte aux poires amandine', c: 'Dessert', k: null, t: 60, m: null, kw: 'fruits, amandes, bourdaloue',
    i: ['0.25 Pâte sablée|Pâtes sablées', '1 Poire|Poires', '25 g Poudre d’amandes', '20 g Sucre', '15 g Beurre mou', '0.5 Œuf'],
    s: ['Préchauffer le four à 180 °C et garnir un moule de pâte.', 'Mélanger poudre d’amandes, sucre, beurre et œuf.', 'Étaler cette crème sur la pâte et y disposer la poire en lamelles.', 'Cuire 35 minutes.'] },

  { n: 'Moelleux au citron', c: 'Dessert', k: null, t: 40, m: null, kw: 'gâteau, agrumes, goûter',
    i: ['1 Œuf|Œufs', '40 g Sucre', '40 g Farine', '30 g Beurre fondu', '0.5 Citron', '2 g Levure chimique'],
    s: ['Préchauffer le four à 180 °C.', 'Fouetter l’œuf et le sucre, ajouter le zeste et le jus de citron.', 'Ajouter farine, levure et beurre fondu.', 'Verser dans un moule et cuire 25 minutes.'] },

  { n: 'Gâteau marbré', c: 'Dessert', k: null, t: 60, m: null, kw: 'goûter, chocolat, vanille, enfants',
    i: ['1 Œuf|Œufs', '40 g Sucre', '45 g Farine', '35 g Beurre fondu', '2 g Levure chimique', '1 cc Cacao', 'Vanille'],
    s: ['Préchauffer le four à 180 °C.', 'Mélanger œuf, sucre, farine, levure et beurre.', 'Séparer la pâte en deux et ajouter le cacao dans une moitié et la vanille dans l’autre.', 'Alterner les deux pâtes dans un moule à cake et cuire 40 minutes.'] },

  { n: 'Carrot cake', c: 'Dessert', k: null, t: 60, m: null, kw: 'gâteau, carottes, cannelle',
    i: ['60 g Carottes', '0.5 Œuf', '30 g Sucre', '40 g Farine', '25 ml Huile', '10 g Noix', '0.5 cc Cannelle', '2 g Levure chimique', '30 g Fromage frais', '10 g Sucre glace'],
    s: ['Préchauffer le four à 180 °C.', 'Mélanger œuf, sucre et huile, puis farine, levure et cannelle.', 'Ajouter les carottes râpées et les noix, puis cuire 40 minutes.', 'Mélanger fromage frais et sucre glace et napper le gâteau refroidi.'] },

  { n: 'Crêpes Suzette', c: 'Dessert', k: null, t: 30, m: null, kw: 'crêpes, orange, fête',
    i: ['2 Crêpe|Crêpes', '15 g Beurre', '15 g Sucre', '1 Orange|Oranges', '1 cs Grand Marnier'],
    s: ['Faire fondre le beurre et le sucre dans une poêle.', 'Ajouter le jus et le zeste d’orange, puis laisser réduire.', 'Plier les crêpes en quatre et les réchauffer dans la sauce.', 'Ajouter le Grand Marnier et servir aussitôt.'] },

  { n: 'Mousse au citron', c: 'Dessert', k: null, t: 20, m: null, kw: 'frais, agrumes, léger',
    i: ['1 Œuf|Œufs', '25 g Sucre', '0.5 Citron', '50 ml Crème liquide'],
    s: ['Fouetter le jaune avec le sucre, le jus et le zeste de citron.', 'Monter la crème en chantilly et le blanc en neige.', 'Incorporer délicatement la crème puis le blanc.', 'Laisser prendre 3 heures au frais.'] },

  { n: 'Crème caramel', c: 'Dessert', k: null, t: 60, m: null, kw: 'flan, caramel, classique',
    i: ['125 ml Lait', '1 Œuf|Œufs', '20 g Sucre', '20 g Sucre pour le caramel', 'Vanille'],
    s: ['Faire un caramel et le verser au fond d’un ramequin.', 'Chauffer le lait avec la vanille.', 'Fouetter œuf et sucre, ajouter le lait chaud.', 'Verser dans le ramequin et cuire 35 minutes au bain-marie à 160 °C. Laisser refroidir avant de démouler.'] },

  { n: 'Œufs à la neige', c: 'Dessert', k: null, t: 40, m: null, kw: 'crème anglaise, classique',
    i: ['1 Œuf|Œufs', '150 ml Lait', '30 g Sucre', 'Vanille'],
    s: ['Préparer une crème anglaise avec le lait, le jaune et la moitié du sucre en cuisant doucement jusqu’à ce qu’elle nappe la cuillère.', 'Monter le blanc en neige avec le reste du sucre.', 'Pocher des cuillerées de blanc 1 minute de chaque côté dans du lait frémissant.', 'Servir les blancs sur la crème anglaise froide.'] },

  { n: 'Charlotte aux fraises', c: 'Dessert', k: null, t: 40, m: null, kw: 'fruits, fête, sans cuisson',
    i: ['6 Biscuit cuillère|Biscuits cuillère', '100 g Fraises', '80 g Fromage blanc', '50 ml Crème liquide', '15 g Sucre', '50 ml Sirop de fraise dilué'],
    s: ['Tremper rapidement les biscuits dans le sirop et tapisser un moule.', 'Mélanger fromage blanc, sucre et crème fouettée.', 'Alterner crème et fraises coupées, finir par des biscuits.', 'Laisser au frais au moins 6 heures avant de démouler.'] },

  { n: 'Fondant à la châtaigne', c: 'Dessert', k: null, t: 40, m: null, kw: 'automne, crème de marrons, gâteau',
    i: ['100 g Crème de marrons', '1 Œuf|Œufs', '25 g Beurre fondu', '10 g Farine'],
    s: ['Préchauffer le four à 180 °C.', 'Mélanger la crème de marrons, l’œuf et le beurre fondu.', 'Ajouter la farine.', 'Cuire 25 minutes dans un petit moule.'] },

  { n: 'Kouign-amann', c: 'Dessert', k: null, t: 120, m: null, kw: 'bretagne, beurre, caramel',
    i: ['60 g Farine', '2 g Levure de boulanger', '35 ml Eau', '35 g Beurre demi-sel', '35 g Sucre'],
    s: ['Préparer une pâte avec farine, levure et eau, puis la laisser lever 1 heure.', 'L’étaler, poser le beurre et la moitié du sucre, plier en trois.', 'Étaler et replier deux fois en ajoutant le reste du sucre.', 'Mettre dans un moule beurré et cuire 35 minutes à 200 °C.'] },

  { n: 'Churros', c: 'Dessert', k: null, t: 30, m: null, kw: 'espagne, friture, goûter',
    i: ['60 g Farine', '80 ml Eau', '1 pincée Sel', '1 cs Sucre', '0.5 cc Cannelle', 'Huile de friture'],
    s: ['Faire bouillir l’eau avec le sel, ajouter la farine d’un coup et mélanger.', 'Mettre la pâte dans une poche à douille cannelée.', 'Pousser des bâtonnets dans l’huile chaude et frire 3 minutes.', 'Rouler dans le sucre mélangé à la cannelle.'] },

  { n: 'Beignets aux pommes', c: 'Dessert', k: null, t: 30, m: null, kw: 'friture, carnaval, fruits',
    i: ['1 Pomme|Pommes', '40 g Farine', '0.5 Œuf', '50 ml Lait', '1 cc Sucre', 'Huile de friture', '1 cc Sucre glace'],
    s: ['Mélanger farine, œuf, lait et sucre.', 'Couper la pomme en rondelles et retirer le cœur.', 'Tremper les rondelles dans la pâte et les frire 2 minutes par face.', 'Égoutter et saupoudrer de sucre glace.'] },

  { n: 'Smoothie banane fraise', c: 'Dessert', k: null, t: 5, m: null, kw: 'boisson, fruits, rapide',
    i: ['1 Banane|Bananes', '80 g Fraises', '100 ml Lait', '1 cc Miel'],
    s: ['Mettre tous les ingrédients dans un blender.', 'Mixer jusqu’à ce que ce soit lisse.', 'Ajouter un peu de lait si c’est trop épais.', 'Servir bien frais.'] },

  { n: 'Verrine de fromage blanc aux fruits', c: 'Dessert', k: null, t: 10, m: null, kw: 'léger, frais, rapide',
    i: ['120 g Fromage blanc', '60 g Fruits de saison', '1 cc Miel', '1 cs Granola'],
    s: ['Couper les fruits en dés.', 'Alterner fromage blanc et fruits dans un verre.', 'Arroser de miel.', 'Ajouter le granola au moment de servir.'] },

  { n: 'Bananes flambées', c: 'Dessert', k: null, t: 10, m: null, kw: 'antilles, fruits, rhum',
    i: ['1 Banane|Bananes', '10 g Beurre', '1 cs Sucre roux', '1 cs Rhum'],
    s: ['Couper la banane en deux dans la longueur.', 'La dorer dans le beurre avec le sucre 2 minutes par face.', 'Verser le rhum chaud et flamber avec prudence, loin de la hotte.', 'Servir aussitôt, avec une boule de glace si on veut.'] },

  { n: 'Tarte au chocolat', c: 'Dessert', k: null, t: 50, m: null, kw: 'chocolat, ganache, pâtisserie',
    i: ['0.25 Pâte sablée|Pâtes sablées', '50 g Chocolat noir', '50 ml Crème', '0.25 Œuf', '5 g Beurre'],
    s: ['Cuire le fond de tarte à blanc 20 minutes à 180 °C.', 'Verser la crème chaude sur le chocolat et mélanger.', 'Ajouter l’œuf et le beurre.', 'Verser sur le fond et cuire 12 minutes à 150 °C. Laisser prendre au frais.'] },

  { n: 'Financiers', c: 'Dessert', k: null, t: 30, m: null, kw: 'amandes, goûter, petits gâteaux',
    i: ['1 Blanc d’œuf|Blancs d’œuf', '25 g Poudre d’amandes', '30 g Sucre glace', '10 g Farine', '25 g Beurre'],
    s: ['Faire fondre le beurre jusqu’à ce qu’il soit noisette.', 'Mélanger poudre d’amandes, sucre glace et farine.', 'Ajouter le blanc non battu, puis le beurre.', 'Remplir de petits moules et cuire 12 minutes à 200 °C.'] },

  { n: 'Sablés au beurre', c: 'Dessert', k: null, t: 40, m: null, kw: 'biscuits, goûter, enfants',
    i: ['50 g Farine', '30 g Beurre mou', '20 g Sucre', '0.25 Œuf', '1 pincée Sel'],
    s: ['Mélanger le beurre et le sucre, puis l’œuf.', 'Ajouter farine et sel, former une boule et laisser reposer 30 minutes au frais.', 'Étaler et découper des formes.', 'Cuire 10 à 12 minutes à 180 °C.'] },

  { n: 'Riz au lait à la cannelle', c: 'Dessert', k: null, t: 45, m: null, kw: 'dessert de mamie, lait',
    i: ['30 g Riz rond', '250 ml Lait', '20 g Sucre', '0.5 cc Cannelle'],
    s: ['Faire bouillir le lait avec la cannelle.', 'Ajouter le riz et cuire 35 minutes à feu très doux en remuant souvent.', 'Ajouter le sucre en fin de cuisson.', 'Servir tiède ou froid.'] },

  { n: 'Pain d’épices', c: 'Dessert', k: null, t: 70, m: null, kw: 'noël, miel, épices, goûter',
    i: ['50 g Farine', '40 g Miel', '30 ml Lait', '0.25 Œuf', '1 cc Épices à pain d’épices', '2 g Levure chimique'],
    s: ['Préchauffer le four à 160 °C.', 'Chauffer le miel avec le lait.', 'Mélanger farine, levure, épices et œuf, puis ajouter le mélange au miel.', 'Cuire 50 minutes dans un moule à cake.'] },

  { n: 'Fraisier simplifié', c: 'Dessert', k: null, t: 90, m: null, kw: 'pâtisserie, fraises, fête',
    i: ['1 Œuf|Œufs', '25 g Sucre', '25 g Farine', '125 ml Lait', '1 Jaune d’œuf|Jaunes d’œuf', '20 g Sucre pour la crème', '10 g Maïzena', '30 g Beurre mou', '120 g Fraises'],
    s: ['Préparer une génoise : fouetter œuf et sucre, ajouter la farine et cuire 15 minutes à 180 °C.', 'Préparer une crème pâtissière, la laisser refroidir et la fouetter avec le beurre mou.', 'Couper la génoise en deux disques.', 'Monter : génoise, fraises coupées en deux sur le bord, crème, génoise. Laisser prendre 4 heures au frais.'] }
];

// Photos des recettes intégrées (Unsplash, licence gratuite : https://unsplash.com/license)
window.PHOTOS_RECETTES = {
  "Banana bread": "banana-bread.jpg",
  "Blanquette de veau": "blanquette-de-veau.jpg",
  "Boulettes de bœuf sauce tomate": "boulettes-de-boeuf-sauce-tomate.jpg",
  "Bowl poulet quinoa": "bowl-poulet-quinoa.jpg",
  "Bowl poulet shawarma": "bowl-poulet-shawarma.jpg",
  "Brandade de morue": "brandade-de-morue.jpg",
  "Brownie": "brownie.jpg",
  "Buddha bowl": "buddha-bowl.jpg",
  "Burger maison": "burger-maison.jpg",
  "Bœuf bourguignon": "boeuf-bourguignon.jpg",
  "Bœuf carottes": "boeuf-carottes.jpg",
  "Bœuf sauté aux oignons": "boeuf-saute-aux-oignons.jpg",
  "Cabillaud en papillote": "cabillaud-en-papillote.jpg",
  "Carbonade flamande": "carbonade-flamande.jpg",
  "Cassoulet": "cassoulet.jpg",
  "Chili con carne": "chili-con-carne.jpg",
  "Chili protéiné à la dinde": "chili-proteine-a-la-dinde.jpg",
  "Chili sin carne": "chili-sin-carne.jpg",
  "Chou farci": "chou-farci.jpg",
  "Choucroute garnie": "choucroute-garnie.jpg",
  "Clafoutis aux cerises": "clafoutis-aux-cerises.jpg",
  "Colin pané et purée": "colin-pane-et-puree.jpg",
  "Colombo de poulet": "colombo-de-poulet.jpg",
  "Compote de pommes maison": "compote-de-pommes-maison.jpg",
  "Cookies aux pépites de chocolat": "cookies-aux-pepites-de-chocolat.jpg",
  "Coq au vin": "coq-au-vin.jpg",
  "Cordon bleu maison": "cordon-bleu-maison.jpg",
  "Courgettes farcies": "courgettes-farcies.jpg",
  "Couscous au poulet et merguez": "couscous-au-poulet-et-merguez.jpg",
  "Crevettes sautées à l’ail": "crevettes-sautees-a-l-ail.jpg",
  "Croque végétarien": "croque-vegetarien.jpg",
  "Croque-madame": "croque-madame.jpg",
  "Croque-monsieur": "croque-monsieur.jpg",
  "Croziflette": "croziflette.jpg",
  "Crumble aux pommes": "crumble-aux-pommes.jpg",
  "Crème brûlée": "creme-brulee.jpg",
  "Crêpes": "crepes.jpg",
  "Curry de lentilles": "curry-de-lentilles.jpg",
  "Côtes de porc et haricots verts": "cotes-de-porc-et-haricots-verts.jpg",
  "Dahl de pois chiches et épinards": "dahl-de-pois-chiches-et-epinards.jpg",
  "Dos de cabillaud au chorizo": "dos-de-cabillaud-au-chorizo.jpg",
  "Endives au jambon": "endives-au-jambon.jpg",
  "Escalope de dinde à la crème": "escalope-de-dinde-a-la-creme.jpg",
  "Escalope milanaise": "escalope-milanaise.jpg",
  "Fajitas au poulet": "fajitas-au-poulet.jpg",
  "Far breton": "far-breton.jpg",
  "Filet mignon à la moutarde": "filet-mignon-a-la-moutarde.jpg",
  "Flan pâtissier": "flan-patissier.jpg",
  "Fondant au chocolat": "fondant-au-chocolat.jpg",
  "Fromage blanc protéiné aux fruits rouges": "fromage-blanc-proteine-aux-fruits-rouges.jpg",
  "Galettes de légumes": "galettes-de-legumes.jpg",
  "Gaspacho": "gaspacho.jpg",
  "Gaufres": "gaufres.jpg",
  "Gigot d’agneau et flageolets": "gigot-d-agneau-et-flageolets.jpg",
  "Gnocchis à la tomate et mozzarella": "gnocchis-a-la-tomate-et-mozzarella.jpg",
  "Gratin dauphinois": "gratin-dauphinois.jpg",
  "Gratin de courgettes": "gratin-de-courgettes.jpg",
  "Gratin de macaronis": "gratin-de-macaronis.jpg",
  "Gratin de poisson": "gratin-de-poisson.jpg",
  "Gratin de pâtes au jambon": "gratin-de-pates-au-jambon.jpg",
  "Gâteau au yaourt": "gateau-au-yaourt.jpg",
  "Hachis parmentier": "hachis-parmentier.jpg",
  "Hot-dog maison": "hot-dog-maison.jpg",
  "Lapin à la moutarde": "lapin-a-la-moutarde.jpg",
  "Lasagnes aux légumes": "lasagnes-aux-legumes.jpg",
  "Lasagnes à la bolognaise": "lasagnes-a-la-bolognaise.jpg",
  "Madeleines": "madeleines.jpg",
  "Magret de canard et pommes sarladaises": "magret-de-canard-et-pommes-sarladaises.jpg",
  "Minestrone": "minestrone.jpg",
  "Moules marinières": "moules-marinieres.jpg",
  "Moussaka": "moussaka.jpg",
  "Mousse au chocolat": "mousse-au-chocolat.jpg",
  "Navarin d’agneau": "navarin-d-agneau.jpg",
  "Nouilles sautées aux légumes": "nouilles-sautees-aux-legumes.jpg",
  "Omelette aux champignons": "omelette-aux-champignons.jpg",
  "Osso buco": "osso-buco.jpg",
  "Pad thaï au poulet": "pad-thai-au-poulet.jpg",
  "Pain perdu": "pain-perdu.jpg",
  "Pancakes": "pancakes.jpg",
  "Panna cotta aux fruits rouges": "panna-cotta-aux-fruits-rouges.jpg",
  "Paëlla": "paella.jpg",
  "Penne all’arrabbiata": "penne-all-arrabbiata.jpg",
  "Petit salé aux lentilles": "petit-sale-aux-lentilles.jpg",
  "Pizza maison jambon-fromage": "pizza-maison-jambon-fromage.jpg",
  "Poires belle-Hélène": "poires-belle-helene.jpg",
  "Poivrons farcis": "poivrons-farcis.jpg",
  "Poke bowl au saumon": "poke-bowl-au-saumon.jpg",
  "Porc au caramel": "porc-au-caramel.jpg",
  "Pot-au-feu": "pot-au-feu.jpg",
  "Poulet Gaston Gérard": "poulet-gaston-gerard.jpg",
  "Poulet au curry et lait de coco": "poulet-au-curry-et-lait-de-coco.jpg",
  "Poulet basquaise": "poulet-basquaise.jpg",
  "Poulet grillé et haricots verts": "poulet-grille-et-haricots-verts.jpg",
  "Poulet rôti et légumes": "poulet-roti-et-legumes.jpg",
  "Poulet tikka masala": "poulet-tikka-masala.jpg",
  "Poulet vallée d’Auge": "poulet-vallee-d-auge.jpg",
  "Poulet yassa": "poulet-yassa.jpg",
  "Poulet à la moutarde": "poulet-a-la-moutarde.jpg",
  "Purée de patate douce et poulet": "puree-de-patate-douce-et-poulet.jpg",
  "Pâtes au pesto": "pates-au-pesto.jpg",
  "Pâtes au thon et à la tomate": "pates-au-thon-et-a-la-tomate.jpg",
  "Pâtes bolognaise": "pates-bolognaise.jpg",
  "Quatre-quarts": "quatre-quarts.jpg",
  "Quesadillas": "quesadillas.jpg",
  "Quiche aux poireaux": "quiche-aux-poireaux.jpg",
  "Quiche lorraine": "quiche-lorraine.jpg",
  "Raclette": "raclette.jpg",
  "Ratatouille": "ratatouille.jpg",
  "Risotto aux champignons": "risotto-aux-champignons.jpg",
  "Riz au lait": "riz-au-lait.jpg",
  "Riz cantonais": "riz-cantonais.jpg",
  "Rougail saucisses": "rougail-saucisses.jpg",
  "Rôti de bœuf et haricots verts": "roti-de-boeuf-et-haricots-verts.jpg",
  "Rôti de porc aux pommes de terre": "roti-de-porc-aux-pommes-de-terre.jpg",
  "Salade César": "salade-cesar.jpg",
  "Salade de chèvre chaud": "salade-de-chevre-chaud.jpg",
  "Salade de fruits frais": "salade-de-fruits-frais.jpg",
  "Salade de lentilles": "salade-de-lentilles.jpg",
  "Salade de poulet grillé": "salade-de-poulet-grille.jpg",
  "Salade de pâtes": "salade-de-pates.jpg",
  "Salade de riz": "salade-de-riz.jpg",
  "Salade grecque": "salade-grecque.jpg",
  "Salade niçoise": "salade-nicoise.jpg",
  "Sardines grillées": "sardines-grillees.jpg",
  "Saucisses lentilles": "saucisses-lentilles.jpg",
  "Saumon en croûte d’herbes": "saumon-en-croute-d-herbes.jpg",
  "Saumon teriyaki": "saumon-teriyaki.jpg",
  "Saumon, riz et brocoli": "saumon-riz-et-brocoli.jpg",
  "Shakshuka": "shakshuka.jpg",
  "Soupe de lentilles corail": "soupe-de-lentilles-corail.jpg",
  "Soupe de légumes": "soupe-de-legumes.jpg",
  "Soupe de potimarron au lait de coco": "soupe-de-potimarron-au-lait-de-coco.jpg",
  "Soupe à l’oignon gratinée": "soupe-a-l-oignon-gratinee.jpg",
  "Spaghetti carbonara": "spaghetti-carbonara.jpg",
  "Steak au poivre": "steak-au-poivre.jpg",
  "Steak de thon et légumes": "steak-de-thon-et-legumes.jpg",
  "Steak haché et frites au four": "steak-hache-et-frites-au-four.jpg",
  "Taboulé": "taboule.jpg",
  "Taboulé de quinoa": "taboule-de-quinoa.jpg",
  "Tagliatelles au saumon": "tagliatelles-au-saumon.jpg",
  "Tajine de poulet aux citrons confits": "tajine-de-poulet-aux-citrons-confits.jpg",
  "Tarte au citron meringuée": "tarte-au-citron-meringuee.jpg",
  "Tarte aux pommes": "tarte-aux-pommes.jpg",
  "Tarte flambée": "tarte-flambee.jpg",
  "Tarte à la tomate et moutarde": "tarte-a-la-tomate-et-moutarde.jpg",
  "Tartiflette": "tartiflette.jpg",
  "Tiramisu": "tiramisu.jpg",
  "Tomates farcies": "tomates-farcies.jpg",
  "Velouté de carottes au cumin": "veloute-de-carottes-au-cumin.jpg",
  "Velouté de champignons": "veloute-de-champignons.jpg",
  "Velouté de poireaux pommes de terre": "veloute-de-poireaux-pommes-de-terre.jpg",
  "Velouté de potiron": "veloute-de-potiron.jpg",
  "Wrap poulet crudités": "wrap-poulet-crudites.jpg",
  "Œufs brouillés et toasts": "oeufs-brouilles-et-toasts.jpg",
  "Œufs cocotte": "oeufs-cocotte.jpg"
};
// Identifiants Unsplash des photos (pour retrouver l’auteur : https://unsplash.com/photos/<id>)
window.SOURCES_PHOTOS = {
  "banana-bread.jpg": "1767065887793-f68f736ea9d6",
  "blanquette-de-veau.jpg": "1665594051407-7385d281ad76",
  "boulettes-de-boeuf-sauce-tomate.jpg": "1635264685671-739e75e73e0f",
  "bowl-poulet-quinoa.jpg": "1668665771757-4d42737d295a",
  "bowl-poulet-shawarma.jpg": "1628268444675-784a289d3a30",
  "brandade-de-morue.jpg": "1726455431752-fed6c661a31e",
  "brownie.jpg": "1636743715220-d8f8dd900b87",
  "buddha-bowl.jpg": "1589442305595-62647c1514f9",
  "burger-maison.jpg": "1568901346375-23c9450c58cd",
  "boeuf-bourguignon.jpg": "1608500218987-0f2b3be34b47",
  "boeuf-carottes.jpg": "1664339030060-191ccb53b5d2",
  "boeuf-saute-aux-oignons.jpg": "1760504526069-ff0f8bf6e4ca",
  "cabillaud-en-papillote.jpg": "1580909408746-e5b993dae484",
  "carbonade-flamande.jpg": "1519699788450-ad34386a3bfc",
  "cassoulet.jpg": "1700770089779-c30c44a5865a",
  "chili-con-carne.jpg": "1658308766948-01c85ade2737",
  "chili-proteine-a-la-dinde.jpg": "1666819632298-fe15dc7d4c34",
  "chili-sin-carne.jpg": "1638329389022-daef2efb71b3",
  "chou-farci.jpg": "1622220736031-714bcc9f96b0",
  "choucroute-garnie.jpg": "1695089028198-80245e2f5d06",
  "clafoutis-aux-cerises.jpg": "1624747532304-b802639ee7b6",
  "colin-pane-et-puree.jpg": "1633436375153-d7045cb93e38",
  "colombo-de-poulet.jpg": "1632852576480-c10a8e19496a",
  "compote-de-pommes-maison.jpg": "1600984177310-c86c8f8fa9c7",
  "cookies-aux-pepites-de-chocolat.jpg": "1558961363-fa8fdf82db35",
  "coq-au-vin.jpg": "1667396702543-a239efa7a7f2",
  "cordon-bleu-maison.jpg": "1585325701956-60dd9c8553bc",
  "courgettes-farcies.jpg": "1636044989306-e9fc5eeb118b",
  "couscous-au-poulet-et-merguez.jpg": "1541518763669-27fef04b14ea",
  "crevettes-sautees-a-l-ail.jpg": "1625943553852-781c6dd46faa",
  "croque-vegetarien.jpg": "1639744093483-86714cd62a3b",
  "croque-madame.jpg": "1531664412848-9610afed156c",
  "croque-monsieur.jpg": "1647505794572-0a6d945d664d",
  "croziflette.jpg": "1609183228849-82726e169ca7",
  "crumble-aux-pommes.jpg": "1706799419621-14d7f424de83",
  "creme-brulee.jpg": "1676300184943-09b2a08319a3",
  "crepes.jpg": "1771250248306-3da13dac0a50",
  "curry-de-lentilles.jpg": "1627366422957-3efa9c6df0fc",
  "cotes-de-porc-et-haricots-verts.jpg": "1652209898504-ea7f96b44580",
  "dahl-de-pois-chiches-et-epinards.jpg": "1609595781576-1580ff3ee291",
  "dos-de-cabillaud-au-chorizo.jpg": "1764333580740-b327847301b1",
  "endives-au-jambon.jpg": "1710024893536-1b47d97cad43",
  "escalope-de-dinde-a-la-creme.jpg": "1788462612914-44793f2980f2",
  "escalope-milanaise.jpg": "1599921841143-819065a55cc6",
  "fajitas-au-poulet.jpg": "1689773976415-293dd893f77e",
  "far-breton.jpg": "1702728109878-c61a98d80491",
  "filet-mignon-a-la-moutarde.jpg": "1580554530778-ca36943938b2",
  "flan-patissier.jpg": "1721489620017-aedd0cffb93e",
  "fondant-au-chocolat.jpg": "1617305855058-336d24456869",
  "fromage-blanc-proteine-aux-fruits-rouges.jpg": "1612182062572-e29c5dfb5eb4",
  "galettes-de-legumes.jpg": "1767114915965-7abe87d7c7d8",
  "gaspacho.jpg": "1624382075163-a4fdb99b99ec",
  "gaufres.jpg": "1562376552-0d160a2f238d",
  "gigot-d-agneau-et-flageolets.jpg": "1529692236671-f1f6cf9683ba",
  "gnocchis-a-la-tomate-et-mozzarella.jpg": "1778837224450-aae9742193ad",
  "gratin-dauphinois.jpg": "1645453014403-4ad5170a386c",
  "gratin-de-courgettes.jpg": "1693940747465-423ec720f3e6",
  "gratin-de-macaronis.jpg": "1667499989723-c4ab9549d63c",
  "gratin-de-poisson.jpg": "1710024893503-2c91534d284a",
  "gratin-de-pates-au-jambon.jpg": "1620041631703-45ddcef3dae0",
  "gateau-au-yaourt.jpg": "1605466237764-3d8d802c8a8d",
  "hachis-parmentier.jpg": "1696935257293-9ec4f03074a1",
  "hot-dog-maison.jpg": "1776260486226-11dabfacf5f2",
  "lapin-a-la-moutarde.jpg": "1652545296821-09a023a9fd08",
  "lasagnes-aux-legumes.jpg": "1586197138382-e1d1479fbb14",
  "lasagnes-a-la-bolognaise.jpg": "1709429790175-b02bb1b19207",
  "madeleines.jpg": "1638518754956-b35c59b4f4cd",
  "magret-de-canard-et-pommes-sarladaises.jpg": "1582391123232-6130296f1fcd",
  "minestrone.jpg": "1611068120813-eca5a8cbf793",
  "moules-marinieres.jpg": "1757972367630-fbfcec63bb41",
  "moussaka.jpg": "1777199311086-ec5ff230aefd",
  "mousse-au-chocolat.jpg": "1590080875852-ba44f83ff2db",
  "navarin-d-agneau.jpg": "1608500219063-e5164085cd6f",
  "nouilles-sautees-aux-legumes.jpg": "1585032226651-759b368d7246",
  "omelette-aux-champignons.jpg": "1766146431872-a4472ccd3889",
  "osso-buco.jpg": "1608500218861-01091cdc501e",
  "pad-thai-au-poulet.jpg": "1637806930600-37fa8892069d",
  "pain-perdu.jpg": "1595044643502-616eeebbdff3",
  "pancakes.jpg": "1612182062633-9ff3b3598e96",
  "panna-cotta-aux-fruits-rouges.jpg": "1787550275377-9f54a07c68c8",
  "paella.jpg": "1763647738062-d83e44328a6f",
  "penne-all-arrabbiata.jpg": "1734769774783-78ddeed93751",
  "petit-sale-aux-lentilles.jpg": "1660899228393-f85563a30e48",
  "pizza-maison-jambon-fromage.jpg": "1692737580563-7ba2d896f0f6",
  "poires-belle-helene.jpg": "1696426506268-00a41b06b956",
  "poivrons-farcis.jpg": "1689012117967-433df843aa7a",
  "poke-bowl-au-saumon.jpg": "1633862472152-e3873eb1b3ff",
  "porc-au-caramel.jpg": "1625477811233-044633d10dd1",
  "pot-au-feu.jpg": "1664741662725-bd131742b7b7",
  "poulet-gaston-gerard.jpg": "1710024894301-e4b0b15ad587",
  "poulet-au-curry-et-lait-de-coco.jpg": "1708782344490-9026aaa5eec7",
  "poulet-basquaise.jpg": "1708782344071-35ed44b849a9",
  "poulet-grille-et-haricots-verts.jpg": "1598515214211-89d3c73ae83b",
  "poulet-roti-et-legumes.jpg": "1768238907887-023b7ac9f450",
  "poulet-tikka-masala.jpg": "1565557623262-b51c2513a641",
  "poulet-vallee-d-auge.jpg": "1724116380587-08942b137f9f",
  "poulet-yassa.jpg": "1772693471187-6e7d364f99ee",
  "poulet-a-la-moutarde.jpg": "1694579740719-0e601c5d2437",
  "puree-de-patate-douce-et-poulet.jpg": "1703219342277-1a78d6b4a27f",
  "pates-au-pesto.jpg": "1766706519060-d44bd9dc50f7",
  "pates-au-thon-et-a-la-tomate.jpg": "1606325625602-2efd3bc49abd",
  "pates-bolognaise.jpg": "1622973536968-3ead9e780960",
  "quatre-quarts.jpg": "1534353875273-b5887cc1abf5",
  "quesadillas.jpg": "1628838233717-be047a0b54fb",
  "quiche-aux-poireaux.jpg": "1767065584465-797ee48ce8b3",
  "quiche-lorraine.jpg": "1788245155991-78fcd1944899",
  "raclette.jpg": "1642522685167-cf414ea225be",
  "ratatouille.jpg": "1652622550740-f90d03edfbf0",
  "risotto-aux-champignons.jpg": "1633964913295-ceb43826e7c9",
  "riz-au-lait.jpg": "1606728099646-68d5a0a4d423",
  "riz-cantonais.jpg": "1603133872878-684f208fb84b",
  "rougail-saucisses.jpg": "1528451635828-f28cd48439a7",
  "roti-de-boeuf-et-haricots-verts.jpg": "1594041680534-e8c8cdebd659",
  "roti-de-porc-aux-pommes-de-terre.jpg": "1635897411141-7bd2b9c6ab16",
  "salade-cesar.jpg": "1782839577893-da9383e55c96",
  "salade-de-chevre-chaud.jpg": "1608032077018-c9aad9565d29",
  "salade-de-fruits-frais.jpg": "1774041877283-a3aaad1f2ad2",
  "salade-de-lentilles.jpg": "1623489254660-db5b367881d9",
  "salade-de-poulet-grille.jpg": "1765894711192-d35787eee3b6",
  "salade-de-pates.jpg": "1473093295043-cdd812d0e601",
  "salade-de-riz.jpg": "1626266799523-941311ea2273",
  "salade-grecque.jpg": "1769481614068-47cfb4d1f125",
  "salade-nicoise.jpg": "1604909052743-94e838986d24",
  "sardines-grillees.jpg": "1600699899970-b1c9fadd8f9e",
  "saucisses-lentilles.jpg": "1664339031004-9cfdf88b8017",
  "saumon-en-croute-d-herbes.jpg": "1710969467105-7d170e5397c0",
  "saumon-teriyaki.jpg": "1684815595429-cf46bff6294f",
  "saumon-riz-et-brocoli.jpg": "1675209705883-7aec595f5aa8",
  "shakshuka.jpg": "1590412200988-a436970781fa",
  "soupe-de-lentilles-corail.jpg": "1781332152758-8cb1d61f2192",
  "soupe-de-legumes.jpg": "1603105037880-880cd4edfb0d",
  "soupe-de-potimarron-au-lait-de-coco.jpg": "1613844237701-8f3664fc2eff",
  "soupe-a-l-oignon-gratinee.jpg": "1549203438-a7696aed4dac",
  "spaghetti-carbonara.jpg": "1608756687911-aa1599ab3bd9",
  "steak-au-poivre.jpg": "1588168333986-5078d3ae3976",
  "steak-de-thon-et-legumes.jpg": "1622716029515-7eb5ced2090b",
  "steak-hache-et-frites-au-four.jpg": "1600891964092-4316c288032e",
  "taboule.jpg": "1702650657375-934239d8b472",
  "taboule-de-quinoa.jpg": "1656853834420-51980b12a920",
  "tagliatelles-au-saumon.jpg": "1570549986390-6bd150ac3515",
  "tajine-de-poulet-aux-citrons-confits.jpg": "1682370207954-c8a9cccaabb4",
  "tarte-au-citron-meringuee.jpg": "1519915028121-7d3463d20b13",
  "tarte-aux-pommes.jpg": "1624299831638-82c15fcafd2b",
  "tarte-flambee.jpg": "1637341284945-628baa4fb7cb",
  "tarte-a-la-tomate-et-moutarde.jpg": "1771154136171-97481a26728b",
  "tartiflette.jpg": "1522784081430-8ac6a122cbc8",
  "tiramisu.jpg": "1766232333746-b0a2697d6d0d",
  "tomates-farcies.jpg": "1618825827072-74b096164e44",
  "veloute-de-carottes-au-cumin.jpg": "1620791144170-8a443bf37a33",
  "veloute-de-champignons.jpg": "1619860859762-0569749bc607",
  "veloute-de-poireaux-pommes-de-terre.jpg": "1616501268826-ee9731c915d4",
  "veloute-de-potiron.jpg": "1757489345059-31d51e241a3e",
  "wrap-poulet-crudites.jpg": "1626700051175-6818013e1d4f",
  "oeufs-brouilles-et-toasts.jpg": "1563690449029-d6e1b8d6003d",
  "oeufs-cocotte.jpg": "1593584785033-9c7604d0863f"
};
