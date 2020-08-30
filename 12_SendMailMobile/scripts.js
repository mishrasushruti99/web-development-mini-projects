App.controller('home', function (page) {
  if (typeof localStorage !== 'undefined') {    
    $(page).find("#new-user")
      .clickable()
      .click(function () {
        if (localStorage.getItem("recipient-email") !== null) {
          localStorage.removeItem("recipient-email"); 
        }
        App.load("sendemail");
    })
      
    if (localStorage.getItem("recipient-list") !== null) {
      var recipientList = JSON.parse(localStorage.getItem("recipient-list"));
      $.each(recipientList, function( index, value ) {
          $(page).find("#contact-list").append('<div class="app-button redirect">' + value + '</div>');
      });
      $(page).find("#contact-list").show();
      $(page).find(".redirect")
        .clickable()
        .on("click", function() {       
          localStorage.setItem("recipient-email", $(this).html());
          App.load('sendemail');
        }); 
    } 
    else {       
      $(page).find("#contact-list").hide();
    } 
  }
});

App.controller('sendemail', function (page) {
  $(page).find("#message").hide();
  if (typeof localStorage !== 'undefined') {
    if (localStorage.getItem("sender-email") !== null) {
      $(page).find("#sender-email").val(localStorage.getItem("sender-email"));    
    }
    if (localStorage.getItem("recipient-email") !== null) { 
      $(page).find("#recipient-email").val(localStorage.getItem("recipient-email"));    
    }   
  }
 
  $(page).find('#send-button')
    .clickable()
    .on('click', function () {
      $.ajax({
          type: 'GET',
          url: 'http://completewebdevelopercourse.com/content/9-mobileapps/sendemail.php?callback=response',
          data: { to: $("#recipient-email").val(), from: $("#sender-email").val(), subject: $("#subject").val(), content: $("#content").val()},
          dataType: 'jsonp',
          timeout: 300,
          context: $('body'),
          success: function(data){
            if (data.success == true) {
              $(page).find("#message").html("Your email was sent successfully!").show();
            }
            else {
              $(page).find("#message").html("Your email could not be sent - please try again later.").show();
            }
          },
          error: function(xhr, type){
            $(page).find("#message").html("Your email could not be sent - please try again later.").show();     
          }
      })
      
    if (typeof localStorage !== 'undefined') {     
      localStorage.setItem("sender-email", $("#sender-email").val());
      var recipientList = new Array();
      if (localStorage.getItem("recipient-list") !== null) {
        recipientList = JSON.parse(localStorage.getItem("recipient-list"));       
      }
      if ($.inArray($("#recipient-email").val(), recipientList) == -1) {           
        recipientList.push($("#recipient-email").val());
        recipientList.sort();
        localStorage.setItem("recipient-list", JSON.stringify(recipientList));
        console.log(recipientList); 
      }    
    } 
    else {
      console.log("Couldn\'t save data")  
    } 
  });
});

try {
  App.restore();
} 
catch (err) {
  App.load('home');
}