import Footer from "./components/shared/Footer";
import Navbar from "./components/shared/Navbar";
import MainRouter from "./routers/MainRouter";
import './style.css';

function App() {

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
