
 const urlFetch = "http://localhost:3000/api/movies"
  const movieFetch = fetch(urlFetch);
  let htmlElements = "";
  let allMoviesViewingDuration = 0;
  let allMoviesDuration = 0;
 
 movieFetch
.then(function(res) {
    if (res.ok) {
        return res.json();

    }
    
})

.then(function(data) {
  data.forEach(movie => {
  
 
  

    htmlElements += `
    <div class="col">
          <div class="card shadow-sm">
          <img class = "img" src="${movie.imageUrl}"/>

            <div class="card-body">
            <h3>${movie.titre}</h3>
              <p class="card-text"> <details><summary>Sommaire</summary> "${movie.description}"</details></p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary"><a href="http://127.0.0.1:5500/videotheque/movie_detail.html?id=${movie._id}">View</a></button>
             
                </div>
                <small class="text-muted"> ${toHoursAndMinutes(movie.dureeTotale)} mins</small>
              
                </div>
            </div>
            </div>
            </div>
            `;
            allMoviesViewingDuration += movie.dureeDeVisionnage; 
   
            allMoviesDuration += movie.dureeTotale;
            
  });
  const moviesList = document.getElementById("moviesList");
  moviesList.innerHTML = htmlElements;
  
  
  const perviewsdiv= document.getElementById("perviewsdiv");
  const div = document.createElement("div");
  div.textContent = `Durée de visionnage totale :  ${perviewCalculation(allMoviesViewingDuration, allMoviesDuration)}%`;
  perviewsdiv.appendChild(div);
  
})

.catch(function(err) {
    console.log(err);

});

