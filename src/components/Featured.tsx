import Image from "next/image";

export default function Featured() {
    return (<div className="lg:px-[200px] xl:px-[270px]">
        <h6 className="lg:text-[44px] text-[30px] text-center font-bold mb-0">Featured in</h6>
        <div className="mt-0 grid grid-cols-2 gap-4 lg:flex items-center justify-between">
            <div className="p-2 mx-auto">
                <picture>
                    <img src="/Zee.png" alt="Zee" width='100%' height='auto' />
                </picture>
            </div>
            <div className="p-2 mx-auto">
                <picture>
                    <img src="/Week.png" alt="Week" width='100%' height='auto' />
                </picture>
            </div>
            <div className="p-2 mx-auto">
                <picture>
                    <img src="/mid_day.png" alt="mid_day" width='100%' height='auto' />
                </picture>
            </div>
            <div className="p-2 mx-auto">
                <picture>
                    <img src="/outlook.png" alt="outlook" width='100%' height='auto' />
                </picture>

            </div>
        </div>
    </div>)
}