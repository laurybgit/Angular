class Produit {
    constructor(nomProduit, categorieProduit) {
        this.nom = nomProduit;
        this.categorie = categorieProduit;
    }

    sauvegarderPrix(prix) {
        this.prix = prix;
    }

    afficherInfos() {
        console.log(`Produit ${this.nom} - Catégorie ${this.categorie}`);
    }
}

class Article extends Produit {
    constructor(produit, caracteristiqueComplementaire) {
        super(produit.nom, produit.categorie);
        this.caracteristiqueComplementaire = caracteristiqueComplementaire;
    }

    afficherInfos() {
        super.afficherInfos();
        console.log(`Article. Déclinaison produit ${this.nom} - Catégorie ${this.categorie} - Carac. ${this.caracteristiqueComplementaire}`);
    }
}

class Panier {
    constructor() {
        this.produitsAjoutes = [];
    }

    ajouterProduit(produit, quantite) {
        this.produitsAjoutes.push({
            produit: produit,
            quantite: quantite
        });

        this.majMontantTotal();
    }

    majMontantTotal() {
        this.montantTotalPanier = 0;
        for (let lignePanier of this.produitsAjoutes) {
            this.montantTotalPanier += (lignePanier.produit.prix * lignePanier.quantite);
        }
    }
}

let clavierAzerty = new Produit("Clavier AZERTY", "Matériel informatique");
let clavierQwerty = new Produit("Clavier QWERTY", "Matériel informatique");
clavierAzerty.sauvegarderPrix(15);
clavierQwerty.sauvegarderPrix(50);

// clavierAzerty.afficherInfos();

let clavierAzertyNoir = new Article(clavierAzerty, "Noir");
let clavierAzertyBlanc = new Article(clavierAzerty, "Blanc");

clavierAzertyBlanc.afficherInfos();

let panierJeanClaude = new Panier();

panierJeanClaude.ajouterProduit(clavierAzertyNoir, 2);

