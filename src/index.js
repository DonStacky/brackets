module.exports = function check(str, bracketsConfig) {
  let arrStr = str.split('');
for (let i = 0; i <= bracketsConfig.length; i++) {
for (arr of bracketsConfig) {
  let starr = arr.join('');
  let length = str.length;
for (let i = 0; i < length; i++) {
  let index = str.indexOf(starr);
  if (index !== -1) {
    arrStr.splice(index, 2);
    str = arrStr.join('');
  } else {break;};
}}}
return (str === '');
}
