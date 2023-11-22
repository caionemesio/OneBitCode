"use strict";

function media() {
  for (var _len = arguments.length, media = new Array(_len), _key = 0; _key < _len; _key++) {
    media[_key] = arguments[_key];
  }
  return media.reduce(function (count, num) {
    return count + num;
  }, 0) / media.length;
}
console.log(media(3, 4, 5));
function mediaPonderada() {
  for (var _len2 = arguments.length, entries = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    entries[_key2] = arguments[_key2];
  }
  var sum = entries.reduce(function (accum, _ref) {
    var number = _ref.number,
      weight = _ref.weight;
    return accum + number * (weight !== null && weight !== void 0 ? weight : 1);
  }, 0);
  var weightSum = entries.reduce(function (accum, entry) {
    var _entry$weight;
    return accum + ((_entry$weight = entry.weight) !== null && _entry$weight !== void 0 ? _entry$weight : 1);
  }, 0);
  return sum / weightSum;
}
console.log("M\xE9dia ponderada: ".concat(mediaPonderada({
  number: 9,
  weight: 3
}, {
  number: 7
}, {
  number: 10
})));
var mode = function mode() {
  for (var _len3 = arguments.length, numbers = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    numbers[_key3] = arguments[_key3];
  }
  //[[n,qtd],[n,qrd]]
  var quantities = numbers.map(function (num) {
    return [num, numbers.filter(function (n) {
      return num === n;
    }).length];
  });
  quantities.sort(function (a, b) {
    return b[1] - a[1];
  });
  return quantities[0][0];
};
console.log(mode(1, 2, 2, 2, 1, 1, 4, 4, 2, 1, 5, 1, 1, 1, 1));
function mediana() {
  for (var _len4 = arguments.length, valores = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    valores[_key4] = arguments[_key4];
  }
  var orderedNumbers = [].concat(valores).sort(function (a, b) {
    return a - b;
  });
  var valorDoMeio = Math.floor(orderedNumbers.length / 2);
  if (orderedNumbers.length % 2 === 0) {
    var mediaSimples = (orderedNumbers[valorDoMeio - 1] + orderedNumbers[valorDoMeio]) / 2;
    return mediaSimples;
  } else {
    return orderedNumbers[valorDoMeio];
  }
}
console.log(mediana(1, 2, 3, 4, 5, 6));