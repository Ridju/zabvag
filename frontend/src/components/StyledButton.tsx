import styled from "styled-components";

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding: 5px;
  margin: 5px 0;
  border: solid 1px black;
  color: black;
  background-color: white;
  min-width: 50px;
  &:hover {
    cursor: pointer;
    background-color: black;
    color: white;
  }

  &:disabled {
    cursor: auto;
    background-color: white;
    border: solid 1px gray;
    color: gray;
  }
`;
