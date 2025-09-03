import { Suspense } from "react";
import MovieInfo, { getDetailMovie } from "../../../components/movie-info";
import MovieVideos from "../../../components/movie-videos";

interface IParams {
  params: { id: string };
}

export async function generateMetadata({ params: { id } }: IParams) {
  const movie = await getDetailMovie(id);
  return {
    title: movie.title,
  };
}

export default function MovieDetail(props) {
  return (
    <div>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInfo id={props.params.id} />
      </Suspense>
      <Suspense fallback={<h1>Loading movie videos</h1>}>
        <MovieVideos id={props.params.id} />
      </Suspense>
    </div>
  );
}
