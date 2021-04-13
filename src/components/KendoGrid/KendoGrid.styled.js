import styled from "styled-components";
import { Grid as KendoGrid } from "@progress/kendo-react-grid";
import { transparentize } from "polished";

export const Grid = styled(KendoGrid)`
  &.k-grid {
    margin: 0 auto 32px;

    th {
      padding: 8px 10px;
    }

    .k-master-row {
      cursor: ${(p) => p.onRowClick && "pointer"};
    }

    .k-grid-header {
      padding-right: 0 !important;

      .k-header > .k-link {
        padding: 8px 10px;
        display: flex;
        align-items: center;

        > .k-icon {
          margin-left: 0;
        }
      }
    }

    table {
      background-color: #e8e8e8;
      border-spacing: 1px 0;
      width: 100%;
    }

    thead tr {
      background: #283246;
      color: #fff;
      font-size: 16px;

      input {
        border: 1px solid #787d82;
        border-radius: 4px;
        font-size: 14px;
        padding: 8px;
        width: 100%;
      }
    }

    tbody tr {
      background-color: #fff;

      &:nth-child(even) {
        background-color: ${transparentize(0.7, "#005596")};
        color: #283246;
      }

      td {
        padding: 10px 10px 12px;
      }
    }

    .k-filter-row {
      background-color: ${transparentize(0.7, "#005596")};
      th {
        padding: 7px 10px;
      }
    }

    .k-pager-wrap {
      background-color: #787d82;
      color: #283246;

      font-size: 16px;
      font-weight: 600;

      display: flex;
      margin-top: 1px;

      .k-textbox {
        font-size: 16px;
        padding: 8px 0;
        text-align: center;
      }
    }

    .k-picker-wrap {
      background: #fff;
      border: 1px solid #787d82;
      border-radius: 4px;
    }

    .k-filtercell {
      input {
        padding: 4px 8px;
      }

      .k-filtercell-operator > .k-button:not(.k-clear-button-visible) {
        display: none;
      }
    }

    .k-datepicker {
      background-color: transparent;

      .k-select {
        background-color: transparent;
        background-image: none;
      }
    }

    .k-dateinput-wrap {
      border: none;
      .k-input {
        border: none;
        border-right: 1px solid #787d82;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        color: #283246;
        font-size: 14px;
        padding: 5px 8px;
        margin-bottom: 0;
        height: auto;
        width: 100%;

        &::placeholder {
          color: ${transparentize(0.35, "#787d82")};
          font-weight: 400;
        }
      }
    }

    .k-pager-sizes {
      margin-left: auto;
    }

    .k-virtual-content {
      overflow-y: auto;
    }
  }
`;
