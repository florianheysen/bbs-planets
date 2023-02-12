import React from "react";
import { getPlanets } from "../api";
import { useQuery } from "@tanstack/react-query";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";

import { PlanetsList, PlanetsSearch } from "../components";
import { useSearchStore } from "../store";

interface Planet {
  id: string;
  name: string;
  englishName: string;
}

interface SearchState {
  searchText: string;
  searchedResults: string[] | null;
  setSearchText: (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
  setSearchedResults: (searchResults: string[]) => void;
  clearSearch: () => void;
}

const Home: React.FC<{}> = () => {
  const [searchTimeout, setSearchTimeout] = React.useState<any>(null);

  const searchText = useSearchStore((state: SearchState) => state.searchText);
  const setSearchText = useSearchStore(
    (state: SearchState) => state.setSearchText
  );
  const searchedResults = useSearchStore(
    (state: SearchState) => state.searchedResults
  );
  const setSearchedResults = useSearchStore(
    (state: SearchState) => state.setSearchedResults
  );
  const clearSearch = useSearchStore((state: SearchState) => state.clearSearch);

  const {
    status,
    error,
    data: allPlanets,
  } = useQuery({
    queryKey: ["planets"],
    queryFn: getPlanets,
    staleTime: 10 * (60 * 1000),
  });

  if (status === "loading") return <CircularProgress />;
  if (status === "error") return <>{JSON.stringify(error)}</>;

  const handleSearchChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    clearTimeout(searchTimeout);

    setSearchText(e);

    setSearchTimeout(
      setTimeout(() => {
        const searchResults = allPlanets?.filter((planet: Planet) =>
          planet.name.toLowerCase().includes(searchText.toLowerCase())
        );
        setSearchedResults(searchResults);
      }, 500)
    );
  };

  return (
    <Grid sx={{ py: 6 }} className="container">
      <Typography variant="h5" sx={{ mb: 2 }}>
        <b>Planètes du système solaire</b>
      </Typography>
      <PlanetsSearch
        handleSearchChange={handleSearchChange}
        clearSearch={clearSearch}
        searchText={searchText}
      />
      <PlanetsList
        bodies={allPlanets}
        searchedResults={searchedResults}
        searchText={searchText}
      />
    </Grid>
  );
};

export default Home;
