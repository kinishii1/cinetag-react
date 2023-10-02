import { useParams } from "react-router-dom"
import Banner from "../../components/Banner"
import Title from "../../components/Title"
import data from "../../../json/db.json"
import { useState } from "react"
import { styled } from "styled-components"

const StyledCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 40px 0;
  gap: 20px;

`;

function Player() {
  const { id } = useParams<{ id: string }>();
  const [movie] = useState(() => data.find((movie) => movie.id === Number(id)));

  return (
    <>
      <Banner img="player" />
      <Title>Player</Title>
      {movie ? (
        <StyledCardsContainer>
          <h1>{movie.titulo}</h1>
          <iframe
            width="1200"
            height="676"
            src={movie.link}
            title="YouTube video player"
            allowFullScreen
          ></iframe>
        </StyledCardsContainer>
      ) : null}
    </>
  );
}

export default Player