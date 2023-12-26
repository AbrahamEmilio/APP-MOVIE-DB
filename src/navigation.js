import { getPopularMoviesPreview } from "./main.mjs";
import { getCategories } from "./main.mjs"

//EN ESTE DOCUMENTO GUARDAMOS LA LOGIA DE NAVEGACION
//LOCATION: ES UNA PROPIEDAD QUE NOS AYUDA A LEER LA URL EN LA QUE ESTAMOS EN EL NAVEGADOR
//ONHASHCHANGE: ES UN EVENTO QUE SE ACTIVA CUANDO CAMBIA EL HASH
window.addEventListener('DOMcontentLoaded', navigator, false);
window.addEventListener('hashchange', navigator, false);

function navigator() {
    console.log({location})
    if(location.hash.startsWith('#trends')){
        trendsPage();
    } else if (location.hash.startsWith('#search=')){
        searchPage();
    } else if (location.hash.startsWith('#movie=')){
        moviesPage();
    } else if (location.hash.startsWith('#category')){
        categoryPage();
    } else {
        homePage();
    }
}

function trendsPage(){
    console.log('estamos en trends')
};

function searchPage(){
    console.log('estamos en search')
};

function moviesPage(){
    console.log('estamos en movies')
};

function categoryPage(){
    console.log('estamos en category')
};

function homePage(){
    console.log('estamos en home')
    getPopularMoviesPreview();
    getCategories();
};