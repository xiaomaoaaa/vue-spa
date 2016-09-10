'use strict';

var name = 'zach';

while (true) {
  var _name = 'obama';
  console.log(_name);
  break;
}

console.log(name);

var a = [];

var _loop = function _loop(i) {
  a[i] = function () {
    console.log(i);
  };
};

for (var i = 0; i < 10; i++) {
  _loop(i);
}
a[6](); // 6