// Récupérer les valeurs du formulaire et les mettre dans des variables 
// Afficher, à l'envoi, la section avec les variables 

function recup (event :Event) {
  event.preventDefault();  
  //le : number de fin indique que ma function retourne un nombre 
  let name= (document.getElementById("name") as HTMLInputElement ).value; 

  console.log (name); 
}

(document.getElementById("form") as HTMLFormElement).addEventListener("submit", recup); 