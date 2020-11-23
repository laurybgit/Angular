// programmation orientée objet : test en autonomie 

class Singe {

  constructor (nom, categorie){
    this.nom = nom; 
    this.categorie = categorie; 
  }

  cri (){
    console.log ("ahouahou ! je suis un "+this.nom+"!"); 
  }

}

let tarsier = new Singe("tarsier", "lémurien"); 
let capucin = new Singe("capucin", "cebus")

tarsier.cri(); 
capucin.cri(); 