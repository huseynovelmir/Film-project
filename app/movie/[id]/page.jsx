import React from 'react';
import { notFound } from "next/navigation"
import Movies from "@/mocks/Movies.json"
import MovieContainer from '@/containers/movie';

 


function moviePage({ params, searchParams }) {

  const movieDetail = Movies.results.find(
    (movie) => movie.id == params.id);

  if (!movieDetail) {
    notFound()
  }

  if (searchParams.error === "true") {
    throw new Error("Error happend")
  }

  return (
    <MovieContainer movie={movieDetail} />
  )

}

export default moviePage