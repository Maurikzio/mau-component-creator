/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { css } from "@emotion/react";
import { Breadcrumbs } from "@material-ui/core";
import { ReactComponent as GroupIcon } from "../../assets/icons/layout-medium-tile-outline.svg";
import Button from "../common/Button";

const topbarStyles = ({ colors, typography }) => css`
  height: 32px;
  display: flex;
  align-items: center;
  column-gap: 16px;
  border-bottom: 1px solid ${colors.silver.dark5};
  .topbar-left-icon {
    padding: 2px 9px;
    border-right: 1px solid ${colors.silver.dark5};
  }

  nav {
    font-family: ${typography.fontFamily};
  }

  .topbar-breadcrumbs {
    font-size: 15px;
    span {
      color: #777777;
      font-weight: normal;
    }
    .active {
      color: #373737;
      font-weight: bold;
    }
  }

  .topbar-actions {
    display: flex;
    margin-left: auto;
    column-gap: 14px;
  }
`

const Topbar = (props) => {
  const { componentName } = props;
  const [ changesToSave, setChangesToSave ] = useState(true);

  return (
    <div css={topbarStyles}>
      <div className="topbar-left-icon">
        <GroupIcon/>
      </div>
        
      <div className="topbar-breadcrumbs">
        <Breadcrumbs>
          <span >Material UI</span>
          <span className="active">{componentName}</span>
        </Breadcrumbs>
      </div>
      
      <div className="topbar-actions">
        <Button label="Discard changes" variant="link" size="sm" />
        <Button 
          label={`${!changesToSave ? "No changes to save"  : "Save changes"}`} 
          size="sm" 
          onClick={() => setChangesToSave(false)}
          variant={changesToSave ? "button" : "default"}
        />
      </div>

    </div>
  )
}

export default Topbar;