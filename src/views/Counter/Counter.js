import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Button, Input } from "components";
import * as GS from "styles/global";

import { operations as counterOperations } from "state/ducks/counter";

import * as S from "./Counter.styled";

export const Counter = () => {
  const [valueToIncrement, setValueToIncrement] = useState(0);

  const dispatch = useDispatch();
  const { count, clickedTimes } = useSelector((state) => state.counter);

  const handleIncrement = () => dispatch(counterOperations.incrementValue());
  const handleDecrement = () => dispatch(counterOperations.decrementValue());
  const handleIncrementByValue = () => {
    dispatch(counterOperations.incrementByValue(valueToIncrement));
  };

  const handleInputChange = (evChange) => {
    setValueToIncrement(Number(evChange.target.value));
  };

  return (
    <GS.Container>
      <GS.Heading>Counter</GS.Heading>
      <S.CounterDetails>
        <p>
          Current value: <span>{count}</span>
        </p>
      </S.CounterDetails>

      <S.CounterActions>
        <S.CounterButtonActions>
          <S.CounterButton onClick={handleIncrement}>Increment</S.CounterButton>
          <S.CounterButton onClick={handleDecrement} variant="secondary">
            Decrement
          </S.CounterButton>
        </S.CounterButtonActions>

        <S.CounterCustomIncrement>
          <Input type="number" placeholder="Give a number" onChange={handleInputChange} />
          <Button onClick={handleIncrementByValue} disabled={!valueToIncrement || valueToIncrement === 0}>
            Increment by value
          </Button>
        </S.CounterCustomIncrement>
      </S.CounterActions>

      <S.CounterDetails>
        <p>You clicked {clickedTimes} times.</p>
      </S.CounterDetails>
    </GS.Container>
  );
};

Counter.propTypes = {};
