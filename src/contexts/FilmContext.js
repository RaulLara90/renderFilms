import React, { createContext, useState } from 'react'

export const FilmContext = createContext({ value: {} })

export const FilmProvider = (props) => {
  const [director, setDirector] = useState('')
  const [film, setFilm] = useState('')
  const [genre, setGenre] = useState('')

  return (
    <FilmContext.Provider
      value={{
        film,
        setFilm,
        genre,
        setGenre,
        director,
        setDirector
      }}
    >
      {props.children}
    </FilmContext.Provider>
  )
}
