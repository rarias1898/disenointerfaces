$(function () {
  if (sessionStorage.getItem("cookie") != 1) {
    $(".privacidad").show();

    $(".toblur").addClass("blur");
  }

  $(".btn").on("click", function () {
    $(".privacidad").hide();
    $(".toblur").removeClass("blur");

    sessionStorage.setItem("cookie", 1);
  });
});
