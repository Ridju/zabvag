import React from "react";
import FileUploadForm from "../components/FileUploadForm";
import styled from "styled-components";

const Header = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  background: black;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
`;

const Logo = styled.h1`
  padding: 1rem;
  background-color: inherit;
`;

const Container = styled.main`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  padding: 3rem;
  height: 100%;
`;

export default function Main() {
  return (
    <Container>
      <Header>
        <Logo>PDFMerger</Logo>
      </Header>
      <Content>
        <FileUploadForm />
      </Content>
    </Container>
  );
}
