export default function RegisterSuccess() {
  return (
    <div className="flex  items-center justify-center bg-[#fafafa] p-4 md:py-16">
      <div className="flex w-full gap-x-8  ">
        <div className="m-auto box-border flex w-full justify-center rounded-[10px] border border-solid border-[#DDDDDD] bg-[#ffffff] p-4 md:w-[75%] ">
          <div className="flex flex-col items-center justify-center ">
            <div className=" flex h-[170px] w-[170px] items-center justify-center rounded-[50%] bg-[#E8EAF8] md:h-[239px] md:w-[288px]">
              {/*<img src={cta23} alt="" className=" w-[100px] md:w-[150px]" />*/}
            </div>
            <div className="mt-6">
              <label className="font-[inter] text-3xl font-medium not-italic leading-[45px] text-[#252525] ">
                Congratulations on your first step of fundraising
              </label>
            </div>
            <div>
              <p className="font-[inter] text-lg font-medium not-italic leading-6 text-[#828F99]">
                While we go through your details you can go check startups
                onboarded by us.
              </p>
            </div>
            <button
              // onClick={gotohome}
              className="mt-4 h-[42px] w-[173px] rounded-[10px] bg-[#202054] font-[inter] text-base font-normal not-italic leading-[19px] text-[#ffffff]">
              Go to Raise Funds
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
