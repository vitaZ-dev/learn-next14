import { URL as API_URL } from "../(home)/page";

const getDetailMovie = async (id: string) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
};

export default async function MovieInfo({ id }) {
  const movie = await getDetailMovie(id);
  return <h6>{JSON.stringify(movie)}</h6>;
}
