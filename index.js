const clockTitle = document.querySelector(".js-clock");

function getTime() {
  const dayOfChirstmas = new Date("2022-12-24 00:00:00+0900");
  const today = new Date();
  const gapOfTime = (dayOfChirstmas - today) / 1000; // milliseconds => seconds
  
  const days = Math.floor(gapOfTime/ (60 * 60 * 24)); // 일
  const hours = Math.floor(gapOfTime / (60 * 60)) % 24; // 시
  const minutes = Math.floor(gapOfTime / 60) % 60; // 분
  const seconds = Math.floor(gapOfTime % 60); // 초

  if (gapOfTime <= 0) {
    clockTitle.innerText = "Merry Christmas";
  } else {
    clockTitle.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s.`;
  }
}

// 매 1000 milliseconds(1초)로 getTime() 실행
function init() {
  getTime();
  setInterval(getTime, 1000);
}
init();