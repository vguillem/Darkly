# avoir les acces d'admin en bruteforcant l'url

## exploit

Sur la page `/index.php?page=signin&username=admin&password=password&Login=Login#`, on peut bruteforce le mot de passe afin de se connecter avec le compte admin. \
 \
Executer le script `brute.sh` pour executer le bruteforce. \
Une fois le mot de passe recupere, on peut se connecter !

## protection

Bloquer les requetes a partir d'un certain nombre d'echec
