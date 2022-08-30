import { extendTheme } from "@chakra-ui/react";

export const breakpoints = {
  mobile: "30em",
  tablet: "900px",
  laptop: "1128px",
  "laptop-lg": "1280px",
  "laptop-xl": "1440px",
};

const theme = extendTheme({ breakpoints });
export default theme;
