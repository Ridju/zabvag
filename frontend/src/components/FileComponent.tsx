import React from "react";
import styled from "styled-components";
import { StyledButton } from "./StyledButton";

const FileItem = styled.li`
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: solid 1px black;
  margin: 0.2rem 0;
  padding: 0.75rem 0.5rem;
`;

const Label = styled.p`
  background-color: white;
`;

interface fileCompProp {
  file: File;
  index: number;
  arrayLength: number;
  swapElements: (i: number, i2: number) => void;
}

const Group = styled.div`
  display: flex;
  background-color: inherit;
`;

export default function FileComponent(props: fileCompProp) {
  return (
    <FileItem>
      <Label>{props.file.name}</Label>
      <Group>
        <StyledButton
          disabled={props.index <= 0}
          onClick={() => props.swapElements(props.index, props.index - 1)}>
          up
        </StyledButton>
        <StyledButton
          disabled={props.arrayLength - 1 <= props.index}
          onClick={() => props.swapElements(props.index, props.index + 1)}>
          down
        </StyledButton>
      </Group>
    </FileItem>
  );
}
