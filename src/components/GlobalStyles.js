import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
	html {
		box-sizing: border-box;
	}
	body {
		font-family: Helvetica, Arial, sans-serif;
		margin: 0;
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

export const HighlightColors = {
  superDark: "#3f4743",
  dark: "#267273",
  mid: "#DCB796",
  lightMid: "#FFCB9A",
  light: "#BED3CE"
}

export const Shadows = {
  normal: "box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)"
}
