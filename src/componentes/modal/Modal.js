import React from 'react';
import Input from '../form/Input';
import Select from '../form/Select';
import Botao from '../Menu/Botao';
import Style from './modal.module.css';

const Modal = () => {
  return (
    <div className={Style.modal}>
      <Input label="Nome " placeholder="paulo" />
      <Input label="Email " placeholder="@Gamil.com" />
      <Input label="Cidade " placeholder="São paulo" />
      <Input label="Rua " placeholder="tupi" />
      <Select />
      <Botao nome="enviar"></Botao>
    </div>
  );
};

export default Modal;
