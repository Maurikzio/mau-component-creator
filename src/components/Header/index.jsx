/** @jsxImportSource @emotion/react */
import { useState } from "react";
import SettingsIcon from "../common/SettingsIcon";
import VisibilityIcon from "../common/VisibilityIcon";
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
`;

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <div css={headerStyles}>
      <div className="header-title">Button</div>
      <VisibilityIcon visible={isVisible} onClick={() => setIsVisible(!isVisible)} tooltipText="Toggle component visibility in library"/>
      <SettingsIcon tooltipText="Component settings" />
    </div>
  )
};

export default Header;