/** @jsxImportSource @emotion/react */
import Field from "../common/Field";
import Input from "../common/Input";
import Textarea from "../common/Textarea";
import Select from "../common/Select";
import Boolean from "../common/Boolean";
import t from "prop-types";

const Fields = (props) => {
  const { id, details, updatePropertyField } = props;

  const getDefaultValueComponent = ({type, value, options=[]}) => {
    const defaultValuesByType = {
      "boolean": () => <Boolean value={!!value} onChange={(newValue) => updatePropertyField({id, field: "defaultValue", newValue})}/>,
      "select": () => <Select options={options} value={value} onChange={(newValue) => updatePropertyField({id, field: "defaultValue", newValue})}/>,
      "textarea": () => <Textarea value={value} onChange={(newValue) => updatePropertyField({id, field: "defaultValue", newValue})}/>
    }
    return defaultValuesByType[type]();
  }

  const getControlComponentByType = (type, value) => {
    const options = {
      "one of": ["select"],
      "node": ["textarea"],
    }
    return <Select options={options[type]} value={value} onChange={(newValue) => updatePropertyField({id, field: "control", newValue})} />
  }

  return (
    <div>
      <Field name="Property name" helperText={details?.helperTexts?.["propertyName"]}>
        <Input value={details.propertyName} onChange={(newValue) => updatePropertyField({id, field: "propertyName", newValue})}/>
      </Field> 

      <Field name="Display name" helperText={details?.helperTexts?.["displayName"]}>
        <Input value={details.displayName} onChange={(newValue) => updatePropertyField({id, field: "displayName", newValue})}/>
      </Field>

      <Field name="Description" variant="column" spaceless helperText={details?.helperTexts?.["description"]}>
        <Textarea 
          value={details.description} 
          onChange={(newValue) => updatePropertyField({id, field: "description", newValue})}
          rows={3}
        />
      </Field> 

      <Field name="Property type" helperText={details?.helperTexts?.["type"]}>
        <Select 
          options={["one of", "boolean", "node"]} 
          value={details.type} 
          onChange={(newValue) => updatePropertyField({id, field: "type", newValue})}
        />
      </Field> 

      {details.type !== "boolean" && (
        <Field name="Property control" helperText={details?.helperTexts?.["control"]}>
          {getControlComponentByType(details.type, details.control)}
        </Field>
      )}

      {details.control === "select" && (
        <Field name="Options" variant="column" helperText="(list options separared by comma)">
          <Textarea 
            value={details.options.join(", ")} 
            onChange={(newOptions) => updatePropertyField({id, field: "options", newValue: newOptions.split(", ")})}
          />
        </Field>
      )}

      <Field name="Default value" variant={details.type === "node" ? "column" : "row"} helperText={details?.helperTexts?.["defaultValue"]}>
        {getDefaultValueComponent({
          type: details.control || details.type, 
          value: details.defaultValue,
          options: details?.options
        })}
      </Field>

    </div>
  )
};

Fields.propTypes = {
  id: t.string,
  details: t.shape({
    propertyName: t.string.isRequired,
  }),
  updatePropertyField: t.func.isRequired,
};

export default Fields;