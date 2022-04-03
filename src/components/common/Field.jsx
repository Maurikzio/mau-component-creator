/** @jsxImportSource @emotion/react */
import cn from "classnames";
import { css } from "@emotion/react";
import t from "prop-types";

const fieldStyles = ({ colors }) => css`
  margin-bottom: 12px;
  display: flex;
  flex-direction: column;

  .field {
    display: flex;
    width: 100%;
    > p {
      margin: 0;
      height: 24px;
      line-height: 24px;
    }
    &-row {
      flex-direction: row;
      column-gap: 21px;
    }
    &-column {
      flex-direction: column;
      row-gap: 4px;
      width: 100%;
    }
    &-spaceless {
      column-gap: 0;
      row-gap: 0;
    }
  }

  .helper-text {
    color: ${colors.gray.ligth25};
    height: 16px;
    font-size: 12px;
    font-weight: 200;
    /* line-height: 16px; */
    margin: 2px 0px 0px 0px;
  }

`;

const Field = (props) => {  
  const { name, helperText, variant="row", spaceless=false, children} = props;
  
  const fieldClassnames = cn(
    "field",
    `field-${variant}`,
    {
      "field-spaceless": spaceless,
    }
  );

  return (
    <div css={fieldStyles} >
      <div className={fieldClassnames}>
        <p>{name}</p>
        {children}
      </div>
      {helperText && <div className="helper-text">{helperText}</div>}
    </div>
  )
};

Field.propTypes = {
  name: t.string.isRequired,
  helperText: t.oneOfType([t.string, t.element]),
  variant: t.string,
  spaceless: t.bool,
  children: t.element.isRequired
};

export default Field;