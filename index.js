//manipulating the DOM
document.addEventListener("DOMContentLoaded", ( ) =>{
    getMovies();
})

//fetch movies from Json server
function getMovies(){
fetch("http://localhost:3000/movies")
.then((response) => response.json())
.then (function (data){
    showMovies(data);
});
}

// async function getMovies(){

//     try{
//         const response = await fetch("http://localhost:3000/movies")
//         return await response.json()
//     }catch (error){
//         console.error(error)
//     }
// }
// let movieShow ={}
// getMovies().then (data => movieShow =data)

// const showEvent=document.que
function showMovies(data){
    const movieList = document.querySelector('ul#list');

    for (let i =0; i<data.length; i++){
        const movie = data[i];
        const filmLi = document.createElement('li');
        filmLi.innerHTML = movie.title;


        const line = document.createElement('hr');
        movieList.appendChild(line);
        movieList.appendChild(filmLi);
        filmLi.addEventListener('click',function(){
            movieDetails(movie)
        })
    }
}

function movieDetails(movie){
    const movieDetails= document.getElementById('show-movie');
    movieDetails.innerHTML=`
    
    <p id ="movietag">Title:${movie.title}</p>
    <p id="brief">Description:${movie.description}</p> 
    <img id = "size" src="${movie.poster}">

    <p>Show Time:${movie.showtime}</p>
    <p>Runtime:${movie.runtime}</p>
    <p id="capacit">Capacity:${movie.capacity}</p>
    <P id="tickets">Tickets Available:${movie.tickets_sold}</p>
   
    


`
}