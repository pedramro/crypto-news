import { Box, Button, Card, Typography } from '@material-ui/core'
import useStyles from './Styles'
import { getData } from '../service/Service'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import { getAllNews } from '../redux/actions'
import { Link } from 'react-router-dom'



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
            <Card elevation={6} className={classes.newsWrapper} key={index}>
              <Box className={classes.titleImg}>
                <Box className={classes.imageWrapper}>
                  <img className={classes.img} src={item.tags.map(tag => tag.icon)} />
                </Box>
                <Box className={classes.textWrapper}>
                  <Box>
                    <Box>
                      <Typography variant='h5' component='h1'>{item.title}</Typography>
                    </Box>
                    <Box>
                      <Typography variant='body2' component='p'>{item.description}</Typography>
                    </Box>
                  </Box>
                  <Box className={classes.infoWrapper}>
                    <Box className={classes.dateSource}>
                      <Typography className={classes.info}>Date: {item.date}</Typography>
                      <Typography className={classes.info}>Source: {item.source}</Typography>
                    </Box>
                    <Box>
                      <Button variant='contained' color='primary' className={classes.InfoBtn} href={item.link} target='_blank'>Read more</Button>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Card>
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