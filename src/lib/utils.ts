import {type ClassValue, clsx} from 'clsx';
import {twMerge} from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function validateEmailOrPhone(value: string) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\d{10}$/;
  if (emailRegex.test(value)) {
    return 'email';
  } else if (phoneRegex.test(value)) {
    return 'phone';
  } else {
    return false;
  }
}

export function capitalizeFirstLetter(arr: string[]): string[] {
  return arr.map(
    (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase() + ' '
  );
}