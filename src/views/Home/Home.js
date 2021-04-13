import React from "react";
// import PropTypes from "prop-types";
import { useSelector } from "react-redux";

import * as S from "styles/global";

import ToDoList from "./ToDoList";

export const Home = () => {
  const { todos } = useSelector((state) => state.todos);

  console.log("todos =>", todos);

  return (
    <S.Container>
      <ToDoList todos={todos.items} />
    </S.Container>
  );
};

Home.propTypes = {};
