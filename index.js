var shimbol = typeof Symbol === 'function' ?
  Symbol :
  (function (uid) {
    return function () {
      return '__' + uid--;
    };
  }(Date.now() * Math.random()));
