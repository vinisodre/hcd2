import React from 'react';
import {Link} from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <main>
      <h1>Bem-Vindo à área de Cadastro</h1>
      <h5>Nesta página você pode cadastrar clientes e produtos.</h5>
      <div className="btnDiv">
        <Link to="/client" className="btn">Cliente</Link>
        <Link to="/product" className="btn">Produto</Link>
      </div>
    </main>
  );
}

export default Home;