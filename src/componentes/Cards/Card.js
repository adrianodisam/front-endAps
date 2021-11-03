import React from 'react';
import { MapsSvg } from '../svg/MapsSvg';
import styles from './Card.module.css';
import { Redirect } from 'react-router';
import { GlobalContext } from '../GlobalContext/GlobalContext';
import { Spinners } from '../formulario/Spinners';
const Card = () => {
  const [denuncia, setDenuncia] = React.useState(null);
  const [remover, setRemover] = React.useState(null);
  const { setDados } = React.useContext(GlobalContext);
  const [carregando, setCarregando] = React.useState(false);

  async function listar() {
    const dados = await fetch('http://localhost:8080/api/denuncias');
    const json = await dados.json();
    setDenuncia(json);
    setDados(json);
    if (json == null) {
      setCarregando(!carregando);
    }
  }

  React.useEffect(() => {
    listar();
  }, []);
  React.useEffect(() => {
    listar();
  }, [remover]);

  function deletar(id) {
    fetch(`http://localhost:8080/api/denuncia/${id}`, {
      method: 'DELETE',
    }).then((response) => setRemover(response));
  }
  if (denuncia === null)
    return (
      <h1>
        Aguardando novas denúncias
        <Spinners />
      </h1>
    );

  return (
    <div className={styles.Card}>
      {denuncia.map(
        ({ id, nome, email, rua, problema, cidade, descricao }, index) => (
          <div key={id} className="card  m-3 ">
            <div className="card-header">
              Reportado por : {nome}
              <p>Problema N° {index + 1}</p>
              <p>
                Cidade: {cidade}
                <MapsSvg />
              </p>
              <p>Rua : {rua}</p>
            </div>
            <div className="card-body text-primary">
              <h5 className="card-title">{problema}</h5>
              <p className="card-text">{descricao}</p>
            </div>

            <button
              className="btn btn-outline-success"
              onClick={() => deletar(id)}
            >
              Eu vou resolver
            </button>
            {remover && remover.ok && <Redirect to="/Agradecimento" />}
          </div>
        ),
      )}
    </div>
  );
};

export default Card;
