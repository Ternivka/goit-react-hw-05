import axios from "axios";

const url =
  "https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1";
const options = {
  headers: {
    Authorization: "Bearer 512b9deae799e2b16a8fc5d63d375ac4",
  },
};

axios
  .get(url, options)
  .then((response) => console.log(response.data)) //
  .catch((err) => console.error("Error fetching movies:", err)); //
