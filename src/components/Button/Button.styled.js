import styled from "styled-components";

import { colorsPalette } from "styles/colorsPalette";

export const Button = styled.button`
  color: ${(p) => p.variant === "secondary" && colorsPalette.white};
  background: ${(p) => p.variant === "primary" && colorsPalette.unityOrange};
  border-color: ${(p) => p.variant === "primary" && colorsPalette.unityOrange};

  color: ${(p) => p.variant === "secondary" && colorsPalette.black};
  background: ${(p) => p.variant === "secondary" && colorsPalette.white};
  border: 1px solid ${(p) => p.variant === "secondary" && colorsPalette.grey};

  min-height: 40px;
  cursor: pointer;
`;
