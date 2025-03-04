let fname="Abhay"
function name(){
    fname="Amar"
    console.log('Hey,',fname)
}
name()


// Application of lexical Scooping
//increament


function increament(){
    let count = 0   // ab isko koi bahar se access nahi kr payega this variable is safe

    //closure function
    return function () {
        count++
        return count 
    }
}
let x=increament()
let y=increament()

console.log(x())  //1
console.log(x())  //2
console.log(y())  //1
console.log(y())  //2
console.log(x())  //3
console.log(y())  //3
console.log(x())  //4

// jab closure ko use nahi krna toh lexical scope ka reference hata doo closure function se
// x=null  // memory bachane ke liye

function debouncedVersion(fn, delay){
    let timerId=null
    return function(){
        clearTimeout(timerId)
        timerId=setTimeout(fn,delay)
    }
}

function apicall(){}

let apidebounce=debouncedVersion(apicall,5*1000)
apidebounce()