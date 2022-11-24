class wf3 {


    constructor(nom, age){
    this.nom = nom;
    this.age = age;
    }
}

let eleve1 = new wf3("Matin", 42);
let eleve2 = new wf3("Thibaut", 25);
let eleve3 = new wf3("Tristan", 24);
let eleve4 = new wf3("Meijuan", 32);
let eleve5=  new wf3("Christelle", 55);
let eleve6 = new wf3("Maxime", 27);
let eleve7 = new wf3("Mouloud", 50);
let eleve8 = new wf3("Falilou", 26);
let eleve9 = new wf3("Lamïa", 28);
let eleve10 = new wf3("Adam", 19);
let eleve11 = new wf3("Lynda", 21);
let eleve12 = new wf3("Kylian", 22);

let eleves = [];
eleves = [eleve1, eleve2, eleve3, eleve4, eleve5, eleve6,
     eleve7, eleve8, eleve9, eleve10, eleve11, eleve12];

for (eleve of eleves) {
console.log(`Il y'a ${eleves.length} élèves dans la classe.`)
};

let numbereleve = 12;
let totalAge = 0; 

for (let eleve of eleves) {
    totalAge +=  eleve.age;
};
console.log(`l'age total cumulé de la classe est ${totalAge}`)
let averageAge = Math.round(totalAge / numbereleve)
console.log(`La moyenne d'age de la classe est de ${averageAge}`)





const nombre = document.getElementById("nombre");
//console.log(nombre)
//nombre.textContent = `${eleves.length} élèves`;

/*
const creationElements = document.getElementById("creationElements");
const nouvelElement = document.createElement("h2")
nouvelElement.textContent = "Créons des éléments";
creationElements.appendChild(nouvelElement)*/


/*const total = document.querySelector("#total");
total.textContent = numbereleve;
*/

const javascript = "javascript";
let injectionHTML = document.getElementById("moyenne");
injectionHTML.innerHTML = `<b>Je suis injecté depuis ${javascript} grâce à <u>innerHTML</u></b>`;
//la différence entre le innerHTML et le textContent c'est juste que textContent n'interprete pas les balises lui, il les affichent.
let injectionText = document.getElementById("moyenne");
injectionText.textContent = "<b>Pareil, mais avec <u>textContent</u></b>";

let addClassBigFont = document.querySelector("#exClassList li:first-of-type");
addClassBigFont.classList.add("bigFont", "bold");

let deleteClassBlue = document.querySelector("#exClassList li:nth-child(2)");
deleteClassBlue.classList.remove("blue");

let replaceClassBlue = document.querySelector("#exClassList li:nth-child(3)");
replaceClassBlue.classList.replace("blue", "red");





let htmlElements = "";

for (let eleve of eleves) {
    htmlElements += 
    `
        <div class="myCard">
            <h3>${eleve.nom}</h3>
            <p>est agé de ${eleve.age}ans</p>
           
        </div>
    `
}
document.getElementById("myId").innerHTML = htmlElements;