import { FilmsContext } from "context/FilmsProvider";
import { useContext } from "react";

export function useFilms() {
  const context = useContext(FilmsContext);
  if (!context) {
    throw new Error("useFilms must be used within a FilmsProvider");
  }
  return context;
}
