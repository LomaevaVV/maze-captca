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
