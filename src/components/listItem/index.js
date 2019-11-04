import React from 'react';

class ListItem extends React.Component {
  formatDate = (date) => {
    const dateToFormat = new Date(date);
    const day = dateToFormat.getDate();
    const year = dateToFormat.getFullYear();
    const month = dateToFormat.toLocaleString('de-de', { month: 'short' });

    return `${day} ${month} ${year}`;
  }

  render() {
    const { id, name, country, city, date_start, date_end, handleClick } = this.props;

    return (
      <li className="list-item" onClick={() => { handleClick(id) }}>
        <div>
          <div className="list-item__date">{this.formatDate(date_start)} - {this.formatDate(date_end)}</div>
          <div className="list-item__name">{name}</div>
          <div className="list-item__place">{city}, {country}</div>
        </div>
        <div className="list-item__more">See more</div>
      </li>
    );
  }
}

export default ListItem;