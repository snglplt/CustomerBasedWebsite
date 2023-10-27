<?php

require("class.phpmailer.php");
    
$mail = new PHPMailer(); // create a new object
$mail->IsSMTP(); // enable SMTP
$mail->SMTPDebug = 1; // debugging: 1 = errors and messages, 2 = messages only
$mail->SMTPAuth = true; // authentication enabled

//$mail->SMTPSecure = 'tsl';
$mail->Host = 'mail.dakyedekparca.com';
$mail->Port = 465;

$mail->IsHTML(true);
$mail->SetLanguage("tr", "phpmailer/language");
$mail->CharSet  ="utf-8";

$mail->Username = "info@dakyedekparca.com"; // Mail adresi
$mail->Password = "SelparDak06**"; // Parola
$mail->SetFrom("info@dakyedekparca.com", "b2.dakyedekparca.com.com B2B Yeni Sipariş Formu"); // Mail adresi

$mail->AddAddress("elcierkan@hotmail.com"); // Gönderilecek kişi

$mail->SMTPOptions = array(
    'ssl' => array(
        'verify_peer' => true,
        'verify_peer_name' => true,
        'allow_self_signed' => false,
        'cafile' => '[path-to-cert].crt'
    )
);

$mail->Subject = "selparbulut.com üzerinden gelen yeni üyelik.";
$mail->Body = "<table width=\"100%\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">                 
<tr>
  <td align=\"left\" valign=\"middle\">&nbsp;</td>
  <td height=\"40\" colspan=\"3\" align=\"left\"><h5>selparbulut.com Yeni Üyelik Bildirimi</h5></td>
  </tr>
<tr>
  <td width=\"13\" align=\"left\" valign=\"middle\">&nbsp;</td>
  <td width=\"121\" height=\"30\" align=\"left\" valign=\"top\"> Firma Ünvanı</td>
  <td width=\"9\" align=\"left\" valign=\"top\">:</td>
  <td width=\"535\" height=\"40\" align=\"left\" valign=\"top\">$firma &nbsp;</td>
</tr>
<tr>
  <td width=\"13\" align=\"left\" valign=\"middle\">&nbsp;</td>
  <td width=\"121\" height=\"30\" align=\"left\" valign=\"top\"> Yetkili Adı
  &nbsp;</td>
  <td width=\"9\" align=\"left\" valign=\"top\">:</td>
  <td height=\"40\" align=\"left\" valign=\"top\">$yetkili &nbsp;</td>
</tr>
<tr>
  <td width=\"13\" align=\"left\" valign=\"middle\">&nbsp;</td>
  <td width=\"121\" height=\"30\" align=\"left\" valign=\"top\"> Telefon
  &nbsp;</td>
  <td width=\"9\" align=\"left\" valign=\"top\">:</td>
  <td height=\"40\" align=\"left\" valign=\"top\">$telefon &nbsp;</td>
</tr>
<tr>
  <td width=\"13\" align=\"left\" valign=\"middle\">&nbsp;</td>
  <td width=\"121\" height=\"30\" align=\"left\" valign=\"top\"> İl
  &nbsp;</td>
  <td width=\"9\" align=\"left\" valign=\"top\">:</td>
  <td height=\"40\" align=\"left\" valign=\"top\">$il_adi &nbsp;</td>
</tr>                    

<tr>
  <td width=\"13\" align=\"left\" valign=\"middle\">&nbsp;</td>
  <td width=\"121\" height=\"30\" align=\"left\" valign=\"top\"> Program
  &nbsp;</td>
  <td width=\"9\" align=\"left\" valign=\"top\">:</td>
  <td height=\"40\" align=\"left\" valign=\"top\">$calismasekli &nbsp;</td>
</tr>                    
<tr>
  <td colspan=\"4\" align=\"center\" valign=\"top\"></td>
</tr>

</table>";
//$mail->Send();

if(!$mail->Send()){
                echo "Mailer Error: ".$mail->ErrorInfo;
} else {
                echo "Message has been sent";
}
?>