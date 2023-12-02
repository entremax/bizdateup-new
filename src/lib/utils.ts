// noinspection JSUnusedGlobalSymbols

import { KYCStatus } from '@/types'
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { NavigationKey } from '@/app/(auth)/components/_otpField'

/**
 * Combines multiple class values into a single string.
 *
 * @param {...ClassValue[]} inputs - The class values to be combined.
 * @returns {string} - A string representing the combined class value.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}

/**
 * Validates if the given value is a valid email or phone number.
 *
 * @param {string} value - The value to be validated.
 * @return {false|'email'|'phone'} - Returns 'email' if the value is a valid email address, 'phone' if it is a valid phone number, and false otherwise.
 */
export function validateEmailOrPhone(value: string): false | 'email' | 'phone' {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  const phoneRegex = /^\d{10}$/
  if (emailRegex.test(value)) {
    return 'email'
  } else if (phoneRegex.test(value)) {
    return 'phone'
  } else {
    return false
  }
}

/**
 * Capitalizes the first letter of each string in an array.
 *
 * @param {string[]} arr - The array of strings to capitalize the first letter of.
 * @return {string[]} - The array with the first letters capitalized.
 */
export function capitalizeFirstLetter(arr: string[]): string[] {
  return arr.map(
    (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase() + ' ',
  )
}

/**
 * Converts a navigation key to a KYC status.
 *
 * @param {string} navKey - The navigation key.
 * @returns {KYCStatus|undefined} The corresponding KYC status, or undefined if no match is found.
 */
export function convertNavigationKeyToKYCStatus(
  navKey: NavigationKey,
): KYCStatus | undefined {
  switch (navKey) {
    case 'profile':
      return KYCStatus.profile
    case 'pan':
      return KYCStatus.pan
    case 'aadhar':
      return KYCStatus.aadhar
    case 'bank':
      return KYCStatus.bank
    case 'other':
      return KYCStatus.other
    default:
      return undefined // Handle the case where navKey doesn't match any KYCStatus
  }
}

/**
 * Returns the API URIs based on the current environment's base URL.
 *
 * @returns {v0:string,v1:string} An object with v0 and v1 properties representing the API URIs.
 *                   If the base URL is available, the URIs are appended with the respective API versions.
 *                   Otherwise, empty strings are returned for both URIs.
 */
export function apiUri(): { v0: string; v1: string } {
  const baseUrl = process.env.NEXT_PUBLIC_APP_TEST_URL
  if (baseUrl) {
    return { v0: baseUrl + 'v0', v1: baseUrl + 'v1' }
  } else {
    return { v0: '', v1: '' }
  }
}

/**
 * Formats the given valuation amount in the Indian format.
 * If the value is greater than or equal to 10,000,000, it's converted to crores (Cr) and rounded to two decimal places.
 * Otherwise, it's formatted using the Indian number format and returned as is.
 *
 * @param {number} value - The valuation amount to be formatted.
 * @return {string} The formatted valuation amount.
 */
export function formatIndianValuation(value: number): string {
  if (value >= 10000000) {
    // Convert to crores (Cr) and round to two decimal places
    const crores = (value / 10000000).toFixed(2)
    return `${crores} Cr`
  } else if (value >= 100000) {
    // Convert to lakhs (L) and round to two decimal places
    const lakhs = (value / 100000).toFixed(2)
    return `${lakhs} L`
    // } else if (value >= 1000) {
    //   // Convert to thousands (k) and round to two decimal places
    //   const thousands = (value / 1000).toFixed(2);
    //   return `${thousands} k`;
  } else {
    return new Intl.NumberFormat('en-IN').format(value) // Convert to a string and return as is
  }
}

/**
 * Calculates the percentage of a total raised amount in relation to a target amount.
 *
 * @param {number} totalRaised - The total amount raised.
 * @param {number} target - The target amount.
 * @returns {number} - The calculated percentage.
 */
export const calculatePercentage = (
  totalRaised: number,
  target: number,
): number => {
  const originalPercentage = (totalRaised / target) * 100
  const roundedPercentage = (
    Math.round(originalPercentage * 100) / 100
  ).toFixed(2) // Round and format to 2 decimal places
  return parseFloat(roundedPercentage) // Append '%' to the result
}

/**
 * Retrieves the file name from a given string by extracting the last part after splitting it using the underscore character.
 * @param {string} fileName - The string containing the file name.
 * @return {string} - The extracted file name.
 */
export function getFileName(fileName: string): string | undefined {
  const parts = fileName.split('_')
  // Remove and get the last part
  return parts.pop()
}

/**
 * Formats a date input string into a custom date format.
 *
 *
 */
export function formatCustomDate(inputDateString: string) {
  const date = new Date(inputDateString)
  
  const day = date.getDate()
  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]
  const monthIndex = date.getMonth()
  const year = date.getFullYear()
  
  return `${day} ${monthNames[monthIndex]} ${year}`
}
