import './styles/global.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/login';
import Page from './components/page';

function App() {
    
  return (
      
    <BrowserRouter>

        {/* <Navbar /> */}

        <Routes>

          <Route path='/login' element={<Login />} />

          <Route path='/' element={<Page />} />
          

        </Routes>


    </BrowserRouter>

  )
}

export default App;