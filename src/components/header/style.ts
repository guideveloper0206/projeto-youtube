import styled from 'styled-components';

interface ContainerProps {
    openDropDownMenu: boolean
}

export const Container = styled.header`
    width: 100%;
    height: 55px;
    background-color:  #fff;
    padding: 0 16px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #d3d3d3;
    position: sticky;
    top: 0;
`;



export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const ButtonContainer = styled.div<{ margin? : string }>`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin: ${({ margin })=> margin? margin : 0};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    
    .profile{
        color: #000000;
        background-color: #f2f2f2;
    }

    :hover {
        background-color: #f2f2f2;
    }
`;

export const ButtonIcon = styled.img`
    width: 20px;
`;

export const SearchContainer = styled.div`
    display: flex;
`;

export const SearchInputContainer = styled.div`
     width: 450px;
     height: 35px;
     border: 1px solid #d3d3d3;
     border-radius: 40px 0 0 40px;
     display: flex;
     align-items: center;
     padding: 0 16px;

`;

export const SearchInput = styled.input`
     width: 100%;
     height: 25px;
     outline: none;
     border: none;
`;

export const SearchButton = styled.div`
border-radius: 0 40px 40px 0;
height: 35px;
width: 70px;
background-color: #f8f8f8;
border: 1px solid #d3d3d3;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer
`

export const HeaderButton = styled.div`
    width: 200px;
    display: flex;
`

export const DropDownMenu = styled.div<ContainerProps>`
  width: 200px;
  background-color: ${({theme}) => theme.colors.secondary};
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  padding: 10 0px;
  box-sizing: border-box;
  box-shadow: 0px 5px 10px 5px rgba(0,0,0,0.1);
  position: absolute;
  top: 8px;
  right: ${({openDropDownMenu}) => openDropDownMenu ? '110px' : '-200px'};
  transition: 0.5s;
`

export const UserInfoContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  column-gap: 10px;
`;
export const UserName = styled.span`
  font-size: 1.1rem;
  font-weight: 400;
`;

export const DropDownMenuContent = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  column-gap: 10px;
  align-items: center;
  padding: 0 10px;
  box-sizing: border-box;
  cursor: pointer;

  &:hover {
    background-color: ${({theme}) => theme.colors.bgColor};
    cursor: pointer;
  }
`

export const LogOutButton = styled.button`
  border: none;
  outline: none;
  font-size: 0.9rem;
  font-weight: 300;
  background-color: inherit;
`

export const LoginContainer = styled.div`
  width: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 0 7px;
  cursor: pointer;
`;

export const LoginButton = styled.div`
  width: 100%;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 10px;
  border: 1px solid ${({theme}) => theme.colors.borderColor};
  border-radius: 20px;

  &:hover{
    background-color: aliceblue;
  }
`;

export const Span = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: blue;
  opacity: 0.9;
`;

export const LoginIcon = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 50%;
`;

