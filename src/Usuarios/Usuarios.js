import './usuarios.css';
import { FaPencilAlt } from 'react-icons/fa';
import { BiInfoCircle } from 'react-icons/bi';
import { FiTrash2 } from 'react-icons/fi';
import EditarUsuario from './EditarUsuario';
import { useState } from 'react';

function Usuarios({ usuarios, cidade, onEditarUsuario, exibirEdicaoUsuario, onAtualizarUsuario }) {
    
    return (
      <div className="container">
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
                  <button className="acoes">
                    <BiInfoCircle />
                  </button>
                  <button className="acoes">
                    <FiTrash2 />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {exibirEdicaoUsuario && (
          <div className="edicao-container">
            <EditarUsuario usuario={usuarios[0]} onAtualizarUsuario={onAtualizarUsuario} />
          </div>
        )}
      </div>
    );
  }
  
  export default Usuarios;
  

