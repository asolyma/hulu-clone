export const endPoints = [
  {
    title: "Trending",
    url: `https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.API_KEY}`,
  },
  {
    title: `top rated`,
    url: `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.API_KEY}&language=en-US`,
  },
  {
    title: `Action`,
    url: `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&language=en-US&with_genres=28`,
  },
  {
    title: `Adventure`,
    url: `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&language=en-US&with_genres=12`,
  },
  {
    title: `Animation`,
    url: `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&language=en-US&with_genres=16`,
  },
  {
    title: `Comedy`,
    url: `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&language=en-US&with_genres=35`,
  },
  {
    title: `Crime`,
    url: `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&language=en-US&with_genres=80`,
  },
  {
    title: `Documentary`,
    url: `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&language=en-US&with_genres=99`,
  },
  {
    title: `Drama`,
    url: `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&language=en-US&with_genres=18`,
  },
  {
    title: `Family`,
    url: `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&language=en-US&with_genres=10751`,
  },
  {
    title: `Fantasy`,
    url: `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&language=en-US&with_genres=14`,
  },
  {
    title: `History`,
    url: `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&language=en-US&with_genres=36`,
  },
  {
    title: `Horror`,
    url: `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&language=en-US&with_genres=27`,
  },
  {
    title: `Music`,
    url: `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&language=en-US&with_genres=10402`,
  },
  {
    title: `Mystery`,
    url: `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&language=en-US&with_genres=9648`,
  },
  {
    title: `Romance`,
    url: `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&language=en-US&with_genres=10749`,
  },
  {
    title: `Science Fiction`,
    url: `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&language=en-US&with_genres=878`,
  },
  {
    title: `TV Movie`,
    url: `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&language=en-US&with_genres=10770`,
  },
  {
    title: `Thriller`,
    url: `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&language=en-US&with_genres=53`,
  },
  {
    title: `War`,
    url: `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&language=en-US&with_genres=10752`,
  },
  {
    title: `Western`,
    url: `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&language=en-US&with_genres=37`,
  },
];
