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

const apiKey = "0ff70d54-dc0b-4262-9c3d-776cb0f34dbd"

const init = {
    method: 'GET',
    headers: {
        "x-api-key": "0ff70d54-dc0b-4262-9c3d-776cb0f34dbd"
    }
}

const api = fetch('https://moviestack.onrender.com/api/movies', init).then(response => response.json()).then(data =>{
    movie_catalog = data.movies
    add_card(movie_catalog,contenedor,movie_catalog)
    console.log(movie_catalog)
    genre_filter = data.movies
    name_filter = data.movies
} ).catch(err => console.log(err))


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
        add_card(filter_array,contenedor)
        error_message()
    }
    else{
        clean_board(contenedor)
        genre_filter = movie_catalog.filter(x => x.genres.includes(genreSearch.value))
        filter_array = genre_filter.filter(x=> name_filter.includes(x))
        add_card(filter_array,contenedor)
        error_message()
    }
})


function error_message(){
    if (filter_array.length === 0){
        contenedor.innerText = "Sorry! But there are no matching results"
    }
}


/*function fav_functionality(){
    const favourites = document.querySelectorAll(".favbtn")
    favourites.forEach(movie => {
        movie.addEventListener("click",()=>{
            let movieId = movie.getAttribute("id")
            let add_fav = movie_catalog.find(movie => movie.id === movieId)

            favs.forEach(fav =>{
                if (fav.id == add_fav.id){
                        favs.push(add_fav)
                        localStorage.setItem("favs", JSON.stringify(favs))
                        console.log("Hola1")
                    }
                else{
                        favs = favs.filter(x => fav.id != add_fav.id)
                        localStorage.setItem("favs", JSON.stringify(favs))
                        console.log("Adios")
                    }
                })
            
        })
    });
} */


function fav_functionality(){
    contenedor.addEventListener("click", (e)=>{
        if (e.target.dataset.id != undefined){
            let movieId = e.target.dataset.id 
            let add_fav = movie_catalog.find(movie => movie.id === movieId)
            console.log(add_fav)
            if(favs.includes(movieId)){
                favs = favs.filter(x => x != movieId)
            }
            else {
                favs.push(movieId)
            }
            }
        localStorage.setItem("favs",JSON.stringify(favs))
        }
    )
}




fav_functionality()

