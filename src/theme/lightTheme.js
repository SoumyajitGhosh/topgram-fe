import { createTheme, responsiveFontSizes } from "@mui/material";

let lightTheme = createTheme({
    // typography: {
    //     fontFamily: "Grand Hotel, cursive"
    // },
    palette: {
        background: {
            paper: "#fff"
        },
        primary: {
            main: "rgba(154, 219, 193, 1)"
        }
    }
});

export const theme = responsiveFontSizes(lightTheme);
