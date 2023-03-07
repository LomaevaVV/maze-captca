export const сoordinates = (n: number) => {
  const сoordinatesArr = [];
  for (let i = 1; i <= n; i++) {
    const сoordinatesArrRow = [];
    for (let y = 1; y <= n; y++) {
      сoordinatesArrRow.push([i, y]);
    }
    сoordinatesArr.push(сoordinatesArrRow);
  }
  return сoordinatesArr;
};

const getRandomInteger = (min: number, max: number) => {
  const rand: number = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

const getNextCoordinates = (coordinates: number[], n: number) => {
  const idxToChange = getRandomInteger(0, 1);
  const newCoordinates = [...coordinates];
  if (coordinates[idxToChange] === 1) {
    newCoordinates[idxToChange] = coordinates[idxToChange] + 1;
  }

  if (coordinates[idxToChange] === n) {
    newCoordinates[idxToChange] = coordinates[idxToChange] - 1;
  }

  if (coordinates[idxToChange] > 1 && coordinates[idxToChange] < n) {
    getRandomInteger(0, 1) === 0
      ? newCoordinates[idxToChange] = coordinates[idxToChange] - 1
      : newCoordinates[idxToChange] = coordinates[idxToChange] + 1;
  }
  return newCoordinates;
};

export const сoordinatesOfPath = (n: number) => {
  const сoordinatesOfPathArr = [];
  сoordinatesOfPathArr[0] = [getRandomInteger(1,n), getRandomInteger(1,n)];

  for (let i = 0; i < 10; i++) {
    сoordinatesOfPathArr[i + 1] = (getNextCoordinates(сoordinatesOfPathArr[i], n));
  }
  return сoordinatesOfPathArr;
};

// const haveSameLength = (text: string, a: RegExp, b: RegExp) => (text.match(a) || [] ).length === (text.match(b) || [] ).length;

// export const isBalanced = (text: string) => {
//   const arr = [
//     [ /\(/gm, /\)/gm ], [ /\{/gm, /\}/gm ], [ /\[/gm, /\]/gm ]
//   ];
//   let i = arr.length;
//   let isClean = true;

//   while( i-- && isClean ){
//     isClean = haveSameLength( text, arr[i][0], arr[i][1] );
//   }
//   return isClean;
// };

export const isBalanced = (text: string) => {
  const openers = '<{[(';
  const closers = '>}])';
  const arr = [];
  let valid = true;

  for (let i = 0; i < text.length; i++) {
    if (openers.indexOf(text[i]) >= 0) {
      arr.push(openers.indexOf(text[i]));
    } else if (closers.indexOf(text[i]) >= 0) {
      if (closers.indexOf(text[i]) !== arr.pop()) {
        valid = false;
      }
    }
  }

  if (arr.length) {
    valid = false;
  }

  return valid;
};
