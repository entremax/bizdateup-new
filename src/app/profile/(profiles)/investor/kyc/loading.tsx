import React from 'react'

export default function Loading() {
  const loadingArray: number[] = Array.from({ length: 6 }, () => 0)

  return (
    <div className="grid grid-cols-1">
      <div className="grid grid-cols-1 gap-8 p-8 md:grid-cols-2 lg:grid-cols-3">
        {loadingArray.map((_, index) => (
          <React.Fragment key={index}>
            <div className="grid animate-pulse gap-2">
              <p className="text-md h-4 w-2/4 rounded-2xl bg-gray-300" />
            </div>
          </React.Fragment>
        ))}
      </div>
      <div className="h-2 w-full bg-light-shadow"></div>
    </div>
  )
}
