import React from 'react';
import { ReactComponent as Close } from '../../assets/img/close.svg';

class Modal extends React.Component {
  state = {
    isClosed: false
  }

  handleClose = () => {
    this.setState({ isClosed: true });

    setTimeout(() => {
      this.props.closeModal();
    }, 400)
  }

  render() {
    const { name, date_start, date_end, tournamentName, tournamentCity, tournamentDate } = this.props;

    return (
      <aside className={this.state.isClosed ? 'modal modal--closed' : 'modal'}>
        <div className="modal__box">
          <button className="modal__close" onClick={this.handleClose}>
            <Close />
          </button>
          <div className="modal__content">
            <h2 className="modal__heading">{tournamentName} - <span className="modal__city">{tournamentCity}</span></h2>
            <div className="modal__date">{tournamentDate}</div>
            <div className="modal__text"><strong>Series:</strong> <span>{name}</span></div>
            <div className="modal__text"><strong>Series start date:</strong> <span>{date_start}</span></div>
            <div className="modal__text"><strong>Series end date:</strong> <span>{date_end}</span></div>
          </div>
        </div>
      </aside>
    )
  }
}

export default Modal;