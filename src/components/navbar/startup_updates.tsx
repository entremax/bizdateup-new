import { Button } from 'antd'
import { useAppSelector } from '@/store/hooks'
import StartupUpdate from '@/components/StartupUpdate'

export default function StartupUpdatesDropDown() {
  const { updates } = useAppSelector((state) => state.startup)
  return (
    <div className="border_gray min-h-[14rem] w-[28rem] rounded-lg bg-white px-2 shadow-lg">
      <div className={'flex items-center justify-between p-4 px-3'}>
        <h2 className={'text-xl font-semibold'}>Startup Updates</h2>
        <Button
          type="link"
          href={'/startup/updates'}
          className={'!text-sm font-medium !text-primary'}
          size={'small'}>
          Show All
        </Button>
      </div>
      <div className="border_gray w-full"></div>
      {updates.length >= 0 ? (
        updates.map(
          ({ _id, startup, logo, company_name, title, created_at }) => (
            <StartupUpdate
              key={_id}
              component_type={'notification'}
              logo={logo}
              title={title}
              name={company_name}
              startup={startup}
              created={created_at}
            />
          ),
        )
      ) : (
        <div className="">Nothing to show</div>
      )}
    </div>
  )
}
