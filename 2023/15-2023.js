autonomousDrive(['!......', '...*.*.'], ["R", 'R', 'D', 'L']);
autonomousDrive(['..!....'], ['R', 'L']);  
//["..!...."]
autonomousDrive(['!..', '***'], ['R', 'L']); 
//["!..","***"]
autonomousDrive(['..!....','......*'],['R', 'D', 'L']);
//[".......", "..!...*"]
autonomousDrive(['*..!..*','*.....*'],['R', 'R', 'D', 'D']);
//[  "*.....*",  "*....!*"]
autonomousDrive(['***', '.!.', '***'], ['D', 'U', 'R', 'R', 'R']);

autonomousDrive(['***', '*!*', '***'], ['D', 'U', 'R', 'L'])
autonomousDrive(['.**.*.*.','.***....','..!.....'], ['D', 'U', 'R', 'R', 'R'])

function autonomousDrive(store, movements) {
  let [lenRow, lenCol] = [store.length , store[0].length];
  let row = store.findIndex(el=>el.includes('!'))
  let col = store[row].indexOf('!');
  
  store[row] = store[row].replace('!','.')
  
  const actions = {
    R: (r,c)=>[r   , c+1],  
    L: (r,c)=>[r   , c-1],  
    U: (r,c)=>[r-1 , c  ],  
    D: (r,c)=>[r+1 , c  ],  
  }
  
  for(let move of movements){
    const [newRow,newCol] = actions[move](row,col);
    
    const validation = store[newRow] &&
          store[newRow][newCol] !== '*' && 
          (newRow < lenRow && newRow >= 0) &&
          (newCol < lenCol && newCol >= 0) 
    
    if(validation){
      [row,col] = [newRow,newCol]
    }
  }
  
  const finalRow = store[row]
  store[row] = finalRow.slice(0,col) + finalRow.slice(col+1)
  
  return store
}