<?php
     ob_start();
     session_start();
     include_once 'database/baglan.php';

     
     if( isset($_POST['kaydet_cihaz']) ) { 
      
      $ad = trim($_POST['ad']);
      $soyad = trim($_POST['soyad']);
      $tc = trim($_POST['tc']);
      $mail = trim($_POST['mail']);
      $tel = trim($_POST['tel']);
      $sabittel = trim($_POST['sabittel']);
      $unvan = trim($_POST['unvan']);
      $vergidairesi = trim($_POST['vergidairesi']);
      $il = trim($_POST['il']);
      $ilce = trim($_POST['ilce']);
      $mahalle = trim($_POST['mahalle']);
      $cadde = trim($_POST['cadde']);
      $binano = trim($_POST['binano']);
      $daireno = trim($_POST['daireno']);
      $postakodu = trim($_POST['postakodu']);
      $adres = trim($_POST['adres']);
      $marka = trim($_POST['marka']);
      $model = trim($_POST['model']);
      $serino = trim($_POST['serino']);
      $firma = trim($_POST['firma']);
      $faturatarih = trim($_POST['faturatarih']);
      $faturano = trim($_POST['faturano']);
      $policeno = trim($_POST['policeno']);
      $satinalmatarihi = trim($_POST['satintarih']);
      $sikayet = trim($_POST['sikayet']);
      $kullanici = trim(@$_POST['kullanici']);
      $ad=@$kullanici.$ad;
     
    
       
      
       $res=mysqli_query($baglan,"INSERT INTO teknik_servis_formu(ad,soyad,tc,mail,tel,sabittel,unvan,vergidairesi,il,ilce,mahalle,cadde,binano,daireno,postakodu,adres,marka,model,serino,firma,faturatarih,faturano,policeno,satinalmatarihi,sikayet)
        VALUES('$ad','$soyad','$tc','$mail','$tel','$sabittel','$unvan','$vergidairesi','$il','$ilce','$mahalle','$cadde','$binano','$daireno','$postakodu','$adres','$marka','$model','$serino','$firma','$faturatarih','$faturano','$policeno','$satinalmatarihi','$sikayet')");
       
       if( $res ) {
          $kayit_sonuc="Evet";
          require("class.phpmailer.php");
          $mail = new PHPMailer(); // create a new object
          $mail->IsSMTP(); // enable SMTP
          $mail->SMTPDebug = 1; // debugging: 1 = errors and messages, 2 = messages only
          $mail->SMTPAuth = true; // authentication enabled
          
          
          $mail->SMTPSecure = 'ssl';
          $mail->Host = 'mail.vtmteknik.com.tr';
          $mail->Port = 465;
          
          $mail->IsHTML(true);
          $mail->SetLanguage("tr", "phpmailer/language");
          $mail->CharSet  ="utf-8";
          
          $mail->Username = "info@vtmteknik.com.tr"; // Mail adresi
          $mail->Password = "Vtmteknik6543@"; // Parola
          $mail->SetFrom("info@vtmteknik.com.tr", " Yeni Üyelik Formu"); // Mail adresi
          
          $mail->AddAddress("info@vtmteknik.com.tr"); // Gönderilecek kişi
          $mail->AddAddress("snglplt.36@gmail.com"); // Gönderilecek kişi
         // $mail->AddAddress("elcierkan@gmail.com"); // Gönderilecek kişi
          
          $mail->SMTPOptions = array(
              'ssl' => array(
                  'verify_peer' => true,
                  'verify_peer_name' => true,
                  'allow_self_signed' => false,
                  'cafile' => '[path-to-cert].crt'
              )
          );
          
          //$mail->Subject="vtmteknik.com.tr üzerinden gelen yeni üyelik.";
          //$mail->SetFrom("vtmteknik.com.tr", "www.basitservis.com Yeni Üyelik Formu"); 
          $mail->Body="<table width=\"100%\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">                 
          <tr>
            <td align=\"left\" valign=\"middle\">&nbsp;</td>
            <td height=\"40\" colspan=\"3\" align=\"left\"><h5><a href='vtmteknik.com.tr'>vtmteknik.com.tr</a> Arıza Kaydı Bildirimi</h5></td>
            </tr>
            <tr>
            <td align=\"left\" valign=\"middle\">&nbsp;</td>
            <td height=\"40\" colspan=\"3\" align=\"left\"><h5>$tc  ye sahip $ad  $soyad kullanıcısı size arıxza kaydı bırakmıştır</h5></td>
            </tr>
            <tr>
            <td align=\"left\" valign=\"middle\">&nbsp;</td>
            <td height=\"40\" colspan=\"3\" align=\"left\"><h5>Tel: $tel</h5></td>
            </tr>
            <tr>
            <td align=\"left\" valign=\"middle\">&nbsp;</td>
            <td height=\"40\" colspan=\"3\" align=\"left\"><h5>Unvan: $unvan</h5></td>
            </tr>
            <tr>
            <td align=\"left\" valign=\"middle\">&nbsp;</td>
            <td height=\"40\" colspan=\"3\" align=\"left\"><h5>Adres: $adres</h5></td>
            </tr>
            <tr>
            <td align=\"left\" valign=\"middle\">&nbsp;</td>
            <td height=\"40\" colspan=\"3\" align=\"left\"><h5>Şikayet: $sikayet</h5></td>
            </tr>
            
            
            
             
          </table>";
  //$mail->Send();
  if(!$mail->Send()){
                 // echo "Mailer Error: ".$mail->ErrorInfo;
  } else {
    header("Location: form.php?kayit_sonuc=".$kayit_sonuc);
    }
        
       } else {
        echo  "Incorrect Credentials, Please try again...";
        $kayit_sonuc="Hayır";
        header("Location: form.php?kayit_sonuc=".$kayit_sonuc);
       }
        
      }
      
     
    ?>