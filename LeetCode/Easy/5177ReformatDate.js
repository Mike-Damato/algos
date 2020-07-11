var reformatDate = function (date) {
  let hash = {
    Jan: '01',
    Feb: '02',
    Mar: '03',
    Apr: '04',
    May: '05',
    Jun: '06',
    Jul: '07',
    Aug: '08',
    Sep: '09',
    Oct: '10',
    Nov: '11',
    Dec: '12',
    s: true,
    t: true,
    n: true,
    d: true,
    r: true,
    h: true,
  };

  let endIdx;
  for (let i = 0; i < date.split('').length; i++) {
    if (hash.hasOwnProperty(date[i])) {
      endIdx = i;
      break;
    }
  }

  let newDay = '';
  for (let i = 0; i < endIdx; i++) {
    let char = date[i];
    newDay += char;
  }

  if (newDay.length === 1) {
    let lastNum = newDay[newDay.length - 1];
    newDay = 0 + lastNum;
  }

  let month = date.slice(-8, -5);
  let newDate = date.slice(-4) + '-' + hash[month] + '-' + newDay;

  return newDate;
};

//With Array Destructuring
var reformatDate = function (date) {
  let hash = {
    Jan: '01',
    Feb: '02',
    Mar: '03',
    Apr: '04',
    May: '05',
    Jun: '06',
    Jul: '07',
    Aug: '08',
    Sep: '09',
    Oct: '10',
    Nov: '11',
    Dec: '12',
  };

  let dateArr = date.split(' ');

  let [day, month, year] = dateArr;

  let newDay = day.slice(0, -2);
  if (newDay.length === 1) {
    let lastNum = day[0];
    newDay = 0 + lastNum;
  }

  return `${year}-${hash[month]}-${newDay}`;
};
