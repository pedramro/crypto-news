import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    rightBarWrapper: {
        position: 'sticky',
        position: '-webkit-sticky',
        borderRadius: '5px',
        padding: '10px 10px',
    },
    title: {
        padding: '5px 0',
        display: 'flex',
        justifyContent: 'center',
    },
    latestNews: {
        padding: '10px 0',
        cursor: 'pointer',
    },
    link: {
        color: '#667080',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        display: '-webkit-box',
        lineClamp: 2,
        boxOrient: 'vertical',
    },
}))

export default useStyles;
