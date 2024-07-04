import Navbar from "./home_components/Navbar"
import Gallery from "./home_components/Gallery"
import Info from "./home_components/Info"
import Blog from "./home_components/Blog"

function Homepage() {

  return (
    <div>
      <Navbar className="fixed"/>
      <Gallery />
      <Info />
      <Blog />
    </div>
  );
}

export default Homepage;
