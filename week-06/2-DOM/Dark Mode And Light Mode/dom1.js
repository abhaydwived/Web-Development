const switchButton= document.getElementById("clickme")

function changebackground(){
    if(document.body.style.backgroundColor==='white'){
        document.body.style.backgroundColor='black'
        switchButton.innerText='Light Mode'
    }
    else{
        document.body.style.backgroundColor='white'
        switchButton.innerText='Dark Mode'
    }
}



switchButton.addEventListener('click',() => {
    console.log('I got clicked')
    changebackground()
})

switchButton.addEventListener('click',() => {
    console.log('Storing value of Every Click')
})