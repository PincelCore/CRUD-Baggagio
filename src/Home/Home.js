import { AiOutlinePoweroff } from 'react-icons/ai';
import './home.css';
import { useState } from 'react';
import CadastroUsuario from '../Cadastro/Cadastro';
import Usuarios from '../Usuarios/Usuarios';
import EditarUsuario from '../Usuarios/EditarUsuario';
import { useEffect } from 'react';

function Home({ onLogout, user }) {
  const [exibirCadastroUsuario, setExibirCadastroUsuario] = useState(false);
  const [exibirEdicaoUsuario, setExibirEdicaoUsuario] = useState(false);
  const [usuariosCadastrados, setUsuariosCadastrados] = useState([]);
  const [usuarioSelecionado, setUsuarioSelecionado] = useState(null);
  const [cidade, setCidade] = useState('');

  useEffect(() => {
    const usuariosSalvos = localStorage.getItem('usuarios');
    const cidadeSalva = localStorage.getItem('cidade');
    if (usuariosSalvos) {
      setUsuariosCadastrados(JSON.parse(usuariosSalvos));
    }
    if (cidadeSalva) {
      setCidade(cidadeSalva);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('usuarios', JSON.stringify(usuariosCadastrados));
    localStorage.setItem('cidade', cidade);
  }, [usuariosCadastrados, cidade]);

  const handleExibirUsuarios = () => {
    setExibirCadastroUsuario(false);
    setExibirEdicaoUsuario(false);
  };

  const handleExibirCadastroUsuario = () => {
    setExibirCadastroUsuario(true);
    setExibirEdicaoUsuario(false);
  };

  const handleEditarUsuario = (usuario) => {
    setUsuarioSelecionado(usuario);
    setExibirCadastroUsuario(false);
    setExibirEdicaoUsuario(true);
  };

  const handleFecharEdicao = () => {
    setUsuarioSelecionado(null);
    setExibirEdicaoUsuario(false);
  };

  const handleCadastroUsuario = (usuario) => {
    setUsuariosCadastrados((usuarios) => [...usuarios, usuario]);
    setExibirCadastroUsuario(false);
    setCidade(usuario.cidade);
  };

  const atualizarUsuario = (usuarioAtualizado) => {
    setUsuariosCadastrados((usuarios) =>
      usuarios.map((usuario) =>
        usuario.id === usuarioAtualizado.id ? usuarioAtualizado : usuario
      )
    );
    handleFecharEdicao();
  };
  const handleExcluirUsuario = (novosUsuarios) => {
    setUsuariosCadastrados(novosUsuarios);
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
        <button className={!exibirCadastroUsuario && !exibirEdicaoUsuario ? 'active' : ''} onClick={handleExibirUsuarios}>
          Usuários
        </button>
        <button className={exibirCadastroUsuario ? 'active' : ''} onClick={handleExibirCadastroUsuario}>
          Cadastrar usuário
        </button>
      </div>
      {exibirCadastroUsuario ? (
        <CadastroUsuario
          onVoltar={handleExibirUsuarios}
          onCadastroUsuario={handleCadastroUsuario}
        />
      ) : exibirEdicaoUsuario ? (
        <EditarUsuario
          usuario={usuarioSelecionado}
          onAtualizarUsuario={atualizarUsuario}
          onVoltar={handleFecharEdicao}
        />
      ) : (
        <div className="tela">
          <div className="menu-usuarios">
            {usuariosCadastrados.length === 0 ? (
              <h1>Não há usuários cadastrados</h1>
            ) : (
              <Usuarios
              usuarios={usuariosCadastrados}
              cidade={cidade}
              onEditarUsuario={handleEditarUsuario}
              onExcluirUsuario={handleExcluirUsuario}
            />

            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;




