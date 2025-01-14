$(function () {
  // Parte 1
  // $(".encabezado").hide()

  // Parte 2
  // $(".encabezado").on("mouseenter", function() {
  //   $(this).hide()
  // })

  // Parte 3
  $(".encabezado").on("click", function () {
    $(this).hide();
  });

  // Prueba css
  const fondo = $(".contenido, .encabezado")

  fondo.css({
    'background-color': 'red',
    'color': "white",
    'text-decoration': 'underline',
    'text-decoration-color': 'yellow',
    'font-size': '3em'
  })
});
