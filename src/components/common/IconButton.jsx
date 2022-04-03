/** @jsxImportSource @emotion/react */
import Tooltip from "../common/Tooltip";
import cn from "classnames";
import { css } from "@emotion/react";
import t from "prop-types";

const iconStyles = ({ colors }) => css`
  display: inline-flex;
  width: 24px;
  height: 24px;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  cursor: pointer;

  svg path {
    fill: ${colors.silver.dark5};
    fill: #5e5e5e;
  }

  &:hover {
    background-color: ${colors.silver.ligth1};
  }

  &.danger {
    &:active {
      background-color: ${colors.red.pale};
      svg path {
        fill: ${colors.red.base};
      }
    }
  }
`;

// variants = "primary" | "danger",

const IconButton = (props) => {
  const { icon, onClick, variant = "primary", tooltipText="" } = props;

  const handleOnClick = (e) => {
    e.stopPropagation();
    onClick();
  }

  const iconButtonClassNames = cn([variant])

  const smartIcon = (
    <div css={iconStyles} className={iconButtonClassNames} onClick={onClick && handleOnClick}>
      {icon}
    </div>
  );

  if (tooltipText) {
    return (
      <Tooltip title={tooltipText}>
        {smartIcon}
      </Tooltip>
    )
  }

  return smartIcon
};

IconButton.propTypes = {
  icon: t.element.isRequired,
  onClick: t.func,
  variant: t.string,
  tooltipText: t.string,
};

export default IconButton;