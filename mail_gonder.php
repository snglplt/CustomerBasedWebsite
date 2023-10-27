<?php

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

$mail->AddAddress("snglplt.36@gmail.com"); // Gönderilecek kişi
$mail->AddAddress("elcierkan@hotmail.com"); // Gönderilecek kişi

$mail->SMTPOptions = array(
    'ssl' => array(
        'verify_peer' => true,
        'verify_peer_name' => true,
        'allow_self_signed' => false,
        'cafile' => '[path-to-cert].crt'
    )
);

$mail->Subject = "vtmteknik.com.tr üzerinden gelen yeni üyelik.";
$mail->Body = "<table width=\"100%\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">                 
<tr>
  <td align=\"left\" valign=\"middle\">&nbsp;</td>
  <td height=\"40\" colspan=\"3\" align=\"left\"><h5>vtmteknik.com.tr Yeni Üyelik Bildirimi</h5></td>
  </tr>
  <tr>
  <td align=\"left\" valign=\"middle\">&nbsp;</td>
  <td height=\"40\" colspan=\"3\" align=\"left\"><h5>$name  $surname kullanıcısı oluşturuldu</h5></td>
  </tr>

</table>";
//$mail->Send();

if(!$mail->Send()){
                echo "Mailer Error: ".$mail->ErrorInfo;
} else {
                echo "Message has been sent";
}
?>