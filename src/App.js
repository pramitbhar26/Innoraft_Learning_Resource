import './App.css';
import {Route} from "react-router-dom"; 
import Header from "./components/header/Header.js";
import Footer from './components/footer/Footer.js';
function App() {
  return (
    <div className="App">
      <Header />
      <Footer />
    </div>
  );
}

export default App;
