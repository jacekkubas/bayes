import React from 'react';
import data from '../../data.json';
import ListItem from '../listItem/';
import Modal from '../modal/';
import Button from '../button/';

class App extends React.Component {
  state = {
    data: data,
    filteredData: [],
    isModalShown: false,
    modalProps: {
      id: null,
      name: '',
      date_start: '',
      date_end: '',
      tournamentName: '',
      tournamentCity: ''
    }
  }

  openModal = (id) => {
    const item = this.state.data.find(el => el.id === id);

    this.setState({
      modalProps: {
        ...item.series,
        tournamentName: item.name,
        tournamentCity: item.city,
        tournamentDate: `${this.formatDate(item.date_start)} - ${this.formatDate(item.date_end)}`
      },
      isModalShown: true
    })
  }

  closeModal = () => {
    this.setState({ isModalShown: false })
  }

  formatDate = (date) => {
    const dateToFormat = new Date(date);
    const day = dateToFormat.getDate();
    const year = dateToFormat.getFullYear();
    const month = dateToFormat.toLocaleString('de-de', { month: 'short' });

    return `${day} ${month} ${year}`;
  }

  sortByDateStart = () => {
    this.setState({
      data: this.state.data.slice().sort((a, b) => (a.date_start > b.date_start) ? 1 : -1)
    })
  }

  sortByDateEnd = () => {
    this.setState({
      data: this.state.data.slice().sort((a, b) => (a.date_start < b.date_start) ? 1 : -1)
    })
  }

  sortBySeries = () => {
    this.setState({
      data: this.state.data.slice().sort((a, b) => (a.series.id > b.series.id) ? 1 : -1)
    })
  }

  render() {
    const { data, isModalShown, modalProps } = this.state;

    return (
      <div className="app">
        <div className="app__wrapper">
          <h1 className="app__heading">Tournament List</h1>
          <div className="app__btns">
            <Button handleClick={this.sortByDateStart} text="start date" />
            <Button handleClick={this.sortByDateEnd} text="end date" />
            <Button handleClick={this.sortBySeries} text="series" />
          </div>
          <div className="app__list">
            {data.map(item => {
              return <ListItem {...item} key={item.id} date_start={this.formatDate(item.date_start)} date_end={this.formatDate(item.date_end)} handleClick={this.openModal} />
            })}
          </div>
        </div>
        {isModalShown &&
          <Modal {...modalProps} closeModal={this.closeModal} />}
      </div>
    );
  }
}

export default App;
