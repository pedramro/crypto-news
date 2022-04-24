import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    listWrapper: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '70%',
        boxShadow: '0 0 25px rgba(0, 0, 0, 0.5)',
        overflow: 'hidden',
        borderRadius: '5px',
        backgroundColor: '#2b2b2b',
        padding: '10%',
        [theme.breakpoints.down('xs')]: {
            transform: 'translate(0%, 0%)',
            position: 'static'
        }
    },
    items: {
        color: 'white',
        borderRadius: '25px',
        '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.1)'
        }
    },
    icons: {
        color: 'white'
    },
    githubLink: {
        textDecoration: 'none',
        color: 'white'
    }
}))

export default useStyles