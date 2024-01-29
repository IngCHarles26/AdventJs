function createChristmasTree(ornaments, height) {
  const total = height * (height + 1) / 2;
  const base = ' '.repeat(height-1) + '|' + '\n';
  const rept = Math.ceil(total / ornaments.length)
  const joinArr = (arr) => arr.join(' ') + '\n';
  let answer = '';
  let acc = 0;
  
  ornaments = ornaments.repeat(rept).slice(0,total).split('');
  
  for(let i=1;i<=height;i++){
    const chars = ornaments.slice(acc,acc+i);
    answer = answer + ' '.repeat(height-i) + joinArr(chars)
    acc += i;
  }
  
  return answer + base
}