<?php
session_start();
?>
<!DOCTYPE html>
<html lang="tr">

<head>

<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta name="language" content="Turkish"/>
<meta http-equiv="content-language" content="tr"/>
<meta http-equiv="X-UA-Compatible" content="IE=EDGE">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="theme-color" content="#FFFFFF">

<title>Cihaz Girişi</title>

<meta name="robots" content="index, follow">
<meta name="keywords" content="Teknik Servis, Cihaz Girişi">
<meta name="description" content="Deerma ve Tmarkt Yetkili Servis, Xiaomi - Viomi - Roborock ve Mijia Özel Servis Tüm ürünlerinize garantili orijinal yedek parça ile teknik servis hizmeti sağlıyoruz ">

<meta name="application-name" content="VTM TEKNİK"/>
<meta name="msapplication-TileColor" content="#FFFFFF" />

<link rel="preconnect" href="https://fonts.gstatic.com/"  />
<link rel="dns-prefetch" href="https://fonts.gstatic.com/" />
<link rel="preconnect" href="https://www.gstatic.com/"  />
<link rel="dns-prefetch" href="https://www.gstatic.com/" />
<link rel="preconnect" href="https://www.google-analytics.com/" crossorigin />
<link rel="dns-prefetch" href="https://www.google-analytics.com/" />
<link rel="preconnect" href="https://www.google.com/" crossorigin />
<link rel="dns-prefetch" href="https://www.google.com/" />
<link rel="preconnect" href="https://stats.g.doubleclick.net/"  />
<link rel="dns-prefetch" href="https://stats.g.doubleclick.net/" />

<meta name="google-site-verification" content="wBzrFah-Q6O_kaWsI6rPB8xfLNoEcfWqBkFSpRONNvY" /><meta name="msvalidate.01" content="90616D475F50E371D3032BDF7971342F">
<!-- Global site tag (gtag.js) - Google Analytics -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=UA-114216339-1"></script>
	<script>
	    window.dataLayer = window.dataLayer || [];
	    function gtag(){dataLayer.push(arguments);}
	    gtag('js', new Date());

	    gtag('config', 'UA-114216339-1');
	</script>
<link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800%7CShadows+Into+Light" rel="stylesheet" type="text/css">
<link rel="stylesheet" href="css/minified-header.css" type="text/css" data-ver="1.0.0">
<script src="http://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
<style>
.counters label { font-size: 18px; }
#footer .footer-ribbon::before { left: -9px; top: 1px; }
body.sticky-menu-active #header .nav-main-collapse, #header.fixed .nav-main-collapse { max-height: 100% !important; }
</style>
<script>

//document.addEventListener("mousewheel", { passive: false });
//document.addEventListener('wheel', function(e) {e.preventDefault();}, { passive: false });
window.addEventListener('wheel', function(e) { }, { passive: false });

</script>
<link rel="icon" type="image/x-icon" href="images/fav.png">
</head>
<body>


<div class="body">
		<?php include 'inc/nav.php' ?>
		<table class="container">
			<tr>
			    <td>
				<div class="badge bg-primary text-wrap" style="width: 6rem;">
                  SERİ NO
                 </div>
				</td>
				<td>
				<div class="badge bg-primary text-wrap" style="width: 6rem;">
                  MARKA
                 </div>
				</td>
				<td>
				<div class="badge bg-primary text-wrap" style="width: 6rem;">
                  MODEL
                 </div>
				</td>
				<td>
				<div class="badge bg-primary text-wrap" style="width: 16rem;margin-right:50px">
                  GARANTİ TARİHİ
                 </div>
				</td>
				<td>
				
				</td>
			</tr>
			
			<?php
			include 'database/baglan.php';
			$kullanici=$_SESSION['user'];
			$ad_soyad=explode(" ",$kullanici);
			//echo $ad_soyad[1];
			$ad=$ad_soyad[0];
			$soyad=$ad_soyad[1];
			$kullanici_bul=mysqli_query($baglan,"SELECT * from kullanicilar where ad='$ad' and soyad='$soyad'");
			
            while($alk=$kullanici_bul->fetch_assoc()) {
				$alveri=$alk['email'];
				//echo $alveri;

			} 
			$email='mehmet@gmail.com';//$alveri['email'];
			$cihazlar =mysqli_query($baglan,"SELECT * from cihazlar where email='$email' and sil=0");
 
            while($cihaz = $cihazlar->fetch_assoc()) {
	 
		      
		?><tr>
			<td><?php echo $cihaz['serino']; ?></td>
			<td><?php echo $cihaz['marka']; ?></td>
			<td><?php echo $cihaz['model']; ?></td>
			<td style="text-align:left"><?php
			$cihazSerino=$cihaz['serino'];
			$api_url = "https://basitservis.com/api/?kaynak=CihazSorgula&username=vtmteknik&uid=C0711FAD-384A-0605-2F6B-9A4838EF88FE&search=$cihazSerino";

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
			//curl_close($ch);
			
			// Decode the JSON response
			$data = json_decode($response, true);
			
			// Check if decoding was successful
			//echo $api_url;
			$responsetoken = json_decode($response);
			
			if ($responsetoken->data==''){
				//$responsetoken->message=='Girilen seri numarasi baska bir kullaniciya aittir') {
				//echo "Error decoding JSON response.";
				//$_SESSION['cihaz']="Yok";    
				//header('Location: CihazBilgileri');
				
			
			} else {
				// Process the $data as needed
			   // print_r($xmlString);
				$data = json_decode($xmlString, true);
				
				$responsetoken = json_decode($response);
				//print_r($data['data']);
				//echo print_r($responsetoken);
				foreach($responsetoken->data as $mydata) { 
				 //   echo print_r($mydata->CihazId);
					$CihazId=$mydata->CihazId;
					$Marka=$mydata->Marka;
					$Model=$mydata->Model;
					$CihazSeriNo=$mydata->CihazSeriNo;
					$GarantiBaslama=$mydata->GarantiBaslama;
				}}
			echo date("d-m-Y", strtotime($GarantiBaslama)) ?></td>
			<td><form action="device_delete.php" method="post">
			<input name="cihazId" value="<?php echo $CihazId?>" style="visibility:hidden" >
			<input name="CihazSeriNo" value="<?php echo $CihazSeriNo?>" style="visibility:hidden" >
				<input style="margin:5px" type="submit"  name="cihaz_sil" value="SİL" class="btn btn-danger"/>
				</td></form>
		</tr>
		<?php }?>
		</table>
	<?php include 'inc/footer.php'; ?>
</div>

<script>
		var captchaCallback = function() {
			grecaptcha.render('g-recaptcha-menu-login', {
		    		'sitekey' : '6Ld2d44UAAAAAEevL-wY_JpQQ_y9_CnBuuzf6Bh6',
		    		'lang' : 'tr'
		    	});grecaptcha.render('g-recaptcha-warinq', {
		    		'sitekey' : '6Ld2d44UAAAAAEevL-wY_JpQQ_y9_CnBuuzf6Bh6',
		    		'lang' : 'tr'
		    	});		};
		</script>
		<script src="../../../www.google.com/recaptcha/api6f2b.js?onload=captchaCallback&amp;render=explicit&amp;hl=tr" async defer></script>
<script>
document.addEventListener("DOMContentLoaded", function(event) {
	$.extend($.validator.messages, {
		required: "Bu alanın doldurulması zorunludur.",
		remote: "Lütfen bu alanı düzeltin.",
		email: "Lütfen geçerli bir e-posta adresi giriniz.",
		url: "Lütfen geçerli bir web adresi (URL) giriniz.",
		date: "Lütfen geçerli bir tarih giriniz.",
		dateISO: "Lütfen geçerli bir tarih giriniz(ISO formatında)",
		number: "Lütfen geçerli bir sayı giriniz.",
		digits: "Lütfen sadece sayısal karakterler giriniz.",
		creditcard: "Lütfen geçerli bir kredi kartı giriniz.",
		equalTo: "Lütfen aynı değeri tekrar giriniz.",
		extension: "Lütfen geçerli uzantıya sahip bir değer giriniz.",
		maxlength: $.validator.format("Lütfen en fazla {0} karakter uzunluğunda bir değer giriniz."),
		minlength: $.validator.format("Lütfen en az {0} karakter uzunluğunda bir değer giriniz."),
		rangelength: $.validator.format("Lütfen en az {0} ve en fazla {1} uzunluğunda bir değer giriniz."),
		range: $.validator.format("Lütfen {0} ile {1} arasında bir değer giriniz."),
		max: $.validator.format("Lütfen {0} değerine eşit ya da daha küçük bir değer giriniz."),
		min: $.validator.format("Lütfen {0} değerine eşit ya da daha büyük bir değer giriniz.")
	});
});
</script>

<script>
document.addEventListener("DOMContentLoaded", function(event) {
	jQuery('.lazy').Lazy();
});

</script>
<?php
if(isset($_GET['kayit_sonuc']))
if($_GET['kayit_sonuc']=="Evet"){
echo "<script>
Swal.fire({
  icon: 'success',
  title: 'Başarılı!',
  text: 'Cihaz arıza bildirim işleminiz kaydedilmiştir',
  confirmButtonText:'Tamam',
});
</script>";
}else if($_GET['kayit_sonuc']=="Hayır"){
	echo "<script>
Swal.fire({
  icon: 'warning',
  title: 'Uyarı!',
  text: 'Cihaz arıza bildirim işleminiz kaydedilmemiştir',
  confirmButtonText:'Tamam',
});
</script>";
}
?>
<script src="js/jquery.min.js" data-ver="2.1.3"></script>

<script src="js/minified-footer.js" defer="defer" data-ver="1.0.0"></script>

<script src="js/login.js" defer="defer"></script>
<script src="js/view.contact.js" defer="defer"></script>
<script src="js/write-comment.js" defer="defer"></script>
</body>

<!-- Added by HTTrack --><meta http-equiv="content-type" content="text/html;charset=UTF-8"><!-- /Added by HTTrack -->
</html>
