import { useEffect,useState} from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../services/api";
import "./filme.css"
const Filme = () => {
    const {id} = useParams()
    const navigate = useNavigate();
    const [filme, setFilme] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadFilme = async () => {
            await api.get(`/movie/${id}`,{
                params:{
                    api_key: "8557f92bdd0da017eb01824a96d0e340",
                    language: "pt-BR"
                }
            })
            .then((response)=>{
                setFilme(response.data);
                setLoading(false);
            })
            .catch(() => {
                console.log("Filme não encontrado");
                navigate("/prime-flix", {replace: true})
                return;
            })

        }
        loadFilme()
    },[id, navigate]);

    const salvarFilme = () => {
       const minhaLista = localStorage.getItem("@primeflix");
       let filmesSalvos =  JSON.parse(minhaLista) || [];
     
       const hasFilmes = filmesSalvos.some((filmeSalvo) =>  filmeSalvo.id === filme.id)
       if(hasFilmes){
         alert("Esse filme ja esta na lista de favoritos!")
         return;
       }

       filmesSalvos.push(filme)
       localStorage.setItem("@primeflix", JSON.stringify(filmesSalvos))

    }

    if(loading){
        return(
            <div className="filme-info">
                <h2>Carregando detalhes....</h2>
            </div>
        )
    }
    return (
       <div className="filme-info">
        <h1>{filme.title}</h1>
        <img src={`http://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title}/>
        <h3>Sinopse</h3>
          <span>{filme.overview}</span>
          <strong>Avaliação: {filme.vote_average} /10</strong>

          <div className="area-buttons">
            <button onClick={salvarFilme}>Salvar</button>
            <button>
                <a target="blank" rel="external" href={`https://youtube.com/results?search_query=${filme.title} Trailer` }>Trailer</a>
            </button>
          </div>
       </div>
    )
}

export default Filme;