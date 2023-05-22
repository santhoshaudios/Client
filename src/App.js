import "./App.css";
import {BrowserRouter as Router} from 'react-router-dom'
import AllRoutes from "./AllRoutes";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import 'react-toastify/dist/ReactToastify.css';
import data from './asserts/content/content.json'
import axios from "axios";
axios.defaults.baseURL = process.env.REACT_APP_appurl
console.log(process.env);
function App() {
  return (
    <div>
   <Router baseURL="https://santhoshaudios.in/">
      <Navbar />
      <AllRoutes data={data} />
      <Footer data={data.Contact} />
   </Router>

    </div>
  );
}

export default App;
