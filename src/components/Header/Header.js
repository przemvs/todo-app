import React from "react";
// import PropTypes from "prop-types";
import { ReactSVG } from "react-svg";

import * as S from "./Header.styled";

import unitySymbol from "../../../public/assets/img/unity_symbol.svg";
import unityHorizontalText from "../../../public/assets/img/unity_horizontal_text.svg";

const defaultProps = {};

const propTypes = {};

export const Header = () => {
  return (
    <S.Header>
      <S.Wrapper>
        <S.Logo>
          <ReactSVG src={unitySymbol} />
          <ReactSVG src={unityHorizontalText} />
        </S.Logo>
      </S.Wrapper>
    </S.Header>
  );
};

Header.defaultProps = defaultProps;
Header.propTypes = propTypes;
