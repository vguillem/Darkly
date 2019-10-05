# execution de xss a partir d'une url encodee en base64

## exploit

En allant sur la page VM_URL/index.php, on peut voir une image en bas de la page avec le logo de la nsa. \
 \
En cliquant sur cette image, on tombe sur une page VM_URL/index.php?page=media&src=nsa, ou l'on peut voir, en inspectant l'image, que c'est enfait un <object>, element html permettant d'afficher de la donnee sous plusieurs formats (comme flash, image...) \
 \
Le nom du fichier etant nsa_prism, on devine que l'url avec la src=nsa est une variable qui est processee par le php permettant le rendu de cette image dans l'element object. \
 \
Nous savons aussi que l'on peut passer de la donnee encodee dans l'url, qui sera ensuite renvoyee par le php dans la page et que le browser va executer. \
 \
En encodant un petit '<script>alert(1)</script>' en base64, on peut donc ainsi executer du javascript dans la page grace a l'encodage 'data:text/html;base64,EXPLOIT', car notre browser va decoder la base64 et l'interpreter comme du text html !

## protection

Ne pas passer par des parametres en url pour afficher de la donnee sur une page html
