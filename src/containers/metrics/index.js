import React from 'react';
import styles from './index.css';
import KeyMetrics from 'components/charts/keymetrics.js';

class Start extends React.Component {
  render () {
    return (
      <div className='main'>
        <style scoped type='text/css'>{styles}</style>
        <h2>Key Metrics</h2>
        <KeyMetrics />
      </div>
    );
  }
}

export default Start;
