import { Link } from 'react-router-dom'; // Certifique-se de ter o react-router-dom instalado
import './style/global.css'; // Importa o arquivo de estilos globais

const App = () => {
  return (
    <div className="h-screen flex">
      {/* Sidebar (Barra Lateral) */}
      <aside className="bg-gray-900 w-64 flex flex-col">
        {/* Logo e Cabeçalho da Barra Lateral */}
        <div className="bg-gray-800 p-4 flex items-center justify-between">
          {/* Logo da empresa */}
          <img src="/images/sgcamenor.png" alt="SGCA Logo" style={{ width: '90px', height: 'auto' }} className="mx-auto" />
        </div>

        {/* Seção de Perfil do Usuário na Barra Lateral */}
        <div className="flex flex-col mt-8">
          {/* Exibe a Imagem e o Nome do Usuário */}
          <div className="p-4 flex items-center space-x-2">
            <img
              src="https://randomuser.me/api/portraits/men/67.jpg"
              alt="profile"
              className="w-10 h-10 rounded-full"
            />
            <div className="text-white">
              <p>KAUÃ ROCHA DE OLIVEIRA</p>
              <span className="text-green-400 text-sm">Online</span>
            </div>
          </div>

          {/* Itens do Menu (Estoque, Fornecedores, etc.) */}
          <nav className="mt-8">
            {/* Cada item do menu é um componente MenuItem */}
            <MenuItem icon="📦" label="Estoque" />
            <MenuItem icon="👥" label="Fornecedores" />
            <MenuItem icon="✂️" label="Cortes" />
            <MenuItem icon="📑" label="Contas" />
            <MenuItem icon="📊" label="Estatística" />
          </nav>
        </div>

        {/* Link para voltar ao login */}
        <div className="mt-auto p-4">
          <Link to="login.tsx" className="flex items-center text-gray-400 hover:text-white">
            <span className="text-lg">🔙</span> {/* Ícone de voltar */}
            <span className="ml-2">Voltar ao Login</span>
          </Link>
        </div>
      </aside>

      {/* Conteúdo Principal */}
      <main className="flex-1 bg-gray-100">
        {/* Cabeçalho Superior (Com logo e ícones de notificações) */}
        <header className="bg-blue-600 p-4 flex justify-between items-center">
          {/* Título do Sistema */}
          <h2 className="text-white text-2xl">Algo a adicionar</h2>

          {/* Ícones de Configurações, Mensagens, Notificações e Nome do Usuário */}
          <div className="flex items-center space-x-4">
            <IconButton icon="⚙️" />  {/* Ícone de Configurações */}
            <IconButton icon="✉️" />  {/* Ícone de Mensagens */}
            <IconButton icon="🔔" />  {/* Ícone de Notificações */}
            <div className="text-white">KAUÃ ROCHA DE OLIVEIRA</div>
          </div>
        </header>

        {/* Área de Conteúdo (Conteúdo Principal do Sistema) */}
        <section className="flex-1 p-8" style={{ backgroundImage: "url('/mnt/data/logo-SGCA.png')", backgroundSize: "cover" }}>
          {/* Conteúdo Centralizado (Logo e Texto) */}
          <div className="flex justify-center items-center h-full">
            <div className="text-center">
              <img src="/images/logo-SGCA.png" alt="SGCA Logo" style={{ width: '490px', height: 'auto' }} className="mx-auto" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

// Componente MenuItem para cada item do menu da barra lateral
const MenuItem = ({ icon, label }: { icon: string; label: string }) => {
  return (
    <a
      href="#"
      className="flex items-center text-gray-400 hover:bg-gray-700 hover:text-white px-4 py-3"
    >
      <span>{icon}</span>
      <span className="ml-4">{label}</span>
    </a>
  );
};

// Componente IconButton para os ícones de configuração, mensagem e notificações no cabeçalho
const IconButton = ({ icon }: { icon: string }) => {
  return (
    <button className="text-white text-2xl">
      {icon}
    </button>
  );
};

export default App;
