<?php
     
     include 'database/baglan.php';

     
     
    
     session_start();
     $_SESSION['user']="";
     $_SESSION['id']="";
     session_destroy();
      // Bu Fonksiyon ile tüm Session siliyoruz.
      $cikis="Evet";
     header('Location: Anasayfa?cikis='.$cikis);
     
    ?>