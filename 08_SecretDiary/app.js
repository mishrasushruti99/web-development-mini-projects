"use strict";
(function(){
  $(".toggleForms").click(function(){
    $("#signUpForm").toggle();
    $("#logInForm").toggle();
  });
  
  $("#diary").bind("input propertychange", function(){
    $.ajax({
      method: "POST",
      url: "updateDatabase.php",
      data:{content: $("#diary").val()}
    });
  });
})()