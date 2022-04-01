/** @jsxImportSource @emotion/react */
import cn from "classnames";
import { css } from "@emotion/react";
import Visibility from "../common/Visibility";
import Trash from "../common/Trash";

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
  const { open, name, visible, updatePropertyField, id } = props;

  const handleOnClickVisibility = () => {
    updatePropertyField({ id, field: "visible", newValue: !visible});
  }

  const leftClassNames = cn(
    {"left-open": open,}
  )
  
  return (
    <div css={leftStyles} className={leftClassNames}>
      <span className={cn({"invisible": !visible})}>{name}</span>
      <Visibility 
        visible={visible}
        onClick={handleOnClickVisibility} 
        tooltipText={`${visible ? "Hide" : "Show"} property`}
      />
      {open && <Trash tooltipText="Delete property"/>}
    </div>
  )
};

export default Left;