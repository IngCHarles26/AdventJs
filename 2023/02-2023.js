function manufacture(gifts, materials) {
  let mat = {};
  for(let char of materials){ mat = {...mat,[char]:true} }
  return gifts.filter(el=>el.split('').every(char=>mat[char]))
}
