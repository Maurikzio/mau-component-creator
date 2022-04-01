/** @jsxImportSource @emotion/react */
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
`;


//variant= button | link

const Button = (props) => {
  const { onClick, label, variant="button", size="md", icon = null} = props;

  const buttonClassnames = cn([`btn-${variant}`, `btn-${size}`]);

  return (
    <button onClick={onClick} css={buttonStyles} className={buttonClassnames} size={size}>
      {icon} <span>{label}</span>
    </button>
  )
};

export default Button;