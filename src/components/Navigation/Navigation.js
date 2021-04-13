import React from "react";
// import PropTypes from "prop-types";

import * as GS from "styles/global";

import * as S from "./Navigation.styled";

const defaultProps = {};

const propTypes = {};

export const Navigation = () => {
  return (
    <GS.Container>
      <S.Navigation>
        <S.NavigationItem>
          <S.NavigationLink to="/">Home</S.NavigationLink>
        </S.NavigationItem>
        <S.NavigationItem>
          <S.NavigationLink to="/counter">Redux-Counter</S.NavigationLink>
        </S.NavigationItem>
        <S.NavigationItem>
          <S.NavigationLink to="/kendogrid">KendoGrid</S.NavigationLink>
        </S.NavigationItem>
        <S.NavigationItem>
          <S.NavigationLink to="/kendogrid-hoc">KendoGrid HoC</S.NavigationLink>
        </S.NavigationItem>
      </S.Navigation>
    </GS.Container>
  );
};

Navigation.defaultProps = defaultProps;
Navigation.propTypes = propTypes;
