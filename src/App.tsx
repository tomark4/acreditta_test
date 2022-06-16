import Footer from "./components/shared/Footer";
import Navbar from "./components/shared/Navbar";
import MainRouter from "./routers/MainRouter";
import './style.css';

/**
 * App component
 * @author [jose quintero](https://jottasistemascom) 
 */

const App = () =>{

  return (
    <div className="page">
      <Navbar />

      <div className="content">
        <MainRouter />
      </div>

      <Footer />
    </div>
  );
}

export default App;
