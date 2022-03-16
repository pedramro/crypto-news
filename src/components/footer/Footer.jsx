import { Box, Container, Grid, Typography } from "@material-ui/core"
import { Link } from "react-router-dom"
import useStyles from "./Styles"
import FooterLeftSection from "./FooterLeftSection"

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
                test
            </Grid>
            <Grid item xs={12} sm={4}>
                test
            </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Footer;