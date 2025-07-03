let number = 0;

const child = document.createElement("div");
setInterval(()=>{
    number = number + 1;
    console.log(number)
    child.innerHTML = number;
    document.body.appendChild(child);
    document.body.removeChild
},1000);



