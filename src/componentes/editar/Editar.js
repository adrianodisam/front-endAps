import React from 'react';
import Style from './Editar.module.css';
import { Link } from 'react-router-dom';
import Botao from '../Menu/Botao';
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

export const Editar = () => {
  let [editar, setEditar] = React.useState(null);
  React.useEffect(() => {
    function configObjeto(json) {
      const index = json[0];
      setEditar(index);
    }
    fetch('http://localhost:8080/api/denuncias')
      .then((resolve) => resolve.json())
      .then((json) => configObjeto(json));
  }, []);

  function handleChange({ target }) {
    const { id, value } = target;
    setEditar({ ...editar, [id]: value });
  }

  if (editar === null) return null;
  return (
    <>
      <Link to="/">
        <Botao nome="Home" />
      </Link>
      <form className={Style.form}>
        {formFilds.map(({ id, label, type }) => (
          <div key={id}>
            <label className={Style.formLabel} htmlFor={id}>
              {label}
            </label>

            <input
              className={Style.inputForm}
              type={type}
              id={id}
              value={editar[id]}
              onChange={handleChange}
            />
          </div>
        ))}
        <button>Editar</button>
      </form>
    </>
  );
};
