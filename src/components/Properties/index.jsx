/** @jsxImportSource @emotion/react */
import { useState } from "react";
import Property from "./Property";
import AddProperty from "./AddProperty";
import Button from "../common/Button";
import { ReactComponent as PlusIconBlue } from "../../assets/icons/plus_icon_blue.svg";
import { camelize } from "../../utils";
import { css } from "@emotion/react";
import t from "prop-types";

const propertiesStyles = ({ colors }) => css`
  width: 820px;
  .properties-header {
    p {
      margin: 0px;
    }

    > div:first-of-type {
      margin-bottom: 17px;
      display: flex;
      align-items: center;
      column-gap: 10px;
    }

    .header-title {
      font-size: 24px;
      font-weight: bold;
      height: 34px;
    }
    .header-add-property {
      display: flex;
      align-items: center;
      height: 24px;
      button {
        span {
          color: ${colors.blue.base};
        }
      }
    }
  }
`;

const Properties = (props) => {
  const { properties, updatePropertyField, onAddNewProperty, onRemoveProperty} = props;
  const [openNewProperty, setOpenNewProperty] = useState(false);

  const sortedPropertiesByName = Object.entries(properties).sort((a, b) => a[1].propertyName > b[1].propertyName ? 1 : -1);

  const currentPropertyNames = Object.values(properties).map(property => camelize(property.propertyName));

  return (
    <div css={propertiesStyles}>
      <div className="properties-header">
        <div>
          <p className="header-title">Properties</p>
          <div className="header-add-property" >
            <Button variant="link" label="Add new property" icon={<PlusIconBlue/>} onClick={() => setOpenNewProperty(true)}/>
          </div>
        </div>
        {openNewProperty && (
          <AddProperty 
            onAdd={onAddNewProperty} 
            onCancel={() => setOpenNewProperty(false)}
            currentPropertyNames={currentPropertyNames}
          />
        )}
      </div>
      {sortedPropertiesByName.map((property) => (
        <Property 
          key={property[0]} 
          data={property} 
          updatePropertyField={updatePropertyField}
          onRemoveProperty={onRemoveProperty}
        />
      ))}
    </div>
  )
};

Properties.propTypes = {
  properties: t.object.isRequired,
  updatePropertyField: t.func.isRequired,
  onAddNewProperty: t.func.isRequired,
  onRemoveProperty: t.func.isRequired,
};

export default Properties;