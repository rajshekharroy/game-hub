import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "30eaf63f2fc3490cbba845a52c951e25",
  },
});