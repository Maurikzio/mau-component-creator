/** @jsxImportSource @emotion/react */
import { useState } from "react";

const AddProperty = (props) => {
  const {} = props;

  const [newProperty, setNewProperty] = useState({
    id: "10",
    propertyName: "",
    displayName: "",
    description: "",
    type: "one of",
    control: "",
    options: [],
    defaultValue: ""
  })

  const a = new Map([
    [
      "1", 
      { 
        propertyName: { label: "Property name", value: "Color", helperText: ""},
        displayName: { label: "Display name", value: "", helperText: ""},
        description: { label: "Description", value: "", helperText: ""},
        type: { label: "Property type", value: "one of", helperText: ""},
        control: { label: "Property control", value: "select", helperText: ""},
        options: { label: "Options", value: ["default", "inherit", "primary", "secondary"], helperText: ""},
        defaultValue: {label: "Default value", value: "primary", helperText: ""},
        visible: { label: "Visible", value: true, helperText: ""}
      }
    ]
  ])
  
  return (
    <div>
      Add Property
    </div>
  )
}

export default AddProperty;