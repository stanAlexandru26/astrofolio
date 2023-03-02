const formatter = new Intl.DateTimeFormat('en', {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
  timeZone: 'UTC',
});

/* eslint-disable no-mixed-spaces-and-tabs */
export const getFormattedDate = (date: Date) => (date ? formatter.format(date) : '');
