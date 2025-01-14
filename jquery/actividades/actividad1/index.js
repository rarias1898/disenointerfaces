$(function() {

  $(".login").on("click", function() {
    $("form").css('display', "flex")
  })

  $("input").on("change", function() {
    $("loginBtn").removeAttr("disabled")
  })

}); 