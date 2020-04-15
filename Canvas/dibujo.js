var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var lineas = 30;
var l = 0;
var yi, xf;

for (l=0; l < lineas; l++)
{
  yi = 10 * l;
  xf = 10 * (l + 1);
  dibujarLineas("Blue", 0, yi, xf, 300);
  console.log("Linea " + l);

}

for (l=0; l < lineas; l++)
{
  yi = 10 * l;
  xf = 10 * (l + 1);
  dibujarLineas("Blue", 300, yi, xf, 0);
  console.log("Linea " + l);
}

dibujarLineas("red", 1, 1, 1, 299);
dibujarLineas("red", 1, 299, 299, 299);

function dibujarLineas(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

dibujarLineas("red", 299, 299, 299, 1);
dibujarLineas("red", 299, 1, 1, 1);
