
import RoutesApp from "./routesApp"
import { ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  return (
    <div className="app">
      <ToastContainer autoClose={3000}/>
      <RoutesApp/>
    </div>
  )
}

export default App
