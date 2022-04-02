/** @jsxImportSource @emotion/react */
import IconButton from "./IconButton";
import { ReactComponent as SettingsIcon } from "../../assets/icons/gear.svg";
import Tooltip from "./Tooltip";

const Settings = (props) => {
  const { onClick=()=>{}, tooltipText } = props;

  const settingsIcon = (
    <IconButton
      icon={<SettingsIcon/>}
      onClick={onClick}
    />
  );

  if(tooltipText) {
    return (
      <Tooltip arrow title={tooltipText}>
        {settingsIcon}
      </Tooltip>
    )
  };

  return settingsIcon;

};

export default Settings;