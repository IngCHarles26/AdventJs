function organizeGifts(gifts) {
  
  const palet = (sym,size=1)=>`[${sym}]`.repeat(size); //50
  const box = (sym,size=1)=>`{${sym}}`.repeat(size); //10
  const bag = (sym,size=1)=> size ? `(${sym.repeat(size)})` : ''; 
  
  const numbers = gifts.match(/[0-9]+/g).map(el=>+el);
  const letters = gifts.match(/[a-z]+/g);
  
  let answer = '';
  let size = 0;
  
  for(let num in numbers){
    size = numbers[num]
    //palet
      answer = answer + palet(letters[num],Math.floor(size/50));
      size = size % 50;
    //box
      answer = answer + box(letters[num],Math.floor(size/10));
      size = size % 10;
    //bag
      answer = answer + bag(letters[num],size);
  }
  
  return answer
}