import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getPlanetInfo, getModelId } from "../api";

import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import CircularProgress from "@mui/material/CircularProgress";

const Planet: React.FC<{}> = () => {
  let { id } = useParams();

  const {
    status,
    error,
    data: planetInfo,
  } = useQuery({
    queryKey: ["planetInfo", id],
    queryFn: () => id && getPlanetInfo(id),
    staleTime: 10 * (60 * 1000),
  });

  if (status === "loading") return <CircularProgress />;
  if (status === "error") return <>{JSON.stringify(error)}</>;

  return (
    <div>
      <img
        style={{ width: "100vw", height: "250px", objectFit: "cover" }}
        src={`/${planetInfo.id}.webp`}
        alt={`Hero image of ${planetInfo.name}`}
      />

      <Grid
        container
        sx={{
          maxWidth: "1300px",
          margin: "auto",
          mt: 3,
          px: 4,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Grid item sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Typography variant="h4">
            <b>{planetInfo.name}</b>
          </Typography>

          <Typography variant="h5">({planetInfo.englishName})</Typography>
        </Grid>

        <Grid sx={{ my: 4 }}>
          <Typography variant="h6">
            Densité : {planetInfo.density} g/cm³
          </Typography>
          <Typography variant="h6" sx={{ mt: 1 }}>
            Gravité : {planetInfo.gravity} m/s²
          </Typography>
          <Typography variant="h6" sx={{ mt: 1 }}>
            Masse : {planetInfo.mass.massValue} × 10
            <sup>{planetInfo.mass.massExponent}</sup> kg
          </Typography>
          <Typography variant="h6" sx={{ mt: 1 }}>
            Volume : {planetInfo.vol.volValue} × 10
            <sup>{planetInfo.vol.volExponent}</sup> km³
          </Typography>
        </Grid>

        <Grid sx={{ mb: 4 }}>
          <Typography variant="h6" sx={{ mb: 1 }}>
            Modèle 3D de la planète :
          </Typography>
          <iframe
            frameBorder="0"
            style={{ width: "100%", height: "300px", objectFit: "cover" }}
            title="Earth"
            allow="autoplay; fullscreen; xr-spatial-tracking"
            xr-spatial-tracking
            execution-while-out-of-viewport
            execution-while-not-rendered
            web-share
            width="640"
            height="480"
            src={`https://sketchfab.com/models/${getModelId(
              planetInfo.id
            )}/embed?autostart=1&camera=0&preload=1&dnt=1`}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Planet;
