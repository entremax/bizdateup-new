'use client'

/**
 * function to retrieve local cookie values
 * @param {string} cookieName
 * @example
 * let userCookie = getCookie("user");
 */
export default function getCookieLocal(cookieName: string) {
  let name = cookieName + '='
  let decodedCookie = decodeURIComponent(document.cookie)
  let cookieArray = decodedCookie.split(';')

  for (let i = 0; i < cookieArray.length; i++) {
    let cookie = cookieArray[i]
    while (cookie.charAt(0) == ' ') {
      cookie = cookie.substring(1)
    }
    if (cookie.indexOf(name) == 0) {
      return cookie.substring(name.length, cookie.length)
    }
  }
  return null
}
