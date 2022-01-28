import { createTheme } from "@nextui-org/react";

export const lightTheme = createTheme({
   type: "light",
   theme: {
      fonts: {
         sans: "Raleway, sans-serif;",
      },
      colors: {
         primaryLight: "#6ee39a",
         primary: "#070c18",
         primaryDark: "#509a6c",
         lightColor: "#e8e8e8",
         lightGray: "#8e8e8e",
         background: "#ffffff",
         starColor: "#ff7033",
         titleColor: "#ff7033",
         gradient:
            "linear-gradient(112deg, $blue500 -25%, $pink100 -10%, $purple500 80%)",
      },
      letterSpacings: {
         big: "10px",
      },
   },
});
export const darkTheme = createTheme({
   type: "dark",
   theme: {
      fonts: {
         sans: "Raleway, sans-serif;",
      },
      colors: {
         primaryLight: "#6ee39a",
         primary: "#6ad994",
         primaryDark: "#509a6c",
         lightColor: "#e8e8e8",
         lightGray: "#8e8e8e",
         background: "#1e1e1e",
         starColor: "#ff7033",
         titleColor: "#8793ff",
         gradient:
            "linear-gradient(112deg, $blue500 -25%, $pink100 -10%, $purple500 80%)",
      },
      letterSpacings: {
         big: "10px",
      },
   },
});
