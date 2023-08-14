import React, { Component } from 'react';

interface CounterState {
  count: number;
}

interface CounterProps {
  testId?: string;
}

class Counter extends Component<CounterProps, CounterState> {
  state: CounterState = {
    count: 0,
  };

  handleIncrement = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    const { testId } = this.props;
    const { count } = this.state;

    return (
      <div>
        <button onClick={this.handleIncrement}>Increment</button>
        <span data-testid={testId || 'counter-value'}>Counter: {count}</span>
      </div>
    );
  }
}

export default Counter;
