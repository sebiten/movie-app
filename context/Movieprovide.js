
// Path: context\Movieprovider.js
import { createContext } from 'react';

export const MovieContext = createContext();

export const MovieProvider = (props) => {

  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
}










