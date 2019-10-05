# uploader un fichier contenant du code executable

## Exploit
Sur la page `?page=upload`, on peut uploader un fichier de type image/jpeg \
 Nous allons chercher a uploader un fichier de type different pour l'executer ensuite \
  \
Executer le script `uploadExploit.sh` pour uploader le fichier. \
Si le fichier est corectement uploader, le flag est affiche. \
 
## Protection :
Renomerle fichier uploader cote serveur. avec par exemple un uuid en nom et l'extention de fichier souhaite. \
