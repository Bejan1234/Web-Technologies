// reimplementați metoda reduce (reduceleft) ca o funcție globală
function myReduce(array, callback, initialValue) {
  let startIndex = 0;
  let accumulator;

  if (initialValue !== undefined) {
    accumulator = initialValue;
  } else {
    accumulator = array[0];
    startIndex = 1;
  }

  for (let i = startIndex; i < array.length; i++) {
    accumulator = callback(accumulator, array[i], i, array);
  }

  return accumulator;
}
const arr = [1, 2, 3, 4];

const suma = myReduce(arr, (acc, x) => acc + x, 0);

console.log(suma); 
