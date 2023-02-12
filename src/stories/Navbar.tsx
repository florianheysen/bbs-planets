import React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import PublicIcon from "@mui/icons-material/Public";

const navigation = [
  {
    id: "terre",
    label: "La Terre",
  },
  {
    id: "venus",
    label: "Vénus",
  },
];

const Navbar: React.FC<{}> = () => {
  const [anchorElNav, setAnchorElNav] =
    React.useState<null | HTMLElement>(null);
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            <PublicIcon sx={{ mr: 0.5, mb: 0.5 }} fontSize="small" />
            Planètes BBS
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {navigation.map((el) => (
                <div key={el.id}>
                  <MenuItem key={el.id} onClick={handleCloseNavMenu}>
                    {el.label}
                  </MenuItem>
                </div>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontWeight: 700,
              color: "inherit",
              cursor: "pointer",
              textDecoration: "none",
            }}
          >
            <PublicIcon sx={{ mr: 1, mt: 0.6 }} fontSize="small" />
            Planètes BBS
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {navigation.map((el) => (
              <div key={el.id}>
                <Button sx={{ my: 2, color: "white", display: "block" }}>
                  {el.label}
                </Button>
              </div>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
