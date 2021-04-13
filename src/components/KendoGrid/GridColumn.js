import { GridColumn as Column } from "@progress/kendo-react-grid";
import styled from "styled-components";

const GridColumn = styled(Column)`
  table {
    width: 100%;
  }

  & thead tr {
    background: #283246;
    color: #fff;
  }
`;

export default GridColumn;
