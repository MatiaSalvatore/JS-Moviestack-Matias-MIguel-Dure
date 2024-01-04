const contenedor = document.getElementById("container")

function card_creator(movies){
    return `  
    <article class=" flex-shrink-0 w-[500px] h-[500px]  border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <img class="rounded-t-lg" src="${movies.image}" alt="" >
        <section class="w-[450px] h-[175px] m-5 overflow-auto">
            <h5 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${movies.title}</h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">${movies.overview}</p>
        </section>
    </article>
`
}

function add_card(array){
    for (const movie of array){
        const card = card_creator(movie);
        contenedor.innerHTML += card
    }    
}

add_card(movies)