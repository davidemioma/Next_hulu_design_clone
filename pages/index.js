import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Movies from "../components/Movies";
import requests from "../utils/request";

const Home = ({ results }) => {
  return (
    <div>
      <Head>
        <title>Movies</title>
      </Head>

      <Header />

      <Nav />

      <Movies results={results} />
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const genre = context.query.genre;

  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }`
  ).then((res) => res.json());

  return {
    props: {
      results: request.results,
    },
  };
};

export default Home;
