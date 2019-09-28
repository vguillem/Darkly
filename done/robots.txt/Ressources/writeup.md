# exploiter informations du fichier robot.txt

## Exploit
Sur la page `/robots.tx`, on peut voir un fichier contenant des informations destinees aux robots pour exclure certaines pages lors de l'indexation. \
La ligne : "Disallow: /whatever" nous indique une page non accessible par lien sur le site principale. \
  \
l'exploration de cette page nous donne acces a un dossier contenant un fichier. \
ce fichier contient : root:8621ffdbc5698829397d97767ac13db3 \
c'est le md5 de dragon \
finalement, sur la page /admin nous pouvons nous connecter avec le login root et le mot de passe dragon \
\
## Protection :
le fichier robots.txt doit etre utilise pour cacher des pages qui n'on pas a etre indexees. Pas pour cacher des page au utilisateur. \
