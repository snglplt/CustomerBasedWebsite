<?php
session_start();
include 'database/baglan.php';
if(isset($_SESSION['id'])){
$id=$_SESSION['id'];
$sahibi =mysqli_query($baglan,"SELECT * from kullanicilar where id='$id'");
 
            while($verial = $sahibi->fetch_assoc()) {
                
                   $ad=$verial['ad'];
                   $soyad=$verial['soyad'];
                   $tel=$verial['gsm1'];
                   $adres=$verial['adres'];
                   $email=$verial['email'];
				   $sifre=$verial['sifre'];

				  // echo $ad.$soyad.$tel.$adres;
                
            }
		}
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
<script src="sweetalert2.min.js"></script>
<link rel="stylesheet" href="sweetalert2.min.css">
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
<link rel="icon" type="image/x-icon" href="images/fav.png">
<script>
	

//document.addEventListener("mousewheel", { passive: false });
//document.addEventListener('wheel', function(e) {e.preventDefault();}, { passive: false });
window.addEventListener('wheel', function(e) { }, { passive: false });

</script>
<script type="text/javascript">
        function over()
        {
            document.getElementById("marka").required = false;
        }
</head>
<body >

<script type="application/ld+json">{"@context":"https:\/\/schema.org","@type":"WebSite","name":"VTM TEKNİK","keywords":"VTM TEKNİK, telefon teknik servis, cep telefonu teknik servis, samsung teknik servis, apple teknik servis","url":"https:\/\/www.deltaservis.com.tr\/","sameAs":["https:\/\/www.facebook.com\/deltaservis\/","../../https_.html\/\/twitter.com\/servis_delta","../../https_.html\/\/www.instagram.com\/deltaservisoffical\/","https:\/\/www.youtube.com\/channel\/UCsfxyzc9WMOmgjJBvz3fVeA"]}</script>
<script type="application/ld+json">{"@context":"https:\/\/schema.org","@type":"Organization","description":"14 y\u0131ll\u0131k tecr\u00fcbe ve teknolojik alt yap\u0131 ile sekt\u00f6r\u00fcn en \u00f6nde gelen markalar\u0131na sat\u0131\u015f sonras\u0131 hizmeti veriyoruz. T\u00fcm hizmetlerimiz i\u00e7in maksimum memnuniyet garantisi veriyoruz.","email":" info@deltaservis.com.tr","department":"Teknik Servis","founder":"VTM TEKNİK","address":{"@type":"PostalAddress","addressLocality":"Fatih, \u0130stanbul, T\u00fcrkiye","postalCode":"34000","addressRegion":"TR","streetAddress":"Bah\u00e7elievler Mahallesi Mehmet\u00e7ik Sokak Kadir Has Sitesi No:1\/1\/123 Kat:5 Bah\u00e7elievler \/ \u0130stanbul"},"url":"https:\/\/www.deltaservis.com.tr\/","logo":{"@type":"ImageObject","url":"https:\/\/www.deltaservis.com.tr\/img\/logo.png","width":"239","height":"90"},"contactPoint":[{"@type":"ContactPoint","telephone":"+908505320500","contactType":"Customer Service","areaServed":"TR"}],"location":[{"@type":"Place","address":{"@type":"PostalAddress","addressLocality":"Fatih, \u0130stanbul, T\u00fcrkiye","addressRegion":"TR"},"url":"https:\/\/www.deltaservis.com.tr\/bize-ulasin.html"}]}</script>

<div class="body">
		<?php include 'inc/nav.php' ?>
		<div role="main" class="main">
				<section class="page-top">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<ul class="breadcrumb">
							<li><a href="../index.html" rel="nofollow"><i class="fa fa-home"></i> Ana Sayfa</a></li>
							<li style="color: white;">
																<i class="fa fa-home"></i> Teknik Servis															</li>
							
						</ul>
					</div>
				</div>
				
				<div class="row">
					<div class="col-md-12">
						<h1>Cihaz Girişi</h1>
					</div>
					
				</div>
			</div>
		</section>
		<div class="container">
		<div class="row"><div class="col-md-12">
				<form action="serino-sorgula.php" method="get">
	<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Seri No</label>
  <input type="text" class="form-control" id="exampleFormControlInput1" required name="search" value="<?php if(isset($_SESSION['search'] )) echo $_SESSION['search'] ;?>">
 <br> 
  <input type="submit" value="Sorgula"  name="seri_sorgula" onclick="over()"
	class="btn btn-primary pull-right push-bottom" data-loading-text="Yükleniyor...">
	</form></div></div>
		<!--<form action="device_save.php" method="post" autocomplete="off">-->
	<div class="row">
		<form action="device_save.php" method="post">
		<div class="col-md-6">
			<h3>  SAHİBİ</h3>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Ad </label>
  <input type="text" class="form-control" name="ad" id="exampleFormControlInput1" required value="<?php if(isset($ad)) echo $ad;?>">
</div>	
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Soyad</label>
  <input type="text" class="form-control" name="soyad" id="exampleFormControlInput1" required value="<?php if(isset($soyad)) echo $soyad;?>">
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email adres</label>
  <input type="email" class="form-control" name="email" id="exampleFormControlInput1" required value="<?php if(isset($email)) echo $email;?>">
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Telefon</label>
  <input type="phone" class="form-control" name="tel" id="exampleFormControlInput1" required value="<?php if(isset($tel)) echo $tel;?>">
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Adres</label>
  <input type="text" class="form-control" name="adres" required value="<?php if(isset($adres)) echo $adres;?>"></input>
</div>

</div>
<!-----  -->
<div class="col-md-6">
<h3> CİHAZ BİLGİSİ</h3>
<div class="mb-3">
  <label  class="form-label">Seri No</label>
  <input type="text" class="form-control" id="marka"  name="serino" value="<?php if(isset($_GET['serino'] )) echo $_GET['serino']  ;?>">
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Cihaz Id</label>
  <input type="text" class="form-control" name="cihazId" required value="<?php if(isset($_GET['CihazId'])) echo $_GET['CihazId'];?>"></input>
</div>
<div class="mb-3">
  <label  class="form-label">Marka</label>
  <input type="text" class="form-control" id="marka"  name="marka" value="<?php if(isset($_GET['marka'] )) echo $_GET['marka']  ;?>">
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Model</label>
  <input type="text" class="form-control"   name="model" value="<?php if(isset($_GET['model'] )) echo $_GET['model'] ;?>">
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Garanti Tarihi</label>
  <input type="text" class="form-control"   name="model" value="<?php
  function fark_bul($tarih1, $tarih2, $ayrac) {
    //mktime( int saat, int dakika, int saniye, int ay, int gun, int yil);
    list($y1, $a1, $g1) = explode($ayrac, $tarih1);
    list($y2, $a2, $g2) = explode($ayrac, $tarih2);
    $t1_timestamp = mktime('0', '0', '0', $a1, $g1, $y1);
    $t2_timestamp = mktime('0', '0', '0', $a2, $g2, $y2);
    if ($t1_timestamp > $t2_timestamp) {
        $result = ($t1_timestamp - $t2_timestamp) / 86400;
    } else
        if ($t2_timestamp > $t1_timestamp) {
            $result = ($t2_timestamp - $t1_timestamp) / 86400;
        }
    return $result;
}
$bugun = date('Y-m-d');
$tarih = $_GET['GarantiBaslama'];
$gun = fark_bul($tarih,$bugun,'-');
$kalan=730-$gun;
   if(isset($_GET['GarantiBaslama'] )){ echo date("d-m-Y", strtotime($_GET['GarantiBaslama'])) ." Garantinin bitmesine $kalan gün kalmıştır ";}?>">
</div>
<?php if(!$_SESSION['kullanici']){?>
<div class="mb-3" style="margin-top:10px;margin-right:20px">
	<input type="submit" value="Kaydet"  name="kaydet_cihaz"
	class="btn btn-primary pull-right push-bottom" data-loading-text="Yükleniyor...">	
</div>
<?php }?>
	</div><form>
<!--</form>-->
					
	</div>
	
	
</div>	</div>
	<?php include 'inc/footer.php'; ?>
</div>

    </script>
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
<script src="sweetalert2.all.min.js"></script>
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
<script src="js/jquery.min.js" data-ver="2.1.3"></script>

<script src="js/minified-footer.js" defer="defer" data-ver="1.0.0"></script>

<script src="js/login.js" defer="defer"></script>
<script src="js/view.contact.js" defer="defer"></script>
<script src="js/write-comment.js" defer="defer"></script>
<?php
if(isset($_GET['giris'])){
$giris=$_GET['giris'];
if($giris=="var"){
	echo "<script>
          Swal.fire({
            icon: 'success',
            title: 'Başarılı!',
            text: 'Sisteme Başarılı Bir Şekilde Giriş Yaptınız',
            confirmButtonText:'Tamam',
          });
          </script>";
}else if($giris=="Yok"){
	echo "<script>
          Swal.fire({
            icon: 'warning',
            title: 'Uyarı!',
            text: 'Kullanıcı adı ve şifrenizi kontrol edin',
            confirmButtonText:'Tamam',
          });
          </script>";
}else{}}
?>
<?php
//echo $_SESSION['cihaz'];
if(isset($_SESSION['cihaz'])){
$cihaz=$_SESSION['cihaz'];
if($cihaz=="Yok"){

echo "<script>
Swal.fire({
  icon: 'warning',
  title: 'Uyarı!',
  text: 'Bu seri numarasına ait cihaz bulunmamaktır',
  confirmButtonText:'Tamam',
});
</script>";
}}
?>
</body>

</html>
