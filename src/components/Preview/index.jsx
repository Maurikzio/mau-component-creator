/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Button } from "@material-ui/core";
import { camelize } from "../../utils";

const previewStyles = css`
  margin-bottom: 81px;
  width: 300px;

  p {
    margin: 0;
    font-size: 24px;
    font-weight: bold;
  }

  button {
    margin-top: 16px;
  }

`
const Preview = (props) => {
  const { properties } = props;
  
  const propertiesToPass = Object.values(properties).reduce((acc, curr) => {
    if(curr.visible) {
      acc[camelize(curr.propertyName)] = curr.defaultValue
    }
    return acc;
  }, {});

  return (
    <div css={previewStyles}>
      <p>Component Preview</p>
      <Button 
        variant={propertiesToPass?.["variant"] || "primary"} 
        size={propertiesToPass?.["size"] || "small"} 
        fullWidth={propertiesToPass?.["fullWidth"]} 
        color={propertiesToPass?.["color"] || "primary"}
        disableFocusRipple={propertiesToPass?.["disabledFocusRipple"]}
        disableRipple={propertiesToPass?.["disabledRipple"]}
        disabled={propertiesToPass?.["disabled"]}
      >Sign up</Button>
    </div>
  )
};

export default Preview;