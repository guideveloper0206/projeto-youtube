import {useContext, useState, useRef} from 'react'
import {
    LogoContainer,
    ButtonContainer,
    ButtonIcon,
    SearchContainer,
    SearchInputContainer,
    SearchInput,
    SearchButton,
    HeaderButton,
    DropDownMenu,
    UserInfoContainer,
    UserName,
    DropDownMenuContent,
    LogOutButton,
    LoginContainer,
    LoginButton,
    LoginIcon,
    Span,
    Container
} from "./style";
import MenuBar from '../../assets/menu-logo.png';
import LogoYt from '../../assets/logo-yt.png';
import LogoSearch from '../../assets/lupa.png';
import LogoMic from '../../assets/mic.png';
import LogoSino from '../../assets/sino.png';
import LogoCam from '../../assets/video.png'
import logout from '../../assets/logout.png'
import yourVideos from '../../assets/yourVideos.png'
import LoginIconPng from '../../assets/user.png'
import { ContextOpenMenu } from "../../contexts/OpenMenu";
import { UserContext } from '../../contexts/userContext';
import { useNavigate } from 'react-router-dom';
import { useSearchContext } from '../../contexts/searchContext';

function Header() {
    const { login, logOut, user, setOpenDropDownMenu, openDropDownMenu } = useContext(UserContext);
    const {setOpenMenu, openMenu} = useContext(ContextOpenMenu);
    const handleDropDownMenu = () => {
    setOpenDropDownMenu(!openDropDownMenu)
  }
    const navigate = useNavigate();

    const [clearButton, setClearButton] = useState(false)

    const [openSearch, setOpenSearch] = useState(false)

    const inputRef = useRef<HTMLInputElement>(null);

    const {setSearch} = useSearchContext()

    const Search = () => {
        setOpenSearch(true)
        if(inputRef.current) {
          inputRef.current.focus()
        }
      }

    const [inputValue, setInputValue] = useState('')

    function handleInput(inputValue: string) {
    setInputValue(inputValue)
    if(inputValue === '') {
      setClearButton(false)
    } else (
      setClearButton(true)
    )
    }

    const goOut = () => {
        logOut()
        handleDropDownMenu()
        navigate('/')
      }
    
      const goYourVideos = () => {
        navigate('/yourvideos')
        handleDropDownMenu()
      }

    return (
                <Container>
                    <LogoContainer>
                        <ButtonContainer onClick={()=> setOpenMenu(!openMenu)} margin='0 10px 0 0'>
                            <ButtonIcon alt="Menu" src={MenuBar} />
                        </ButtonContainer>
                        <img
                            style={{ cursor: 'pointer', width: '100px' }}
                            alt=""
                            src={LogoYt} />
                    </LogoContainer>

                    <SearchContainer>
                        <SearchInputContainer>
                            <SearchInput 
                                ref={inputRef}
                                value={inputValue} 
                                placeholder="Pesquisar" 
                                onChange={(e:any) => {
                                handleInput(e.target.value)
                                }}
                                onKeyDown={(e:any) => {
                                if (e.key === "Enter") {
                                    setSearch(inputValue)
                                    navigate('/search')
                                    setOpenSearch(false)
                                }
                                }}
                            />
                        </SearchInputContainer>
                        <SearchButton
                                onClick={() => {
                                    if (inputValue.trim() === '') {
                                alert('Digite alguma palavra chave antes de tentar pesquisar')
                                return;
                                }
                                setSearch(inputValue) 
                                navigate('/search')
                            }}
                        >
                            <ButtonIcon alt="" src={LogoSearch} />
                        </SearchButton>
                        <ButtonContainer margin='0 0 0 10px'>
                            <ButtonIcon alt="" src={LogoMic}/>
                        </ButtonContainer>
                    </SearchContainer>
                    {login?
                        <HeaderButton>
                            <ButtonContainer onClick={() => navigate('/yourvideos')} >
                                <ButtonIcon alt="ícone vídeo" src={LogoCam} />
                            </ButtonContainer>

                            <ButtonContainer margin='0 0 0 10px' >
                                <ButtonIcon alt="ícone notificação" src={LogoSino}/>
                            </ButtonContainer>

                            <ButtonContainer margin='0 0 0 10px' onClick={handleDropDownMenu} >
                                {user && user.nome ? user.nome.charAt(0).toUpperCase() : ''}
                            </ButtonContainer>
                            
                            <DropDownMenu openDropDownMenu={openDropDownMenu}>

                                <UserInfoContainer>
                                    <ButtonContainer 
                                    margin='0 0 0 10px' 
                                    onClick={handleDropDownMenu} 
                                    style={{backgroundColor: '#f2f2f2'}}
                                    >
                                        {user && user.nome ? user.nome.charAt(0).toUpperCase() : ''}
                                    </ButtonContainer>
                                    <UserName>{user && user.nome ? user.nome : user.nome}</UserName>
                                </UserInfoContainer>

                                <DropDownMenuContent onClick={goOut}>
                                    <ButtonIcon alt="ícone logout" src={logout} />
                                    <LogOutButton>
                                        Sair
                                    </LogOutButton>
                                </DropDownMenuContent>

                                <DropDownMenuContent onClick={goYourVideos}>
                                    <ButtonIcon alt="ícone yourVideos" src={yourVideos} />
                                    <LogOutButton>
                                        Seus vídeos
                                    </LogOutButton>
                                </DropDownMenuContent>

                                </DropDownMenu>

                        </HeaderButton>
                        :
                        <LoginContainer onClick={() => navigate('/login')}>
                            <LoginButton>
                            <LoginIcon alt="Login Icon" src={LoginIconPng} />
                                <Span>Fazer login</Span>
                            </LoginButton>
                        </LoginContainer>
                    }                    
                                        
                </Container>
            )
}
    


export default Header;