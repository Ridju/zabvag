import React, { useState } from "react";
import FileList from "./FileList";
import styled from "styled-components";
import { StyledButton } from "./StyledButton";
const Container = styled.div`
  border: solid 1px gray;
  background-color: white;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  width: 50%;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  background-color: white;
`;

const Label = styled.label`
  background-color: white;
  font-weight: bold;
`;

const Inputlabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding: 5px;
  border: solid 1px black;
  color: black;
  background-color: white;
  &:hover {
    cursor: pointer;
    background-color: black;
    color: white;
  }
`;

export default function FileUploadForm() {
  const [fileArray, setFileArray] = useState<File[]>();

  const swapElements = (index1: number, index2: number) => {
    if (fileArray) {
      let tmpArray = [...fileArray];
      let tmp = tmpArray[index1];
      tmpArray[index1] = tmpArray[index2];
      tmpArray[index2] = tmp;
      setFileArray(tmpArray);
    }
  };

  const handleSubmit = () => {
    let formData = new FormData();
    fileArray?.forEach((item, index) => {
      formData.append(`item${index}`, item);
    });

    fetch("http://localhost:8000/upload/merged", {
      method: "PUT",
      body: formData,
    })
      .then((response) => response.blob())
      .then((blob) => {
        var url = window.URL.createObjectURL(blob);
        var a = document.createElement("a");
        a.href = url;
        a.download = "merged.pdf";
        document.body.appendChild(a);
        a.click();
        a.remove();
      })
      .catch((err) => alert(err));
  };
  return (
    <Container>
      <Form>
        <Inputlabel htmlFor='upload-button'>Select files</Inputlabel>
        <input
          id='upload-button'
          style={{ display: "none" }}
          multiple={true}
          onChange={(e) =>
            e.currentTarget.files &&
            setFileArray(Array.from(e.currentTarget.files))
          }
          type='file'
          name='file'
        />
      </Form>
      <FileList files={fileArray} swapElements={swapElements} />
      {fileArray && (
        <StyledButton onClick={() => handleSubmit()}>Merge</StyledButton>
      )}
    </Container>
  );
}
