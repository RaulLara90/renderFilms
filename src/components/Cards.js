import React, { useContext } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Card } from './Card'
import { FilmContext } from '../contexts/FilmContext'

const Cards = (props) => {
  const { movies } = props
  const { film } = useContext(FilmContext)
  // do some filter
  const filterFilms = movies.filter((movie) => {
    return movie.title.includes(film)
  })

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {
        filterFilms.map((movie, index) => (
          <Card
            rate={movie.rate}
            year={movie.year}
            director={movie.director}
            title={movie.title}
            genre={movie.genre}
            key={`${movie.title}-${index}`}
          />
        ))
      }
    </div>
  )
}

Cards.defaultProps = {
  film: ''
}

export { Cards }
