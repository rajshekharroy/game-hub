import { useQuery } from "@tanstack/react-query";
// import apiClient, { FetchResponse } from "../services/api-client";
import genres from "../data/genres";
import ApiClient from "../services/api-client";

const apiClient = new ApiClient<Genre>("/genres");

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

// const useGenre = () => useData<Genre>("/genres"); //this will fetch data
// const useGenre = () => ({ data: genres, isLoading: false, error: null }); // but this will take data from data/genres.ts and it will be faster but not updated from the api as genre not frequently change

const useGenre = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000,
    initialData: { count: genres.length, results: genres },
  });

export default useGenre;
