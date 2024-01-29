function cyberReindeer(road, time) {
  let answer = [road];
  let indexS = road.indexOf('S');
  let table = road.replace('S','.');
  let isChangedTable = false;
  
  function replaceTable(string,indice){
    let inicio = string.slice(0,indice);
    let final = string.slice(indice+1);
    return inicio + 'S' + final;
  }

  for(let t=1;t<time;t++){
    if(t>=5 && !isChangedTable) {
      table = table.replaceAll('|','*');
      isChangedTable = true;
    }
    let nextStep = table[indexS+1];
    if(['.','*'].includes(nextStep)) indexS++;
    answer = [...answer,replaceTable(table,indexS)];
  }
  return answer
}