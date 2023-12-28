

//1.a Print odd numbers in an array

//Anonymous Function

const odd1 = function(arr){
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]%2!==0){
        newArr.push(arr[i]);
         }
        }
return newArr;
}
console.log("Result with Anonymous function: ", odd1([1, 2, 3, 4, 5, 6, 87, 23])); 

//1.a  IIFE function

const odd2 = (function (arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
})([1, 2, 3, 4, 5, 6, 87, 23]);
console.log("Result with IIFE function: ", odd2); 



//  Convert all the strings to title caps in a string array
//Anonymous function
//1.b
const titleCaps = function (strArray) {
  const titleArr = [];

  for (let i = 0; i < strArray.length; i++) {
    const str = strArray[i];

    if (typeof str === "string") {
      titleArr.push(
        (function (inputStr) {
          let titleCaseStr = "";
          let capital = true;

          for (let j = 0; j < inputStr.length; j++) {
            const char = inputStr[j];

            if (
              capital &&
              ((char >= "A" && char <= "Z") || (char >= "a" && char <= "z"))
            ) {
              titleCaseStr += char.toUpperCase();
              capital = false;
            } else {
              titleCaseStr += char.toLowerCase();
              capital = char === " " || char === "-";
            }
          }

          return titleCaseStr;
        })(str)
      );
    } else {
      titleArr.push(str);
    }
  }

  return titleArr;
};

console.log(titleCaps(["hello world", "this is my task", "full stack developer"]));

//1.b IIFE function

const titleCaps2 = (function (strArray) {
  const titleArr = [];

  for (let i = 0; i < strArray.length; i++) {
    const str = strArray[i];

    if (typeof str === "string") {
      titleArr.push(
        (function (inputStr) {
          let titleCaseStr = "";
          let capital = true;

          for (let j = 0; j < inputStr.length; j++) {
            const char = inputStr[j];

            if (
              capital &&
              ((char >= "A" && char <= "Z") || (char >= "a" && char <= "z"))
            ) {
              titleCaseStr += char.toUpperCase();
              capital = false;
            } else {
              titleCaseStr += char.toLowerCase();
              capital = char === " " || char === "-";
            }
          }

          return titleCaseStr;
        })(str)
      );
    } else {
      titleArr.push(str);
    }
  }

  return titleArr;
})(["hello world", "this is my task", "full stack developer"]);

console.log(titleCaps2);





//1.c  Sum of all numbers in an array
// Anonymous function
const sum=function(arr){
    let num=0;
    for(let i=0;i<arr.length;i++){
        num+=arr[i]


}
return num;
}
console.log(sum([1,2,3,4,5]))

//1.c IIFE function

const sum2 = (function (arr) {
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    num += arr[i];
  }
  return num;
})([1, 2, 3, 4, 5]);
console.log(sum2)



//1.d Return all the prime numbers in an Array
//Anonymous function

const findPrime = function (arr) {
  const primeNum = [];

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];

    if (num > 1) {
        //Initially assume that given array has prime number
      let isPrime = true;

      for (let j = 2; j*j <=num; j++) {
        if (num % j === 0) {
          isPrime = false;
          break;
        }
      }

      if (isPrime) {
        primeNum.push(num);
      }
    }
  }

  return primeNum;
};

console.log(findPrime([1, 2, 3, 4, 5, 7, 11, 21, 81]));

// 1.d IIFE function

const findPrimes = (function (arr) {
  const primeNum = [];

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];

    if (num > 1) {
      //Initially assume that given array has prime number
      let isPrime = true;

      for (let j = 2; j * j <= num; j++) {
        if (num % j === 0) {
          isPrime = false;
          break;
        }
      }

      if (isPrime) {
        primeNum.push(num);
      }
    }
  }

  return primeNum;
})([1, 2, 3, 4, 5, 7, 11, 21, 81]);

console.log(findPrimes);


//1.e Return all palindromes in an array
//Anonymous function

const palindrome=function(arr){
    const result=[];
    for(let i=0;i<arr.length;i++){
        if(typeof arr[i]==="string"){
      let str=arr[i].toLowerCase();
      let lent=str.length;
      let isPalindrome=true;

for(let j=0;j<lent/2;j++){
    if(str[j]!==str[lent-1-j]){
        isPalindrome=false;
        break;
}
}
if (isPalindrome) {
  result.push(arr[i]);
}
}
}
return result;
}
console.log(palindrome(['dad','Malayalam','string','level']))

//1.e IIFE function

const palindrome2 = (function (arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "string") {
      let str = arr[i].toLowerCase();
      let lent = str.length;
      let isPalindrome = true;

      for (let j = 0; j < lent / 2; j++) {
        if (str[j] !== str[lent - 1 - j]) {
          isPalindrome = false;
          break;
        }
      }
      if (isPalindrome) {
        result.push(arr[i]);
      }
    }
  }
  return result;
})(["dad", "Malayalam", "string", "level"]);
console.log(palindrome2);


//1.f Return median of two sorted arrays of the same size.
//Anonymous function

const findMedian = function (nums1, nums2) {
  const mergedArray = [];
  let i = 0,
    j = 0;

  while (i < nums1.length || j < nums2.length) {
    if (i < nums1.length && (j === nums2.length || nums1[i] <= nums2[j])) {
      mergedArray.push(nums1[i]);
      i++;
    } else {
      mergedArray.push(nums2[j]);
      j++;
    }
  }
  const length = mergedArray.length;

  if (length % 2 === 0) {
    const midIndex1 = length / 2 - 1;
    const midIndex2 = length / 2;
    return (mergedArray[midIndex1] + mergedArray[midIndex2]) / 2;
  } else {
    const midIndex = Math.floor(length / 2);
    return mergedArray[midIndex];
  }
};

const nums1 = [1, 3];
const nums2 = [2, 4];

console.log(findMedian(nums1, nums2));

//1.f IIFE function

const findMedian2 = (function (num1, num2) {
  const mergedArray = [];
  let i = 0,
    j = 0;

  while (i < num1.length || j < num2.length) {
    if (i < num1.length && (j === num2.length || num1[i] <= num2[j])) {
      mergedArray.push(num1[i]);
      i++;
    } else {
      mergedArray.push(num2[j]);
      j++;
    }
  }
  const length = mergedArray.length;

  if (length % 2 === 0) {
    const midIndex1 = length / 2 - 1;
    const midIndex2 = length / 2;
    return (mergedArray[midIndex1] + mergedArray[midIndex2]) / 2;
  } else {
    const midIndex = Math.floor(length / 2);
    return mergedArray[midIndex];
  }
})([1,3], [2,4]);

// const num1 = [1, 3];
// const num2 = [2, 4];

console.log(findMedian2);


//1.g Remove duplicates from an array
//Anonymous Function

const findDuplicate = function(arr){
     const newArr=[];
     for(i=0;i<arr.length;i++){
      let Duplicate=false;

     for(j=0;j<newArr.length;j++){
      if(arr[i]===newArr[j]){
        Duplicate=true;
        break;
     }

     }
if(!Duplicate){
  newArr.push(arr[i]);
}

}
return newArr;
}
console.log(findDuplicate([1,2,2,3,4,4,5]));

//1.g IIFE function

const findDuplicates = (function (arr) {
  const newArr = [];
  for (i = 0; i < arr.length; i++) {
    let Duplicate = false;

    for (j = 0; j < newArr.length; j++) {
      if (arr[i] === newArr[j]) {
        Duplicate = true;
        break;
      }
    }
    if (!Duplicate) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
})([1, 2, 2, 3, 4, 4, 5]);
console.log(findDuplicates);


//1.h Rotate an array k times

//Anonymous function

const rotateArray = function (arr, k) {
  const n = arr.length;
  k = k % n;

  for (let i = 0; i < k; i++) {
    const temp = arr.pop();
    arr.unshift(temp);
  }

  return arr;
};

const originalArray = [1, 2, 3, 4, 5];
const k = 3;

console.log(rotateArray(originalArray, k));

//  1.h IIFE function

const rotatedArray = (function (arr, k1) {
  const n = arr.length;
  k1 = k1 % n;

  for (let i = 0; i < k1; i++) {
    const temp = arr.pop();
    arr.unshift(temp);
  }

  return arr;
})([1, 2, 3, 4, 5], 3);

console.log(rotatedArray);


