import styled, { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
  body {
    color: ${props => props.theme.mainColor};
    background-color: ${props => props.theme.backgroundColor};
  }
`;

const Title = styled.h1`
  text-align: center;
  color: darkblue;
`;
const Description = styled.h4`
  text-align: center;
  color: #26abff;
`;
const ShopImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 550px;
  height: 350px;

`;
const ListWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
`;
const PetWrapper = styled.div`
  margin: 100px;
  
  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 300px;
    height: 300px;
  }
  p {
    text-align: center;
    &.cookie-price {
      color: ${props => props.theme.darkRed};
    }
  }
`;

export { Title, Description, ShopImage, ListWrapper, PetWrapper, GlobalStyle };

