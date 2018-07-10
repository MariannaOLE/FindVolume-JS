function convertToInteger(str) {
return parseInt(str, 2);
}

convertToInteger("10011");


function checkEqual(a, b) {
  return a==b ? true:false;
}

checkEqual(1, 2);



function checkSign(num) {
 return (num === 0)? "zero":(num < 0)? "negative":"positive";
}

checkSign(10);