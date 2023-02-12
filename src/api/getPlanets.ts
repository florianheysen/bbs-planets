import axios from "axios";

export const getPlanets = async () => {
  return axios
    .get(
      "https://api.le-systeme-solaire.net/rest/bodies/?data=id,name,englishName&filter[]=isPlanet,eq,true&order=name,asc"
    )
    .then((res) => res?.data?.bodies);
};
