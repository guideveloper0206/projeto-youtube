import { Container, SubscribeContainer } from "./style";
import { ContextOpenMenu } from "../../contexts/OpenMenu";
import Header from "../../components/header";
import Menu from "../../components/header"
import { useContext } from "react";

function Inscricoes() {

  const { openMenu } = useContext(ContextOpenMenu);

  return (
    <SubscribeContainer>
      <Header />
      <Menu />
      <Container openMenu={openMenu}>
        <h1>Página em construção - Subscribe</h1>
      </Container>
    </SubscribeContainer>
  )
}

export default Inscricoes;