import { Link } from "react-router-dom";
import Banner from "../../components/Banner";
import Title from "../../components/Title";
import { styled } from "styled-components";	

const StyledCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 40px 0;
  gap: 20px;

  h2 {
    font-size: 1.2rem;
    margin: 10px 0;
  }

  a {
    font-size: 1rem;
    margin: 10px 0;
    color: #000;
    text-decoration: none;
    width: 200px;
    text-align: center;
    background-color: #f5c518;
    padding: 10px;
    border-radius: 10px;
  }
`;

function index() {
  return (
    <>
      <Banner img="notfound" />
      <Title>Page not found</Title>
      <StyledCardsContainer >
        <h2>Retornar a pagina inicial</h2>
        <Link to='/'> Voltar </Link>
      </StyledCardsContainer>
    </>
  );
}

export default index;
