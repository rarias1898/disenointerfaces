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

  // $(".nombre").on("input", function() {
  //   $(".correo").on("input", function() {
  //     $(".password").on("input", function() {
  //       $(".repitPassword").on("input", function() {
  //         $(".confirm").on("input", function() {
  //           $(".boton-cliente").removeAttr("disabled")
  //         })
  //       })
  //     })
  //   })
  // })

  // $(".nombre").on("input", function() {
  //   $(".correo").on("input", function() {
  //     $(".password").on("input", function() {
  //       $(".repitPassword").on("input", function() {
  //         $(".fecha").on("input", function() {
  //           $(".confirm").on("input", function() {
  //             $(".boton-proveedor").removeAttr("disabled")
  //           })
  //         })
  //       })
  //     })
  //   })
  // })

  $(".nombree, .correoo, .passwordd, .repitPassword, .confirm").on("input", function () {
    console.log("Evento activado para Cliente.");

    let nombre = $(".nombree").val();
    let correo = $(".correoo").val();
    let password = $(".passwordd").val().trim();
    let repitPassword = $(".repitPassword").val().trim();
    let confirm = $(".confirm").is(":checked");

    if (nombre !== "" && correo !== "" && password !== "" && repitPassword !== "" && confirm) {
        $(".boton-cliente").prop("disabled", false);
    } else {
        $(".boton-cliente").prop("disabled", true);
    }
  });

  $(".nombrea, .correoa, .passworda, .repitPassworda, .fechaa, .confirm").on("input", function () {
    console.log("Evento activado para Proveedor.");

    let nombre = $(".nombrea").val();
    let correo = $(".correoa").val();
    let password = $(".passworda").val().trim();
    let repitPassword = $(".repitPassworda").val().trim();
    let fecha = $(".fechaa").val();
    let confirm = $(".confirm").is(":checked");

    if (nombre !== "" && correo !== "" && password !== "" && repitPassword !== "" && fecha !== "" && confirm) {
        $(".boton-proveedor").prop("disabled", false);
    } else {
        $(".boton-proveedor").prop("disabled", true);
    }
  });

  $(".boton-cliente, .boton-proveedor").on("click", function(event) {
    event.preventDefault()

    $(".uniForm").slideUp("slow", "swing", function() {
      $(".gracias").slideDown("slow")
    })
  })

  $(document).ready(function() {
    $(".ojo").click(function() {
        let passwordInput = $(".repitPassword, .password");
        let type = passwordInput.attr("type") === "password" ? "text" : "password";
        passwordInput.attr("type", type);

        let eyeIcon = $(this);
        if (type === "text") {
            eyeIcon.attr("src", "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-eye-512.png");
        } else {
            eyeIcon.attr("src", "https://cdn1.iconfinder.com/data/icons/jumpicon-basic-ui-line-1/32/-_Eye-Show-View-Watch-See-Disable-Inactive-Unavailable-Off-256.png");
        }
    });
  });

}); 