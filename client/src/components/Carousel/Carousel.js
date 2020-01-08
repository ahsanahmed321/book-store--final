import React from "react";
import { Gallery, GalleryImage } from "react-gesture-gallery";

const images = [
  "https://cdn.pixabay.com/photo/2014/05/02/23/52/castle-336498_960_720.jpg",
  "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1504&q=80",
  "https://cdn.pixabay.com/photo/2015/05/15/14/48/house-768707_960_720.jpg"
];

function App() {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      if (index === 2) {
        setIndex(0);
      } else {
        setIndex(prev => prev + 1);
      }
    }, 3000);
    return () => clearInterval(timer);
  }, [index]);

  return (
    <div
      style={{
        background: "inherit",
        height: "50vh",
        width: "100%"
      }}
    >
      <Gallery
        index={index}
        onRequestChange={i => {
          setIndex(i);
        }}
      >
        {images.map(image => (
          <GalleryImage objectFit="contain" key={image} src={image} />
        ))}
      </Gallery>
    </div>
  );
}

export default App;
