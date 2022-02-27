import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import { NavBar } from "./components/navbar/NavBar"
import RightBar from './components/rightBar/RightBar'
import { Grid, Box } from '@material-ui/core';
import useStyles from './AppStyles'

function App() {

  const classes = useStyles()

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
          <Grid container spacing={1} className={classes.container}>
            <Grid item xs={12} sm={8}>
              <Box className={classes.main}>
                <Routes>
                    <Route path='/' element={<Home />} />
                </Routes>
              </Box>
            </Grid>
            <Grid item sm={4}>
              <Box className={classes.rightBar}>
                <RightBar />
              </Box>
            </Grid>
          </Grid>
      </BrowserRouter>
    </div>
  );
}

export default App
