import { cn } from "@/lib/utils";

export default function Button({ title, className }:
    {
        title: string
        className?: string
    }) {
    return (
        <div className="mx-auto flex justify-center lg:justify-normal w-full mt-6">
            <button className={cn("text-[#fff] bg-[#8686F5] hover:bg-[#7d7df5] md:w-[215px] w-full rounded-[7.563px] border-[#8686F5] border-none py-[16px] px-[20px] outline-[#8686F5] cursor-pointer font-medium text-[17.647px]", className)}>{title}</button>
        </div>
    )
}