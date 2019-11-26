var myStr = `that's a "quote"`;

// myStr = 123;
console.log(myStr);

var array = ['cat', 'mouse', 'dog'];

console.log(array.push('horse'));

if (array.length > 3) {
  console.log('array has more than 3 items');
} else {
  console.log('arary does not have more than 3 items');
}

// for (var index = 0; index < array.length; index++) {
//   console.log(`the value at index ${index} is ${array[index]}`);
// }

// for (var index in array) {
//   console.log(`index is ${index} with content ${array[index]}`);
// }


var person = {
  name: 'Bob',
  'hair-color': 'Brown',
  "eyes": 'Blue',
  key: 'this is a key'
};

console.log(person["hair-color"]);


// for (var key in person) {
//   console.log(`key is ${key}, with value ${person[key]}`);
// }

function sayHello(name) {
  console.log(`Hello ${name.toUpperCase()}`);

  return name.length;
}
console.log(sayHello('Bob'));