import { AiOutlinePoweroff } from 'react-icons/ai';
import './home.css';

function Home({ onLogout, user }) {
    return (
      <div className="home-container">
        <div className="menu-cabecalho">
          <div>
            <h2>Bagaggio</h2>
          </div>
          <div className='profile'>
            <div>
              <button className='botao-icone' onClick={onLogout}>
                <AiOutlinePoweroff className='icone' />
              </button>
            </div>
            <div className='user-profile'>
              <h3>{user.name}</h3>
              <h4>Software Developer</h4>
            </div>
            <div className='user-profile-pic'>
              <img src={user.avatar_url} alt={user.name} />
            </div>
          </div>
        </div>
        <div className="menu-botoes">
          <button className='active'>Usuários</button>
          <button className=''>Cadastrar usuário</button>
        </div>
        <div className="tela">
          <div className='menu-usuarios'>
            <h1>Não há usuários Cadastrados</h1>
          </div>
        </div>
      </div>
    );
  }
  
  export default Home;
  