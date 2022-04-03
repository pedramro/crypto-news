import { Box, List, Typography, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles';
import { Email, GitHub, Phone } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
    items: {
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

function FooterMiddleSection() {

    const classes = useStyles()

    return (
        <Box>
            <Box>
                <Typography variant='h6'>Contact us</Typography>
            </Box>
            <Box>
                <List>
                    <ListItem button className={classes.items}>
                        <ListItemIcon>
                            <Phone className={classes.icons} />
                        </ListItemIcon>
                        <ListItemText primary={<Typography variant='body2'>+98 935 490 9238</Typography>} />
                    </ListItem>
                    <ListItem button className={classes.items}>
                        <ListItemIcon>
                            <Email className={classes.icons} />
                        </ListItemIcon>
                        <ListItemText primary={<Typography variant='body2'>Pedram0869@gmail.com</Typography>} />
                    </ListItem>
                    <a className={classes.githubLink} target='_blank' href='https://github.com/pedramro'>
                        <ListItem button className={classes.items}>
                            <ListItemIcon>
                                <GitHub className={classes.icons} />
                            </ListItemIcon>
                            <ListItemText primary={<Typography variant='body2'>GitHub</Typography>} />
                        </ListItem>
                    </a>
                </List>
            </Box>
        </Box>
    )
}

export default FooterMiddleSection;