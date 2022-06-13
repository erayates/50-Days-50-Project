const showBtn = document.getElementById("button")
const notifications = document.getElementById("notifications")

const msgs = [
    'Lorem ipsum dolor sit amet.',
    'Lorem ipsum dolor sit amet.',
    'Lorem ipsum dolor sit amet.',
    'Lorem ipsum dolor sit amet.'
]

const types = ['info','error','success']

showBtn.addEventListener('click',() => createNotif())

function createNotif(message = null,type = null){
    const notification = document.createElement('div')
    notification.classList.add('notification')
    notification.classList.add(type ? type : getRandomType())
    notification.innerText = message ? message : getRandomMessage()
    notifications.appendChild(notification)

    setTimeout(() => {
        notification.remove()
    },3000)
}

function getRandomMessage(){
    return msgs[Math.floor(Math.random()*msgs.length)]
}

function getRandomType(){
    return types[Math.floor(Math.random()*types.length)]
}