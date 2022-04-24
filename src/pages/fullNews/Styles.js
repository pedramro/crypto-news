import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    boxContainer: {
        marginTop: theme.spacing(1.6),
        boxShadow: '0 0 12px rgba(0, 0, 0, 0.25)',
        borderRadius: '5px',
        padding: '15px'
    },
    imgWrapper: {
        width: '100%',
        padding: '15px 0',
        display: 'flex',
        justifyContent: 'center',
    }
}))

export default useStyles