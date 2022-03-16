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
    rightBarGrid: {
        marginTop: '12px',
        [theme.breakpoints.down('xs')]: {
            display: 'none'
        },
    },
}))

export default useStyles