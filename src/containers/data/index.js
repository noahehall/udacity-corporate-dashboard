import React from 'react';
import styles from './index.css';
import DataView from 'components/charts/dataview.js';

class Start extends React.Component {
  render () {
    return (
      <div className='main'>
        <style scoped type='text/css'>{styles}</style>
        <h2>Data</h2>
        <DataView />
      </div>
    );
  }
}

export default Start;
