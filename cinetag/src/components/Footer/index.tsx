import {styled} from 'styled-components'

const StyledFooter = styled.footer`
  width: 100%;
  background-color: #282c34;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  font-size: 14px;
`
function Footer() {
  return (
    <StyledFooter>
      <p>
        Developed by Kin Ishii
      </p>
      </StyledFooter>
  )
}

export default Footer