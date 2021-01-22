import React from "react";
import PropTypes from "prop-types";

export const Oval = props => {
  const { strokeWidth = 2 } = props;
  let quantifier = strokeWidth > 2 ? strokeWidth - 2 : 2;
  const xy = 2 - quantifier;
  const wh = 34 + (quantifier * 2);
  
  return (
    <svg
      width={props.width}
      height={props.height}
      viewBox={`${xy} ${xy} ${wh} ${wh}`}
      xmlns="http://www.w3.org/2000/svg"
      stroke={props.color}
      aria-label={props.label}
    >
      <g fill="none" fillRule="evenodd">
        <g transform="translate(1 1)" strokeWidth={strokeWidth}>
          <circle strokeOpacity=".5" cx="18" cy="18" r={props.radius} />
          <path d="M36 18c0-9.94-8.06-18-18-18">
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 18 18"
              to="360 18 18"
              dur="1s"
              repeatCount="indefinite"
            />
          </path>
        </g>
      </g>
    </svg>
  )
};

Oval.propTypes = {
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  color: PropTypes.string,
  label: PropTypes.string,
  radius: PropTypes.number,
  strokeWidth: PropTypes.number
};

Oval.defaultProps = {
  height: 80,
  width: 80,
  color: "green",
  label: "audio-loading",
  radius:18,
  strokeWidth: 2
};
