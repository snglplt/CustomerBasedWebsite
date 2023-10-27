<?php session_start(); ?>
<!DOCTYPE html>
<html lang="tr">

<head>

<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta name="language" content="Turkish"/>
<meta http-equiv="content-language" content="tr"/>
<meta http-equiv="X-UA-Compatible" content="IE=EDGE">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="theme-color" content="#FFFFFF">

<title>Şifremi Unuttum</title>

<meta name="robots" content="index, follow">
<meta name="keywords" content="Hesaplar, Şifremi Unuttum">
<meta name="description" content="Deerma ve Tmarkt Yetkili Servis, Xiaomi - Viomi - Roborock ve Mijia Özel Servis Tüm ürünlerinize garantili orijinal yedek parça ile teknik servis hizmeti sağlıyoruz ">

<base >

<link rel="alternate" hreflang="tr" href="index" />
<link rel="alternate" hreflang="en" href="en/index" />

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
<script src="js/cdn.jsdelivr.net_npm_sweetalert2@11.js"></script>

<script>

//document.addEventListener("mousewheel", { passive: false });
//document.addEventListener('wheel', function(e) {e.preventDefault();}, { passive: false });
window.addEventListener('wheel', function(e) { }, { passive: false });

</script>
<link rel="icon" type="image/x-icon" href="images/fav.png">
</head>
<body>


<div class="body">
		<?php include 'inc/nav.php'; ?>
		<div role="main" class="main">
				<section class="page-top">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<ul class="breadcrumb">
							<li><a href="../index.html" rel="nofollow"><i class="fa fa-home"></i> Ana Sayfa</a></li>
							<li style="color: white;">
																<i class="fa fa-home"></i> Hesaplar															</li>
							
						</ul>
					</div>
				</div>
				<div class="row">
					<div class="col-md-12">
						<h1>Şifremi Güncelleme</h1>
					</div>
				</div>
			</div>
		</section>
		<div class="container">
				<div class="row" id="forgotpassloadmsg" style="display:none;">
			<div class="col-md-12">
				<div style='text-align:center'>
									 		<img src='#'>
				 						<br>&nbsp; İşlem Yapılıyor, Lütfen Bekleyiniz...				</div>
			</div>
		</div>
		<div class="row">
							<div class="col-md-9">
					<div class="panel-group">
						<div class="panel panel-default">
							<div class="panel-heading">
								<h4 class="panel-title"><a class="accordion-toggle" href="#">Şifre Yenileme Formu</a></h4>
							</div>
							<div id="collapseOne" class="accordion-body collapse in">
								<div class="panel-body">
											<form action="GuncelleSifre" id="forgotpassform" method="post" autocomplete="off">
											<input type="hidden" name="forgotpass" value="1">
											<div class="row">
												<div class="form-group">
												<div class="col-md-12" >
														<label>Email <code></code></label>
														<input id="eposta" name="eposta" type="text" value="<?php echo $_GET['mail'];?>" class="form-control input-lg" 
															value="">
													</div>
													<div class="col-md-12">
														<label>Şifre <code>*</code></label>
														<input id="eposta" name="sifre1" type="text" class="form-control input-lg" 
															value="">
													</div>
													<div class="col-md-12">
														<label>ŞifreTekrar <code>*</code></label>
														<input id="eposta" name="sifre2" type="text" class="form-control input-lg" 
															value="">
													</div>
													
												</div>
											</div>
											<div class="row">
												<div class="form-group">
													<div class="col-md-12">
														<label>Güvenlik</label>
														<div id="g-recaptcha-forgotpass" class="g-recaptcha" data-sitekey="6Ld2d44UAAAAAEevL-wY_JpQQ_y9_CnBuuzf6Bh6"></div>
																											</div>
												</div>
											</div>
											<div class="row">
												<div class="col-md-12">
													<button id="forgotpassbtn" name="gonder" type="submit" class="btn btn-primary pull-right mb-xl" 
														data-loading-text="Lütfen Bekleyiniz...">gönder</button>
												</div>
											</div>
										</form>
																	</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-md-3">
					<h4 class="heading-primary">Parolamı Yenile</h4>
											Şifrenizi yenilemek için, sol kısımda yer alan forma yeni şifrenizi girip, Gönder butonunuza basmanız yeterlidir.									</div>
					</div>
	</div>	</div>
	<?php include 'inc/footer.php'; ?>
</div>




<script src="../../_cache/minified-footer.js" defer="defer" data-ver="1.0.0"></script>

<script src="../../modules/accounts/forgot-password.js" defer="defer"></script>
<script>
		var captchaCallback = function() {
			grecaptcha.render('g-recaptcha-menu-login', {
		    		'sitekey' : '6Ld2d44UAAAAAEevL-wY_JpQQ_y9_CnBuuzf6Bh6',
		    		'lang' : 'tr'
		    	});grecaptcha.render('g-recaptcha-forgotpass', {
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
if($_GET){
	$sifre=$_GET['sifre'];
if($sifre=="Eslesmiyor"){	
	
		echo "<script>
			  Swal.fire({
				icon: 'warning',
				title: 'Uyarı!',
				text: 'Şifreler Uyuşmuyor',
				confirmButtonText:'Tamam',
			  });
			  </script>";
	
}}
?>
</body>

</html>
