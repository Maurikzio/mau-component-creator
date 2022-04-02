/** @jsxImportSource @emotion/react */
import IconButton from "./IconButton";
import { ReactComponent as Settings } from "../../assets/icons/gear.svg";

const SettingsIcon = (props) => {
  const { onClick, tooltipText } = props;

  return (
    <IconButton
      icon={<Settings/>}
      onClick={onClick}
      tooltipText={tooltipText}
    />
  );
};

export default SettingsIcon;