import { styled } from 'styled-components'
import { Link } from 'react-router-dom'
import logo from './logo.png'

const StyledHeader = styled.header`
  align-items: center;
  background-color: #282c34;
  color: white;
  display: flex;
  font-size: 18px;
  justify-content: space-between;
  padding: 20px 80px;

  a {
    color: white;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  nav {
    a {
      margin-left: 20px;
    }
  }

  img {
    height: 50px;
  }

`

function Header() {
  return (
    <StyledHeader>
      <Link to='/'>
      <img src={logo} alt="" />
      </Link>
      <nav>
        <Link to='./'>Home</Link>
        <Link to='./favorites'>Favorites</Link>
      </nav>
    </StyledHeader>
  )
}

export default Header