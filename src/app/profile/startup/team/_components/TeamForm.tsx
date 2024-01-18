'use client'
import React, { useCallback, useMemo, useState } from 'react'
import { Button, UploadProps } from 'antd'
import { DefaultOptionType } from 'rc-select/lib/Select'
import TeamFormSingleItem from '@/components/profile/startup/TeamFormSingleItem'
import { useStartupUpdateContext } from '@/components/profile/startup/context'
import { useRouter } from 'next/navigation'
import { StartupData, TeamMember } from '@/types/invest'
import SubmitComponent from '@/components/profile/SubmitComponent'

export default function TeamForm({
  initialUsers,
}: {
  initialUsers: StartupData
}) {
  const router = useRouter()
  const [teamMembers, setTeamMembers] = useState(initialUsers?.teamMembers)
  console.log('Team members:', teamMembers)

  const handleFileChange = (fieldName: string, event: UploadProps) => {
    console.log('File change event:', event)
    console.log('Field name:', fieldName)
  }

  const { handleUpdate, loading } = useStartupUpdateContext()

  const handleChange = (
    fieldName: any,
    value: DefaultOptionType | DefaultOptionType[],
  ) => {
    // Handle field change logic if needed
  }

  console.log(teamMembers)

  // Function to update team members
  const handleTeamMembersUpdate = async () => {
    const data = new FormData()
    data.append('refId', initialUsers._id)

    teamMembers?.forEach((item, index) => {
      console.log('Index:', index)
      if (item.fullName && item.linkedinUrl) {
        data.append(`_id[]`, item._id || 'new')
        data.append(`fullName[]`, item.fullName)
        data.append(`designation[]`, item.designation)
        data.append(`linkedinUrl[]`, item.linkedinUrl)

        if (typeof item.profileImage === 'string') {
          data.append(`unchanged_file[]`, index as unknown as string)
        } else {
          data.append(`files`, item.profileImage)
          data.append(`changed_file[]`, index as unknown as string)
        }
      }
    })

    await handleUpdate(data, 'team')
    return router.refresh()
  }

  const changeHandler = useCallback(
    (index: number, field: keyof TeamMember, newData: any) => {
      setTeamMembers((prevTeamMembers) => {
        const updatedData = [...prevTeamMembers]

        if (index >= 0 && index < updatedData.length) {
          updatedData[index][field] = newData
          console.log('Updated Data:', updatedData)
          return updatedData
        } else {
          console.error('Invalid index:', index)
          return prevTeamMembers
        }
      })
    },
    [],
  )

  const memoizedChangeHandler = useMemo(() => changeHandler, [changeHandler])

  const remove = (index: number) => {
    setTeamMembers((prevTeamMembers) => {
      if (index >= 0 && index < prevTeamMembers.length) {
        const deletedTeamMember = prevTeamMembers[index]

        if (deletedTeamMember._id) {
          console.log('Deleted team member with id:', deletedTeamMember._id)
          const data = {
            refId: initialUsers._id,
            delId: deletedTeamMember._id,
          }
          console.log(
            '🚀 ~ file: TeamForm.tsx:87 ~ setTeamMembers ~ data:',
            data,
          )
          handleUpdate(data, 'delete_team')
        }

        const updatedTeamMembers = [
          ...prevTeamMembers.slice(0, index),
          ...prevTeamMembers.slice(index + 1),
        ]

        return updatedTeamMembers
      } else {
        console.error('Invalid index:', index)
        return prevTeamMembers
      }
    })
  }

  // Function to add new team member
  const addNew = () => {
    const temp = {
      _id: '',
      fullName: '',
      description: '',
      linkedinUrl: '',
      profileImage: '',
      designation: '',
    }

    const updatedTeamMembers = [...teamMembers, temp]
    setTeamMembers(updatedTeamMembers)

    console.log('Added new team member:', updatedTeamMembers)
  }

  return (
    <div className="grid grid-cols-1">
      <div className="grid gap-8 p-8 lg:grid-cols-1">
        {teamMembers.map((teamMember, index) => (
          <>
            <TeamFormSingleItem
              key={index}
              teamMember={teamMember}
              index={index}
              changeHandler={memoizedChangeHandler}
              removeHandler={remove}
            />

            {index + 1 < teamMembers?.length ? (
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
        <SubmitComponent
          loading={loading}
          disabled={loading}
          type={'default'}
          onClick={handleTeamMembersUpdate}
        />
      </div>
    </div>
  )
}
