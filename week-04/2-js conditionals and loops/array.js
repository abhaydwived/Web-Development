let fit=['slim fit','straight fit','relaxed fit','skinny fit','tapered fit'] ; 

console.log(fit[0]);

console.log(fit.length)
// add a element in fit
fit.push("Skinny Fit")
console.log(fit)

// delete a element from fit
const index=fit.indexOf("Skinny Fit")
if (index > -1){
    fit.splice(index,1)
}
console.log(fit)

// filter fit for slim peoples
const for_slim_people=fit.filter((fit)=>fit!=="relaxed fit")
console.log(for_slim_people)

// sort a list 
l=['🥚','🍳','🐣','🐔','🍗']
console.log(l.sort())

// use a for loop to print each type of fit
for(i=0;i<fit.length;i++){
    console.log(fit[i])
}


// use for loop to count how many fits are for slim peoples
let count=0
for(i=0;i<for_slim_people.length;i++){
    count++
}
console.log(count)

 // use a for loop to create a new array with uppercases of fit

 let upper_fit=[]
 for(i=0;i<fit.length;i++){
    upper_fit.push(fit[i].toUpperCase())
 }
console.log(upper_fit)

// use for loop to find the fit name with most characters

let long_fit=fit[0]
console.log(long_fit.length)
for(i=1;i<fit.length;i++){
    let com=fit[i]
    if(long_fit.length < com.length){
        long_fit=com
    }  
}
console.log(long_fit)

// reverse the order
let rev_fit=[]
for(i=fit.length-1;i>0;i--){
    rev_fit.push(fit[i])
}
fit.splice(0,fit.length)
console.log(rev_fit)

for(i=0;i<rev_fit.length;i++){
    fit.push(rev_fit[i])
}
console.log(fit)
