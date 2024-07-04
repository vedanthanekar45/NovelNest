import React from "react"
import gallery from "../../assets/gallery"

const Gallery = () => {
    const [randomImage, setRandomImage] = React.useState(null);
  
    React.useEffect(() => {
      function getRandomImage() {
        const randomIndex = Math.floor(Math.random() * gallery.length);
        return gallery[randomIndex];
      }
      setRandomImage(getRandomImage());
    }, []);

    if (!randomImage) return <div>Loading...</div>;

  return (
    <div className="relative object-contain">
      <img src={randomImage.src} style={{ maxWidth: '100%', height: 'auto' }} />
      <h1 className="banner-text absolute text-7xl text-center text-white">
        One stop place for everything <br></br>
        about a man`s best friend!
      </h1>
    </div>
  );
};

export default Gallery;