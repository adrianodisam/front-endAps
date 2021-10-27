import React from 'react';
import Style from './Form.module.css';
import { Redirect } from 'react-router-dom';
const formFilds = [
  {
    id: 'nome',
    label: 'nome',
    type: 'text',
  },
  {
    id: 'email',
    label: 'email',
    type: 'email',
  },
  {
    id: 'cidade',
    label: 'cidade',
    type: 'text',
  },
  {
    id: 'rua',
    label: 'rua',
    type: 'text',
  },
  {
    id: 'problema',
    label: 'problema',
    type: 'text',
  },
  {
    id: 'descricao',
    label: 'Descrição',
    type: 'textarea',
  },
];

export const Form = () => {
  const [form, setForm] = React.useState({});
  const [response, setResponse] = React.useState(null);
  function handlechange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    fetch('http://localhost:8080/api/denuncia', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(form),
    }).then((response) => setResponse(response));
  }
  return (
    <form onSubmit={handleSubmit} className={Style.formForm}>
      {formFilds.map(({ id, label, type }) => (
        <div key={id}>
          <label className={Style.formLabel} htmlFor={id}>
            {label}
          </label>

          <input
            className={Style.inputForm}
            type={type}
            id={id}
            value={form[id]}
            onChange={handlechange}
          />
        </div>
      ))}
      {response && response.ok && <Redirect to="/Resolver" />}
      <button>Enviar</button>
    </form>
  );
};
