import { useState, useEffect } from "react"
import ImageCard from "./components/ImageCard";
import ImageSearch from "./components/ImageSearch";

const App = () => {

  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=25527650-4522068f0344e72a45a6ae507&q=${term}&image_type=photo`)
                                  .then(res => res.json())
                                  .then(data => {
                                    setImages(data.hits);
                                    setIsLoading(false);
                                  })
                                  .catch(error => console.log(error))
  }, [term])

  return (
      <div className="container mx-auto mt-10">

        <ImageSearch  searchText={(text => setTerm(text))} />

        {!isLoading && images.length === 0 && <h1 className="text-5xl text-center mx-aut mt-32">No se encontraron imagenes</h1>}

       { isLoading ? <h1 className="text-6xl text-center mx-aut mt-32">Loading...</h1> : <div className="grid grid-cols-3 gap-4">
          {images.map(image => (
            <ImageCard key={image.id} image={image} />
          ))}
        </div>}
      </div>
  
  )
}

export default App