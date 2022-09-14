const arr = [1, 2, 3, 4];

arr.map((item) => {
  console.log(item);
});

Array.prototype.myMap = function (callback) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    const value = callback(this[i], i, this);
    if (value) {
      result[i] = value;
    }
  }
  return result;
};

const result = arr.myMap((item) => console.log(item * 2));
console.log({ result });
