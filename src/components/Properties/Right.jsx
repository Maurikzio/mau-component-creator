/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ReactComponent as OpenIcon } from "../../assets/icons/plus.svg";
import { ReactComponent as CloseIcon } from "../../assets/icons/action_close.svg";
import IconButton from "../common/IconButton";
import t from "prop-types";

const righStyles = css`
  cursor: pointer;
  margin-left: auto;

  &.right-open {
    align-self: flex-start;
    padding-top: 4px;
  }

  .icon-open {
    transform: rotate(45deg);
  }
`

const Right = (props) => {
  const { open, onClick } = props;
  return (
    <div css={righStyles} className={`rigth-icon ${open ? "right-open" : "right"}`}>
      <IconButton icon={open ? <CloseIcon/> : <OpenIcon/>} onClick={onClick}/>
    </div>
  )
};

Right.propTypes = {
  open: t.bool.isRequired,
  onClick: t.func,
};

export default Right;