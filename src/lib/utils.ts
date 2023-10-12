import {DataInner, KYCStatus, KYCStatusArray} from '@/types';
import {type ClassValue, clsx} from 'clsx';
import {twMerge} from 'tailwind-merge';
import {NavigationKey} from "@/app/(auth)/_components/_otpField";

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

export function convertNavigationKeyToKYCStatus(navKey: NavigationKey): KYCStatus | undefined {
  switch (navKey) {
    case 'profile':
      return KYCStatus.profile;
    case 'pan':
      return KYCStatus.pan;
    case 'aadhar':
      return KYCStatus.aadhar;
    case 'bank':
      return KYCStatus.bank;
    case 'other':
      return KYCStatus.other;
    default:
      return undefined; // Handle the case where navKey doesn't match any KYCStatus
  }
}