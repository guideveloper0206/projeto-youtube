import { Container, LibraryContainer } from "./style";
import { ContextOpenMenu } from "../../contexts/OpenMenu";
import Header from "../../components/header";
import Menu from "../../components/menu";
import { useContext } from "react";

function Library() {

  const { openMenu } = useContext(ContextOpenMenu);

  return (
    <LibraryContainer>
      <Header />
      <Menu />
      <Container openMenu={openMenu}>
        <h1>Página em construção - Library</h1>
      </Container>
    </LibraryContainer>
  )
}

export default Library;