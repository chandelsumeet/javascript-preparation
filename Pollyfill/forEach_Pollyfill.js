const arr = [1, 2, 3, 4];

arr.forEach((item) => {
  return item * 2;
});

Array.prototype.myForEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    const value = callback(this[i], i, this);
    if (value) {
      this[i] = value;
    }
  }
};

arr.myForEach((item) => console.log(item * 2));
console.log(arr);
