<?php
     session_start();
     include 'database/baglan.php';

     
     //$error = false;
     
     if(isset($_POST['kaydet_cihaz'])) { 
      
      $ad = trim($_POST['ad']);
      $soyad = trim($_POST['soyad']);
      $adres = trim($_POST['adres']);
      $tel = trim($_POST['tel']);
      $email = trim($_POST['email']);
      
      $serino = trim($_POST['serino']);
      $marka = trim($_POST['marka']);
      $model = trim($_POST['model']);
      $cihazId = trim($_POST['cihazId']);
      
      
      
      
       $res=mysqli_query($baglan,"INSERT INTO cihazlar(ad,soyad,adres,tel,email,serino,marka,model,cihazId)
        VALUES('$ad','$soyad','$adres','$tel','$email','$serino','$marka','$model','$cihazId')");
       if($res){
        $sorgula=mysqli_query($baglan,"SELECT * FROM cihazlar WHERE serino='$serino'");
        while($id = $sorgula->fetch_assoc()) {
             $idsi=$id['id'];
        }
        $idsi=$_SESSION['id'];
        $kurumsal=$_SESSION['kullanici'];
       // https://&UyeId=150&CihazId=350
       $URL="https://basitservis.com/api/?kaynak=CihazSorgula&username=vtmteknik&uid=C0711FAD-384A-0605-2F6B-9A4838EF88FE&search=$serino&Kurumsal=$kurumsal";
        //$URL = "https://basitservis.com/api/?kaynak=CihazGuncelle&username=demo&uid=4DD0CEDE-5BE3-6B9C-1C53-C87AA3224393&kriter=Guncelle&UyeId=$idsi&CihazId=$cihazId";
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
          
       // echo $response;
      }else{
        echo "hatalı link";
        //echo  $URL;
      }
        $kayit="evet";
        header('Location: Anasayfa?kayit='.$kayit);
        $_SESSION['cihaz_kayit']="Kaydedildi"; 
      //  echo  $URL;

       }else{
      //  echo "Kayıt yapılmamıştır";
        $kayit="hayır";
        header('Location: index.php?kayit='.$kayit);
        $_SESSION['cihaz_kayit']="Kaydedildi";
       // echo  $URL;

       } 
      
     }
     else if(isset($_POST['cihaz_sil'])){
       
      
        $ad = trim($_POST['ad']);
        $soyad = trim($_POST['soyad']);
        $adres = trim($_POST['adres']);
        $tel = trim($_POST['tel']);
        $email = trim($_POST['email']);
        
        $serino = trim($_POST['serino']);
        $marka = trim($_POST['marka']);
        $model = trim($_POST['model']);
        $cihazId = trim($_POST['cihazId']);
        
        
        
        
         $res=mysqli_query($baglan,"UPDATE cihazlar SET sil=1 WHERE serino='$serino'");
         if($res){
          $sorgula=mysqli_query($baglan,"SELECT * FROM cihazlar WHERE serino='$serino'");
          while($id = $sorgula->fetch_assoc()) {
               $idsi=$id['id'];
          }
          $idsi=$_SESSION['id'];
         // https://&UyeId=150&CihazId=350
         $URL="https://basitservis.com/api/?kaynak=CihazSorgula&username=vtmteknik&uid=C0711FAD-384A-0605-2F6B-9A4838EF88FE&search=$serino&Kurumsal=$kurumsal";
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
          echo  $URL;
        }
          $kayit="evet";
          header('Location: Anasayfa?kayit='.$kayit);
          $_SESSION['cihaz_kayit']="Kaydedildi"; 
          echo  $URL;
  
         }else{
          echo "Kayıt yapılmamıştır";
          $kayit="hayır";
          header('Location: Anasayfa?kayit='.$kayit);
          $_SESSION['cihaz_kayit']="Kaydedildi";
          echo  $URL ." silme başarılı";
  
         } 

     }
    ?>