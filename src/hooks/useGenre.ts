// import useData from "./useData";

import genres from "../data/genres";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

// const useGenre = () => useData<Genre>("/genres");  //this will fetch data
const useGenre = () => ({ data: genres, isLoading: false, error: null }); // but this will take data from data/genres.ts and it will be faster but not updated from the api as genre not frequently change

export default useGenre;
