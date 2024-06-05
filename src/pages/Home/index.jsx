import { useEffect,useState } from "react";
import { Link } from "react-router-dom";
import "./home.css"
import api from "../../services/api";

const Home = () => {
    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
        const loadFilmes = async () => {
            const response = await  api.get("movie/now_playing",{
                params:{
                    api_key: "8557f92bdd0da017eb01824a96d0e340",
                    language: "pt-BR",
                    page:1
                }
                
            })
            setFilmes(response.data.results)
            // console.log(response.data.results);
        }

        loadFilmes()
    },[])
    return (
        <div className="container">
            <div className="lista-filmes">
                {filmes.map((filme) => {
                    return(
                        <article key={filme.id}>
                            <strong>{filme.title}</strong>
                            <img src={`http://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title}/>
                            <Link to={`/filme/${filme.id}`}>Acessar</Link>
                        </article>
                    )
                })}
            </div>
        </div>
    )
}

export default Home;