module.exports = function reverse (n) {
    const arr = n.toString().split('');
  arr.forEach(function(item, index, array) {
    if (item === '-') {
      arr.splice(index, 1)

  }
})
return Number(arr.reverse().join(''));
}