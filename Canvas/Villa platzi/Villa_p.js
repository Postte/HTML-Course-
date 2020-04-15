var vp = document.getElementById("Villaplatzi");
var papel = vp.getContext("2d");

var fondo = {
  url: "tile.png",
  cargaOK: false
}

var vaca = {
  url: "vaca.png",
  cargaOK: false
}

var pollo = {
  url: "pollo.png",
  cargaOK: false
}

var cerdo = {
  url: "cerdo.png",
  cargaOK: false
}

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollos);

cerdo.imagen  = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);

function cargarFondo()
{
  fondo.cargaOK = true;
  dibujar()
}

function cargarVacas()
{
  vaca.cargaOK = true;
  dibujar()
}

function cargarPollos()
{
  pollo.cargaOK = true;
  dibujar()
}

function cargarCerdos()
{
  cerdo.cargaOK = true;
  dibujar()
}

function dibujar()
{
  if (fondo.cargaOK==true)
  {
    papel.drawImage(fondo.imagen  , 0, 0);
  }

  if (vaca.cargaOK==true)
  {
    va = aleatorio(1, 5);
    for (var v = 0; v < va; v++)
    {
      var x = aleatorio(0, 7);
      var y = aleatorio(0, 7);
      var x = x * 60;
      var y = y * 60;
      papel.drawImage(vaca.imagen  , x, y);
    }

  }

  if (pollo.cargaOK==true)
  {
    pa = aleatorio(1, 5);
    for (var p = 0; p < pa; p++)
    {
      var x = aleatorio(0, 7);
      var y = aleatorio(0, 7);
      var x = x * 60;
      var y = y * 60;
      papel.drawImage(pollo.imagen  , x, y);
    }

  }

  if (cerdo.cargaOK==true)
  {
    ca = aleatorio(1, 5);
    for (var c = 0; c < ca; c++)
    {
      var x = aleatorio(0, 7);
      var y = aleatorio(0, 7);
      var x = x * 60;
      var y = y * 60;
      papel.drawImage(cerdo.imagen  , x, y);
    }

  }
}

function aleatorio(min, maxi)
{
  var resultado;
  resultado = Math.floor(Math.random()*(maxi - min + 1)) + min;
  return resultado;
}
