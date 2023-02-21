import React from 'react'

function index({ movie }) {
  return (
    <div>{
      movie ? (
        <div>
          <h1>{movie.title}</h1>
          <p>{movie.description}</p>
        </div>
      ) : (
        <h1>Movie not found</h1>
      )
      }</div>
  )
}

export default index