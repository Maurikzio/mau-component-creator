/** @jsxImportSource @emotion/react */
import IconButton from "./IconButton";
import { ReactComponent as Settings } from "../../assets/icons/gear.svg";
import t from "prop-types";

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

SettingsIcon.propTypes = {
  onClick: t.func,
  tooltipText: t.string,
};

export default SettingsIcon;