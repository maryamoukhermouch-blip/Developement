const produit = [
    { id : 1, Nom: "Clavier", Categorie: "Accessoires", Prix: 120, Stock: 5},
    { id : 2 ,Nom : "Souris" , Categorie: "Accessoires", Prix: 80 , Stock:8},
    { id : 3, Nom : "Écran", Categorie: "Informatique ", Prix:900,Stock:0},
    { id : 4 , Nom :"casque",Categorie: "Accessoires", Prix: 240,Stock: 3 },  
]
function afficherCatalogue(produit) {
  console.log(" Affichager  Nom et Prix ");
  produit.forEach(function(produit) {
    console.log(produit.Nom + " ---> " + produit.Prix + " MAD");
  });
}
afficherCatalogue(produit);

const produitsDisponibles = produit.filter(function(produit) {
  return produit.Stock > 0;
});
console.log(" Produit disponibles ");
console.log(produitsDisponibles);
console.log(
  "Nombre de produits disponibles : " + produitsDisponibles.length
);

const valeurStock = produit.reduce(function(total, produit) {
  return total + produit.Prix * produit.Stock;}, 0);
console.log("Valeur totale du Stock : " + valeurStock + " MAD");


function MoinsCher(produitsDisponibles) {
  if (produitsDisponibles.length === 0) {
    console.log(" 0 produit .");
    return;
  }
  const moinsCher = produitsDisponibles.reduce(function(min, produit) {
    if (produit.Prix < min.Prix) {
      return produit;
    }
    return min;
  });
  console.log(
    "Produit le moins cher est : " + moinsCher.Nom + " - " + moinsCher.Prix + " MAD" );
}
MoinsCher(produitsDisponibles);


const resume = produit.map(function(produit) {
  return produit.Nom + " ---> " +  produit.Prix + " MAD ---> " + produit.Stock + " unités";
});
console.log(" Resume du catalogue ");
resume.forEach(function(ligne) {
  console.log(ligne);
});


function estValide(produit) {
  return Number.isFinite(produit.Prix) && produit.Prix >= 0 && Number.isFinite(produit.Stock) && produit.Stock >= 0;
}
console.log(produit.every(estValide));


const moinsCher = produitsDisponibles.reduce(function(min, produit) {
    return produit.Prix < min.Prix ? produit : min;
  });
const { Nom, Prix } = moinsCher;
  console.log(" Déstructuration ");
  console.log("Nom : " + Nom);
  console.log("Prix : " + Prix + " MAD");


console.log("TEST 1 : Stock nul");
const test1 = produit.filter(function(p) {
  return p.Stock > 0;
})
console.log(test1);



console.log(" Test 2 : Tous les stocks à zéro ");

const test2 = produit.map(function(p) {
  return { ...p, Stock: 0 };
});

const disponibles2 = test2.filter(function(p) {
  return p.Stock > 0;
});

if (disponibles2.length === 0) {
  console.log(" 0 produit ");
}


console.log(" TEST 3 : Catalogue vide ");

const catalogueVide = [];

const valeurVide = catalogueVide.reduce(function(total, p) {
  return total + p.Prix * p.Stock;
}, 0);
console.log("Valeur totale du stock : " + valeurVide + " MAD");



console.log(" TEST 4 : Vérification des données ");
const donneesValides = produit.every(function(p) {
  return typeof p.Prix === "number" &&
         typeof p.Stock === "number" &&
         p.Prix >= 0 &&
         p.Stock >= 0;
});
if (donneesValides) {
  console.log("Toutes les données sont valides");
} else {
  console.log("Erreur : données invalides");
}