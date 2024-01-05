"use client"
import React, { useState, useEffect, useMemo, useCallback } from "react";
import { PdfIcons } from '@/icons/PdfIcons'
import Image from "next/image";
import { apiUri } from '@/lib/utils'

interface PdfProps {
  pitch?: string;
}

const Pdf: React.FC<PdfProps> = ({pitch}) => {
  type ImageObject = {
    base64: string;
    size: string;
    page: number;
  };

  type ImageResponse = ImageObject[];
  const api = apiUri().v1;  
  const [base64Images, setBase64Images] = useState<ImageResponse|[]>([]);
  // console.log("🚀 ~ file: Pdf.tsx:24 ~ base64Images:", base64Images)

  const [images, setImages] = useState<any[]>([]);
  // console.log("🚀 ~ file: Pdf.tsx:28 ~ images:", images)
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(0);
  const [startupData] = useState<string>(pitch || "");
  
  const [pdfRendering, setPdfRendering] = useState<boolean>();

  const pdfUrl = useMemo(() => {
    return startupData
      ? `${api}/pitch_viewer/${startupData}`
      : "http://127.0.0.1:4700/v1/pitch_viewer/2023-06-27T14-49-30.700Z-BIZ_DATE_UP_PITCH_compressed.pdf";
  }, [startupData]);
  console.log("🚀 ~ file: Pdf.tsx:37 ~ pdfUrl ~ pdfUrl:", pdfUrl)
  
  const showPdf = useCallback(async () => {
    try {
      const response = await fetch(pdfUrl);
      if (base64Images.length<0) {
        setPdfRendering(true);
        return;
      }

      setPdfRendering(false);

      if (!response.ok) {
        throw new Error(`Failed to fetch images. Status: ${response.status}`);
      }

      const responseData = await response.json();

      if (!responseData.base64Images || !Array.isArray(responseData.base64Images)) {
        throw new Error('Invalid response format');
      }
      setTotalPage(responseData.base64Images.length)
      setBase64Images(responseData.base64Images);
      const imagesList = await Promise.all(
        responseData?.base64Images?.map(async (base64Image:any) => {
          return `data:image/png;base64,${base64Image.base64}`
          // return <Image key={base64Image.page} src={`data:image/png;base64,${base64Image.base64}`} alt="Image" width={50} height={50} />;
        })
      );
    
      setImages(imagesList);
    } catch (error) {
      console.error('Error fetching base64 images:', error);
    }
  }, [pdfUrl]);

  useEffect(() => {
    console.log("Use effect rendering")
    showPdf();
  }, [pdfUrl]);

  const totalMainSlides = useMemo(() => (base64Images && images.length > 0) ? Math.min(base64Images.length, images.length) : 0, [base64Images, images]);
  const totalSmallSlides = useMemo(() => base64Images ? Math.max(0, base64Images.length - totalMainSlides) : 0, [base64Images, totalMainSlides]);

  // const renderPage = useCallback(async () => {
  //   if (base64Images.length<0) {
  //     setPdfRendering(true);
  //     return;
  //   }
  //   setPdfRendering(false);

  //   const imagesList = await Promise.all(
  //     base64Images.map(async (base64Image) => {
  //       return `data:image/png;base64,${base64Image.base64}`
  //       // return <Image key={base64Image.page} src={`data:image/png;base64,${base64Image.base64}`} alt="Image" width={50} height={50} />;
  //     })
  //   );
  
  //   setImages(imagesList);
  // }, [base64Images, setPdfRendering, setImages]);

  // useEffect(() => {
  //   renderPage();
  // }, [renderPage, currentPage]);

  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrev = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
        <div className="relative w-full h-full bg-white text-center ">
        <div className="big-screen h-[70%] w-full">
  <div className="h-full my-5 mx-auto relative">
    <div id="pdf-loader" hidden={!pdfRendering}>
      Loading document ...
    </div>
    <div id="pdf-contents h-[100%]" style={{height:"100%"}}>
      <div className="flex justify-around flex-row h-full border-2 rounded-lg">
      <div
  className="absolute h-full lg:left-0 text-30 z-100 cursor-pointer text-black select-none border-2 flex items-center align-middle"
  id="pdf-prev"
  onClick={()=>currentPage === 1 ?null:handlePrev()}
>
  <PdfIcons.LeftArrow  style={{
    display: currentPage === 1 ? "none" : "block",
  }} />
</div>

        <div
          className="absolute h-full top-150 lg:right-0 text-30 z-100 cursor-pointer text-black select-none border-2 flex items-center align-middle"
          id="pdf-next"
          onClick={()=>currentPage < totalMainSlides - 1 ||
            (totalSmallSlides === 0 && currentPage !== base64Images.length)
              ?handleNext():null}
          
        >
          <PdfIcons.RightArrow 
          style={{
            display:
              currentPage < totalMainSlides - 1 ||
              (totalSmallSlides === 0 && currentPage !== base64Images.length)
                ? "block"
                : "none",
          }}
          />
        </div>
        <div className="flex justify-center z-20 items-center w-[80%] h-[90%] relative rounded-lg">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative h-full w-full min-h-full border-2 rounded-lg "
              style={{
                display: index === currentPage - 1 ? "block" : "none",
                margin: "0",

                boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",
              }}
            >
              <Image
                layout="fill"
                // objectFit="cover"
                src={image}
                unoptimized={true}
                alt="PDF page"
                className="rounded-xl"
              />
            </div>
          ))}
        </div>
      </div>
      {/* {`Total pages ` + base64Images.length} */}

      <div id="page-loader" hidden={!pdfRendering}>
        Loading page ... Page {currentPage} of{" "}
        <div id="pdf-total-pages">{base64Images.length}</div>
      </div>
    </div>
  </div>
</div>

          <div className="small-screen h-[20%] w-full   flex items-center justify-center">
            {/* <div style={{ width: totalSmallSlides === 0 ? "25%" : "25%" }}> */}
            {/* <div > */}
              <div className="flex h-full w-full flex-wrap rounded-xl">
                {images.map((image, index) => (
                  <div
                    key={index}
                    style={{
                      display:
                      (currentPage <= 4 && index < 4) ||
                      (index >= currentPage - 1 && index <= currentPage + 2 && currentPage > 4 ) ||
                      (index >= totalPage - 4 && index < totalPage && currentPage > totalPage - 4)
                        ? "block"
                        : "none",
                      width: "20%",
                      padding: "5px 10px",
                      
                    }}
                    className="cont_image rounded-xl border-2 border-gray-400"
                  >
                   <div className="relative h-full w-full min-h-full rounded-xl border-2 border-gray-400">
  <Image
    id="image-generated"
    className="object-cover w-full h-full rounded-xl border-2 border-gray-400"
    src={image}
    alt={`PDF page ${index + 1}`}
    fill
    unoptimized={true}
  />
   {index === currentPage - 1 && (
          <div
          className="rounded-xl"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.5)", 
              zIndex: 1,
            }}
          />
        )}
</div>
                    {/* {currentPage} */}
                  </div>
                ))}
              </div>
            {/* </div> */}
          </div>
        </div>
  );
}

export default Pdf;
