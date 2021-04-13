import styled from "styled-components";
import { Link } from "react-router-dom";

import { colorsPalette } from "styles/colorsPalette";

export const Navigation = styled.nav`
  color: #fff;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
`;

export const NavigationItem = styled.div`
  background-color: ${colorsPalette.unityOrange};
  cursor: pointer;
`;

export const NavigationLink = styled(Link)`
  color: ${colorsPalette.white};
  text-decoration: none;
  display: block;
  padding: 10px 15px;
`;
