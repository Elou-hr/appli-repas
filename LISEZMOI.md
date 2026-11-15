# Appli repas — « Qu’est-ce qu’on mange ? »

Une appli web installable sur téléphone (Android, iPhone), tablette et ordinateur.
Elle marche sans internet une fois installée, et toutes les données restent sur le téléphone.

## Les fichiers

| Fichier | À quoi il sert |
|---|---|
| `index.html` | La page de l’appli (à ouvrir) |
| `style.css` | Les couleurs et la mise en page |
| `app.js` | Tout le fonctionnement (recherche, planning, courses…) |
| `recettes.js` | **La liste des recettes** : c’est ici qu’on en ajoute |
| `manifest.webmanifest` | Nom et icône quand on installe l’appli |
| `sw.js` | Permet à l’appli de marcher sans internet |
| `icones/` | Les icônes de l’appli |

## Mettre l’appli en ligne gratuitement (GitHub Pages)

1. Va sur **github.com**, connecte-toi, puis clique sur **New** (nouveau dépôt).
2. Nom du dépôt : `appli-repas`. Coche **Public**. Clique sur **Create repository**.
3. Clique sur **uploading an existing file**, puis glisse **tous les fichiers et le dossier `icones`** de ce dossier.
4. Clique sur **Commit changes**.
5. Va dans **Settings → Pages**. Dans **Branch**, choisis `main` puis `/ (root)` et clique sur **Save**.
6. Attends 1 à 2 minutes : l’adresse de l’appli s’affiche en haut, du type
   `https://ton-pseudo.github.io/appli-repas/`.

## L’installer sur le téléphone de ta mère (Android)

1. Ouvre l’adresse dans **Chrome**.
2. Touche les **⋮** en haut à droite, puis **Ajouter à l’écran d’accueil** (ou **Installer l’application**).
3. L’icône « Repas » apparaît : elle s’ouvre comme une vraie appli, même sans internet.

Sur iPhone : ouvrir dans **Safari**, bouton **Partager**, puis **Sur l’écran d’accueil**.

## Mettre à jour l’appli plus tard

1. Remplace les fichiers modifiés sur GitHub (glisser-déposer à nouveau).
2. Dans `sw.js`, change la ligne `var VERSION = 'repas-v1';` en `repas-v2` (puis v3…).
   Sinon le téléphone peut garder l’ancienne version un moment.
3. Les favoris, notes, recettes perso et photos de ta mère ne sont **pas** effacés par une mise à jour.

## Sauvegarde

Dans l’onglet **Favoris**, le bouton **Sauvegarder** crée un fichier avec toutes ses données (recettes perso,
photos, notes, planning, placard). À garder par mail ou sur Drive. **Restaurer** permet de le recharger,
par exemple sur un nouveau téléphone.
