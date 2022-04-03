import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { Box, Typography } from "@material-ui/core";

function FullNews({ news }) {

  const { nvg } = useParams()

  return (
    <Box>
      {
        news.map(element => {
          if (element.title.slice(0, 21) === nvg.slice(0, 21)) {
            console.log(element.title.length);
            return (
              <Box key={element?.title}>
                <Box>
                  <Typography>{element?.title}</Typography>
                </Box>
              </Box>
            )
          }
        })
      }
    </Box>
  )
}

const mapStateToProps = (state) => {
  return {
    news: state
  }
}

export default connect(mapStateToProps)(FullNews);