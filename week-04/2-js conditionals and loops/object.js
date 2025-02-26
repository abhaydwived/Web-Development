// Create an object which contains properties name,type,caffine content

const tea={
    Name:"Lemon tea",
    Type:"Green",
    caffiene:"Low"
}

//print name and type of tea

console.log(tea.Name,'\n',tea.Type)
console.log(tea['Type'])

//add a new property origin 
tea.origin="China"

//change caffiene level
tea.caffiene="Medium"
console.log(tea)

// remove the type property
delete tea.Type

//check origin is in tea
console.log('origin' in tea)

// use for...in loop to print all properties of tea
for(key in tea){
    console.log(key +':'+tea[key])
}

//nested object
let teas={
    green:{
        name:"Green tea"

    },
    milk:{
        name: 'Normal tea'
    }
}
console.log(teas)

//copy of object
let copytea={
    ...tea
}            //shallow copy
console.log('Shallow Copy',copytea) 

let copy_tea=teas   //reference
console.log('Reference: \n',copy_tea)
 
const teas_kastring=JSON.stringify(teas)                //deep copy
console.log(teas_kastring)
let copy__tea=JSON.parse(teas_kastring)
console.log('Deep copy: \n',copy__tea)


teas.green.name='Lemon tea'
console.log('After changing value',teas)               //check  { green: { name: 'Lemon tea' }, milk: { name: 'Normal tea' } }

console.log('After changing value Deep copy: \n',copy__tea)  //{ green: { name: 'Green tea' }, milk: { name: 'Normal tea' } }
console.log('After changing value Reference: \n',copy_tea)  //{ green: { name: 'Lemon tea' }, milk: { name: 'Normal tea' } }
