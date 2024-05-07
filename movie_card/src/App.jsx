import {Movie_cnt} from "./component/movie_cnt.jsx";
import {data} from "./component/movie_data.js";
import './App.css'

function App() {


  return (
    <>
      <div className="">
      {data.map((data) => (
        <Movie_cnt
          key={data.id}
          movie={data.name}
          genre={data.genre}
          image={data.image}
          duration={data.duration}
          year={data.year}
          synopsis={data.synopsis}
        />
      ))}
    </div>

    
    </>
  )
}

export default App
