const current = document.querySelector("#current");
const timeTesting = document.querySelector("#time");
function timeChecking() {
    const time = new Date();
    const month = time.getMonth();
    const date = time.getDate();
    const day = time.getDay();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    const week = new Array('일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일');
    const monthArr = new Array('1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월');
    const amPm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;
    current.innerHTML = `${monthArr[month]} ${date}일 | ${week[day]} | ${amPm} ${hours}:${minutes}:${seconds}`;
    timeTesting.innerHTML = `${amPm} ${hours}:${minutes}:${seconds}`;
}

function init() {
    timeChecking();
    setInterval(timeChecking, 1000);
}

init();