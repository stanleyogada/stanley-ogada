import { extendTheme } from "@chakra-ui/react";
import colors from "./colors";
import breakpoints from "./breakpoints";

const theme = extendTheme({ breakpoints, colors });
export default theme;
