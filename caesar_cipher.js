function rot13(str) {
//     Convert string to an array of UTF-16 codes
  let oldCodeArray = [];
  for (let i = 0; i < str.length; i++) {
    oldCodeArray.push(str.charCodeAt(i));
  }
//   Convert array of codes to +/-13 for each letter
// Leaves nonletter characters the same
  let newCodeArray = oldCodeArray.map(num => {
  if (num >= 78 && num <= 90){
    return num - 13;
  } 
  if (num < 78 && num >= 65) {
    return num + 13;
  }
  return num;
  })
//   Convert array of codes back into characters
  let newMessage = "";
  for (let i = 0; i < newCodeArray.length; i++) {
    newMessage += String.fromCharCode(newCodeArray[i]);
  }
  return newMessage;
}