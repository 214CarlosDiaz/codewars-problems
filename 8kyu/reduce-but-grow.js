// DESCRIPTION:
// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

//my soultion
function grow(x){
    let newX=1
    for(let i=0;i<x.length;i++){
       newX=newX*x[i]
    }
    return newX
  }

//best practice
const grow = x => x.reduce((a,b)=> a*b)
