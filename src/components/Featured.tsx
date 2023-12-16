import Image from "next/image";

export default function Featured() {
    return (<div className="lg:px-52 px-4">
        <h6 className="text-3xl sm:text-5xl text-center font-bold">Featured in</h6>
        <div className="-mt-10 lg:-mt-20 grid grid-cols-2 gap-8 lg:flex justify-between">
            <div className="p-2 mx-auto">
                <Image
                    src='/Zee.png'
                    height={50}
                    width={100}
                    alt="Zee"
                />
            </div>
            <div className="p-2 mx-auto">
                <Image
                    src='/Week.png'
                    height={50}
                    width={150}
                    alt="Week"
                />
            </div>
            <div className="p-2 mx-auto">
                <Image
                    src='/mid_day.png'
                    height={50}
                    width={150}
                    alt="Mid Day"
                />
            </div>
            <div className="p-2 mx-auto">
                <Image
                    src='/outlook.png'
                    height={50}
                    width={150}
                    alt="Outlook"
                />
            </div>
        </div>
    </div>)
}