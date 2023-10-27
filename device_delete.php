<?php
     session_start();
     include 'database/baglan.php';

     
     //$error = false;
     
     if(isset($_POST['cihaz_sil'])) { 
      
      $serino = trim($_POST['CihazSeriNo']);
      $cihazId = trim($_POST['cihazId']);;
      
      
        $sorgula=mysqli_query($baglan,"SELECT * FROM cihazlar WHERE serino='$serino'");
        $sorgula2=mysqli_query($baglan,"UPDATE  cihazlar SET sil=10 WHERE serino='$serino'");
        while($id = $sorgula->fetch_assoc()) {
             $idsi=$id['id'];
        }
        $idsi=$_SESSION['id'];
        $kurumsal=$_SESSION['kullanici'];
       // https://&UyeId=150&CihazId=350
      // $URL="https://basitservis.com/api/?kaynak=CihazSorgula&username=vtmteknik&uid=C0711FAD-384A-0605-2F6B-9A4838EF88FE&search=$serino&Kurumsal=$kurumsal";
        $URL = "https://basitservis.com/api/?kaynak=CihazGuncelle&username=vtmteknik&uid=C0711FAD-384A-0605-2F6B-9A4838EF88FE&kriter=Sil&UyeId=$idsi&CihazId=$cihazId";
        if(function_exists('curl_version')){
          $ch = curl_init();
          curl_setopt($ch, CURLOPT_URL,$URL);
          curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
          $response = curl_exec($ch);
          curl_close($ch);
          }else{
          $response = file_get_contents($URL);
          }
          if (!empty($response)) { 
          
        echo $response;
      }else{
        echo "hatalı link";
        //echo  $URL;
      }
        $kayit="evet";
        header('Location: Cihazlarim?kayit='.$kayit);
        $_SESSION['cihaz_kayit']="Kaydedildi"; 
        echo  $URL;

       }else{
         echo "Kayıt yapılmamıştır";
        $kayit="hayır";
        //header('Location: Cihazlarim?kayit='.$kayit);
        $_SESSION['cihaz_kayit']="Kaydedildi";
       // echo  $URL;

       } 
      
      
    ?>