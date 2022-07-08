import { Container, Content } from "./styles";
import logo from '../../assets/logo.png'
import { memo } from "react";

export function HeaderComponent(){
  return (
    <Container>
      <Content>
        <img src={logo} alt="todoLogo" />
      </Content>
    </Container>
  )
}

export const Header = memo(HeaderComponent)