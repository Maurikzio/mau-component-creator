/** @jsxImportSource @emotion/react */
import IconButton from "./IconButton";
import { ReactComponent as Trash } from "../../assets/icons/trash.svg";

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
}

export default TrashIcon;