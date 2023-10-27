<?php session_start();
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

<title>VTM TEKNİK</title>

<meta name="robots" content="index, follow">
<meta name="keywords" content="VTM TEKNİK, ">
<meta name="description" content="VTM TEKNİK, ">
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

<script src="js/cdn.jsdelivr.net_npm_sweetalert2@11.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
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
<style>
 
@import url("https://fonts.googleapis.com/css?family=IBM+Plex+Mono|IBM+Plex+Sans:100,700|IBM+Plex+Serif");

.swiper-container {
  padding: 0;
  height: 700px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

@media screen and (max-width: 768px) {
  .swiper-container {
    height: 500px;
  }
}
.swiper-slide {
  width: 100%;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.swiper-slide:after {
  content: "";
  
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 0;
  z-index: 1;
  opacity: 0.3;
}

.swiper-slide:before {
  content: "";
  
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 0;
  z-index: 1;
}

/* swiper arrows */
.swiper-button-prev,
.swiper-button-next {
  width: 50px;
  height: 50px;
  background-image: none;
  display: flex;
  align-items: center;
  justify-content: center;
}



.swiper-button-prev span,
.swiper-button-next span {
  width: 10px;
  height: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  position: absolute;
  border: solid 2px white;
  border-left: 0;
  border-bottom: 0;
  transition: all 0.3s ease;
}

.swiper-button-prev span {
  transform: rotate(-135deg);
  left: 50%;
}

.swiper-button-next span {
  transform: rotate(45deg);
  right: 50%;
}

.swiper-button-prev span:after,
.swiper-button-next span:after {
  content: "";
  position: absolute;
  background-color: white;
  width: 0px;
  height: 2px;
  transition: all 0.3s ease;
  transform: rotate(-45deg);
}

.swiper-button-prev:hover span {
  left: 30%;
}

.swiper-button-next:hover span {
  right: 30%;
}

.swiper-button-prev:hover span:after,
.swiper-button-next:hover span:after {
  width: calc(20px - 4px);
}

/* swiper arrows mobile */
@media screen and (max-width: 768px) {
  .swiper-button-prev {
    left: 0px;
  }

  .swiper-button-next {
    right: 0px;
  }

  .swiper-button-prev:hover span {
    left: 50%;
  }

  .swiper-button-next:hover span {
    right: 50%;
  }

  .swiper-button-prev:hover span:after,
.swiper-button-next:hover span:after {
    display: none;
  }
}
/* swiper pagination */
.swiper-pagination {
  height: 40px;
}

.swiper-pagination-bullet {
  background-color: transparent;
  border: solid 1px white;
  opacity: 1;
  transition: all 0.3s ease-in-out;
}

.swiper-pagination-bullet:hover {
  background-color: white;
}

.swiper-pagination-bullet-active {
  width: 20px;
  border-radius: 50px;
  transition: all 0.3s ease-in-out;
  left: 0;
  background-color: transparent;
  border: solid 1px white;
}

/* text content */
.slide-text {
  text-align: center;
  color: white;
  opacity: 1;
  z-index: 2;
  font-family: "IBM Plex Sans", sans-serif;
  width: 80%;
  max-width: 500px;
}

.slide-text h1 {
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 30px;
  letter-spacing: 0.03em;
}

.slide-text p {
  font-size: 16px;
  font-family: "IBM Plex Mono", monospace;
}

/* text mobile */
@media screen and (max-width: 768px) {
  .slide-text {
    width: 60%;
  }

  .slide-text h1 {
    font-size: 20px;
    letter-spacing: 0.02em;
  }

  .slide-text p {
    font-size: 14px;
  }
}
/* button */
.slide-text .btn {
  font-family: "IBM Plex Mono", monospace;
  background-color: transparent;
  border: solid 1px white;
  padding: 15px 30px;
  min-width: 100px;
  width: fit-content;
  font-size: 14px;
  letter-spacing: 2px;
  color: white;
  position: relative;
  border-radius: 80px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  margin-top: 20px;
}

.slide-text .btn:after {
  content: "";
  background-color: rgba(255, 255, 255, 1);
  width: 100%;
  height: 100%;
  display: block;
  position: absolute;
  z-index: 2;
  left: 0px;
  top: 0px;
  border-radius: inherit;
  transition: all 0.3s ease-in-out;
}

.slide-text .btn:hover::after {
  left: 4px;
  top: 5px;
  background-color: rgba(255, 255, 255, 1);
}

.slide-text .btn:hover {
  font-weight: 800;
}

@media screen and (max-width: 768px) {
  .slide-text .btn:hover::after {
    left: 0px;
    top: 0px;
    background-color: rgba(255, 255, 255, 1);
  }
}
button:focus {
  outline: 0;
}
</style>
<style>


/* Slideshow container */
.slideshow-container {
  max-width: 100%;
  position: relative;
  margin: auto;
}

/* Next & previous buttons */
.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  padding: 16px;
  margin-top: -22px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
}

/* Position the "next button" to the right */
.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}

/* On hover, add a black background color with a little bit see-through */
.prev:hover, .next:hover {
  background-color: rgba(0,0,0,0.8);
}

/* Caption text */
.text {
  color: #f2f2f2;
  font-size: 15px;
  padding: 8px 12px;
  position: absolute;
  bottom: 8px;
  width: 100%;
  text-align: center;
}

/* Number text (1/3 etc) */
.numbertext {
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
}

/* The dots/bullets/indicators */
.dot {
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}

.active, .dot:hover {
  
}

/* Fading animation */
.fade {
  animation-name: fade;
  animation-duration: 2s;
}

@keyframes fade {
  from {opacity: .4} 
  to {opacity: 1}
}

/* On smaller screens, decrease text size */
@media only screen and (max-width: 300px) {
  .prev, .next,.text {font-size: 11px}
}
</style>
<script src="http://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
<link rel="stylesheet" href="sweetalert2.min.css">
<link rel="stylesheet" href="css/whatsapp.css">
<link rel="stylesheet" href="style_y.css">
<link rel='stylesheet' href='css/cdnjs.cloudflare.com_ajax_libs_Swiper_4.4.6_css_swiper.min.css'>

</head>
<?php include 'database/baglan.php'; ?>
<body style="background-color:#fff" >



<div class="body">
		<?php include 'inc/nav.php' ?>
	

    	
	
<!--
Slider Scaling Options, comment/uncomment the desired opening tag
Cover: Fill parent element
Fixed: Predefined width and height, 600x400 for demo
Propotional: Scales to match parent width; options for 4x3, 5x4, and 16x9, and 1.35x1
-->
<!-- partial:index.partial.html -->
<div class="slider">
  <div class="slide_viewer">
    <div class="slide_group">
      <div class="slide1">
      </div>
      <div class="slide1">
      </div>
      <div class="slide1">
      </div>
      <div class="slide1">
      </div>
	  <div class="slide1">
      </div>
    </div>
  </div>
</div><!-- End // .slider -->



<div class="directional_nav">
  <div class="previous_btn" title="Previous">
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="65px" height="65px" viewBox="-11 -11.5 65 66">
      <g>
        <g>
          <path fill="#474544" d="M-10.5,22.118C-10.5,4.132,4.133-10.5,22.118-10.5S54.736,4.132,54.736,22.118
			c0,17.985-14.633,32.618-32.618,32.618S-10.5,40.103-10.5,22.118z M-8.288,22.118c0,16.766,13.639,30.406,30.406,30.406 c16.765,0,30.405-13.641,30.405-30.406c0-16.766-13.641-30.406-30.405-30.406C5.35-8.288-8.288,5.352-8.288,22.118z"/>
          <path fill="#474544" d="M25.43,33.243L14.628,22.429c-0.433-0.432-0.433-1.132,0-1.564L25.43,10.051c0.432-0.432,1.132-0.432,1.563,0	c0.431,0.431,0.431,1.132,0,1.564L16.972,21.647l10.021,10.035c0.432,0.433,0.432,1.134,0,1.564	c-0.215,0.218-0.498,0.323-0.78,0.323C25.929,33.569,25.646,33.464,25.43,33.243z"/>
        </g>
      </g>
    </svg>
  </div>
  <div class="next_btn" title="Next">
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="65px" height="65px" viewBox="-11 -11.5 65 66">
      <g>
        <g>
          <path fill="#474544" d="M22.118,54.736C4.132,54.736-10.5,40.103-10.5,22.118C-10.5,4.132,4.132-10.5,22.118-10.5	c17.985,0,32.618,14.632,32.618,32.618C54.736,40.103,40.103,54.736,22.118,54.736z M22.118-8.288	c-16.765,0-30.406,13.64-30.406,30.406c0,16.766,13.641,30.406,30.406,30.406c16.768,0,30.406-13.641,30.406-30.406 C52.524,5.352,38.885-8.288,22.118-8.288z"/>
          <path fill="#474544" d="M18.022,33.569c 0.282,0-0.566-0.105-0.781-0.323c-0.432-0.431-0.432-1.132,0-1.564l10.022-10.035 			L17.241,11.615c 0.431-0.432-0.431-1.133,0-1.564c0.432-0.432,1.132-0.432,1.564,0l10.803,10.814c0.433,0.432,0.433,1.132,0,1.564 L18.805,33.243C18.59,33.464,18.306,33.569,18.022,33.569z"/>
        </g>
      </g>
    </svg>
  </div>
</div><!-- End // .directional_nav -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
<!-- partial -->
  <script  src="./script_y.js"></script>
<script>
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
</script>
<!-- partial -->


<!-- partial -->
<script  src="script_yeni.js"></script>
  <script src='https://cdnjs.cloudflare.com/ajax/libs/react/15.6.1/react.min.js'></script>
<script src='https://cdnjs.cloudflare.com/ajax/libs/react/15.6.1/react-dom.min.js'></script>
<script src='https://cdnjs.cloudflare.com/ajax/libs/classnames/2.2.5/index.min.js'></script>
<script src='https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.4.6/js/swiper.js'></script>
<script src='https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.4.6/js/swiper.min.js'></script>

<!-- Carousel wrapper -->

<!-- Carousel wrapper -->
<!---   ---->


<script>
	// swiper    
var mySwiper = new Swiper('.swiper-container', {
   effect: '',
   loop: false,
   speed: 1000,
   slidesPerView: 1,
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
   },
   pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: 'true'
   },

  

});

</script>


</div>
<a class="scroll-to-whatsapp primary-bg-color" href="https://api.whatsapp.com/send?phone=908504412306&amp;text=Merhaba, size web siteniz aracılığı ile ulaşıyorum." target="_blank"
       style="text-align:center;"><i class="fa fa-whatsapp" style="font-size:25px; padding-top:12px;"></i></a>
<br>
<div class="container" style="background-color:#fff;margin-top:-15%">
    <div class="row center">
        <div class="col-md-12"><h1 class="short word-rotator-title">
	VTM TEKNİK ile	<strong class="inverted">
		<span class="word-rotate" data-plugin-options='{"delay": 2000, "animDelay": 300}'>
			<span class="word-rotate-items">
				<span>Xiaomi</span>
				<span>Viomi</span>
				<span>Deerma</span>
				<span>Roborock</span>
				<span>Tmarkt</span>
				<span>Mijia</span>
			</span>
		</span>
	</strong>
<br>ve tüm ekosistem ürünleri teknik servis hizmetleri</h1>

</div>
    </div>
</div>

<div class="container">
    <div class="row">
        <hr class="tall" />
    </div>
</div>
<div class="container">
    <div class="row">
        <div class="col-md-12" >
            <h2 style="text-align:center"><strong>VTM TEKNİK</strong> ile ayrıcalıkları yakalayın</h2>
<div class="row">
	<div class="col-sm-4">
		<div class="feature-box">
			<div class="feature-box-icon">
				<i class="fa fa-archive"></i>
			</div>
			<div class="feature-box-info">
				<h4 class="shorter">Ücretsiz Kargo Gönderimi</h4>
				<p class="tall"><a href="ariza-bildirim-formu-ve-servise-urun-gondermek">MNG Kargo</a> ile her yerden kargo gönderimi.</p>
			</div>
		</div>
		<div class="feature-box">
		<div class="homepageicon"><img class="lazy" src="images/kesintisiz.png" 
			alt="7/24 Online Hizmet"></div>
			<div class="feature-box-info">
				<h4 class="shorter">7/24 Online Hizmet</h4>
				<p class="tall">Her an cihazınızı sorgulayabilme imkanı.</p>
			</div>
		</div>
		
	</div>
	<div class="col-sm-4">
		<div class="feature-box">
			<div class="feature-box-icon">
				<i class="fa fa-cogs"></i>
			</div>
			<div class="feature-box-info">
				<h4 class="shorter">Garantili Orjinal Yedek Parça </h4>
				<p class="tall">  %100 distiribütör onaylı orjinal yedek parça.</p>
			</div>
		</div>
		<div class="feature-box">
			<div class="homepageicon"><img class="lazy" src="images/guclualtyapi.png" alt="%100 Müşteri Memnuniyeti"></div>
			<div class="feature-box-info">
				<h4 class="shorter">Teknolojik Altyapı</h4>
				<p class="tall">İleri tekonoloji ile bir adım öndeyiz.</p>
			</div>
		</div>
		
	</div>
	<div class="col-sm-4">
	<div class="feature-box">
			<div class="feature-box-icon">
				<i class="fa fa-headphones"></i>
			</div>
			<div class="feature-box-info">
				<h4 class="shorter">Hızlı ürün Kabulü</h4>
				<p class="tall">Minimum bekleme süresiyle kabul.</p>
			</div>
		</div>
		<div class="feature-box">
			<div class="feature-box-icon">
				<i class="fa fa-group"></i>
			</div>
			<div class="feature-box-info">
				<h4 class="shorter">Profesyonel Ekip</h4>
				<p class="tall">Profesyonel ve alanında uzman kadro.</p>
			</div>
		</div>
		
	</div>
</div>        </div>
        
    </div>
    <hr class="tall">
	<div class="row center"><div class="owl-carousel" data-plugin-options='{"items": 5, "autoplay": true, "autoplayTimeout": 3000, "lazyLoad" : true}'>
	<div><img class="img-responsive owl-lazy" style="width:270px;height:100px;align:center" data-src="images/src/Xiaomi.png" alt="Image: Xiaomi.jpg"></div>
	<div><img class="img-responsive owl-lazy" style="width:270px;height:100px;align:center" data-src="images/src/deerma.png" alt="Image: deerma.jpg"></div>
	<div><img class="img-responsive owl-lazy" style="width:270px;height:100px;align:center" data-src="images/src/rogorock.png" alt="Image: rogorock.jpg"></div>
	<div><img class="img-responsive owl-lazy" style="width:200px;height:50px;margin-top:30px;align:center" data-src="images/src/viomi.png" alt="Image: viomi.jpg"></div>
	<div><img class="img-responsive owl-lazy" style="width:270px;height:100px;margin-left:-10px;align:center" data-src="images/src/tmarkt.jpg" alt="Image: viomi.jpg"></div>
</div>
    <hr class="tall">
    <div class="row center">
        <div class="col-md-12"><h2 class="short word-rotator-title">
	<!--VTM TEKNİK olarak taleplerinize	--><strong>
		<span class="word-rotate" data-plugin-options='{"delay": 3500, "animDelay": 400}'>
			<span class="word-rotate-items">
				<span>kesin çözümler sunuyoruz.</span>
				<span>kaliteli hizmetler üretiyoruz.</span>
				<span>güvenilir çözümler sunuyoruz.</span>
				<span>hızlı hizmetler sunuyoruz.</span>
			</span>
		</span>
	</strong>
	</h2>
</div>
    </div>
  </div>
</div></div>
<div class="container">
	<div class="row center">
		<div class="col-md-12">
			<h2 class="shorter word-rotator-title push-top">
				Servisini Yaptığımız Bazı Ürünler			</h2>
			
		</div>
	</div>
</div>

<div id="myCarouselx" class="carousel slide" data-ride="carousel">
		<!-- Indicators -->
		<ol class="carousel-indicators">
			<li data-target="#myCarouselx" data-slide-to="0" class="active"></li><li data-target="#myCarouselx" data-slide-to="1" ></li><li data-target="#myCarouselx" data-slide-to="2" ></li><li data-target="#myCarouselx" data-slide-to="3" ></li><li data-target="#myCarouselx" data-slide-to="4" ></li><li data-target="#myCarouselx" data-slide-to="5" ></li><li data-target="#myCarouselx" data-slide-to="6" class=""></li><li data-target="#myCarouselx" data-slide-to="7" class=""></li>		</ol>

			<div class="carousel-inner"><div class="item active">
						<ul class="portfolio-list sort-destination full-width"><li class="isotope-item">
					<div class="portfolio-item img-thumbnail">
						<a href="#" class="thumb-info secundary">
							<img class="img-responsive lazy" style="width:250px;height:250px;" src="images/urunler/DeermaUltraviyoleUltrasonicSoğukBuharMakinesiF628S.jpg" 
								style="border: 1px solid #e2e2e2" alt="Image">
							<span class="thumb-info-title">
								<span class="thumb-info-inner">Deerma Ultraviyole Ultrasonic Soğuk Buhar Makinesi F628S</span>
							</span>
							<span class="thumb-info-action">
								<span title="Universal" class="thumb-info-action-icon"><i class="fa fa-globe"></i></span>
							</span>
						</a>
					</div>
				</li><li class="isotope-item">
					<div class="portfolio-item img-thumbnail">
						<a href="#" class="thumb-info secundary">
							<img class="img-responsive lazy" style="width:250px;height:250px;padding:20px" src="images/urunler/DeermaCM800AntibakterialUltraviyole(UVC).jpg" 
								style="border: 1px solid #e2e2e2" alt="Image">
							<span class="thumb-info-title">
								<span class="thumb-info-inner">Deerma CM800 Antibakterial Ultraviyole(UVC)</span>
							</span>
							<span class="thumb-info-action">
								<span title="Universal" class="thumb-info-action-icon"><i class="fa fa-globe"></i></span>
							</span>
						</a>
					</div>
				</li><li class="isotope-item">
					<div class="portfolio-item img-thumbnail">
						<a href="#" class="thumb-info secundary">
							<img class="img-responsive lazy" style="width:250px;height:250px;padding:20px" src="images/urunler/Deerma360DereceDönenSuPüskürtmeliSpreyPaspas.jpeg" 
								style="border: 1px solid #e2e2e2" alt="Image">
							<span class="thumb-info-title">
								<span class="thumb-info-inner">Deerma 360 Derece Dönen Su Püskürtmeli Sprey Paspas</span>
							</span>
							<span class="thumb-info-action">
								<span title="Universal" class="thumb-info-action-icon"><i class="fa fa-globe"></i></span>
							</span>
						</a>
					</div>
				</li><li class="isotope-item">
					<div class="portfolio-item img-thumbnail">
						<a href="#" class="thumb-info secundary">
							<img class="img-responsive lazy" style="width:250px;height:250px;padding:20px" src="images/urunler/DeermaUltrasonikSoğukHavaNemlendiriciF500.jpeg" 
								style="border: 1px solid #e2e2e2" alt="Image">
							<span class="thumb-info-title">
								<span class="thumb-info-inner">Deerma Ultrasonik Soğuk Hava Nemlendirici F500 </span>
							</span>
							<span class="thumb-info-action">
								<span title="Universal" class="thumb-info-action-icon"><i class="fa fa-globe"></i></span>
							</span>
						</a>
					</div>
				</li><li class="isotope-item">
					<div class="portfolio-item img-thumbnail">
						<a href="#" class="thumb-info secundary">
							<img class="img-responsive lazy" style="width:250px;height:250px;" src="images/urunler/DeermaDijitalÜsttenDolumUltrasonikSoğukBuharMakinesiF60W.jpg" 
								style="border: 1px solid #e2e2e2" alt="Image">
							<span class="thumb-info-title">
								<span class="thumb-info-inner">Deerma Dijital Üstten Dolum Ultrasonik Soğuk Buhar Makinesi F60W</span>
							</span>
							<span class="thumb-info-action">
								<span title="Universal" class="thumb-info-action-icon"><i class="fa fa-globe"></i></span>
							</span>
						</a>
					</div>
				</li></ul>
					</div>
			<!--- -->
		<div class="item ">
						<ul class="portfolio-list sort-destination full-width"><li class="isotope-item">
					<div class="portfolio-item img-thumbnail">
						<a href="#" class="thumb-info secundary">
							<img class="img-responsive lazy" src="images/urunler/137064-1_large.webp" 
								style="border: 1px solid #e2e2e2" alt="Image">
							<span class="thumb-info-title">
								<span class="thumb-info-inner">Xiaomi S10 T</span>
							</span>
							<span class="thumb-info-action">
								<span title="Universal" class="thumb-info-action-icon"><i class="fa fa-globe"></i></span>
							</span>
						</a>
					</div>
				</li><li class="isotope-item">
					<div class="portfolio-item img-thumbnail">
						<a href="#" class="thumb-info secundary">
							<img class="img-responsive lazy" style="width:250px;height:250px;padding:20px" src="images/urunler/saat.webp" 
								style="border: 1px solid #e2e2e2" alt="Image">
							<span class="thumb-info-title">
								<span class="thumb-info-inner">Xiaomi Watch S1 GL Siyah Akıllı Saat</span>
							</span>
							<span class="thumb-info-action">
								<span title="Universal" class="thumb-info-action-icon"><i class="fa fa-globe"></i></span>
							</span>
						</a>
					</div>
				</li><li class="isotope-item">
					<div class="portfolio-item img-thumbnail">
						<a href="#" class="thumb-info secundary">
							<img class="img-responsive lazy" style="width:250px;height:250px;padding:20px" src="images/urunler/deerma_kz100_firitos.jpg" 
								style="border: 1px solid #e2e2e2" alt="Image">
							<span class="thumb-info-title">
								<span class="thumb-info-inner">DEERMA KZ100</span>
							</span>
							<span class="thumb-info-action">
								<span title="Universal" class="thumb-info-action-icon"><i class="fa fa-globe"></i></span>
							</span>
						</a>
					</div>
				</li><li class="isotope-item">
					<div class="portfolio-item img-thumbnail">
						<a href="#" class="thumb-info secundary">
							<img class="img-responsive lazy" style="width:250px;height:250px;padding:20px" src="images/urunler/Deerma CM800.webp" 
								style="border: 1px solid #e2e2e2" alt="Image">
							<span class="thumb-info-title">
								<span class="thumb-info-inner">DEERMA CM800</span>
							</span>
							<span class="thumb-info-action">
								<span title="Universal" class="thumb-info-action-icon"><i class="fa fa-globe"></i></span>
							</span>
						</a>
					</div>
				</li><li class="isotope-item">
					<div class="portfolio-item img-thumbnail">
						<a href="#" class="thumb-info secundary">
							<img class="img-responsive lazy" src="images/urunler/deerma-vc40-3.jpg" 
								style="border: 1px solid #e2e2e2" alt="Image">
							<span class="thumb-info-title">
								<span class="thumb-info-inner">DEERMA VC40-3</span>
							</span>
							<span class="thumb-info-action">
								<span title="Universal" class="thumb-info-action-icon"><i class="fa fa-globe"></i></span>
							</span>
						</a>
					</div>
				</li></ul>
					</div>
					<!-- -->
					<div class="item ">
						<ul class="portfolio-list sort-destination full-width"><li class="isotope-item">
					<div class="portfolio-item img-thumbnail">
						<a href="#" class="thumb-info secundary">
							<img class="img-responsive lazy" src="images/urunler/mop_2_pro.jpg" 
								style="border: 1px solid #e2e2e2" alt="Image">
							<span class="thumb-info-title">
								<span class="thumb-info-inner">XIAOMI MOP PRO 2</span>
							</span>
							<span class="thumb-info-action">
								<span title="Universal" class="thumb-info-action-icon"><i class="fa fa-globe"></i></span>
							</span>
						</a>
					</div>
				</li><li class="isotope-item">
					<div class="portfolio-item img-thumbnail">
						<a href="#" class="thumb-info secundary">
							<img class="img-responsive lazy" data-src="images/urunler/Deerma_VC20Pro_handheld_vaccum_cleaner_blue1.png" 
								style="border: 1px solid #e2e2e2" alt="Image">
							<span class="thumb-info-title">
								<span class="thumb-info-inner">DEERMA VC20 PRO VACCUM</span>
							</span>
							<span class="thumb-info-action">
								<span title="Universal" class="thumb-info-action-icon"><i class="fa fa-globe"></i></span>
							</span>
						</a>
					</div>
				</li><li class="isotope-item">
					<div class="portfolio-item img-thumbnail">
						<a href="#" class="thumb-info secundary">
							<img style="width:250px;height:250px;padding:20px" class="img-responsive lazy" src="images/urunler/roborock_q7.jpg" 
								style="border: 1px solid #e2e2e2" alt="Image">
							<span class="thumb-info-title">
								<span class="thumb-info-inner">ROBOROCK Q7</span>
							</span>
							<span class="thumb-info-action">
								<span title="Universal" class="thumb-info-action-icon"><i class="fa fa-globe"></i></span>
							</span>
						</a>
					</div>
				</li><li class="isotope-item">
					<div class="portfolio-item img-thumbnail">
						<a href="#" class="thumb-info secundary">
							<img style="width:250px;height:250px;padding:20px" class="img-responsive lazy" src="images/urunler/g11_xiomi.jpg" 
								style="border: 1px solid #e2e2e2" alt="Image">
							<span class="thumb-info-title">
								<span class="thumb-info-inner">XIAOMI G11</span>
							</span>
							<span class="thumb-info-action">
								<span title="Universal" class="thumb-info-action-icon"><i class="fa fa-globe"></i></span>
							</span>
						</a>
					</div>
				</li><li class="isotope-item">
					<div class="portfolio-item img-thumbnail">
						<a href="#" class="thumb-info secundary">
							<img style="width:250px;height:250px;padding:20px" class="img-responsive lazy" src="images/urunler/tmarkt_air.jpg" 
								style="border: 1px solid #e2e2e2" alt="Image">
							<span class="thumb-info-title">
								<span class="thumb-info-inner">TMARKT AIR FIRE</span>
							</span>
							<span class="thumb-info-action">
								<span title="Universal" class="thumb-info-action-icon"><i class="fa fa-globe"></i></span>
							</span>
						</a>
					</div>
				</li>
				
			</ul>
			
					</div>
				<!--  ---->
				<div class="item ">
						<ul class="portfolio-list sort-destination full-width"><li class="isotope-item">
					<div class="#">
						<a href="trend-products/galaxy-a10.html" class="thumb-info secundary">
							<img class="img-responsive lazy" src="images/urunler/s_7_roborock.jpg" 
								style="border: 1px solid #e2e2e2" alt="Image">
							<span class="thumb-info-title">
								<span class="thumb-info-inner">ROBOROCK S7</span>
							</span>
							<span class="thumb-info-action">
								<span title="Universal" class="thumb-info-action-icon"><i class="fa fa-globe"></i></span>
							</span>
						</a>
					</div>
				</li><li class="isotope-item">
					<div class="portfolio-item img-thumbnail">
						<a href="#" class="thumb-info secundary">
							<img class="img-responsive lazy" data-src="images/urunler/siyah_air.jpg" 
								style="border: 1px solid #e2e2e2" alt="Image">
							<span class="thumb-info-title">
								<span class="thumb-info-inner">XIAOMI AIR FIRE</span>
							</span>
							<span class="thumb-info-action">
								<span title="Universal" class="thumb-info-action-icon"><i class="fa fa-globe"></i></span>
							</span>
						</a>
					</div>
				</li><li class="isotope-item">
					<div class="portfolio-item img-thumbnail">
						<a href="#" class="thumb-info secundary">
							<img style="width:250px;height:250px;padding:20px" class="img-responsive lazy" src="images/urunler/Xiaomi Mi Band 6.jpg" 
								style="border: 1px solid #e2e2e2" alt="Image">
							<span class="thumb-info-title">
								<span class="thumb-info-inner">XIAOMI MI BAND 6</span>
							</span>
							<span class="thumb-info-action">
								<span title="Universal" class="thumb-info-action-icon"><i class="fa fa-globe"></i></span>
							</span>
						</a>
					</div>
				</li><li class="isotope-item">
					<div class="portfolio-item img-thumbnail">
						<a href="#" class="thumb-info secundary">
							<img style="width:250px;height:250px;padding:20px" class="img-responsive lazy" src="images/urunler/beyaz_air.webp" 
								style="border: 1px solid #e2e2e2" alt="Image">
							<span class="thumb-info-title">
								<span class="thumb-info-inner">XIAOMI AIR FIRE</span>
							</span>
							<span class="thumb-info-action">
								<span title="Universal" class="thumb-info-action-icon"><i class="fa fa-globe"></i></span>
							</span>
						</a>
					</div>
				</li><li class="isotope-item">
					<div class="portfolio-item img-thumbnail">
						<a href="#" class="thumb-info secundary">
							<img style="width:250px;height:250px;padding:20px" class="img-responsive lazy" src="images/urunler/mijia_tuy.jpg" 
								style="border: 1px solid #e2e2e2" alt="Image">
							<span class="thumb-info-title">
								<span class="thumb-info-inner">XIAOMI MIJIA TUY TOPLAMA</span>
							</span>
							<span class="thumb-info-action">
								<span title="Universal" class="thumb-info-action-icon"><i class="fa fa-globe"></i></span>
							</span>
						</a>
					</div>
				</li>
				
			</ul>
			
					</div>
				<!-- --->
				<!--  ---->
				<div class="item ">
						<ul class="portfolio-list sort-destination full-width"><li class="isotope-item">
					<div class="portfolio-item img-thumbnail">
						<a href="#" class="thumb-info secundary">
							<img class="img-responsive lazy" src="images/urunler/viomi_s_.webp" 
								style="border: 1px solid #e2e2e2" alt="Image">
							<span class="thumb-info-title">
								<span class="thumb-info-inner">VIOMI S</span>
							</span>
							<span class="thumb-info-action">
								<span title="Universal" class="thumb-info-action-icon"><i class="fa fa-globe"></i></span>
							</span>
						</a>
					</div>
				</li><li class="isotope-item">
					<div class="portfolio-item img-thumbnail">
						<a href="#" class="thumb-info secundary">
							<img class="img-responsive lazy" data-src="images/urunler/xiaomi_yag.jpg" 
								style="border: 1px solid #e2e2e2" alt="Image">
							<span class="thumb-info-title">
								<span class="thumb-info-inner">XIAOMI MI 2 YAĞ ÖLÇER</span>
							</span>
							<span class="thumb-info-action">
								<span title="Universal" class="thumb-info-action-icon"><i class="fa fa-globe"></i></span>
							</span>
						</a>
					</div>
				</li><li class="isotope-item">
					<div class="portfolio-item img-thumbnail">
						<a href="#" class="thumb-info secundary">
							<img style="width:250px;height:250px;padding:20px" class="img-responsive lazy" src="images/urunler/viomi_supurge.webp" 
								style="border: 1px solid #e2e2e2" alt="Image">
							<span class="thumb-info-title">
								<span class="thumb-info-inner">VIOMI SÜPÜRGE</span>
							</span>
							<span class="thumb-info-action">
								<span title="Universal" class="thumb-info-action-icon"><i class="fa fa-globe"></i></span>
							</span>
						</a>
					</div>
				</li><li class="isotope-item">
					<div class="portfolio-item img-thumbnail">
						<a href="#" class="thumb-info secundary">
							<img style="width:250px;height:250px;padding:20px" class="img-responsive lazy" src="images/urunler/Xiaomi Smart Camera C300.jpg" 
								style="border: 1px solid #e2e2e2" alt="Image">
							<span class="thumb-info-title">
								<span class="thumb-info-inner">XIAOMI SMART CAMERA </span>
							</span>
							<span class="thumb-info-action">
								<span title="Universal" class="thumb-info-action-icon"><i class="fa fa-globe"></i></span>
							</span>
						</a>
					</div>
				</li><li class="isotope-item">
					<div class="portfolio-item img-thumbnail">
						<a href="#" class="thumb-info secundary">
							<img style="width:250px;height:250px;padding:20px" class="img-responsive lazy" src="images/urunler/Xiaomi Mi True Wireless Earbuds Basic.jpg" 
								style="border: 1px solid #e2e2e2" alt="Image">
							<span class="thumb-info-title">
								<span class="thumb-info-inner">XIAOMI MI WIRELESS EARBUDS BASIC</span>
							</span>
							<span class="thumb-info-action">
								<span title="Universal" class="thumb-info-action-icon"><i class="fa fa-globe"></i></span>
							</span>
						</a>
					</div>
				</li>
				
			</ul>
			
					</div>
				<!-- --->
				<!--  ---->
				<div class="item ">
						<ul class="portfolio-list sort-destination full-width"><li class="isotope-item">
					<div class="portfolio-item img-thumbnail">
						<a href="#" class="thumb-info secundary">
							<img class="img-responsive lazy" src="images/urunler/viomi-v2-3.jpg" 
								style="border: 1px solid #e2e2e2" alt="Image">
							<span class="thumb-info-title">
								<span class="thumb-info-inner">VIOMI V2 3</span>
							</span>
							<span class="thumb-info-action">
								<span title="Universal" class="thumb-info-action-icon"><i class="fa fa-globe"></i></span>
							</span>
						</a>
					</div>
				</li><li class="isotope-item">
					<div class="portfolio-item img-thumbnail">
						<a href="#" class="thumb-info secundary">
							<img class="img-responsive lazy" data-src="images/urunler/Xiaomi Mi Box S 4K Android Tv Box.jpg" 
								style="border: 1px solid #e2e2e2" alt="Image">
							<span class="thumb-info-title">
								<span class="thumb-info-inner">XIAOMI MI BOX S 4K</span>
							</span>
							<span class="thumb-info-action">
								<span title="Universal" class="thumb-info-action-icon"><i class="fa fa-globe"></i></span>
							</span>
						</a>
					</div>
				</li><li class="isotope-item">
					<div class="portfolio-item img-thumbnail">
						<a href="#" class="thumb-info secundary">
							<img style="width:250px;height:250px;padding:20px" class="img-responsive lazy" src="images/urunler/Xiaomi Mi Watch Lite.webp" 
								style="border: 1px solid #e2e2e2" alt="Image">
							<span class="thumb-info-title">
								<span class="thumb-info-inner">XIAOMI MI WHATCH LITE</span>
							</span>
							<span class="thumb-info-action">
								<span title="Universal" class="thumb-info-action-icon"><i class="fa fa-globe"></i></span>
							</span>
						</a>
					</div>
				</li><li class="isotope-item">
					<div class="portfolio-item img-thumbnail">
						<a href="#" class="thumb-info secundary">
							<img style="width:250px;height:250px;padding:20px" class="img-responsive lazy" src="images/urunler/Xiaomi Redmi Buds 3.jpg" 
								style="border: 1px solid #e2e2e2" alt="Image">
							<span class="thumb-info-title">
								<span class="thumb-info-inner">XIAOMI REDMI BUDS 3</span>
							</span>
							<span class="thumb-info-action">
								<span title="Universal" class="thumb-info-action-icon"><i class="fa fa-globe"></i></span>
							</span>
						</a>
					</div>
				</li><li class="isotope-item">
					<div class="portfolio-item img-thumbnail">
						<a href="#" class="thumb-info secundary">
							<img style="width:250px;height:250px;padding:20px" class="img-responsive lazy" src="images/urunler/viomi-v5-akilli-robot-supurge-akilli-robot-supurge-250-30-B.jpg" 
								style="border: 1px solid #e2e2e2" alt="Image">
							<span class="thumb-info-title">
								<span class="thumb-info-inner">VIOMI V5 AKILLI ROBOT SÜPÜRGE</span>
							</span>
							<span class="thumb-info-action">
								<span title="Universal" class="thumb-info-action-icon"><i class="fa fa-globe"></i></span>
							</span>
						</a>
					</div>
				</li>
				
			</ul>
			
					</div>
				<!-- --->
				<!--  ---->
				<div class="item ">
						<ul class="portfolio-list sort-destination full-width"><li class="isotope-item">
					<div class="portfolio-item img-thumbnail">
						<a href="#" class="thumb-info secundary">
							<img class="img-responsive lazy" src="images/urunler/viomi-se-2.jpg" 
								style="border: 1px solid #e2e2e2" alt="Image">
							<span class="thumb-info-title">
								<span class="thumb-info-inner">VIOMI SE 2</span>
							</span>
							<span class="thumb-info-action">
								<span title="Universal" class="thumb-info-action-icon"><i class="fa fa-globe"></i></span>
							</span>
						</a>
					</div>
				</li><li class="isotope-item">
					<div class="portfolio-item img-thumbnail">
						<a href="#" class="thumb-info secundary">
							<img class="img-responsive lazy" data-src="images/urunler/xiaomi_hava1.jpg" 
								style="border: 1px solid #e2e2e2" alt="Image">
							<span class="thumb-info-title">
								<span class="thumb-info-inner">XIAOMI HAVALANDIRMA</span>
							</span>
							<span class="thumb-info-action">
								<span title="Universal" class="thumb-info-action-icon"><i class="fa fa-globe"></i></span>
							</span>
						</a>
					</div>
				</li><li class="isotope-item">
					<div class="portfolio-item img-thumbnail">
						<a href="#" class="thumb-info secundary">
							<img style="width:250px;height:250px;padding:20px" class="img-responsive lazy" src="images/urunler/xiaomi.webp" 
								style="border: 1px solid #e2e2e2" alt="Image">
							<span class="thumb-info-title">
								<span class="thumb-info-inner">XIAOMI SUPURGE</span>
							</span>
							<span class="thumb-info-action">
								<span title="Universal" class="thumb-info-action-icon"><i class="fa fa-globe"></i></span>
							</span>
						</a>
					</div>
				</li><li class="isotope-item">
					<div class="portfolio-item img-thumbnail">
						<a href="#" class="thumb-info secundary">
							<img style="width:250px;height:250px;padding:20px" class="img-responsive lazy" src="images/urunler/v_2_pro_viomi.jpg" 
								style="border: 1px solid #e2e2e2" alt="Image">
							<span class="thumb-info-title">
								<span class="thumb-info-inner">VIOMI V 2 PRO</span>
							</span>
							<span class="thumb-info-action">
								<span title="Universal" class="thumb-info-action-icon"><i class="fa fa-globe"></i></span>
							</span>
						</a>
					</div>
				</li><li class="isotope-item">
					<div class="portfolio-item img-thumbnail">
						<a href="#" class="thumb-info secundary">
							<img style="width:250px;height:250px;padding:20px" class="img-responsive lazy" src="images/urunler/Xiaomi FlipBuds Pro.jpg" 
								style="border: 1px solid #e2e2e2" alt="Image">
							<span class="thumb-info-title">
								<span class="thumb-info-inner">XIAOMI FLIPBUDS PRO</span>
							</span>
							<span class="thumb-info-action">
								<span title="Universal" class="thumb-info-action-icon"><i class="fa fa-globe"></i></span>
							</span>
						</a>
					</div>
				</li>
				
			</ul>
			
					</div>
				<!-- --->
				<!--  ---->
				<div class="item ">
						<ul class="portfolio-list sort-destination full-width"><li class="isotope-item">
					<div class="portfolio-item img-thumbnail">
						<a href="#" class="thumb-info secundary">
							<img style="width:250px;height:250px;padding:20px" class="img-responsive lazy" src="images/urunler/xiaomi-mi-pro-4.jpg" 
								style="border: 1px solid #e2e2e2" alt="Image">
							<span class="thumb-info-title">
								<span class="thumb-info-inner">XIAOMI MI PRO 4</span>
							</span>
							<span class="thumb-info-action">
								<span title="Universal" class="thumb-info-action-icon"><i class="fa fa-globe"></i></span>
							</span>
						</a>
					</div>
				</li><li class="isotope-item">
					<div class="portfolio-item img-thumbnail">
						<a href="#" class="thumb-info secundary">
							<img style="width:250px;height:250px;padding:20px" class="img-responsive lazy" data-src="images/urunler/Xiaomi Smart Kamera C200 360° Full Hd 1080P.webp" 
								style="border: 1px solid #e2e2e2" alt="Image">
							<span class="thumb-info-title">
								<span class="thumb-info-inner">XIAOMI SMART KAMERA C200</span>
							</span>
							<span class="thumb-info-action">
								<span title="Universal" class="thumb-info-action-icon"><i class="fa fa-globe"></i></span>
							</span>
						</a>
					</div>
				</li><li class="isotope-item">
					<div class="portfolio-item img-thumbnail">
						<a href="#" class="thumb-info secundary">
							<img style="width:250px;height:250px;padding:20px" style="width:250px;height:250px;padding:20px" class="img-responsive lazy" src="images/urunler/Xiaomi Mi TV Stick 1080P Android TV.webp" 
								style="border: 1px solid #e2e2e2" alt="Image">
							<span class="thumb-info-title">
								<span class="thumb-info-inner">XIAOMI MI TV STICK</span>
							</span>
							<span class="thumb-info-action">
								<span title="Universal" class="thumb-info-action-icon"><i class="fa fa-globe"></i></span>
							</span>
						</a>
					</div>
				</li><li class="isotope-item">
					<div class="portfolio-item img-thumbnail">
						<a href="#" class="thumb-info secundary">
							<img style="width:250px;height:250px;padding:20px" style="width:250px;height:250px;padding:20px" class="img-responsive lazy" src="images/urunler/ximoi_s10t.webp" 
								style="border: 1px solid #e2e2e2" alt="Image">
							<span class="thumb-info-title">
								<span class="thumb-info-inner">XIAOMI S10T</span>
							</span>
							<span class="thumb-info-action">
								<span title="Universal" class="thumb-info-action-icon"><i class="fa fa-globe"></i></span>
							</span>
						</a>
					</div>
				</li><li class="isotope-item">
					<div class="portfolio-item img-thumbnail">
						<a href="#" class="thumb-info secundary">
							<img style="width:250px;height:250px;padding:20px" style="width:250px;height:250px;padding:20px" class="img-responsive lazy" src="images/urunler/Xiaomi Mi Home Full HD 1080p.jpeg" 
								style="border: 1px solid #e2e2e2" alt="Image">
							<span class="thumb-info-title">
								<span class="thumb-info-inner">XIAOMI MI HOME FULL HD 1080p</span>
							</span>
							<span class="thumb-info-action">
								<span title="Universal" class="thumb-info-action-icon"><i class="fa fa-globe"></i></span>
							</span>
						</a>
					</div>
				</li>
				
			</ul>
			
					</div>
				<!-- --->
				</div>

		<!-- Left and right controls -->
		<a class="left carousel-control" href="#myCarouselx" data-slide="prev">
			<span class="glyphicon glyphicon-chevron-left"></span>
			<span class="sr-only">Previous</span>
		</a>
		<a class="right carousel-control " href="#myCarouselx" data-slide="next">
			<span class="glyphicon glyphicon-chevron-right"></span>
			<span class="sr-only">Next</span>
		</a>

	</div>
<div>
    <section class="featured footer map lazy">
        <div class="container">
            <div class="row">
                <div class="col-md-6"><div class="recent-posts push-bottom">
	
</div></div>

        </div>
    </section>
</div>
	</div>
	<?php include 'inc/footer.php';?>
</div>
<?php
if(isset($_GET['kayit']))
if($_GET['kayit']=="evet"){
echo "<script>
Swal.fire({
  icon: 'success',
  title: 'Başarılı!',
  text: 'Cihazınız başarıyla kaydedilmiştir',
  confirmButtonText:'Tamam',
});
</script>";
}else if($_GET['kayit']=="hayır"){
	echo "<script>
Swal.fire({
  icon: 'warning',
  title: 'Uyarı!',
  text: 'Cihazınız kaydedilmedi',
  confirmButtonText:'Tamam',
});
</script>";
}
if(isset($_GET['guncelle'])){
$guncelle=$_GET['guncelle'];
if($guncelle=="evet"){
	echo "<script>
Swal.fire({
  icon: 'success',
  title: 'Başarılı!',
  text: 'Şifreniz Güncellenmiştir',
  confirmButtonText:'Tamam',
});
</script>";
}else{}}
?>
<script>
document.addEventListener("DOMContentLoaded", function(event) {
	jQuery('.lazy').Lazy();
});

</script>
<script src="js/jquery.min.js" data-ver="2.1.3"></script>

<script src="js/minified-footer.js" defer="defer" data-ver="1.0.0"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>

<script src="js/login.js" defer="defer"></script>
<script src="js/view.contact.js" defer="defer"></script>
<script src="js/write-comment.js" defer="defer"></script>

<?php
if(isset($_GET['giris'])){
$giris=$_GET['giris'];
if($giris=="Var"){
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
if(isset($_GET['kayitdurumu'])){
$varYok=$_GET['kayitdurumu'];
if($varYok=="basarisiz"){
	echo "<script>
          Swal.fire({
            icon: 'warning',
            title: 'Uyarı!',
            text: 'Kullanıcı oluşturulamadı',
            confirmButtonText:'Tamam',
          });
          </script>";
}else if($varYok=="basarili"){
	echo"	
	<script>
          Swal.fire({
            icon: 'success',
            title: 'Başarılı!',
            text: 'Kullanıcı başarıyla oluşturuldu',
            confirmButtonText:'Tamam',
          });
          </script>";
}else if($varYok=="kayitVar"){
	echo"	
	<script>
          Swal.fire({
            icon: 'warning',
            title: 'Uyarı!',
            text: 'Bu kullanıcı adına kayıtlı kullanıcı vardır',
            confirmButtonText:'Tamam',
          });
          </script>";
}
else if($varYok=="kvk"){
	echo"	
	<script>
          Swal.fire({
            icon: 'warning',
            title: 'Uyarı!',
            text: 'KVKK Metnini Onaylayınız!',
            confirmButtonText:'Tamam',
          });
          </script>";
}else{}}
?>
</body>

<!-- Added by HTTrack --><meta http-equiv="content-type" content="text/html;charset=UTF-8"><!-- /Added by HTTrack -->
</html>
