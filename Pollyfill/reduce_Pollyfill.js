const arr = [1, 2, 3];
arr.reduce((acc, curr) => acc + curr, 0);

Array.prototype.myReduce = function (callback, initialValue) {
  let acc = "";

  for (let i = 0; i < this.length; i++) {
    acc = acc ? callback(acc, this[i], i, this) : this[i];
  }
  return acc;
};

const result = arr.myReduce((acc, curr) => acc + curr);
console.log(result);
