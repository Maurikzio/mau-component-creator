/** @jsxImportSource @emotion/react */
import cn from "classnames";
import { css } from "@emotion/react";

const detailFieldStyles = ({ colors }) => css`
  margin-bottom: 12px;
  display: flex;
  flex-direction: column;
  p {
    margin: 0;
  }
  .field {
    display: flex;
    width: 100%;
    > p {
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
  }

`;

const DetailField = (props) => {
  
  const { name, helperText = "", variant = "row", spaceless=false, children} = props;

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
      {helperText && <p className="helper-text">{helperText}</p>}
    </div>
  )
}
export default DetailField;