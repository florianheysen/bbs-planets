import axios from "axios";

export const getPlanetInfo = async (id: string) => {
  return axios
    .get(`https://api.le-systeme-solaire.net/rest/bodies/${id}`)
    .then((res) => res?.data);
};
