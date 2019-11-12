import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import { Navbar } from './components/Navbar'
import { Cards } from './components/Cards'
import Button from '@material-ui/core/Button'
import { Filters } from './components/Filters'
import { FilmProvider } from './contexts/FilmContext'

const App = () => {
  const [openFilters, setOpenFlters] = useState(false)
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    axios.get('http://localhost:3001/movies')
      .then(response => {
        setIsLoading(false)
        setMovies(response.data)
      })
      .catch((er) => setIsLoading(false))
  }, [])

  console.log({ isLoading })

  return (
    <>
      <Navbar>
        <Button onClick={() => setOpenFlters(!openFilters)} color='inherit'> Open filters</Button>
      </Navbar>
      <FilmProvider>
        <Filters isOpen={openFilters} onClose={() => setOpenFlters(false)} />
        <Cards movies={movies} />
      </FilmProvider>
    </>
  )
}
export default App
