import { createContext, useEffect, useState } from 'react';
import api from '../api';
import { useNavigate } from 'react-router-dom';

export const UserContext = createContext({} as any);

export const UserStorage = ({ children } : any) => {
    const [login, setLogin] = useState(false);
    const [user,setUser] = useState({});
    const [token,setToken] = useState(localStorage.getItem('token') as string);
    const navigate = useNavigate();
    const [openDropDownMenu, setOpenDropDownMenu] = useState(false);
    const [userVideos, setUserVideos] = useState([])

    const getVideos = (token: string, user_id: string) => {
        api.get(`/videos/get-videos?user_id=${user_id}`, {headers: {Authorization: token}}).then(({ data }) => {
          setUserVideos(data.videos)
        }).catch((error) => {
          console.log('erro ao buscar vídeos', error)
        })
    }

    const createVideos = (token:string, user_id:string, title:string, description:string,
     thumbnail:string, publishedAt:Date) => {
      api.post('videos/create-video', {user_id, title, description, thumbnail, publishedAt}, {headers:
      {Authorization: token}})
      .then(() => {
        alert('Video  enviado com sucesso!')
        getUser(token)
      }).catch((error) => {
        console.log('Não foi possivel enviar o video', error)
        alert('Não foi possivel  enviar o video. Tente novamente.')
      })
     }

    const getUser = (token: string) => {
      api.get('/user/get-user', {headers: {Authorization: token}}).then(({ data }) => {
        setUser(data.user);
        setLogin(true);
        getVideos(token, data.user.id)
      }).catch((error) => {
        console.log('usuário não autenticado', error)
      })
    }

    useEffect(() => {
        getUser(token);
    },[token]);

    const logOut = () => {
        localStorage.removeItem('token');
        setLogin(false);
        setUser({});
    }

    const handleLogin = (email: string, password: string) => {
        api.post('/user/sign-in', {email, password}).then(({ data }) => {
            setLogin(true);
            localStorage.setItem('token', data.token);
            setToken(data.token);
            getUser(data.token);
        }).catch((error) => {
            console.log('Não foi possível fazer o login', error);
        })
    }

    const handleCreateUser = (name: string, email: string, password: string) => {
        api.post('/user/sign-up', {name, email, password}).then(() => {
          alert('Usuário criado com sucesso')
          handleLogin(email, password);
          navigate('/')
        }).catch((error) => {
          console.log('Não foi possível criar novo usuário', error);
          if (error.response.status === 409) { // 409 é o status de conflito para email já existente
            alert('Este e-mail já está em uso. Por favor, tente outro.');
          } else {
            alert('Não foi possível criar o usuário. Verifique os dados e tente novamente.');
          }
        })
      }

    return (
        <UserContext.Provider value={{
            login,
            user,
            openDropDownMenu,
            token,
            userVideos,
            handleLogin,
            logOut,
            handleCreateUser,
            setOpenDropDownMenu,
            getVideos,
            createVideos
        }}>
          {children}
        </UserContext.Provider>
    )
}