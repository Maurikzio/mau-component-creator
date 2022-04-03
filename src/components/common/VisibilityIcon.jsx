/** @jsxImportSource @emotion/react */
import IconButton from "./IconButton";
import { ReactComponent as VisibleIcon } from "../../assets/icons/visibility_visible.svg";
import { ReactComponent as HiddenIcon } from "../../assets/icons/visibility_hidden.svg";
import t from "prop-types";

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

VisibilityIcon.propTypes = {
  onClick: t.func.isRequired,
  tooltipText: t.string,
  visible: t.bool.isRequired,
};

export default VisibilityIcon;