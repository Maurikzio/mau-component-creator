/** @jsxImportSource @emotion/react */
import cn from "classnames";
import { css } from "@emotion/react";
import Fields from "./Fields";

const centerStyles = ({ colors }) => css`
  width: 513px;
  margin-bottom: 10px;
  color: ${colors.text.secondary};
  font-size: 14px;

  cursor: pointer;
  opacity: 0;
  max-height: 0;
  overflow-y: hidden;

  &.details-open {
    max-height: 100%;
    opacity: 1;
    cursor: default;
    &.invisible {
      opacity: 30%;
    }
  }

`;

const Details = (props) => {
  const { open,  details, id, updatePropertyField, visible } = props;

  const detailsClassNames = cn(
    {
      "details-open": open,
      "invisible": !visible,
    }
  )

  return (
    <div css={centerStyles} className={detailsClassNames}>
      <Fields id={id} details={details} updatePropertyField={updatePropertyField}/>
    </div>
  )
}

export default Details;