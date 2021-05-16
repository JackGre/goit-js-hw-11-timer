import '../src/style/style.css';

const date = new Date();
console.log(date);

/*function initializeClock(timerId) {
  const refs = {
   daysSpan: document.querySelector(`${timerId} [data-value="days"]`),
   hoursSpan: document.querySelector(`${timerId} [data-value="hours"]`),
   minutesSpan: document.querySelector(`${timerId} [data-value="mins"]`),
   secondsSpan: document.querySelector(`${timerId} [data-value="secs"]`),}
   return refs;
   //console.log(refs);
};
initializeClock();*/
const daysSpan = document.querySelector('[data-value=days]');
console.log(daysSpan);
const hoursSpan = document.querySelector('[data-value=hours]');
console.log(hoursSpan);
const minutesSpan = document.querySelector('[data-value=mins]');
console.log(minutesSpan);
const secondsSpan = document.querySelector('[data-value=secs]');
console.log(secondsSpan);


















/*function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }
   
  function initializeClock(id, endtime) {
    //var clock = document.getElementById(id);
    var daysSpan = document.querySelector(`${timerId} [data-value="days"]`);
    var hoursSpan = document.querySelector(`${timerId} [data-value="hours"]`);
    var minutesSpan = document.querySelector(`${timerId} [data-value="mins"]`);
    var secondsSpan = document.querySelector(`${timerId} [data-value="secs"]`);
   
    function updateClock() {
      var t = getTimeRemaining(endtime);
   
      daysSpan.innerHTML = t.days;
      hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
   
      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }
   
    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
  }
  
  var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000); // for endless timer
  initializeClock('countdown', '2015-12-31');*/

  