/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Button } from "@material-ui/core";
import { camelize } from "../../utils";
import t from "prop-types";

const previewStyles = css`
  margin-bottom: 81px;
  width: 300px;

  p {
    font-size: 24px;
    font-weight: bold;
    margin: 0;
  }

  button {
    margin-top: 16px;
  }

`
const Preview = (props) => {
  const { properties } = props;

  const mappedProperties = Object.values(properties).reduce((acc, curr) => {
    if(curr.visible) {
      acc[camelize(curr.propertyName)] = curr.defaultValue;
    }
    return acc;
  }, {});

  const setPropertyValue = (property, defaultValue) => {

    const acceptedValues = {
      color: ["default", "inherit", "primary", "secondary"],
      variant: ["contained", "outlined", "text"],
      size: ["large", "medium", "small"],
    }

    return acceptedValues?.[property].includes(mappedProperties?.[property]) 
      ? mappedProperties[property] 
      : defaultValue;
  }

  const setBooleanPropertyValue = (property, defaultValue = false) => {
    return typeof mappedProperties?.[property] === "boolean" 
      ? mappedProperties[property] 
      : defaultValue;
  }

  return (
    <div css={previewStyles}>
      <p>Component Preview</p>
      <Button 
        // {...propertiesToPass} // :(
        color={setPropertyValue("color")}
        disabled={setBooleanPropertyValue("disabled")}
        variant={setPropertyValue("variant")}
        fullWidth={setBooleanPropertyValue("fullWidth")}
        size={setPropertyValue("size")}
        disableRipple={setBooleanPropertyValue("disableRipple")}
        disableFocusRipple={setBooleanPropertyValue("disableFocusRipple")}
        disableElevation={setBooleanPropertyValue("disableElevation")}
      >Sign up</Button>
    </div>
  )
};

Preview.propTypes = {
  properties: t.object,
};

export default Preview;