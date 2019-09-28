#

## exploit

Sur la page `VM_URL/index.php`, en inspectant, on peut voir un cookie avec le nom i_am_admin. La valeur de ce cookie semble etre une valeure encodee. \
 \
En decodant cette valeur en md5, nous obtenons le mot 'false'. \
Encodant donc la valeur 'true' en md5, et nous obtenons la valeur 'b326b5062b2f0e69046810717534cb09' que nous mettons a la place de l'ancienne valeur du cookie et nous obtenons l'acces administrateur.

## protection

Utiliser un resultat envoye par le serveur afin de gerer l'authentification (comme les headers ou une requete) et utiliser un encryptage plus complexe
