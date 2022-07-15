import "./App.css";

import {
  Typography,
  AppBar,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  CssBaseline,
  Toolbar,
  Grid,
  Container,
} from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";

function App() {
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCamera />
          <Typography variant="h6">Photo Album</Typography>
        </Toolbar>
      </AppBar>
      <main></main>
    </>
  );
}

export default App;
