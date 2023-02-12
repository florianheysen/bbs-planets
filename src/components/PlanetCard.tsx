import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

interface Planet {
  id: string;
  name: string;
  englishName: string;
}

const PlanetCard = ({ planet, index }: { planet: Planet; index: number }) => {
  const navigate = useNavigate();

  return (
    <Grid
      onClick={() => {
        navigate(`/planet/${planet.id}`);
      }}
      className="center"
      item
      xs={12}
      sm={4}
      md={4}
      key={index}
    >
      <Card sx={{ maxWidth: 500 }}>
        <CardActionArea>
          <CardMedia
            sx={{ pointerEvents: "none" }}
            component="img"
            height="140"
            image={`https://eyes.nasa.gov/apps/orrery/photos/planets/${planet.englishName.toLocaleLowerCase()}.jpg`}
            alt="green iguana"
          />
          <CardContent>
            <Typography variant="h5">{planet.name}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default PlanetCard;
