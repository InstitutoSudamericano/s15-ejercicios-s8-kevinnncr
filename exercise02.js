function sumOnlyimpar(list){
    let comp=2;
    let sum=0;
    for (let i=0; i<list.length; i++){
     if((list[i]%comp)!==0)  
      sum= sum + list[i];
    }
    return sum;
}
let nums= [3,5,8,4];
let result;
result= sumOnlyimpar(nums)
alert (result)
