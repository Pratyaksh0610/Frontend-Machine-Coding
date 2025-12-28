export const debouncedFunction = (fn, time) => {
  let timeout;
  return function (...args) {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      console.log("API call made");
      fn(...args);
    }, time);
  };
};