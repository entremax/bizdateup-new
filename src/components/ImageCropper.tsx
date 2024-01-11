// components/ImageCropper.js
import React, { createRef, useEffect, useState } from 'react'
import { Button, Modal } from 'antd'
import Cropper, { ReactCropperElement } from 'react-cropper'
import 'cropperjs/dist/cropper.css'

// import 'antd/dist/antd.css';
interface ImageCropperProps {
  visible: any
  onCancel: any
  onCrop: any
  imageFile: any
}

const ImageCropper: React.FC<ImageCropperProps> = ({
  visible,
  onCancel,
  onCrop,
  imageFile,
}) => {
  console.log('🚀 ~ imageFile:', imageFile)
  console.log('🚀 ~ visible:', visible)
  const cropperRef = createRef<ReactCropperElement>()
  console.log('🚀 ~ cropperRef:', cropperRef.current)
  const [image, setImage] = useState<string | undefined>(undefined)

  useEffect(() => {
    if (visible && imageFile) {
      const reader = new FileReader()
      reader.onload = (e) => {
        // cropperRef.current.src = e.target.result;
        // setImage(reader.result as any);
        setImage(reader.result as any)
      }
      reader.readAsDataURL(imageFile)
    }
  }, [visible, imageFile])

  const handleCrop2 = () => {
    const canvas = cropperRef.current?.cropper.getCroppedCanvas()

    if (canvas) {
      canvas.toBlob((blob) => {
        if (blob) {
          console.log('🚀 ~ canvas.toBlob ~ blob:', blob)
          onCrop(
            cropperRef.current?.cropper.getCroppedCanvas().toDataURL(),
            blob,
          )

          //   const formData = new FormData();
          //   formData.append('croppedImage', blob, 'cropped-image.png');

          //   onCrop(formData);
        }
      }, 'image/png')
    }

    onCancel()
  }

  const handleCrop = () => {
    console.log(cropperRef.current)
    if (typeof cropperRef.current?.cropper !== 'undefined') {
      handleCrop2()
    }
    onCancel()
  }

  return (
    <Modal
      open={visible}
      title="Crop Image"
      onCancel={onCancel}
      maskClosable={false}
      footer={[
        <Button key="cancel" onClick={onCancel}>
          Cancel
        </Button>,
        <Button key="crop" type="primary" onClick={handleCrop}>
          Crop
        </Button>,
      ]}>
      <Cropper
        ref={cropperRef}
        style={{ height: 400, width: '100%' }}
        zoomTo={0.5}
        initialAspectRatio={1}
        // preview=".img-preview"
        src={image}
        viewMode={1}
        minCropBoxHeight={10}
        minCropBoxWidth={10}
        background={false}
        responsive={true}
        autoCropArea={1}
        checkOrientation={false}
        guides={true}
      />
      {/* <div className="box" style={{ width: "50%", float: "right" }}>
          <h1>Preview</h1>
          <div
            className="img-preview"
            style={{ width: "100%", float: "left", height: "300px" }}
          />
        </div> */}
    </Modal>
  )
}

export default ImageCropper
