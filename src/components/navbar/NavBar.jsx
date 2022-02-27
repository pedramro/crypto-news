import { AppBar, Toolbar, Typography, Box, InputBase, makeStyles, alpha } from '@material-ui/core';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';
import useStyles from './Styles';


export function NavBar() {
  const classes = useStyles()
  return (
    <AppBar className={classes.appBar} position='fixed'>
        <Toolbar className={classes.toolbar}>
            <Box>
              <Link className={classes.title} to='/'>
                <MonetizationOnIcon className={classes.moneyIcon} />
                <Typography className={classes.titleText} variant='h4' component='h2'>Crypto news</Typography>
              </Link>
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

