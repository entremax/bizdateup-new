'use client'
import React, { useRef, useState } from 'react'
import { StartupData, TeamMember } from '@/types/invest'
import ImageUploader from '@/components/form/ImageUploader'
import { Button } from 'antd'
import { useStartupUpdateContext } from '@/components/profile/startup/context';
import { useRouter } from 'next/navigation'
import  {FileIcons} from '@/icons/FileIcon'

export default function FaqForm({ initialUsers }: { initialUsers: StartupData }) {
  const router = useRouter()
  const [user, setUser] = useState(initialUsers.pitch);
  const [file, setFiles] = useState<File>();

  const { handleUpdate, loading } = useStartupUpdateContext();
  
  const removeUploaded = () => {
      const data = {
        refId:initialUsers._id,
      }
      handleUpdate(data , 'delete_pitch')
  
    setUser("");
  };

  const removeUnUploaded = () => {
    setFiles(undefined);
  };

  const handleProfileUpdate = async () => {
    try {
      if (file) {
        const data = new FormData();
        data.append('refId', initialUsers._id);
  
          data.append('files', file);
      
        await handleUpdate(data, 'pitch');
        return router.refresh();
      }
    } catch (error) {
      console.error('Error updating profile:', error);   
    }
  };

  const onChange = (selectedFiles: File |  undefined) => {
    console.log("🚀 ~ file: PitchForm.tsx:47 ~ onChange ~ selectedFiles:", selectedFiles)
    if (selectedFiles ) {
      
           setFiles(selectedFiles);
           setUser("");
    }
  };
  
  return (
    <div className="grid grid-cols-1">
      <div className="grid gap-8 p-8 lg:grid-cols-1">
      <ImageUploader
              // key={user._id}
              // disabled={false}
              // defaultValue={event.url}
              //@ts-ignore
              // ref={field.fieldType !== 'select' && refs[field.name]}
              name={"event"}
              type={"docs"}
              onChange={onChange}
              // label={"Image"}
              multiple={false}
              placeholder={`Pitch`}
            />
      </div>
      
      <div className="grid grid-cols-1 px-8 py-4 pb-8">
      {/* {user.map(( file , index ) => ( */}
              <React.Fragment>
                {user?
                <div className="border_gray rounded-2xl my-2 p-5 flex flex-row items-center gap-2">
              <FileIcons.Pdf/>    <span className="text-md text-gray-400">{user}</span>
              <div onClick={()=>removeUploaded()}>X</div>
              </div>
            :null  
            }
              </React.Fragment>
            {/* ))} */}
      {file?
              <React.Fragment >
                <div className="border_gray rounded-2xl my-2 p-5 flex flex-row items-center gap-2">
              <FileIcons.Pdf/>    <span className="text-md text-gray-400">{file.name}</span>
               <div onClick={()=>removeUnUploaded()}>X</div>
              </div>
              
              </React.Fragment>
            :null}
      </div>
      <div className="flex items-center justify-between px-8 pb-8">
        <Button
          loading={loading}
          disabled={loading}
          type={'default'}
          onClick={handleProfileUpdate}
          className={
            '!bg-light-shadow !px-6 !py-2 font-medium  !outline-none  !h-auto !border-none !bg-primary !px-6 !py-2 !text-white !outline-none w-1/4 md:w-1/4'
          }
          >
          Save
        </Button>
      </div>
    </div>
  )
}
