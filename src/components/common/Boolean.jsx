/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import t from "prop-types";

const booleanStyles = ({ colors }) => css`
  border: 1px solid ${colors.silver.dark5};
  width: 117px;
  display: inline-flex;
  .option {
    height: 22px;
    flex-grow: 1;
    text-align: center;
    line-height: 22px;
    cursor: pointer;
    &:first-of-type {
      border-right: 1px solid ${colors.silver.dark5};
    }
  }
  .selected {
    background-color: ${colors.silver.dark1};
  }
`;

const Boolean = (props) => {
  const { value, onChange } = props;
  
  const handleOnClick = (newValue) => {
    onChange(newValue);
  }
  return (
    <div css={booleanStyles}>
      <div className={`option ${value ? "selected" : ""}`} onClick={() => handleOnClick(true)}>True</div>
      <div className={`option ${!value ? "selected" : ""}`} onClick={() => handleOnClick(false)}>False</div>
    </div>
  )
};

Boolean.propTypes = {
  value: t.bool.isRequired,
  onChange: t.func.isRequired,
};

export default Boolean;