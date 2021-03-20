import React from 'react';
import Product from '../Product/Product';
import './Button.css';


function ShowHide(props) {
  return (
    <div>{props.show}</div>
  );
}

export default class Application extends React.Component {
  constructor(props) {
    super(props);
    this.state = { flag: false }
    this.toggleFlag = this.toggleFlag.bind(this);
  }

  componentDidUpdate() {
    this.state.flag ? alert("Component is open now") : alert("Component is close now");
  }

  toggleFlag() {
    this.setState(prevState => ({
      flag: !prevState.flag
    }));
  }



  render() {
    return (
      <div className='wrapper'>
        <button id="btn" onClick={this.toggleFlag}>
          {this.state.flag ? 'Closed' : 'Open'}
        </button>
        {this.state.flag ? <ShowHide show={<Product />} /> : null}
      </div>
    );
  }
}