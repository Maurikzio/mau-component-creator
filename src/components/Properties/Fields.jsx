/** @jsxImportSource @emotion/react */
import Field from "../common/Field";
import Input from "../common/Input";
import Textarea from "../common/Textarea";
import Select from "../common/Select";
import Boolean from "../common/Boolean";

const Fields = (props) => {
  const { id, details, updatePropertyField } = props;

  const getDefaultValueComponent = ({type, value, options=[]}) => {
    const defaultValuesByType = {
      "boolean": <Boolean value={value} onChange={(newDefaultValue) => updatePropertyField(id, "defaultValue", newDefaultValue)}/>,
      "select": <Select options={options} value={value} onChange={(newDefaultValue) => updatePropertyField(id, "defaultValue", newDefaultValue)}/>,
      "textarea": <Textarea value={value} onChange={(newDefaultValue) => updatePropertyField(id, "defaultValue", newDefaultValue)}/>
    }
    return defaultValuesByType[type];
  }

  const getControlComponentByType = (type, value) => {
    const options = {
      "one of": ["select"],
      "node": ["textarea"],
    }
    return <Select options={options[type]} value={value} onChange={(newValue) => updatePropertyField(id, "control", newValue)} />
  }

  return (
    <div>
      <Field name="Property name">
        <Input value={details.propertyName} onChange={(newName) => updatePropertyField(id, "propertyName", newName)}/>
      </Field> 

      <Field name="Display name">
        <Input value={details.displayName} onChange={(newDisplayName) => updatePropertyField(id, "displayName", newDisplayName)}/>
      </Field>

      <Field name="Description" variant="column" spaceless>
        <Textarea 
          value={details.description} 
          onChange={(newDescription) => updatePropertyField(id, "description", newDescription)}
          rows={3}
        />
      </Field> 

      <Field name="Property type">
        <Select 
          options={["one of", "boolean", "node"]} 
          value={details.type} 
          onChange={(newType) => updatePropertyField(id, "type", newType) }
        />
      </Field> 

      {details.type !== "boolean" && (
        <Field name="Property control">
          {getControlComponentByType(details.type, details.control)}
        </Field>
      )}

      {details.control === "select" && (
        <Field name="Options" variant="column" helperText="(list options separared by comma)">
          <Textarea 
            value={details.options.join(", ")} 
            onChange={(newOptions) => updatePropertyField(id, "options", newOptions.split(", "))}
          />
        </Field>
      )}

      <Field name="Default value" variant={details.type === "node" ? "column" : "row"}>
        {getDefaultValueComponent({
          type: details.control || details.type, 
          value: details.defaultValue,
          options: details?.options
        })}
      </Field>

    </div>
  )
};

export default Fields;