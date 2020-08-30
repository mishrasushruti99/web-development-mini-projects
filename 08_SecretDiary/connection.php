<?php
  $link = mysqli_connect("localhost", "SecretDiary", "username", "password");
  if(mysqli_connect_error()){
    die("Database Connection Error");
  }
?>