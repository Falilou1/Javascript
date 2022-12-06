const myMovie = new URLSearchParams(window.location.search).get("id");
console.log(myMovie);


const movieFetch2 = fetch(`http://localhost:3000/api/movies/${myMovie}`);

/*const rechercheId = (movie) => {

    return movie._id == myMovie;
}
//console.log(movies.find(rechercheId));


let movieDetail = movies.find(rechercheId);

console.log(movieDetail.title);

*/
movieFetch2
.then(function(res) {
    if (res.ok) {
        return res.json()
    }
})
.then((movie) => {

        let movieElements =`
    
            <div class="row  align-items-center">
                <div class="col-4 offset-1">
                    <img src="${movie.imageUrl}" alt="l'affiche">
                </div>
                <div class="col-5">
                    <h3 class="text-center">${movie.titre}</h3>
                    <p class="text-center">Réalisateur : ${movie.realisateur}</p>
                    <p class="card-text">Sommaire : "${movie.description}"</p>
                    <iframe src="https://www.youtube.com/embed/${movie.bandeAnnonce}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                </div>
            </div>
           




        
            <div class="card-body">
                    <h3>${movie.titre}</h3>
                    <span> réalisateur : ${movie.realisateur}</span>               
                
                <div class="d-flex justify-content-between align-items-center">
                <small class="text-muted">Durée : ${toHoursAndMinutes(movie.dureeTotale)} mns</small>
                <small class="text-muted">Durée de visionnage : ${perviewCalculation(movie.dureeDeVisionnage, movie.dureeTotale)} %</small>
                <button type="button" class="btn btn-sm btn-outline-secondary"><a href="http://127.0.0.1:5500/videotheque/">Retour</a></button>
                </div>
            </div>
        </div>
        </div>
        
        `;
    
        let power = document.getElementById("power");
        power.innerHTML = movieElements;

})

.catch(function (err) {
    console.log(err);
})




    
 

