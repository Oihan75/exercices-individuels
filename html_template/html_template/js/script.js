let texte= prompt("Bonjour","<entrer ici votre prenom>");
if (texte==null){
    alert("vous avez annule");
} else {
document.getElementById("Coucou").innerHTML= "Bonjour "+texte+", bienvenue.";
}

let an= prompt("Annee de naissance?","<entrer ici votre annee de naissance>");
let today= new Date();
let annee= today.getFullYear();
if (an==null){
   alert("vous avez annule");
} else{
    let age= annee-an;
    document.getElementById("age").innerHTML= "Vous avez "+age+" ans.";
}