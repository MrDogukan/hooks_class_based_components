import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: props.count || 0,
    };
    this.handleInc = this.handleInc.bind(this);
    this.handleDec = this.handleDec.bind(this);
  }

  handleInc() {
    this.setState({
      count: this.state.count + 1,
    });
  }
  handleDec() {
    this.setState({
      count: this.state.count - 1,
    });
  }
  tozero = () => {
    this.setState({
      count: 0,
    });
  };

  render() {
    return (
      <div>
        <h1 className="dispaly-4 mt-4">
          CLASS BASED COUNT : {this.state.count}
        </h1>
        <button onClick={this.handleInc} className="btn btn-dark">
          Arttır
        </button>
        <button onClick={this.handleDec} className="btn btn-success">
          Azalt
        </button>
        <button onClick={this.tozero} className="btn btn-danger">
          Sıfırla
        </button>
      </div>
    );
  }
}

export default Counter;
