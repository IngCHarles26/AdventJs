maxGifts([2, 4, 2]) // 4 (4)
maxGifts([5, 1, 1, 5]) // 10 (5 + 5)
maxGifts([4, 1, 1, 4, 2, 1]) // 9 (4 + 4 + 1)
maxGifts([1, 3, 1, 3, 100]) // 103 (3 + 100)

function maxGifts(houses:number[]) {
  const n = houses.length;
  if(!n) return 0;
  if(n === 1) return houses[0];
  
  const ans = Array(n).fill(0);
  
  ans[0] = houses[0];
  ans[1] = Math.max(houses[0],houses[1]);
  
  for(let i=2;i<n;i++){
    ans[i] = Math.max(ans[i-1],ans[i-2]+houses[i])
  }
  
  return ans.at(-1)
}