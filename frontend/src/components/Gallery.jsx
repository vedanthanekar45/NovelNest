import React from "react"
import gallery from "../assets/gallery"

const Gallery = () => {
    const [randomImage, setRandomImage] = React.useState(null);
  
    React.useEffect(() => {
      const getRandomImage = () => {
        const randomIndex = Math.floor(Math.random() * gallery.length);
        return gallery[randomIndex];
      };
  
      setRandomImage(getRandomImage());
    }, []);

    if (!randomImage) return <div>Loading...</div>;

  return (
    <div>
      <h1>Gallery</h1>
      <img src={randomImage.src} alt={randomImage.alt} style={{ maxWidth: '100%', height: 'auto' }} />
    </div>
  );
};

export default Gallery;