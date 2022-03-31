/** @jsxImportSource @emotion/react */
import IconButton from "./IconButton";
import Tooltip from "./Tooltip";
import { ReactComponent as TrashIcon } from "../../assets/icons/trash.svg";

const Trash = (props) => {
  const { onClick, tooltipText } = props;

  const trashIcon = (
    <IconButton
      icon={<TrashIcon/>} 
      variant="danger"
      // TODO: add onClick functionality
    />
  );

  if (tooltipText) {
    return (
      <Tooltip title={tooltipText} arrow>
        {trashIcon}
      </Tooltip>
    )
  }

  return trashIcon;
}

export default Trash;