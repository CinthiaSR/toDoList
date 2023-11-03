import {getNameDay} from "./getNameDate";
import {getMonthName} from "./getMonthName";
export const getWeekTasks = (tasks) => {
  let weekDays = [];
  let toDay = new Date();
  const OneDay = 24 * 60 * 60 * 1000;

  let numWeek = toDay.getDay();
  let timeDay = toDay.getTime();
  let weekOne = new Date(timeDay - numWeek * OneDay);
  // console.log(weekOne)

  for (let i = 0; i < 7; i++) {
    const newDate = new Date(weekOne.getTime() + i * OneDay);
    const dateString = new Date(weekOne.getTime() + i * OneDay).toUTCString();
    console.log(dateString);

    const day = {
      id: crypto.randomUUID(),
      date: dateString,
      day: getNameDay(newDate),
      month: getMonthName(newDate),
      numDay: newDate.getDate(),
      tasks: [],
    };
    weekDays.push(day);
  }
  // console.log('weekOne', weekDays)

  for (let j = 0; j < weekDays.length; j++) {
    for (let k = 0; k < tasks.length; k++) {
      const date1 = new Date(weekDays[j].date).setHours(0, 0, 0, 0);
      const date2 = new Date(tasks[k].date).setHours(0, 0, 0, 0);
      if (date1 === date2) {
        weekDays[j].tasks.push(tasks[k]);
      }
    }
  }
  return weekDays;
};
