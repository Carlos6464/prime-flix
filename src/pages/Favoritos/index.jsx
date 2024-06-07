import { useEffect, useState} from "react"
import { toast } from "react-toastify";
import "./favoritos.css"
import { Link } from "react-router-dom";

const Favoritos = () => {
    const [filmes, setFilmes] = useState([]);

    const excluirFilme = (id) => {
      let filmesFiltro = filmes.filter((filme) => filme.id !== id);
      setFilmes(filmesFiltro)
      localStorage.setItem("@primeflix", JSON.stringify(filmesFiltro))
      toast.success("Filme excluido com sucesso!")
    }

    useEffect(() => {
        const minhaLista = localStorage.getItem("@primeflix");
        setFilmes(JSON.parse(minhaLista) || []);
    }, []);

    return (
        <div className="meus-filmes">
            <h1>Minha Lista</h1>
            {filmes.length === 0 && <span>Você não possui nenhum filme salvo :(</span>}
            <ul>
                {filmes.map((filme) =>{ 
                   return (
                    <li key={filme.id}>
                        <span>{filme.title}</span>
                        <div>
                            <Link to={`/filme/${filme.id}`}>Ver detalhes</Link>
                            <button onClick={() => excluirFilme(filme.id)}>Excluir</button>
                        </div>
                    </li>
                   )
                })}
            </ul>
        </div>
    )
}

export default Favoritos;