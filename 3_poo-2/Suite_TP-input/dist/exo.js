"use strict";
/* function addition (e) {
  e.preventDefault();
  let nombre1 = parseInt(document.getElementById("nb1").value);
  console.log (nombre1);
  let nombre2 = parseInt(document.getElementById("nb2").value);
  console.log (nombre2);

  let resultat = (nombre1+nombre2);
  alert (resultat);
} */
function add(nombre1, nombre2) {
    return nombre1 + nombre2;
}
function addition(event) {
    event.preventDefault();
    //le : number de fin indique que ma function retourne un nombre 
    let n1 = document.getElementById("nb1").value;
    let n2 = document.getElementById("nb2").value;
    console.log(add(parseInt(n1), parseInt(n2)));
}
document.getElementById("formulaire").addEventListener("submit", addition);
//# sourceMappingURL=exo.js.map