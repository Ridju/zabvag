import React, { useState } from "react";
import FileList from "./FileList";

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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
    <div>
      <form onSubmit={handleSubmit}>
        <p>
          <input
            multiple={true}
            onChange={(e) =>
              e.currentTarget.files &&
              setFileArray(Array.from(e.currentTarget.files))
            }
            type='file'
            name='file'
          />
        </p>
        <p>
          <input type='submit' value='merge' />
        </p>
      </form>
      <FileList files={fileArray} swapElements={swapElements} />
    </div>
  );
}
