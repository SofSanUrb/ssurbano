import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Home from "./pages/Home"

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <Footer />
    </div>
  );
}

export default App;
