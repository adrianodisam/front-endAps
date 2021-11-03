import React from 'react';

export const GlobalContext = React.createContext();
export const GlobalStorage = ({ children }) => {
  const [dados, setDados] = React.useState('');
  async function listar() {
    const dados = await fetch('http://localhost:8080/api/denuncias');
    const json = await dados.json();
    if (json != '') {
      setDados(json);
    }
  }
  React.useEffect(() => {
    listar();
  }, []);
  return (
    <GlobalContext.Provider value={{ dados, setDados }}>
      {children}
    </GlobalContext.Provider>
  );
};
