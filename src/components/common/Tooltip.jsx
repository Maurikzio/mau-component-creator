/** @jsxImportSource @emotion/react */
import { Tooltip as MuiTooltip } from "@material-ui/core";
import { css } from "@emotion/react";
import t from "prop-types";

const tooltipStyles = ({ colors }) => css`
  .MuiTooltip-tooltip {
    background-color: ${colors.gray.dark20};
    color: ${colors.silver.dark15};
    border-radius: 2px;
    opacity: 1;
    font-size: 12px;
    font-weight: 200;
    max-width: 129px;
    text-align: left;
    padding: 4px 9px;
  }
  .MuiTooltip-arrow {
    color: ${colors.gray.dark20};
  }
`;

const Tooltip = (props) => {
  const { title, arrow=true, children } = props;

  return (
    <div css={tooltipStyles}>
      <MuiTooltip 
        arrow={arrow} 
        title={title}
        PopperProps={{
          disablePortal: true,
        }}
      >
        <div>{children}</div>
      </MuiTooltip>
    </div>
  )
}

Tooltip.propTypes = {
  title: t.string.isRequired,
  children: t.element.isRequired,
};

export default Tooltip;