import { styled } from "styled-components";

const StyledTitle = styled.div`
  display: flex;
  width: 100%;
  height: 103px;
  justify-content: center;
  align-items: center;
  background-color: #282c34;
  color: white;
  font-size: 40px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

type TitleProps = {
  children: string;
};

function Title(props : TitleProps) {
  return <StyledTitle>{props.children}</StyledTitle>;
}

export default Title;
