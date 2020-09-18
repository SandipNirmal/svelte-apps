export const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
export const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

/**
 * Returns human readble difference between now and passed value
 * @param {Date} time
 */
export function getTimeDiffFromNow(time) {
  const now = Date.now();
  const diff = now - time;

  if (diff < MIN) {
    return `${Math.round(diff / SECOND)} second ago`;
  } else if (diff > MIN && diff < HOUR) {
    return `${Math.round(diff / MIN)} mins ago`;
  } else if (diff > HOUR && diff < DAY) {
    return `${Math.round(diff / HOUR)} hours ago`;
  } else {
    const date = new Date();
    return `${DAYS[date.getDay()]}, ${date.getDate()} ${
      MONTHS[date.getMonth()]
    } ${date.getFullYear()}`;
  }
}
