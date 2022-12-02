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

        let movieElements = `
        <div class="col">
        <div class="card shadow-sm">
        <div class="card text-end" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title"><img class = "img" id="img2" src="${movie.imageUrl}"/></h5>
          <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>

        <img class = "img" id="img2" src="${movie.imageUrl}"/>
            <div class="card-body">
                    <h3>${movie.titre}</h3>
                    <span> réalisateur : ${movie.realisateur}</span>               
                <p class="card-text">Sommaire : "${movie.description}"</p>
                <div class="d-flex justify-content-between align-items-center">
                <small class="text-muted">Durée : ${toHoursAndMinutes(movie.dureeTotale)} mns</small>
                <small class="text-muted">Durée de visionnage : ${perviewCalculation(movie.currentViewingDuration, movie.totalDuration)} %</small>
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




    
 

