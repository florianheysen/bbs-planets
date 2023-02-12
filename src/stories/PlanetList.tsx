import React from "react";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";

import PlanetCard from "./PlanetCard";

interface Planet {
  id: string;
  name: string;
  englishName: string;
}

type Planets = Planet[];

interface IPlanetsProps {
  bodies: Planets;
  searchedResults: any;
  searchText: string;
}

const renderList = (planets: Planets) => {
  return !planets ? ( // Si l'objet planets n'existe pas encore, retourne un Loader.
    <CircularProgress sx={{ mt: 3, ml: 3 }} />
  ) : planets?.length === 0 ? ( // Si aucune planète n'est trouvée, retourne un texte au client.
    <Typography variant="body1" sx={{ mt: 2, ml: 3 }}>
      Aucune planète trouvé...
    </Typography>
  ) : (
    // Si l'objet existe, mappe sur les planètes sous forme de cartes.
    planets?.map((planet, index) => {
      return <PlanetCard planet={planet} index={index} />;
    })
  );
};

const PlanetList: React.FC<IPlanetsProps> = (props) => {
  const { bodies: planets, searchedResults, searchText } = props;

  return (
    <Grid
      container
      spacing={{ xs: 4, md: 3 }}
      columns={{ xs: 12, sm: 8, md: 12 }}
    >
      {searchText?.length > 0 // Si la champs de recherche est rempli, affiche les résultats de recherche, sinon affiche toutes les planètes.
        ? renderList(searchedResults)
        : renderList(planets)}
    </Grid>
  );
};

export default PlanetList;
