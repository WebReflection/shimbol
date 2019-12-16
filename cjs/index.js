'use strict';
module.exports = typeof Symbol === 'function' ?
  Symbol :
  (function (uid) {
    return function () {
      return '__' + uid--;
    };
  }(new Date * Math.random()));
