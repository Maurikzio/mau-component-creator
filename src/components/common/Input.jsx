/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import t from "prop-types";

const inputStyles = ({ colors, typography }) => css`
  border: none;
  border-bottom: 1px solid ${colors.silver.dark5};
  outline: none;
  font-family: ${typography.fontFamily};
  font-size: 14px;
  width: 230px;
  height: 24px;
  color: ${colors.text.secondary};
  box-sizing: border-box;
`

const Input = (props) => {
  const { onChange, value } = props;

  return (
    <input 
      css={inputStyles}
      value={value}
      onChange={(e) => onChange(e.target.value)} 
    />
  )
};

Input.propTypes = {
  onChange: t.func.isRequired,
  value: t.string,
};

export default Input;