import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    newsWrapper: {
        padding: 15,
        marginTop: theme.spacing(1.5),
        [theme.breakpoints.down('md')]: {
            padding: 5
        },
    },
    titleImg: {
        display: 'flex',
        alignItems: 'center',
        [theme.breakpoints.down('md')]: {
            justifyContent: 'center',
            flexDirection: 'column'
        }
    },
    imageWrapper: {
        height: '180px',
        [theme.breakpoints.up('lg')]: {
            width: '30%'
        }
    },
    textWrapper: {
        [theme.breakpoints.down('md')]: {
            padding: theme.spacing(1)
        },
        [theme.breakpoints.up('lg')]: {
            width: '65%'
        }
    },
    img: {
        width: '100%',
        height: '100%',
        paddingBottom: theme.spacing(1),
        borderRadius: theme.spacing(1)
    },
    infoWrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: theme.spacing(2),
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column'
        }
    },
    info: {
        backgroundColor: '#ebebeb',
        marginLeft: theme.spacing(1),
        fontSize: '12px',
        padding: '3px 5px',
        borderRadius: '5px',
        [theme.breakpoints.down('xs')]: {
            fontSize: '9px'
        }
    },
    dateSource: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        [theme.breakpoints.down('sm')]: {
            marginBottom: '5px'
        }
    },
    InfoBtn: {
        fontSize: '12px',
        marginLeft: theme.spacing(1),
        height: '24px',
        [theme.breakpoints.down('xs')]: {
            fontSize: '9px'
        }
    }
}))

export default useStyles

