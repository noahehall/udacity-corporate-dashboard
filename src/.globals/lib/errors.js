import utility from './utility.js';

const errors = {
  logError ({
    msg = '',
    arr = [],
    obj = {},
    err = null,
    loc = '',
  }) {
    if (msg) utility.console('error')(msg);
    if (err) utility.console('error')(err);
    if (loc) utility.console('error')(loc);
    if (arr.length) utility.console('dir', true)(arr);
    if (!utility._.isEmpty(obj)) utility.console('dir', true)(obj);
  }
}


export default errors;
