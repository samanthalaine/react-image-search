import { useState, useEffect } from 'react';


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
    try{
    const fetchImages = async () => {
      const res = await fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`)
      const data = await res.json()
      console.log(data)
    }
    fetchImages()
  } catch (err) {
    console.log(err)
  }
  },[])

  

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img src="https://source.unsplash.com/random" alt="" className="w-full"/>
      <div className="px-6 py-3">
      <div className="font-bold text-blue-700 text-xl mb-2">
        Photo by Samantha Laine
      </div>
      <ul>
        <li>
          <strong>Views: </strong>
          4000
        </li>
        <li>
          <strong>Downloads: </strong>
          4000
        </li>
        <li>
          <strong>Likes: </strong>
          4000
        </li>
      </ul>
      </div>
      <div className="px-6 py-3">
        <span className="inline-block bg-gray-200 rounded full px-3 py-1 text-sm font-semibold text-gray-800 mr-2">
          #tag1
        </span>
        <span className="inline-block bg-gray-200 rounded full px-3 py-1 text-sm font-semibold text-gray-800 mr-2">
          #tag1
        </span>
        <span className="inline-block bg-gray-200 rounded full px-3 py-1 text-sm font-semibold text-gray-800 mr-2">
          #tag1
        </span>
      </div>
    </div>
  );
}

export default App;
