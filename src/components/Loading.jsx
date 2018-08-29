import React from "react";
import styled from "styled-components";

import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";

const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px;
`;
const LoaderIcon = styled(CircularProgress)`
  margin: 10px;
`;

const Loading = props => (
  <LoaderContainer>
    <LoaderIcon />
    <Typography>Loading {props.loadObject}...</Typography>
  </LoaderContainer>
);
export default Loading;
