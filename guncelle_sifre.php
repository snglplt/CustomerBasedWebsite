<?php
 ob_start();
 session_start();
 include_once 'database/baglan.php';
if(isset($_POST['gonder'])){
$sifre1=$_POST['sifre1'];
$sifre2=$_POST['sifre2'];
$eposta=$_POST['eposta'];
if($sifre1==$sifre2){
  $guncelle=mysqli_query($baglan,"UPDATE kullanicilar SET sifre='$sifre1' WHERE email='$eposta'");
  if($guncelle){
    $sec=mysqli_query($baglan,"SELECT ad,soyad,id FROM kullanicilar WHERE email='$eposta'");
       $row=mysqli_fetch_array($sec);
       if( $sec ) {
          $_SESSION['user'] = $row['ad']."  ".$row['soyad'];
          $_SESSION['id']=$row['id'];
          $guncelle="evet";
          header("Location: Anasayfa?guncelle=".$guncelle);
       }else{
        echo "hatalı";
       }
  }

}
else{
  $sifre="Eslesmiyor";
  header('Location: Sifirla?mail='.$eposta.'&sifre='.$sifre);
}}else{
  echo "gonder değil";
}
 ?>