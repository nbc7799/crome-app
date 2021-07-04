const schedule = document.querySelector(".top-part-left");

function getTime() {
    const weekDay = ["월", "화", "수", "목", "금", "토", "일"];
    const timeStemp = new Date();
    const year = String(timeStemp.getFullYear())+"년";
    const month = String(timeStemp.getMonth()+1).padStart(2, "0")+"월";
    const date = String(timeStemp.getDate()).padStart(2, "0")+"일";
    const day = String(timeStemp.getDay());
    const weekDayDay = weekDay[day];
    schedule.innerText = `${year} ${month} ${date} ${weekDayDay + "요일"}`;
}
getTime();


