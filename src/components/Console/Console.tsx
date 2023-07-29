import React, { FC, useState } from "react";
import { ConsoleProps, StyledConsole } from "./Console.styled";
import Flex from "../Flex/Flex";
import Line from "../Line/Line";

const Console: FC<ConsoleProps> = ({ color, ...props }) => {
  const [lines, setLines] = useState(["C/users/IGORYN_1966>"]);

  const onKeyPress = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    // Нажатием на 'Enter' создаём новую строку.
    // Предварительно проверяем, что нажатая кнопка - 'Enter'
    if (event.key === "Enter") {
      setLines([...lines, "C/users/IGORYN_1966>"]);
      console.log(event.key);
    }
  };

  return (
    <Flex>
      <Flex direction="column" margin="0 10px">
        {lines.map((line, index) => (
          <Line color={color} key={index}>
            {line}
          </Line>
        ))}

        <StyledConsole onKeyDown={onKeyPress} {...props} />
      </Flex>
    </Flex>
  );
};

export default Console;
