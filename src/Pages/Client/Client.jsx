import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './Client.css';

function Client() {

const [values, setValues] = useState({
  nome: "",
  email: "",
  cidade: "",
});



const [ submitted, setSubmitted] = useState(false);

const handleNomeInputChange = (event) =>{
  setValues({...values, nome: event.target.value})
}

const handleEmailInputChange = (event) =>{
  setValues({...values, email: event.target.value})
}

const handleCidadeInputChange = (event) =>{
  setValues({...values, cidade: event.target.value})
}

const handleSubmit = (event) => {
  event.preventDefault();
  setSubmitted(true);
  const submitArray = [];
  submitArray.map((value) => {
    submitArray.push(values)
  })
  console.log(submitArray.data);
}

  return (
    <main>
      <h1>Cadastro de cliente</h1>
      <h5>Informe os dados</h5>
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <input onChange={handleNomeInputChange} value={values.nome} className="input" placeholder="Nome" name="nome"/>

          <input onChange={handleEmailInputChange} value={values.email} className="input" placeholder="email" name="email" />

          <input onChange={handleCidadeInputChange} value={values.cidade} className="input" placeholder="Cidade" name="cidade" />

          <input className="submit" type="submit" value="Enviar"  />
          {submitted ? <div className="submitted"><p>Cadastro enviado!</p></div> : null}
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