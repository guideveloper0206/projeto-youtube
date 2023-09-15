import { useContext } from 'react';
import { ContextOpenMenu } from "../../contexts/OpenMenu";
import { Container, MenuItem, ButtonIcon, MenuSuperior, MenuCentral, MenuInferior, MenuOculto  } from "./styles";
import LogoCasinha from '../../assets/casinha.png'
import LogoShorts from '../../assets/Shorts.png'
import LogoInscricoes from '../../assets/subscribe.png'
import LogoBiblioteca from '../../assets/library.png'
import LogoHistory from '../../assets/history.png'
import LogoAssistir from '../../assets/clock.png'
import LogoSettings from '../../assets/setting.png'
import LogoDenuncia from '../../assets/report.png'
import LogoAjuda from '../../assets/question.png'
import LogoFeedback from '../../assets/feedback.png'
import { Link } from 'react-router-dom';

const items = [0]

function Menu(){
    const {openMenu} = useContext(ContextOpenMenu)

    return (
        <Container openMenu={openMenu}>
            <MenuSuperior openMenu={openMenu}>
                {items.map(()=> ( 
                        <MenuItem openMenu={openMenu}>
                            <Link style={{ textDecoration: 'none', listStyle: 'none' }} to='/'>
                                <ButtonIcon alt="Menu" src={LogoCasinha} />
                                <span>Início</span>
                            </Link>
                        </MenuItem>
                ))}
                {items.map(()=> ( 
                    <MenuItem openMenu={openMenu}>
                        <Link style={{ textDecoration: 'none', listStyle: 'none' }} to='/shorts'>
                            <ButtonIcon alt="Menu" src={LogoShorts} />
                            <span>Shorts</span>
                        </Link>
                    </MenuItem>
                ))}
                {items.map(()=> ( 
                    <MenuItem openMenu={openMenu}>
                        <Link style={{ textDecoration: 'none', listStyle: 'none' }} to='/inscricoes'>
                            <ButtonIcon alt="Menu" src={LogoInscricoes} />
                            <span>  Inscrições </span>
                        </Link>
                    </MenuItem>
                ))}
            </MenuSuperior>
            <MenuCentral openMenu={openMenu}>
                {items.map(()=> ( 
                    <MenuItem openMenu={openMenu}>
                        <Link style={{ textDecoration: 'none' }} to='/biblioteca'>
                            <ButtonIcon alt="Menu" src={LogoBiblioteca} />
                            <span>Biblioteca</span>
                        </Link>
                    </MenuItem>
                ))}
                {items.map(()=> ( 
                    <MenuItem openMenu={openMenu}>
                        <Link style={{ textDecoration: 'none' }} to='/historico'>
                            <ButtonIcon alt="Menu" src={LogoHistory} />
                            <span>Histórico</span>
                        </Link>
                    </MenuItem>
                ))}
                {items.map(()=> ( 
                    <MenuItem className='clock' openMenu={openMenu}>
                        <Link style={{ textDecoration: 'none' }} to='/assitir'>
                            <ButtonIcon className='icon-assistir' alt="Menu" src={LogoAssistir} />
                            <span className='assistir' >Assistir mais...</span>
                        </Link>
                    </MenuItem>
                ))}
            </MenuCentral>
            <MenuInferior openMenu={openMenu}>
                {items.map(()=> ( 
                    <MenuItem className='config' openMenu={openMenu}>
                        <Link style={{ textDecoration: 'none' }} to='/config'>
                            <ButtonIcon style={{marginTop:''}} alt="Menu" src={LogoSettings} />
                            <span>Configurações</span>
                        </Link>
                    </MenuItem>
                ))}
                {items.map(()=> ( 
                    <MenuItem openMenu={openMenu}>
                        <Link style={{ textDecoration: 'none' }} to='/denuncias'>
                            <ButtonIcon alt="Menu" src={LogoDenuncia} />
                            <span>Denúncias</span>
                        </Link>
                    </MenuItem>
                ))}
                {items.map(()=> ( 
                    <MenuItem openMenu={openMenu}>
                        <Link style={{ textDecoration: 'none' }} to='/ajuda'>
                            <ButtonIcon alt="Menu" src={LogoAjuda} />
                            <span>Ajuda</span>
                        </Link>
                    </MenuItem>
                ))}
                {items.map(()=> ( 
                    <MenuItem openMenu={openMenu}>
                        <Link style={{ textDecoration: 'none' }} to='/feedbacks'>
                            <ButtonIcon alt="Menu" src={LogoFeedback} />
                            <span>Feedbacks</span>
                        </Link>
                    </MenuItem>
                ))}
            </MenuInferior>
            <MenuOculto openMenu={openMenu}>
                {items.map(()=> ( 
                    <MenuItem openMenu={openMenu}>
                        <Link style={{ textDecoration: 'none' }} to='/'>
                            <ButtonIcon alt="Menu" src={LogoCasinha} />
                            <span>Início</span>
                        </Link>
                    </MenuItem>
                ))}
                {items.map(()=> ( 
                    <MenuItem openMenu={openMenu}>
                        <Link style={{ textDecoration: 'none' }} to='/shorts'>
                            <ButtonIcon alt="Menu" src={LogoShorts} />
                            <span>Shorts</span>
                        </Link>
                    </MenuItem>
                ))}
                {items.map(()=> ( 
                    <MenuItem openMenu={openMenu}>
                        <Link style={{ textDecoration: 'none' }} to='/inscricoes'>
                            <ButtonIcon alt="Menu" src={LogoInscricoes} />
                        </Link>
                        <Link style={{ textDecoration: 'none' }} to='/inscricoes'>
                            <span>Inscrições</span>
                        </Link>
                    </MenuItem>
                ))}
                {items.map(()=> ( 
                    <MenuItem openMenu={openMenu}>
                        <Link style={{ textDecoration: 'none' }} to='/biblioteca'>
                            <ButtonIcon alt="Menu" src={LogoBiblioteca} />
                        </Link>
                        <Link style={{ textDecoration: 'none' }} to='/biblioteca'>
                            <span>Biblioteca</span>
                        </Link>
                    </MenuItem>
                ))}
            </MenuOculto>
        </Container>

    )
}

export default Menu;