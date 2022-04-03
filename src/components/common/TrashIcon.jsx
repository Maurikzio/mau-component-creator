/** @jsxImportSource @emotion/react */
import IconButton from "./IconButton";
import { ReactComponent as Trash } from "../../assets/icons/trash.svg";
import t from "prop-types";

const TrashIcon = (props) => {
  const { onClick, tooltipText } = props;

  return (
    <IconButton
      icon={<Trash/>} 
      variant="danger"
      onClick={onClick}
      tooltipText={tooltipText}
    />
  )
};

TrashIcon.propTypes = {
  onClick: t.func.isRequired,
  tooltipText: t.string,
};

export default TrashIcon;