<?php session_start();?>
<!DOCTYPE html>
<html lang="tr">

<!-- Added by HTTrack --><meta http-equiv="content-type" content="text/html;charset=UTF-8"><!-- /Added by HTTrack -->
<head>

<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta name="language" content="Turkish"/>
<meta http-equiv="content-language" content="tr"/>
<meta http-equiv="X-UA-Compatible" content="IE=EDGE">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="theme-color" content="#FFFFFF">

<title>Banka Hesapları</title>

<meta name="robots" content="index, follow">
<meta name="keywords" content="VTM TEKNİK, Banka Hesapları">
<meta name="description" content="Deerma ve Tmarkt Yetkili Servis, Xiaomi - Viomi - Roborock ve Mijia Özel Servis Tüm ürünlerinize garantili orijinal yedek parça ile teknik servis hizmeti sağlıyoruz ">

<base >

<meta property="og:url" content="index">

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
<script src="js/cdn.jsdelivr.net_npm_sweetalert2@11.js"></script>
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
<body >


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
																<i class="fa fa-home"></i> VTM TEKNİK															</li>
							
						</ul>
					</div>
				</div>
				<div class="row">
					<div class="col-md-12">
						<h1>Banka Hesapları</h1>
					</div>
				</div>
			</div>
		</section>
		
<div class="container">
	<div class="row">
		<div class="col-md-12">
			<div class="row">
				<div class="col-md-12">
					<p class="lead" style="text-align:justify">Ödemenizi gerçekleştirdikten sonra işleminizin daha hızlı tamamlanması için bize aşağıdaki form aracılığıyla ödeme bildiriminde bulunabilirsiniz.</p>
				</div>
			</div>

			<div class="row" id="bankaccloadmsg" style="display:none;">
				<div class="col-md-6"></div>
				<div class="col-md-3">
					<div style='text-align:center'>
											 		<img src='#'>
					 							<br>&nbsp; processing-pls-wait					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-3"></div>
				<div class="col-md-9"><div id="sonucX"></div></div>
			</div>
			<div class="row">
				<div class="col-md-12">
					<section class="panel">
													<form name="bankaccform" id="bankaccform" method="POST" action="banka_kaydet.php">
								<input type="hidden" value="1" name="bankacc" id="bankacc">
								<div class="panel-body">
								<div align="center"><h2>Ödeme Bildirim Formu</h2></div>
										<div class="form-group">
										  <label class="col-md-5 control-label">Adınız & Soyadınız <code>*</code></label>
										  <div class="col-md-7">
											<div class="input-group input-group-icon">
											  <span class="input-group-addon">
												<span class="icon"><i class="fa fa-user"></i></span>
											  </span>
											  <input type="text" class="form-control" name="adsoyad" id="adsoyad" required="">
											</div>
										  </div>
										</div>
										<div class="form-group">
										  <label class="col-md-5 control-label">Cihaz Form Numarası <code>*</code></label>
										  <div class="col-md-7">
											<div class="input-group input-group-icon">
											  <span class="input-group-addon">
												<span class="icon"><i class="fa fa-file-o"></i></span>
											  </span>
											  <input type="text" class="form-control" name="formno" id="formno">
											</div>
										  </div>
										</div>
										<div class="form-group">
										  <label class="col-md-5 control-label">Seri No <code>*</code></label>
										  <div class="col-md-7">
											<div class="input-group input-group-icon">
											  <span class="input-group-addon">
												<span class="icon"><i class="fa fa-mobile"></i></span>
											  </span>
											  <input type="text" class="form-control" name="imeino" id="imeino" maxlength="15">
											</div>
										  </div>
										</div>
										<div class="form-group">
										  <label class="col-md-5 control-label">Size Ulaşabileceğimiz Telefon Numarası <code>*</code></label>
										  <div class="col-md-7">
											<div class="input-group input-group-icon">
											  <span class="input-group-addon">
												<span class="icon"><i class="fa fa-phone-square"></i></span>
											  </span>
											  <input type="text" class="form-control" name="telefon" id="telefon" required="" maxlength="11">
											</div>
										  </div>
										</div>	
										<div class="form-group">
											<label class="col-md-5 control-label" for="inputSuccess">Ödeme Yaptığınız Banka Hesabımız <code>*</code></label>
											<div class="col-md-7">
												<select class="form-control input-sm mb-md" name="banka" id="banka" required="">
													<option></option><option value="Ziraat Bankası">Ziraat Bankası</option>												</select>
											</div>
										</div>
										<div class="form-group">
										  <label class="col-md-5 control-label">Ödenen Tutar <code>*</code></label>
										  <div class="col-md-7">
											<div class="input-group input-group-icon">
											  <input type="text" class="form-control" name="odenentutar" id="odenentutar" required="">
											  <span class="input-group-addon">
												<span class="icon"><i class="fa fa-try"></i></span>
											  </span>
											</div>
										  </div>
										</div>

										<div class="form-group">
											<label class="col-md-5 control-label">Güvenlik</label>
											<div class="col-md-7">
												<div id="g-recaptcha-contact" class="g-recaptcha" data-sitekey="6Ld2d44UAAAAAEevL-wY_JpQQ_y9_CnBuuzf6Bh6"></div>
																							</div>
										</div>

										<p align="right">
										<input type="submit" name="gonder" id="gonder" class="btn btn-primary btn-sm" value="Bildirimi Gönder"></p>
								</div>
							</form>
											</section>
				</div>
			</div>
			<div class="row">
				<div align="center"><h2>Banka Hesap Bilgilerimiz</h2></div>
				<div class="col-md-12">
					<div class="tabs">
							<ul class="nav nav-tabs text-left tabs-primary">
								<li class=" active">
										<a href="#banka2" data-toggle="tab"><i class="fa fa-star"></i> Ziraat Bankası</a>
									</li>							</ul>
							<div class="tab-content">
								<div id="banka2" class="tab-pane  active">
												<div align="center">
																											
																									</div><br>
												<table class="table table-bordered">
													<thead>
													  <tr>
														<th>Banka Adı</th>
														<th>Hesap No</th>
														<th>Şube</th>
														<th>Şube Kodu</th>
														<th>IBAN</th>
													  </tr>
													</thead>
													<tbody>
													  <tr>
														<td>Ziraat Bankası</td>
														<td>97738001-5001</td>
														<td>Mustafa Kemal Şubesi</td>
														<td>2486</td>
														<td>TR 0800 0100 2486 9773 8001 5001</td>
													  </tr>
													</tbody>
												  </table>
											</div>							</div>
						</div>				</div>
			</div>
		</div>
	</div>
</div>	</div>
	<?php include 'inc/footer.php'; ?>
</div>


<script>
		var captchaCallback = function() {
			grecaptcha.render('g-recaptcha-menu-login', {
		    		'sitekey' : '6Ld2d44UAAAAAEevL-wY_JpQQ_y9_CnBuuzf6Bh6',
		    		'lang' : 'tr'
		    	});grecaptcha.render('g-recaptcha-contact', {
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
<?php
if($_GET){
     if($_GET['kayit']=="basarili"){
		echo "<script>
		Swal.fire({
		  icon: 'success',
		  title: 'Başarılı!',
		  text: 'Banka bilgisi Kaydedildi',
		  confirmButtonText:'Tamam',
		});
		</script>";
	 }else if($_GET['kayit']=="basarisiz"){
		echo "<script>
          Swal.fire({
            icon: 'warning',
            title: 'Uyarı!',
            text: 'Banka bilgisi Kaydedilmedi',
            confirmButtonText:'Tamam',
          });
          </script>";
	 }
}
?></html>
