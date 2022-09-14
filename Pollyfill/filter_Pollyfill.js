const arr = [1, 2, 3, 4, 5, 6];
// arr.filter((item) => console.log(item));

Array.prototype.myFilter = function (callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      result.push(this[i]);
    }
  }
  return result;
};

const result = arr.myFilter((item) => item > 4);
console.log(result);
