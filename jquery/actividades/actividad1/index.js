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

  $(".cliente").on("click", function() {
    $(".cuenta-container").fadeOut("slow", function() {
      $(".cliente-container").fadeIn("slow")
    })
  })

  $(".uniForm input").on("blur", function () {
    const $input = $(this);
    const $errorMessage = $input.next(".error-message");

    if ($input.val().trim() === "") {
        $input.addClass("error");
        $errorMessage.show();
    } else {
        $input.removeClass("error");
        $errorMessage.hide();
    }
  });

  $(".nombre").on("input", function() {
    $(".correo").on("input", function() {
      $(".password").on("input", function() {
        $(".repitPassword").on("input", function() {
          $(".confirm").on("input", function() {
            $(".boton-cliente").removeAttr("disabled")
          })
        })
      })
    })
  })

  $(".boton-cliente").on("click", function() {

  })

}); 