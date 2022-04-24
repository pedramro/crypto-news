import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import { NavBar } from "./components/navbar/NavBar"
import RightBar from './components/rightBar/RightBar'
import { Grid, Box } from '@material-ui/core';
import useStyles from './AppStyles'
import Footer from './components/footer/Footer';
import FullNews from './pages/fullNews/FullNews';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { getData } from './components/service/Service';
import { getAllNews } from './components/redux/actions';
import Contact from './pages/contact/Contact'
import About from './pages/about/About'

function App({ news, getNews}) {

  const classes = useStyles()

  useEffect(() => {
    getData.news().then(response => getNews(response.data))
    // console.log(news);
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
          <Grid container spacing={1} className={classes.container}>
            <Grid item xs={12} sm={8} className={classes.main}>
              <Box>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/:nvg' element={<FullNews />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/about' element={<About />} />
                </Routes>
              </Box>
            </Grid>
            <Grid className={classes.rightBarGrid} item sm={4}>
              <RightBar />
            </Grid>
          </Grid>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    news: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getNews: (news) => dispatch(getAllNews(news))
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (App)
