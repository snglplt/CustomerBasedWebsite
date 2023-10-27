<?php   

error_reporting(E_ALL);
ini_set("display_errors", 1);

include "../inc/baglan.php";
@include '../excelx/PHPExcel/IOFactory.php';

$kabul_sor = $baglanti->query("SELECT * from kabul_karti where cat>346 and sil=0")->fetch();
$servisi_sor = $baglanti->query("SELECT * from evrak_detay where cat>0 and sil=0 and kabulcat=346  order by isturu desc, cat desc");
@$objPHPExcel = new PHPExcel();
$objPHPExcel->setActiveSheetIndex(0);

$rowCount = 1;
$objPHPExcel->getActiveSheet()->SetCellValue('A' . $rowCount, 'Plaka');
$objPHPExcel->getActiveSheet()->SetCellValue('B' . $rowCount, $kabul_sor['aracplaka']);
$objPHPExcel->getActiveSheet()->SetCellValue('C' . $rowCount, 'Branch');
$objPHPExcel->getActiveSheet()->SetCellValue('D' . $rowCount, 'Gender');
$objPHPExcel->getActiveSheet()->SetCellValue('E' . $rowCount, 'Mobileno');
$objPHPExcel->getActiveSheet()->SetCellValue('F' . $rowCount, 'Email');


$rowCount = 2;
$objPHPExcel->getActiveSheet()->SetCellValue('A' . $rowCount, 'İş Türü');
$objPHPExcel->getActiveSheet()->SetCellValue('B' . $rowCount, 'Stok No');
$objPHPExcel->getActiveSheet()->SetCellValue('C' . $rowCount, 'Stok Adı');
$objPHPExcel->getActiveSheet()->SetCellValue('D' . $rowCount, 'Miktar');
$objPHPExcel->getActiveSheet()->SetCellValue('E' . $rowCount, 'Fiyat');
$objPHPExcel->getActiveSheet()->SetCellValue('F' . $rowCount, 'Kdv');
$objPHPExcel->getActiveSheet()->SetCellValue('G' . $rowCount, 'İskonto');
$objPHPExcel->getActiveSheet()->SetCellValue('H' . $rowCount, 'İskonto Toplam');
$objPHPExcel->getActiveSheet()->SetCellValue('I' . $rowCount, 'Toplam');

//while($row = mysql_fetch_array($result)){ 
while ($row = $servisi_sor->fetch()) {
  $rowCount++;
  $objPHPExcel->getActiveSheet()->SetCellValue('A' . $rowCount, $row['istru']);
  $objPHPExcel->getActiveSheet()->SetCellValue('B' . $rowCount, $row['stokno']);
  $objPHPExcel->getActiveSheet()->SetCellValue('C' . $rowCount, $row['stokadi']);
  $objPHPExcel->getActiveSheet()->SetCellValue('D' . $rowCount, $row['miktar']);
  $objPHPExcel->getActiveSheet()->SetCellValue('E' . $rowCount, $row['birim_fiyat']);
  $objPHPExcel->getActiveSheet()->SetCellValue('F' . $rowCount, $row['kdv']);
  $objPHPExcel->getActiveSheet()->SetCellValue('F' . $rowCount, $row['isk1']);
  $objPHPExcel->getActiveSheet()->SetCellValue('F' . $rowCount, $row['isktoplam']);
  $objPHPExcel->getActiveSheet()->SetCellValue('F' . $rowCount, $row['ara_topam']);
}

$objWriter = new PHPExcel_Writer_Excel2007($objPHPExcel);
$objWriter->save('../dosyalar/exceldosyaadi.xlsx');


    require("class.phpmailer.php");
    
    $mail = new PHPMailer(); // create a new object
    $mail->IsSMTP(); // enable SMTP
    $mail->SMTPDebug = 1; // debugging: 1 = errors and messages, 2 = messages only
    $mail->SMTPAuth = true; // authentication enabled


  $mail->Host = 'smtp.gmail.com';
  $mail->Port = 587;
  $mail->SMTPSecure = 'tls';
  
  $mail->addAttachment('../dosyalar/exceldosyaadi.xlsx', '06klm25plaka.xlsx');
    $mail->IsHTML(true);
    $mail->SetLanguage("tr", "phpmailer/language");
    $mail->CharSet  ="utf-8";
    
    $mail->Username = "elcierkan@gmail.com"; // Mail adresi
    $mail->Password = "DeniZ3477066579"; // Parola
    $mail->SetFrom("elcierkan@gmail.com", "Selparbulut deneme İletişim Formu"); // Mail adresi

    
    
    $mail->AddAddress("elcierkan@hotmail.com"); // Gönderilecek kişi
    //$mail->AddAddress("orhan.0908@gmail.com"); // Gönderilecek kişi

    $mail->SMTPOptions = array(
        'ssl' => array(
            'verify_peer' => true,
            'verify_peer_name' => true,
            'allow_self_signed' => false,
            'cafile' => '[path-to-cert].crt'
        )
    );
    
    $mail->Subject = "Web Sitesi İletişim Formundan Gelen";
    $mail->Body = "      <table width=\"100%\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">

    <tr>
      <td align=\"left\" valign=\"middle\">&nbsp;</td>
      <td height=\"40\" colspan=\"3\" align=\"left\"><h5>İletişim Formu</h5></td>
      </tr>
    <tr>
      <td width=\"13\" align=\"left\" valign=\"middle\">&nbsp;</td>
      <td width=\"121\" height=\"30\" align=\"left\" valign=\"top\"> Adı Soyadı</td>
      <td width=\"9\" align=\"left\" valign=\"top\">:</td>
      <td width=\"535\" height=\"40\" align=\"left\" valign=\"top\">Orhan Durmuş &nbsp;</td>
    </tr>
    <tr>
      <td colspan=\"4\" align=\"center\" valign=\"top\">Muhtemelen sen mu mesajı aldığında uyuyor olacaksın. Haklı olarak uyuyor olacaksın. Çünkü Karpuz yata yata büyür.
       Bu mesajı ben sana kendi gmail hesabımın üzerinden selparbuluttan gönderiyorum.
      
      </td>
    </tr>
  
</table>";
$mail->Send();
