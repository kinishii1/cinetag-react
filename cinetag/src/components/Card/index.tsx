import { useContext } from "react";
import { styled } from "styled-components";
import { FavoriteContext } from "../../context/Favorite";
import { Link } from "react-router-dom";

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  height: 500px;
  margin: 10px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  background-color: white;
  overflow: hidden;

  img {
    width: 100%;
    height: 425px;
    object-fit: cover;
  }

  h2 {
    font-size: 1.2rem;
    margin: 10px 0;
  }

  img:last-child {
    object-fit: contain;
    width: 20px;
    height: 20px;
    align-self: flex-start;
    margin-left: 10px;
  }
  
`;

type CardProps = {
  src: string;
  title: string;
  id: string;
};

function Card(props: CardProps) {
  const { addFavorite, removeFavorite, favorites } =
    useContext(FavoriteContext);
  const isFavorite = favorites.includes(props.id);
  const icon = !isFavorite
    ? "/imagens/favorite_outline.png"
    : "/imagens/favorite.png";

  return (
    
      <StyledCard>   
        <img src={props.src} />
       
         <Link to={`/player/${props.id}`}>
        <h2>{props.title}</h2>
        </Link>
        <img
          src={icon}
          alt=""
          onClick={() =>
            favorites.includes(props.id)
              ? removeFavorite(props.id)
              : addFavorite(props.id)
          }
        />
      </StyledCard>
  );
}

export default Card;
