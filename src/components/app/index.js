import React from 'react';
import data from '../../data.json';
import ListItem from '../listItem/';
import Modal from '../modal/';
import Button from '../button/';
import Select from '../select/'

class App extends React.Component {
  state = {
    tourmaments: data,
    selectData: data.map(item => item.series).filter(
      (elem, index, self) =>
        index === self.findIndex((t) => (
          t.id === elem.id
        ))
    ),
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
    const item = this.state.tourmaments.find(el => el.id === id);

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
      tourmaments: this.state.tourmaments.slice().sort((a, b) => (a.date_start > b.date_start) ? 1 : -1)
    })
  }

  sortByDateEnd = () => {
    this.setState({
      tourmaments: this.state.tourmaments.slice().sort((a, b) => (a.date_start < b.date_start) ? 1 : -1)
    })
  }

  sortBySeries = (e) => {
    if (e.target.value === 'all') {
      this.setState({ tourmaments: data })
      return;
    }

    this.setState({
      tourmaments: data.filter((item) => parseInt(item.series.id) === parseInt(e.target.value) ? true : false)
    })
  }

  render() {
    const { tourmaments, selectData, isModalShown, modalProps } = this.state;

    return (
      <div className="app" >
        <div className="app__wrapper">
          <h1 className="app__heading">Tournament List</h1>
          <div className="app__btns">
            <Button handleClick={this.sortByDateStart} text="start date" />
            <Button handleClick={this.sortByDateEnd} text="end date" />
            <Select data={selectData} handleChange={this.sortBySeries} />
          </div>
          <div className="app__list">
            {tourmaments.map(item => {
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
