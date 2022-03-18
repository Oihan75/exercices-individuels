document.getElementById("match").innerHTML= "Il y a 50 allumettes";
let btn = document.querySelector('input');
btn.addEventListener('click', matchNumber);

function matchNumber(){
   let entree= prompt("Entrez un nombre entre 1 et 6", "<Entrer votre nombre>");
    let sous= 50-entree;
    if (entree==null){
        alert("vous avez annule");
    }
        if (entree<1){
            document.getElementById("match").innerHTML= "Veuillez choisir un nombre plus grand";
        } else if (entree>6){
            document.getElementById("match").innerHTML= "Veuillez choisir un nombre plus petit";
        } else{
            document.getElementById("match").innerHTML= "Il reste "+sous+" allumettes";
        }
}