<?php
     ob_start();
     session_start();
     include_once 'database/baglan.php';

     
     
     $error = false;
     
     if( isset($_POST['update']) ) { 
      
      $email = trim($_POST['email']);
      $email = strip_tags($email);
      $email = htmlspecialchars($email);
      
      $pass = trim($_POST['sifre']);
      $pass = strip_tags($pass);
      $pass = htmlspecialchars($pass);

      $name = trim($_POST['ad']);
      $surname = trim($_POST['soyad']);
      $gsm = trim($_POST['tel']);
      $adres = trim($_POST['adres']);
      
      
      if(empty($email)){
       $error = true;
       $emailError = "Please enter your email address.";
      } else if ( !filter_var($email,FILTER_VALIDATE_EMAIL) ) {
       $error = true;
       $emailError = "Please enter a valid email address.";
      }
      
      if(empty($pass)){
       $error = true;
       $passError = "Please enter your password.";
      }
      
      if (!$error) {
       
       $password = hash('sha256', $pass);
      $id=$_SESSION['id'];
       $res=mysqli_query($baglan,"UPDATE  kullanicilar SET ad='$name',soyad='$surname',email='$email',gsm1='$gsm',adres='$adres',sifre='$pass' WHERE id='$id'");
       
       $sec=mysqli_query($baglan,"SELECT id FROM kullanicilar WHERE ad='$name' AND soyad='$surname'");
       $row=mysqli_fetch_array($sec);
       if( $res ) {
        $_SESSION['user'] = $name."  ".$surname;
        $_SESSION['id']=$row['id'];
        header("Location: index.php");
       } else {
        $errMSG = "Incorrect Credentials, Please try again...";
       }
        
      }
      
     }
    ?>