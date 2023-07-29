function sumOnlyelemnt(list){
    
    let sum=0;
    for (let i=0; i<list.length; i++){
     if(list[i]==0)  
      sum= sum + i;
    }
    return sum;
}
let nums= [1,1,0,0];
let result;
result= sumOnlyelemnt(nums)
alert (result)
