import React from 'react';
import data from '../../data.json';
import ListItem from '../listItem/';
import Modal from '../modal/';

class App extends React.Component {
  state = {
    data: data,
    isModalShown: false,
    modalProps: {
      id: null,
      name: '',
      date_start: '',
      date_end: '',
      parentName: ''
    }
  }

  openModal = (id) => {
    const item = this.state.data.find(el => el.id === id);

    this.setState({
      modalProps: { ...item.series, parentName: item.name },
      isModalShown: true
    })
  }

  closeModal = () => {
    this.setState({ isModalShown: false })
  }

  render() {
    const { data } = this.state;

    return (
      <div className="app">
        <div className="app__bg"></div>
        <div className="app__wrapper">
          <h1 className="app__heading">Tournament List</h1>
          <div className="app__list">
            {data.map(item => {
              return <ListItem {...item} key={item.id} handleClick={this.openModal} />
            })}
          </div>
        </div>
        {
          this.state.isModalShown &&
          <Modal {...this.state.modalProps} closeModal={this.closeModal} onKeyDown={this.handleKeyDown} />
        }
      </div>
    );
  }
}

export default App;
