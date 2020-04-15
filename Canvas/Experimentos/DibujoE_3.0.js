cuadrito = document.getElementById("canvas");
papel = cuadrito.getContext("2d");
cuadrito.addEventListener("mousedown", dibujarMouse);
var luck;

function dibujarMouse(evento)
{
  var luck = true;
  cuadrito.addEventListener("mouseup", soltar);
  cuadrito.addEventListener("mousemove", dejar);

  function dejar (evento_d)
  {
    if (luck == true)
    {
      var x = evento_d.screenx - 8;
      var y = evento_d.screeny - 270;
      dibujarLineas("red", x, y, x + 1, y + 1);
    }
  }

  function soltar (evento_s)
  {
    luck = false;
  }

  }
function dibujarLineas(color, xinicial, yinicial, xfinal, yfinal)
{
  papel.beginPath();
  papel.strokeStyle = color;
  papel.lineWidth = 3;
  papel.moveTo(xinicial, yinicial);
  papel.lineTo(xfinal, yfinal);
  papel.stroke();
  papel.closePath();
}
