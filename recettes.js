/* =====================================================================
   Recettes intégrées à l'appli
   - Quantités et calories POUR UNE PERSONNE (l'appli multiplie toute seule).
   - c : Plat, Léger, Rapide, Végétarien ou Dessert
   - k : kcal par personne (valeur moyenne), t : temps total en minutes
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
    s: ['Mélanger la farine, la levure, le sucre et le sel.', 'Ajouter les œufs, puis le lait petit à petit et le beurre fondu.', 'Laisser reposer 15 minutes.', 'Cuire dans le gaufrier chaud environ 3 minutes par gaufre.'] }
];

// Photos des recettes intégrées (Unsplash, licence gratuite : https://unsplash.com/license)
window.PHOTOS_RECETTES = {
  "Banana bread": "banana-bread.jpg",
  "Blanquette de veau": "blanquette-de-veau.jpg",
  "Boulettes de bœuf sauce tomate": "boulettes-de-boeuf-sauce-tomate.jpg",
  "Brandade de morue": "brandade-de-morue.jpg",
  "Brownie": "brownie.jpg",
  "Buddha bowl": "buddha-bowl.jpg",
  "Bœuf bourguignon": "boeuf-bourguignon.jpg",
  "Cabillaud en papillote": "cabillaud-en-papillote.jpg",
  "Carbonade flamande": "carbonade-flamande.jpg",
  "Chili con carne": "chili-con-carne.jpg",
  "Chili sin carne": "chili-sin-carne.jpg",
  "Clafoutis aux cerises": "clafoutis-aux-cerises.jpg",
  "Colin pané et purée": "colin-pane-et-puree.jpg",
  "Compote de pommes maison": "compote-de-pommes-maison.jpg",
  "Cookies aux pépites de chocolat": "cookies-aux-pepites-de-chocolat.jpg",
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
  "Endives au jambon": "endives-au-jambon.jpg",
  "Escalope de dinde à la crème": "escalope-de-dinde-a-la-creme.jpg",
  "Fajitas au poulet": "fajitas-au-poulet.jpg",
  "Far breton": "far-breton.jpg",
  "Filet mignon à la moutarde": "filet-mignon-a-la-moutarde.jpg",
  "Fondant au chocolat": "fondant-au-chocolat.jpg",
  "Galettes de légumes": "galettes-de-legumes.jpg",
  "Gaspacho": "gaspacho.jpg",
  "Gaufres": "gaufres.jpg",
  "Gnocchis à la tomate et mozzarella": "gnocchis-a-la-tomate-et-mozzarella.jpg",
  "Gratin dauphinois": "gratin-dauphinois.jpg",
  "Gratin de courgettes": "gratin-de-courgettes.jpg",
  "Gratin de pâtes au jambon": "gratin-de-pates-au-jambon.jpg",
  "Gâteau au yaourt": "gateau-au-yaourt.jpg",
  "Hachis parmentier": "hachis-parmentier.jpg",
  "Hot-dog maison": "hot-dog-maison.jpg",
  "Lasagnes aux légumes": "lasagnes-aux-legumes.jpg",
  "Lasagnes à la bolognaise": "lasagnes-a-la-bolognaise.jpg",
  "Minestrone": "minestrone.jpg",
  "Moules marinières": "moules-marinieres.jpg",
  "Mousse au chocolat": "mousse-au-chocolat.jpg",
  "Nouilles sautées aux légumes": "nouilles-sautees-aux-legumes.jpg",
  "Omelette aux champignons": "omelette-aux-champignons.jpg",
  "Panna cotta aux fruits rouges": "panna-cotta-aux-fruits-rouges.jpg",
  "Paëlla": "paella.jpg",
  "Pizza maison jambon-fromage": "pizza-maison-jambon-fromage.jpg",
  "Poke bowl au saumon": "poke-bowl-au-saumon.jpg",
  "Porc au caramel": "porc-au-caramel.jpg",
  "Pot-au-feu": "pot-au-feu.jpg",
  "Poulet au curry et lait de coco": "poulet-au-curry-et-lait-de-coco.jpg",
  "Poulet basquaise": "poulet-basquaise.jpg",
  "Poulet rôti et légumes": "poulet-roti-et-legumes.jpg",
  "Poulet tikka masala": "poulet-tikka-masala.jpg",
  "Poulet à la moutarde": "poulet-a-la-moutarde.jpg",
  "Purée de patate douce et poulet": "puree-de-patate-douce-et-poulet.jpg",
  "Pâtes au pesto": "pates-au-pesto.jpg",
  "Pâtes bolognaise": "pates-bolognaise.jpg",
  "Quesadillas": "quesadillas.jpg",
  "Quiche aux poireaux": "quiche-aux-poireaux.jpg",
  "Quiche lorraine": "quiche-lorraine.jpg",
  "Raclette": "raclette.jpg",
  "Ratatouille": "ratatouille.jpg",
  "Risotto aux champignons": "risotto-aux-champignons.jpg",
  "Riz au lait": "riz-au-lait.jpg",
  "Riz cantonais": "riz-cantonais.jpg",
  "Rôti de porc aux pommes de terre": "roti-de-porc-aux-pommes-de-terre.jpg",
  "Salade César": "salade-cesar.jpg",
  "Salade de chèvre chaud": "salade-de-chevre-chaud.jpg",
  "Salade de fruits frais": "salade-de-fruits-frais.jpg",
  "Salade de lentilles": "salade-de-lentilles.jpg",
  "Salade de pâtes": "salade-de-pates.jpg",
  "Salade niçoise": "salade-nicoise.jpg",
  "Saucisses lentilles": "saucisses-lentilles.jpg",
  "Saumon en croûte d’herbes": "saumon-en-croute-d-herbes.jpg",
  "Saumon, riz et brocoli": "saumon-riz-et-brocoli.jpg",
  "Shakshuka": "shakshuka.jpg",
  "Soupe de légumes": "soupe-de-legumes.jpg",
  "Soupe de potimarron au lait de coco": "soupe-de-potimarron-au-lait-de-coco.jpg",
  "Soupe à l’oignon gratinée": "soupe-a-l-oignon-gratinee.jpg",
  "Spaghetti carbonara": "spaghetti-carbonara.jpg",
  "Steak haché et frites au four": "steak-hache-et-frites-au-four.jpg",
  "Taboulé": "taboule.jpg",
  "Taboulé de quinoa": "taboule-de-quinoa.jpg",
  "Tagliatelles au saumon": "tagliatelles-au-saumon.jpg",
  "Tajine de poulet aux citrons confits": "tajine-de-poulet-aux-citrons-confits.jpg",
  "Tarte aux pommes": "tarte-aux-pommes.jpg",
  "Tarte à la tomate et moutarde": "tarte-a-la-tomate-et-moutarde.jpg",
  "Tartiflette": "tartiflette.jpg",
  "Tiramisu": "tiramisu.jpg",
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
  "brandade-de-morue.jpg": "1726455431752-fed6c661a31e",
  "brownie.jpg": "1636743715220-d8f8dd900b87",
  "buddha-bowl.jpg": "1589442305595-62647c1514f9",
  "boeuf-bourguignon.jpg": "1608500218987-0f2b3be34b47",
  "cabillaud-en-papillote.jpg": "1580909408746-e5b993dae484",
  "carbonade-flamande.jpg": "1519699788450-ad34386a3bfc",
  "chili-con-carne.jpg": "1658308766948-01c85ade2737",
  "chili-sin-carne.jpg": "1638329389022-daef2efb71b3",
  "clafoutis-aux-cerises.jpg": "1624747532304-b802639ee7b6",
  "colin-pane-et-puree.jpg": "1633436375153-d7045cb93e38",
  "compote-de-pommes-maison.jpg": "1600984177310-c86c8f8fa9c7",
  "cookies-aux-pepites-de-chocolat.jpg": "1558961363-fa8fdf82db35",
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
  "endives-au-jambon.jpg": "1710024893536-1b47d97cad43",
  "escalope-de-dinde-a-la-creme.jpg": "1788462612914-44793f2980f2",
  "fajitas-au-poulet.jpg": "1689773976415-293dd893f77e",
  "far-breton.jpg": "1702728109878-c61a98d80491",
  "filet-mignon-a-la-moutarde.jpg": "1580554530778-ca36943938b2",
  "fondant-au-chocolat.jpg": "1617305855058-336d24456869",
  "galettes-de-legumes.jpg": "1767114915965-7abe87d7c7d8",
  "gaspacho.jpg": "1624382075163-a4fdb99b99ec",
  "gaufres.jpg": "1562376552-0d160a2f238d",
  "gnocchis-a-la-tomate-et-mozzarella.jpg": "1778837224450-aae9742193ad",
  "gratin-dauphinois.jpg": "1645453014403-4ad5170a386c",
  "gratin-de-courgettes.jpg": "1693940747465-423ec720f3e6",
  "gratin-de-pates-au-jambon.jpg": "1620041631703-45ddcef3dae0",
  "gateau-au-yaourt.jpg": "1605466237764-3d8d802c8a8d",
  "hachis-parmentier.jpg": "1696935257293-9ec4f03074a1",
  "hot-dog-maison.jpg": "1776260486226-11dabfacf5f2",
  "lasagnes-aux-legumes.jpg": "1586197138382-e1d1479fbb14",
  "lasagnes-a-la-bolognaise.jpg": "1709429790175-b02bb1b19207",
  "minestrone.jpg": "1611068120813-eca5a8cbf793",
  "moules-marinieres.jpg": "1757972367630-fbfcec63bb41",
  "mousse-au-chocolat.jpg": "1590080875852-ba44f83ff2db",
  "nouilles-sautees-aux-legumes.jpg": "1585032226651-759b368d7246",
  "omelette-aux-champignons.jpg": "1766146431872-a4472ccd3889",
  "panna-cotta-aux-fruits-rouges.jpg": "1787550275377-9f54a07c68c8",
  "paella.jpg": "1763647738062-d83e44328a6f",
  "pizza-maison-jambon-fromage.jpg": "1692737580563-7ba2d896f0f6",
  "poke-bowl-au-saumon.jpg": "1633862472152-e3873eb1b3ff",
  "porc-au-caramel.jpg": "1625477811233-044633d10dd1",
  "pot-au-feu.jpg": "1664741662725-bd131742b7b7",
  "poulet-au-curry-et-lait-de-coco.jpg": "1708782344490-9026aaa5eec7",
  "poulet-basquaise.jpg": "1708782344071-35ed44b849a9",
  "poulet-roti-et-legumes.jpg": "1768238907887-023b7ac9f450",
  "poulet-tikka-masala.jpg": "1565557623262-b51c2513a641",
  "poulet-a-la-moutarde.jpg": "1694579740719-0e601c5d2437",
  "puree-de-patate-douce-et-poulet.jpg": "1703219342277-1a78d6b4a27f",
  "pates-au-pesto.jpg": "1766706519060-d44bd9dc50f7",
  "pates-bolognaise.jpg": "1622973536968-3ead9e780960",
  "quesadillas.jpg": "1628838233717-be047a0b54fb",
  "quiche-aux-poireaux.jpg": "1767065584465-797ee48ce8b3",
  "quiche-lorraine.jpg": "1788245155991-78fcd1944899",
  "raclette.jpg": "1642522685167-cf414ea225be",
  "ratatouille.jpg": "1652622550740-f90d03edfbf0",
  "risotto-aux-champignons.jpg": "1633964913295-ceb43826e7c9",
  "riz-au-lait.jpg": "1606728099646-68d5a0a4d423",
  "riz-cantonais.jpg": "1603133872878-684f208fb84b",
  "roti-de-porc-aux-pommes-de-terre.jpg": "1635897411141-7bd2b9c6ab16",
  "salade-cesar.jpg": "1782839577893-da9383e55c96",
  "salade-de-chevre-chaud.jpg": "1608032077018-c9aad9565d29",
  "salade-de-fruits-frais.jpg": "1774041877283-a3aaad1f2ad2",
  "salade-de-lentilles.jpg": "1623489254660-db5b367881d9",
  "salade-de-pates.jpg": "1473093295043-cdd812d0e601",
  "salade-nicoise.jpg": "1604909052743-94e838986d24",
  "saucisses-lentilles.jpg": "1664339031004-9cfdf88b8017",
  "saumon-en-croute-d-herbes.jpg": "1710969467105-7d170e5397c0",
  "saumon-riz-et-brocoli.jpg": "1675209705883-7aec595f5aa8",
  "shakshuka.jpg": "1590412200988-a436970781fa",
  "soupe-de-legumes.jpg": "1603105037880-880cd4edfb0d",
  "soupe-de-potimarron-au-lait-de-coco.jpg": "1613844237701-8f3664fc2eff",
  "soupe-a-l-oignon-gratinee.jpg": "1549203438-a7696aed4dac",
  "spaghetti-carbonara.jpg": "1608756687911-aa1599ab3bd9",
  "steak-hache-et-frites-au-four.jpg": "1600891964092-4316c288032e",
  "taboule.jpg": "1702650657375-934239d8b472",
  "taboule-de-quinoa.jpg": "1656853834420-51980b12a920",
  "tagliatelles-au-saumon.jpg": "1570549986390-6bd150ac3515",
  "tajine-de-poulet-aux-citrons-confits.jpg": "1682370207954-c8a9cccaabb4",
  "tarte-aux-pommes.jpg": "1624299831638-82c15fcafd2b",
  "tarte-a-la-tomate-et-moutarde.jpg": "1771154136171-97481a26728b",
  "tartiflette.jpg": "1522784081430-8ac6a122cbc8",
  "tiramisu.jpg": "1766232333746-b0a2697d6d0d",
  "veloute-de-champignons.jpg": "1619860859762-0569749bc607",
  "veloute-de-poireaux-pommes-de-terre.jpg": "1616501268826-ee9731c915d4",
  "veloute-de-potiron.jpg": "1757489345059-31d51e241a3e",
  "wrap-poulet-crudites.jpg": "1626700051175-6818013e1d4f",
  "oeufs-brouilles-et-toasts.jpg": "1563690449029-d6e1b8d6003d",
  "oeufs-cocotte.jpg": "1593584785033-9c7604d0863f"
};
