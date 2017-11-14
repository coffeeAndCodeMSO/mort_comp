import React from 'react';
import { moneyize } from '../lib/formatting_helpers'

class InputCell extends React.Component {
  render(){
    const id = this.props.id;
    const label = this.props.label;
    const value = this.props.value;
    const unitLabel = this.props.unitLabel || '$';
    const min = this.props.min || 0;
    const step = this.props.step || 100;
    const onChange = this.props.onChange;

    return (
      <div className="input-group">
        <div className="input-label">{label}</div>
        <div className="input-unit">{unitLabel}</div>
        <input id={id} className='moneyInput'
          type='number'
          value={moneyize(value)}
          min={min}
          step={step}
          onChange={onChange}
        />
      </div>
    );
  }
}

export default InputCell;