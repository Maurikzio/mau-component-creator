/** @jsxImportSource @emotion/react */
import { useCallback, useState, useEffect } from "react";
import Fields from "./Fields";
import Button from "../common/Button";
import produce from "immer";
import { css } from "@emotion/react";
import { camelize } from "../../utils";
import t from "prop-types";

const addPropertyStyles = ({ colors }) => css`
  border-bottom: 1px solid ${colors.silver.dark5};
  font-size: 14px;
  display: flex;
  padding: 10px 20px;
  color: ${colors.gray.light10};

  .details {
    width: 513px;
  }

  .actions {
    margin-left: auto;
    display: flex;
    column-gap: 5px;
    align-items: flex-end;
    justify-content: center;
  }

  .learn-more {
    text-decoration: underline;
    color: ${colors.gray.light10};
  }
`;

const AddProperty = (props) => {
  const { onAdd, onCancel, currentPropertyNames } = props;

  const [newProperty, setNewProperty] = useState({
    propertyName: "",
    displayName: "",
    description: "",
    type: "one of",
    control: "select",
    options: [],
    defaultValue: "",
    visible: true,
    helperTexts: {
      propertyName: "(name of the proerty given in code)",
      control: <>(type of control displayed in editor's properties panel. <span className="learn-more"> Learn more</span> about control types)</>,
    }
  });

  const [addingIssues, setAddingIssues] = useState({propertyNameEmpty: "", alreadyExists: ""});

  useEffect(() => {
    if (!newProperty.propertyName) {
      setAddingIssues({...addingIssues, propertyNameEmpty: "Property name is required"});
    }
  }, [])

  const updateNewProperty = useCallback(({field, newValue}) => {

    if(field === "propertyName") {
      setAddingIssues({...addingIssues, propertyNameEmpty: !newValue ? "Property name is required" : ""})
    }

    setAddingIssues((oldState) => ({
      ...oldState, 
      alreadyExists: currentPropertyNames.includes(camelize(newValue)) ? `Property '${newValue}' already exists` : ""
    }));
    
    setNewProperty(
      produce((draft) => {
        const basicFields = ["propertyName", "displayName", "description", "defaultValue", "options"];
        if(basicFields.includes(field)) {
          draft[field] = newValue;
        } else if (field === "type") {
          if (newValue === "boolean") {
            delete draft.options;
            delete draft.control;
            draft.defaultValue = false;
          } else if (newValue === "one of") {
            draft.defaultValue = "";
            draft.options = [];
            draft.control = "select";
          } else if (newValue === "node") {
            delete draft.options;
            draft.defaultValue = "";
            draft.control = "textarea";
          }
          draft.type = newValue;
        }
      })
    );

  });

  const handleOnAdd = () => {
    const id = new Date().getTime();
    const property = {...newProperty}
    delete property.helperTexts;
    onAdd({ [id]: property });
    onCancel();
  }
  
  const addingIssuesText = Object.values(addingIssues).reduce((acc, curr) => {
    if(curr) {
      acc += `\u{02023} ${curr}\n`;
    }
    return acc;
  }, "");

  return (
    <div css={addPropertyStyles}>
      <div className="details">
        <Fields details={newProperty} updatePropertyField={updateNewProperty}/>
      </div>
      <div className="actions">
        <Button label="Cancel" onClick={onCancel} variant="link" />
        <Button 
          label="Add" 
          onClick={handleOnAdd} 
          disabled={!!addingIssuesText?.length} 
          tooltipText={addingIssuesText}
        />
      </div>
    </div>
  )
};

AddProperty.propTypes = {
  onAdd: t.func.isRequired,
  onCancel: t.func.isRequired,
  currentPropertyNames: t.array.isRequired,
};


export default AddProperty;