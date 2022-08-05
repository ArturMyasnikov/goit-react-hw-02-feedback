import React, { Component } from 'react';
import s from './FeedbackOptions.module.css';

export default class FeedbackOptions extends Component {
  constructor({ options, onLeaveFeedback }) {
    super();
    this.onClick = onLeaveFeedback;
    this.btn = options.map(option => (
      <button
        type="button"
        key={option}
        className={s.btn}
        onClick={() => this.onClick(option)}
      >
        {option}
      </button>
    ));
  }
  render() {
    return <div className={s.container}>{this.btn}</div>;
  }
}
