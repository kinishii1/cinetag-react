import { PolymorphicComponentProps, styled } from 'styled-components'

type PolymorphicBannerProps = PolymorphicComponentProps<object, Record<string, never>, { imgName: string }, unknown>;

const BannerContainer = styled.div<PolymorphicBannerProps>`
  background-image: ${(props) => `url(/imagens/banner-${props.imgname}.png)`}; 
  color: #fff;
  width: 100vw;
  height: 347px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`

type BannerProps = {
  img: string
}

function Banner(props: BannerProps) {
  return (
    <BannerContainer imgname={props.img}></BannerContainer>
  )
}

export default Banner