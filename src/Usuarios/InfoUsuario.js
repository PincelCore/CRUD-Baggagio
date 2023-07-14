import React from 'react';
import './InfoUsuarios.css'

function InfoUsuario({ usuario }) {
  return (
    <div className="informacoes-usuario">
      <label>
        ID: {usuario.id}
      </label>
      <label>
        Nome: {`${usuario.nome} ${usuario.sobrenome}`}
      </label>
      <label>
        Email: {usuario.email}
      </label>
      <label>
        Telefone: {usuario.telefone}
      </label>
      <label>
        Rua: {usuario.rua}
      </label>
      <label>
        Número: {usuario.numero}
      </label>
      <label>
        Bairro: {usuario.bairro}
      </label>
      <label>
        UF: {usuario.estado}
      </label>
      <label>
        CEP: {usuario.cep}
      </label>
      <label>
        Habilidades: {usuario.habilidades}
      </label>
    </div>
  );
}

export default InfoUsuario;
