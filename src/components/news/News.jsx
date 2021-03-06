import { Box, Button, Card, Typography } from '@material-ui/core'
import useStyles from './Styles'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'



function News({ news }) {
  const classes = useStyles()

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
                      <Link className={classes.titleLink} to={`/${item.title}`}>
                        <Typography variant='h5' component='h1'>{item.title}</Typography>
                      </Link>
                    </Box>
                    <Box>
                      <Typography variant='body2' component='p'>{item.description}</Typography>
                    </Box>
                  </Box>
                  <Box className={classes.infoWrapper}>
                    <Box className={classes.dateSource}>
                      <Typography className={classes.info}>Date: {item.date}</Typography>
                      <Typography className={classes.info}>{item.source}</Typography>
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
    news: state,
  }
}


export default connect(mapStateToProps)(News)