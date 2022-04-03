/** @jsxImportSource @emotion/react */
import { useCallback, useState } from "react";
import Properties from "./components/Properties";
import Preview from "./components/Preview";
import Header from "./components/Header";
import Topbar from "./components/Topbar";
import Aside from "./components/Aside";
import { css } from "@emotion/react";
import produce from "immer";
import initialProperties from "./properties";


const appStyles = ({ colors }) => css`
  color: ${colors.primary};
  display: flex;

  section {
    width: 1182px;
  }

  main {
    padding-top: 45px;
    padding-left: 43px;
  }
`;

function App() {

  const [ properties, setProperties ] = useState(initialProperties);

  const updatePropertyField = useCallback(({id, field, newValue}) => {
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

  const handleRemoveProperty = (id) => {
    setProperties(
      produce(draft => {
        delete draft[id];
      })
    )
  }

  const handleAddNewProperty = (newProperty) => {
    setProperties({...properties, ...newProperty})
  }

  const componentName = "Button";

  return (
    <div css={appStyles}>
      <section>
        <Topbar componentName={componentName}/>
        <main>
          <Header componentName={componentName}/>
          <Preview properties={properties} />
          <Properties 
            properties={properties} 
            updatePropertyField={updatePropertyField} 
            onAddNewProperty={handleAddNewProperty}
            onRemoveProperty={handleRemoveProperty}
          />
        </main>
      </section>
      <Aside/>
    </div>
  );
}

export default App;
