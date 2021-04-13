import React from "react";
import PropTypes from "prop-types";

import * as S from "./Button.styled";

const defaultProps = {
  disabled: false,
  type: "button",
  variant: "primary"
};

const propTypes = {
  /** HTML node, usually textNode */
  children: PropTypes.node.isRequired,
  /** Is disabled? */
  disabled: PropTypes.bool,
  /** Type of button */
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  /** Button's variants */
  variant: PropTypes.oneOf(["primary", "secondary"])
};

export const Button = ({ children, disabled, type, variant, ...restProps } = defaultProps) => {
  return (
    <S.Button disabled={disabled} type={type} variant={variant} {...restProps} role="button">
      {children}
    </S.Button>
  );
};

Button.defaultProps = defaultProps;
Button.propTypes = propTypes;
