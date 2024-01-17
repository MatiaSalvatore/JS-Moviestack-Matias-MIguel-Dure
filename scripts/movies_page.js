/*
  __  __            _                                   
 |  \/  |          (_)                                  
 | \  / | _____   ___  ___ ___   _ __   __ _  __ _  ___ 
 | |\/| |/ _ \ \ / | |/ _ / __| | '_ \ / _` |/ _` |/ _ \
 | |  | | (_) \ V /| |  __\__ \ | |_) | (_| | (_| |  __/
 |_|  |_|\___/ \_/ |_|\___|___/ | .__/ \__,_|\__, |\___|
                                | |           __/ |     
                                |_|          |___/      
*/
import {add_card, clean_board} from './functions.js'

const contenedor = document.getElementById("container")
const titleSearch = document.querySelector("#titleSearch")
const genreSearch = document.querySelector("#genreSearch")

//Cuando inicia la página se muestran las películas sin filtros:

let genre_filter = []
let name_filter = []
let filter_array = []
let movie_catalog = []
let favs = JSON.parse(localStorage.getItem("favs")) || []


//Llamando a la API para las películas:

const apiKey = "0ff70d54-dc0b-4262-9c3d-776cb0f34dbd"

const init = {
    method: 'GET',
    headers: {
        "x-api-key": "0ff70d54-dc0b-4262-9c3d-776cb0f34dbd"
    }
}

const api = fetch('https://moviestack.onrender.com/api/movies', init).then(response => response.json()).then(data =>{
    movie_catalog = data.movies
    add_card(movie_catalog,contenedor,favs)
    console.log(movie_catalog)
    genre_filter = data.movies
    name_filter = data.movies
} ).catch(err => console.log(err))


//Funciones usadas en la página movies:

function error_message(){
    if (filter_array.length === 0){
        contenedor.innerText = "Sorry! But there are no matching results"
    }
}

function fav_functionality(){
    contenedor.addEventListener("click", (e)=>{
        if (e.target.dataset.id != undefined){
            let movieId = e.target.dataset.id 
            let add_fav = movie_catalog.find(movie => movie.id === movieId)
            if(favs.includes(movieId)){
                favs = favs.filter(x => x != movieId)
                e.target.className = "h-12 w-12 bg-gray-950	 rounded-md flex flex-row items-center justify-center"
            }
            else {
                favs.push(movieId)
                e.target.className = "h-12 w-12 bg-violet-700 rounded-md flex flex-row items-center justify-center"
            }
            }
        localStorage.setItem("favs",JSON.stringify(favs))
        }
    )
}

fav_functionality()


//Eventos Input:

titleSearch.addEventListener("input",()=>{
    clean_board(contenedor)
    name_filter = movie_catalog.filter(x => x.title.toLowerCase().includes(titleSearch.value.toLowerCase()))
    filter_array = name_filter.filter(x=> genre_filter.includes(x))
    add_card(filter_array,contenedor,favs)
    error_message()
})

genreSearch.addEventListener("change",()=>{
    if (genreSearch.value === "All"){
        clean_board(contenedor)
        genre_filter = movie_catalog
        filter_array = genre_filter.filter(x=> name_filter.includes(x))
        add_card(filter_array,contenedor,favs)
        error_message()
    }
    else{
        clean_board(contenedor)
        genre_filter = movie_catalog.filter(x => x.genres.includes(genreSearch.value))
        filter_array = genre_filter.filter(x=> name_filter.includes(x))
        add_card(filter_array,contenedor,favs)
        error_message()
    }
})


