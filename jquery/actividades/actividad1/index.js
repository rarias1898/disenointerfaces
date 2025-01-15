$(function() {

  $(".login").on("click", function() {
    $("form").css('display', "flex")
  })

  $("input").on("input", function() {
    $(".loginBtn").removeAttr("disabled")
  })

  $(".signup").on("click", function() {
    $(".acceso-container").fadeOut("slow", function() {
      $(".cuenta-container").fadeIn("slow")
    })
  })

  $(".proveedor").on("click", function() {
    $(".cuenta-container").fadeOut("slow", function() {
      $(".proveedor-container").fadeIn("slow")
    })
  })

}); 