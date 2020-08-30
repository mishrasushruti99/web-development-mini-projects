<?php
  $weather = "";
  $error = "";
  
  if ($_GET['city']) {
    $city = str_replace(' ', '', $_GET['city']);
    $file_headers = @get_headers("http://www.weather-forecast.com/locations/".$city."/forecasts/latest");
    
    if($file_headers[0] == 'HTTP/1.1 404 Not Found') {
      $error = "That city could not be found.";
    } 
    else { 
      $forecastPage = file_get_contents("http://www.weather-forecast.com/locations/".$city."/forecasts/latest");
      $pageArray = explode('3 Day Weather Forecast Summary:</b><span class="read-more-small"><span class="read-more-content"> <span class="phrase">', $forecastPage);
            
      if (sizeof($pageArray) > 1) {
        $secondPageArray = explode('</span></span></span>', $pageArray[1]);
        if (sizeof($secondPageArray) > 1) {
          $weather = $secondPageArray[0];
        } 
        else {
          $error = "That city could not be found."; 
        } 
      } 
      else {
        $error = "That city could not be found.";
      }
    }   
  }
?>