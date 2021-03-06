import React from 'react';
import styles from './index.css';
import Geospatial from 'components/charts/geospatial.js';

class Start extends React.Component {
  render () {
    return (
      <div className='main'>
        <style scoped type='text/css'>{styles}</style>
        <h2>Geospatial</h2>
        <Geospatial />
      </div>
    );
  }
}

export default Start;
