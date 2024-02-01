calculateTime(['00:10:00', '01:00:00', '03:30:00'])
// '-02:20:00'

calculateTime(['02:00:00', '05:00:00', '00:30:00'])
// '00:30:00'

calculateTime([
  '00:45:00',
  '00:45:00',
  '00:00:30',
  '00:00:30'
]) // '-05:29:00'

function calculateTime(deliveries) {
  const maxTime = 7*60*60;
  const totalTime = deliveries.reduce((ac,el)=>{
    let time = el.split(':').map(elm=>+elm);
    return ac + time[0]*60*60 + time[1]*60 + time[2]
  },0)
  let rest = Math.abs(maxTime - totalTime);
  const seconds = rest % 60;
  rest = (rest-seconds)/60;
  const minutes = rest % 60;
  rest = (rest-minutes)/60;
  const hours = rest
  
  const ans = 
        (hours < 10 ? `0${hours}` : `${hours}`) + ':' +
        (minutes < 10 ? `0${minutes}` : `${minutes}`) + ':' +
        (seconds < 10 ? `0${seconds}` : `${seconds}`)
        
  
  return maxTime>totalTime ? '-'+ans : ans;
}