import {Button} from "antd";

const KycIndicator = () => {
  return (
    <div className={"grid gap-2 p-6 border_gray bg-light-shadow rounded-xl"}>
      <div className={"flex"}>
        <div className="grid">
          <h5 className={"text-lg font-semibold text-black-lighter"}>Complete your KYC</h5>
          <p className={"!p-0 !m-0 text-sm text-typography-gray-400"}>
            To allow payments we require you to complete KYC
          </p>
        </div>
        <div>
          Percentage
        </div>
      </div>
      <Button type={"default"} size={"large"} className={"button_primary !text-white !my-3 !mb-0 !text-sm"} block>Continue
        procedure</Button>
    </div>
  )
}
export default KycIndicator