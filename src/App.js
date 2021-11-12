import { useState, useEffect } from 'react';
import ImageCard from './components/ImageCard'
import ImageSearch from './components/ImageSearch'


function App() {
  const [images, setImages] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [term, setTerm] = useState('')

  // useEffect(() =>{
  //   fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`)
  //   .then(res => res.json())
  //   .then(data=>console.log(data))
  //   .catch(err => console.error(err))
  // }, [])

  useEffect(() => {
    try {
    const fetchImages = async () => {
      const res = await fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true&safesearch=true&per_page=18`)
      const data = await res.json()
      setImages(data.hits)
      setIsLoading(false)
    }
    fetchImages()
  } catch (err) {
    console.log(err)
  }
  },[term])

  

  return (
    <div className="container mx-auto mb-10">
      <ImageSearch searchText={(text)=>setTerm(text)}/>

      {!isLoading && images.length === 0 && <h1 className="text-3xl text-gray-700 text-center mx-auto mt-32">No images found</h1>}

      {isLoading ? <h1 className="text-4xl text-center text-gray-500 mx-auto mt-32">Loading...</h1> : <div className="grid grid-cols-3 gap-4">
        {images.map((image)=>(
          <ImageCard key={image.id} image={image}/>
        ))}
      </div>}
    </div>
  );
}

export default App;
