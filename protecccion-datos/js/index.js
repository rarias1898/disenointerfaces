$(document).ready(function() {

  // if (localStorage.getItem("cookie") != 1) {
  //   $(".privacidad").show()
  // }

  // $(".btn").on("click", function() {
  //   $(".privacidad").hide()

  //   localStorage.setItem("cookie", 1)
  // })

  const myModal = new bootstrap.Modal('#myModal', {
    keyboard: false
  })
  myModal.show()

  $("#myModal button").on("click", function() {
    sessionStorage.setItem("cookie", 1)
    myModal.hide()
  })
})