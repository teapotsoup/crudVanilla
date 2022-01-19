const mon = document.querySelector("#mon");
const dat = document.querySelector("#dat");
const daY = document.querySelector("#daY");
const amPm = document.querySelector("#amPm");
const h = document.querySelector("#h");
const min = document.querySelector("#min");
const sec = document.querySelector("#sec");

function odo() {
    const time = new Date();
    const month = time.getMonth();
    const date = time.getDate();
    const day = time.getDay();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    const week = new Array('일', '월', '화', '수', '목', '금', '토');
    const monthArr = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12);
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    mon.innerHTML = monthArr[month];
    dat.innerHTML = date;
    daY.innerHTML = week[day] + "요일";
    amPm.innerHTML = ampm;
    h.innerHTML = hours;
    min.innerHTML = minutes;
    sec.innerHTML = seconds;
}


function init() {
    odo();
    setInterval(odo, 1000);
}

init();