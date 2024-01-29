function drawGift(size, symbol) {
  if(size===1) return '#\n';
  const row = '#'.repeat(size)
  let mid = row + symbol.repeat(size-2) +'#';
  let bot = '';
  let top = ' '.repeat(size-1) + row;

  for(let i=size-2;i>=1;i--){
    const main = '#' + symbol.repeat(size-2) + '#';
    const rightBot =  i ? symbol.repeat(i-1) + '#':'';
    const rightTop = i ? symbol.repeat(size -i-2) + '#' : '';
    bot = bot + '\n' + main+rightBot;
    top = top + '\n' + ' '.repeat(i) + main + rightTop;
  }
  
  bot = bot + '\n' + row;
  return top + '\n' + mid  + bot + '\n'
}