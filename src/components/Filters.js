import React, { useState, useContext } from 'react'
import Drawer from '@material-ui/core/Drawer'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import { FilmContext } from '../contexts/FilmContext'

const Filters = (props) => {
  const { isOpen, onClose } = props
  const {
    film,
    setFilm,
    genre,
    setGenre,
    director,
    setDirector
  } = useContext(FilmContext)

  return (
    <Drawer anchor='left' open={isOpen} onClose={onClose}>
      <div id='drawler-content' style={{ display: 'flex', flexDirection: 'column', padding: 60 }}>

        <Typography variant='h4'>
            Filters
        </Typography>
        <TextField
          id='film'
          label='Film'
          value={film}
          onChange={(e) => setFilm(e.target.value)}
          margin='normal'
        />
        <TextField
          id='director'
          label='Director'
          value={director}
          onChange={(e) => setDirector(e.target.value)}
          margin='normal'
        />
        <div style={{ height: 20 }} />
        <Typography variant='h6'>
            Genre
        </Typography>
        <RadioGroup aria-label='gender' name='gender1' value={genre} onChange={(e) => setGenre(e.target.value)}>
          <FormControlLabel value='Drama' control={<Radio />} label='Drama' />
          <FormControlLabel value='Crime' control={<Radio />} label='Crime' />
          <FormControlLabel value='Action' control={<Radio />} label='Action' />
          <FormControlLabel value='Thriller' control={<Radio />} label='Thriller' />
          <FormControlLabel value='Biography' control={<Radio />} label='Biography' />
          <FormControlLabel value='History' control={<Radio />} label='History' />
          <FormControlLabel value='Adventure' control={<Radio />} label='Adventure' />
        </RadioGroup>
      </div>
    </Drawer>
  )
}
export { Filters }
