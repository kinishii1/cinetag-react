import { useContext } from "react";
import Banner from "../../components/Banner";
import Card from "../../components/Card";
import Title from "../../components/Title";
import { styled } from "styled-components";
import { FavoriteContext } from "../../context/Favorite";
import data from "../../../json/db.json";
import { Link } from "react-router-dom";

const StyledCardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 20px 0;
  gap: 20px;
`;

const EmptyFavorite = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 500px;
  margin: 10px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  background-color: white;
  overflow: hidden;

  h2 {
    font-size: 2rem;
    margin: 10px 0;
  }

  p {
    font-size: 1rem;
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

function Favorites() {
  const { favorites } = useContext(FavoriteContext);
  return (
    <>
      <Banner img="favoritos" />
      <Title>Favoritos</Title>
      <StyledCardsContainer>
        {favorites.length === 0 && (
          <EmptyFavorite>
            <h2>Você ainda não possui nenhum favorito</h2>
            <p>
              Para adicionar um favorito, clique no ícone de coração nos filmes
            </p>
            <Link to="/"> Voltar para a Home</Link>
          </EmptyFavorite>
        )}



        {favorites.map((item) => {
          const filme = data.find((filme) => filme.id.toString() === item);
          if (filme) {
            return (
              <Card
                id={filme.id.toString()}
                src={filme.capa}
                title={filme.titulo}
                key={filme.id}
              />
            );
          } else {
            return;
          }
        })}

      </StyledCardsContainer>
    </>
  );
}

export default Favorites;
