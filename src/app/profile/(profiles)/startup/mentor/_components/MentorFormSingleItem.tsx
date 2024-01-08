"use client"
import {Mentors } from '@/types/invest'
import { Avatar , Badge ,  Upload, message } from 'antd'
import Input from '@/components/form/InputWithoutRef'
import React , {useState} from 'react'
import { apiUri } from '@/lib/utils'
import  Trash  from '@/components/icons/Trash'
import Camera from '@/components/icons/CameraIcon'
import {
  CameraOutlined,
  LoadingOutlined,
  PlusOutlined,
} from '@ant-design/icons'
export default function MentorSingleItem({ mentor , index , changeHandler ,removeHandler}: 
  { mentor: Mentors , index:number , changeHandler:any  , removeHandler:any }) {
    const api = apiUri().v1;

    const [previewImage, setPreviewImage] = useState<string | undefined>();
  const handleFileChange = (file: File ) => {
    console.log("🚀 ~ file: ImageUploader.tsx:42 ~ handleFileChange ~ index:", index)
    // const file = e.target.files && e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const base64String = reader.result as string;
        setPreviewImage(base64String);
        changeHandler && changeHandler(in'banner'nner", ile);
      };

      // Read the file as a data URL (base64)
      reader.readAsDataURL(file);
    }
  };

    return (
      <div className="w-full">
        <div key={mentor._id} className="flex items-center gap-4 py-4 lg:gap-2">
          <div className="min-w-[32px]">
          {/* <Badge color='blue' style={{ backgroundColor: "#7474F4" }} count={<Camera style={{ background: "#7474F4", color: '#f5222d' }} />}> */}
  <Upload
    showUploadList={false}
    beforeUpload={(file) => {
      console.log(file);
      handleFileChange(file);
      changeHandler(index,'profileImage', file)
      return false; 
    }}
  >
    <div style={{ position: 'relative', display: 'inline-block' }}>
    <Avatar
      size={{ xs: 24, sm: 32, md: 80, lg: 80, xl: 80, xxl: 100 }}
      src={typeof mentor.profileImage == "string" && !previewImage ? api + '/mentorfile/' + mentor.profileImage : previewImage? previewImage : undefined}
      icon={<CameraOutlined />}
      className={" bg-gray-100 object-contain p-0 text-gray-400 outline-none transition duration-300 ease-in-out hover:cursor-pointer hover:border-yellow-500 !border-4 border-solid drop-shadow-lg !border-[#8686F5]"}
    />
    <div style={{ position: 'absolute', bottom: 0, right: 0 }}>
    <Camera  />
  </div>
  </div>
  </Upload>
{/* </Badge> */}
          </div>
          <div className="grid w-full py-4 px-4  grid-cols-2 md:grid-cols-2 gap-2 lg:gap-1">
            <div className="py-4 px-4">
              <Input
                key={mentor._id}
                // disabled={!mentor.fullName}
                defaultValue={mentor.fullName}
                name={"full-name"}
                label="Full Name"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  changeHandler(index , 'fullName', event.target.value )
                }
                index={index}
                placeholder={`Enter your full name`}
              />
            </div>
            <div className="py-4 px-4">
              <Input
                key={mentor._id}
                // disabled={!mentor.description}
                defaultValue={mentor.description}
                name={"designation"}
                label="Designation"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  changeHandler(index , 'description', event.target.value )
                }
                index={index}
                placeholder={`Enter your designation`}
              />
            </div>
            <div className="col-span-2 py-4 px-4">
              <Input
                key={mentor._id}
                // disabled={!mentor.linkedinUrl}
                defaultValue={mentor.linkedinUrl}
                name={"linkedin-url"}
                label="Linkedin URL"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  changeHandler(index , 'linkedinUrl', event.target.value )
                }
                index={index}
                placeholder={`Enter your linkedin url`}
              />
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-2 justify-end cursor-pointer" onClick={()=>removeHandler(index)}>
  <Trash />
  <span className="font-medium text-primary">Remove</span>
</div>
      </div>
    );
  }