import { apiUri } from '@/lib/utils'
import { cookies } from 'next/headers'

export const fetchData = async <
  T extends {
    code: number
    data: any
    message: string
  },
>(
  endpoint: string,
  method = 'GET',
  revalidate = 3600,
): Promise<T['data']> => {
  const token = cookies().get('token')?.value ?? ''
  try {
    const res = await fetch(apiUri().v0 + endpoint, {
      next: { revalidate },
      method,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    if (!res.ok && !res.status) {
      throw new Error('Network Error')
    }

    let response
    try {
      response = (await res.json()) as T
    } catch (error) {
      console.error('Error parsing JSON:', error)
      throw new Error('Error parsing JSON')
    }
    if (!response.data) {
      console.error('Error while accessing endpoint', response.message)
      throw new Error(response.message ?? response.code)
    }
    if (response.data && response.data.code !== 200) {
      console.error(
        'Error while accessing endpoint',
        response.data.message ?? response.data,
      )
      throw new Error(response.data.message ?? response.data.code)
    }

    return response.data.data ?? response.data ?? null
  } catch (e) {
    console.error('Fetch error:', e)
    throw new Error('Fetch Error')
  }
}
