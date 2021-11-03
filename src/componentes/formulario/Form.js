import React from 'react';
import Style from './Form.module.css';
import { Redirect } from 'react-router-dom';
import { Input } from './Input';
import { Button } from './Button';
import { TextArea } from './TextArea';
import { Select } from './Select';

export const Form = () => {
  const [response, setResponse] = React.useState(null);
  const [nome, setNome] = React.useState('');
  const [rua, setRua] = React.useState('');
  const [cidade, setCidade] = React.useState('');
  const [descricao, setDescricao] = React.useState('');
  const [problema, setProblema] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
    fetch('http://localhost:8080/api/denuncia', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ nome, rua, cidade, descricao, problema }),
    }).then((response) => setResponse(response));
  }
  console.log(descricao);
  return (
    <form onSubmit={handleSubmit} className={Style.formForm}>
      <Input
        label="Nome"
        id="nome"
        name="nome"
        type="text"
        onChange={({ target }) => setNome(target.value)}
      />

      <Input
        label="Cidade"
        id="cidade"
        name="cidade"
        type="text"
        onChange={({ target }) => setCidade(target.value)}
      />
      <Input
        label="Rua"
        id="rua"
        name="rua"
        type="text"
        onChange={({ target }) => setRua(target.value)}
      />
      <Select
        onChange={({ target }) => setProblema(target.value)}
        name="problema"
      />
      <TextArea
        name="descricao"
        label="Descrição"
        onChange={({ target }) => setDescricao(target.value)}
      />

      {response && response.ok && <Redirect to="/Resolver" />}

      <Button className="menu">Enviar</Button>
    </form>
  );
};
