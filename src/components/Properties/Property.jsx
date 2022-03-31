/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { css } from "@emotion/react";
import Left from "./Left";
import Right from "./Right";
import Details from "./Details";

const propertyStyles = ({ colors }) => css`
  border-bottom: 1px solid ${colors.silver.dark5};
  padding: 11px 20px;
  /* min-height: 47px; */
  display: flex;
  align-items: center;

  &.close {
    cursor: pointer;
  }

`

const Property = (props) => {
  const [open, setOpen] = useState(false);

  const {data, updatePropertyField} = props;
  const [propertyId, details] = data;

  const toggleProperty = () => {
    setOpen(!open);
  }

  return (
    <div 
      css={propertyStyles} 
      onClick={!open ? toggleProperty : undefined} 
      className={`${open ? "open" : "close"}`}
    >
      <Left 
        open={open} 
        name={details.propertyName} 
        visible={details.visible}
        updatePropertyField={updatePropertyField}
        id={propertyId}
      />
      <Details 
        open={open} 
        id={propertyId} 
        details={details} 
        updatePropertyField={updatePropertyField}
        visible={details.visible}
      />
      <Right 
        open={open} 
        onClick={toggleProperty} 
      /> 
    </div>
  )
};

export default Property;