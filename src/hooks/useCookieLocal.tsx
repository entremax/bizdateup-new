import { useEffect, useState } from 'react'

const useCookieLocal = (cookieName: string) => {
  const [cookieValue, setCookieValue] = useState<string | null>(null)

  useEffect(() => {
    const getCookie = () => {
      const name = cookieName + '='
      const decodedCookie = decodeURIComponent(document.cookie)
      const cookieArray = decodedCookie.split(';')

      for (let i = 0; i < cookieArray.length; i++) {
        let cookie = cookieArray[i]
        while (cookie.charAt(0) == ' ') {
          cookie = cookie.substring(1)
        }
        if (cookie.indexOf(name) === 0) {
          setCookieValue(cookie.substring(name.length, cookie.length))
          return
        }
      }

      setCookieValue(null)
    }

    getCookie()
  }, [cookieName])

  return cookieValue
}

export default useCookieLocal
