import { variables } from "./variables";
import { media } from "./mediaqueries";
import { cardStyles, navStyles, heroStyles, footerStyles, section, contact, about, logo, button } from "./style";
export const GlobalStyle = `

${variables}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  scroll-behavior: smooth;
}

body {
  color: var(--foreground);
  background: var(--background);
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  background-image: linear-gradient(
      to right,
      var(--grid-color) 1px,
      transparent 1px
    ),
    linear-gradient(to bottom, var(--grid-color) 1px, transparent 1px);
  background-size: 70px 70px;
}


html,
body {
  max-width: 100vw;
  overflow-x: hidden;
}

a {
  color: inherit;
  text-decoration: none;
}

ul,
li {
  list-style: none;
}

button {
  outline: none;
  border: none;
  background: none;
  cursor: pointer;
}

${navStyles}
${heroStyles}
${section}
${contact}
${about}
${logo}
${footerStyles}
${cardStyles}
${media}
${button}
`;
