// components/ImageCropper.js
import React, { createRef, useEffect, useState } from 'react'
import { Button, Modal,Tooltip } from 'antd'
import Cropper, { ReactCropperElement } from 'react-cropper'
import 'cropperjs/dist/cropper.css'
import { RedoOutlined, UndoOutlined } from '@ant-design/icons'
import { faCropSimple } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
    
    console.log('🚀 ~ cropperRef:', cropperRef)
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
  const handleRotate = (toRotate:number) => {
    const canvas = cropperRef.current?.cropper.getCroppedCanvas()
    
    if (canvas) {
      canvas.toBlob((blob) => {
        if (blob) {
          console.log('🚀 ~ canvas.toBlob ~ blob:', blob)
          cropperRef.current?.cropper.rotate(toRotate)
        }
      }, 'image/png')
    }
  }
  
  
  
  const handleCrop = () => {
    if (cropperRef.current?.cropper ) {
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
        <Button key="crop" type="primary" icon={<FontAwesomeIcon icon={faCropSimple} />} onClick={handleCrop}/>,
      ]}>
      <Cropper
        ref={cropperRef}
        style={{ height: 400, width: '100%' ,objectFit:'contain',position:'relative'}}
        zoomTo={0.1}
        initialAspectRatio={16/9}
        // preview=".img-preview"
        src={image}
        scaleX={1}
        scaleY={1}
        minCropBoxHeight={100}
        minCropBoxWidth={100}
        background={false}
        responsive={true}
        autoCropArea={0}
        rotatable
        rotateTo={90}
        checkOrientation={true}
        guides={true}
      />
      <div className="absolute py-3 flex items-center gap-4 justify-center">
        <Tooltip title={'Rotate -90deg'}>
          <Button icon={<UndoOutlined className={'stroke-primary'}/>} className='!bg-transparent !outline-none' onClick={()=>handleRotate(-90)}/>
        </Tooltip>
        <Tooltip title={'Rotate 90deg'}>
          <Button icon={<RedoOutlined className={'stroke-primary'}/>} className='!bg-transparent !outline-none'  onClick={()=>handleRotate(90)}/>
        </Tooltip>
      </div>
      
    </Modal>
  )
}

export default ImageCropper
