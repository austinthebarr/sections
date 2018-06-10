$(function() {
  $(".clickable").click(function(){
    var teslas = ["tesla", "tesla2"];
    teslas.forEach(function(tesla){
    $("." + tesla).toggle();
  });
    // $(".tesla").slideToggle()
    // $(".tesla2") .slideToggle()
  });

    $(".hurt").click(function(){
      var hellish = ["hell", "hidden"];
      hellish.forEach(function(hell){
        $(".js-" + hell).fadeToggle();
      });
    // $(".js-hell").fadeToggle()
    // $(".js-hidden").fadeToggle()
  });
});
