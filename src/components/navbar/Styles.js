import { makeStyles, alpha } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
    appBar: {
      backgroundColor: '#262421',
    },
    toolbar: {
      display: 'flex',
      justifyContent: 'space-between'
    },
    title: {
      display: 'flex',
      alignItems: 'center',
      gap: theme.spacing(1),
    },
    moneyIcon: {
      fontSize: '40px',
      cursor: 'Pointer',
      [theme.breakpoints.down('sm')]: {
        fontSize: '35px'
      },
      ['&:hover']: {
        color: '#fca503'
      }
    },
    titleText: {
      cursor: 'Pointer',
      transition: 'all 0.3s',
      [theme.breakpoints.down('sm')]: {
        fontSize: '25px'
      },
      ['&:hover']: {
        color: '#fca503'
      }
    },
    list: {
      display: 'flex',
      alignItems: 'center',
      gap: theme.spacing(2),
    },
    links: {
      textDecoration: 'none',
      transition: 'all 0.3s',
      color: 'white',
      ['&:hover']: {
        color: '#fca503',
      },
    },
    search: {
      display: 'flex',
      alignItems: 'center',
      backgroundColor: alpha(theme.palette.common.white, 0.25),
      borderRadius: '3px',
      color: 'white',
      transition: 'all 0.3s',
      padding: '0 5px',
      ['&:hover']: {
        backgroundColor: alpha(theme.palette.common.white, 0.40)
      },
      ['&:focus']: {
        backgroundColor: alpha(theme.palette.common.white, 0.40)
      }
    },
    input: {
      color: 'white',
    }
  }))
  
export default useStyles;