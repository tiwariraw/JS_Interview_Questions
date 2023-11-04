// How would you double elements of an array without creating additional variables using reduce

const arr = [1,3,5];
console.log(arr.reduce(function(acc,curr,index,arr){
    acc.push(curr*2);
    return acc;
},[]));