"use strict";

(function(){
  $("#find-postcode").click(function(e) {
    e.preventDefault();          
    $.ajax({
      url: "https://maps.googleapis.com/maps/api/geocode/json?address=" + $("#address").val() + "&key=AIzaSyDfjlbPaQ9dftfIc0v118c4HPQEiGWfnPY",
      type: "GET",
      success: function (data) {
        console.log(data);
        if (data["status"] != "OK") {
          $("#message").html('<div class="alert alert-warning" role="alert">Postcode could not be found - please try again.</div>'); 
        } 
        else {
          $.each(data["results"][0]["address_components"], function (key, value) {
              if (value["types"][0] == "postal_code") {
              $("#message").html('<div class="alert alert-success" role="alert"><strong>Postcode found!</strong><br /> Address: ' +  data["results"][0]["formatted_address"] + '<br /> The postcode is ' + value["long_name"] + '.</div>');
              }
              else{
                if(data["results"][0]["formatted_address"]){
                  $("#message").html('<div class="alert alert-warning" role="alert">Postcode could not be found for address: ' + data["results"][0]["formatted_address"] + '<br /> please try again.</div>');
                }
                else{
                  $("#message").html('<div class="alert alert-warning" role="alert">Postcode could not be found - please try again.</div>');
                }
              }
          })
        }
      }
    })
  })
})()