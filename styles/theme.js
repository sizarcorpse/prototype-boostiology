import { createMuiTheme } from "@material-ui/core/";

/**
 * BG   : #F5F7FA
 * CARD : #FBFBFD
 */

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#1d1d1d",
    },
    secondary: {
      main: "#d5d5d5",
    },
  },
  typography: {
    fontFamily: '"Roboto"',
    h1: {
      fontSize: 50,
      fontWeight: 700,
      fontStyle: "normal",
      fontVariant: "normal",
      lineHeight: "1em",
      letterSpacing: 1,
      wordSpacing: 0,
    },
    h2: {
      fontSize: 30,
      fontWeight: 700,
      fontStyle: "normal",
      fontVariant: "normal",
      lineHeight: "1em",
      letterSpacing: 1,
      wordSpacing: 0,
    },
    h3: {},
    h4: {
      fontSize: "1.142em", //  16px
      fontWeight: 500,
      fontStyle: "normal",
      fontVariant: "normal",
      lineHeight: 1.3,
      letterSpacing: 1,
      wordSpacing: 0,
    },
    h5: {
      fontSize: "1em", //  14px
      fontWeight: 500,
      fontStyle: "normal",
      fontVariant: "normal",
      lineHeight: 1.3,
      letterSpacing: 1,
      wordSpacing: 0,
    },
    h6: {
      fontSize: "0.92em", //  12px
      fontWeight: 500,
      fontStyle: "normal",
      fontVariant: "normal",
      lineHeight: 1.3,
      letterSpacing: 1,
      wordSpacing: 0,
    },
    body1: {},
    body2: {},
    subtitle1: {},
    subtitle2: {},
    button: {
      fontSize: "1em",
      fontWeight: 500,
      fontStyle: "normal",
      lineHeight: 1.5,
      letterSpacing: 1,
      textTransform: "none",
    },
    caption: {},
    overline: {},
  },
});

theme.overrides = {
  MuiTooltip: {
    tooltip: {},
  },
  // breakpoints: {
  //   values: {
  //     xs: 0,
  //     sm: 600,
  //     md: 960,
  //     lg: 1500,
  //     xl: 1600,
  //   },
  // },
};

theme.props = {
  // #action :
};

export default theme;
