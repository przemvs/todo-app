import styled from "styled-components";
import { Button } from "components";

export const CounterDetails = styled.div`
  text-align: center;

  p {
    font-size: 22px;
  }
`;

export const CounterActions = styled.div``;

export const CounterButtonActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
`;

export const CounterButton = styled(Button)`
  margin: 0 10px;
`;

export const CounterCustomIncrement = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  button {
    margin-top: 10px;
  }
`;
