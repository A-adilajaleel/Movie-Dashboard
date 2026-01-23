import React, { useState, Suspense, lazy } from 'react'
import { Toaster } from 'react-hot-toast'
import useMovies from './hooks/useMovies'

const Navbar = lazy(() => import('./components/Navbar'))
const Footer = lazy(() => import('./components/Footer'))
const SearchBar = lazy(() => import('./components/SearchBar'))
const MovieCard = lazy(() => import('./components/MovieCard'))

const App = () => {
  const [searchTerm, setsearchTerm] = useState("")
  const [category, setCategory] = useState("popular")

  const { movies, loading, error } = useMovies(searchTerm, category)

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory)
    setsearchTerm("")
  }

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-900">
      <Toaster />

      <Suspense fallback={<div className="h-screen flex items-center justify-center text-white">Loading...</div>}>
        <Navbar onCategoryChange={handleCategoryChange} activeCategory={category} />

        <main className="container mx-auto p-4 flex-1">
          <div className="my-6">
            <SearchBar onSearch={setsearchTerm} />
          </div>

          {error && (
            <div className="text-center text-red-500 bg-red-100 p-4 rounded-lg my-4">
              Error: {error}
            </div>
          )}

          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-red-500"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {movies.map((movie) => (
                <MovieCard
                  key={movie.id}
                  title={movie.title}
                  rating={movie.vote_average}
                  posterUrl={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                />
              ))}
            </div>
          )}

          {!loading && movies.length === 0 && !error && (
            <p className="text-center text-gray-400 mt-10">No movies found for "{searchTerm}"</p>
          )}
        </main>

        <Footer />
      </Suspense>
    </div>
  )
}

export default App
