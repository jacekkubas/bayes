import React from 'react';

class Select extends React.Component {
  state = { 
    data: this.props.data
  }

  render() { 
    return ( 
      <select onChange={this.props.handleChange} default="series">
        <option value="all">Series</option>
        {this.state.data.map(element => {
          return <option key={element.id} value={element.id}>{element.name}</option>
        })}
      </select>
     );
  }
}
 
export default Select;