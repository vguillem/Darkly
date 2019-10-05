# rediriger vers une page du site non existante

## exploit

Sur la page principale, on peut voir sur les liens en bas de la page que ce ne sont pas des liens vers un site mais une redirection la forme `url?page=redirect&site=...`. \
On peut donc rentrer directement dans l'url `VM_URL/index.php?page=redirect&site=en_mettant_ce_quon_veut_ici`. \
On peut par exemple abuser un utilisateur en lui faisant croire qu'il clique sur un site legitime alors qu'en realite, il est redirige vers un site phishing.

## protection

mettre une href qui est directement l'url de la page souhaitee
