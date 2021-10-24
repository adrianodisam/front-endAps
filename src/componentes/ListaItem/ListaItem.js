import React from 'react';
import { Alerta } from '../svg/Alerta';
import { Edit } from '../svg/Edit';
import { MapsSvg } from '../svg/MapsSvg';
import Style from './ListaItem.module.css';
import { Link } from 'react-router-dom';

export const ListaItem = (props) => {
  return (
    <section className={Style.section}>
      <table className="table table-dark table-sm">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nome</th>
            <th scope="col">Email</th>
            <th scope="col">Cidade</th>
            <th scope="col">Rua</th>
            <th scope="col">Problema</th>
            <th scope="col">Descricao</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ display: 'none' }}>{props.id}</td>
            <td>{props.index}</td>
            <td>{props.nome}</td>
            <td>{props.email}</td>
            <td>{props.problema}</td>
            <td>{props.cidade}</td>
            <td>{props.rua}</td>
            <td>{props.descricao}</td>
            <td>
              <Link to="/Editar">
                <Edit />
              </Link>
              <Alerta />

              <MapsSvg />
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};
