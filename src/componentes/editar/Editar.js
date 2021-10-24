import React from 'react';

export const Editar = () => {
  let [editar, setEditar] = React.useState(null);
  React.useEffect(() => {
    function configObjeto(json) {
      const index = json[0];
      setEditar(index);
      console.log(editar);
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
    <div>
      <form>
        <label htmlFor="">Nome</label>
        <input
          id="Nome"
          type="text"
          value={editar.Nome}
          onChange={handleChange}
        />
        <label htmlFor="">Email</label>
        <input
          id="Email"
          value={editar.Email}
          type="text"
          onChange={handleChange}
        />
      </form>
    </div>
  );
};
