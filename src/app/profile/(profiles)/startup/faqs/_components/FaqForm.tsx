'use client'
import React, { useCallback, useMemo, useState } from 'react'
import { FAQ, StartupData } from '@/types/invest'
import FaqFormSingleItem from './FaqFormSingleItem'
import { Button } from 'antd'
import { useStartupUpdateContext } from '@/components/profile/startup/context'
import { useRouter } from 'next/navigation'

export default function FaqForm({
  initialUsers,
}: {
  initialUsers: StartupData
}) {
  const router = useRouter()
  const [faq, setFaq] = useState(initialUsersfaq)

  const { handleUpdate, loading } = useStartupUpdateContext)

  // console.log(user)
  const handleFaqUpdate = async () => {
    // const data = new FormData();
    // data.append('refId', initialUsers._id);

    // faq?.forEach((item, index) => {
    //   console.log("Index:", index);
    //   if (item.question && item.answer) {
    //     data.append(`_id[]`, item._id || "new");
    //     data.append(`question[]`, item.question);
    //     data.append(`answer[]`, item.answer);

    //   }
    // });
    const data = {
      refId: initialUsers._id,
      faqs: faq.map((item) => ({
        _id: item._id || 'new',
        question: item.question,
        answer: item.answer,
      })),
    }
    await handleUpdate(data, 'faq')
    return router.refresh()
  }

  const changeHandler = useCallback(
    (index: number, field: keyof FAQ, newData: any) => {
      setFaq((prevFaq) => {
        const updatedData = [...prevFaq]
        if (index >= 0 && index < updatedData.length) {
          updatedData[index][field] = newData
          console.log('Updated Data:', updatedData)
          return updatedData
        } else {
          console.error('Invalid index:', index)
          return prevFaq
        }
      })
    },
    [],
  )

  const memoizedChangeHandler = useMemo(() => changeHandler, [changeHandler])

  const remove = (index: number) => {
    setFaq((prevFaq) => {
      if (index >= 0 && index < prevFaq.length) {
        const deletedFaq = prevFaq[index]

        if (deletedFaq._id) {
          const data = {
            refId: initialUsers._id,
            delId: deletedFaq._id,
          }
          console.log(
            '🚀 ~ file: TeamForm.tsx:87 ~ setTeamMembers ~ data:',
            data,
          )
          handleUpdate(data, 'delete_faq')
        }

        return [...prevFaq.slice(0, index), ...prevFaq.slice(index + 1)]
      } else {
        console.error('Invalid index:', index)
        return prevFaq
      }
    })
  }

  const addNew = () => {
    const temp = {
      question: '',
      answer: '',
      _id: '',
    }

    const updatedFaq = [...faq, temp]

    setFaq(updatedFaq)

    console.log('🚀 ~ file: MentorForm.tsx:105 ~ addNew ~ user:', updatedFaq)
  }

  return (
    <div className="grid grid-cols-1">
      <div className="grid gap-8 p-8 lg:grid-cols-1">
        {faq.map((faqs, index) => (
          <>
            <FaqFormSingleItem
              key={index}
              faq={faqs}
              index={index}
              changeHandler={memoizedChangeHandler}
              removeHandler={remove}
            />
            {index + 1 < faq?.length ? (
              <div key={index} className="h-2 w-full bg-light-shadow"></div>
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
          + Add another question
        </Button>
        <Button
          loading={loading}
          disabled={loading}
          type={'default'}
          onClick={handleFaqUpdate}
          className={
            '!h-auto   w-1/4 !border-none !bg-primary !px-6 !py-2 font-medium !text-white !outline-none md:w-1/4'
          }>
          Save
        </Button>
      </div>
    </div>
  )
}
