import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    newsWrapper: {
        padding: 15,
        [theme.breakpoints.down('md')]: {
            padding: 5
        },
    },
    titleImg: {
        display: 'flex',
        justifyContent: 'center',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column'
        }
    },
    imageWrapper: {
        width: '100%',
        height: '180px',
        [theme.breakpoints.up('lg')]: {
            width: '40px'
        }
    },
    img: {
        height: '100%'
    },
}))

export default useStyles

