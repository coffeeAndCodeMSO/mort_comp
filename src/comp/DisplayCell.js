import React from 'react';
import { moneyize } from '../lib/formatting_helpers'

class DisplayCell extends React.Component {
  render(){
    const label = this.props.label;
    const unitLabel = this.props.unitLabel || ' ';
    const displayClass = this.props.displayClass || 'money-display'
    const formatFunction = this.props.formatFunction;
    const value = formatFunction ? formatFunction(this.props.value) : this.props.value;

    return (
      <div className="display-group">
        <div className="display-label">
          {label}
        </div>
        <div className="display-unit">
          {unitLabel}
        </div>
        <div className={displayClass}>
          {value}
        </div>
      </div>
    );
  }
}

export default DisplayCell;