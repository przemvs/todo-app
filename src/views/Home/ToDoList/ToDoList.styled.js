import styled from "styled-components";

import { colorsPalette } from "styles/colorsPalette";

export const Wrapper = styled.div`
  max-width: 800px;
  width: 100%;
`;

export const Table = styled.table`
  border: 1px solid ${colorsPalette.white};
  border-spacing: 0;
  width: 100%;
`;

export const Td = styled.td`
  border: 1px solid ${colorsPalette.white};
  //border-top-width: 0;
  padding: 6px 10px;
`;

export const Tr = styled.tr`
  &:not(:last-child) ${Td} {
    border-bottom-width: 0;
  }
`;

export const Thead = styled.thead`
  background-color: ${colorsPalette.unityOrange};

  ${Tr} ${Td} {
    border-top-width: 0;
  }
`;

export const Tbody = styled.tbody`
  ${Tr} {
    &:last-child ${Td} {
      border-bottom-width: 0;
    }

    ${Td} {
      &:first-child {
        border-left-width: 0;
      }

      &:not(:last-child) {
        border-right-width: 0;
      }
    }
  }
`;
