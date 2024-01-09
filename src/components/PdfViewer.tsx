'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'

const PdfViewer = () => {
  type ImageObject = {
    base64: string
    size: string
  }
  type ImageResponse = ImageObject[]

  const [base64Images, setBase64Images] = useState<ImageResponse | null>(null)

  console.log(
    '🚀 ~ file: PdfViewer.tsx:6 ~ PdfViewer ~ base64Images:',
    base64Images,
  )

  useEffect(() => {
    const fetchBase64Images = async () => {
      try {
        const response = await fetch(
          'https://www.bizdateup.com/v0/pitch_viewer/2023-06-27T14-49-30.700Z-BIZ_DATE_UP_PITCH_compressed.pdf',
        )

        if (!response.ok) {
          throw new Error(`Failed to fetch images. Status: ${response.status}`)
        }

        const responseData = await response.json()

        if (
          !responseData.base64Images ||
          !Array.isArray(responseData.base64Images)
        ) {
          throw new Error('Invalid response format')
        }

        setBase64Images(responseData.base64Images)
      } catch (error) {
        console.error('Error fetching base64 images:', error)
      }
    }

    fetchBase64Images()
  }, [])

  return (
    <div>
      {base64Images?.map((imageObject, index) => (
        <div key={index}>
          <Image
            src={`data:image/png;base64, ${imageObject.base64}`}
            fill
            alt={`Size: ${imageObject.size}`}
          />
        </div>
      ))}
    </div>
  )
}

export default PdfViewer
