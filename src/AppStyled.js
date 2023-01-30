import {createGlobalStyle} from 'styled-components';

export const Global = createGlobalStyle`
  @font-face {
    font-family: 'Roboto';
    src: url('/fonts/Roboto-Black.eot');
    src: url('/fonts/Roboto-Black.eot?#iefix') format('embedded-opentype'),
    url('/fonts/Roboto-Black.woff') format('woff'),
    url('/fonts/Roboto-Black.ttf') format('truetype');
    font-weight: 900;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Roboto';
    src: url('/fonts/Roboto-Regular.eot');
    src: url('/fonts/Roboto-Regular.eot?#iefix') format('embedded-opentype'),
    url('/fonts/Roboto-Regular.woff') format('woff'),
    url('/fonts/Roboto-Regular.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Roboto';
    src: url('/fonts/Roboto-Medium.eot');
    src: url('/fonts/Roboto-Medium.eot?#iefix') format('embedded-opentype'),
    url('/fonts/Roboto-Medium.woff') format('woff'),
    url('/fonts/Roboto-Medium.ttf') format('truetype');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Roboto';
    src: url('/fonts/Roboto-Bold.eot');
    src: url('/fonts/Roboto-Bold.eot?#iefix') format('embedded-opentype'),
    url('/fonts/Roboto-Bold.woff') format('woff'),
    url('/fonts/Roboto-Bold.ttf') format('truetype');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Roboto';
    src: url('/fonts/Roboto-Italic.eot');
    src: url('/fonts/Roboto-Italic.eot?#iefix') format('embedded-opentype'),
    url('/fonts/Roboto-Italic.woff') format('woff'),
    url('/fonts/Roboto-Italic.ttf') format('truetype');
    font-weight: 400;
    font-style: italic;
    font-display: swap;
  }

  /*REST*/
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  p,
  figure,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  ul,
  ol {
    list-style: none;
    padding-left: 0;
  }

  /* Set core root defaults */
  html:focus-within {
    scroll-behavior: smooth;
  }

  body {
    min-height: 100vh;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
  }

  img,
  picture {
    max-width: 100%;
    display: block;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  body {
    font-family: 'Roboto', sans-serif;
    color: ${({theme}) => theme.color.text};
    font-weight: 400;
    font-size: 15px;
    line-height: 1.2;
  }

  .app_row {
    display: flex;
  }

`