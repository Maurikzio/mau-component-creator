/** @jsxImportSource @emotion/react */
import IconButton from "./IconButton";
import { ReactComponent as VisibleIcon } from "../../assets/icons/visibility_visible.svg";
import { ReactComponent as HiddenIcon } from "../../assets/icons/visibility_hidden.svg";

const VisibilityIcon = (props) => {
  const { onClick, tooltipText, visible } = props;
  
  return (
    <IconButton 
      icon={visible ? <VisibleIcon /> : <HiddenIcon />} 
      onClick={onClick}
      tooltipText={tooltipText}
    />
  );
};

export default VisibilityIcon;