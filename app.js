$(document).ready(function () { 


    $('#buttonIndex').click(function() {
        // animate content
        // $('.page__style').addClass('animate_content');
        $('#containerIndex').fadeOut(500).fadeIn(300);
        
        
      })
      
      setTimeout(function() {
        window.location = "aboutMe.html"
    })

});