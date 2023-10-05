import {Button} from "antd";
import {cn} from "@/lib/utils";
import {useAppSelector} from "@/store/hooks";
import {DataInner} from "@/types";

const KycIndicator = ({className, hidden}: { className?: string, hidden?: boolean }) => {
  // const dispatch=useAppDispatch()
  const {user}: { user: DataInner } = useAppSelector((state) => state.authUser)
  return (
    <div
      className={cn("grid gap-2 p-6 border_gray bg-light-shadow rounded-xl" + " " + className + (hidden ? "hidden" : ""))}>
      <div className={"flex"}>
        <div className="grid">
          <h5 className={"text-lg font-semibold text-black-lighter"}>Complete your KYC</h5>
          <p className={"!p-0 !m-0 text-sm text-typography-gray-400"}>
            To allow payments we require you to complete KYC
          </p>
        </div>
        <div>
          {user && user.firstName}
        </div>
      </div>
      <Button type={"default"} size={"large"} className={"button_primary !text-white !my-3 !mb-0 !text-sm"} block>Continue
        procedure</Button>
    </div>
  )
}
export default KycIndicator