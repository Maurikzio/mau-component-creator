/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const previewStyles = ({ colors }) => css`
  margin-bottom: 81px;
  .preview-title {
    p {
      margin: 0%;
      font-size: 24px;
      font-weight: bold;
    }
  }
`
const Preview = (props) => {
  return (
    <div css={previewStyles}>
      <div className="preview-title">
        <p>Component Preview</p>
      </div>
    </div>
  )
};

export default Preview;