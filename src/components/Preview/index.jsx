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
        {...propertiesToPass}
      >Sign up</Button>
    </div>
  )
};

Preview.propTypes = {
  properties: t.object,
};

export default Preview;