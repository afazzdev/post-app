import React from "react";

import {
  CssBaseline,
  MuiThemeProvider,
  createMuiTheme
} from "@material-ui/core";

export const MuiProvider = WrappedComp => {
  class Wrapped extends React.Component {
    theme = createMuiTheme({
      palette: {
        primary: {
          main: "#20B2AA",
          dark: "#167c76",
          contrastText: "#fff"
        },
        text: {
          // primary: "#fff"
        }
      },
      fontFamily: `'Montserrat', 'Raleway', 'Open Sans',"Roboto", "Helvetica", "Arial", sans-serif`,
      props: {
        color: {
          background1:
            "linear-gradient(56deg, rgba(32,178,170,1) 58%, rgba(148,220,233,1) 100%)"
        },
        polygon: {
          rotb5rem:
            "polygon(calc(100% - 5rem) 0, 100% calc(0% + 5rem), 100% calc(100% - 5rem), calc(100% - 5rem) 100%, 0 100%, 0 0)",
          polygonHalfRem:
            "polygon(.5rem 0%, calc(100% - .5rem) 0%, 100% calc(0% + .5rem), 100% calc(100% - .5rem), calc(100% - .5rem) 100%, calc(0% + .5rem) 100%, 0% calc(100% - .5rem), 0% calc(0% + .5rem))",
          polygonHalfRemMinThreePx:
            "polygon(calc(.5rem - 3px) 0%, calc(100% - calc(.5rem - 3px)) 0%, 100% calc(0% + calc(.5rem - 3px)), 100% calc(100% - calc(.5rem - 3px)), calc(100% - calc(.5rem - 3px)) 100%, calc(0% + calc(.5rem - 3px)) 100%, 0% calc(100% - calc(.5rem - 3px)), 0% calc(0% + calc(.5rem - 3px)))",
          polygonFourRemLeftOnly:
            "polygon(calc(0% + 4rem) 0, 100% 0, 100% 100%, calc(0% + 4rem) 100%, 0% calc(100% - 4rem), 0% calc(0% + 4rem))",
          T5:
            "polygon(1rem 0%, calc(100% - 1rem) 0%, 100% calc(0% + 1rem), 100% calc(100% - 1rem), calc(100% - 1rem) 100%, calc(0% + 1rem) 100%, 0% calc(100% - 1rem), 0% calc(0% + 1rem))",
          T5m3x:
            "polygon(calc(1rem - 3px) 0%, calc(100% - calc(1rem - 3px)) 0%, 100% calc(0% + calc(1rem - 3px)), 100% calc(100% - calc(1rem - 3px)), calc(100% - calc(1rem - 3px)) 100%, calc(0% + calc(1rem - 3px)) 100%, 0% calc(100% - calc(1rem - 3px)), 0% calc(0% + calc(1rem - 3px)))"
        }
      },
      typography: {
        fontFamily: [
          "Montserrat",
          "Raleway",
          "Open Sans",
          "Roboto",
          "Helvetica",
          "Arial",
          "sans-serif",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"'
        ].join(",")
      }
    });

    render() {
      console.log("this is theme from styles/index", this.theme);
      return (
        <MuiThemeProvider theme={this.theme}>
          <CssBaseline />
          <WrappedComp {...this.props} />
        </MuiThemeProvider>
      );
    }
  }
  return Wrapped;
};
