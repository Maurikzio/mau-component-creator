/** @jsxImportSource @emotion/react */
import cn from "classnames";
import { css } from "@emotion/react";

const detailFieldStyles = ({ colors }) => css`
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

const DetailField = (props) => {
  
  const { name, helperText="", variant="row", spaceless=false, children} = props;

  const detailFieldClassnames = cn(
    "field",
    `field-${variant}`,
    {
      "field-spaceless": spaceless,
    }
  );

  return (
    <div css={detailFieldStyles} >
      <div className={detailFieldClassnames}>
        <p>{name}</p>
        {children}
      </div>
      {helperText && <div className="helper-text">{helperText}</div>}
    </div>
  )
}
export default DetailField;