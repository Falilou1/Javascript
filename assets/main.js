class Movie {
  constructor(
    title,
    realisator,
    totalDuration,
    currentViewingDuration,
    shortDescription,
    image
  ) {
    this.title = title;
    this.realisator = realisator;
    this.totalDuration = totalDuration;
    this.currentViewingDuration = currentViewingDuration;
    this.shortDescription = shortDescription;
    this.image = image;
  }
}

const Movies = [
  new Movie(
    "Viking",
    "Spielberg",
    120,
    50,
    "Ragnar est un jeune pecheur et vaillant guerrier viking du village de Kattegat. Il ne le sait pas encore mais son destin va basculer lors du prochain raide  organisé par le roi du village.",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2AXVl_xWIxb7QOJevN8HEx_fxOzU7_UGlWA&usqp=CAU"
  ),

  new Movie(
    "les feux de l'amour",
    "Miskine",
    4000,
    30,
    "Un film de merde qui dure tout une éternité",
    "https://image.spreadshirtmedia.net/image-server/v1/mp/products/T1459A839PA4459PT28D141775386W8121H10000/views/1,width=550,height=550,appearanceId=839,backgroundColor=F2F2F2/merde-autocollant.jpg"
  ),

  new Movie(
    "Gameofthrones",
    "Maxime",
    90,
    20,
    "Différents tribus se livre une guerre féroce pour le controle du trone de fer",
    "https://w0.peakpx.com/wallpaper/324/700/HD-wallpaper-got-game-of-thrones.jpg"
  ),

  new Movie(
    "Power",
    "50cent",
    40,
    5,
    "Ghost et son meilleur amie Tommy ambitionnent de devenir les rois de la ville de New York et pour y arriver ils ne reculeront devant rien",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjp5kjV-Pb9YkRS1zi-iNgrpCZsh8tfO6pwrV_qVXUmZdPEDsvPFW81DHrPjSSbajmCb0&usqp=CAU"
  ),

  new Movie(
    "Ozark",
    "Netflix",
    700,
    570,
    "Un honnete comptable et pere de famille se retrouvent malgrès lui à devoir blanchir de l'argent pour un cartel mexicain",
    "https://resizing.flixster.com/3ko6zO6791p1QPOXHUI2eCwmHXQ=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvMDIyOTBmN2QtMzM0Yi00ODUxLWE0MWYtMmViYWJiOGViZjRkLmpwZw=="
  ),

  new Movie(
    "Blacklist",
    "Netflix",
    900,
    612,
    "Reymond Reddington l'homme le plus rechérché au monde se rend de son plein grès au FBI du jour au lendemain",
    "https://www.ecranlarge.com/uploads/image/001/150/y3huzln26zgnw4rcr0h4ptwepfi-422.jpg"
  ),
];

/*let Movies = [];
Movies = [
    Movie1, Movie2, Movie3, Movie4, Movie5, Movie6
];
console.log(Movies); */
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

// la partie vue /template
let htmlElements = "";
let totalPerview = 0;
for (let movie of Movies) {
    let toHoursAndMinutes = "";
    toHoursAndMinutes =
      Math.floor(movie.totalDuration / 60) + "h " + (movie.totalDuration % 60);
      
      let perview = "";
      perview =  Math.round(movie.currentViewingDuration / movie.totalDuration * 100);
      
  htmlElements += `
            <div class="col">
                    <div class="card shadow-sm">
                    <img class = "img" src="${movie.image}"/>
                        <div class="card-body">
                                <h3>${movie.title}</h3>
                                <span> réalisateur : ${movie.realisator}</span>               
                            <p class="card-text">Sommaire : "${movie.shortDescription}"</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group">
                                    <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                                    <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                                </div>
                            <small class="text-muted">Durée : ${toHoursAndMinutes} mns</small>
                            <small class="text-muted">Durée de visionnage : ${perview} %</small>
                            </div>
                        </div>
                    </div>
                </div>
     `;
     totalPerview += perview; 
     console.log(totalPerview);
     totalPerview = Math.round(perview / totalPerview * 100);

}

const moviesList = document.getElementById("moviesList");
moviesList.innerHTML = htmlElements;


const perviewsdiv= document.getElementById("perviewsdiv");
const div = document.createElement("div");
div.textContent = `Durée de visionnage totale : ${totalPerview} %`;
perviewsdiv.appendChild(div);



