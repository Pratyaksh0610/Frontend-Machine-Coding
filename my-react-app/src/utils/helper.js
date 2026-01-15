import { alphabets, numbers, symbols } from "../constants/componentConstants";

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

export function getPasswordStrength(length) {
  if (typeof length !== "number" || Number.isNaN(length)) {
    return "UNDEFINED";
  }
  if (length < 6) {
    return "WEAK";
  } else if (length < 8) {
    return "MEDIUM";
  }
  return "STRONG";
}

export async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    alert("COPIED");
  } catch (error) {
    console.error(error);
  }
}

export function getRandomLetter(type) {
  switch (type) {
    case "upperCase": {
      const index = Math.floor(Math.random() * alphabets.length);
      return alphabets[index];
    }
    case "lowerCase": {
      const index = Math.floor(Math.random() * alphabets.length);
      return alphabets[index].toLowerCase();
    }
    case "numbers": {
      const index = Math.floor(Math.random() * numbers.length);
      return numbers[index];
    }
    case "symbols": {
      const index = Math.floor(Math.random() * symbols.length);
      return symbols[index];
    }
    default:
      return "?";
  }
}
