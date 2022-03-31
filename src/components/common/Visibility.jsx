/** @jsxImportSource @emotion/react */
import IconButton from "./IconButton";
import { ReactComponent as VisibleIcon } from "../../assets/icons/visibility_visible.svg";
import { ReactComponent as HiddenIcon } from "../../assets/icons/visibility_hidden.svg";
import Tooltip from "./Tooltip";

const Visibility = (props) => {
  const { onClick, tooltipText, visible } = props;
  
  const visibilityIcon = (
    <IconButton 
      icon={visible ? <VisibleIcon /> : <HiddenIcon />} 
      onClick={onClick}
    />
  );

  if(tooltipText) {
    return (
      <Tooltip title={tooltipText} arrow>
        {visibilityIcon}
      </Tooltip>
    )
  }

  return visibilityIcon;
};

export default Visibility;