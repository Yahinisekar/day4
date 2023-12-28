//Arrow function

//2.a Print odd numbers in an array

const odd3 = (arr) => {
  let newArr = [];
  for (let i in arr) {
    if (arr[i] % 2 !== 0) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};
console.log("Result with Arrow function: ", odd3([1, 2, 3, 4, 5, 6, 87, 23]));

//2.b Convert all the strings to title caps in a string array

const titleCaps = (strArray)=> {
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

console.log(
  titleCaps(["hello world", "this is my task", "full stack developer"])
);

//2.c Sum of all numbers in an array

const sum =(arr) => {
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    num += arr[i];
  }
  return num;
};
console.log(sum([1, 2, 3, 4, 5]));

//2.d Return all the prime numbers in an array

const findPrime = function (arr) {
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
};

console.log(findPrime([1, 2, 3, 4, 5, 7, 11, 21, 81]));

//2.e Return all palindromes in an array

const palindrome = function (arr) {
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
};
console.log(palindrome(["dad", "Malayalam", "string", "level"]));
