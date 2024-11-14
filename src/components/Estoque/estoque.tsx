import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Estoque = () => {
  const [activeTab, setActiveTab] = useState('estoque');
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
        <h1 className="text-3xl font-semibold text-gray-800">Estoque</h1>
      </div>

      {/* Abas de Navegação */}
      <div className="flex space-x-8 mb-6 border-b-2 border-gray-300">
        <button
          onClick={() => setActiveTab('estoque')}
          className={`pb-2 focus:outline-none font-semibold ${activeTab === 'estoque' ? 'text-gray-800 border-b-4 border-blue-600' : 'text-gray-500 hover:text-gray-800'}`}
        >
          Estoque por item
        </button>
        <button
          onClick={() => setActiveTab('transacoes')}
          className={`pb-2 focus:outline-none font-semibold ${activeTab === 'transacoes' ? 'text-gray-800 border-b-4 border-blue-600' : 'text-gray-500 hover:text-gray-800'}`}
        >
          Transações
        </button>
      </div>

      {/* Conteúdo das Abas */}
      {activeTab === 'estoque' ? (
        <div>
          {/* Barra de Pesquisa */}
          <div className="relative mb-6">
            <input
              type="text"
              placeholder="Pesquisar..."
              className="w-full p-3 pl-12 rounded bg-gray-50 border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute left-4 top-3 text-gray-400" />
          </div>

          {/* Tabela de Estoque */}
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white shadow-md rounded border border-gray-300">
              <thead>
                <tr className="bg-blue-600 text-white text-left text-sm font-semibold">
                  <th className="py-3 px-4 border-r border-blue-500">Editar</th>
                  <th className="py-3 px-4 border-r border-blue-500">Nome do item</th>
                  <th className="py-3 px-4 border-r border-blue-500">Código do item</th>
                  <th className="py-3 px-4 border-r border-blue-500">Valor do item</th>
                  <th className="py-3 px-4 border-r border-blue-500">Estoque atual</th>
                  <th className="py-3 px-4">Fornecedor</th>
                </tr>
              </thead>
              <tbody className="text-gray-800">
                {/* Dados de exemplo */}
                {[
                  { id: 1, nome: 'Produto 01', codigo: '001', valor: 'R$ 20,00', estoque: 12, fornecedor: 'Malharia 01' },
                  { id: 2, nome: 'Produto 02', codigo: '002', valor: 'R$ 15,00', estoque: 20, fornecedor: 'Malharia 02' },
                  { id: 3, nome: 'Produto 03', codigo: '003', valor: 'R$ 30,00', estoque: 8, fornecedor: 'Malharia 03' },
                  { id: 4, nome: 'Produto 04', codigo: '004', valor: 'R$ 25,00', estoque: 15, fornecedor: 'Malharia 04' },
                  { id: 5, nome: 'Produto 05', codigo: '005', valor: 'R$ 10,00', estoque: 30, fornecedor: 'Malharia 05' },
                ].map((produto) => (
                  <tr key={produto.id} className="hover:bg-gray-100 transition duration-150 ease-in-out">
                    <td className="py-3 px-4 border-t border-gray-300">
                      <button className="text-blue-600 font-medium">Editar</button>
                    </td>
                    <td className="py-3 px-4 border-t border-gray-300">{produto.nome}</td>
                    <td className="py-3 px-4 border-t border-gray-300">{produto.codigo}</td>
                    <td className="py-3 px-4 border-t border-gray-300">{produto.valor}</td>
                    <td className="py-3 px-4 border-t border-gray-300">{produto.estoque}</td>
                    <td className="py-3 px-4 border-t border-gray-300">{produto.fornecedor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div>
          {/* Barra de Pesquisa */}
          <div className="relative mb-6">
            <input
              type="text"
              placeholder="Pesquisar transações..."
              className="w-full p-3 pl-12 rounded bg-gray-50 border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute left-4 top-3 text-gray-400" />
          </div>

          {/* Tabela de Transações */}
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white shadow-md rounded border border-gray-300">
              <thead>
                <tr className="bg-blue-600 text-white text-left text-sm font-semibold">
                  <th className="py-3 px-4 border-r border-blue-500">Editar</th>
                  <th className="py-3 px-4 border-r border-blue-500">Tipo</th>
                  <th className="py-3 px-4 border-r border-blue-500">Data</th>
                  <th className="py-3 px-4 border-r border-blue-500">Item</th>
                  <th className="py-3 px-4 border-r border-blue-500">Estoque atual</th>
                  <th className="py-3 px-4">Fornecedor</th>
                </tr>
              </thead>
              <tbody className="text-gray-800">
                <tr className="hover:bg-gray-100 transition duration-150 ease-in-out">
                  <td className="py-3 px-4 border-t border-gray-300"><button className="text-blue-600 font-medium">Editar</button></td>
                  <td className="py-3 px-4 border-t border-gray-300">Entrada</td>
                  <td className="py-3 px-4 border-t border-gray-300">05/04/2024</td>
                  <td className="py-3 px-4 border-t border-gray-300">Produto 01</td>
                  <td className="py-3 px-4 border-t border-gray-300">12</td>
                  <td className="py-3 px-4 border-t border-gray-300">Malharia 01</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Botão Voltar ao Menu no canto inferior esquerdo */}
      <button
        onClick={() => navigate('/')}
        className="absolute bottom-2 left2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Voltar ao Menu
      </button>
    </div>
  );
};

export default Estoque;
