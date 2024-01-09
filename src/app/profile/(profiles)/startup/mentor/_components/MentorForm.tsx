'use client'
import React, { useCallback, useMemo, useState } from 'react'
import { Mentors, StartupData } from '@/types/invest'
import MentorFormSingleItem from './MentorFormSingleItem'
import { Button } from 'antd'
import { useStartupUpdateContext } from '@/components/profile/startup/context'
import { useRouter } from 'next/navigation'

export default function TeamForm({
  initialUsers,
}: {
  initialUsers: StartupData
}) {
  const router = useRouter()
  const [mentors, setMentors] = useState(initialUsers?.mentors)
  console.log('🚀 ~ file: MentorForm.tsx:23 ~ TeamForm ~ user:', mentors)

  // const refs: Record<'company-name', MutableRefObject<null | InputRef>> = {
  //   'company-name': useRef<InputRef | null>(null),
  // }

  // const handleFileChange = (fieldName: string, event: UploadProps) => {
  //   console.log("🚀 ~ file: companyProfileForm.tsx:172 ~ handleRadioChange ~ event:", event)
  //   console.log("🚀 ~ file: companyProfileForm.tsx:172 ~ handleRadioChange ~ fieldName:", fieldName)
  // };

  const { handleUpdate, loading } = useStartupUpdateContext()

  // const handleChange = (
  //   fieldName: any,
  //   value: DefaultOptionType | DefaultOptionType[],
  // ) => {
  //    setSelected((prevState: any) => ({
  //      ...prevState,
  //      [fieldName]: value,
  //    }))
  // }
  console.log(mentors)

  const handleMentorsUpdate = async () => {
    // let values = {} as {
    //   [key in FieldNames]: unknown | null
    // }
    const data = new FormData()
    data.append('refId', initialUsers._id)
    mentors.forEach((item, index) => {
      console.log(
        '🚀 ~ file: MentorForm.tsx:48 ~ mentors.forEach ~ index:',
        index,
      )
      if (item.fullName && item.linkedinUrl) {
        data.append(`_id[]`, item._id || 'new')
        data.append(`fullName[]`, item.fullName)
        data.append(`description[]`, item.description)
        data.append(`linkedinUrl[]`, item.linkedinUrl)
        if (typeof item.profileImage === 'string') {
          data.append(`unchanged_file[]`, String(index))
        } else {
          data.append(`files`, item.profileImage)
          data.append(`changed_file[]`, String(index))
        }
        // data.append(`linkedinUrl[${index}]`, item.linkedinUrl);
      }
    })

    await handleUpdate(data, 'mentor')
    return router.refresh()
  }

  const changeHandler = useCallback(
    (index: number, field: keyof Omit<Mentors, '_id'>, newData: any) => {
      setMentors((prevMentors) => {
        const updatedData = [...prevMentors]
        if (index >= 0 && index < updatedData.length) {
          updatedData[index][field] = newData
          console.log('Updated Data:', updatedData)
          return updatedData
        } else {
          console.error('Invalid index:', index)
          // Return the previous state to ensure it doesn't change
          return prevMentors
        }
      })
    },
    [],
  )
  const memoizedChangeHandler = useMemo(() => changeHandler, [changeHandler])

  const remove = (index: number) => {
    setMentors((prevMentors) => {
      if (index >= 0 && index < prevMentors.length) {
        const deletedMentor = prevMentors[index]

        if (deletedMentor._id) {
          console.log('Deleted mentor with id:', deletedMentor._id)
          const data = {
            refId: initialUsers._id,
            delId: deletedMentor._id,
          }
          console.log(
            '🚀 ~ file: TeamForm.tsx:87 ~ setTeamMembers ~ data:',
            data,
          )
          handleUpdate(data, 'delete_mentor')
        }

        return [...prevMentors.slice(0, index), ...prevMentors.slice(index + 1)]
      } else {
        console.error('Invalid index:', index)
        return prevMentors
      }
    })
  }

  const addNew = () => {
    const temp = {
      fullName: '',
      description: '',
      linkedinUrl: '',
      profileImage: '',
    }

    const updatedMentors = [...mentors, temp]

    // setUser((prevUser) => ({
    //   ...prevUser,
    //   mentors: updatedMentors,
    // }));

    setMentors(updatedMentors)

    console.log(
      '🚀 ~ file: MentorForm.tsx:105 ~ addNew ~ user:',
      updatedMentors,
    )
  }

  return (
    <div className="grid grid-cols-1">
      <div className="grid gap-8 p-8 lg:grid-cols-1">
        {mentors.map((mentor, index) => (
          <>
            <MentorFormSingleItem
              key={index}
              mentor={mentor}
              index={index}
              changeHandler={memoizedChangeHandler}
              removeHandler={remove}
            />

            {index + 1 < mentors?.length ? (
              <div
                key={'shadow_' + index}
                className="h-2 w-full bg-light-shadow"></div>
            ) : null}
          </>
        ))}
      </div>

      <div className="flex items-center justify-between px-8 pb-8">
        <Button
          loading={loading}
          disabled={loading}
          type={'default'}
          onClick={addNew}
          className={
            '!h-auto w-1/4 !border-none !bg-none !px-6 !py-2 font-medium !text-primary !outline-none md:w-1/4'
          }>
          + Add another teammate
        </Button>
        <Button
          loading={loading}
          disabled={loading}
          type={'default'}
          onClick={handleMentorsUpdate}
          className={
            '!h-auto w-1/4 !border-none !bg-light-shadow  !bg-primary  !px-6 !px-6 !py-2 !py-2 font-medium !text-white !outline-none !outline-none md:w-1/4'
          }>
          Save
        </Button>
      </div>
    </div>
  )
}
