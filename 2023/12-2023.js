function checkIsValidCopy(original, copy) {
  const deg = ['#','+',':','.',' '];
  return original.split('').every((el,ix)=>{
    console.log(el)
    if(el === ' ') return copy[ix] === ' ';
    if(Boolean(+el+1)) return copy[ix] === el;
    let ixx = deg.indexOf(el);
    if(ixx+1) return deg.slice(ixx).includes(copy[ix]);
    return [el,el.toLowerCase(),...deg].includes(copy[ix])
  })
}

checkIsValidCopy('S#n:a Claus', 'S#+:. c:. s')
// checkIsValidCopy('Santa Claus is coming','sa#ta Cl#us i+ comin#') // true
// checkIsValidCopy('s#nta Cla#s is coming','p#nt: cla#s #s c+min#') // false 
// checkIsValidCopy('Santa Claus', 's#+:. c:. s') // true
// checkIsValidCopy('Santa Claus', 's#+:.#c:. s') // false 
// checkIsValidCopy('+1 S', ' 1 s') // false 