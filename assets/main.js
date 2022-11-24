class videotheque { 
        
    constructor(title, realisator, totalDuration, currentViewingDuration, shortDescription){ 
       
       this.title = title;
       this.realisator = realisator; 
       this.totalDuration = totalDuration;
       this.currentViewingDuration = currentViewingDuration; 
       this.shortDescription= shortDescription;
    }
}

let Movie1 = new videotheque("Viking", "Spielberg", 120, 50, "Ragnar est un jeune pecheur et vaillant guerrier viking du village de Kattegat. Il ne le sait pas encore mais son destin va basculer lors du prochain raide  organisé par le roi du village.");
console.log(Movie1);

let Movie2 = new videotheque ("les feux de l'amour", "Miskine", 4000, 500, "Un film de merde qui dure tout une éternité");
console.log(Movie2);

let Movie3 = new videotheque ("Gameofthrones", "Maxime", 90, 20, "Différents tribus se livre une guerre féroce pour le controle du trone de fer");
console.log(Movie3);

let Movie4 = new videotheque ("Power", "50cent", 40, 5, "Ghost et son meilleur amie Tommy ambitionnent de devenir les rois de la ville de New York et pour y arriver ils ne reculeront devant rien");
console.log(Movie4);

let Movie5 = new videotheque ("Ozark", "Netflix", 700, 570, "Un honnete comptable et pere de famille se retrouvent malgrès lui à devoir blanchir de l'argent pour un cartel mexicain");
console.log(Movie5);

let Movie6 = new videotheque ("Blacklist", "Netflix", 900, 612, "Reymond Reddington l'homme le plus rechérché au monde se rend de son plein grès au FBI du jour au lendemain"); 
console.log(Movie6);

let Movies = [];
Movies = [
    Movie1, Movie2, Movie3, Movie4, Movie5, Movie6
];
console.log(Movies);
/*
let firstMovie = Movies[0];
console.log(`Le premier film est ${firstMovie}`);
let Movie1title = Movie1.title;
let Movie1realisator = Movie1.realisator;
let Movie1totalDuration = Movie1.totalDuration;
let Movie1currentViewingDuration = Movie1.currentViewingDuration;
let Movie1shortDescription = Movie1.shortDescription;
console.log(`Le titre de mon premier film est ${Movie1title}, l'auteur est ${Movie1realisator} et il parle de ${Movie1shortDescription}. Le film dure ${Movie1totalDuration}mns et je suis à ${Movie1currentViewingDuration}mns.`);
*/
console.log(Movies.length);
console.log(Movies[3]);


for(let Movie of Movies) {
console.log(Movie.title);
console.log(Movie.shortDescription);
}


