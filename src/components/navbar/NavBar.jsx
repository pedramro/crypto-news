import { AppBar, Toolbar, Typography, Box, InputBase } from '@material-ui/core';
import useStyles from './Styles'
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom'

export function NavBar() {
  const classes = useStyles()
  return (
    <AppBar className={classes.appBar} position='fixed'>
        <Toolbar className={classes.toolbar}>
            <Box className={classes.title}>
              <MonetizationOnIcon className={classes.moneyIcon} />
              <Typography className={classes.titleText} variant='h4' component='h2'>Crypto news</Typography>
            </Box>
            <Box className={classes.list}>
              <Link className={classes.links}  to="/">
                <Typography variant='body2' component='p'>Home</Typography>
              </Link>
              <Link className={classes.links}  to="/about">
                <Typography variant='body2' component='p'>About</Typography>
              </Link>
              <Link className={classes.links} to="/contact">
                <Typography variant='body2' component='p'>Contact</Typography>
              </Link>
            </Box>
            <Box className={classes.search}>
              <SearchIcon color='' />
              <InputBase
                className={classes.input}
                placeholder='search...'
              />
            </Box>
        </Toolbar>
    </AppBar>
  )
}

