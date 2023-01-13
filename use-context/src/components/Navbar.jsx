import { useContext } from "react";
import styled from "styled-components";
import { CartContext } from "../contexts/CartContext";
import { ThemeContext } from "../contexts/ThemeContext";

const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 25px;
  background-color: ${({ bgcolor }) => bgcolor};
`;
const UL = styled.ul`
  display: flex;
  gap: 20px;
`;
const AuthContainer = styled.ul`
  display: flex;
  gap: 15px;
`;
const LI = styled.li`
  list-style: none;
`;

const Navbar = () => {
  const theme = useContext(ThemeContext);
  const cart = useContext(CartContext);

  return (
    <Container bgcolor={theme.theme === "dark" ? "teal" : "lightgray"}>
      <UL>
        <LI>Home</LI>
        <LI>About</LI>
        <LI onClick={theme.handleToggleTheme}>Toggle Theme</LI>
      </UL>
      <AuthContainer>
        <LI>Signup</LI>
        <LI>Login</LI>
        <LI>Cart:{cart.cartCount}</LI>
      </AuthContainer>
    </Container>
  );
};

export default Navbar;
