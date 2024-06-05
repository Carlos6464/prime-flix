import { Link } from "react-router-dom";
import './header.css';

const Header = () => {
    return (
       <header>
          <Link className="logo" to="/" >Prime flix</Link>
          <Link className="favoritos" to="/favoritos">Meus filmes favoritos</Link>
       </header>
    )
}

export default Header;