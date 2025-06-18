import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

function getObjectTime(ms) {
  const checkNum = (num) => {
    return num < 0 ? 0 : num;
  };

  const daysMs = ms % (24 * 60 * 60 * 1000);
  const hoursMs = ms % (60 * 60 * 1000);
  const minutesMs = ms % (60 * 1000);

  const days = checkNum(Math.floor(ms / (24 * 60 * 60 * 1000)));
  const hours = checkNum(Math.floor(daysMs / (60 * 60 * 1000)));
  const minutes = checkNum(Math.floor(hoursMs / (60 * 1000)));
  const seconds = checkNum(Math.floor(minutesMs / 1000));

  return {
    days,
    hours,
    minutes,
    seconds,
  };
}

export default function timer(selector) {
  dayjs.extend(customParseFormat);

  const dateTimer = selector.dataset.timer;
  const future = dayjs(dateTimer, 'DD.MM.YYYY HH:mm');
  const now = dayjs(new Date());
  const diff = future.diff(now);
  const diffTime = getObjectTime(diff);

  selector.querySelector('[data-day] [data-time]').innerHTML =
    diffTime.days.toString();
  selector.querySelector('[data-hour] [data-time]').innerHTML =
    diffTime.hours.toString() < 10
      ? '0' + diffTime.hours.toString()
      : diffTime.hours.toString();
  selector.querySelector('[data-minutes] [data-time]').innerHTML =
    diffTime.minutes.toString() < 10
      ? '0' + diffTime.minutes.toString()
      : diffTime.minutes.toString();

  selector.querySelector('[data-seconds] [data-time]').innerHTML =
    diffTime.seconds.toString() < 10
      ? '0' + diffTime.seconds.toString()
      : diffTime.seconds.toString();
}

const dateTimers = document.querySelectorAll('[data-timer]');
Array.from([...dateTimers]).forEach((t) => {
  if (t) {
    setInterval(() => timer(t), 1000);
  }
});
