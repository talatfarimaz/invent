import { createTheme } from "@material-ui/core/styles";

const DefaultTheme = createTheme({
  palette: {
    primary: {
      main: "#ff5757",
      dark: "#B23C3C",
      light: "#ff6a6a",
      mainAlternative: "#ffdfdf",
      lightAlternative: "#ffc1c1",
    },
    danger: {
      main: "#ff5757",
    },
    light: {
      main: "#00BCD4",
      contrastText: "#DADCE0",
    },
    dark: {
      main: "#212121",
      light: "#495057",
      contrastText: "#303030",
      alternative: "#000000",
      lightAlternative: "#3C4858",
      darkAlternative: "#1E1F21",
      contrastAlternative: "#333333",
      contrastLight: "#4D4D4D",
      contrastDark: "#7A7A7A",
      secondAlternative: "#29303B",
      thirdAlternative: "#464646",
      mainAlternative: "#d2d2d2",
    },
    secondary: {
      main: "#a2cf6e",
      dark: "#71904d",
      contrastText: "#FFFFFF",
      light: "#2EFF22",
      alternativeDark: "#117520",
      alternativeLight: "#64c270",
      secondAlternative: "#4dbd74",
      mainAlternative: "#dfeecf",
    },
    success: {
      main: "#a2cf6e",
      contrastText: "#FFFFFF",
      light: "#E0E0E0",
      alternative: "#f5f5f5",
    },
    link: {
      main: "#9C27B0",
      light: "#e8d0ec",
    },
    default: {
      main: "#F0F0F0",
      light: "#FEFEFE",
      contrastText: "#fdfdfd",
      alternative: "#ffeeee",
      darkAlternative: "#b1b1b1",
      lightAlternative: "#f1f1f1",
      contrastAlternative: "#cccccc",
      contrastDark: "#9C9C9C",
      contrastLight: "#999999",
      mainAlternative: "#f2f2f6",
      mainLight: "#FAFAFC",
      mainDark: "#707070",
      secondAlternative: "#505050",
      thirdAlternative: "#A0A0A0",
      fourthAlternative: "#d0d0d9",
    },
    info: {
      dark: "#2582ac",
      main: "#35baf6",
      light: "#5dc7f7",
      contrastText: "#2548A5",
      alternative: "#6490b1",
      lightAlternative: "#1B9CE2",
      darkAlternative: "#4C5776",
      contrastAlternative: "#238AFF",
      secondAlternative: "#348dec",
    },
    error: {
      main: "#ff5757",
    },
    warning: {
      main: "#ff9100",
    },
    none: {
      main: "#ffffff",
    },
    action: {
      main: "#35baf6",
    },
    yellow: {
      main: "#fff6ae",
    },
    orange: {
      main: "#ffd395",
    },
    green: {
      main: "#c3e3c5",
    },
    teal: {
      main: "#aadbd7",
    },
    indigo: {
      main: "#bfc5e5",
    },
    purple: {
      main: "#ddd4ef",
    },
  },
  typography: {
    fontFamily: {

    },
    button: {
      textTransform: "none",
      textDecoration: "none",
    },
  },
});

export default DefaultTheme;
