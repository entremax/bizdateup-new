import React from 'react'
import { useClosedDealsMutation } from '@/services/startupApiSlice'
import { notifyUser } from '@/components/notification'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { setClosedDeals } from '@/reducers/user/startupSlice'
import StartupCard from '@/components/invest/startupCard'

export default function ClosedDeals() {
  const dispatch = useAppDispatch()
  const renderRef = React.useRef(0)
  const [closedDeals, { isLoading }] = useClosedDealsMutation()
  const { closedDeals: startups } = useAppSelector(({ startup }) => startup)
  React.useEffect(() => {
    if (renderRef.current === 0) {
      closedDeals('')
        .unwrap()
        .then((res) => {
          if (res) {
            dispatch(setClosedDeals(res))
          }
        })
        .catch((e) => {
          console.log(e)
          notifyUser('error', 'Something went wrong')
        })
      renderRef.current = renderRef.current + 1
    }
  }, [])
  return (
    <div className={'flex flex-col gap-4 px-4 lg:px-28 xl:px-32'}>
      <h3 className={'text-3xl font-semibold text-primary-dark'}>
        Closed Deals
      </h3>
      <div className="my-8 flex w-fit flex-wrap items-center justify-center gap-8">
        {startups.map((startup) => (
          <StartupCard key={startup._id} startup={startup} closed={true} />
        ))}
      </div>
    </div>
  )
}
