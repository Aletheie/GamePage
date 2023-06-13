import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: "5004c45496a2476087eefca0bc610a95",
  },
});
