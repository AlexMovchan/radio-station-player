import { curry } from "lodash";
var letters = '0123456789ABCDEF';

const getRandomLetter = curry((letters: string, a: any) => letters[Math.floor(Math.random() * 16)]);
const getRandomColor = () => {
  const colorArr = [...new Array(6).keys()].map(getRandomLetter(letters));
  return ["#", ...colorArr].join('');
};

export default getRandomColor;