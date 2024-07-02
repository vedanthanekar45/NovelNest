import Navbar from "./components/Navbar"
import Gallery from "./components/Gallery"
import Info from "./components/Info"
import './App.css'

function App() {

  return (
    <div>
      <Navbar className="fixed"/>
      <Gallery />
      <Info />
    </div>
  );
}

export default App
