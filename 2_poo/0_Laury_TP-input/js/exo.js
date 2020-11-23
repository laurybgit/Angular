function additionner (e) {
  e.preventDefault(); 
  let nombre1 = parseInt(document.getElementById("nb1").value); 
  console.log (nombre1); 
  let nombre2 = parseInt(document.getElementById("nb2").value); 
  console.log (nombre2); 

  let resultat = (nombre1+nombre2); 
  alert (resultat); 
} 
