function getIndexsForPalindrome(word) {
  let _word = word.split('');
  const isPalindrome = (array)=> array.join('') === [...array].reverse().join('');
  if(isPalindrome(_word)) return [];
  const len = word.length;
  const limit = Math.ceil(len/2);
  
  function changeLetters(array,ix1,ix2){
    let ans = [...array];
    [ans[ix1],ans[ix2]] = [ans[ix2],ans[ix1]];
    return ans
  }
  
  for(let i=0; i<limit;i++){
    for(let j=i+1; j<len; j++){
      let newWord = changeLetters(_word,i,j);
      if(isPalindrome(newWord)) return [i,j]
    }
  }

  return null
}