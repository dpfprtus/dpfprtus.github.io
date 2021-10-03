const clock = document.querySelector(".clock span");
const clock1 = document.querySelector(".clock span:last-child");
function Clock(){
  const date = new Date();
  const hours = String(date.getHours()).padStart(2,"0");
  const min = String(date.getMinutes()).padStart(2,"0");
  const sec = String(date.getSeconds()).padStart(2,"0");
  const year = String(date.getFullYear());
  const day = String(date.getDate()).padStart(2,"0");
  const month = String(date.getMonth()+1).padStart(2,"0");
  const HTML = `${hours}:${min}:${sec}`;
  const HTML_1 = `${year}년 ${month}월 ${day}일`;
  clock.innerText = HTML;
  clock.className = "clock-time";
  clock1.innerText = HTML_1
  clock1.className = "clock-day";
}
setInterval(Clock,1000);
