import React from "react";
import FileComponent from "./FileComponent";

interface fileListProp {
  files?: File[];
  swapElements: (i: number, i2: number) => void;
}

export default function FileList(props: fileListProp) {
  return (
    <ul>
      {props.files &&
        Array.from(props.files!).map((item, index) => {
          return (
            <FileComponent
              file={item}
              index={index}
              swapElements={props.swapElements}
            />
          );
        })}
    </ul>
  );
}
