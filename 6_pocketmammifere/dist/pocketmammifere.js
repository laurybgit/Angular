"use strict";
// Récupérer les valeurs du formulaire et les mettre dans des variables 
// Afficher, à l'envoi, la section avec les variables 
function ajout(event) {
    event.preventDefault();
    //le : number de fin indique que ma function retourne un nombre 
    let name = document.getElementById("name").value;
    console.log(name);
}
document.getElementById("form").addEventListener("submit", ajout);
