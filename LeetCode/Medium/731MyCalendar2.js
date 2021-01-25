class MyCalendarTwo {
  constructor(calendar, doubleBooked) {
    this.calendar = [];
    this.doubleBooked = [];
  }
  book(start, end) {
    for (const meeting of this.doubleBooked) {
      const [meetingStart, meetingEnd] = meeting;
      if (start < meetingEnd && end > meetingStart) return false;
    }

    for (const meeting of this.calendar) {
      const [meetingStart, meetingEnd] = meeting;
      if (start < meetingEnd && end > meetingStart) {
        this.doubleBooked.push([
          Math.max(meetingStart, start),
          Math.min(meetingEnd, end),
        ]);
      }
    }

    this.calendar.push([start, end]);
    return true;
  }
}
