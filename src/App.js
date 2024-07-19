import { useState } from 'react';
import Header from '../src/components/header'
import Menu from './components/menu';
import { BrowserRouter , Routes , Route  } from 'react-router-dom';
import Home from './pages/home';
import Registrations from './pages/registrations';
import Shorts from './pages/Shorts';
import ButtonPart1 from './components/header/button';
import Login from './login';
import { UserStorage } from './context/useContext';
import { ContainerCentro } from './components/conteudo/stylesConteudo';
import { CategoryProvider } from './context/categories';
import { SearchProvider } from './pages/search/context';
import Pesquisa from './pages/search/search';



function App() {

const [openMenu , setOpenMenu] = useState(true)

  return (
    <SearchProvider>

    <CategoryProvider>
      <UserStorage>
      <BrowserRouter>
      <div className="App">
        <Header openMenu={openMenu} setOpenMenu={setOpenMenu} /> 
        <ButtonPart1 />
        <div style={{width: '100%', display: 'flex'}}>
          <Menu openMenu={openMenu} />
            <ContainerCentro openMenu={openMenu}>
            <Routes>
            <Route path='/início' element={<Home openMenu={openMenu}/>}/>
            <Route path='/shorts' element={<Shorts />}/>
            <Route path='/inscrições' element={<Registrations />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/search' element={<Pesquisa />}/>
            </Routes>
            </ContainerCentro>
          
          <div>
  
          </div>
        </div>
      </div>
      </BrowserRouter>
      </UserStorage>
    </CategoryProvider>
    </SearchProvider>
  );
}

export default App;
