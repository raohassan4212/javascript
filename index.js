// let array = [2, 5, 1, 4, 3];

// let x = array.sort();

// console.log(x);

// let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let y = array2.reverse();

// console.log(y);

// let array3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let a = array3.map((val) => {
//   return val + 1;
// });

// console.log(a);

let array4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let b = array4.filter((val) => {
  return val <= 5;
});

console.log(b);

let array5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let c = array5.find((val) => {
  return val > 5;
});

console.log(c);

let a1 = ["Rao ", "Salam "];
let a2 = ["Hassan", "Khan"];

let a3 = a1.concat(a2);
console.log(a3);

let arr7 = [1, 2, 3, 4, 5];

let sum = arr7.reduce((a, b) => a + b);
let maxVal = Math.max(...arr);
let minVal = Math.min(...arr);
console.log("Max ===>", maxVal);
console.log("Min ===>", minVal);
console.log((sum - maxVal) + ' ' + (sum - minVal));

let a0 = [17, 28, 30];
let b0 = [99, 16, 8];

let Alice = 0;
let Bob = 0;

for (var i = 0; i < a.length; i++) {
  if (a[i] > b[i]) {
    Alice += 1;
    console.log("Alice");
  }
}

for (var i = 0; i < a.length; i++) {
  if (a[i] < b[i]) {
    Bob += 1;
    console.log("Bob");
  }
}

console.log(Alice, Bob);

let matrixs = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [3, 4, 5, 6, 7];

let intersections = [];

for (var i = 0; i < arr1.length; i++) {
  for (var j = 0; j < arr2.length; j++) {
    if (arr1[i] === arr2[j]) {
      intersection.push(arr1[i]);
    }
  }
}

console.log(intersection);

let intersection = arr1.filter((val) => {
  return arr2.includes(val);
});

console.log(intersection);

let union = [...new Set([...arr1, ...arr2])];
console.log(union);

let obj = {
  name: "Hassan",
};

let obj2 = Object.assign({}, obj);
obj2.name = "Kumail";

console.log(obj);

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let flat = matrix.flat();
console.log(flat);

let arr3 = [1, 1, 0, -1, -1];

let len = arr.length;
let positive = 0;
let negative = 0;
let zero = 0;

for (var i = 0; i < len; i++) {
  // console.log(-1 === Math.sign(arr[i]))
  console.log(i);
  if (1 === Math.sign(arr[i])) {
    positive += 1;
  }
  if (-1 === Math.sign(arr[i])) {
    negative += 1;
  }
  if (0 === Math.sign(arr[i])) {
    zero += 1;
  }
}

let postiveRatio = (positive / len).toFixed(6);
let negativeRatio = (negative / len).toFixed(6);
let zeroRatio = (zero / len).toFixed(6);

// console.log(postiveRatio);
// console.log(negativeRatio);
// console.log(zeroRatio);

// let arr2 = 4;

// for (var i=1; i<=arr; i++) {
//   console.log(("#").repeat(i).padStart(arr,"1"))
// }

let arr = [1, 2, 3, 4];

let max = Math.max(...arr);

console.log(max);
