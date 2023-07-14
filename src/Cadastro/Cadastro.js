import React from "react";
import './cadastro.css';

function CadastroUsuario({ onVoltar }) {
    return (
        <div className="cadastro-tela">
            <div className="cadastro-container">
                <h1>Cadastrar usuário</h1>
                <button onClick={onVoltar}>Voltar</button>
            </div>
            <div className="flex">
                <form className="formulario">
                    <div className='formas'>
                        <p>Nome</p>
                        <input type="text" name="name" placeholder="Nome" value="" />
                    </div>
                    <div className='formas'>
                        <p>Sobrenome</p>
                        <input type="text" name="middlename" placeholder="Sobrenome" value="" />
                    </div>
                    <div className='formas'>
                        <p>Email</p>
                        <input type="email" name="email" placeholder="E-mail" value="" />
                    </div>
                    <div className='formas'>
                        <p>Telefone</p>
                        <input type="tel" name="phone" placeholder="Telefone" value="" />
                    </div>
                    <div className='formas'>
                        <p>CEP</p>
                        <input type="text" name="cep" placeholder="CEP" value="" />
                    </div>
                    <div className='formas'>
                        <p>Habilidades</p>
                        <textarea placeholder="Habilidades ex: Html, css e javascript"></textarea>
                    </div>
                </form>
                <form className="formulario">
                    <div className="formas">
                        <p>Número</p>
                        <input type="text" name="number" placeholder="N°" value=""></input>
                    </div>
                    <div className="formas">
                        <p>Rua</p>
                        <input type="text" name="middlename" placeholder="Rua" value="" />
                    </div>
                    <div className="formas">
                        <p>Bairro</p>
                        <input type="text" name="middlename" placeholder="Bairro" value="" />
                    </div>
                    <div className="formas">
                        <p>Estado</p>
                        <input type="text" name="middlename" placeholder="Estado" value="" />
                    </div>
                    <div className="botoes">
                        <button className="cadastrar">Cadastrar</button>
                        <button className="voltar">Voltar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CadastroUsuario;
