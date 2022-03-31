/** @jsxImportSource @emotion/react */
import { useState } from "react";
import Property from "./Property";
import AddProperty from "./AddProperty";
import { css } from "@emotion/react";

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
    }
    .header-add-property {
      display: flex;
      align-items: center;
      height: 24px;
      p {
        text-decoration: underline;
        font-size: 14px;
        color: ${colors.blue.base};
        line-height: 14px;
      }
    }
  }
  
`;

const Properties = (props) => {
  const { properties, updatePropertyField } = props;
  const [openNewProperty, setOpenNewProperty] = useState(false);
  return (
    <div css={propertiesStyles}>
      <div className="properties-header">
        <div>
          <p className="header-title">Properties</p>
          <div className="header-add-property" onClick={() => setOpenNewProperty(true)}>
            +
            <p>Add new property</p>
          </div>
        </div>
        {openNewProperty && <AddProperty/>}
      </div>
      {Object.entries(properties).map((property) => (
        <Property key={property[0]} data={property} updatePropertyField={updatePropertyField}/>
      ))}
    </div>
  )
}

export default Properties;