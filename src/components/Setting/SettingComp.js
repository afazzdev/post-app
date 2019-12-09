import React from "react";

import {
  Paper,
  Container,
  makeStyles,
  Typography,
  TextField
} from "@material-ui/core";
import ButtonStyled from "../ButtonStyled/Button";

const useStyle = makeStyles(theme => ({
  paper: {
    display: "grid",
    gridAutoFlow: "row",
    height: "10rem",
    marginBottom: "1rem",
    boxShadow: "none",
    border: `2px ${theme.palette.grey[200]} solid`
  },
  container1: {
    padding: "1rem"
  },
  container2: {
    padding: "0 1rem 1rem"
  },
  container3: {
    alignSelf: "flex-end",
    borderTop: `2px ${theme.palette.grey[200]} solid`,
    background: `${theme.palette.grey[100]}`,
    padding: ".5rem 1rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  typography1: {
    color: theme.palette.grey[900]
  },
  typography2: {
    color: theme.palette.grey[600]
  },
  textField: {
    "& input": {
      padding: ".3rem .5rem"
    }
  }
}));

const SettingComp = ({ state, handleSubmit }) => {
  const classes = useStyle();

  return (
    <>
      {state.data.map((dat, i) => (
        <form onSubmit={handleSubmit} key={i} name={dat.name}>
          <Paper className={classes.paper}>
            <Container className={classes.container1}>
              <Typography
                variant="h6"
                display="block"
                className={classes.typography1}
              >
                This is {dat.name}
              </Typography>
            </Container>
            <Container className={classes.container2}>
              {dat.type === "file" ? (
                <>
                  <input
                    accept="image/*"
                    style={{ display: "none" }}
                    id="contained-button-file"
                    multiple
                    type="file"
                  />
                  <label htmlFor="contained-button-file">
                    <ButtonStyled
                      variant="contained"
                      color="primary"
                      component="span"
                    >
                      Upload
                    </ButtonStyled>
                  </label>
                </>
              ) : (
                <TextField
                  variant="outlined"
                  className={classes.textField}
                  type={dat.type}
                />
              )}
            </Container>
            <Container className={classes.container3}>
              <Typography
                variant="caption"
                display="block"
                className={classes.typography2}
              >
                Change {dat.name}
              </Typography>

              <ButtonStyled
                variant="contained"
                color="primary"
                name={dat.name}
                type="submit"
              >
                Save
              </ButtonStyled>
            </Container>
          </Paper>
        </form>
      ))}
    </>
  );
};

export default SettingComp;
