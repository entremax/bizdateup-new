import React from 'react'

export function StartupTag({ tags }: { tags: string[] }) {
  return (
    <>
      <div className="mt-2 flex flex-wrap gap-2">
        {tags.map((tag) =>
          tag.split(',').map((t) => (
            <span
              key={t}
              className={
                '!text-black-light flex items-center rounded  bg-gray-200 !p-0 !px-1 py-1 !text-xs font-medium '
              }>
              {t}
            </span>
          )),
        )}
      </div>
    </>
  )
}
