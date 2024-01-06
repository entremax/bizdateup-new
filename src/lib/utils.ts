// noinspection JSUnusedGlobalSymbols

import { KYCStatus } from '@/types'
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { NavigationKey } from '@/components/auth/otp_field'
import type { RcFile } from 'antd/es/upload'

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

enum ApiVersion {
  v0 = 'v0',
  v1 = 'v0',
}

/**
 * Returns the API URIs based on the current environment's base URL.
 *
 */
export function apiUri() {
  const baseUrl = process.env.NEXT_PUBLIC_APP_TEST_URL
  if (baseUrl) {
    return {
      v0: baseUrl + ApiVersion.v0,
      v1: baseUrl + ApiVersion.v0,
      base: baseUrl,
    }
  } else {
    return { v0: '', v1: '', base: '' }
  }
}

/**
 * Formats the given valuation amount in the Indian format.
 * If the value is greater than or equal to 10,000,000, it's converted to crores (Cr) and rounded to two decimal places.
 * Otherwise, it's formatted using the Indian number format and returned as is.
 *
 * @param {number} value - The valuation amount to be formatted.
 * @param unit
 * @return {string} The formatted valuation amount.
 */
export function formatIndianValuation(
  value: number | string,
  unit = true,
): string {
  if (typeof value === 'string') {
    value = parseFloat(value)
  }

  if (value >= 10000000 && unit) {
    const crores = (value / 10000000).toFixed(2)
    const formattedCrores = crores.endsWith('.00')
      ? crores.slice(0, -3)
      : crores
    return `${formattedCrores} Cr`
  } else if (value >= 100000 && unit) {
    const lakhs = (value / 100000).toFixed(2)
    const formattedLakhs = lakhs.endsWith('.00') ? lakhs.slice(0, -3) : lakhs
    return `${formattedLakhs} L`
  } else {
    const formattedValue = new Intl.NumberFormat('en-IN').format(value)
    return formattedValue.endsWith('.00')
      ? formattedValue.slice(0, -3)
      : formattedValue
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

/**
 * Formats a number with decimal places.
 *
 * @param {number} value - The number to be formatted.
 * @return {string} The formatted number as a string.
 */
export function formatNumberWithDecimal(value: number): string {
  // Check if the number has more than 1 decimal place
  if (value % 1 !== 0) {
    // If it has more than 1 decimal place, format with 2 decimal places
    return value.toFixed(2)
  } else {
    // If it has 0 or 1 decimal place, format with 1 decimal place
    return value.toFixed(1)
  }
}

export const getBase64 = (file: RcFile): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result as string)
    reader.onerror = (error) => reject(error)
  })
