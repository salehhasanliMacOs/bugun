// console.log();
const hours = document.querySelector('.hours')
const minutes = document.querySelector('.minutes')
const seconds = document.querySelector('.seconds')

const date = new Date()

let hour = date.getHours();
let minute = date.getMinutes();
let second = date.getSeconds();

hours.innerHTML = hour;
    minutes.innerHTML = minute;
    seconds.innerHTML = second;
setInterval(() => {
    if (second<59) second++;
    else{
        second = 0;
        if(!(minute < 59)){
            minute = 0
        

        if(!(hour < 23)){
            hour = 0
        }
        else hour++;
    }else minute++;
    
    }
    hours.innerHTML = hour;
    minutes.innerHTML = minute;
    seconds.innerHTML = second;

},1000);