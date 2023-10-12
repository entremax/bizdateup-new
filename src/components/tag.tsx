import React from "react";
import {Campaign} from "@/types";

export function StartupTag({startup}: { startup: Campaign }) {
  return (
    <>
      <div className='flex flex-wrap gap-2 mt-2'>
        {startup.tags.map((tag) =>
          tag.split(',').map((t) => (
            <span
              key={t}
              className={
                '!p-0 !px-1 py-1 bg-gray-200  text-black-light !text-xs font-medium flex items-center rounded '
              }
            >
                          {t}
              </span>
          ))
        )}
      </div>
    
    </>
  )
}