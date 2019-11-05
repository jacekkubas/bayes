import React from 'react';

const ListItem = ({ id, name, country, city, date_start, date_end, handleClick }) => {
  return (
    <li className="list-item" onClick={() => { handleClick(id) }}>
      <div>
        <div className="list-item__date">{date_start} - {date_end}</div>
        <div className="list-item__name">{name}</div>
        <div className="list-item__place">{city}, {country}</div>
      </div>
      <div className="list-item__more">See more</div>
    </li>
  );
}

export default ListItem;