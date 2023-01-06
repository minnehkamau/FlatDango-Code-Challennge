//adding an event listener to our loaded data
document.addEventListener("DOMContentLoaded",( e) =>{
    e.preventDefault()
    findMovies();
})

//fetch movie data from json server
function findMovies(){
fetch("http://localhost:3000/movies")
.then((response) => response.json())
.then (function (data){
    showMovies(data);
});
}

//displaying the fetched data from HTML
function showMovies(data){
    const movieList = document.querySelector('ul#list');

    //Loop through the json data

    for (let i =0; i<data.length; i++){
        const movie = data[i];
        const filmLi = document.createElement('li');
        filmLi.innerHTML = movie.title;

//adding an event listener to our movies which will allow us to display our data
        const line = document.createElement('hr');
        movieList.appendChild(line);
        movieList.appendChild(filmLi);
        filmLi.addEventListener('click',function(){
            movieInfo(movie)
        })
    }
}
//this function allows us to locate where we will render our data in the html form
//it also allows us to display all data in the json file at once
function movieInfo(movie){
    const movieInfo= document.getElementById('display-movie');
    movieInfo.innerHTML=
    
    `<p id ="movietag">Title:${movie.title}</p>
    <p id="brief">Description:${movie.description}</p> 
    <img id = "size" src="${movie.poster}">

    <p id="time">Show Time:${movie.showtime}</p>
    <p>Runtime:${movie.runtime}</p>
    <p id="capacit">Capacity:${movie.capacity}</p>
    <P id="tickets">Tickets Available:${movie.tickets_sold}</p>
   <button id="click-me">PURCHASE</button>`
    

purchaseTicket(movie)

}
// funtion for purchasing the tickets 
function purchaseTicket(movie) {
    const buyButton = document.getElementById('click-me');
    buyButton.addEventListener('click', function() {
        if (movie.tickets_sold > 0) {
            movie.tickets_sold--;
            const ticketsRemaining = document.getElementById('tickets');
            ticketsRemaining.innerHTML = `Tickets Available: ${movie.tickets_sold}`;
        } else {
            alert("Sorry, there are no more tickets available for this movie.");
        }
    });
}


