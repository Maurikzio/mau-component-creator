/** @jsxImportSource @emotion/react */
import { useState } from "react";
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { ReactComponent as Chevron} from "../../assets/icons/chevron.svg";
import { css } from "@emotion/react";
import t from "prop-types";

const selectStyles = ({ colors, typography }) => css`
  height: 24px;
  width: 118px;
  .MuiInputBase-input {
    font-family: ${typography.fontFamily};
    font-size: 14px;
    color: ${colors.text.secondary};
    border-bottom: 1px solid ${colors.silver.dark5};
    padding-bottom: 3px;
  }

  .MuiSelect-select:focus {
    background-color: transparent;
  }

  .MuiInputBase-root {
    height: 24px;
  }

  .MuiSelect-icon {
    top: 50%;
  }

  .MuiList-root {
    li {
      font-family: ${typography.fontFamily};
      font-size: 14px;
      color: ${colors.text.secondary};
    }
  }
`

const Select = (props) => {
  const { options = [], value, onChange } = props;
  
  const handleChange = (event) => {
    onChange(event.target.value);
  }

  return (
    <TextField
      css={selectStyles}
      select
      value={value}
      onChange={handleChange}
      SelectProps={{
        IconComponent: (iconProps) => <Chevron {...iconProps}/>,
        disableUnderline: true,
        MenuProps: {
          disablePortal: true,
          getContentAnchorEl: null,
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "left"
          }
        }
      }}
    >
      {options.map((option) => (
        <MenuItem key={option} value={option}>
          {option}
        </MenuItem>
      ))}
    </TextField>
  )
};

Select.propTypes = {
  options: t.array,
  value: t.string,
  onChange: t.func.isRequired,
};

export default Select;