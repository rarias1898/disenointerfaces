$(function() {

  $(".login").on("click", function() {
    $("form").css('display', "flex")
  })

  $("input").on("input", function() {
    $(".loginBtn").removeAttr("disabled")
  })

}); 