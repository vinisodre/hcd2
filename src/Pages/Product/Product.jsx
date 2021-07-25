import React from 'react';
import './Product.css';
import {Link} from 'react-router-dom';

function Product() {
  return (
    <main>
      <h1>Cadastro de Produto</h1>
      <h5>Informe os dados do produto</h5>
      <div className="btnDiv">
        <form>
          <input className="input" type="text" placeholder="Nome" />
          <input className="input" type="email" placeholder="email" />
          <input className="input" type="number" placeholder="Quantidade" />
          <input className="input" type="file" name="imagem" />
          <input className="submit" type="submit" value="Enviar" />
        </form>
        <div className="control">
        <Link to="/" className="btn">Voltar</Link>
        <Link to="/" className="btn">Ver Todos</Link>
      </div>
      </div>
    </main>
  );
}

export default Product;