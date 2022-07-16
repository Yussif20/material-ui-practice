import "./App.css";

import {
  Typography,
  Slider,
  AppBar,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  CssBaseline,
  Toolbar,
  Grid,
  Button,
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
      <main>
        <div>
          <Container maxWidth="sm">
            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Photo Album
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              hello everyone I'm trying to make this paragraph as long as
              possiable to see if this site worth all that reputation
            </Typography>
            <div>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    secondary action
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    See my photos
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="contained" color="primary">
                    secondary action
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container>
          <Grid></Grid>
        </Container>
      </main>
    </>
  );
}

export default App;
