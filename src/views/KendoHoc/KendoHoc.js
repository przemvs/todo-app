import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { KendoGrid, ActionCell, Button } from "components";
import * as GS from "styles/global";

import { operations as toDoOperations } from "state/ducks/todos";

const translateBoolProp = (bool) => (bool ? "Tak" : "Nie");

const excelGetRecordsMethodMapper = (tableData) => {
  const excelExportData = { ...tableData };
  excelExportData.isRemoved = translateBoolProp(excelExportData.isRemoved);

  return excelExportData;
};

export const KendoHoc = () => {
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state.todos);

  const translateBoolCell = ({ dataItem, field }) => {
    const fieldValue = dataItem[field];
    const isToDoRemoved = translateBoolProp(fieldValue);
    return <td>{isToDoRemoved}</td>;
  };

  const handleAddRow = () => {
    dispatch(toDoOperations.addEmptyRow());
  };

  const handleCancelEdit = (dataItem) => {
    console.log("dataItem =>", dataItem);
  };

  const handleAddToDo = (dataItem) => {
    console.log("dataItem =>", { ...dataItem, inEdit: undefined });
    dispatch(toDoOperations.addToDo({ ...dataItem, inEdit: undefined }));
  };

  const handleDeleteToDo = (dataItem) => {
    dispatch(toDoOperations.deleteToDo(dataItem.id));
  };

  const CancelDeleteCell = ({ dataItem }) => {
    if (dataItem.inEdit) {
      return ActionCell({ dataItem, handleClick: handleCancelEdit, type: "Anuluj" });
    }

    return ActionCell({ dataItem, handleClick: handleDeleteToDo, type: "Usuń" });
  };

  const SaveCell = ({ dataItem }) => {
    if (dataItem.inEdit) {
      return ActionCell({ dataItem, handleClick: handleAddToDo, type: "Zapisz" });
    }

    return <td />;
  };

  return (
    <GS.Container>
      <Button onClick={handleAddRow}>Add row</Button>
      <KendoGrid
        data={todos.items.filter((item) => !item.isRemoved)}
        total={todos.totalCount}
        excelGetRecordsMethod={async () => ({ items: [...todos.items] })}
        excelGetRecordsMethodMapper={excelGetRecordsMethodMapper}
        inlineEdit
      >
        <KendoGrid.Column field="id" title="Id" editable={false} />
        <KendoGrid.Column field="text" title="Text" />
        <KendoGrid.Column field="addedDate" title="Data dodania" editable={false} />
        <KendoGrid.Column cell={translateBoolCell} field="isRemoved" title="Usunięty" filter="boolean" />
        <KendoGrid.Column cell={SaveCell} />
        <KendoGrid.Column cell={CancelDeleteCell} />
      </KendoGrid>
    </GS.Container>
  );
};

KendoHoc.propTypes = {};
