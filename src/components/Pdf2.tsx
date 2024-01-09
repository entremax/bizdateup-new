'use client'

import React, { useCallback, useEffect, useMemo, useState } from 'react'
// import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import { PdfIcons } from '@/icons/PdfIcons'
import Image from 'next/image'

interface PdfProps {
  data?: string
}

// // console.log("🚀 ~ file: Pdf.tsx:12 ~ window:", window)

const Pdf: React.FC<PdfProps> = (props) => {
  const [pdf, setPdf] = useState<any | null>(null)
  // console.log("🚀 ~ file: Pdf.tsx:14 ~ pdf:", pdf)

  const [images, setImages] = useState<any[]>([])
  // console.log("🚀 ~ file: Pdf.tsx:21 ~ images:", images)
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [startupData] = useState<string>(props.data || '')
  // const [PDFJS, setPDFJS] = useState<any>();

  // console.log("🚀 ~ file: Pdf.tsx:18 ~ startupData:", startupData)

  // useEffect(() => {
  //   // Check if window is defined before using it
  //   if (typeof window !== 'undefined') {
  // //     console.log("🚀 ~ file: Pdf.tsx:26 ~ useEffect ~ window:", window)
  //     setPDFJS(window.pdfjsLib);
  //   } else {
  // //     console.log("🚀 ~ file: Pdf.tsx:30 ~ useEffect ~ window:", window)
  //     console.warn('Window object not available, running on the server.');
  //   }
  // }, []);

  const [pdfRendering, setPdfRendering] = useState<boolean>()

  const pdfUrl = useMemo(() => {
    return startupData
      ? `https://www.bizdateup.com/v1/pitch/${startupData}`
      : 'https://www.bizdateup.com/v0/pitch/2023-06-27T14-49-30.700Z-BIZ_DATE_UP_PITCH_compressed.pdf'
  }, [startupData])

  // console.log("🚀 ~ file: Pdf.tsx:27 ~ pdfUrl ~ pdfUrl:", pdfUrl)

  // const showPdf = useCallback(async () => {
  //   console.log("Use effect rendering3")
  //   try {
  //     console.log("Use effect rendering2")
  //     const  pdfjsLib  = await require('pdfjs-dist/build/pdf.mjs');
  // //     console.log("🚀 ~ file: Pdf.tsx:54 ~ showPdf ~ pdfjsLib:", pdfjsLib)
  //     const worker = await require("pdfjs-dist/build/pdf.worker.mjs");
  //     pdfjsLib.GlobalWorkerOptions.workerSrc = worker;

  //     const _PDF_DOC = await pdfjsLib.getDocument({
  //       url: pdfUrl,
  //     });
  // //     console.log("🚀 ~ file: Pdf.tsx:45 ~ showPdf ~ _PDF_DOC:", _PDF_DOC)
  //     setPdf(_PDF_DOC);
  //   } catch (error) {
  // //     console.log("🚀 ~ file: Pdf.tsx:47 ~ showPdf ~ error:", error)
  //     // Handle error
  //   }
  // }, [pdfUrl]);

  const showPdf = useCallback(async () => {
    console.log('Use effect rendering3')
    try {
      console.log('Use effect rendering2')
      const pdfjsLib = await import('pdfjs-dist/build/pdf.mjs')
      // console.log("🚀 ~ file: Pdf.tsx:54 ~ showPdf ~ pdfjsLib:", pdfjsLib)

      // Dynamic import for the worker
      const worker = await import('pdfjs-dist/build/pdf.worker.min.mjs')
      // pdfjsLib.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@2.12.313/build/pdf.worker.min.js`;
      pdfjsLib.GlobalWorkerOptions.workerSrc = worker

      const _PDF_DOC = await pdfjsLib.getDocument({
        url: pdfUrl,
      })

      // console.log("🚀 ~ file: Pdf.tsx:45 ~ showPdf ~ _PDF_DOC:", _PDF_DOC)
      const testpdf = await _PDF_DOC.promise
      console.log('🚀 ~ file: Pdf.tsx:88 ~ showPdf ~ testpdf:', testpdf)
      setPdf(testpdf)
    } catch (error) {
      console.error('🚀 ~ file: Pdf.tsx:47 ~ showPdf ~ error:', error)
      // Handle error
    }
  }, [pdfUrl])

  useEffect(() => {
    console.log('Use effect rendering')
    showPdf()
  }, [pdfUrl])

  const totalMainSlides = useMemo(
    () =>
      pdf && images.length > 0 ? Math.min(pdf.numPages, images.length) : 0,
    [pdf, images],
  )
  const totalSmallSlides = useMemo(
    () => (pdf ? Math.max(0, pdf.numPages - totalMainSlides) : 0),
    [pdf, totalMainSlides],
  )

  const renderPage = useCallback(async () => {
    if (!pdf) {
      setPdfRendering(true)
      return
    }
    setPdfRendering(false)

    const imagesList: string[] = []
    const canvas = document.createElement('canvas')

    // console.log("🚀 ~ file: Pdf.tsx:111 ~ renderPage ~ pdf:", pdf.numPages)
    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i)
      // console.log("🚀 ~ file: Pdf.tsx:112 ~ renderPage ~ page:", page)
      const viewport = page.getViewport({ scale: 1 })
      canvas.height = viewport.height
      canvas.width = viewport.width
      const render_context = {
        canvasContext: canvas.getContext('2d'),
        viewport: viewport,
      }

      await page.render(render_context).promise
      const img = canvas.toDataURL('image/png')
      imagesList.push(img)
    }
    setImages(imagesList)
  }, [pdf])

  useEffect(() => {
    renderPage()
  }, [renderPage, currentPage])

  const handleNext = () => {
    console.log('prev')
    console.log(
      '🚀 ~ file: Pdf.tsx:141 ~ handleNext ~ currentPage:',
      currentPage,
    )
    setCurrentPage(currentPage + 1)
  }

  const handlePrev = () => {
    console.log('prev')
    console.log(
      '🚀 ~ file: Pdf.tsx:146 ~ handlePrev ~ currentPage:',
      currentPage,
    )
    setCurrentPage(currentPage - 1)
  }

  const styles = {
    wrapper: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '5px',
    },
    imageWrapper: {
      border: '1px solid rgba(0,0,0,0.15)',
      borderRadius: '3px',
      boxShadow: '0 2px 5px 0 rgba(0,0,0,0.25)',
      padding: '0',
    },
  }

  return (
    <>
      <section>
        <div className="relative w-[100%] bg-[#ffffff] py-[25px] text-center md:h-[100%] ">
          <div className="big-screen h-[60%]">
            <div className="mx-auto my-[20px] h-[100%] md:w-[400px]">
              <div id="pdf-loader" hidden={!pdfRendering}>
                Loading document ...
              </div>

              <div id="pdf-contents ">
                <div className="my-[20px] flex flex-row justify-around">
                  <PdfIcons.LeftArrow
                    className="absolute top-[150px] z-[30]  cursor-pointer select-none text-[30px] text-[#000] lg:left-0 "
                    id="pdf-prev"
                    class="pdf-prev"
                    onClick={handlePrev}
                    style={{
                      display: currentPage === 1 ? 'none' : 'block',
                    }}
                  />
                  <PdfIcons.RightArrow
                    className="absolute top-[150px]  z-[30] cursor-pointer select-none text-[30px] text-[#000] lg:right-0"
                    id="pdf-next"
                    class="pdf-next"
                    onClick={handleNext}
                    style={{
                      display:
                        currentPage < totalMainSlides - 1 ||
                        (totalSmallSlides === 0 &&
                          currentPage !== pdf?.numPages)
                          ? 'block'
                          : 'none',
                    }}
                  />
                  <div className="relative flex h-[100%] w-[100%] items-center justify-center">
                    <div className="p-[7px]">
                      {images.map((image, index) => (
                        <div
                          key={index}
                          className=" md:w-full"
                          style={{
                            display:
                              index === currentPage - 1 ? 'block' : 'none',

                            margin: '0',
                            border: '1px solid black',
                            boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px',
                            zIndex: '1',
                          }}>
                          {/* <div className="w-full"> */}
                          <Image
                            fill
                            className="h-full w-full"
                            src={image}
                            alt="PDF page"
                          />
                          {/* </div> */}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {`Total pages ` + pdf?.numPages}

                <div id="page-loader" hidden={!pdfRendering}>
                  Loading page ... Page {currentPage} of{' '}
                  <div id="pdf-total-pages">{pdf?.numPages}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="small-screen mt-[20%] flex h-[30%] items-center justify-center">
            {/* small screen slide 1 */}
            <div style={{ width: totalSmallSlides === 0 ? '25%' : '25%' }}>
              <div className="flex w-[100%] flex-wrap">
                {images.map((image, index) => (
                  <div
                    key={index}
                    style={{
                      display: index === currentPage - 1 ? 'block' : 'none',
                      width: '100%',
                      height: '100%',
                      padding: '5px 10px',
                    }}
                    className="cont_image">
                    <div
                      style={{
                        // width: "100%",
                        // height: "100%",
                        margin: '0',
                        border: '1px solid black',
                      }}>
                      <Image
                        id="image-generated"
                        className="relative"
                        src={image}
                        fill
                        alt={`PDF page ${index + 1}`}
                      />
                    </div>
                    {currentPage}
                  </div>
                ))}
              </div>
            </div>
            {/* small screen slide 2 */}
            {/* <div style={{ width: totalSmallSlides === 0 ? "100%" : "25%" }}>
              <div className="flex w-[100%] flex-wrap">
                {images.map((image, index) => (
                  <div
                    key={index}
                    style={{
                      display:
                        index === currentPage ||
                        (index === totalMainSlides - 1 && currentPage === 1)
                          ? "block"
                          : "none",
                      width: "100%",
                      height: "100%",
                      padding: "5px 10px",
                    }}
                  >
                    {index === totalMainSlides - 1 &&
                    currentPage === 1 ? null : (
                      <>
                      <div>
                        <Image
                          id="image-generated"
                          src={image}
                          fill
                          style={{
                            width: "100%",
                            height: "100%",
                            margin: "0",
                            border: "1px solid black",
                          }}
                          alt={`PDF page ${index + 1}`}
                          
                        />
                        </div>
                        {currentPage + 1}
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div> */}

            {/* small screen slide 3 */}

            {/* <div style={{ width: totalSmallSlides === 0 ? "100%" : "25%" }}>
              <div className="flex w-[100%] flex-wrap">
                {images.map((image, index) => (
                  <div
                    key={index}
                    style={{
                      display:
                        (index === currentPage + 1 &&
                          currentPage >= 1 &&
                          currentPage <= totalMainSlides - 2) ||
                        (index === totalMainSlides - 1 && currentPage === 0) ||
                        (index === totalMainSlides - 2 && currentPage === 0)
                          ? "block"
                          : "none",
                      width: "100%",
                      height: "100%",
                      padding: "5px 10px",
                    }}
                  >
                    {index === totalMainSlides - 1 &&
                    currentPage === 0 ? null : (
                      <div  style={{
                        width: "100%",
                        height: "100%",
                        margin: "0",
                        border: "1px solid black",
                      }}>
                        <Image
                          id="image-generated"
                          src={image}
                          alt={`PDF page ${index + 1}`}
                          fill
                          
                        />
                        {currentPage + 2}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div> */}

            {/* small screen slide 4 */}

            {/* <div style={{ width: totalSmallSlides === 0 ? "100%" : "25%" }}>
              <div className="flex w-[100%] flex-wrap">
                {images.map((image, index) => (
                  <div
                    key={index}
                    style={{
                      display:
                        index === currentPage + 2 &&
                        currentPage >= 1 &&
                        currentPage <= totalMainSlides - 2
                          ? "block"
                          : "none",
                      width: "100%",
                      height: "100%",
                      padding: "5px 10px",
                    }}
                  >
                    {index === totalMainSlides - 1 &&
                    currentPage === 0 ? null : (
                      <>
                        <Image
                          id="image-generated"
                          src={image}
                          alt={`PDF page ${index + 1}`}
                          fill
                         
                        />
                        {currentPage + 3}
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  )
}

export default Pdf
