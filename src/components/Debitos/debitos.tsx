import React, { useState } from 'react'; 
import { Search, Download, AlertCircle, CheckCircle, XCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Debitos = () => {
  const [activeTab, setActiveTab] = useState('pendentes');
  const navigate = useNavigate();

  return (
    <div className="relative p-8 bg-gray-100 min-h-screen flex flex-col">
      {/* Logo Menor e Título */}
      <div className="flex items-center mb-6">
        <img 
          src="/imagens/logo sgca menor.png" 
          alt="SGCA Logo" 
          className="w-8 h-8 mr-3" 
        />
        <h1 className="text-3xl font-semibold text-gray-800">Débitos</h1>
      </div>

      {/* Abas de Navegação */}
      <div className="flex space-x-8 mb-6 border-b-2 border-gray-300">
        <button
          onClick={() => setActiveTab('pendentes')}
          className={`pb-2 focus:outline-none font-semibold ${activeTab === 'pendentes' ? 'text-gray-800 border-b-4 border-red-600' : 'text-gray-500 hover:text-gray-800'}`}
        >
          Pendentes
        </button>
        <button
          onClick={() => setActiveTab('quitados')}
          className={`pb-2 focus:outline-none font-semibold ${activeTab === 'quitados' ? 'text-gray-800 border-b-4 border-green-600' : 'text-gray-500 hover:text-gray-800'}`}
        >
          Quitados
        </button>
        <button
          onClick={() => setActiveTab('atrasados')}
          className={`pb-2 focus:outline-none font-semibold ${activeTab === 'atrasados' ? 'text-gray-800 border-b-4 border-yellow-600' : 'text-gray-500 hover:text-gray-800'}`}
        >
          Atrasados
        </button>
      </div>

      {/* Conteúdo das Abas */}
      {activeTab === 'pendentes' && (
        <div>
          <TabelaDebitos
            dados={[
              { id: 1, descricao: 'Compra de tecidos', valor: 350.0, vencimento: '20/11/2024', status: 'Pendente' },
              { id: 2, descricao: 'Pagamento fornecedor A', valor: 720.5, vencimento: '25/11/2024', status: 'Pendente' },
            ]}
          />
        </div>
      )}

      {activeTab === 'quitados' && (
        <div>
          <TabelaDebitos
            dados={[
              { id: 3, descricao: 'Conta de energia', valor: 200.0, vencimento: '10/10/2024', status: 'Quitado' },
              { id: 4, descricao: 'Fornecedor B', valor: 450.0, vencimento: '15/10/2024', status: 'Quitado' },
            ]}
          />
        </div>
      )}

      {activeTab === 'atrasados' && (
        <div>
          <TabelaDebitos
            dados={[
              { id: 5, descricao: 'Compra de equipamentos', valor: 1_500.0, vencimento: '01/11/2024', status: 'Atrasado' },
              { id: 6, descricao: 'Taxas bancárias', valor: 125.0, vencimento: '05/11/2024', status: 'Atrasado' },
            ]}
          />
        </div>
      )}

      {/* Botão Voltar ao Menu no canto inferior esquerdo */}
      <button
        onClick={() => navigate('/')}
        className="absolute bottom-2 left-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
>
        Voltar ao Menu
      </button>
    </div>
  );
};

const TabelaDebitos = ({ dados }: { dados: Array<any> }) => (
  <div className="overflow-x-auto">
    <table className="min-w-full bg-white shadow-md rounded border border-gray-300">
    <thead>
  <tr className="bg-blue-600 text-white text-left text-sm font-semibold">
    <th className="py-3 px-4 border-r border-blue-500">Descrição</th>
    <th className="py-3 px-4 border-r border-blue-500">Valor (R$)</th>
    <th className="py-3 px-4 border-r border-blue-500">Vencimento</th>
    <th className="py-3 px-4 border-r border-blue-500">Status</th>
    <th className="py-3 px-4 border-blue-500">Ações</th>
  </tr>
      </thead>
      <tbody className="text-gray-800">
        {dados.map((debito) => (
          <tr key={debito.id} className="hover:bg-gray-100 transition duration-150 ease-in-out">
            <td className="py-3 px-4 border-t border-gray-300">{debito.descricao}</td>
            <td className="py-3 px-4 border-t border-gray-300">R$ {debito.valor.toFixed(2)}</td>
            <td className="py-3 px-4 border-t border-gray-300">{debito.vencimento}</td>
            <td className="py-3 px-4 border-t border-gray-300">
              <StatusIcon status={debito.status} />
            </td>
            <td className="py-3 px-4 border-t border-gray-300">
              <button className="text-blue-600 font-medium">Visualizar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const StatusIcon = ({ status }: { status: string }) => {
  let icon, color;

  switch (status) {
    case 'Pendente':
      icon = <AlertCircle />;
      color = 'text-yellow-500';
      break;
    case 'Quitado':
      icon = <CheckCircle />;
      color = 'text-green-500';
      break;
    case 'Atrasado':
      icon = <XCircle />;
      color = 'text-red-500';
      break;
    default:
      icon = null;
      color = '';
  }

  return (
    <div className={`flex items-center ${color}`}>
      {icon}
      <span className="ml-2">{status}</span>
    </div>
  );
};

export default Debitos;
