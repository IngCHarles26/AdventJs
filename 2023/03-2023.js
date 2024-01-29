function findNaughtyStep(original, modified) {
  let max = Math.max(original.length,modified.length);
  let val = original.length === max ? original : modified;
  let ans = '';
  for(let i=0; i<max;i++){
    if(original[i] !== modified[i]){
      ans = val[i];
      break;
    }
  }
  return ans
}