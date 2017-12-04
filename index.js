
console.log('hello');

var a = 'hello world';

console.log(a);

var b = ',green bottle';

var c = a + b;

console.log(c);
console.log(a + b);
var someOtherText = 'byebye';
var Text = someOtherText;
var myFirstObj = {
  attributeOne: 'hello',
  attributeTwo: 'byebye',
};

console.log(myFirstObj.attributeOne);
console.log(myFirstObj.attributeTwo);

var myFirstList = [10, 1, 3, 5];

console.log(myFirstList[0]);
console.log(myFirstList[2]);

var myFirstFunction = function(param_1, nonsense) {
  console.log('I am a parameter');
};
myFirstFunction('I am param 1!');
console.log();

var addition = function(a, b) {
  console.log(a + b);
};

addition('hello', ' byebye');

var heightInCM = 170;
var weightInKG = 70;

var sayHeightAndWeight = function() {
  console.log('I am ' + heightInCM + ' tall, and ' + weightInKG + ' heavy');
};

var person = {
  height: 170,
  weight: 52,
  speak: function(name) {
    console.log('My name is ' + name);
  },
};

console.log(person.height);
person.speak('Marianna');

function findVolume(width, height, length) {
  return width * height * length;
}

findVolume(10, 5, 3);

