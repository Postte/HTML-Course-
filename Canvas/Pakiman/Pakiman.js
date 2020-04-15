var imagenes = [];
imagenes["Cauchin"] = "vaca.png";
imagenes["Pokacho"] = "pollo.png";
imagenes["Tocinauro"] = "cerdo.png";

  class Pakiman
  {
    constructor(n, v, a)
    {
      this.imagen = new Image();
      this.nombre = n;
      this.vida = v;
      this.ataque= a;

      this.imagen.src = imagenes[this.nombre];
    }
    mostrar()
    {

      document.body.appendChild(this.imagen);
      document.write("<p>");
      document.write("<strong>" + this.nombre + "</strong>" + "</br>");
      document.write("Vida: " + this.vida + "</br>");
      document.write("ataque: :"  + this.ataque) + "<hr />";
      document.write("</p>");
    }
  }

 var coleccion = []
 coleccion.push(new Pakiman("Cauchin", 120, 30));
coleccion.push(new Pakiman("Pokacho", 80, 50));
coleccion.push(new Pakiman("Tocinauro", 100, 40));

for (var p of coleccion)
{
  p.mostrar();
}
