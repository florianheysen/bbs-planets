import React from "react";

import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";

interface ISearchProps {
  handleSearchChange: (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
  clearSearch: () => void;
  searchText: string;
}

const PlanetsSearch = ({
  handleSearchChange,
  clearSearch,
  searchText,
}: ISearchProps) => {
  return (
    <TextField
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
        endAdornment: searchText ? (
          <InputAdornment position="end">
            <IconButton
              onClick={() => clearSearch()}
              aria-label="clear"
              size="small"
            >
              <ClearIcon />
            </IconButton>
          </InputAdornment>
        ) : (
          <InputAdornment position="end">
            <IconButton disabled aria-label="clear" size="small">
              <ClearIcon fontSize="inherit" />
            </IconButton>
          </InputAdornment>
        ),
      }}
      onChange={(e) => {
        handleSearchChange(e);
      }}
      autoComplete="off"
      value={searchText}
      sx={{ mb: 2 }}
      id="planet-search"
      label="Rechercher une planète"
      variant="outlined"
    />
  );
};

export default PlanetsSearch;
