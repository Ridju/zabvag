import React from "react";

interface fileCompProp {
  file: File;
  index: number;
  swapElements: (i: number, i2: number) => void;
}

export default function FileComponent(props: fileCompProp) {
  return (
    <li>
      <p>{props.file.name}</p>
      <button onClick={() => props.swapElements(props.index, props.index - 1)}>
        up
      </button>
    </li>
  );
}
