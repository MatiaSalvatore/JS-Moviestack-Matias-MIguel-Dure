import {add_card, clean_board} from './functions.js'

const contenedor = document.getElementById("container")
const titleSearch = document.querySelector("#titleSearch")
const genreSearch = document.querySelector("#genreSearch")

//Cuando inicia la página se muestran las películas sin filtros:
let genre_filter = movies
let name_filter = movies

add_card(genre_filter,contenedor)


let filter_array= []



titleSearch.addEventListener("input",()=>{
    clean_board(contenedor)
    name_filter = movies.filter(x => x.title.toLowerCase().includes(titleSearch.value.toLowerCase()))
    filter_array = name_filter.filter(x=> genre_filter.includes(x))
    add_card(filter_array,contenedor)
    error_message()
})


genreSearch.addEventListener("change",()=>{
    if (genreSearch.value === "All"){
        clean_board(contenedor)
        genre_filter = movies
        filter_array = genre_filter.filter(x=> name_filter.includes(x))
        add_card(filter_array,contenedor)
        error_message()
    }
    else{
        clean_board(contenedor)
        genre_filter = movies.filter(x => x.genres.includes(genreSearch.value))
        filter_array = genre_filter.filter(x=> name_filter.includes(x))
        add_card(filter_array,contenedor)
        error_message()
    }
})



console.log(filter_array)

function error_message(){
    if (filter_array.length === 0){
        contenedor.innerText = "Sorry! But there are no matching results"
    }
}
