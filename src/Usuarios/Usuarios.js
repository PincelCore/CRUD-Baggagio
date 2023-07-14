import './usuarios.css';
import { FaPencilAlt } from 'react-icons/fa';
import { BiInfoCircle } from 'react-icons/bi';
import { FiTrash2 } from 'react-icons/fi';
import EditarUsuario from './EditarUsuario';
import { useState } from 'react';
import InfoUsuario from './InfoUsuario';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Usuarios({ usuarios, cidade, onEditarUsuario, exibirEdicaoUsuario, onAtualizarUsuario, onExcluirUsuario }) {
  const [exibirInformacoes, setExibirInformacoes] = useState(false);
  const [usuarioSelecionado, setUsuarioSelecionado] = useState(null);

  const handleExibirInformacoes = (usuario) => {
    setExibirInformacoes(true);
    setUsuarioSelecionado(usuario);
  };

  const handleFecharInformacoes = () => {
    setExibirInformacoes(false);
    setUsuarioSelecionado(null);
  };

  const handleExcluirUsuario = (usuario) => {
    const confirmacao = window.confirm('Deseja realmente excluir o usuário?');
    if (confirmacao) {
      const novosUsuarios = usuarios.filter((u) => u.id !== usuario.id);
      onExcluirUsuario(novosUsuarios);
      toast.success('Usuário excluído com sucesso!');
    } else {
      toast.info('Exclusão cancelada.');
    }
  };
  
  return (
    <div className="container">
      {!exibirInformacoes && (
        <>
          <h1>Usuários Cadastrados</h1>
          <table>
            <thead>
              <tr>
                <th className="black-row">Nome</th>
                <th className="black-row">Email</th>
                <th className="black-row">Telefone</th>
                <th className="black-row">Rua</th>
                <th className="black-row">Bairro</th>
                <th className="black-row">Cidade</th>
                <th className="black-row">UF</th>
                <th className="black-row">CEP</th>
                <th className="black-row">Ações</th>
              </tr>
            </thead>
            <tbody>
              {usuarios.map((usuario, index) => (
                <tr key={index}>
                  <td>{`${usuario.nome} ${usuario.sobrenome}`}</td>
                  <td>{usuario.email}</td>
                  <td>{usuario.telefone}</td>
                  <td>{usuario.rua}</td>
                  <td>{usuario.bairro}</td>
                  <td>{cidade}</td>
                  <td>{usuario.estado}</td>
                  <td>{usuario.cep}</td>
                  <td>
                    <button className="acoes" onClick={() => onEditarUsuario(usuario)}>
                      <FaPencilAlt />
                    </button>
                    <button className="acoes" onClick={() => handleExibirInformacoes(usuario)}>
                      <BiInfoCircle />
                    </button>
                    <button className="acoes" onClick={() => handleExcluirUsuario(usuario)}>
                      <FiTrash2 />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}

      {exibirEdicaoUsuario && (
        <div className="edicao-container">
          <EditarUsuario usuario={usuarios[0]} onAtualizarUsuario={onAtualizarUsuario} />
        </div>
      )}

      {exibirInformacoes && (
        <div className="menu-informacoes">
          <InfoUsuario usuario={usuarioSelecionado} />
          <button className="fechar-informacoes" onClick={handleFecharInformacoes}>
            Fechar
          </button>
        </div>
      )}
    </div>
  );
}

export default Usuarios;













