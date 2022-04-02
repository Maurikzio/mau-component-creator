/** @jsxImportSource @emotion/react */
import Settings from "../common/Settings";
import Visibility from "../common/Visibility";
import { css } from "@emotion/react";

const headerStyles = css`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 28px;
  align-items: center;
  column-gap: 5px;

  .header-title {
    font-size: 36px;
    font-weight: bold;
  }

`

const Header = () => {
  return (
    <div css={headerStyles}>
      <div className="header-title">Button</div>
      <Visibility visible tooltipText="Toggle component visibility in library"/>
      <Settings tooltipText="Component settings" />
    </div>
  )
};

export default Header;