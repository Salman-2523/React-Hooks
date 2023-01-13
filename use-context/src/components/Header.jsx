import { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../contexts/ThemeContext";
const Title = styled.h1`
  text-align: center;
  font-size: 50px;
  color: ${({ color }) => color};
`;

const Header = () => {
  const theme = useContext(ThemeContext);

  return (
    <header>
      <Title color={theme.theme === "light" ? "black" : "teal"}>
        Use Context Hook
      </Title>
    </header>
  );
};

export default Header;
