import { useState, useEffect } from 'react';


const useMovies = (searchTerm, category = 'popular') => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;


  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        setError(null);

       
        let url;
        if (searchTerm) {
          url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchTerm}`;
        } else {
         
          url = `https://api.themoviedb.org/3/movie/${category}?api_key=${API_KEY}`;
        }

        const response = await fetch(url);
        if (!response.ok) throw new Error("Failed to fetch data from TMDB");

        const data = await response.json();
        setMovies(data.results); 
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies()
  }, [searchTerm, category]) 

  return { movies, loading, error };
}

export default useMovies;