function calendarMatching(
  calendar1,
  dailyBounds1,
  calendar2,
  dailyBounds2,
  meetingDuration
) {
  let updatedCalendar1 = updateCalendar(calendar1, dailyBounds1);
  let updatedCalendar2 = updateCalendar(calendar2, dailyBounds2);
  let mergedCalendar = mergeCalendars(updatedCalendar1, updatedCalendar2);
  let flattened = flatten(mergedCalendar);
  return getAvail(flattened, meetingDuration);
}

const updateCalendar = (cal, dailyBounds) => {
  let updatedCalendar = [
    ['0:00', dailyBounds[0]],
    ...cal,
    [dailyBounds[1], '23:59'],
  ];
  return updatedCalendar.map((meeting) => meeting.map(timeToMinutes));
};

const timeToMinutes = (time) => {
  let [hours, minutes] = time.split(':').map((str) => Number(str));
  return hours * 60 + minutes;
};

const mergeCalendars = (cal1, cal2) => {
  let ans = [];
  let p1 = 0;
  let p2 = 0;
  while (p1 < cal1.length && p2 < cal2.length) {
    let mtg1 = cal1[p1];
    let mtg2 = cal2[p2];
    if (mtg1[0] <= mtg2[0]) {
      ans.push(mtg1);
      p1++;
    } else {
      ans.push(mtg2);
      p2++;
    }
  }
  while (p1 < cal1.length) {
    ans.push(cal1[p1]);
    p1++;
  }
  while (p2 < cal2.length) {
    ans.push(cal2[p2]);
    p2++;
  }
  return ans;
};

const flatten = (cal) => {
  let flattened = [[...cal[0]]];
  for (let i = 1; i < cal.length; i++) {
    let current = cal[i];
    let prev = flattened[flattened.length - 1];
    let [currentStart, currentEnd] = current;
    let [prevStart, prevEnd] = prev;
    if (prevEnd >= currentStart) {
      let newPrev = [prevStart, Math.max(prevEnd, currentEnd)];
      flattened[flattened.length - 1] = newPrev;
    } else {
      flattened.push([...current]);
    }
  }
  return flattened;
};

const getAvail = (cal, duration) => {
  let avails = [];
  for (let i = 1; i < cal.length; i++) {
    let start = cal[i - 1][1];
    let end = cal[i][0];
    let timeslot = end - start;
    if (timeslot >= duration) {
      avails.push([start, end]);
    }
  }
  return avails.map((meeting) => meeting.map(minutesToTime));
};

const minutesToTime = (minutes) => {
  let hours = Math.floor(minutes / 60);
  let mins = minutes % 60;
  let hourStr = hours.toString();
  let minStr = mins < 10 ? '0' + mins.toString() : mins.toString();
  return hourStr + ':' + minStr;
};
