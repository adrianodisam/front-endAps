import React from 'react';
import { Alerta } from '../svg/Alerta';
import { Edit } from '../svg/Edit';
import { MapsSvg } from '../svg/MapsSvg';
import Style from './ListaItem.module.css';

export const ListaItem = (props) => {
  return (
    <section className={Style.section}>
      <table class="table table-dark table-sm">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">nome</th>
            <th scope="col">email</th>
            <th scope="col">cidade</th>
            <th scope="col">rua</th>
            <th scope="col">problema</th>
            <th scope="col">descricao</th>
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
              <Alerta />
              <Edit />
              <MapsSvg />
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};
