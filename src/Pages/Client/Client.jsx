import React from 'react';
import {Link} from 'react-router-dom';
import './Client.css';

function Client() {
  return (
    <main>
      <h1>Cadastro de cliente</h1>
      <h5>Informe os dados</h5>
      <div className="formContainer">
        <form>
          <input className="input" type="text" placeholder="Nome" />
          <input className="input" type="email" placeholder="email" />
          <input className="input" type="text" placeholder="Endereço" />
          <input className="input" type="Telefone" placeholder="Telefone" pattern="[0-9]{2}-[0-9]{5}-[0-9]{4}" />
          <input className="submit" type="submit" value="Enviar" />
        </form>
      </div>
      <div className="control">
        <Link to="/" className="btn">Voltar</Link>
        <Link to="/" className="btn">Ver Todos</Link>
      </div>
    </main>
  );
}

export default Client;