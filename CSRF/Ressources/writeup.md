# 'executer' un CSRF (cross site request forgery)

## exploit
Sur la page `VM_URL/index.php?page=e43ad1fdc54babe674da7c7b8f0127bde61de3fbe01def7d00f151c2fcca6d1c` (qu'on peut acceder en cliquant sur le lien du footer), il est ecrit en commentaire 'you must cumming from 'https://www.nsa.gov/' to go to the next step. \
 \
Il est aussi indique 'let's use this browser: 'ft_bornToSec'. It will help you a lot. \
En apprenant que l'on peut modifier les headers http, nous allons utiliser le `Referer` `https://www.nsa.gov` (qui correspond a la provenance) et l'`User-Agent` `ft_bornToSec` (qui correspond au systeme utilise pour acceder a la page). \
 \
Cette exploit, appele CSRF (cross site request forgery) permet de se faire passer pour une autre entite lors d'une requete. \
Nous obtenons le flag en realisant la modification de headers necessaire grace a l'extension chrome [modHeader](https://chrome.google.com/webstore/detail/modheader/idgpnmonknjnojddfkpgkljpfnnfcklj?hl=en).

## protection

Utiliser un token d'identification.

