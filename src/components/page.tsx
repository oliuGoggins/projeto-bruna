import { Link } from 'react-router-dom';
import { Settings, Mail, Bell, Box, Users, Scissors, FileText, ArrowLeftCircle } from 'lucide-react';
import '../styles/global.css';
import logo_normal from './imagens/logo_sgca_menor.png'
import logo_fundo from './imagens/logo-SGCA.png'

const Page = () => {
  return (
    <div className="h-screen flex">
      {/* Sidebar */}
      <aside className="bg-gray-900 w-64 flex flex-col">
        <div className="bg-gray-800 p-4 flex items-center justify-between">
          <img src={logo_normal} alt="SGCA Logo" style={{ width: '90px', height: 'auto' }} className="mx-auto" />
        </div>
        <div className="flex flex-col mt-8">
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
          <nav className="mt-8">
            <MenuItem icon={<Box />} label="Estoque" to="/estoque" />
            <MenuItem icon={<Users />} label="Fornecedores" to="/fornecedores" />
            <MenuItem icon={<Scissors />} label="Cortes" to="/cortes" />
            <MenuItem icon={<FileText />} label="Contas" to="/contas" /> {/* Caminho ajustado */}
            
          </nav>
        </div>
        <div className="mt-auto p-4">
          <Link to="/login" className="flex items-center text-gray-400 hover:text-white">
            <ArrowLeftCircle className="text-lg" />
            <span className="ml-2">Voltar ao Login</span>
          </Link>
        </div>
      </aside>

      <main className="flex-1 bg-gray-100">
        <header className="bg-blue-600 p-4 flex justify-between items-center">
          <h2 className="text-white text-2xl"></h2>
          <div className="flex items-center space-x-4">
            <IconButton icon={<Settings />} />
            <IconButton icon={<Mail />} />
            <IconButton icon={<Bell />} />
            <div className="text-white">KAUÃ ROCHA DE OLIVEIRA</div>
          </div>
        </header>

        <section
          className="flex-1 p-8 flex justify-center items-center"
          style={{
            backgroundImage: `url(${logo_fundo})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            height: "73%",
          }}
        >
        </section>
      </main>
    </div>
  );
};

const MenuItem = ({ icon, label, to }: { icon: React.ReactNode; label: string; to: string }) => {
  return (
    <Link
      to={to}
      className="flex items-center text-gray-400 hover:bg-gray-700 hover:text-white px-4 py-3"
    >
      {icon}
      <span className="ml-4">{label}</span>
    </Link>
  );
};

const IconButton = ({ icon }: { icon: React.ReactNode }) => {
  return (
    <button className="text-white text-2xl">
      {icon}
    </button>
  );
};

export default Page;
