//CREAMOS LA INSTANCIA DE AXIOS
const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
        'Content-Type': 'application/json;charset=utf-8'
    },
    params: {
        'api_key': API_KEY
    }
})

import { API_KEY } from './secrets.mjs'

export const getPopularMoviesPreview = async() => {
    const { data } = await api(`trending/movie/day?api_key=${API_KEY}`);

    const movies = data.results;

    const trendingMoviesPreviewList = document.querySelector('.trendingPreview-movieList')

    movies.forEach((movie) => {
        const movieContainer = document.createElement('div')
        movieContainer.classList.add('movie-container')

        const movieImg = document.createElement('img')
        movieImg.classList.add('movie-img')
        movieImg.setAttribute('alt', movie.title)
        movieImg.src = `https://image.tmdb.org/t/p/w300/${movie.poster_path}`;

        movieContainer.append(movieImg)
        trendingMoviesPreviewList.append(movieContainer)
    })
}

export const getCategories = async() => {
    const { data } = await api(`genre/movie/list?api_key=${API_KEY}`);

    const categories = data.genres;
    const categoriesPreviewList = document.querySelector('.categoriesPreview-list')

    categories.forEach((categorie) => {
        const categorieContainer = document.createElement('div');
        categorieContainer.classList.add('category-container');

        const categorieTitle = document.createElement('h3');
        categorieTitle.classList.add('category-title');
        categorieTitle.setAttribute('id', `id${categorie.id}`);
        categorieTitle.textContent = categorie.name;

        categorieContainer.append(categorieTitle);
        categoriesPreviewList.append(categorieContainer);
    })
}

