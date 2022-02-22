import React from "react";
import FileComponent from "./FileComponent";
import styled from "styled-components";

const List = styled.ul`
  background-color: white;
  margin: 0.5rem 0;
`;

interface fileListProp {
  files?: File[];
  swapElements: (i: number, i2: number) => void;
}

export default function FileList(props: fileListProp) {
  return (
    <List>
      {props.files &&
        Array.from(props.files!).map((item, index) => {
          return (
            <FileComponent
              file={item}
              index={index}
              arrayLength={Array.from(props.files!).length}
              swapElements={props.swapElements}
            />
          );
        })}
    </List>
  );
}
