import React from 'react';
import Style from './Form.module.css';
const formFilds = [
  {
    id: 'Nome',
    label: 'Nome',
    type: 'text',
  },
  {
    id: 'Email',
    label: 'Email',
    type: 'email',
  },
  {
    id: 'Cidade',
    label: 'Cidade',
    type: 'text',
  },
  {
    id: 'Rua',
    label: 'Rua',
    type: 'text',
  },
  {
    id: 'Problema',
    label: 'Problema',
    type: 'text',
  },
  {
    id: 'Descrição',
    label: 'Descrição',
    type: 'textarea',
  },
];

export const Form = () => {
  const [form, setForm] = React.useState({
    Cidade: '',
    Rua: '',
    Problema: '',
  });
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
      {response && response.ok && <p>Denúncia enviada</p>}
      <button>Enviar</button>
    </form>
  );
};
