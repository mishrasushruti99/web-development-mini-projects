<?php
  $weather = "";
  $error = "";
  
  if ($_GET['city']){     
    $urlContents = file_get_contents("http://api.openweathermap.org/data/2.5/weather?q=".urlencode($_GET['city']).",uk&appid=4b6cbadba309b7554491c5dc66401886"); 
    $weatherArray = json_decode($urlContents, true);
    if ($weatherArray['cod'] == 200) {
      $weather = "The weather in ".$_GET['city']." is currently '".$weatherArray['weather'][0]['description']."'. ";
      $tempInCelcius = intval($weatherArray['main']['temp'] - 273);
      $weather .= " The temperature is ".$tempInCelcius."&deg;C and the wind speed is ".$weatherArray['wind']['speed']."m/s.";   
    } 
    else {
      $error = "Could not find city - please try again."; 
    }
  }
?>