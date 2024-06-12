function repeatStrings(str, count) {
  let result = "";
  for (let i = 0; i < count; i++) {
    result += str;
  }

  return result;
}

repeatStrings("abc", 3);
repeatStrings("String", 2);
