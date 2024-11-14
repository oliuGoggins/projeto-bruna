import React, { useState } from 'react'; 
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Cortes = () => {
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
        <h1 className="text-3xl font-semibold text-gray-800">Cortes</h1>
      </div>

      {/* Abas de Navegação */}
      <div className="flex space-x-8 mb-6 border-b-2 border-gray-300">
        <button
          onClick={() => setActiveTab('pendentes')}
          className={`pb-2 focus:outline-none font-semibold ${activeTab === 'pendentes' ? 'text-gray-800 border-b-4 border-blue-600' : 'text-gray-500 hover:text-gray-800'}`}
        >
          Pendentes
        </button>
        <button
          onClick={() => setActiveTab('em_andamento')}
          className={`pb-2 focus:outline-none font-semibold ${activeTab === 'em_andamento' ? 'text-gray-800 border-b-4 border-blue-600' : 'text-gray-500 hover:text-gray-800'}`}
        >
          Em Andamento
        </button>
        <button
          onClick={() => setActiveTab('concluidos')}
          className={`pb-2 focus:outline-none font-semibold ${activeTab === 'concluidos' ? 'text-gray-800 border-b-4 border-blue-600' : 'text-gray-500 hover:text-gray-800'}`}
        >
          Concluídos
        </button>
      </div>

      {/* Conteúdo das Abas */}
      {activeTab === 'pendentes' && (
        <div>
          <TabelaCortes
            dados={[
              { id: 1, nome: 'Corte 01', material: 'DRY FIT', quantidade: 64, produto: 'Camiseta', moldes: '...', matriz: 'Download' },
              { id: 2, nome: 'Corte 02', material: 'Algodão', quantidade: 85, produto: 'Pijama', moldes: '...', matriz: 'Download' },
            ]}
          />
        </div>
      )}

      {activeTab === 'em_andamento' && (
        <div>
          <TabelaCortes
            dados={[
              { id: 3, nome: 'Corte 03', material: 'Viscose', quantidade: 50, produto: 'Saia', moldes: '...', matriz: 'Download' },
              { id: 4, nome: 'Corte 04', material: 'Jeans', quantidade: 120, produto: 'Calça', moldes: '...', matriz: 'Download' },
            ]}
          />
        </div>
      )}

      {activeTab === 'concluidos' && (
        <div>
          <TabelaCortes
            dados={[
              { id: 5, nome: 'Corte 05', material: 'Seda', quantidade: 20, produto: 'Camisa', moldes: '...', matriz: 'Download' },
              { id: 6, nome: 'Corte 06', material: 'Lã', quantidade: 40, produto: 'Blusa', moldes: '...', matriz: 'Download' },
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

const TabelaCortes = ({ dados }: { dados: Array<any> }) => (
  <div className="overflow-x-auto">
    <table className="min-w-full bg-white shadow-md rounded border border-gray-300">
      <thead>
        <tr className="bg-blue-600 text-white text-left text-sm font-semibold">
          <th className="py-3 px-4 border-r border-blue-500">Editar</th>
          <th className="py-3 px-4 border-r border-blue-500">Nome</th>
          <th className="py-3 px-4 border-r border-blue-500">Material</th>
          <th className="py-3 px-4 border-r border-blue-500">Quantidade de peças</th>
          <th className="py-3 px-4 border-r border-blue-500">Produto</th>
          <th className="py-3 px-4 border-r border-blue-500">Moldes</th>
          <th className="py-3 px-4 border-blue-500">Matriz</th>
        </tr>
      </thead>
      <tbody className="text-gray-800">
        {dados.map((corte) => (
          <tr key={corte.id} className="hover:bg-gray-100 transition duration-150 ease-in-out">
            <td className="py-3 px-4 border-t border-gray-300">
              <button className="text-blue-600 font-medium">Editar</button>
            </td>
            <td className="py-3 px-4 border-t border-gray-300">{corte.nome}</td>
            <td className="py-3 px-4 border-t border-gray-300">{corte.material}</td>
            <td className="py-3 px-4 border-t border-gray-300">{corte.quantidade}</td>
            <td className="py-3 px-4 border-t border-gray-300">{corte.produto}</td>
            <td className="py-3 px-4 border-t border-gray-300">{corte.moldes}</td>
            <td className="py-3 px-4 border-t border-gray-300">
              <button className="text-blue-600 font-medium">Download</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default Cortes;
