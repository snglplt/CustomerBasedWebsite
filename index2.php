

<?php session_start(); ?>
<!DOCTYPE html>
<html lang="tr">
<head>
  
<link rel="stylesheet" href="./style.css">

<meta http-equiv="content-type" content="text/html;charset=UTF-8">


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
<link rel="stylesheet" href="css/style.css" type="text/css" data-ver="1.0.0">

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
<style>
@keyframes slidy {
0% { left: 0%; }
20% { left: 0%; }
25% { left: -100%; }
45% { left: -100%; }
50% { left: -200%; }
70% { left: -200%; }
75% { left: -300%; }
95% { left: -300%; }
100% { left: -400%; }
}

div #slider { overflow: hidden; }
div #slider figure img { width: 20%; float: left; }
div #slider figure { 
  position: relative;
  width: 100%;
  margin: 0;
  left: 0;
  text-align: left;
  font-size: 0;
  animation: 30s slidy infinite; 
}
---
.slider {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100%;
}

.slider--content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
}

.slider--feature {
  text-align: center;
}

.slider--title {
  font-size: 2.5rem;
  color: #fff;
  text-transform: uppercase;
  font-weight: 700;
}

.slider--text {
  font-size: 1rem;
  color: #fff;
  text-transform: uppercase;
  margin: 0.5rem 0;
}
.slider__btn-right,
.slider__btn-left {
  background: transparent;
  border: none;
  outline: none;
  font-size: 4rem;
  color: #eee;
  padding: 0 1rem;
  cursor: pointer;
  transition: transform 0.1s ease-in-out;
}

.slider--btn {
  background: #fff;
  text-transform: uppercase;
  border: none;
  color: #444;
  border: 1px solid #444;
  outline: none;
  font-weight: 700;
  padding: 0.8rem 2rem;
  cursor: pointer;
}

.slider__btn-left:hover,
.slider__btn-right:hover {
  transform: scale(0.95);
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.fadeIn {
  animation: fadeIn 1s;
}
section.awSlider .carousel{
  display:table;
  z-index:2;
  -moz-box-shadow: 0 0 4px #444;
  -webkit-box-shadow: 0 0 4px #444;
  box-shadow: 0 0 15px rgba(1,1,1,.5);
}

section.awSlider{
  margin:30px auto;
  padding:30px;
  position:relative;
  display:table;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

section.awSlider:hover > img{
  -ms-transform: scale(1.2);
  -webkit-transform: scale(1.2);
  transform: scale(1.2);
  opacity:1;
}

section.awSlider img{
   pointer-events: none;
}

section.awSlider > img{
  position:absolute;
  z-index:1;
  transition:all .3s;
  filter: blur(1.8vw);
  -webkit-filter: blur(2vw);
  -moz-filter: blur(2vw); 
  -o-filter: blur(2vw); 
  -ms-filter: blur(2vw);
  -ms-transform: scale(1.1);
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
  opacity:.5;
}


</style>
<link rel="icon" type="image/x-icon" href="images/fav.png">
<script src="http://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
<link rel="stylesheet" href="sweetalert2.min.css">
<link rel="stylesheet" href="css/whatsapp.css">
</head>
<?php include 'database/baglan.php'; ?>
<body style="background-color:#fff" >



<div class="body">
		<?php include 'inc/nav.php' ?>
<!-- partial:index.partial.html -->
<div class="wrap">
        <div id="dir-control-left" class="dir-control"><i class="fa fa-angle-left fa-5x" aria-hidden="true"></i>
</div>
        <div id="slider">
            <div class="slide slide1">
                <div class="slide-content">
                    <span>Image One</span>
                </div>
            </div>
            <div class="slide slide2">
                <div class="slide-content">
                    <span>Image Two</span>
                </div>
            </div>
            <div class="slide slide3">
                <div class="slide-content">
                    <span>Image Three</span>
                </div>
            </div>
        </div>
        <div id="dir-control-right" class="dir-control"><i class="fa fa-angle-right fa-5x" aria-hidden="true"></i>
</div>
    </div>
<!-- partial -->
  <script  src="./script.js"></script>





		 
    	
	
<!--
Slider Scaling Options, comment/uncomment the desired opening tag
Cover: Fill parent element
Fixed: Predefined width and height, 600x400 for demo
Propotional: Scales to match parent width; options for 4x3, 5x4, and 16x9, and 1.35x1
-->

<div id="app"></div>

<!-- partial -->
  <script src='https://cdnjs.cloudflare.com/ajax/libs/react/15.6.1/react.min.js'></script>
<script src='https://cdnjs.cloudflare.com/ajax/libs/react/15.6.1/react-dom.min.js'></script>
<script src='https://cdnjs.cloudflare.com/ajax/libs/classnames/2.2.5/index.min.js'></script>
<script  src="./script.js"></script>
<script>
class CitiesSlider extends React.Component {
  constructor(props) {
    super(props);

    this.IMAGE_PARTS = 4;

    this.changeTO = null;
    this.AUTOCHANGE_TIME = 4000;

    this.state = { activeSlide: -1, prevSlide: -1, sliderReady: false };
  }

  componentWillUnmount() {
    window.clearTimeout(this.changeTO);
  }

  componentDidMount() {
    this.runAutochangeTO();
    setTimeout(() => {
      this.setState({ activeSlide: 0, sliderReady: true });
    }, 0);
  }

  runAutochangeTO() {
    this.changeTO = setTimeout(() => {
      this.changeSlides(1);
      this.runAutochangeTO();
    }, this.AUTOCHANGE_TIME);
  }

  changeSlides(change) {
    window.clearTimeout(this.changeTO);
    const { length } = this.props.slides;
    const prevSlide = this.state.activeSlide;
    let activeSlide = prevSlide + change;
    if (activeSlide < 0) activeSlide = length - 1;
    if (activeSlide >= length) activeSlide = 0;
    this.setState({ activeSlide, prevSlide });
  }

  render() {
    const { activeSlide, prevSlide, sliderReady } = this.state;
    return /*#__PURE__*/(
      React.createElement("div", { className: classNames('slider', { 's--ready': sliderReady }) }, /*#__PURE__*/
      React.createElement("p", { className: "slider__top-heading" }, ""), /*#__PURE__*/
      React.createElement("div", { className: "slider__slides" },
      this.props.slides.map((slide, index) => /*#__PURE__*/
      React.createElement("div", {
        className: classNames('slider__slide', { 's--active': activeSlide === index, 's--prev': prevSlide === index }),
        key: slide.city }, /*#__PURE__*/

      React.createElement("div", { className: "slider__slide-content" }, /*#__PURE__*/
      React.createElement("h3", { className: "slider__slide-subheading" }, slide.country || slide.city), /*#__PURE__*/
      React.createElement("h2", { className: "slider__slide-heading" },
      slide.city.split('').map(l => /*#__PURE__*/React.createElement("span", null, l))), /*#__PURE__*/

      React.createElement("p", { className: "slider__slide-readmore" }, "")), /*#__PURE__*/

      React.createElement("div", { className: "slider__slide-parts" },
      [...Array(this.IMAGE_PARTS).fill()].map((x, i) => /*#__PURE__*/
      React.createElement("div", { className: "slider__slide-part", key: i }, /*#__PURE__*/
      React.createElement("div", { className: "slider__slide-part-inner", style: { backgroundImage: `url(${slide.img})` } }))))))), /*#__PURE__*/






      React.createElement("div", { className: "slider__control", onClick: () => this.changeSlides(-1) }), /*#__PURE__*/
      React.createElement("div", { className: "slider__control slider__control--right", onClick: () => this.changeSlides(1) })));


  }}

  const slides = [
{
  city: 'DEERMA ',
  img: 'images/slider/DEERMA.jpg' },

{
  city: 'ROBOROCK',
  img: 'images/slider/ROBOROCK.jpg' },

{
  city: 'TMARKT',
  img: 'images/slider/TMARK.jpg' },

{
  city: 'XIAOMI',
  img: 'images/slider/XIAOMI.jpg' },

{
  city: 'VIOMI',
  img: 'images/slider/VIOMI.jpg' }];




ReactDOM.render( /*#__PURE__*/React.createElement(CitiesSlider, { slides: slides }), document.querySelector('#app'));

</script>



<!-- Carousel wrapper -->

<!-- Carousel wrapper -->
<!---   ---->


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


</div>
<a class="scroll-to-whatsapp primary-bg-color" href="https://api.whatsapp.com/send?phone=908504412306&amp;text=Merhaba, size web siteniz aracılığı ile ulaşıyorum." target="_blank"
       style="text-align:center;"><i class="fa fa-whatsapp" style="font-size:25px; padding-top:12px;"></i></a>
<br>
<div class="container" style="background-color:#fff">
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

<script src="js/login.js" defer="defer"></script>
<script src="js/view.contact.js" defer="defer"></script>
<script src="js/write-comment.js" defer="defer"></script>
<script>
	$('section.awSlider .carousel').carousel({
  pause: "hover",
  interval: 2000
});


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
}else{}}
?>
</body>

<!-- Added by HTTrack --><meta http-equiv="content-type" content="text/html;charset=UTF-8"><!-- /Added by HTTrack -->
</html>

