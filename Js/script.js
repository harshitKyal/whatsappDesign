$(function(){
    $(".heading-compose").click(function() {
      $(".side-two").css({
        "left": "0"
      });
    });

    $(".newMessage-back").click(function() {
      $(".side-two").css({
        "left": "-100%"
      });
    });

  $("#upload_link").on('click', function(e){
    e.preventDefault();
    $("#upload:hidden").trigger('click');
  });

$('.dropdown-toggle').dropdown()
})