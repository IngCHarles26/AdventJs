adjustLights(['🔴', '🔴', '🔴'])            // -> 1 
adjustLights(['🟢', '🔴', '🟢', '🟢', '🟢'])// -> 1 
adjustLights(['🔴', '🔴', '🟢', '🔴', '🟢'])// -> 1 
adjustLights(['🟢', '🔴', '🟢', '🔴', '🟢'])// -> 0 
adjustLights(['🔴', '🔴', '🟢', '🟢', '🔴'])// -> 2 

function adjustLights(lights) {
  let [red, green] = [0, 0];
  const colors = ['🔴','🟢'];
  
  for(let i in lights){
    if(colors[+ i % 2]    === lights[i]) red++;
    if(colors[(+i+1) % 2] === lights[i]) green++;
  } 
  
  return Math.min(red,green)
}
