import React from "react";
import './cadastro.css';
import { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { v4 as uuidv4 } from 'uuid';

function CadastroUsuario({ onVoltar, onCadastroUsuario }) {
    const [exibirEndereco, setExibirEndereco] = useState(false);
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [cep, setCep] = useState('');
    const [numero, setNumero] = useState('');
    const [rua, setRua] = useState('');
    const [bairro, setBairro] = useState('');
    const [estado, setEstado] = useState('');
    const [cidade, setCidade] = useState('');

    const formatarCEP = (cep) => {
        const cepFormatado = cep.replace(/\D/g, '');
        if (cepFormatado.length > 5) {
            return `${cepFormatado.substr(0, 5)}-${cepFormatado.substr(5, 3)}`;
        }
        return cepFormatado;
    };

    const formatarTelefone = (telefone) => {
        const telefoneFormatado = telefone.replace(/\D/g, '');
        if (telefoneFormatado.length >= 10) {
            const ddd = telefoneFormatado.substr(0, 2);
            const parte1 = telefoneFormatado.substr(2, 4);
            const parte2 = telefoneFormatado.substr(6, 4);
            return `(${ddd}) ${parte1}-${parte2}`;
        }
        return telefoneFormatado;
    };

    const handleCEPChange = (event) => {
        const cepDigitado = event.target.value;
        setCep(formatarCEP(cepDigitado));
    };

    const handleTelefoneChange = (event) => {
        const telefoneDigitado = event.target.value;
        setTelefone(formatarTelefone(telefoneDigitado));
    };

    useEffect(() => {
        if (cep.length === 9) {
            buscarEndereco();
        } else {
            setExibirEndereco(false);
            setRua('');
            setBairro('');
            setEstado('');
        }
    }, [cep]);

    const buscarEndereco = async () => {
        try {
          const response = await axios.get(`https://brasilapi.com.br/api/cep/v1/${cep}`);
          const { street, neighborhood, state, city } = response.data;
      
          setRua(street);
          setBairro(neighborhood);
          setEstado(state);
          setCidade(city);
      
          setExibirEndereco(true);
        } catch (error) {
          console.error('Erro ao obter dados do CEP:', error);
        }
      };
      

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        switch (name) {
            case "name":
                setNome(value);
                break;
            case "middlename":
                setSobrenome(value);
                break;
            case "email":
                setEmail(value);
                break;
            case "phone":
                setTelefone(value);
                break;
            case "number":
                setNumero(value);
                break;
            default:
                break;
        }
    };

    const validarCampos = () => {
        const errors = [];

        if (nome.trim() === '') {
            errors.push('O campo Nome é obrigatório.');
        } else if (nome.includes(' ')) {
            errors.push('O campo Nome não deve conter espaços.');
        }

        if (sobrenome.trim() === '') {
            errors.push('O campo Sobrenome é obrigatório.');
        } else if (sobrenome.includes(' ')) {
            errors.push('O campo Sobrenome não deve conter espaços.');
        }

        if (email.trim() === '') {
            errors.push('O campo Email é obrigatório.');
        }

        if (telefone.trim() === '') {
            errors.push('O campo Telefone é obrigatório.');
        } else if (!telefone.match(/^\(\d{2}\) \d{4}-\d{4}$/)) {
            errors.push('O campo Telefone deve estar no formato (99) 9999-9999.');
        }

        if (cep.trim() === '') {
            errors.push('O campo CEP é obrigatório.');
        }

        if (numero.trim() === '') {
            errors.push('O campo Número é obrigatório.');
        }

        return errors;
    };

    const handleCadastro = (event) => {
        event.preventDefault();

        const errors = validarCampos();

        if (errors.length === 0) {
            const usuario = {
                id: uuidv4(),
                nome: nome.trim(),
                sobrenome: sobrenome.trim(),
                email: email.trim(),
                telefone: telefone.trim(),
                cep: cep.trim(),
                numero: numero.trim(),
                rua: rua.trim(),
                bairro: bairro.trim(),
                estado: estado.trim(),
                cidade: cidade.trim(),
            };

            onCadastroUsuario(usuario);

            toast.success('Cadastro realizado com sucesso!');
        } else {
            errors.forEach((error) => {
                toast.error(error);
            });
        }
    };



    return (
        <div className="cadastro-tela">
            <ToastContainer />
            <div className="cadastro-container">
                <h1>Cadastrar usuário</h1>
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
                        <input type="tel" name="phone" placeholder="Telefone" value={telefone} onChange={handleTelefoneChange} />
                    </div>
                    <div className="formas">
                        <p>CEP</p>
                        <input type="text" name="cep" placeholder="CEP" value={cep} onChange={handleCEPChange} />
                    </div>
                    <div className="formas">
                        <p>Habilidades</p>
                        <textarea placeholder="Habilidades ex: Html, css e javascript"></textarea>
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
                            <input type="text" name="middlename" placeholder="Rua" value={rua} readOnly />
                        </div>
                        <div className="formas">
                            <p>Bairro</p>
                            <input type="text" name="middlename" placeholder="Bairro" value={bairro} readOnly />
                        </div>
                        <div className="formas">
                            <p>Estado</p>
                            <input type="text" name="middlename" placeholder="Estado" value={estado} readOnly />
                        </div>
                        <div className="botoes">
                            <button className="cadastrar" onClick={handleCadastro}>Cadastrar</button>
                            <button className="voltar">Voltar</button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
}

export default CadastroUsuario;