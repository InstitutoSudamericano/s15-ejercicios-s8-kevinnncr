
function sumOnlyiguales(list){
  
    let sum=0;
    for (let i=0; i<list.length; i++){
     if(list[i]==i)  
      sum= sum + list[i];
    }
    return sum;
}
let nums= [1,1,2,4];
let result;
result= sumOnlyiguales(nums)
alert (result)