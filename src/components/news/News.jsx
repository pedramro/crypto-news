import { Box, Divider, ImageList, ImageListItem, Typography } from '@material-ui/core'
import useStyles from './Styles'
import { getData } from '../service/Service'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import { getAllNews } from '../redux/actions'



function News({ news, getNews }) {
  const classes = useStyles()

  useEffect(() => {
    getData.news().then(response => getNews(response.data))
    console.log(news);
  }, [])

  return (
    <>
      {
        news.map((item, index) => (
            <>
            <Box className={classes.newsWrapper} key={index}>
              <Box className={classes.titleImg}>
                <Box className={classes.imageWrapper}>
                  <img className={classes.img} src={item.tags.map(tag => tag.icon)} />
                </Box>   
                <Typography variant='h5' component='h1'>{item.title}</Typography>
              </Box>
            </Box>
            <Divider />
            </>
        ))
      }
    </>
  )
}

const mapStateToProps = (state) => {
  return{
    news: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    getNews: (news) => dispatch(getAllNews(news))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(News)