export const hhmmss = (second = 0) => {
  let date = new Date(null);
  date.setSeconds(second);
  return date.toISOString().substr(11, 8);
};
