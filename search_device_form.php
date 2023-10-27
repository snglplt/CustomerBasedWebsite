<?php
session_start();
include 'database/baglan.php';
if(isset($_GET['imeino'])){
$id=$_GET['imeino'];
$sahibi =mysqli_query($baglan,"SELECT * from cihazlar where serino='$id'");
 
            while($verial = $sahibi->fetch_assoc()) {
                
                   $ad=$verial['ad'];
                   $soyad=$verial['soyad'];
                   $tel=$verial['tel'];
                   $adres=$verial['adres'];
                   $email=$verial['email'];
				           $serino=$verial['serino'];
				           $marka=$verial['marka'];
				           $model=$verial['model'];
				   

				  // echo $ad.$soyad.$tel.$adres;
                
            }
$sahibi =mysqli_query($baglan,"SELECT * from kullanicilar where gsm1='$tel'");
 
            while($verial = $sahibi->fetch_assoc()) {
                
                   $ad=$verial['ad'];
                   $soyad=$verial['soyad'];
                   $tel=$verial['gsm1'];
                   $email=$verial['email'];
                   $tc=$verial['tc'];
                   $vergidairesi=$verial['vergidairesi'];
                   $unvan=$verial['unvan'];
                   $sabittel=$verial['sabittel'];
				   

				  // echo $tel.$tc;
                
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
<script src="http://code.jquery.com/ui/1.10.1/jquery-ui.js"></script>
<script type="text/javascript">
            $(function () {
                $('#datetimepicker1').datetimepicker();
            });
        </script>
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
<script src="http://code.jquery.com/ui/1.10.1/jquery-ui.js"></script>
<script type="text/javascript">
            $(function () {
                $('#datetimepicker1').datetimepicker();
            });
        </script>
</head>
<body oncontextmenu="return false;">


<div class="body">
		<?php include 'inc/nav.php' ?>
		<div role="main" class="main">
				<section class="page-top">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<ul class="breadcrumb">
							<li><a href="Anasayfa" rel="nofollow"><i class="fa fa-home"></i> Ana Sayfa</a></li>
							<li style="color: white;">
																<i class="fa fa-home"></i> Teknik Servis															</li>
							
						</ul>
					</div>
				</div>
				
				<div class="row">
					<div class="col-md-12">
						<h1>Teknik Servis Formu</h1>
					</div>
					
				</div>
			</div>
		</section>
		<div class="container">
		
		
<form action="device_tecnic_service.php" method="post">
	<div class="row">
		
		<div class="col-md-6">
			<h5>  Cihaz Sahibine Ait Bilgiler</h5>
     
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Ad </label>
  <input type="text" class="form-control" name="ad" id="exampleFormControlInput1" required value="<?php if(isset($ad)) echo $ad;?>">
</div>	
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Soyad</label>
  <input type="text" class="form-control" name="soyad" id="exampleFormControlInput1" required value="<?php if(isset($soyad)) echo $soyad;?>">
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">TC Kimlik No</label>
  <input type="text" class="form-control" name="tc" id="exampleFormControlInput1" required value="<?php if(isset($tc)) echo $tc;?>">
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email adres</label>
  <input type="email" class="form-control" name="mail" id="exampleFormControlInput1" required value="<?php if(isset($email)) echo $email;?>">
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Telefon</label>
  <input type="phone" class="form-control" name="tel" id="exampleFormControlInput1" required value="<?php if(isset($tel)) echo $tel;?>">
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Sabit Telefon</label>
  <input type="phone" class="form-control" name="sabittel" id="exampleFormControlInput1" required value="<?php if(isset($sabittel)) echo $sabittel;?>">
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Unvan</label>
  <input type="phone" class="form-control" name="unvan" id="exampleFormControlInput1" required value="<?php if(isset($unvan)) echo $unvan;?>">
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Vergi Dairesi/Vergi No(Şirket ise)</label>
  <input type="phone" class="form-control" name="vergidairesi" id="exampleFormControlInput1" required value="<?php if(isset($vergidairesi)) echo $vergidairesi;?>">
</div>

</div>

<div class="col-md-6">
<h5> Adres(Lütfen Eksiksiz Doldurunuz)</h5>
<div class="mb-3">
  <label  class="form-label">İl</label>
  <input type="text" class="form-control" required  name="il" value="<?php if(isset($_GET['il'] )) echo $_GET['il']  ;?>">
</div>
<div class="mb-3">
  <label  class="form-label">İlçe</label>
  <input type="text" class="form-control" id="ilce" required  name="ilce" value="<?php if(isset($_GET['ilce'] )) echo $_GET['ilce']  ;?>">
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Mahalle veya Köy</label>
  <input type="text" class="form-control" required   name="mahalle" value="<?php if(isset($_GET['mahalle'] )) echo $_GET['mahalle'] ;?>">
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Cadde veya Sokak</label>
  <input type="text" class="form-control" required   name="cadde" value="<?php if(isset($_GET['cadde'] )) echo $_GET['cadde'] ;?>">
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Bina Kapı No</label>
  <input type="text" class="form-control"  required  name="binano" value="<?php if(isset($_GET['binano'] )) echo $_GET['binano'] ;?>">
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Daire No</label>
  <input type="text" class="form-control" required  name="daireno" value="<?php if(isset($_GET['daireno'] )) echo $_GET['daireno'] ;?>">
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Posta Kodu</label>
  <input type="text" class="form-control" required   name="postakodu" value="<?php if(isset($_GET['postakodu'] )) echo $_GET['postakodu'] ;?>">
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Adres Ek Açıklama</label>
  <input type="text" class="form-control"   name="adres" value="<?php if(isset($adres)) echo $adres ;?>">
</div>


</div>
	</div>
	
	<div class="row">
	<h5 style="margin-top:20px;margin-left:10px"> Cihaza Ait Bilgiler</h5 >
	<div class="col-md-6">
	
	<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Seri No</label>
  <input type="text" class="form-control" required  name="serino" value="<?php if(isset($serino)) echo $serino ;?>">
  </div>
  <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Marka</label>
  <input type="text" class="form-control" required   name="marka" value="<?php if(isset($marka)) echo $marka ;?>">
  </div>
  <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Satın Aldığı Firma </label>
  <input type="text" class="form-control"    name="firma" value="<?php if(isset($satinfirma)) echo $satinfirma ;?>">
  </div>
  <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">(Varsa) Poliçe No </label>
  <input type="text" class="form-control"   name="policeno" value="<?php if(isset($policeno)) echo $policeno ;?>">
  </div>
	</div>
	<div class="col-md-6">
	<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Fatura No</label>
  <input type="text" class="form-control"   name="faturano" value="<?php if(isset($faturano)) echo $faturano ;?>">
  </div>
  <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Model</label>
  <input type="text" class="form-control" required  name="model" value="<?php if(isset($model)) echo $model ;?>">
  </div>
  <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Satın Alma Tarihi<span style="font-size:10px">(Faturadaki veya Kaşeli Garanti Kartındaki Tarih)</span> </label>
  <input type="date" class="form-control" required  onclick="this.form.theDate.value = new Date();"  name="faturatarih"  value="<?php if(isset($satintarih)) echo $satintarih ;?>">
  </div>
  
  <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">(Varsa) Satın Alma Tarihi </label>
  <input type="date" class="form-control"   name="satintarih" value="<?php if(isset($satintarih)) echo $satintarih ;?>">
  </div>
	</div>
	
	</div>
	<div class="row" style="margin-top:-20px">
	<div class="col-md-12">
	<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Şikayet</label>
  <textarea class="form-control" name="sikayet" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
<div class="mb-3" style="visibility:hidden">
  <label for="exampleFormControlInput1" class="form-label">Kullanıcı </label>
  <input type="text" class="form-control" name="kullanici" id="exampleFormControlInput1"  value="<?php if(isset($_GET['kullanici'])) echo $_GET['kullanici'];?>">
</div>
<div class="mb-3" style="margin-top:10px">
	<input type="submit" value="Kaydet"  name="kaydet_cihaz"
	class="btn btn-primary pull-right push-bottom" data-loading-text="Yükleniyor...">
</div>

	</div>
  <?php if($_GET["kullanici"]=="HepsiBurada"){?>
  <p><span style="background-color:white"><span style="font-size:10.5pt"><span style="color:#777777">G&ouml;nderime hazır olan paketinizi Anlaşmalı Kargo Şirketlerimiz olan</span><span style="color:#3984c6"> <strong>Mng kargo (Anlaşma No: 840533298)</strong></span></span><strong><span style="font-size:10.5pt"><span style="color:#777777">&nbsp;VTM TEKNİK Merkez</span></span></strong><span style="font-size:10.5pt"><span style="color:#777777"> Onarım servisimize &uuml;cretsiz olarak g&ouml;nderebilirsiniz. Dilerseniz size en yakın olan </span></span><a href="#"><span style="font-size:10.5pt"><span style="color:#0088cc">B&ouml;lge Servisimizi</span></span></a><span style="font-size:10.5pt"><span style="color:#777777"> belirleyip g&uuml;venle servis onarım merkezlerimize yollayabilirsiniz.</span></span></span></p>

<p>&nbsp;</p>
<?php }else{}?>
	</div>
	
</form>
					
	</div>
	
	
</div>	</div>
	<?php include 'inc/footer.php'; ?>
</div>

    </script>
	<script type="text/javascript">
            $(function () {
                $('#datetimepicker1').datetimepicker();
            });
        </script>
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
<script src="sweetalert2.all.min.js"></script>
<script src="jQuery.ui.datepicker.js"></script>
  <script src="jquery.ui.datepicker.mobile.js"></script>
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

</body>

<!-- Added by HTTrack --><meta http-equiv="content-type" content="text/html;charset=UTF-8"><!-- /Added by HTTrack -->
</html>
