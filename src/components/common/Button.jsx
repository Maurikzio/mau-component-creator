/** @jsxImportSource @emotion/react */
import Tooltip from "./Tooltip";
import { css } from "@emotion/react"
import cn from "classnames";

const buttonStyles = ({ colors }) => css`
  outline: none;
  border: none;
  cursor: pointer;

  &.btn-button {
    background-color: ${colors.blue.base};
    color: ${colors.white};
    padding: 8px 20px;
    border-radius: 2px;
  }

  &.btn-link {
    background-color: transparent;
    color: ${colors.gray.light10};
    span {
      text-decoration: underline;
    }
  }

  &.btn-md {
    height: 34px;
    font-size: 14px;

  }

  &.btn-sm {
    height: 24px;
    font-size: 12px;
  }

  &.btn-disabled {
    background-color: ${colors.gray.light30};
    cursor: default;
  }
`;

//variant= button | link

const Button = (props) => {
  const { onClick, label, variant="button", size="md", icon=null, disabled=false, tooltipText} = props;

  const buttonClassnames = cn([`btn-${variant}`, `btn-${size}`], {"btn-disabled": disabled});

  const smartBtn = (
    <button 
      size={size} 
      onClick={!disabled ? onClick : undefined} 
      css={buttonStyles} 
      className={buttonClassnames} 
      >
      {icon} <span>{label}</span>
    </button>
  )

  if(tooltipText) {
    return (
      <Tooltip arrow title={tooltipText}>
        {smartBtn}
      </Tooltip>
    )
  }

  return smartBtn;
};

export default Button;