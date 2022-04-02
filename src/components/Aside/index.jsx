/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const asideStyles = ({colors}) => css`
  width: 258px;
  min-width: 258px;
  border-left: 1px solid ${colors.silver.dark5}; 
`;

const Aside = () => <div css={asideStyles}></div>

export default Aside;