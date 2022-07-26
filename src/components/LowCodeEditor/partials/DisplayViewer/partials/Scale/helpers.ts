export const getNumbers = (len, gap) => {
  const numbers = [];
  for (let i = 0; i <= len; i += gap) {
    numbers.push(i);
  }
  return numbers;
};
