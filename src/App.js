import "./App.css";
import {BrowserRouter as Router} from 'react-router-dom'
import AllRoutes from "./AllRoutes";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import 'react-toastify/dist/ReactToastify.css';
import data from './asserts/content/content.json'
import axios from "axios";
axios.defaults.baseURL = "https://api.santhoshaudios.in/"
console.log(process.env);
function App() {
  return (
    <div>
   <Router basename={process.env.PUBLIC_URL}>
      <Navbar />
      <AllRoutes data={data} />
      <Footer data={data.Contact} />
   </Router>

    </div>
  );
}

export default App;
