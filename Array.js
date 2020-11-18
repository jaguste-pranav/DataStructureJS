//Store in Array
function randomNumber(min, max) 
{  
    return Math.floor(Math.random() * (max - min) + min); 
} 
var numbers = new Array();
for (var i = 0; i <10; i++) {
    num = randomNumber(100,1000);
    console.log(num);
    numbers[i]=num;
  }

//Find Second Max
  var secondMax = Get_SecondMax();
  function Get_SecondMax()
  { 
    var max = Math.max.apply(null, numbers); // get the max of the array
    numbers.splice(numbers.indexOf(max), 1); // remove max from the array
    console.log("Second Max number is (without sorting)"+ Math.max.apply(null, numbers))
    return Math.max.apply(null, numbers); // get the 2nd max
};

// Find Second Min
var secondMin = Get_SecondMin();
  function Get_SecondMin()
  { 
    var min = Math.min.apply(null, numbers); // get the min of the array
    numbers.splice(numbers.indexOf(min), 1); // remove min from the array
    console.log("Second Min number is (without sorting)"+ Math.min.apply(null, numbers))
    return Math.min.apply(null, numbers); // get the 2nd max
};

//using sort method
var sortNumbers = new Array();
for (var i = 0; i <10; i++) {
    num=randomNumber(100,1000);
    console.log(num);
    sortNumbers[i]=num;
  }
sortNumbers.sort();
console.log(sortNumbers);
console.log("Second Max number is (with sorting)"+sortNumbers[1]);
console.log("Second Min number is (with sorting)"+sortNumbers[sortNumbers.length-1]);