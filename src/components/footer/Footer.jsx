import { Box, Container, Divider, Grid, Typography } from "@material-ui/core"
import FooterMiddleSection from "./FooterMiddleSection"
import useStyles from "./Styles"
import FooterLeftSection from "./FooterLeftSection"
import FooterRightSection from "./FooterRightSection"

function Footer() {
    const classes = useStyles()
  return (
    <Box className={classes.footerWrapper}>
      <Container>
        <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
                <FooterLeftSection />
            </Grid>
            <Grid item xs={12} sm={4}>
                <FooterMiddleSection />
            </Grid>
            <Grid item xs={12} sm={4}>
                <FooterRightSection />
            </Grid>
        </Grid>
        <Divider className={classes.divider} />
        <Box className={classes.copyRight}>
          <Typography variant="body2">Designed by Pedram Roshani</Typography>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer;