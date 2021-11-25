// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;
  
  // Ваш код
  
  min = Infinity;
  max = -Infinity;
  sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
    sum = sum + arr[i];
  }

  avg = +(sum/arr.length).toFixed(2);

  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum;
  // Ваш код
  for (i = 0; i < arr.length; i++) {
    sum = sum + arr[i]
  }
  return sum;
}

function makeWork(arrOfArr, func) {
  let max;

  // Ваш код
  // for ...
  for (i = 0; i < arrOfArr.length; i++) {
    let resOfSol = func(arrOfArr[i]);
    if (max > resOfSol) {
      max =  resOfSol;
    }
  }

  return max;
}

// Задание 3
function worker2(arr) {
  // Ваш код
  let min = Infinity;
  let max = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];    
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return Math.abs(max - min);
}
