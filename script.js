//keypress

let inputBox = document.getElementById('input-box')
let display = document.getElementById('display')


//adding a keypress event listener to the input box

inputBox.addEventListener('keypress', function(e) {
    display.innerText = "you have pressed" + e.key
})