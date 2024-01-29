function maxDistance(movements) {
  let answer = 0;
  let comodines = 0;
  const values = {
    '<':-1,
    '>':1,
    '*':0,
  }
  for(let i of movements.split('')){
    answer = answer + values[i];
    if(!values[i]) comodines++;
  }
  answer = Math.abs(answer)+comodines;
  return answer
}