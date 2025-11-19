$(document).ready(function(){
    $('#checkbox').click(function(){
        if($('#submit').attr("disabled")){
            $('#submit').prop("disabled", false);
        }
        else{
            $('#submit').prop("disabled", true);
        }
        
    });

   $("#submit").click(function(){
        //console.log()



    });


        /*$('#feedbackForm').submit(function(f) {
          f.preventDefault();

              console.log("Submit the form.");
              $('#feedbackForm').submit();
              //$('#feedbackForm').submit();

          });*/


      

    $("small").click(function(){
        $("#smallprint").show();
    });

    $("#colourSchemeToggle").click(function(){
        $("body").toggleClass("darkmode");
        $(".standardLink").toggleClass("darkmode");

    });
  });

  window.addEventListener('DOMContentLoaded', () => {
  const audio = document.getElementById('welcomeSound');
  if (!audio) return;

  // attempt to play; catch promise rejection
  audio.play().catch(err => {
    // autoplay blocked — you might show a UI button to "Enable sound"
    console.log('Autoplay blocked:', err);
  });
});
