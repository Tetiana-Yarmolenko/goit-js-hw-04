// const fnA = function (message, callback) {
//   console.log(message);

//   console.log(callback);
//   callback(100);
// };

// const fnB = function (number) {
//   console.log("Это лог при вызове fnB", number);
// };

// fnA("qweqwe", fnB);

// const add = function (array, callback) {
//   console.log(callback);
//   callback([1, 5, 7]);
// };

// const res = function (number) {
//   console.log("Визов res", number);
// };
// add(2, res);
// console.log(add);

// const doMath = function (a, b, callback) {
//   const result = callback(a, b);

//   console.log(result);
// };

// doMath(2, 3, function (x, y) {
//   return x + y;
// });

// doMath(10, 8, function (x, y) {
//   return x - y;
// });

// const mult = function (a, b, callback) {
//   const result = callback(a, b);
//   console.log(result);
// };

// mult(2, 3, function (c, d) {
//   return c * d;
// });

const add = function (a, callback) {
  const result = callback(a);
  console.log(result);
};

add([1, 3, 8], function (d) {
  const arrays = d;
  for (const array of arrays) {
    sum += array[i];
    return sum;
  }
});
