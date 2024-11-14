import '../src/styles/global.css'; 
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/login';
import Page from './components/page';
import Estoque from './components/Estoque/estoque';
import Fornecedores from './components/Fornecedores/fornecedores';
import Cortes from './components/Cortes/cortes';
import Debitos from './components/Debitos/debitos'; // Ajuste aqui

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Page />} />
        <Route path='/estoque' element={<Estoque />} />
        <Route path='/fornecedores' element={<Fornecedores />} />
        <Route path='/cortes' element={<Cortes />} />
        <Route path='/contas' element={<Debitos />} /> {/* Atualização para Debitos */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
