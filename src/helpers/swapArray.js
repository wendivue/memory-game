/* eslint-disable no-param-reassign */

const swap = (array, i, j) => {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
};

const shuffleCards = (array) => {
  for (let i = array.length; i > 0; i -= 1) {
    const randomIndex = Math.floor(Math.random() * i);
    const currentIndex = i - 1;
    swap(array, currentIndex, randomIndex);
  }
  return array;
};

export { swap, shuffleCards };
