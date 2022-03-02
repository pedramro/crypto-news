import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    title: {
        padding: '5px 0',
        display: 'flex',
        justifyContent: 'center'
    },
    latestNews: {
        padding: '10px 0',
        cursor: 'pointer',
    },
    link: {
        color: '#667080'
    }
}))

export default useStyles;
