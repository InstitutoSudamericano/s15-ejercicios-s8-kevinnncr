
function sumOnlypairs(list){
    let comp=2;
    let sum=0;
    for (let i=0; i<list.length; i++){
     if((i%comp)==0)  
      sum= sum + list[i];
    }
    return sum;
}
let nums= [10,50,8,4];
let result;
result= sumOnlypairs(nums)
alert (result)