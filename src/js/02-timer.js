import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';


let choosedDate = null;
const dataNow = new Date();

const myInput = document.querySelector('#datetime-picker');
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    choosedDate = selectedDates[0];

    if (dataNow > choosedDate) {
      Notiflix.Notify.warning('Please choose a date in the future');
    } else {
      btnStart.disabled = false;
    }
  },
};
const fp = flatpickr(myInput, options); 

const refs = {
  daysEl: document.querySelector('span[data-days]'),
  hoursEl: document.querySelector('span[data-hours]'),
  minuteEl: document.querySelector('span[data-minutes]'),
  secondsEl: document.querySelector('span[data-seconds]'),
};

const btnStart = document.querySelector('button');
btnStart.disabled = true;

btnStart.addEventListener('click', handlerOnBtnStartClick);
function handlerOnBtnStartClick() {
  const currentDate = new Date();
  
  const interval =  setInterval(() => {
    const currentDate = new Date();
  
    const timerTime = convertMs(choosedDate - currentDate);
    if(choosedDate >= currentDate){
      refs.daysEl.textContent = timerTime.days;
      refs.hoursEl.textContent = timerTime.hours;
      refs.minuteEl.textContent = timerTime.minutes;
      refs.secondsEl.textContent = timerTime.seconds;
    }else{
      clearInterval(interval);
      Notiflix.Notify.warning("Time is over")
    }
  }, 1000);

}



function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = pad(Math.floor(ms / day));
  // Remaining hours
  const hours = pad(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

function pad(value) {
  return String(value).padStart(2, '0');
}
