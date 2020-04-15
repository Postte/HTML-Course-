var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
var parax = document.getElementById("parametrosx");
var parabx = document.getElementById("botonsotex");
var paraxf = document.getElementById("parametrosxf");
var parabxf = document.getElementById("botonsotexf");
var parayi = document.getElementById("parametrosyi");
var parabyi = document.getElementById("botonsoteyi");
var paray = document.getElementById("parametrosy");
var paraby = document.getElementById("botonsotey");
parabx.addEventListener("click", parametrosDibujosX );
parabxf.addEventListener("click", parametrosDibujosXf );
parabyi.addEventListener("click", parametrosDibujosYi );
paraby.addEventListener("click", parametrosDibujosY );
boton.addEventListener("click", dibujoPorClick );

var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d");

function parametrosDibujosX ()
{
  var x = parseInt(parax.value);
}

function parametrosDibujosXf ()
{
  var xf = parseInt(paraxf.value);
}

function parametrosDibujosYi()
{
  var yi = parseInt(parayi.value);
}

function parametrosDibujosY()
{
  var y = parseInt(paray.value);
}

function dibujarLineas(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}



function dibujoPorClick ()
{
  var y = parseInt(paray.value);
  var yi = parseInt(parayi.value);
  var x = parseInt(parax.value);
  var xf = parseInt(paraxf.value);
  var lineas = parseInt(texto.value);
  var l = 0;
  var espacio = ancho / lineas;

  for (l=0; l < lineas; l++)
  {
    yi = espacio * l;
    xf = espacio * (l + 1);
    dibujarLineas("Blue", y, yi, xf, x );
    console.log("Linea " + l);

  }

  dibujarLineas("red", 1, 1, 1, 299);
  dibujarLineas("red", 1, 299, 299, 299);

  for (l=0; l < lineas; l++)
  {
    yi = espacio * l;
    xf = espacio * (l + 1);
    dibujarLineas("Blue", y, yi, xf, x );
    console.log("Linea " + l);
  }

  dibujarLineas("red", 299, 299, 299, 1);
  dibujarLineas("red", 299, 1, 1, 1);
}
