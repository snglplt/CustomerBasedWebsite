<?php
     ob_start();
     session_start();

     include_once 'database/baglan.php';
     if( isset($_GET['seri_sorgula']) ) { 
        $search = trim($_GET['search']);
        $kullanici=$_SESSION['user'];
        $sec=mysqli_query($baglan,"SELECT id FROM kullanicilar WHERE email='$kullanici'");
        $row=mysqli_fetch_array($sec);
        $ad=$row['ad'];
        $soyad=$row['soyad'];
       
        $tarih=date('m/d/Y H:i:s');
        $res=mysqli_query($baglan,"INSERT INTO log_sorgu(kullanici,serino,tarih)
        VALUES('$kullanici','$search','$tarih')");
        $kurumsalbul=explode(" ",$kullanici);
        $kurumsal=$kurumsal[0];
       
      
      
     // https://basitservis.com/api/?kaynak=CihazSorgula&username=vtmteknik&uid=C0711FAD-384A-0605-2F6B-9A4838EF88FE&search=30802/01454782&Kurumsal=TMARKT 
      $api_url = "https://basitservis.com/api/?kaynak=CihazSorgula&username=vtmteknik&uid=C0711FAD-384A-0605-2F6B-9A4838EF88FE&search=$search&Kurumsal=$kurumsal";

// Initialize cURL session
$ch = curl_init();

// Set cURL options
curl_setopt($ch, CURLOPT_URL, $api_url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

// Execute cURL session and store the response
$response = curl_exec($ch);
$output = curl_exec($ch);
curl_close($ch);

$xmlString = preg_replace("/(<\/?)(\w+):([^>]*>)/", "$1$2$3", $output);

//$xml = SimpleXML_Load_String($xmlString);

// Close cURL session
curl_close($ch);

// Decode the JSON response
$data = json_decode($response, true);

// Check if decoding was successful
echo $api_url;
$responsetoken = json_decode($response);

if ($responsetoken->data==''){
    //$responsetoken->message=='Girilen seri numarasi baska bir kullaniciya aittir') {
    echo "Error decoding JSON response.";
    $_SESSION['cihaz']="Yok";    
    header('Location: CihazBilgileri');
    

} else {
    // Process the $data as needed
   // print_r($xmlString);
    $data = json_decode($xmlString, true);
    
    $responsetoken = json_decode($response);
    //print_r($data['data']);
    echo print_r($responsetoken);
    foreach($responsetoken->data as $mydata) { 
     //   echo print_r($mydata->CihazId);
        $CihazId=$mydata->CihazId;
        $Marka=$mydata->Marka;
        $Model=$mydata->Model;
        $CihazSeriNo=$mydata->CihazSeriNo;
        $GarantiBaslama=$mydata->GarantiBaslama;
    }
    
    $_SESSION['search'] = $search;
    $_SESSION['Marka'] = $Marka;
    $_SESSION['Model'] = $Model;
    $_SESSION['cihaz']="Var"; 
    
    header('Location: CihazBilgileri?serino='.$search.'&marka='.$Marka.'&model='.$Model.'&CihazId='.$CihazId.'&GarantiBaslama='.$GarantiBaslama);
    //echo $CihazId."-".$Marka."-".$Model."-".$CihazSeriNo;
     //echo $_SESSION['Model'];
      
     }}
    ?>