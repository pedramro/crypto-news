import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    container: {
        marginTop: theme.spacing(10),
        [theme.breakpoints.up('md')]: {
            paddingLeft: theme.spacing(14),
            paddingRight: theme.spacing(14),
        },
        [theme.breakpoints.down('sm')]: {
            paddingLeft: theme.spacing(5),
            paddingRight: theme.spacing(5),
        },
    },
    main: {
        boxShadow: '0 0 15px rgba(0, 0, 0, 0.25)',
        borderRadius: '5px',
        padding: '10px 10px',
        
    },
    rightBar: {
        boxShadow: '0 0 15px rgba(0, 0, 0, 0.25)',
        borderRadius: '5px',
        padding: '10px 10px',
        [theme.breakpoints.down('xs')]: {
            display: 'none'
        },
    }
}))

export default useStyles