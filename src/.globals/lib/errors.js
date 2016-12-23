import utility from './utility.js';

const errors = {
  logError ({
    msg = '',
    arr = [],
    obj = {},
    err = null,
  }) {
    if (msg) utility.console('error')(msg);
    if (arr.length) utility.console('dir', true)(arr);
    if (!utility._.isEmpty(obj)) utility.console('dir', true)(obj);
    if (err) utility.console('dir', true)(err);
  }
}


export default errors;
