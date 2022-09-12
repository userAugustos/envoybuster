import * as React from 'react';

import { IoMdClose } from "react-icons/io";
import { ModalInterface } from '../../utils/moviesTypes';

const Modal = ({show, onClose, children }: ModalInterface) => {

  if (!show) {
    return null;
  }

  return (
    <div className={`modal center-flex ${show && "show"}`} onClick={onClose}>
    <button onClick={onClose} className='close-button button'>
      <IoMdClose className='red-svg' />
    </button>

    {children}
  </div>
  )
}

export default Modal;
