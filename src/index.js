//Number one.
function fizzBuzz(max) {
  let fizzBuzzArr = [];

  for (let i = 1; i < max; i++) {
    if ((i % 3 === 0 || i % 5 === 0) && !(i % 3 === 0 && i % 5 === 0)) {
      fizzBuzzArr.push(i);
    }
  }
  return fizzBuzzArr;
}

//console.log(fizzBuzz(20));

//Number two
function doubleSequence(base, length) {
  let doubleArr = [base];
  let product = base;

  for (let i = 1; i < length; i++) {
    product *= 2;
    doubleArr.push(product);
  }
  return doubleArr;
}

//console.log(doubleSequence(7, 3));

//Number three
function unique(array) {
  let uniqueArr = [];

  for (let i = 0; i < array.length; i++) {
    let firstNum = array[i];
    if (!uniqueArr.includes(firstNum)) {
      uniqueArr.push(firstNum);
    }
  }
  return uniqueArr;
}

//console.log(unique([11, 7, 8, 10, 8, 7, 7]));

//Number four
function chooseyEndings(words, suffix) {
  let wordsArr = [];

  for (let i = 0; i < words.length; i++) {
    let word = words[i];

    if (word.endsWith(suffix)) {
      wordsArr.push(word);
    }
  }
  return wordsArr;
}

// console.log(
//   chooseyEndings(
//     ["family", "hound", "catalyst", "fly", "timidly", "bond"],
//     "ly"
//   )
// );

//Number five
function summation(num) {
  let result = 0;

  for (let i = 1; i <= num; i++) {
    result += i;
  }
  return result;
}

function summationSequence(start, length) {
  let num = [start];

  for (let i = num.length; i < length; i++) {
    let sum = num[num.length - 1];
    let res = summation(sum);

    num.push(res);
  }

  return num;
}
//console.log(summationSequence(3, 4)); // [3, 6, 21, 231]

module.exports = {
  fizzBuzz,
  doubleSequence,
  unique,
  chooseyEndings,
  summationSequence,
};
