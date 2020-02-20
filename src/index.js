module.exports = function reverse (n) {

  let nString = String(Math.abs(n));
  let result = '';
  for (let i=nString.length-1; i>=0; i--) {   
    result+=nString[i];
  }
  return parseInt(result.replace(/^0+/,""));
}
