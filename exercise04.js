function sumOnlymayor(list){
    let comp=10;
    let sum=0;
    for (let i=0; i<list.length; i++){
     if(list[i]>comp)  
      sum= sum + list[i];
    }
    return sum;
}
let nums= [10,50,8,4];
let result;
result= sumOnlymayor(nums)
alert (result)
