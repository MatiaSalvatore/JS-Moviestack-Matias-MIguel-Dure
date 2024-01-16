import {add_card, clean_board} from './functions.js'

const contenedor = document.getElementById("container")
const titleSearch = document.querySelector("#titleSearch")
const genreSearch = document.querySelector("#genreSearch")

//Cuando inicia la página se muestran las películas sin filtros:
let genre_filter = []
let name_filter = []
let filter_array = []
let favs = JSON.parse(localStorage.getItem("favs"))
let movie_catalog = favs

const apiKey = "0ff70d54-dc0b-4262-9c3d-776cb0f34dbd"

const init = {
    method: 'GET',
    headers: {
        "x-api-key": "0ff70d54-dc0b-4262-9c3d-776cb0f34dbd"
    }
}

add_card(favs,contenedor)

titleSearch.addEventListener("input",()=>{
    clean_board(contenedor)
    name_filter = movie_catalog.filter(x => x.title.toLowerCase().includes(titleSearch.value.toLowerCase()))
    filter_array = name_filter.filter(x=> genre_filter.includes(x))
    add_card(filter_array,contenedor)
    error_message()
    fav_functionality()
})


genreSearch.addEventListener("change",()=>{
    if (genreSearch.value === "All"){
        clean_board(contenedor)
        genre_filter = movie_catalog
        filter_array = genre_filter.filter(x=> name_filter.includes(x))
        add_card(filter_array,contenedor)
        error_message()
        fav_functionality()
    }
    else{
        clean_board(contenedor)
        genre_filter = movie_catalog.filter(x => x.genres.includes(genreSearch.value))
        filter_array = genre_filter.filter(x=> name_filter.includes(x))
        add_card(filter_array,contenedor)
        error_message()
        fav_functionality()
    }
})


function error_message(){
    if (filter_array.length === 0){
        contenedor.innerText = "Sorry! But there are no matching results"
    }
}


function fav_functionality(){
    const favourites = document.querySelectorAll(".favbtn")
    favourites.forEach(movie => {
        movie.addEventListener("click",()=>{
            let movieId = movie.getAttribute("id")
            let add_fav = movie_catalog.find(movie => movie.id === movieId)
            let remove_fav = movie_catalog.findIndex(movie =>movie.id === movieId)
            if (add_fav.favourited === true){
                add_fav.favourited = true
                favs.push(add_fav)
                localStorage.setItem("favs",JSON.stringify(favs))
                movie.setAttribute("fill", "white")
            }
            else {
                console.log("already_added")
                add_fav.favourited = false
                favs.splice(remove_fav,1)
                localStorage.setItem("favs",JSON.stringify(favs))
            }
            

        })

    });
}