
function sumOnlyelemenor(list){
  
    let sum=0;
    for (let i=0; i<list.length; i++){
     if(list[i]>i)  
      sum= sum + i;
    }
    return sum;
}
let nums= [0,3,2,6];
let result;
result= sumOnlyelemenor(nums)
alert (result)