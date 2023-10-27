<?php
     session_start();
     include 'database/baglan.php';

     
     //echo "başarılı";
        
     if( isset($_POST['gonder']) ) { 
      
      $email = trim($_POST['email']);
      $email = strip_tags($email);
      $email = htmlspecialchars($email);
      
      $pass = trim($_POST['pass']);
      $pass = strip_tags($pass);
      $pass = htmlspecialchars($pass);
    
       $res=mysqli_query($baglan,"SELECT id,ad,soyad,kullanici FROM kullanicilar WHERE email='$email' and sifre='$pass'");
       $row=mysqli_fetch_array($res);
       $count = mysqli_num_rows($res);
       
       if( $count == 1 ) {
        if(empty(session_id()) && !headers_sent()){
          session_start();
        }
        $_SESSION['user'] = $row['ad']." ".$row['soyad'];
        $_SESSION['id'] = $row['id'];
        if($row['kullanici']!=""){
          $_SESSION['kullanici']=$row['kullanici'];
          
            $giris="var";
            header("Location: CihazBilgileri?giris=$giris");
          }else{ 
         // echo "kullanici".$_SESSION['kullanici'];
        
        //echo 'giriş yapıldı';
        $giris="Var";
        //echo $_SESSION['kullanici'];
        header("Location: Anasayfa?giris=".$giris);
       } }
       else {
       // echo "Incorrect Credentials, Please try again...";
        
        $giris="Yok";
        //echo 'giriş yapılmadı';
        header("Location: Anasayfa?giris=".$giris);
       }
        }
     
     
      
      
     
    ?>