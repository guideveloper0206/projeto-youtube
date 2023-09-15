import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Menu from "./components/menu";
import Home from "./pages/home";
import Shorts from "./pages/shorts";
import Inscricoes from "./pages/inscricoes";
import Biblioteca from "./pages/biblioteca";
import Login from "./pages/login";
import { UserStorage } from "./contexts/userContext";
import YourVideos from "./pages/yourvideos/yourvideos";
import SignUp from "./pages/sign-up/sign-up";
import SearchPage from "./pages/search/searchPage";

function App() {

  return(
    <BrowserRouter>
      <UserStorage>  
        <div className="App">
          <Header/>
          <div style={{width: '100%', display: 'flex'}}>
            <Menu />
            <div style={{ width: '100%', padding: '50px 70px', boxSizing: 'border-box', justifyContent:'center'}}>
              <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/shorts" element={<Shorts/>} />
                <Route path="/inscricoes" element={<Inscricoes/>} />
                <Route path="/biblioteca" element={<Biblioteca/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/yourvideos" element={<YourVideos/>} />
                <Route path="/sign-up" element={<SignUp/>} />
                <Route path="/search" element={<SearchPage />} />
              </Routes>
            </div>
          </div>
        </div>
      </UserStorage>
    </BrowserRouter>
  
  )
}

export default App;
