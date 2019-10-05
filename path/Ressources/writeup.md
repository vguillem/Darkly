# explorer l'arborescence du site

## Exploit
Sur la page `index.php?page=`, on peut remonter l'arborescence avec .. \
en utilisant : /index.php?page=../../../../../../../etc/passwd \
on arrive sur une alert nous fournissant le flag

## Protection :
on peut ajouter un htaccess avec deny from all \
ou une regex pour netoyer l'url \
ou encore mettre un fichier index.html qui s'affichera bloquand l'access a l'arborescence
