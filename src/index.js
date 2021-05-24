import '../src/style/style.css';

class CountdownTimer {
  constructor({selector, targetDate}) {
      this._elements = this._initializeClock(selector);
      this._targetDate = targetDate;
      this._timer();
 
    }
  _getTimeRemaining(endtime) {
    const total = Date.parse(endtime) - Date.parse(new Date());
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    const hours = Math.floor((total % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((total % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((total % (1000 * 60)) / 1000);
      return { total, days, hours, minutes, seconds };
    }
  _initializeClock() {
    const daysSpan = document.querySelector('[data-value=days]');
    const hoursSpan = document.querySelector('[data-value=hours]');
    const minutesSpan = document.querySelector('[data-value=mins]');
    const secondsSpan = document.querySelector('[data-value=secs]');
      return { daysSpan, hoursSpan, minutesSpan, secondsSpan };
    }
    _timer() {
        const timeinterval = setInterval(() => {
        const time = this._getTimeRemaining(this._targetDate);
        if (time.total <= 0) {
            clearInterval(timeinterval);
            return;
      }
    this._elements.daysSpan.innerHTML = time.days;
    this._elements.hoursSpan.innerHTML = ('0' + time.hours).slice(-2);
    this._elements.minutesSpan.innerHTML = ('0' + time.minutes).slice(-2);
    this._elements.secondsSpan.innerHTML = ('0' + time.seconds).slice(-2);
    }, 1000);
    }
};
const timer = new CountdownTimer({
selector: '#timer-1',
targetDate: new Date('Jun 1, 2021'),
});

 
