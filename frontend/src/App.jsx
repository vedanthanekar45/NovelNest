import Navbar from "./components/Navbar"
import Gallery from "./components/Gallery"
import Info from "./components/Info"
import Blog from "./components/Blog"
import './App.css'

function App() {

  return (
    <div>
      <Navbar className="fixed"/>
      <Gallery />
      <Info />
      <Blog />
    </div>
  );
}

export default App
