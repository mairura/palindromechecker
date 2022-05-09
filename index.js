function palindrome(str) {
  let regex = /[\W_]/g;
  let toLowerRegStr = str.toLowerCase().replace(regex, "");
  let reverseStr = toLowerRegStr.split("").reverse().join("");
  return reverseStr === toLowerRegStr;
}

palindrome("eye");
