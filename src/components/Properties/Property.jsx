/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { css } from "@emotion/react";
import Left from "./Left";
import Right from "./Right";
import Details from "./Details";
import t from "prop-types";

const propertyStyles = ({ colors }) => css`
  border-bottom: 1px solid ${colors.silver.dark5};
  padding: 7px 20px;
  /* min-height: 47px; */
  display: flex;
  align-items: center;

  &:hover {
    .rigth-icon {
      background-color: ${colors.silver.ligth1};
    }
  }

  &.close {
    cursor: pointer;
  }

  &.open {
    &:hover {
      .rigth-icon {
        background-color: transparent;
      }
    }
  }
`;

const Property = (props) => {
  const { data, updatePropertyField, onRemoveProperty } = props;
  const [propertyId, details] = data;

  const [open, setOpen] = useState(false);

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
        onRemoveProperty={onRemoveProperty}
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

Property.propTypes = {
  data: t.array.isRequired,
  updatePropertyField: t.func.isRequired,
  onRemoveProperty: t.func.isRequired,
};

export default Property;