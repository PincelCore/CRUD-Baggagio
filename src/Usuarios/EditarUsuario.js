import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function EditarUsuario({ usuario, onAtualizarUsuario, onVoltar }) {
    const [nome, setNome] = useState(usuario?.nome || '');
    const [sobrenome, setSobrenome] = useState(usuario?.sobrenome || '');
    const [email, setEmail] = useState(usuario?.email || '');
    const [telefone, setTelefone] = useState(usuario?.telefone || '');
    const [cep, setCep] = useState(usuario?.cep || '');
    const [habilidades, setHabilidades] = useState(usuario?.habilidades || '');
    const [numero, setNumero] = useState(usuario?.numero || '');
    const [rua, setRua] = useState(usuario?.rua || '');
    const [bairro, setBairro] = useState(usuario?.bairro || '');
    const [estado, setEstado] = useState(usuario?.estado || '');
    const [exibirEndereco, setExibirEndereco] = useState(cep !== '');
  
    const handleInputChange = (event) => {
      const { name, value } = event.target;
  
      switch (name) {
        case 'name':
          setNome(value);
          break;
        case 'middlename':
          setSobrenome(value);
          break;
        case 'email':
          setEmail(value);
          break;
        case 'phone':
          setTelefone(value);
          break;
        case 'cep':
          setCep(value);
          setExibirEndereco(value !== '');
          break;
        case 'habilidades':
          setHabilidades(value);
          break;
        case 'number':
          setNumero(value);
          break;
        case 'rua':
          setRua(value);
          break;
        case 'bairro':
          setBairro(value);
          break;
        case 'estado':
          setEstado(value);
          break;
        default:
          break;
      }
    };
  
    const handleAtualizar = (event) => {
      event.preventDefault();
  
      const usuarioAtualizado = {
        ...usuario,
        nome: nome?.trim() || '',
        sobrenome: sobrenome?.trim() || '',
        email: email?.trim() || '',
        telefone: telefone?.trim() || '',
        cep: cep?.trim() || '',
        habilidades: habilidades?.trim() || '',
        numero: numero?.trim() || '',
        rua: rua?.trim() || '',
        bairro: bairro?.trim() || '',
        estado: estado?.trim() || '',
      };
  
      onAtualizarUsuario(usuarioAtualizado);
  
      // Exemplo: exibir uma mensagem de sucesso
      console.log('Usuário atualizado com sucesso!');
    };
  
    return (
      <div className="cadastro-tela">
        <ToastContainer />
        <div className="cadastro-container">
          <h1>Editar usuário</h1>
          <button onClick={onVoltar}>Voltar</button>
        </div>
        <div className="flex">
          <form className="formulario">
            <div className="formas">
              <p>Nome</p>
              <input type="text" name="name" placeholder="Nome" value={nome} onChange={handleInputChange} />
            </div>
            <div className="formas">
              <p>Sobrenome</p>
              <input type="text" name="middlename" placeholder="Sobrenome" value={sobrenome} onChange={handleInputChange} />
            </div>
            <div className="formas">
              <p>Email</p>
              <input type="email" name="email" placeholder="E-mail" value={email} onChange={handleInputChange} />
            </div>
            <div className="formas">
              <p>Telefone</p>
              <input type="tel" name="phone" placeholder="Telefone" value={telefone} onChange={handleInputChange} />
            </div>
            <div className="formas">
              <p>CEP</p>
              <input type="text" name="cep" placeholder="CEP" value={cep} onChange={handleInputChange} />
            </div>
            <div className="formas">
              <p>Habilidades</p>
              <textarea name="habilidades" placeholder="Habilidades ex: Html, css e javascript" value={habilidades} onChange={handleInputChange}></textarea>
            </div>
          </form>
          {exibirEndereco && (
            <form className="formulario">
              <div className="formas">
                <p>Número</p>
                <input type="text" name="number" placeholder="N°" value={numero} onChange={handleInputChange} />
              </div>
              <div className="formas">
                <p>Rua</p>
                <input type="text" name="rua" placeholder="Rua" value={rua} onChange={handleInputChange} />
              </div>
              <div className="formas">
                <p>Bairro</p>
                <input type="text" name="bairro" placeholder="Bairro" value={bairro} onChange={handleInputChange} />
              </div>
              <div className="formas">
                <p>Estado</p>
                <input type="text" name="estado" placeholder="Estado" value={estado} onChange={handleInputChange} />
              </div>
              <div className="botoes">
                <button className="cadastrar" onClick={handleAtualizar}>Atualizar Cadastro</button>
                <button className="voltar" onClick={onVoltar}>Voltar</button>
              </div>
            </form>
          )}
        </div>
      </div>
    );
  }
  
  export default EditarUsuario;
  