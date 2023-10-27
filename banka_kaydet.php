<?php
     ob_start();
     session_start();
     include_once 'database/baglan.php';

     if ( isset($_SESSION['user'])!="" ) {
     // header("Location: index.php");
      //exit;
     }
     
     
     if( isset($_POST['gonder']) ) { 
      
      $adsoyad = trim($_POST['adsoyad']);
      $formno = trim($_POST['formno']);
      $imeino = trim($_POST['imeino']);
      $telefon = trim($_POST['telefon']);
      $banka = trim($_POST['banka']);                         
      $odenentutar = trim($_POST['odenentutar']);                         
      
      
     
       
      
       $res=mysqli_query($baglan,"INSERT INTO banka_kayit(adsoyad,formno,imeino,telefon,banka,odenentutar)
        VALUES('$adsoyad','$formno','$imeino','$telefon','$banka','$odenentutar')");
       
       if( $res ) {
        $kayit="basarili";
        echo "<script>
          Swal.fire({
            icon: 'success',
            title: 'Başarılı!',
            text: 'Mesajınız Kaydedildi',
            confirmButtonText:'Tamam',
          });
          </script>";
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
          $mail->AddAddress("elcierkan@gmail.com"); // Gönderilecek kişi
          
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
            <td height=\"40\" colspan=\"3\" align=\"left\"><h5><a href='vtmteknik.com.tr'>vtmteknik.com.tr</a> Banka Hesabı Hakkında</h5></td>
            </tr>
            <tr>
            <td align=\"left\" valign=\"middle\">&nbsp;</td>
            <td height=\"40\" colspan=\"3\" align=\"left\"><h5>$adsoyad kullanıcısı $banka 'dan size ödeme yapmıştır.</h5></td>
            </tr>
            <tr>
            <td align=\"left\" valign=\"middle\">&nbsp;</td>
            <td height=\"40\" colspan=\"3\" align=\"left\"><h5>Form No: $formno</h5></td>
            </tr>
            <tr>
            <td align=\"left\" valign=\"middle\">&nbsp;</td>
            <td height=\"40\" colspan=\"3\" align=\"left\"><h5>Seri No: $imeino</h5></td>
            </tr>
            <tr>
            <td align=\"left\" valign=\"middle\">&nbsp;</td>
            <td height=\"40\" colspan=\"3\" align=\"left\"><h5>Telefon: $telefon</h5></td>
            </tr>
            <tr>
            <td align=\"left\" valign=\"middle\">&nbsp;</td>
            <td height=\"40\" colspan=\"3\" align=\"left\"><h5>Ödenecek Tutar: $odenentutar</h5></td>
            </tr>      
             
          </table>";
  //$mail->Send();
  if(!$mail->Send()){
                 // echo "Mailer Error: ".$mail->ErrorInfo;
  } else {
                 // echo "Message has been sent";
  }
          header("Location: BankaHesaplari?kayit=".$kayit);
         
       } else {
          $kayit="basarisiz";
          echo "<script>
          Swal.fire({
            icon: 'warning',
            title: 'Uyarı!',
            text: 'Mesajınız Kaydedilmedi',
            confirmButtonText:'Tamam',
          });
          </script>";
          }
        header("Location: BankaHesaplari?kayit=".$kayit);
       }
        
      
      
     
    ?>