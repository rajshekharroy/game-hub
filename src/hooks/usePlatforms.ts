import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import ApiClient from "../services/api-client";

const apiClient = new ApiClient<Platform>("/platforms/lists/parents");

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

// const usePlatforms = () => useData<Platform>("/platforms/lists/parents");
// const usePlatforms = () =>
//   useQuery({
//     queryKey: ["platforms"],
//     queryFn: () =>
//       apiClient
//         .get<FetchResponse<Platform>>("/platforms/lists/parents")
//         .then((res) => res.data),
//     staleTime: 24 * 60 * 60 * 100,
//     initialData: platforms,
//   });
const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 100,
    initialData: platforms,
  });

export default usePlatforms;
