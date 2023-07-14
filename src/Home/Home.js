import { AiOutlinePoweroff } from 'react-icons/ai';
import './home.css';
import { useState } from 'react';
import CadastroUsuario from '../Cadastro/Cadastro';

function Home({ onLogout, user }) {
    const [exibirCadastroUsuario, setExibirCadastroUsuario] = useState(false);
  
    const handleExibirUsuarios = () => {
      setExibirCadastroUsuario(false);
    };
  
    const handleExibirCadastroUsuario = () => {
      setExibirCadastroUsuario(true);
    };
  
    return (
      <div className="home-container">
        <div className="menu-cabecalho">
          <div>
            <h2>Bagaggio</h2>
          </div>
          <div className="profile">
            <div>
              <button className="botao-icone" onClick={onLogout}>
                <AiOutlinePoweroff className="icone" />
              </button>
            </div>
            <div className="user-profile">
              <h3>{user.name}</h3>
              <h4>Software Developer</h4>
            </div>
            <div className="user-profile-pic">
              <img src={user.avatar_url} alt={user.name} />
            </div>
          </div>
        </div>
        <div className="menu-botoes">
          <button className={!exibirCadastroUsuario ? 'active' : ''} onClick={handleExibirUsuarios}>
            Usuários
          </button>
          <button className={exibirCadastroUsuario ? 'active' : ''} onClick={handleExibirCadastroUsuario}>
            Cadastrar usuário
          </button>
        </div>
        {exibirCadastroUsuario ? (
          <CadastroUsuario onVoltar={handleExibirUsuarios} />
        ) : (
          <div className="tela">
            <div className="menu-usuarios">
              <h1>Não há usuários Cadastrados</h1>
            </div>
          </div>
        )}
      </div>
    );
  }
  
  export default Home;
  
  
