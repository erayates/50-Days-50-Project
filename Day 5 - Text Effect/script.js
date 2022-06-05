const textElement = document.getElementById('text')
const speedElement = document.getElementById('speed')
const text = 'Web Developer...'
const text2 = 'Graphic Designer...'
const text3 = "Computer Engineer..."
const list = [text,text2,text3]
var ct = 0
let idx = 1
let speed = 300 / speedElement.value

writeText()

function writeText(){
    textElement.innerText = list[ct].slice(0,idx)
    idx++
    if(idx > list[ct].length){
        idx = 1
        if(ct == list.length-1) ct = 0;
        else(ct++)
    }
    if(speedElement.value != 1){
        speed = 300/speedElement.value
    }
    setTimeout(writeText,speed)
}
/* another way
speedElement.addEventListener('input',(e)=> speed = 300 / e.target.value)
*/