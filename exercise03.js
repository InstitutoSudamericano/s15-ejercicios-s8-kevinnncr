
function sumOnlyelemayor(list){
  
    let sum=0;
    for (let i=0; i<list.length; i++){
     if(list[i]==i)  
      sum= sum + list[i];
    }
    return sum;
}
let nums= [0,1,2,3];
let result;
result= sumOnlyelemayor(nums)
alert (result)