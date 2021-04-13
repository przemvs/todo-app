import React, { Component, useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import AirBnbPropTypes from "airbnb-prop-types";
import { GridColumn } from "@progress/kendo-react-grid";
import { ExcelExport } from "@progress/kendo-react-excel-export";
import { Button } from "components";
import * as S from "./KendoGrid.styled";

const defaultProps = {
  dataItem: {},
  selectable: false,
  inlineEdit: false,
  expandable: false,
  pageable: {
    info: false,
    type: "input",
    pageSizes: true,
    previousNext: true
  },
  sortable: { allowUnsort: true, mode: "single" },
  ExpandComponent: Component,
  excelGetRecordsMethod: null,
  excelGetRecordsMethodMapper: (excelRecords) => excelRecords,
  onRowClick: null,
  dataState: { skip: 0, take: 10 }
};

const excelExportWrapperStyles = {
  display: "flex",
  justifyContent: "flex-end",
  flexBasis: "auto",
  marginBottom: "15px"
};

const excelExportButtonStyles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

export const KendoGrid = ({
  children,
  data,
  selectable,
  inlineEdit,
  expandable,
  ExpandComponent,
  excelGetRecordsMethod,
  excelGetRecordsMethodMapper,
  dataState,
  dataStateChange,
  ...rest
} = defaultProps) => {
  const selectableData = data.map((dataItem) => ({ ...dataItem, selected: false }));
  const originalData = selectable ? selectableData : data;
  const [gridData, setGridData] = useState(originalData);
  const [isFetchingExcelRows, setFetchingExcelRows] = useState(false);

  const exporterRef = useRef();
  const gridRef = useRef();

  useEffect(() => {
    setGridData(originalData);
  }, [originalData]);

  const onSelectionChange = (eventChange) => {
    const newData = gridData.map((item) => {
      if (item.ID === eventChange.dataItem.ID) {
        return {
          ...item,
          selected: !item.selected
        };
      }

      return item;
    });

    setGridData(newData);
  };

  const onHeaderSelectionChange = (eventChange) => {
    const { checked } = eventChange.syntheticEvent.target;
    const newData = gridData.map((item) => ({
      ...item,
      selected: checked
    }));

    setGridData(newData);
  };

  const updateData = (arr, item) => {
    const index = arr.findIndex((p) => p === item || (item.ID && p.ID === item.ID));
    // eslint-disable-next-line no-param-reassign
    arr[index] = { ...item };

    return arr[index];
  };

  const onItemChange = ({ field, value, dataItem }) => {
    const updatedData = gridData.slice();
    const item = updateData(updatedData, dataItem);
    item[field] = value;

    setGridData(updatedData);
  };

  const onExpandChange = (item) => {
    const itemRef = item;
    itemRef.dataItem.expanded = !itemRef.dataItem.expanded;
    setGridData(gridData.slice());
  };

  const selectableProps = selectable && {
    selectedField: "selected",
    onSelectionChange,
    onHeaderSelectionChange
  };

  const inlineEditProps = inlineEdit && {
    editField: "inEdit",
    onItemChange
  };

  const expandableProps = expandable && {
    expandField: "expanded",
    onExpandChange,
    detail: ExpandComponent
  };

  const gridProps = {
    ...selectableProps,
    ...inlineEditProps,
    ...expandableProps
  };

  const createColumnsInfoForExcel = (gridChildren) => {
    if (!gridChildren) {
      return [];
    }

    return React.Children.map(gridChildren, (child, index) => {
      if (!child) {
        return null;
      }
      const { field, title } = child.props;

      return {
        field,
        index,
        title: title || field
      };
    });
  };

  const extractData = ({ items }) => items.map(excelGetRecordsMethodMapper);

  const handleExcelButtonClick = async (exporter, gridChildren) => {
    if (exporter && !isFetchingExcelRows) {
      setFetchingExcelRows(true);

      try {
        const dataForExcelRows = await excelGetRecordsMethod({
          SkipCount: 0,
          MaxResultCount: 5000
        });
        exporter.save(extractData(dataForExcelRows), createColumnsInfoForExcel(gridChildren));
      } catch (e) {
        /* eslint-disable-next-line */
        console.error("Error fetching data for Excel export");
      } finally {
        setFetchingExcelRows(false);
      }
    }
  };

  return (
    <>
      <div style={excelExportWrapperStyles}>
        <ExcelExport ref={exporterRef} />
        <Button
          color="primary"
          type="button"
          style={excelExportButtonStyles}
          disabled={isFetchingExcelRows || !(excelGetRecordsMethod && gridData?.length)}
          onClick={() => handleExcelButtonClick(exporterRef.current, children)}
        >
          <span>Export to excel</span>
        </Button>
      </div>

      <S.Grid ref={gridRef} data={gridData} onDataStateChange={dataStateChange} {...gridProps} {...dataState} {...rest}>
        {selectable && (
          <GridColumn
            width="30px"
            filter="boolean"
            field="selected"
            headerSelectionValue={gridData.findIndex((dataItem) => dataItem.selected === false) === -1}
          />
        )}
        {children}
      </S.Grid>
    </>
  );
};

KendoGrid.defaultProps = defaultProps;

KendoGrid.propTypes = {
  /** Set of GridColumns (exported as KendoGrid.Column subComponent) */
  children: AirBnbPropTypes.childrenOfType(GridColumn).isRequired,
  /** Sets the data of the Grid */
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  /** Should selecting rows be enabled? */
  selectable: PropTypes.bool,
  /** Todo */
  pageable: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  /** Todo */
  sortable: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  /** Should inline data editing be enabled? */
  inlineEdit: PropTypes.bool,
  /** Todo */
  /* eslint-disable-next-line */
  dataItem: PropTypes.object,
  /** Todo */
  expandable: PropTypes.bool,
  /** Todo */
  ExpandComponent: PropTypes.elementType,
  /** Async method for getting the data for excel export */
  excelGetRecordsMethod: PropTypes.func,
  /** Method for mapping the data fetched for excel before generating the file, first argument is fetched data */
  excelGetRecordsMethodMapper: PropTypes.func,
  onRowClick: PropTypes.func,
  dataState: PropTypes.shape({
    skip: PropTypes.number,
    take: PropTypes.number
  })
};
