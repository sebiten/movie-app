import React from 'react'

function Movies( { movies }) {

  console.log(movies);
  return (
    <div className='mt-24'>
      <h1 className='text-white'>hola</h1>

    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch('https://www.omdbapi.com/?i=tt3896198&apikey=494df15b&')
  const data = await res.json()
  return {
    props: { movies: data }
  }
}



export default Movies