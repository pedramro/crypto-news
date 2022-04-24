import { Box, makeStyles, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  wrapper: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '70%',
    boxShadow: '0 0 25px rgba(0, 0, 0, 0.5)',
    overflow: 'hidden',
    borderRadius: '5px',
    backgroundColor: '#2b2b2b',
    color: 'white',
    padding: '10%',
    [theme.breakpoints.down('xs')]: {
      transform: 'translate(0%, 0%)',
      position: 'static'
    }
  },
  text: {
    textAlign: 'center'
  },
  link: {
    color: 'white',
    transition: 'color 0.3s ease',
    textDecoration: 'none',
    '&:hover': {
      color: '#ac6bdb'
    }
  }
}))


function About() {
  const classes = useStyles()
  return (
    <Box className={classes.wrapper}>
      <Typography variant='h6' className={classes.text}>Find me by <a className={classes.link} href='https://twitter.com/Pedro__Rush' target="_blank">@Pedro__Rush</a> on Twitter</Typography>
    </Box>
  )
}

export default About