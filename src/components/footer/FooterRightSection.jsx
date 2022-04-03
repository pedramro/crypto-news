import { Box, List, ListItem, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    ListItem: {
        marginTop: '3px'
    }
}))

function FooterRightSection() {

    const classes = useStyles()

    return (
        <Box>
            <Box>
                <Typography variant="h6">Navigate</Typography>
            </Box>
            <List>
                <ListItem button className={classes.ListItem}>
                    <Typography>Portfolio</Typography>
                </ListItem>
                <ListItem button className={classes.ListItem}>
                    <Typography>Our Team</Typography>
                </ListItem>
                <ListItem button className={classes.ListItem}>
                    <Typography>Blog</Typography>
                </ListItem>
            </List>
        </Box>
    )
}

export default FooterRightSection;