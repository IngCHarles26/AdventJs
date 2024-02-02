// transformTree([3, 1, 0, 8, 12, null, 1])
transformTree([2, 7, 5, null, 6, null, 9, null, null, 1, 11, null, null, null, 10])

function transformTree(tree) {
  if(!tree.length) return null;
  
  const genTree = (num)=>{
    return {
      value:num,
      left:null,
      right:null
    }
  }
  const ans = genTree(tree.shift());
  const tail = [ans];
  
  while(tree.length){
    const actual = tail.shift();
    const leftVal = tree.shift();

    actual.left = genTree(leftVal);
    tail.push(actual.left)

    if(tree.length){
      const rightVal = tree.shift();
        actual.right = genTree(rightVal);
        tail.push(actual.right)
    }
  }
  
  function correctTree(node){
    if(node.value === null){
      return null;
    }else{
      node.left = node.left !== null 
        ? correctTree(node.left) 
        : null;
      node.right = node.right !== null 
        ? correctTree(node.right) 
        : null;
      return node
    }
  }
  
  return correctTree(ans)
}

/*
Solucion real, ya que si un nodo es null los siguientes null deben ignorar el nodo y pasar al siguiente nodo activo, bueno es mi opinion
*/

/*
function transformTree(tree) {
  if(!tree.length){
    return {left:null,right:null}
  }
  
  const genTree = (num)=>{
    return {
      value:num,
      left:null,
      right:null
    }
  }
  const ans = genTree(tree.shift());
  const tail = [ans];
  let ix = 0;
  
  while(tree.length){
    const actual = tail.shift();
    
    const leftVal = tree.shift();
    if(leftVal !== null){
      actual.left = genTree(leftVal);
      tail.push(actual.left)
    }
    
    if(tree.length){
      const rightVal = tree.shift();
      if(rightVal !== null){
        actual.right = genTree(rightVal);
        tail.push(actual.right)
      }
    }
  }

  return ans
}
*/