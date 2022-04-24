import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { Box, Typography } from "@material-ui/core";
import useStyles from './Styles'

function FullNews({ news }) {

  const classes = useStyles()

  const { nvg } = useParams()

  return (
    <Box>
      {
        news.map(element => {
          if (element.title.slice(0, 21) === nvg.slice(0, 21)) {
            return (
              <Box key={element?.title} className={classes.boxContainer}>
                <Box>
                  <Typography variant="h5" component="h1">{element?.title}</Typography>
                </Box>
                <Box className={classes.imgWrapper}>
                  <img width='50%' src={element.tags[0].icon} alt="" />
                </Box>
                <Box>
                  <Typography variant="body1">{element.description}</Typography>
                </Box>
                <Box>
                  
                </Box>
              </Box>
            )
          }
        })
      }
    </Box>
  )
}

const mapStateToProps = (state) => {
  return {
    news: state
  }
}

export default connect(mapStateToProps)(FullNews);