# gagner des identifiants en suivant les dossiers references par le robots.txt

## exploit

En allant sur la page `VM_URL/robots.txt` (une page de referencement sur les webservers), nous allons essayer d'exploiter la page .hidden. \
En allant donc sur la page `VM_URL/.hidden`, nous tombons sur un dossier avec un README et une liste de lien. Chacun de ses liens redirige vers un sous dossier du dossier precedent, tous comportant un README (avec des informations inutiles). \
 \
Pour nous simplifier la vie, nous allons utiliser le script js `index.js` qui utilise http pour imprimer le contenu de tous les README de l'arborescence du dossier .hidden. \
Le flag apparait au bout d'une grosse minute !

## protection

Ne pas stocker des fichiers importants sur un serveur web en public
