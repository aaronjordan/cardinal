// make a button to wrap icons...
// probably should provide sr text too

import React from 'react';

const Button = (props) => {
  const passedProps = Object.assign({}, props);
  delete passedProps.children;

  if (props.stopPropagation && typeof props.onClick === "function") {
    delete passedProps.stopPropagation;
    const prevFn =  passedProps.onClick;
    passedProps.onClick = (e) => {
      e && typeof e.stopPropagation === "function" 
        && e.stopPropagation();
      prevFn(e);
    };
  }

  if (props.preventDefault && typeof props.onClick === "function") {
    delete passedProps.preventDefault;
    const prevFn =  passedProps.onClick;
    passedProps.onClick = (e) => {
      e && typeof e.preventDefault === "function" 
        && e.preventDefault();
      prevFn(e);
    };
  }

  if (props.variant) {
    delete passedProps.variant;
  }

  switch (props.variant) {
    case "icon":
      passedProps.className = `${props.variant} ${props.className || ""}`;
      break;
    case "link":
      passedProps.className = `${props.variant} ${props.className || ""}`;
      break;
    case "flex":
      passedProps.className = `${props.variant} ${props.className || ""}`;
      break;
    default:
      passedProps.className = `base ${props.className || ""}`;
  }
  

  return (
    <button
      {...passedProps}>
      {props.children}
    </button>
  );
};

export default Button;
