import React from "react";

import { Container, Grid, Link } from "@material-ui/core";
import ButtonStyled from "../ButtonStyled/Button";
import InputStyled from "../InputStyled/InputStyled";

const Forms = ({
  whatFor,
  Auth,
  values,
  error,
  complete,
  handleChange,
  handleClickShowPassword,
  handleSubmit,
  classes
}) => {
  return (
    <>
      <Container>
        <form
          onSubmit={handleSubmit}
          style={{
            display: "grid",
            placeItems: "center",
            gridAutoFlow: "row"
          }}
          name={whatFor.toLowerCase()}
        >
          <InputStyled
            whatFor={whatFor}
            Auth={Auth}
            values={values}
            error={error}
            complete={complete}
            handleChange={handleChange}
            handleClickShowPassword={handleClickShowPassword}
            handleSubmit={handleSubmit}
          />
          <Grid container justify="flex-end">
            <Link
              component="button"
              variant="body2"
              color="textPrimary"
              onClick={() => handleClickShowPassword("isNewAccount")}
            >
              Create new account
            </Link>

            <ButtonStyled
              variant="contained"
              color="primary"
              type="submit"
              disabled={values.disabled}
            >
              Submit
            </ButtonStyled>
          </Grid>
        </form>
      </Container>
    </>
  );
};

export default Forms;
