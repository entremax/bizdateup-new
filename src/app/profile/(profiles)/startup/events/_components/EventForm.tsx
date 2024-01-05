'use client'
import React, {  useCallback, useMemo, useState } from 'react'
import { StartupData, TeamMember } from '@/types/invest'
import EventFormSingleItem from './EventFormSingleItem'
import { Button } from 'antd'
import { DefaultOptionType } from 'rc-select/lib/Select'
import { DataStartup } from '@/types'
import { useRouter } from 'next/navigation'
import { useStartupUpdateContext } from '@/components/profile/startup/context';

export default function FaqForm({ initialUsers }: { initialUsers: StartupData }) {
  const router = useRouter()
  const [events, setEvents] = useState(initialUsers?.events);
  console.log("🚀 ~ file: EventForm.tsx:14 ~ FaqForm ~ events:", events)

  const { handleUpdate, loading } = useStartupUpdateContext()
  
  const handleProfileUpdate = async () => {
    const data = new FormData();
    data.append('refId', initialUsers._id);
    events?.forEach((item, index) => {
      if (item.url && item.date) {
        data.append(`_id[]`, item._id || "new");
        data.append(`url[]`, item.url);
        data.append(`time[]`, item.time);
        data.append(`date[]`, item.date);
        if (typeof item.banner == 'string') {
          data.append(`unchanged_file[]`, index);
        } else {
          data.append(`files`, item.banner);
          data.append(`changed_file[]`, index);
        }
      }
    });
    await handleUpdate(data, 'event')
    return router.refresh()
  }

  const changeHandler = useCallback((index: number, field: string, newData: any) => {
    console.log("🚀 ~ file: EventForm.tsx:44 ~ changeHandler ~ index:", index)
    console.log("🚀 ~ file: EventForm.tsx:44 ~ changeHandler ~ newData:", newData)
    console.log("🚀 ~ file: EventForm.tsx:44 ~ changeHandler ~ field:", field)

    setEvents((prevEvent) => {
      const updatedData = [...prevEvent];
      if (index >= 0 && index < updatedData.length) {
        updatedData[index][field] = newData;
        console.log("Updated Data:", updatedData);
        return updatedData;
      } else {
        console.error("Invalid index:", index);
        return prevEvent;
      }
    });
  }, []);

  const memoizedChangeHandler = useMemo(() => changeHandler, [changeHandler]);

  // Function to remove team member
  const remove = (index: number) => {
    setEvents((prevEvent) => {
      if (index >= 0 && index < prevEvent.length) {
        const deletedEvent = prevEvent[index];

        if (deletedEvent._id) {
          // console.log('Deleted team member with id:', deletedEventMember._id);
          const data = {
            refId:initialUsers._id,
            delId:deletedEvent._id
          }
          console.log("🚀 ~ file: TeamForm.tsx:87 ~ setTeamMembers ~ data:", data)
          handleUpdate(data , 'delete_event')
        }

        const updatedTeamMembers = [...prevEvent.slice(0, index), ...prevEvent.slice(index + 1)];

        return updatedTeamMembers;
      } else {
        console.error('Invalid index:', index);
        return prevEvent;
      }
    });
  };

  const addNew = () => {
    const temp = {
     banner: "",
      date: "",
      time: "",
      url: "",
      _id: "",
    };

    const updatedEvents = [...events, temp];

    setEvents(updatedEvents); 
    console.log("🚀 ~ file: MentorForm.tsx:105 ~ addNew ~ user:", updatedEvents);
  };

  return (
    <div className="grid grid-cols-1">
      <div className="grid gap-8 p-8 lg:grid-cols-1">
        {events?.map((event , index) =>
        <div key={index}>
          <EventFormSingleItem  
          event={event}
          //  key={index}
           indexx={index}
           changeHandler={memoizedChangeHandler}
           removeHandler={remove}
          />
          {index+1<events?.length?
          <div key={index} className="h-2 w-full bg-light-shadow"></div>:null
        }
          </div>
        )}
      </div>
      
      <div className="flex items-center justify-between px-8 pb-8">
        <Button
          loading={loading}
          disabled={loading}
          type={'default'}
          onClick={addNew}
          className={
            '!h-auto !border-none !bg-none !px-6 !py-2 font-medium !text-primary !outline-none w-1/4 md:w-1/4'
          }
          >
          + Add another question
        </Button>
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
