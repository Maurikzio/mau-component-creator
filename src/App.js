/** @jsxImportSource @emotion/react */
import { useCallback, useState } from "react";
import Properties from "./components/Properties";
import { css } from "@emotion/react";
import "./App.css";
import produce from "immer";


const appStyles = ({ colors }) => css`
  color: ${colors.primary};
`;

function App() {

  const [ properties, setProperties ] = useState({
    "1" : { 
      propertyName: "Color",
      displayName: "", 
      description: "", 
      type: "one of", 
      control: "select", 
      options: ["default", "inherit", "primary", "secondary"],
      defaultValue: "primary",
      visible: true,
    },
    "2" : { 
      propertyName: "Children", 
      displayName: "", 
      description: "", 
      type: "node", 
      control: "textarea", 
      defaultValue: "",
      visible: true,
    },
    "3" : { 
      propertyName: "Disabled",
      displayName: "", 
      description: "", 
      type: "boolean", 
      defaultValue: true,
      visible: true,
      },
    "4" : { 
      propertyName: "Disable focus ripple", 
      displayName: "", 
      description: "", 
      type: "boolean", 
      defaultValue: true,
      visible: false,
    },
    "5" : { 
      propertyName: "Disabled ripple", 
      displayName: "", 
      description: "", 
      type: "boolean", 
      defaultValue: true,
      visible: false,
    },
    "6" : { 
      propertyName: "Full Width", 
      displayName: "", 
      description: "", 
      type: "boolean", 
      defaultValue: true,
      visible: true,
    },
    "7" : { 
      propertyName: "Mini", 
      displayName: "", 
      description: "", 
      type: "boolean", 
      defaultValue: false,
      visible: true,
    },
    "8" : { 
      propertyName: "Size", 
      displayName: "", 
      description: "", 
      type: "one of", 
      control: "select",
      options: ["default", "small", "medium", "large"],
      defaultValue: "large",
      visible: true,
      },
    "9" : { 
      propertyName: "Variant", 
      displayName: "", 
      description: "", 
      type: "one of", 
      control: "select",
      options: ["default", "text", "outlined", "contained"],
      defaultValue: "contained",
      visible: true,
      },
  });

  const updatePropertyField = useCallback((id, field, newValue) => {
    setProperties(
      produce((draft) => {
        const property = draft[id];
        const basicFields = ["propertyName", "displayName", "description", "visible", "defaultValue", "options"];
        if(basicFields.includes(field)) {
          property[field] = newValue;
        } else if (field === "type") {
          if(newValue === "boolean") {
            delete property.options;
            delete property.control;
            property.defaultValue = false;
          } else if (newValue === "one of") {
            property.defaultValue = "";
            property.options = [];
            property.control = "select";
          } else if (newValue === "node") {
            delete property.options;
            property.defaultValue = "";
            property.control = "textarea";
          }
          property.type = newValue;
        }
      })
    )
  }, []);

  return (
    <div css={appStyles}>
      {/* <Topbar /> */}
      {/* <Header /> */}
      {/* <Preview /> */}
      <Properties properties={properties} updatePropertyField={updatePropertyField}/>
    </div>
  );
}

export default App;
