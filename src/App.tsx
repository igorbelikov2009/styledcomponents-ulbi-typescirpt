import React from "react";
import Title from "./components/Title/Title";
import styled from "styled-components";
import Flex from "./components/Flex/Flex";
import Console from "./components/Console/Console";
import Button from "./components/Button/Button";

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 2rem;
  background: black;
`;

function App({ ...props }) {
  return (
    <AppWrapper>
      <Flex justify="center">
        <Title color="red"> Console cmd 2023. Igoryn 1966 </Title>
      </Flex>

      <Flex direction="column" margin="10px 0">
        <Console />

        <Button align="flex-end" color="green">
          Отправить
        </Button>
      </Flex>
    </AppWrapper>
  );
}

export default App;
