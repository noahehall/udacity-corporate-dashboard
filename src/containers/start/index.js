import React from 'react';
import styles from './index.css';
import Idbstore from 'serviceworkers/idb/idb';
import Examples from 'components/charts/examples.js';

class Start extends React.Component {
  componentDidMount () {
    if (Idbstore) {
      const db = new Idbstore();
      appFuncs.console()('Idbstore is true!');
      appFuncs.console('dir')(db);
    } else appFuncs.console()('Idb store is false :(');
  }

  render () {
    return (
      <div className='main'>
        <style scoped type='text/css'>{styles}</style>
        <h2>Lets get started!</h2>
        <Examples />
      </div>
    );
  }
}

export default Start;
