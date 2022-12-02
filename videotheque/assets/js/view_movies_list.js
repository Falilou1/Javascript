
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

console.log(Movies.length);
console.log(Movies[3]);
*/
// la partie vue /template
/* let htmlElements = "";
let allMoviesViewingDuration = 0;
let allMoviesDuration = 0;
for (let movie of movies) {
   
      
    let perview = "";
     // perview =  Math.round(movie.currentViewingDuration / movie.totalDuration * 100);
      
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
                                    <button type="button" class="btn btn-sm btn-outline-secondary"><a href="movie_detail.html?id=${movie._id}">View</a></button>
                                    <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                                
                                    </div>
                            <small class="text-muted">Durée : ${toHoursAndMinutes(movie.totalDuration)} mns</small>
                            <small class="text-muted">Durée de visionnage : ${perviewCalculation(movie.currentViewingDuration, movie.totalDuration)}%</small>
                            </div>
                        </div>
                    </div>
                </div>
     `;
     allMoviesViewingDuration += movie.currentViewingDuration; 
   
    allMoviesDuration += movie.totalDuration
}

const moviesList = document.getElementById("moviesList");
moviesList.innerHTML = htmlElements;


const perviewsdiv= document.getElementById("perviewsdiv");
const div = document.createElement("div");
div.textContent = `Durée de visionnage totale :  ${perviewCalculation(allMoviesViewingDuration, allMoviesDuration)}%`;
perviewsdiv.appendChild(div);

console.log(allMoviesViewingDuration);
console.log(allMoviesDuration);*/
