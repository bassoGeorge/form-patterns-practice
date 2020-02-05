import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
	html {
		box-sizing: border-box;
	}
	body {
		font-family: Helvetica, Arial, sans-serif;
	}
	*, *::before, *::after {
		box-sizing: inherit;
	}
	
`;
export default GlobalStyles;

export const Colors = {
  superDark: "#2C3531", // Outer Space
  dark: "#116466", // Genoa
  mid: "#D9B08C", // Brandy
  lightMid: "#FFCB9A", // Peach Orange
  light: "#D1E8E2" // Skeptic
};
