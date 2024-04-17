//1. concat the 2 strings to 1 array (concatArray)
//2. remove duplicates
//a. declare empty newArray
//b. push character from old array to empty IF new character not present in newArray
//sort string

function longest(s1, s2) {
  const concatArray = s1.concat(s2).split("");
  const newArray = [];
  for (let i = 0; i < concatArray.length; i++) {
    if ((newArray = [])) {
      newArray.push(concatArray[i]);
    } else {
    }
  }
  console.log(newArray);
}

console.log(longest("aretheyhere", "yestheyarehere")); // "aehrsty"
console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding")); // "abcdefghilnoprstu"
console.log(longest("inmanylanguages", "theresapairoffunctions")); // "acefghilmnoprstuy"
