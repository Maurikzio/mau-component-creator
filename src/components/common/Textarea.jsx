/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const textareaStyles = ({ colors, typography }) => css`
  resize: none;
  outline: none;
  border-color: ${colors.silver.dark5};
  width: 100%;
  color: ${colors.text.secondary};
  box-sizing: border-box;
  font-family: ${typography.fontFamily};
  padding: 3px 8px;
  line-height: 16px;
`;

const Textarea = (props) => {
  const { value = "", onChange, rows = 2 } = props;
  return (
    <textarea 
      css={textareaStyles}
      resize="false" 
      value={value}
      onChange={(e) => onChange(e.target.value)}
      rows={rows}
    />
  )
};

export default Textarea;