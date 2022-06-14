import React from "react";
import Thumbnails from "./Thumbnails";

const Movies = ({ results }) => {
  return (
    <div className="my-10 px-5 sm:grid md:space-x-5 md:grid-cols-2 lg:grid-cols-3 3xl:flex flex-wrap justify-center ">
      {results?.map((result) => (
        <Thumbnails
          key={result.id}
          backdropPath={result.backdrop_path}
          posterPath={result.poster_path}
          overview={result.overview}
          title={result.title}
          originalName={result.original_name}
          mediaType={result.media_type}
          releasedate={result.release_date}
          firstAirDate={result.first_air_date}
          voteCount={result.vote_count}
        />
      ))}
    </div>
  );
};

export default Movies;
