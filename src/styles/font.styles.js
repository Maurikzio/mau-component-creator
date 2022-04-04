import { css } from "@emotion/react";
import LatoBold from "../assets/fonts/Lato-Bold.ttf";
import LatoRegular from "../assets/fonts/Lato-Regular.ttf";

const fontStyles = css`
  @font-face {
    font-family: "Lato";
    font-weight: bold;
    src: url(${LatoBold});
  }

  @font-face {
    font-family: "Lato";
    font-weight: normal;
    src: url(${LatoRegular});
  }
`;

export default fontStyles;