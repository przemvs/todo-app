import React from "react";
import { useSelector } from "react-redux";

import { KendoGrid } from "components";
import * as GS from "styles/global";

const translateBoolProp = (bool) => (bool ? "Tak" : "Nie");

const excelGetRecordsMethodMapper = (tableData) => {
  const excelExportData = { ...tableData };
  excelExportData.isRemoved = translateBoolProp(excelExportData.isRemoved);

  return excelExportData;
};

export const KendoView = () => {
  const { todos } = useSelector((state) => state.todos);

  const translateBoolCell = ({ dataItem, field }) => {
    const fieldValue = dataItem[field];
    const isToDoRemoved = translateBoolProp(fieldValue);
    return <td>{isToDoRemoved}</td>;
  };

  return (
    <GS.Container>
      <KendoGrid
        data={todos.items}
        total={todos.totalCount}
        excelGetRecordsMethod={async () => ({ items: [...todos.items] })}
        excelGetRecordsMethodMapper={excelGetRecordsMethodMapper}
      >
        <KendoGrid.Column field="id" title="Id" />
        <KendoGrid.Column field="text" title="Text" />
        <KendoGrid.Column field="addedDate" title="Data dodania" />
        <KendoGrid.Column cell={translateBoolCell} field="isRemoved" title="Usunięty" filter="boolean" />
      </KendoGrid>
    </GS.Container>
  );
};

KendoView.propTypes = {};
