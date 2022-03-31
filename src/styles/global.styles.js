import { css } from "@emotion/react";
import fontStyles from "./font.styles";

const styles = (theme) => css`
  ${fontStyles(theme)};
  
  body {
    color: ${theme.colors.text.primary};
    font-family: ${theme.typography.fontFamily};
    font-weight: normal;
  }
`;

export default styles;