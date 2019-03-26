import React from "react";
import PropTypes from "prop-types";

function TemplatesIcon({ className, fill }) {
  return (
    <svg
      width="30"
      height="32"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g transform="translate(-7 -7)" fill={fill} fill-rule="nonzero">
        <rect x="7.315" y="7" width="9" height="9" rx="3" />
        <rect x="17.315" y="7" width="9" height="9" rx="3" />
        <rect x="27.315" y="7" width="9" height="9" rx="3" />
        <rect x="7.315" y="19" width="9" height="9" rx="3" />
        <rect x="17.315" y="19" width="9" height="9" rx="3" />
        <rect x="27.315" y="19" width="9" height="9" rx="3" />
        <rect x="7.315" y="30" width="9" height="9" rx="3" />
        <rect x="17.315" y="30" width="9" height="9" rx="3" />
        <rect x="27.315" y="30" width="9" height="9" rx="3" />
      </g>
    </svg>
  );
}

TemplatesIcon.propTypes = {
  className: PropTypes.string,
  fill: PropTypes.string
};

TemplatesIcon.defaultProps = {
  className: undefined,
  fill: "rgba(0, 0, 0, 0.35)"
};

export default TemplatesIcon;
