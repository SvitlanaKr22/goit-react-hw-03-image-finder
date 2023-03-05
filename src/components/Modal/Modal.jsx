// export default Modal;
import { Overlay, ModalWin } from './Modal.styled';
import { Component } from 'react';
//import { createPortal } from 'react-dom';

//const modalRoot = document.querySelector('#root-modal');

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = evt => {
    if (evt.code === 'Escape') {
      this.props.onClose();
      console.log('closeeeee');
      console.log(this.props.ger);
    }
  };

  handleBackDropClick = evt => {
    if (evt.target === evt.currentTarget) this.props.onClose();
  };

  render() {
    // return createPortal(
    //   <div className={css.modal__backDrop} onClick={this.handleBackDropClick}>
    //     <div className={css.modal__content}>{this.props.children}</div>
    //   </div>,
    //   modalRoot
    // );
    return (
      <Overlay onClick={this.handleBackDropClick}>
        <ModalWin>
          <img src={this.props.img} alt={this.props.alt} />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit assumenda minima temporibus eos, qui unde atque eum
            ipsa mollitia quod quia fugit quaerat quos officia, corrupti
            molestiae sint asperiores perspiciatis. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Veniam impedit veritatis nulla
            praesentium eligendi eveniet? Provident reprehenderit atque possimus
            aperiam ab, incidunt saepe tempora, voluptatibus veritatis fugiat
            sequi, corrupti earum.
          </p>
        </ModalWin>
      </Overlay>
    );
  }
}
