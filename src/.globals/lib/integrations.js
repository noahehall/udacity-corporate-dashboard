import sorttable from './thirdparty/sorttable.js';
import _ from 'lodash';

const integrations = {
  _,
  sorttable,
  rollbar (type = 'reportMessage', env = 'client') {
    if (typeof XMLHttpRequest !== undefined) {

      if (!this.rb) {
        this.rb = require('rollbar');
        this.rb.init(appConsts.rollbarKeyClient);
      }

      if (this.rb[type]) return this.rb[type];
    }

    return (f) => {null};
  },
}

export default integrations;
