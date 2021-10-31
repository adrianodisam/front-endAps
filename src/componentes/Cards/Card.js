import React from 'react';
import { MapsSvg } from '../svg/MapsSvg';
import styles from './Card.module.css';

const Card = () => {
  const [denuncia, setDenuncia] = React.useState(null);
  function listar() {
    fetch('http://localhost:8080/api/denuncias')
      .then((denuncias) => denuncias.json())
      .then((json) => setDenuncia(json));
  }
  React.useEffect(() => {
    listar();
  }, []);
  console.log(denuncia);
  function deletar(id) {
    fetch(`http://localhost:8080/api/denuncia/${id}`, {
      method: 'DELETE',
    }).then((response) => {
      if (response != null) listar();
    });
  }
  if (denuncia === null) return <p>Nada até o momento</p>;
  return (
    <div className={styles.Card}>
      {denuncia.map(
        ({ id, nome, email, rua, problema, cidade, descricao }, index) => (
          <div key={id} className="card border-primary m-3">
            <div className="card-header">
              {nome}
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
              <p className="card-text"></p>
            </div>
            <button className="btn btn-outline-danger">Editar</button>
            <button
              className="btn btn-outline-success"
              onClick={() => deletar(id)}
            >
              Deletar
            </button>
          </div>
        ),
      )}
    </div>
  );
};

export default Card;
