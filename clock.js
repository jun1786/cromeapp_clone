 const clockContainer = document.querySelector(".js-clock");
  clockTitle = clockContainer.querySelector("h1");

function getTime(){
    const date = new Date();
      years = date.get
      milliseconds = date.getMilliseconds();
      seconds = date.getSeconds();
      minutes = date.getMinutes();
      hours = date.getHours();
    clockTitle.innerText = `${
        hours < 10 ? `0${hours}` : hours}:${
        minutes < 10 ? `0${minutes}` : minutes}:${
        seconds < 10 ? `0${seconds}` : seconds}:${milliseconds}`;
}

  function init(){
    getTime();
    setInterval(getTime, 1);
}
init();
