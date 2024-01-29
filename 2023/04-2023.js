function decode(message) {
  const reg = /\([^()]*\)/;
  
  while(message.search(reg)+1){
    let text = reg.exec(message)[0];
    let ans = '';
    for(let i=text.length-2; i>0;i--){
      ans = ans+text[i]
    }
    message = message.replace(reg,ans)
  }  
  return message;
}