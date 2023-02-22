import { useContext  } from "react";
import { MovieContext } from "../context/Movieprovider";

export default function useFilms() {
  return useContext(MovieContext);
}
