const clock = document.querySelector("#clock");

function setTimeout() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,'0');
    const minutes = String(date.getMinutes()).padStart(2,'0');
    clock.innerText = hours>12? `${hours-12}:${minutes} pm`:`${hours}:${minutes} am`
}

setTimeout();
setInterval(setTimeout, 1000);
