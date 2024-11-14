import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Fornecedores: React.FC = () => {
  const [activeTab, setActiveTab] = useState('fornecedores');
  const navigate = useNavigate();
  const fornecedores = [
    { nome: 'Fornecedor 01', endereco: 'Rua 001 QD 01 LT 01', cidade: 'Anápolis', estado: 'GO', cep: '00000-01', cpfCnpj: 'XX. XXX. XXX/0001-XX', telefone: '629098ç;00000' },
    { nome: 'Fornecedor 02', endereco: 'Rua 002 QD 02 LT 02', cidade: 'Trindade', estado: 'GO', cep: '00000-02', cpfCnpj: 'XX. XXX. XXX-XX', telefone: '62550000000' },
    { nome: 'Fornecedor 03', endereco: 'Rua 003 QD 03 LT 03', cidade: 'Formosa', estado: 'GO', cep: '00000-03', cpfCnpj: 'XX. XXX. XXX/0001-XX', telefone: '62900660000' },
    { nome: 'Fornecedor 04', endereco: 'Rua 004 QD 04 LT 04', cidade: 'Goiânia', estado: 'GO', cep: '00000-04', cpfCnpj: 'XX. XXX. XXX/0001-XX', telefone: '62900006000' },
    { nome: 'Fornecedor 05', endereco: 'Rua 005 QD 05 LT 05', cidade: 'Aparecida', estado: 'GO', cep: '00000-05', cpfCnpj: 'XX. XXX. XXX/0001-XX', telefone: '62904000000' },
    { nome: 'Fornecedor 06', endereco: 'Rua 006 QD 06 LT 06', cidade: 'Inhumas', estado: 'GO', cep: '00000-06', cpfCnpj: 'XX. XXX. XXX/0001-XX', telefone: '62900000000' },
  ];

  return (
    <div className="relative p-8 bg-gray-100 min-h-screen flex flex-col">
      {/* Logo e Título */}
      <div className="flex items-center mb-6">
        <img 
          src="/imagens/logo sgca menor.png" 
          alt="SGCA Logo" 
          className="w-8 h-8 mr-3" 
        />
        <h1 className="text-3xl font-semibold text-gray-800">Fornecedores</h1>
      </div>

      {/* Abas de Navegação */}
      <div className="flex space-x-8 mb-6 border-b-2 border-gray-300">
        <button
          onClick={() => setActiveTab('fornecedores')}
          className={`pb-2 focus:outline-none font-semibold ${activeTab === 'fornecedores' ? 'text-gray-800 border-b-4 border-blue-600' : 'text-gray-500 hover:text-gray-800'}`}
        >
          Lista de Fornecedores
        </button>
      </div>

      {/* Conteúdo da Página */}
      {activeTab === 'fornecedores' && (
        <div>
          {/* Barra de Pesquisa */}
          <div className="relative mb-6">
            <input
              type="text"
              placeholder="Pesquisar fornecedores..."
              className="w-full p-3 pl-12 rounded bg-gray-50 border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Tabela de Fornecedores */}
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white shadow-md rounded border border-gray-300">
              <thead>
                <tr className="bg-blue-600 text-white text-left text-sm font-semibold">
                  <th className="py-3 px-4 border-r border-blue-500">Editar</th>
                  <th className="py-3 px-4 border-r border-blue-500">Nome</th>
                  <th className="py-3 px-4 border-r border-blue-500">Endereço</th>
                  <th className="py-3 px-4 border-r border-blue-500">Cidade</th>
                  <th className="py-3 px-4 border-r border-blue-500">Estado</th>
                  <th className="py-3 px-4 border-r border-blue-500">CEP</th>
                  <th className="py-3 px-4 border-r border-blue-500">CPF/CNPJ</th>
                  <th className="py-3 px-4">Telefone</th>
                </tr>
              </thead>
              <tbody className="text-gray-800">
                {fornecedores.map((fornecedor, index) => (
                  <tr key={index} className="hover:bg-gray-100 transition duration-150 ease-in-out">
                    <td className="py-3 px-4 border-t border-gray-300">
                      <button className="text-blue-600 font-medium">Editar</button>
                    </td>
                    <td className="py-3 px-4 border-t border-gray-300">{fornecedor.nome}</td>
                    <td className="py-3 px-4 border-t border-gray-300">{fornecedor.endereco}</td>
                    <td className="py-3 px-4 border-t border-gray-300">{fornecedor.cidade}</td>
                    <td className="py-3 px-4 border-t border-gray-300">{fornecedor.estado}</td>
                    <td className="py-3 px-4 border-t border-gray-300">{fornecedor.cep}</td>
                    <td className="py-3 px-4 border-t border-gray-300">{fornecedor.cpfCnpj}</td>
                    <td className="py-3 px-4 border-t border-gray-300">{fornecedor.telefone}</td>
                  </tr>
                ))}
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

export default Fornecedores;
