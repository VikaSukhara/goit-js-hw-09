import Notiflix from 'notiflix';

const refs = {
  form: document.querySelector('form'),
  amountEl: document.querySelector('[name="amount"]'),
  firstDelay: document.querySelector('[name="delay"]'),
  stepDelay: document.querySelector('[name="step"]'),
};

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

refs.form.addEventListener('submit', handlerBtnClick);

function handlerBtnClick(event) {
  event.preventDefault();

  let delayEL = Number(refs.firstDelay.value);
  let stepDelayValue = Number(refs.stepDelay.value);
  let amountValue = Number(refs.amountEl.value);

  for (let i = 1; i <= amountValue; i++) {
    if (i > 1) {
      delayEL += stepDelayValue;
    }

    let positionEL = i;
    createPromise(positionEL, delayEL)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
  }
}
