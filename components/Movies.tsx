import { Movie } from "../types/types";
import ThumbNail from "./ThumbNail";
const Movies: React.FC<{ results: Movie[] }> = ({ results }) => {
  console.log(results[0].vote_count);
  return (
    <div className="my-10 px-5 sm:grid sm:grid-cols-2 md:grid-cols-3 3xl:flex flex-wrap  justify-center">
      {results.map((m) => (
        <ThumbNail
          key={m.id}
          src={`https://image.tmdb.org/t/p/original${
            m.poster_path || m.backdrop_path
          }`}
          title={m.title || m.original_title}
          overview={m.overview}
          releaseDate={m.release_date}
          voteCount={m.vote_count}
        />
      ))}
    </div>
  );
};
export default Movies;
