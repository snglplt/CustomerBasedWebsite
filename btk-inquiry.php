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

<title>BTK Cihaz Yenileme Durum Sorgulama</title>

<meta name="robots" content="index, follow">
<meta name="keywords" content="Teknik Servis, BTK Cihaz Yenileme Durum Sorgulama">
<meta name="description" content="Deerma ve Tmarkt Yetkili Servis, Xiaomi - Viomi - Roborock ve Mijia Özel Servis Tüm ürünlerinize garantili orijinal yedek parça ile teknik servis hizmeti sağlıyoruz ">

<base >

<meta property="og:url" content="index">
<link rel="alternate" hreflang="tr" href="index" />
<link rel="alternate" hreflang="en" href="en/index" />

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

</head>
<body>


<div class="body">
		<?php include 'inc/nav.php' ?>
		<div role="main" class="main">
				<section class="page-top">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<ul class="breadcrumb">
							<li><a href="index.php" rel="nofollow"><i class="fa fa-home"></i> Ana Sayfa</a></li>
							<li style="color: white;">
																<i class="fa fa-home"></i> Teknik Servis															</li>
							<li class="active"><i class="fa fa-home"></i> BTK Cihaz Yenileme Durum Sorgulama</li>
						</ul>
					</div>
				</div>
				<div class="row">
					<div class="col-md-12">
						<h1>BTK Cihaz Yenileme Durum Sorgulama</h1>
					</div>
				</div>
			</div>
		</section>
		<div class="container">
	<div class="row">
		<div class="col-md-12">
			<h2>Cihazınız BTK Yenilemesi kapsamında mı?</h2>

			
				<div class="row">
					<div class="col-md-12">
						<p class="lead">Cihazınızın yenilemeye uygun olup olmadığı bilgisine bu sayfadan ulaşabilirsiniz.</p>
						<p><span class="label label-info" style="font-size:15px; font-weight:bold">Bilgi:</span>
							IMEI numarasını <b>*#06#</b> tuşlayarak öğrenebilirsiniz.</p>
							<p><span class="label label-warning" style="font-size:15px; font-weight:bold">Bilgi:</span>
								Eğer, sahip olduğunuz IMEI numarası, 15 karakterden kısa ise, başına eksik karakter sayısı kadar, 0 (sıfır) ekleyerek, 15 karaktere tamamlayabilirsiniz.</p>
							</div>
						</div>

						<div class="row">
							<div class="col-md-12">
								<div class="alert alert-info alert-admin">
									<div class="row">
										<div class="col-md-1"></div>
										<div class="col-md-5">
											<form action="#" id="btkform" method="post" autocomplete="off">
												<input type="hidden" name="checkimei" value="1">
												<p>15 Haneli <strong>IMEI</strong> numarasını alttaki alana yazınız.</p>
												<div class="input-group input-group-icon" style="margin-bottom: 10px;">
													<span class="input-group-addon">
														<span class="icon"><i class="fa fa-key"></i></span>
													</span>
													<input class="form-control" type="text" name="imeino" minlength="15" maxlength="15" id="imeino" autocomplete="off" placeholder="IMEI Seri No" value="">
												</div>
												<div style="margin-bottom: 10px;">
													<div id="g-recaptcha-warinq" class="g-recaptcha" data-sitekey="6Ld2d44UAAAAAEevL-wY_JpQQ_y9_CnBuuzf6Bh6"></div>
																									</div>
												<div style="position:absolute; float:left;">
													<span class="arrow vbl hidden-xs hidden-sm hidden-md"
													data-appear-animation="rotateInDownLeft" style="top: -147px; right:-332px"></span>
												</div>
												<button type="submit" class="btn btn-primary" style="width:100%" id="garanti_sorgula">Durum Sorgula</button><br>&nbsp;
											</form>
										</div>
										<div class="col-md-6 visible-md visible-lg">
																									<img class="appear-animation pull-right" src="#" data-appear-animation="bounceInRight">
																											</div>
												</div>
											</div>
										</div>
									</div>
																	</div>
							</div>

							<div class="row">
								<div class="col-md-6"></div>
								<div class="col-md-3">
									<div id='btkloadmsg' style='display:none; text-align:center'>
																							<img src='#'>
																										<br>&nbsp; processing-pls-wait												</div>
											</div>
										</div>
										<div class="row">
											<div class="col-md-3"></div>
											<div class="col-md-9">
												<div id="sonuclar">
																									</div>
											</div>
										</div>
									</div>
	</div>
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
<script src="js/jquery.min.js" data-ver="2.1.3"></script>

<script src="js/minified-footer.js" defer="defer" data-ver="1.0.0"></script>

<script src="js/login.js" defer="defer"></script>
<script src="js/view.contact.js" defer="defer"></script>
<script src="js/write-comment.js" defer="defer"></script>
</body>

</html>
