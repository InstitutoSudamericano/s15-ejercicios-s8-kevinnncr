
function sumOnlymulti(list){
    let mult=3;
    let sum=0;
    for (let i=0; i<list.length; i++){
     if ((list[i]%mult) ==0)   sum= sum + list[i];
    }
    return sum;
}
let nums= [3,12,5,7];
let result;
result= sumOnlymulti(nums)
alert (result)