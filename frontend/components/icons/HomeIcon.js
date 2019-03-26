import React from "react";
import PropTypes from "prop-types";

function HomeIcon({ className, fill }) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <path fill={fill} d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8h5z" />
    </svg>
  );
}

HomeIcon.propTypes = {
  className: PropTypes.string,
  fill: PropTypes.string
};

HomeIcon.defaultProps = {
  className: undefined,
  fill: "rgba(0, 0, 0, 0.35)"
};

export default HomeIcon;
