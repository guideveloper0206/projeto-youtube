import styled from 'styled-components'

interface ContainerProps {
    openMenu:boolean
}

export const Container = styled.div<ContainerProps>`
    width:  ${({openMenu}) => openMenu? '260px': '100px'};
    height: calc(100vh - 55px);
    box-sizing: border-box;
    padding: 10px 10px 10px 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
    overflow-y: auto;
    border-right: 2px solid #d3d3d3;
    position: sticky;
    top: 55px;
`

export const MenuItem = styled.div<{openMenu: boolean}>`
    width: 98%;
    min-height: ${({openMenu}) => openMenu? '45px': '60px'};
    border-radius: 10px;
    cursor: pointer;
    padding: 2px 20px;
    display: flex;
    flex-direction: ${({openMenu}) => openMenu? 'row': 'column'};
    align-items: center;
    justify-content: ${({openMenu}) => openMenu? 'none': 'center'};
    list-style: none;

    span{
        font-weight: ${({openMenu}) => openMenu? '600': '400'};
        margin-left: ${({openMenu}) => openMenu? '20px': 'none'};
        font-size: ${({openMenu}) => openMenu? '15px': '12px'};
        color: #000000;
    }

    :hover {
        background-color: #f2f2f2;
    }

    .assistir{
        display: ${({openMenu}) => openMenu? '': 'none'};
    }
`

export const ButtonIcon = styled.img`
    width: 25px;
`;

export const MenuSuperior = styled.div<{openMenu: boolean}>`
    border-bottom: 2px solid #d3d3d3;
    margin-bottom: ${({openMenu}) => openMenu? '15px': '20px'};
    display: ${({openMenu}) => openMenu? 'flex': 'none'};
    flex-direction: column;
    list-style: none;
`

export const MenuCentral = styled.div<{openMenu: boolean}>`
    width: 98%;
    min-height: ${({openMenu}) => openMenu? '45px': '70px'};
    cursor: pointer;
    padding: 2px 20px;
    box-sizing: border-box;
    display: ${({openMenu}) => openMenu? 'flex': 'none'};
    flex-direction: column;
    align-items: center;
    justify-content: ${({openMenu}) => openMenu? 'none': 'center'};
    border-bottom: 2px solid #d3d3d3;
    margin-left: 30px;

    .clock{
        margin-bottom: 15px;
    }
`

export const MenuInferior = styled.div<{openMenu: boolean}>`
    width: 98%;
    min-height: ${({openMenu}) => openMenu? '45px': '70px'};
    cursor: pointer;
    padding: 2px 20px;
    box-sizing: border-box;
    display: ${({openMenu}) => openMenu? 'flex': 'none'};
    flex-direction: column;
    align-items: center;
    justify-content: ${({openMenu}) => openMenu? 'none': 'center'};
    border-bottom: 2px solid #d3d3d3;
    margin-left: 30px;

    .config {
        margin-top: 15px;
    }
`
export const MenuOculto = styled.div<{openMenu: boolean}>`
    width: 98%;
    min-height: ${({openMenu}) => openMenu? '45px': '70px'};
    cursor: pointer;
    padding: 2px 20px;
    box-sizing: border-box;
    display: ${({openMenu}) => openMenu? 'none': 'flex'};
    flex-direction: column;
    align-items: center;
    justify-content: ${({openMenu}) => openMenu? 'none': 'center'};
`
