import {add_card, clean_board} from './functions.js'

const contenedor = document.getElementById("container")
const titleSearch = document.querySelector("#titleSearch")
const genreSearch = document.querySelector("#genreSearch")

//Cuando inicia la página se muestran las películas sin filtros:
let genre_filter = movies
add_card(genre_filter,contenedor)




titleSearch.addEventListener("input",()=>{
    clean_board(contenedor)
    let array_filtered = genre_filter.filter(x => x.title.toLowerCase().includes(titleSearch.value.toLowerCase()))
    add_card(array_filtered,contenedor)
})


genreSearch.addEventListener("change",()=>{
    if (genreSearch.value === "All"){
        clean_board(contenedor)
        genre_filter = movies
        add_card(genre_filter,contenedor)
    }
    else{
        clean_board(contenedor)
        genre_filter = movies.filter(x => x.genres.includes(genreSearch.value))
        add_card(genre_filter,contenedor)
    }
    
})
