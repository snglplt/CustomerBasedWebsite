<?php
session_start();
if(isset($_SESSION['user'])==""){
	header('Location: Login');
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
<link rel="icon" type="image/x-icon" href="images/fav.png">
<meta name="description" content="Deerma ve Tmarkt Yetkili Servis, Xiaomi - Viomi - Roborock ve Mijia Özel Servis Tüm ürünlerinize garantili orijinal yedek parça ile teknik servis hizmeti sağlıyoruz ">


<title>Garanti Belgesi</title>

</head>
<body>
	<?php 
	$marka=$_GET['marka'];
	if($marka=="XİAOMİ" || $marka=="xiaomi" || $marka=="XIAOMI"){
		?>
          <iframe src="mi.pdf" width="100%" height="900px" ></iframe>
   <?php
	}else if($marka=="DEERMA" || $marka=="deerma"){
		?>
		<iframe src="deerma.pdf" width="100%" height="900px" ></iframe>
  <?php
	}else if($marka=="TMARKT" || $marka=="tmarkt"){
		?>
		<iframe src="tmarkt.pdf" width="100%" height="900px" ></iframe>
		<?php 
	}else if($marka=="ROBOROCK" || $marka=="roborock" ){
		?>
		<iframe src="roborock.pdf" width="100%" height="900px" ></iframe>
   <?php
	}else if($marka=="VİOMİ" || $marka=="viomi" || $marka=="VIOMI"){?>
			<iframe src="viomi.pdf" width="100%" height="900px" ></iframe>
  <?php
	}else{}
	
?>
</body>

</html>
