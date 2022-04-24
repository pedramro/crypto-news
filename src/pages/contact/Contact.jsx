import { Box, List, ListItem, ListItemIcon, ListItemText, Typography } from "@material-ui/core"
import { Email, GitHub, Phone } from "@material-ui/icons"
import useStyles from "./Styles"


function Contact() {
  const classes = useStyles()
  return (
    // <Box classNmae={classes.contactContainer}>
    //   <Box className={classes.textWrapper}>
    //     <Typography>Email me: </Typography>
    //     <Typography>Pedram0869@gmail.com</Typography>
    //   </Box>
    //   <Box className={classes.textWrapper}>
    //     <Typography>GitHub: </Typography>
    //     <Typography>Pedram0869@gmail.com</Typography>
    //   </Box>
    //   <Box className={classes.textWrapper}>
    //     <Typography>Phone: </Typography>
    //     <Typography>Pedram0869@gmail.com</Typography>
    //   </Box>
    // </Box>
    <Box className={classes.listWrapper}>
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
  )
}

export default Contact