document.addEventListener("DOMContentLoaded", () => {
    const newyear = new Date('Jan 1 2023 00:00:00');
    const daysVal = document.querySelector(".time-count__days .time-count__val");
    const hoursVal = document.querySelector(".time-count__hours .time-count__val");
    const minutesVal = document.querySelector(".time-count__minutes .time-count__val");
    const secondsVal = document.querySelector(".time-count__seconds .time-count__val");
    const daystext = document.querySelector(".time-count__days .time-count__text");
    const hourstext = document.querySelector(".time-count__hours .time-count__text");
    const minutestext = document.querySelector(".time-count__minutes .time-count__text");
    const secondstext = document.querySelector(".time-count__seconds .time-count__text");
    function declOfNum(number, titles) {  
        cases = [2, 0, 1, 1, 1, 2];  
        return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];  
    }
    const timecount = () => {
        let now = new Date();
        let leftuntil = newyear - now;
        let days = Math.floor(leftuntil / 1000 / 60 / 60 / 24);
        let hours = Math.floor(leftuntil / 1000 / 60 / 60) % 24;
        let minutes = Math.floor(leftuntil / 1000 / 60) % 60;
        let seconds = Math.floor(leftuntil / 1000) % 60;
        daysVal.textContent = days;
        hoursVal.textContent = hours;
        minutesVal.textContent = minutes;
        secondsVal.textContent = seconds;
        daystext.textContent = declOfNum(days, ['день', 'дня', 'дней']);
        hourstext.textContent = declOfNum(hours, ['час', 'часа', 'часов']);
        minutestext.textContent = declOfNum(minutes, ['минута', 'минуты', 'минут']);
        secondstext.textContent=    declOfNum(seconds, ['секунда', 'секунды', 'секунд']);
    }
    timecount();
    setInterval(timecount, 1000)
})