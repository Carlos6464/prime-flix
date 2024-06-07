import Home from "./pages/Home";
import Filme from "./pages/Filme";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Error from "./pages/Error";
import Favoritos from "./pages/Favoritos";

const RoutesApp = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/prime-flix" element={ <Home/> } />
                <Route path="/filme/:id" element={ <Filme/>} />
                <Route path="/favoritos" element={<Favoritos/>} />


                
                <Route path="*" element={<Error/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;