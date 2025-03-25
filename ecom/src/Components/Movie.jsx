import React from 'react'

const Movie = (props) => {
  return (
    <div>
    <li>{props.title}</li>
    <h2>{props.title}</h2>
    <h3>{props.releaseDate}</h3>
    <p>{props.openingText}</p>
    </div>
  )
}

export default Movie
