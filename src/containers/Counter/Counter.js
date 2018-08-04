import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

import { increment, decrement, add, subtract, storeResult, deleteResult } from '../../store/actions/actions';

class Counter extends Component {
    state = {
        counter: 0
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubtractCounter}  />
                <hr />
                <button onClick={() => this.props.toStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                  {this.props.storedResults.map( storedResult => {
                    return <li onClick={() => this.props.toDeleteResult(storedResult.id)} key={storedResult.id}>{storedResult.value}</li>
                  })}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
  return {
    ctr: state.ctr.counter,
    storedResults: state.res.results
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch(increment()),
    onDecrementCounter: () => dispatch(decrement()),
    onAddCounter: () => dispatch(add(5)),
    onSubtractCounter: () => dispatch(subtract(5)),
    toStoreResult: (result) => dispatch(storeResult(result)),
    toDeleteResult: (id) => dispatch(deleteResult(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
