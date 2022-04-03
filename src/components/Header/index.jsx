/** @jsxImportSource @emotion/react */
import { useState } from "react";
import SettingsIcon from "../common/SettingsIcon";
import VisibilityIcon from "../common/VisibilityIcon";
import { css } from "@emotion/react";
import t from "prop-types";

const headerStyles = css`
  align-items: center;
  column-gap: 5px;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 28px;

  .header-title {
    font-size: 36px;
    font-weight: bold;
  }
`;

const Header = (props) => {
  const { componentName } = props;
  const [isVisible, setIsVisible] = useState(true);
  return (
    <div css={headerStyles}>
      <div className="header-title">{componentName}</div>
      <VisibilityIcon visible={isVisible} onClick={() => setIsVisible(!isVisible)} tooltipText="Toggle component visibility in library"/>
      <SettingsIcon tooltipText="Component settings" />
    </div>
  )
};

Header.propTypes = {
  componentName: t.string.isRequired,
};

export default Header;