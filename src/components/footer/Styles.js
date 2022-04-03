import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    footerWrapper: {
        width: '100%',
        backgroundColor: '#24303d',
        marginTop: theme.spacing(3),
        color: theme.palette.common.white
    },
    gridContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        textDecoration: 'none',
        color: 'white'
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
    gridRightSide: {
        [theme.breakpoints.down('xs')]: {
            display: 'none'
        }
    },
    copyRight: {
        display: 'flex',
        justifyContent: 'center',
        padding: '10px 0',
        fontSize: '10px',
        color: 'yellow'
    },
    divider: {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        margin: '5px 0'
    }
}))

export default useStyles;