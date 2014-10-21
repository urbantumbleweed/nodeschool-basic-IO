var input = process.argv;
var total = 0;


for(var i = 2, l = input.length; i < l; i++) {
  total += Number(input[i]);
};

console.log(total);