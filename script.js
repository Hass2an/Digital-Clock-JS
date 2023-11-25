const clock = document.getElementById("clock");

let data = new Date()

setInterval(function(){
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString()
},1000)