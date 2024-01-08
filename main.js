const contenedor = document.getElementById("container")

function card_creator(movie){
    return `  
    <article class="flex-shrink-0 w-[300px] border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <img class="rounded-t-lg" src="${movie.image}" alt="" >
        <h5 class="mb-1 ml-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${movie.title}</h5>
        <div class = "h-[175px] text-wrap overflow-auto m-1 ">
            <p class="font-normal text-gray-700 dark:text-gray-400 text-justify m-3">${movie.overview}</p>
        </div>
       
        <button type="button" id="moreInfo" class="bg-[#5b21b6] hover:bg-[#c084fc] text-white font-bold py-2 px-4 rounded-full float-right mt-4 mr-7 mb-7">More info</button>
    </article>
`
}

function add_card(array, containers){
    for (const movie of array){
        const card = card_creator(movie);
        containers.innerHTML += card
    }    
}

function clean_board(container){
    container.innerHTML = ""
}


let genre_filter = movies

const titleSearch = document.querySelector("#titleSearch")
const genreSearch = document.querySelector("#genreSearch")

titleSearch.addEventListener("input",()=>{
    clean_board(contenedor)
    let array_filtered = genre_filter.filter(x => x.title.toLowerCase().includes(titleSearch.value.toLowerCase()))
    add_card(array_filtered,contenedor)
})

add_card(genre_filter,contenedor)

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



