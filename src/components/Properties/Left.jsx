/** @jsxImportSource @emotion/react */
import cn from "classnames";
import { css } from "@emotion/react";
import VisibilityIcon from "../common/VisibilityIcon";
import TrashIcon from "../common/TrashIcon";
import t from "prop-types";

const leftStyles = css`
  width: 226px;
  display: flex;
  height: 32px;
  line-height: 32px;
  align-items: center;
  column-gap: 5px;

  &.left-open {
    align-self: flex-start;
  }
`;

const Left = (props) => {
  const { open, name, visible, updatePropertyField, id, onRemoveProperty } = props;

  const handleOnClickVisibility = () => {
    updatePropertyField({ id, field: "visible", newValue: !visible});
  }

  const leftClassNames = cn(
    {"left-open": open,}
  )
  
  return (
    <div css={leftStyles} className={leftClassNames}>
      <span className={cn({"invisible": !visible})}>{name}</span>
      <VisibilityIcon 
        visible={visible}
        onClick={handleOnClickVisibility} 
        tooltipText={`${visible ? "Hide" : "Show"} property`}
      />
      {open && <TrashIcon tooltipText="Delete property" onClick={() => onRemoveProperty(id)}/>}
    </div>
  )
};

Left.propTypes = {
  open: t.bool.isRequired,
  name: t.string.isRequired,
  updatePropertyField: t.func.isRequired,
  id: t.string.isRequired,
  onRemoveProperty: t.func.isRequired,
};

export default Left;