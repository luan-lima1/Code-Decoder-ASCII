 async function convertAsciiToString(ascii: string) {
  const result = ascii.split(' ').map(function(item) {
    return parseInt(item, 10);
  });

  let a = [];
  for (let i = 0; i < result.length; i++) {
    let x = a.push(String.fromCharCode(result[i]));
  } 
  return a.toString().replace(/,/g, "");
}

export default convertAsciiToString;