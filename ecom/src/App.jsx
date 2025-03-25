import React ,{useState}from 'react'
import Header from './Components/Header'
import MovieList from './Components/MovieList'

const App = () => {
  const[movies,setMovies]=useState([]);
  const[isLoading,setIsLoading]=useState(false);
  async function fetchMoviesHandler(){
    setIsLoading(true);
  const response=await fetch('https://swapi.dev/api/films/');
  const data=await response.json();
    const transformedMovies=data.results.map(movieData=>{
      return {
        id:movieData.episode_id,
        title:movieData.title,
        openingText:movieData.opening_crawl,
     releaseData: movieData.release_date
      }
    });
   setMovies(transformedMovies);
   setIsLoading(false);
  
  }
  return (
    <div>
    <Header/>
    <section>
      <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section> 
      <section>
      {!isLoading && movies.length > 0 && <MovieList movies={movies}/>}
      {!isLoading && movies.length===0 && <p>Found no movies</p>}
      {isLoading && <p>Loading...</p>}
      </section>
    </div>
  )
}

export default App
