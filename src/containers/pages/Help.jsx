import React from "react";
import styled from "styled-components";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const Title = styled(Typography).attrs({ variant: "title" })`
  && {
    color: ${props => props.theme.palette.textDark};
    margin-bottom: ${props => `${props.theme.spacing.unit * 2}px`};
  }
`;

const Home = () => (
  <Grid container>
    <Grid item xs={12} sm={12}>
      <Title>Help</Title>
    </Grid>
  </Grid>
);

export default Home;
