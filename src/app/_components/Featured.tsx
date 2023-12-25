export default function Featured() {
  return (
    <div className="my-8 lg:px-[200px] xl:px-[270px]">
      <h6 className="mb-0 text-center text-[30px] font-bold lg:text-[44px]">
        Featured in
      </h6>
      <div className="mt-0 grid grid-cols-2 items-center justify-between gap-4 lg:flex">
        <div className="mx-auto p-2">
          <picture>
            <img src="/Zee.png" alt="Zee" width="100%" height="auto" />
          </picture>
        </div>
        <div className="mx-auto p-2">
          <picture>
            <img src="/Week.png" alt="Week" width="100%" height="auto" />
          </picture>
        </div>
        <div className="mx-auto p-2">
          <picture>
            <img src="/mid_day.png" alt="mid_day" width="100%" height="auto" />
          </picture>
        </div>
        <div className="mx-auto p-2">
          <picture>
            <img src="/outlook.png" alt="outlook" width="100%" height="auto" />
          </picture>
        </div>
      </div>
    </div>
  )
}
