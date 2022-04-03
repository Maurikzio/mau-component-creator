import { css } from "@emotion/react";
import fontStyles from "./font.styles";

const styles = (theme) => css`
  ${fontStyles(theme)};
  
  body {
    color: ${theme.colors.gray.dark5};
    font-family: ${theme.typography.fontFamily};
    font-weight: normal;
    margin: 0;
  }

  .invisible {
    opacity: 30%;
  }


  ::-moz-selection {
    background: ${theme.colors.blue.base};
    color: ${theme.colors.white};
  }
  ::-webkit-selection {
    background: ${theme.colors.blue.base};
    color: ${theme.colors.white};
  }
  ::selection {
    background: ${theme.colors.blue.base};
    color: ${theme.colors.white};
  }

  ::-webkit-scrollbar {
    width: 4px;
    height: 4px;
    border-radius: 100px;
  }
  ::-webkit-scrollbar-track {
    background: ${theme.colors.silver.base};
  }
  ::-webkit-scrollbar-thumb {
    background: ${theme.colors.gray.light20};
    stroke-width: 3px;
    border-radius: 8px;
  }

`;

export default styles;