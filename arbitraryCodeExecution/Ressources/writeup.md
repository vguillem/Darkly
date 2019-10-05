# modification de valeurs dans un formulaire

## exploit

Sur la page `VM_URL/?page=survey`, on peut modifier la valeur d'une option, la selectionner et le backend ne va pas faire de verification, entrainant ainsi une execution potentielle de code sur le serveur. 

## protection

Verifier cote backend que le parametre envoye par la requete match bien un de nos parametres attendus.


