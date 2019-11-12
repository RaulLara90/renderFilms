import React from 'react'
import PropTypes from 'prop-types'
import CardM from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const Card = (props) => {
  const { genre, title, rate, year, director } = props

  return (
    <CardM
      style={{ margin: '4px', width: '200px' }}
    >
      <CardContent>
        <Typography color='textSecondary' gutterBottom>
          {title}
        </Typography>
        <Typography color='textSecondary'>
          {director}
        </Typography>
        <Typography variant='body2' component='p'>
          {rate}
          <br />
          {year}
        </Typography>
      </CardContent>
      {
        genre.map((g) => {
          return (
            <Typography key={g}>
              {g}
            </Typography>
          )
        })
      }
    </CardM>
  )
}

Card.propTypes = {
  genre: PropTypes.array.isRequired
}

Card.defaultProps = {
  genre: []
}

export { Card }
