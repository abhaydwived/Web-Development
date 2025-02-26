function sum(arr){
    let result=0;
    for(l=0;l<arr.length;l++){ 
        result=result + arr[l] ;
        
    }
    return result;
}
arrr=[1,2,3,4,5,6];
console.log(sum(arrr));