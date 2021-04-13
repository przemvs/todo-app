import React from "react";
import PropTypes from "prop-types";

import { helpers } from "utility";

import * as S from "./ToDoList.styled";

const propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      text: PropTypes.string,
      addedDate: PropTypes.instanceOf(Date),
      isRemoved: PropTypes.bool
    })
  )
};

const defaultProps = {
  todos: []
};

const renderTableHeading = () => {
  return (
    <S.Tr>
      <S.Td>ID</S.Td>
      <S.Td>Opis zadania</S.Td>
      <S.Td>Data doadnia</S.Td>
      <S.Td>Usuń</S.Td>
    </S.Tr>
  );
};

export const ToDoList = ({ todos } = defaultProps) => {
  const handleRemoveTask = (toDoId) => {
    console.log("Remove task with id =>", toDoId);
  };

  const renderToDoTask = (toDoTask) => {
    const { id } = toDoTask;

    return (
      <S.Tr key={id}>
        <S.Td>{id}</S.Td>
        <S.Td>{toDoTask.text}</S.Td>
        <S.Td>{helpers.formatDate(toDoTask.addedDate, "DD-MM-YYYY, HH:mm")}</S.Td>
        <S.Td>
          <button type="button" onClick={() => handleRemoveTask(toDoTask.id)}>
            Usuń
          </button>
        </S.Td>
      </S.Tr>
    );
  };

  return (
    <S.Wrapper>
      {todos.length ? (
        <S.Table>
          <S.Thead>{renderTableHeading()}</S.Thead>
          <S.Tbody>{todos.map(renderToDoTask)}</S.Tbody>
        </S.Table>
      ) : (
        <div>brak zadań</div>
      )}
    </S.Wrapper>
  );
};

ToDoList.defaultProps = defaultProps;
ToDoList.propTypes = propTypes;
