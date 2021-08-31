import React from 'react';
import PropTypes from 'prop-types';
import IconList from './FeatherIconList';
import { parseIconSize } from './FeatherIconHelpers';

const Icon = props => {
  const {
    icon = "empty",
    size: argSize
  } = props;
  const size = parseIconSize(argSize);
  console.log('size returned ' + size)

  if (!icon) {
    console.warn("a FeatherIcon was listed with no 'icon' prop and will not render.");
    return null;
  } else if (icon === "empty") {
    return <i 
      className="feather empty-icon" 
      style={{width: size, height: size}}
    />
  } else if (!IconList.includes(icon)) {
    console.warn("a FeatherIcon was listed with an invalid 'icon' prop and will not render.");
    return null;
  }

  return (
    <svg
      className={props.className ? props.className + " feather " + icon : " feather " + icon}
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <use xlinkHref={`../../../assets/feather-sprite.svg#${icon}`}/>
    </svg>
  )
}

Icon.propTypes = {
  icon: PropTypes.oneOf([...IconList, "empty"]).isRequired,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Icon;
