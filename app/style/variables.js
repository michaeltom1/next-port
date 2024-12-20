export const variables = `
:root {
  --background: #ffffff;
  --foreground: #171717;
  --grid-color: #fafafa;
  --card-bg: #e2e3e9;
}

body.dark-mode {
  --background: #0a0a0a;
  --foreground: #ededed;
  --grid-color: #33333346;
  --nav-bg: #00000080;
  --card-bg: #15161c;
}

@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;
    --foreground: #ededed;
    --grid-color: #33333346;
    --nav-bg: #00000080;
    --card-bg: #15161c;
  }
  html {
    color-scheme: dark;
  }
}
`;
