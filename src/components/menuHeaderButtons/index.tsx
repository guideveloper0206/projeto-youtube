import { Buttons, ButtonsList, ContainerButtons } from "./styles";


function MenuHeaderButtons(){
    return (
        <ContainerButtons>
            <ButtonsList>
                <Buttons>Tudo</Buttons>
                <Buttons>Música</Buttons>
                <Buttons>Filme</Buttons>
                <Buttons>Jogos</Buttons>
                <Buttons>Entretenimento</Buttons>
                <Buttons>Ao Vivo</Buttons>
                <Buttons>Funk</Buttons>
                <Buttons>Trap</Buttons>
                <Buttons>Sertanejo</Buttons>
                <Buttons>MPB</Buttons>
            </ButtonsList>
        </ContainerButtons>
    )
}

export default MenuHeaderButtons;