# exploiter l'expression 'with' en javascript

## exploitation

Sur la page `VM_URL/index.php?page=feedback`, le formulaire execute la fonction `validate_form` du script js suivant avec `this`:
```javascript


function validate_required(field,alerttxt)
{
with (field) {
  if (value==null||value=="") {
    alert(alerttxt);return false;
  }
  else {
    return true;
  }
 }
}

function validate_form(thisform) {
with (thisform) {

  if (validate_required(txtName,"Name can not be empty.")==false)
  {txtName.focus();return false;}

  if (validate_required(mtxMessage,"Message can not be empty.")==false)
  {mtxMessage.focus();return false;}

  }
}
```

Grace aux [explications](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/with) de mdn sur le statement `with`, nous savons que nous pouvons l'exploiter afin d'override les proprietes de l'objet this passe en parametre. 

Ici nous pouvons donc juste passer une valeur dans le champ 'name' et nous obtenons le flag.

## protection

Ne pas utiliser with pour acceder aux valeurs d'objets en javascript.

