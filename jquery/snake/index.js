$(function(){

  let posX = 50
  let posY = 50

  $(".btn").on("click", function() {
    inicio(this)
  })

  const inicio = (boton) => {
    $(boton).hide()
    const bloque = $(".bloque")
    bloque.show()
    bloque.css("position", "absolute")
    bloque.css("top", posX)
    bloque.css("left", posY)
    generateElements()
  }

  $(document).on("keydown", function(e) {
    if (e.key == "ArrowUp") {
      console.log("Arriba")
      $(".bloque").css("top", posY -= 5)
    }else if (e.key == "ArrowDown") {
      console.log("Abajo")
      $(".bloque").css("top", posY += 5)
    }else if (e.key == "ArrowLeft") {
      console.log("Izquierda")
      $(".bloque").css("left", posX -= 5)
    }else if (e.key == "ArrowRight") {
      console.log("Derecha")
      $(".bloque").css("left", posX += 5)
    }
  })

  const generateElements = () => {
    let valorPuntos
    let randomNumber = Math.random()
    let interval = setInterval(() => {
      const points = document.createElement("div")
      points.style.width = "20px"
      points.style.height = "20px"
      points.style.backgroundColor = "red"
      points.style.top = randomNumber += 1
      points.style.left = randomNumber += 1
      document.body.append(points)
      if (valorPuntos == 5) {
        clearInterval(interval)
      }
    }, 250);
  }

});