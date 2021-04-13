import React from "react";
import PropTypes from "prop-types";

import * as S from "./Input.styled";

const defaultProps = {
  type: "text",
  defaultValue: "",
  placeholder: "",
  required: false,
  disabled: false,
  readOnly: false
};

const propTypes = {
  type: PropTypes.oneOf(["text", "password", "email", "tel", "number"]),
  defaultValue: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool
};

export const Input = ({
  type,
  defaultValue,
  placeholder,
  required,
  disabled,
  readOnly,
  ...restProps
} = defaultProps) => {
  const inputBaseProps = {
    type,
    defaultValue,
    placeholder,
    required,
    disabled,
    readOnly,
    ...restProps
  };

  return <S.Input {...inputBaseProps} />;
};

Input.defaultProps = defaultProps;
Input.propTypes = propTypes;
