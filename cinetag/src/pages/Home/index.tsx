import Banner from "../../components/Banner";
import Card from "../../components/Card";
import Title from "../../components/Title";
import data from "../../../json/db.json";
import { styled } from "styled-components";

const StyledCardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 20px 0;
  gap: 20px;
`;

function Home() {
  return (
    <>
      <Banner img="home" />
      <Title>Home</Title>
      <StyledCardsContainer>
        {data.map((item) => {
          return (
            <Card
              id={item.id.toString()}
              src={item.capa}
              title={item.titulo}
              key={item.id}
            />
          );
        })}
      </StyledCardsContainer>
    </>
  );
}

export default Home;
