import { useContext } from "react";
import styled from "styled-components";
import { CartContext } from "../contexts/CartContext";

const Container = styled.div`
 display: flex;
 flex-direction: column;
`

const Button = styled.button`
  padding: 5px 10px;
  width: 400px;
  border: none;
  background-color:navy;
  color:white;
  
`;

const Card = () => {
    const cart = useContext(CartContext)
    
  return (
    <Container>
      <img
        src="https://images.unsplash.com/photo-1607522370275-f14206abe5d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2hvZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        alt="card image"
        height={"400px"}
        width="400px"
      />
      <Button onClick = {cart.handleCartCount}>Add To Cart</Button>
    </Container>
  );
};

export default Card;
