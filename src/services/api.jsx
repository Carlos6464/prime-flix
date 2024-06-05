import axios from "axios";

//Base da  URL https://api.themoviedb.org/3/
//URL DA API: /movie/now_playing?api_key=8557f92bdd0da017eb01824a96d0e340&language=pt-BR

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})

export default api;