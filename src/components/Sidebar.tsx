"use client"
import { useState } from "react"
import { Icons } from "./ui/icon"

const Sidebar = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false)

    return (
        <>
            {!isOpen &&
                <Icons.BurgerMenu
                    height={28}
                    width={28}
                    alt='Menu'
                    onClick={() => setIsOpen(true)}
                />
            }
            {isOpen &&
                <div className="fixed z-20 bg-[#8686F5] lg:hidden h-full top-0 right-0 w-10/12 py-4 px-4 text-white">
                    <div className="flex">
                        <div className="grow"></div>
                        <Icons.Closed
                            height={32}
                            width={32}
                            alt='Closed'
                            onClick={() => setIsOpen(false)}
                        />
                    </div>
                    <div>
                        Invest
                    </div>
                </div>}
        </>
    )
}

export default Sidebar