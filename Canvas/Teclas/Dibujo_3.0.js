var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};

document.addEventListener("keyup", dibujarTeclado);
var cuadrito = document.getElementById("canvas");
var papel = cuadrito.getContext("2d");
var x = 150;
var y = 150;

dibujarLineas("red", 149, 149, 151, 151, papel);

function dibujarLineas(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujarTeclado(evento)
{
  var colorcito = "blue";
  var movimiento = 10;
  switch (evento.keyCode)
  {
    case teclas.UP:
      dibujarLineas(colorcito, x, y, x, y - movimiento, papel)
      y = y - movimiento;
    break;
    case teclas.DOWN:
      dibujarLineas(colorcito, x, y, x, y + movimiento, papel)
      y = y + movimiento;
    break;
    case teclas.LEFT:
      dibujarLineas(colorcito, x, y, x - movimiento, y, papel)
      x = x - movimiento;
    break;
    case teclas.RIGHT:
      dibujarLineas(colorcito, x, y, x + movimiento, y, papel)
      x = x + movimiento;
    break;

  }
}
