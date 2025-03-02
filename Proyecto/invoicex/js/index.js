$(function () {
  if (sessionStorage.getItem("cookie") != 1) {
    $(".privacidad").show();
  }

  $(".btn").on("click", function () {
    $(".privacidad").hide();

    sessionStorage.setItem("cookie", 1);
  });
});
