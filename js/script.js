/* =========================================================
   EJERCICIOS: if/else, bucles for y this
   JavaScript nativo (ES5): usad var, function y querySelector.
   =========================================================

   PASO 0
   Este archivo todavía no está enlazado. Enlázalo tú en index.html
   con una etiqueta <script> justo antes de cerrar </body>, usando
   la ruta correcta. Comprueba que funciona con un console.log().


   ---------------------------------------------------------
   EJERCICIO 1 · CONDICIONALES (if / else if / else)
   ---------------------------------------------------------
   Elementos: #hud-vida, #barra-relleno, #vida-numero, #estado,
   #boton-dano, #boton-curar

   Crea estas variables (cópialas tal cual):

   var vida = 100;
   var DANO = 15;
   var CURA = 10;

   1. Crea una función actualizarHud() que:
      a) Cambie el ancho de la barra según la vida:
         barraRelleno.style.width = vida + "%";
      b) Escriba la vida en #vida-numero.
      c) Quite a #hud-vida las cuatro clases de estado:
         hudVida.classList.remove("is-sano", "is-herido", "is-critico", "is-muerto");
      d) Con una cadena if / else if / else, añada la clase que toca
         y cambie el texto de #estado:
           - vida mayor que 60  → clase "is-sano"    · texto "Sano"
           - vida mayor que 30  → clase "is-herido"  · texto "Herido"
           - vida mayor que 0   → clase "is-critico" · texto "¡Crítico!"
           - en cualquier otro caso → clase "is-muerto" · texto "Game over"
         (Piensa en el orden: el if se queda con la PRIMERA condición
         que se cumple, por eso empezamos por la más alta.)

   2. Al hacer clic en #boton-dano:
      a) Resta DANO a la vida.
      b) Con un if, si la vida ha bajado de 0, déjala en 0
         (una barra de vida nunca es negativa).
      c) Llama a actualizarHud().

   3. Al hacer clic en #boton-curar:
      a) Suma CURA a la vida.
      b) Con un if, si la vida pasa de 100, déjala en 100.
      c) Llama a actualizarHud().

   Extra 1: en game over el personaje ya no puede recibir daño ni
   curarse. Dentro de actualizarHud(), en el caso "is-muerto",
   desactiva los dos botones (boton.disabled = true) y muestra
   #boton-reintentar quitándole la clase "is-oculto". Al pulsar
   "Reintentar", la vida vuelve a 100, los botones se activan otra
   vez (disabled = false) y "Reintentar" se vuelve a ocultar.

   Extra 2: como en un juego, controla la barra con el teclado.
   Escucha "keydown" en document y, con un if / else if, que la
   tecla "d" haga daño y la tecla "c" cure (pista: event.key).
   Truco: en lugar de repetir el código, haz que cada tecla
   "pulse" su botón con botonDano.click() y botonCurar.click().
   Así, si el botón está desactivado, la tecla tampoco funciona.


   ---------------------------------------------------------
   EJERCICIO 2 · BUCLES (for)
   ---------------------------------------------------------
   Elementos: #boton-inventario, #inventario, #inventario-info

   Usa este array y esta constante (cópialos tal cual). Cada nombre
   coincide con una imagen de la carpeta img/ (espada → img/espada.svg):

   var objetos = ["espada", "escudo", "llave", "moneda", "gema"];
   var CAPACIDAD = 12;

   1. Al hacer clic en #boton-inventario:
      a) Vacía #inventario (innerHTML = "").
      b) Con un bucle for, recorre el array. En cada vuelta crea una
         casilla con la imagen y el nombre del objeto y añádela a
         #inventario. Puedes concatenar HTML:
         '<div class="casilla"><img src="img/' + objeto + '.svg" alt="' +
         objeto + '"><span>' + objeto + '</span></div>'
      c) Con un SEGUNDO bucle for, rellena con casillas vacías los
         huecos que quedan hasta llegar a CAPACIDAD:
         '<div class="casilla casilla--vacia"></div>'
         Pista: este bucle no empieza en 0, empieza donde terminó
         el primero:  for (var j = objetos.length; j < CAPACIDAD; j++)
      d) Al terminar, escribe en #inventario-info:
         "Inventario: 5 / 12 huecos ocupados" (usa objetos.length y
         CAPACIDAD, no escribas los números a mano).

   Extra 1: añade "bomba" y "arco" al array y comprueba que todo
   se adapta solo, sin tocar nada más del código.

   Extra 2 (if + for): si la mochila está llena (objetos.length es
   mayor o igual que CAPACIDAD), el texto de #inventario-info debe ser
   "¡Mochila llena!" y llevar la clase "is-error". Pruébalo añadiendo
   objetos al array hasta llegar a 12.

   Extra 3: en casi todos los juegos el inventario se abre con la
   tecla "i". Escucha "keydown" y, si event.key es "i", llama a
   botonInventario.click().


   ---------------------------------------------------------
   EJERCICIO 3 · THIS (ficha de personaje + ventana modal)
   ---------------------------------------------------------
   Elementos: .personaje (hay 4), #ficha-clase, #ficha-nombre,
   #ficha-texto, #stat-fuerza, #stat-magia, #stat-velocidad,
   #boton-jugar, #modal, #modal-titulo, #modal-texto, #modal-cerrar

   1. Selecciona todas las cartas con querySelectorAll(".personaje").
   2. Con un bucle for, añade a cada carta un evento "click".
   3. Dentro de la función del evento, "this" es LA CARTA que se ha
      pulsado. Úsalo para leer sus datos:
        this.getAttribute("data-nombre")
        this.getAttribute("data-clase")
        this.getAttribute("data-texto")
      y escríbelos en #ficha-nombre, #ficha-clase y #ficha-texto.
   4. Las estadísticas son números del 0 al 100. Úsalos como ancho
      de cada barra, igual que en el ejercicio 1:
        statFuerza.style.width = this.getAttribute("data-fuerza") + "%";
      (y lo mismo con data-magia y data-velocidad).
   5. Marca la carta elegida:
      a) Con otro bucle for, quita la clase "is-seleccionado" a
         TODAS las cartas.
      b) Añádesela solo a this.
   6. Guarda el nombre del personaje elegido en una variable creada
      FUERA de la función (por ejemplo var elegido = "";), para poder
      usarlo después desde el botón "Jugar".
   7. Al pulsar #boton-jugar, abre la modal (clase "is-abierta"). Con
      un if / else decide qué dice:
        - si todavía no hay personaje (elegido === ""):
          título "¡Espera!" · texto "Primero elige un personaje."
        - si lo hay:
          título "¡Preparado!" · texto "Juegas con Brasa. ¡Que empiece
          la partida!" (con el nombre que corresponda).
   8. Al pulsar #modal-cerrar, quita la clase "is-abierta".

   Extra 1 (if + this): cierra la modal también al hacer clic en el
   fondo oscuro. Escucha el clic en #modal y comprueba con un if si
   event.target === this (el clic ha sido en el fondo, no dentro de
   la caja).

   Extra 2: cierra la modal con la tecla Escape (event.key === "Escape").

   Extra 3: añade al texto de la modal la clase del personaje
   ("Juegas con Brasa, guerrera."). Necesitarás guardar también la
   clase en otra variable. Pista: "Guerrera".toLowerCase() → "guerrera".
   ========================================================= */


// Empieza aquí tu código
console.log("Online");


var vida = 100;
const DANO = 15;
const CURA = 10;

var botonDano = document.querySelector("#boton-dano");
var botonCurar = document.querySelector("#boton-curar");
var vidaNumero = document.querySelector("#vida-numero");
var barraRelleno = document.querySelector("#barra-relleno");
var estado = document.querySelector("#estado");
var hudVida = document.querySelector("#hud-vida");



function actualizarHud() {
   hudVida.classList.remove("is-sano","is-herido","is-critico","is-muerto");
   vidaNumero.textContent = vida;
   barraRelleno.style.width = vida + "%";

   if(vida > 60) {
      hudVida.classList.add("is-sano");
      estado.textContent = "Sano";

   } else if (vida > 30) {
      hudVida.classList.add("is-herido");
      estado.textContent = "Herido";

   } else if (vida > 0) {
    hudVida.classList.add("is-critico");
    estado.textContent = "Crítico,cuidado!";  

   } 
   else{
      hudVida.classList.add("is-muerto");
      estado.textContent = "Estas muerto!"
   }
   

   


}

botonDano.addEventListener("click", function() {
   vida = vida - DANO;
if (vida < 0) {
   vida = 0;
}

   actualizarHud();

});

botonCurar.addEventListener("click", function() {
   vida = vida + CURA;
   if(vida > 100) {
      vida = 100;
   }
   actualizarHud();

});

