import React from "react";
import Image from "next/image";
import { ThumbUpIcon } from "@heroicons/react/outline";

const Thumbnails = ({
  backdropPath,
  posterPath,
  overview,
  title,
  originalName,
  mediaType,
  releasedate,
  firstAirDate,
  voteCount,
}) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";

  return (
    <div
      ref={ref}
      className="group mb-3 cursor-pointer transition transform duration-200 ease-in sm:hover:scale-105 hover:z-50 "
    >
      <Image
        src={
          `${BASE_URL}${backdropPath || posterPath}` ||
          `${BASE_URL}${posterPath}`
        }
        layout="responsive"
        width={1920}
        height={1000}
        alt=""
      />

      <div className="p-2">
        <p className="truncate max-w-md">{overview}</p>

        <h2 className="text-white text-xl mt-1 transition-all duration-100 ease-in-out group-hover:font-bold">
          {title || originalName}
        </h2>

        <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100">
          <p>{mediaType && mediaType}.</p>

          <p>{releasedate || firstAirDate}</p>

          <ThumbUpIcon className="h-5" />

          <p>{voteCount}</p>
        </div>
      </div>
    </div>
  );
};

export default Thumbnails;
