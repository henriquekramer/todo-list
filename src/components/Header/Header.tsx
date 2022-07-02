import { Container, Content } from "./styles";
import logo from '../../assets/logo.png'

export function Header(){
  return (
    <Container>
      <Content>
        <img src={logo} alt="todoLogo" />
      </Content>
    </Container>
  )
}