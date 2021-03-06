import { Box, Divider, Typography, Card } from '@material-ui/core';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import useStyles from './Styles';


function RightBar({ news }) {
  const i = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const classes = useStyles();
  return (
    <Card className={classes.rightBarWrapper} elevation={6}>
      <Box className={classes.title}>
        <Typography variant='h5' component='h3'>Latest News</Typography>
      </Box>
      {
        i.map((num, index) => {
          const element = news[num]
          const nvg = element?.title
          return (
            <Box key={index}>
              <Divider />
              <Box className={classes.latestNews}>
                <Link to={`/${nvg}`} className={classes.link} variant='subtitle1' component='h2'>{element?.title}</Link>
              </Box>
              <Divider />
            </Box>
          )
        })
      }
    </Card>
  )
}

const mapStateToProps = (state) => {
  return {
    news: state
  }
}

export default connect(mapStateToProps)(RightBar);