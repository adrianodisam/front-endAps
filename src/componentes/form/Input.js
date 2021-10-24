import React from 'react';

const Input = (props) => {
  const [nomes, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [cidade, setCidade] = React.useState('');
  const [ID, setID] = React.useState(null);

  React.useEffect(() => {
    setNome(localStorage.getItem('nome'));
    setEmail(localStorage.getItem('Email'));
    setCidade(localStorage.getItem('Cidade'));
    setID(localStorage.getItem('ID'));
  }, []);
  return (
    <div>
      <form>
        <label htmlFor="">Nome</label>
        <input type="text" onChange={(e) => e.target.value} />
        <label htmlFor="">Email</label>
        <input type="text" o onChange={(e) => e.target.value} />
        <label htmlFor="">Cidade</label>
        <input type="text" onChange={(e) => e.target.value} />
        <button type="submit">atualizar</button>
      </form>
    </div>
  );
};

export default Input;
