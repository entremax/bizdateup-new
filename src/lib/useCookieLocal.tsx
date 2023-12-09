'use client'
import { useEffect, useState } from 'react'

export default function useCookieLocal(cookieName: string) {
  const [cookie, setCookie] = useState<string | null>(null)

  useEffect(() => {
    const fetchCookie = () => {
      let name = cookieName + '='
      let decodedCookie = decodeURIComponent(document.cookie)
      let cookieArray = decodedCookie.split(';')

      for (let i = 0; i < cookieArray.length; i++) {
        let cookie = cookieArray[i]
        while (cookie.charAt(0) == ' ') {
          cookie = cookie.substring(1)
        }
        if (cookie.indexOf(name) == 0) {
          setCookie(cookie.substring(name.length, cookie.length))
          return
        }
      }
      setCookie(null)
    }

    fetchCookie()

    const cookieInterval = setInterval(() => {
      fetchCookie()
    }, 1000) // Check every second

    // Clean up on unmount
    return () => clearInterval(cookieInterval)
  }, [cookieName]) // Re-run effect when dependencies change

  return cookie
}
