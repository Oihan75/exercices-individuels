function askName(){
let texte= prompt("Bonjour","<entrer ici votre prenom>");
if (texte==null){
    alert("vous avez annule");
} else {
document.getElementById("Coucou").innerHTML= "Bonjour "+texte+", bienvenue.";
}
}
function askBirthYear(){
let an= prompt("Date de naissance?","<entrer ici votre date de naissance (mm/jj/aaaa)>");
let today= new Date();
let birth= new Date(an);
console.log(today);
console.log(birth);
if (an==null){
   alert("vous avez annule");
} else{
    let age= Math.trunc((today-birth)/(365.25*24*60*60*1000));
    document.getElementById("age").innerHTML= "Vous avez "+age+" ans.";
}
}
askName();
askBirthYear();