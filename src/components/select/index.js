import React from 'react';

class Select extends React.Component {
  state = {
    series: this.props.data
  }

  render() {
    return (
      <select className="select" onChange={this.props.handleChange} default="series">
        <option value="all">Choose serie...</option>
        {this.state.series.map(element => {
          return <option key={element.id} value={element.id}>{element.name}</option>
        })}
      </select>
    );
  }
}

export default Select;