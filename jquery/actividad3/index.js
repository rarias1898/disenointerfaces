$(function(){

  $(".btn2").on("click", function() {
    $(".contenido").show()
    $(".btn1").show()
    $(this).hide()
  })

  $(".btn1").on("click", function() {
    $(this).hide()
    $(".btn2").show()
    $(".contenido").hide()
  })
});